// 主要頁面邏輯

let currentFilter = '';
let selectedCaseId = null;

// 渲染案件列表
function renderCaseList(filter = '') {
  const container = document.getElementById('caseListItems');
  let filteredData = filter ? mockData.filter(item => item.status === filter) : mockData;
  
  if (filteredData.length === 0) {
    container.innerHTML = '<p class="text-muted text-center" style="padding: 20px;">沒有符合的案件</p>';
    return;
  }
  
  container.innerHTML = filteredData.map(item => {
    const statusInfo = getStatusDisplay(item.status);
    const isSelected = item.id === selectedCaseId ? 'selected' : '';
    
    return `
      <div class="case-item ${isSelected}" onclick="selectCase(${item.id})">
        <div class="case-item-header">
          <span class="case-item-name">${item.name}</span>
          <span class="case-status" style="background-color: ${statusInfo.bgColor}; color: ${statusInfo.color};">
            ${statusInfo.icon} ${statusInfo.text}
          </span>
        </div>
        <div class="case-item-info">
          ${item.originalGroup} → ${item.newGroup}
        </div>
        <div class="case-item-info text-muted">
          申請日期：${formatDate(item.applicationDate)}
        </div>
      </div>
    `;
  }).join('');
}

// 選擇案件並顯示詳情
function selectCase(id) {
  selectedCaseId = id;
  const caseData = getCaseById(id);
  
  if (!caseData) return;
  
  renderCaseList(currentFilter); // 更新列表選中狀態
  renderCaseDetail(caseData);
}

// 渲染案件詳情
function renderCaseDetail(caseData) {
  const container = document.getElementById('caseDetail');
  const statusInfo = getStatusDisplay(caseData.status);
  const progress = calculateProgress(caseData.weeklyTracking);
  
  container.innerHTML = `
    <div class="detail-header">
      <div class="detail-title">
        <h2>${caseData.name}</h2>
        <div class="detail-meta">
          <span class="case-status" style="background-color: ${statusInfo.bgColor}; color: ${statusInfo.color}; padding: 6px 12px; border-radius: 16px; font-size: 14px;">
            ${statusInfo.icon} ${statusInfo.text}
          </span>
        </div>
      </div>
      <div class="detail-actions">
        <button class="btn btn-outline" onclick="printReport()">📄 列印報告</button>
        <button class="btn btn-primary" onclick="downloadPDF(getCaseById(${caseData.id}))">⬇️ 下載PDF</button>
      </div>
    </div>
    
    <div class="info-grid">
      <div class="info-item">
        <div class="info-label">原小組</div>
        <div class="info-value">${caseData.originalGroup}</div>
      </div>
      <div class="info-item">
        <div class="info-label">新小組</div>
        <div class="info-value">${caseData.newGroup}</div>
      </div>
      <div class="info-item">
        <div class="info-label">原區牧</div>
        <div class="info-value">${caseData.originalPastor}</div>
      </div>
      <div class="info-item">
        <div class="info-label">新區牧</div>
        <div class="info-value">${caseData.newPastor}</div>
      </div>
      <div class="info-item">
        <div class="info-label">原小組長</div>
        <div class="info-value">${caseData.originalLeader}</div>
      </div>
      <div class="info-item">
        <div class="info-label">新小組長</div>
        <div class="info-value">${caseData.newLeader}</div>
      </div>
      <div class="info-item" style="grid-column: 1 / -1;">
        <div class="info-label">轉組原因</div>
        <div class="info-value">${caseData.reason}</div>
      </div>
      <div class="info-item">
        <div class="info-label">申請日期</div>
        <div class="info-value">${formatDate(caseData.applicationDate)}</div>
      </div>
      <div class="info-item">
        <div class="info-label">追蹤進度</div>
        <div class="info-value">${progress.completed} / 7 週 (${progress.percentage}%)</div>
      </div>
    </div>
    
    ${renderApprovalSection(caseData)}
    ${renderTrackingTimeline(caseData)}
    ${renderEvaluationSection(caseData)}
    ${renderDecisionSection(caseData)}
  `;
}

