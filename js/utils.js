// 工具函數

// 格式化日期
function formatDate(dateString) {
  if (!dateString) return '-';
  const date = new Date(dateString);
  return date.toLocaleDateString('zh-TW', { year: 'numeric', month: '2-digit', day: '2-digit' });
}

// 取得狀態顯示資訊
function getStatusDisplay(status) {
  const statusMap = {
    '申請中': { text: '申請中', icon: '📝', color: '#1f2937', bgColor: '#f3f4f6' },
    '簽核中': { text: '簽核中', icon: '✍️', color: '#ea580c', bgColor: '#fed7aa' },
    '交叉關心中': { text: '交叉關心中', icon: '👥', color: '#0284c7', bgColor: '#bae6fd' },
    '評估中': { text: '評估中', icon: '📊', color: '#7c3aed', bgColor: '#ddd6fe' },
    '決議中': { text: '決議中', icon: '⚖️', color: '#be123c', bgColor: '#fecdd3' },
    '資處更新中': { text: '資處更新中', icon: '💼', color: '#0891b2', bgColor: '#a5f3fc' },
    '已轉組': { text: '已轉組', icon: '✅', color: '#047857', bgColor: '#a7f3d0' }
  };
  return statusMap[status] || { text: status, icon: '❓', color: '#6b7280', bgColor: '#e5e7eb' };
}

// 計算7週追蹤進度
function calculateProgress(weeklyTracking) {
  let completedWeeks = 0;
  for (let i = 1; i <= 7; i++) {
    const week = weeklyTracking[`week${i}`];
    if (week.original && week.new) {
      completedWeeks++;
    }
  }
  return {
    completed: completedWeeks,
    total: 7,
    percentage: Math.round((completedWeeks / 7) * 100)
  };
}

// 判斷是否可以進行評估（7週都完成）
function canEvaluate(caseData) {
  const progress = calculateProgress(caseData.weeklyTracking);
  return progress.completed === 7;
}

// 顯示通知訊息
function showNotification(message, type = 'success') {
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.innerHTML = `
    <span>${type === 'success' ? '✅' : '❌'}</span>
    <span>${message}</span>
  `;
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.remove();
  }, 3000);
}

// 取得案件資料
function getCaseById(id) {
  return mockData.find(item => item.id === id);
}

// 更新案件資料
function updateCase(id, updates) {
  const caseData = getCaseById(id);
  if (caseData) {
    Object.assign(caseData, updates);
  }
}

// 下載PDF報告（使用jsPDF）
function downloadPDF(caseData) {
  // 此處為簡化版，實際需要引入jsPDF庫
  alert('PDF下載功能需要引入jsPDF庫\n\n案件：' + caseData.name + '\n狀態：' + caseData.status);
}

// 列印報告
function printReport() {
  window.print();
}

// 渲染星星評分
function renderStars(score) {
  if (!score) return '<span class="text-muted">尚未評分</span>';
  let stars = '';
  for (let i = 1; i <= 5; i++) {
    stars += i <= score ? '⭐' : '☆';
  }
  return `${stars} (${score}/5)`;
}

// LocalStorage 操作（預留功能）
function saveCasesToStorage() {
  localStorage.setItem('exchangeCases', JSON.stringify(mockData));
}

function loadCasesFromStorage() {
  const data = localStorage.getItem('exchangeCases');
  return data ? JSON.parse(data) : null;
}

// 計算統計數據
function getStatistics() {
  return {
    total: mockData.length,
    pending: mockData.filter(c => c.status === '申請中').length,
    approving: mockData.filter(c => c.status === '簽核中').length,
    tracking: mockData.filter(c => c.status === '交叉關心中').length,
    evaluating: mockData.filter(c => c.status === '評估中').length,
    deciding: mockData.filter(c => c.status === '決議中').length,
    processing: mockData.filter(c => c.status === '資處更新中').length,
    completed: mockData.filter(c => c.status === '已轉組').length
  };
}
