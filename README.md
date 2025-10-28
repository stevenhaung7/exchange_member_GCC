# 教會轉組管理系統 (Exchange Member Management System)

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![HTML](https://img.shields.io/badge/HTML-5-orange.svg)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS-3-blue.svg)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

一個基於純前端技術打造的教會小組轉組管理系統，將靜態的評估表轉變為動態、協作、具備流程管控功能的線上作業系統。

![系統截圖](assets/screenshot.png)

## 📖 專案簡介

本系統旨在優化教會小組轉組流程，透過數位化管理實現：
- ✅ **動態追蹤**：7 週交叉關心逐週記錄
- ✅ **角色分工**：申請人、區牧、小組長、牧養團隊、資處各司其職
- ✅ **流程卡控**：自動狀態管理，確保流程正確進行
- ✅ **報告輸出**：支援 PDF 下載與列印功能

## 🎯 核心功能

### 1. 總覽看板
- 案件列表與詳情的分割檢視（左列表右詳情）
- 狀態篩選（申請中、簽核中、交叉關心中等）
- 7 週追蹤進度視覺化（時間軸設計）
- 完整案件資訊展示

### 2. 申請轉組
- 線上填寫轉組申請表單
- 自動通知相關區牧（模擬）

### 3. 區牧簽核與統整
- 原區牧與新區牧線上簽核
- 7 週後填寫統整建議

### 4. 小組長追蹤
- 逐週打勾記錄交叉關心狀況
- 7 週完成後填寫評估（1-5 分評分）

### 5. 牧養決議
- 審核完整評估資料
- 作出最終決議（同意/暫緩/不同意）

### 6. 資處登錄
- 確認系統資料更新
- 案件結案處理

### 7. 報告下載
- 列印報告（瀏覽器列印）
- 下載 PDF 報告

## 👥 角色與權限

| 角色 | 權限 | 主要功能 |
|------|------|---------|
| **申請人（組員）** | 填寫申請 | 提交轉組申請表單 |
| **原區牧** | 簽核、統整 | 簽核申請、7週後統整建議 |
| **新區牧** | 簽核、統整 | 簽核申請、7週後統整建議 |
| **原小組長** | 追蹤、評估 | 7週逐週打勾、評估打分 |
| **新小組長** | 追蹤、評估 | 7週逐週打勾、評估打分 |
| **牧養團隊** | 決議 | 審核評估、作出最終決定 |
| **資處/資圖** | 登錄 | 系統資料更新確認 |

## 🔄 執行流程

```
1. 申請啟動 (組員)
   ↓
2. 區牧簽核 (原區牧 + 新區牧)
   ↓
3. 交叉關心 (7週追蹤，原小組長 + 新小組長)
   ↓
4. 小組長評估 (7週後，評分與建議)
   ↓
5. 區牧統整 (綜合建議)
   ↓
6. 牧養決議 (最終決定)
   ↓
7. 行政登錄 (資處確認)
   ↓
✅ 已轉組
```

## 🛠️ 技術架構

### 前端技術
- **HTML5**：語義化標籤
- **CSS3**：現代簡約設計風格
  - CSS Variables（自訂屬性）
  - Flexbox & Grid 布局
  - 響應式設計（RWD）
- **Vanilla JavaScript (ES6+)**：無框架依賴
  - 模組化設計
  - 事件驅動架構
- **Google Fonts**：Noto Sans TC 中文字體

### 外部套件
- **jsPDF**：PDF 報告生成

### 資料儲存
- 純前端模擬資料（硬編碼在 `data.js`）
- 可選：LocalStorage 持久化（已實作但未啟用）

## 📁 專案結構

```
exchange_member_GCC/
├── index.html              # 主頁面（總覽看板）
├── pages/                  # 角色頁面
│   ├── applicant.html      # 申請人頁面
│   ├── district-pastor.html # 區牧頁面
│   ├── leader.html         # 小組長頁面
│   ├── pastoral-team.html  # 牧養團隊頁面
│   └── admin.html          # 資處頁面
├── css/
│   └── style.css           # 全域樣式
├── js/
│   ├── data.js             # 模擬資料（5組案件）
│   ├── utils.js            # 工具函數
│   └── main.js             # 主要邏輯
├── assets/                 # 資源檔案
└── README.md               # 專案說明
```

## 🚀 線上展示

### 🌐 GitHub Pages（推薦）

本系統已部署至 GitHub Pages，可直接線上使用：

**🔗 https://stevenhaung7.github.io/exchange_member_GCC/**

#### 功能頁面連結：
- 📊 [總覽看板](https://stevenhaung7.github.io/exchange_member_GCC/)
- 📝 [申請轉組](https://stevenhaung7.github.io/exchange_member_GCC/pages/applicant.html)
- ✅ [區牧簽核](https://stevenhaung7.github.io/exchange_member_GCC/pages/district-pastor.html)
- 👥 [小組長追蹤](https://stevenhaung7.github.io/exchange_member_GCC/pages/leader.html)
- 🤝 [牧養決議](https://stevenhaung7.github.io/exchange_member_GCC/pages/pastoral-team.html)
- 🖥️ [資處登錄](https://stevenhaung7.github.io/exchange_member_GCC/pages/admin.html)

#### 特點：
- ✅ 全球 CDN 加速
- ✅ HTTPS 安全連線
- ✅ 無需安裝，開啟即用
- ✅ 支援手機、平板、電腦
- ✅ 自動部署（推送代碼自動更新）

---

## 💻 本地開發

若需要在本機開發或測試，可使用以下方式：

### 方法一：使用 Python HTTP Server

```powershell
# 進入專案目錄
cd c:\exchange_member_GCC

# 啟動伺服器（Python 3）
python -m http.server 8000

# 或使用 Python 2
python -m SimpleHTTPServer 8000
```

### 方法二：使用 Node.js http-server

```powershell
# 安裝 http-server（首次使用）
npm install -g http-server

# 啟動伺服器
http-server -p 8000
```

### 方法三：使用 VS Code Live Server

1. 安裝 VS Code 擴充套件：**Live Server**
2. 在 `index.html` 上按右鍵
3. 選擇 **Open with Live Server**

### 存取本地系統

開啟瀏覽器，前往：
```
http://localhost:8000
```

## 📊 模擬資料說明

系統內建 20 組模擬案件，涵蓋完整生命週期與各種情境：

### 申請與簽核階段（案件 1-3）
1. **王小明**：申請中（剛提交，等待雙方區牧簽核）
2. **劉美玲**：申請中（昨天申請，新婚夫妻情境）
3. **張志豪**：簽核中（原區牧已簽，等新區牧）

### 追蹤階段（案件 4-8）
4. **李小華**：第1週追蹤中
5. **吳建國**：第2週追蹤中（原組長延遲打勾情境）
6. **陳雅婷**：第3週追蹤中（正常進行）
7. **黃文傑**：第5週追蹤中（職涯轉換情境）
8. **林淑芬**：第6週追蹤中（搬家情境）

### 評估階段（案件 9-12）
9. **張小英**：7週完成，等待雙方小組長評估
10. **趙宇軒**：7週完成，原組長已評估，等新組長
11. **鄭佳慧**：小組長評估完成，等區牧統整
12. **蔡明哲**：原區牧已統整，等新區牧統整（創業情境）

### 決議階段（案件 13-15）
13. **陳大明**：區牧統整完成，等牧養決議（身體因素情境）
14. **周怡君**：決議同意，等資處登錄（照顧長輩情境）
15. **楊志明**：決議暫緩，人際關係需輔導（特殊情境）

### 已完成案件（案件 16-20）
16. **林小芳**：已轉組（最近完成，職涯發展）
17. **王筱萍**：已轉組（學生畢業轉職青）
18. **洪俊傑**：已轉組（退休後轉組）
19. **陳柏宇**：已轉組（新婚夫妻轉家庭組）
20. **謝惠娟**：已轉組（最早期案例，轉職情境）

### 涵蓋的特殊情境
- ✅ 工作地點調整
- ✅ 新婚夫妻合組
- ✅ 搬家距離因素
- ✅ 身體健康考量
- ✅ 照顧長輩需求
- ✅ 職涯轉換發展
- ✅ 創業後需求
- ✅ 退休後調整
- ✅ 學生畢業轉型
- ✅ 人際關係問題（暫緩案例）
- ✅ 屬靈成長突破
- ✅ 孩子成長需求

## 🎨 設計特色

### 現代簡約風格
- **配色**：藍色系主色調（#2563eb）
- **字體**：Google Fonts - Noto Sans TC
- **布局**：側邊欄導覽 + 主內容區
- **元素**：圓角卡片、柔和陰影、微互動

### 響應式設計
- 桌面版（> 992px）：側邊欄 + 雙欄布局
- 平板版（768-992px）：側邊欄 + 單欄布局
- 手機版（< 768px）：全寬布局

### 視覺化元素
- 🎯 狀態徽章（顏色區分）
- 📊 進度條（7 週完成度）
- ⏱️ 時間軸（7 週追蹤視覺化）
- ⭐ 星星評分（1-5 分）

## 📝 使用說明

### 作為申請人
1. 點選側邊欄「申請轉組」
2. 填寫完整申請表單
3. 送出後等待區牧簽核

### 作為區牧
1. 進入「區牧簽核」頁面
2. 查看待簽核案件並點擊「簽核同意」
3. 7 週後填寫統整建議

### 作為小組長
1. 進入「小組長追蹤」頁面
2. 每週點擊對應週次按鈕打勾
3. 7 週完成後填寫評估（評分 + 建議）

### 作為牧養團隊
1. 進入「牧養決議」頁面
2. 審核完整評估資料
3. 選擇決議結果並填寫說明

### 作為資處
1. 進入「資處登錄」頁面
2. 確認系統資料更新完成
3. 點擊「確認登錄完成」結案

## 🔧 自訂與擴充

### 修改模擬資料
編輯 `js/data.js` 檔案，新增或修改案件資料。

### 調整配色
修改 `css/style.css` 中的 CSS Variables：
```css
:root {
  --primary-color: #2563eb;  /* 主色 */
  --success-color: #10b981;  /* 成功色 */
  /* ... 其他顏色 */
}
```

### 新增功能
在 `js/main.js` 或各頁面的 `<script>` 區塊中擴充功能。

## 🐛 系統說明

### 📌 本系統特性

本專案為**靜態網頁展示系統**，適用於：
- ✅ 流程展示與需求確認
- ✅ 介面設計與使用者體驗測試
- ✅ 系統原型（Prototype）展示

### ⚠️ 已知限制

由於為純前端靜態網頁：

- ❌ **資料不持久**：重新整理頁面後，新增/修改的資料會還原為預設模擬資料
- ❌ **無多人協作**：每個使用者看到的資料是獨立的，無法同步
- ❌ **無真實通知**：Email/LINE 通知僅為模擬訊息
- ❌ **無帳號系統**：無使用者登入與權限管理

### 🚀 升級為動態網頁

若需要實際上線使用，建議升級為**動態網頁系統**，包含：

#### 後端技術
- **伺服器**：Node.js + Express / Python + FastAPI
- **資料庫**：PostgreSQL / MySQL / MongoDB
- **認證**：JWT / OAuth 2.0
- **API**：RESTful API 設計

#### 新增功能
- ✅ 真實資料庫存儲（資料永久保存）
- ✅ 多人協作（所有人看到同一份資料）
- ✅ 帳號登入與權限管理
- ✅ Email/LINE 自動通知
- ✅ 資料統計與報表匯出
- ✅ 檔案上傳功能
- ✅ 操作記錄與稽核追蹤

#### 部署方案
- **雲端服務**：AWS / Google Cloud / Azure
- **費用預估**：約 $10-50 USD/月（視使用量）
- **開發時間**：約 4-8 週

---

## 🔄 自動部署

本專案使用 **GitHub Actions** 實現自動部署：

- 每次推送代碼到 `main` 分支
- 自動觸發部署流程
- 1-2 分鐘後網站自動更新

查看部署狀態：
```
https://github.com/stevenhaung7/exchange_member_GCC/actions
```

## 📄 授權

本專案採用 MIT 授權。

## 👨‍💻 作者

GitHub Copilot

## 🙏 致謝

- Google Fonts 提供優質中文字體
- jsPDF 提供 PDF 生成功能
- 教會同工的需求啟發與回饋

## 📮 聯絡方式

如有問題或建議，歡迎透過以下方式聯繫：
- 📧 Email: [your-email@example.com]
- 🐛 Issue: [GitHub Issues]

---

**願神祝福這個系統，幫助教會的牧養工作更有效率！** 🙏✨