// 渲染簽核區塊
function renderApprovalSection(caseData) {
  return `
    <div class="card">
      <div class="card-header">區牧簽核狀態</div>
      <div class="card-body">
        <div class="info-grid">
          <div class="info-item">
            <div class="info-label">原區牧簽核</div>
            <div class="info-value">
              ${caseData.originalPastorApproved ? 
                `✅ 已簽核 (${formatDate(caseData.originalPastorDate)})` : 
                '⏳ 待簽核'}
            </div>
          </div>
          <div class="info-item">
            <div class="info-label">新區牧簽核</div>
            <div class="info-value">
              ${caseData.newPastorApproved ? 
                `✅ 已簽核 (${formatDate(caseData.newPastorDate)})` : 
                '⏳ 待簽核'}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// 渲染追蹤時間軸
function renderTrackingTimeline(caseData) {
  if (!caseData.originalPastorApproved || !caseData.newPastorApproved) {
    return '';
  }
  
  return `
    <div class="card">
      <div class="card-header">7週交叉關心追蹤</div>
      <div class="card-body">
        <div class="timeline">
          ${[1, 2, 3, 4, 5, 6, 7].map(week => {
            const weekData = caseData.weeklyTracking[`week${week}`];
            const isCompleted = weekData.original && weekData.new;
            return `
              <div class="timeline-week ${isCompleted ? 'completed' : ''}">
                <div class="week-number">第${week}週</div>
                <div class="week-status">
                  <div class="status-indicator">
                    <span class="status-icon">${weekData.original ? '✅' : '⏳'}</span>
                    <span>原小組長</span>
                  </div>
                  <div class="status-indicator">
                    <span class="status-icon">${weekData.new ? '✅' : '⏳'}</span>
                    <span>新小組長</span>
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
        <div class="progress-bar">
          <div class="progress-bar-fill" style="width: ${calculateProgress(caseData.weeklyTracking).percentage}%"></div>
        </div>
      </div>
    </div>
  `;
}

// 渲染評估區塊
function renderEvaluationSection(caseData) {
  if (!canEvaluate(caseData)) {
    return '';
  }
  
  return `
    <div class="card">
      <div class="card-header">小組長評估</div>
      <div class="card-body">
        <div class="info-grid">
          <div class="info-item">
            <div class="info-label">原小組長評分</div>
            <div class="info-value">${renderStars(caseData.evaluation.originalLeaderScore)}</div>
            ${caseData.evaluation.originalLeaderComment ? 
              `<div class="info-label mt-2">評語</div>
               <div class="info-value">${caseData.evaluation.originalLeaderComment}</div>` : ''}
          </div>
          <div class="info-item">
            <div class="info-label">新小組長評分</div>
            <div class="info-value">${renderStars(caseData.evaluation.newLeaderScore)}</div>
            ${caseData.evaluation.newLeaderComment ? 
              `<div class="info-label mt-2">評語</div>
               <div class="info-value">${caseData.evaluation.newLeaderComment}</div>` : ''}
          </div>
          ${caseData.evaluation.originalPastorSummary ?
            `<div class="info-item">
              <div class="info-label">原區牧統整</div>
              <div class="info-value">${caseData.evaluation.originalPastorSummary}</div>
            </div>` : ''}
          ${caseData.evaluation.newPastorSummary ?
            `<div class="info-item">
              <div class="info-label">新區牧統整</div>
              <div class="info-value">${caseData.evaluation.newPastorSummary}</div>
            </div>` : ''}
        </div>
      </div>
    </div>
  `;
}

// 渲染決議區塊
function renderDecisionSection(caseData) {
  if (!caseData.decision.result) {
    return '';
  }
  
  const resultColor = caseData.decision.result === '同意' ? 'var(--success-color)' : 
                      caseData.decision.result === '暫緩' ? 'var(--warning-color)' : 
                      'var(--danger-color)';
  
  return `
    <div class="card">
      <div class="card-header">牧養決議</div>
      <div class="card-body">
        <div class="info-item">
          <div class="info-label">決議結果</div>
          <div class="info-value" style="color: ${resultColor}; font-size: 20px; font-weight: 700;">
            ${caseData.decision.result}
          </div>
        </div>
        <div class="info-item mt-2">
          <div class="info-label">決議說明</div>
          <div class="info-value">${caseData.decision.comment}</div>
        </div>
        <div class="info-item mt-2">
          <div class="info-label">決議日期</div>
          <div class="info-value">${formatDate(caseData.decision.date)}</div>
        </div>
      </div>
    </div>
  `;
}

// 篩選器切換
function setupFilters() {
  const filterTabs = document.querySelectorAll('.filter-tab');
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // 移除所有active類別
      filterTabs.forEach(t => t.classList.remove('active'));
      // 添加active到當前按鈕
      tab.classList.add('active');
      // 更新篩選器
      currentFilter = tab.dataset.status;
      renderCaseList(currentFilter);
    });
  });
}

// 頁面載入時初始化
document.addEventListener('DOMContentLoaded', () => {
  renderCaseList();
  setupFilters();
  
  // 顯示統計數據
  const stats = getStatistics();
  console.log('系統統計：', stats);
});
