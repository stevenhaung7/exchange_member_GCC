// 模擬資料 - 20組案件
const mockData = [
  // 申請中 (2)
  {
    id: 1,
    name: '王小明',
    originalGroup: '青年A組',
    newGroup: '青年B組',
    originalPastor: '李區牧',
    newPastor: '陳區牧',
    originalLeader: '張牧師',
    newLeader: '陳傳道',
    reason: '工作地點調整，新公司較靠近青年B組聚會地點',
    applicationDate: '2024-10-25',
    status: '申請中',
    originalPastorApproved: false,
    newPastorApproved: false,
    weeklyTracking: {
      week1: { original: false, new: false },
      week2: { original: false, new: false },
      week3: { original: false, new: false },
      week4: { original: false, new: false },
      week5: { original: false, new: false },
      week6: { original: false, new: false },
      week7: { original: false, new: false }
    },
    evaluation: {
      originalLeaderScore: null,
      originalLeaderComment: '',
      newLeaderScore: null,
      newLeaderComment: '',
      originalPastorSummary: '',
      newPastorSummary: ''
    },
    decision: {
      result: '',
      comment: '',
      date: ''
    },
    adminCompleted: false
  },
  {
    id: 2,
    name: '劉美玲',
    originalGroup: '家庭C組',
    newGroup: '家庭D組',
    originalPastor: '陳區牧',
    newPastor: '王區牧',
    originalLeader: '林姊妹',
    newLeader: '王弟兄',
    reason: '新婚夫妻希望與先生同組',
    applicationDate: '2024-10-24',
    status: '申請中',
    originalPastorApproved: false,
    newPastorApproved: false,
    weeklyTracking: {
      week1: { original: false, new: false },
      week2: { original: false, new: false },
      week3: { original: false, new: false },
      week4: { original: false, new: false },
      week5: { original: false, new: false },
      week6: { original: false, new: false },
      week7: { original: false, new: false }
    },
    evaluation: {
      originalLeaderScore: null,
      originalLeaderComment: '',
      newLeaderScore: null,
      newLeaderComment: '',
      originalPastorSummary: '',
      newPastorSummary: ''
    },
    decision: {
      result: '',
      comment: '',
      date: ''
    },
    adminCompleted: false
  },
  // 簽核中 (1)
  {
    id: 3,
    name: '張志豪',
    originalGroup: '青年B組',
    newGroup: '社青A組',
    originalPastor: '陳區牧',
    newPastor: '李區牧',
    originalLeader: '陳傳道',
    newLeader: '趙傳道',
    reason: '畢業開始工作，希望轉至社青組',
    applicationDate: '2024-10-20',
    status: '簽核中',
    originalPastorApproved: true,
    originalPastorDate: '2024-10-21',
    newPastorApproved: false,
    weeklyTracking: {
      week1: { original: false, new: false },
      week2: { original: false, new: false },
      week3: { original: false, new: false },
      week4: { original: false, new: false },
      week5: { original: false, new: false },
      week6: { original: false, new: false },
      week7: { original: false, new: false }
    },
    evaluation: {
      originalLeaderScore: null,
      originalLeaderComment: '',
      newLeaderScore: null,
      newLeaderComment: '',
      originalPastorSummary: '',
      newPastorSummary: ''
    },
    decision: {
      result: '',
      comment: '',
      date: ''
    },
    adminCompleted: false
  },
  // 交叉關心中 (5)
  {
    id: 4,
    name: '李小華',
    originalGroup: '社青A組',
    newGroup: '社青B組',
    originalPastor: '李區牧',
    newPastor: '李區牧',
    originalLeader: '趙傳道',
    newLeader: '錢姊妹',
    reason: '搬家至新址，距離社青B組較近',
    applicationDate: '2024-10-15',
    status: '交叉關心中',
    originalPastorApproved: true,
    originalPastorDate: '2024-10-16',
    newPastorApproved: true,
    newPastorDate: '2024-10-16',
    trackingStartDate: '2024-10-18',
    weeklyTracking: {
      week1: { original: true, new: true },
      week2: { original: false, new: false },
      week3: { original: false, new: false },
      week4: { original: false, new: false },
      week5: { original: false, new: false },
      week6: { original: false, new: false },
      week7: { original: false, new: false }
    },
    evaluation: {
      originalLeaderScore: null,
      originalLeaderComment: '',
      newLeaderScore: null,
      newLeaderComment: '',
      originalPastorSummary: '',
      newPastorSummary: ''
    },
    decision: {
      result: '',
      comment: '',
      date: ''
    },
    adminCompleted: false
  },
  {
    id: 5,
    name: '吳建國',
    originalGroup: '家庭A組',
    newGroup: '家庭B組',
    originalPastor: '王區牧',
    newPastor: '王區牧',
    originalLeader: '孫弟兄',
    newLeader: '周姊妹',
    reason: '孩子成長需求，希望與有相似年齡孩子的家庭同組',
    applicationDate: '2024-10-10',
    status: '交叉關心中',
    originalPastorApproved: true,
    originalPastorDate: '2024-10-11',
    newPastorApproved: true,
    newPastorDate: '2024-10-11',
    trackingStartDate: '2024-10-13',
    weeklyTracking: {
      week1: { original: true, new: true },
      week2: { original: false, new: true },
      week3: { original: false, new: false },
      week4: { original: false, new: false },
      week5: { original: false, new: false },
      week6: { original: false, new: false },
      week7: { original: false, new: false }
    },
    evaluation: {
      originalLeaderScore: null,
      originalLeaderComment: '',
      newLeaderScore: null,
      newLeaderComment: '',
      originalPastorSummary: '',
      newPastorSummary: ''
    },
    decision: {
      result: '',
      comment: '',
      date: ''
    },
    adminCompleted: false
  },
  {
    id: 6,
    name: '陳雅婷',
    originalGroup: '青年C組',
    newGroup: '青年A組',
    originalPastor: '陳區牧',
    newPastor: '李區牧',
    originalLeader: '吳傳道',
    newLeader: '張牧師',
    reason: '屬靈成長需要，希望接觸不同服事',
    applicationDate: '2024-10-05',
    status: '交叉關心中',
    originalPastorApproved: true,
    originalPastorDate: '2024-10-06',
    newPastorApproved: true,
    newPastorDate: '2024-10-06',
    trackingStartDate: '2024-10-08',
    weeklyTracking: {
      week1: { original: true, new: true },
      week2: { original: true, new: true },
      week3: { original: true, new: true },
      week4: { original: false, new: false },
      week5: { original: false, new: false },
      week6: { original: false, new: false },
      week7: { original: false, new: false }
    },
    evaluation: {
      originalLeaderScore: null,
      originalLeaderComment: '',
      newLeaderScore: null,
      newLeaderComment: '',
      originalPastorSummary: '',
      newPastorSummary: ''
    },
    decision: {
      result: '',
      comment: '',
      date: ''
    },
    adminCompleted: false
  },
  {
    id: 7,
    name: '黃文傑',
    originalGroup: '社青B組',
    newGroup: '社青C組',
    originalPastor: '李區牧',
    newPastor: '陳區牧',
    originalLeader: '錢姊妹',
    newLeader: '鄭弟兄',
    reason: '職涯轉換，工作時間調整',
    applicationDate: '2024-09-28',
    status: '交叉關心中',
    originalPastorApproved: true,
    originalPastorDate: '2024-09-29',
    newPastorApproved: true,
    newPastorDate: '2024-09-29',
    trackingStartDate: '2024-10-01',
    weeklyTracking: {
      week1: { original: true, new: true },
      week2: { original: true, new: true },
      week3: { original: true, new: true },
      week4: { original: true, new: true },
      week5: { original: true, new: false },
      week6: { original: false, new: false },
      week7: { original: false, new: false }
    },
    evaluation: {
      originalLeaderScore: null,
      originalLeaderComment: '',
      newLeaderScore: null,
      newLeaderComment: '',
      originalPastorSummary: '',
      newPastorSummary: ''
    },
    decision: {
      result: '',
      comment: '',
      date: ''
    },
    adminCompleted: false
  },
  {
    id: 8,
    name: '林淑芬',
    originalGroup: '家庭C組',
    newGroup: '家庭A組',
    originalPastor: '王區牧',
    newPastor: '王區牧',
    originalLeader: '林姊妹',
    newLeader: '孫弟兄',
    reason: '搬家因素',
    applicationDate: '2024-09-25',
    status: '交叉關心中',
    originalPastorApproved: true,
    originalPastorDate: '2024-09-26',
    newPastorApproved: true,
    newPastorDate: '2024-09-26',
    trackingStartDate: '2024-09-28',
    weeklyTracking: {
      week1: { original: true, new: true },
      week2: { original: true, new: true },
      week3: { original: true, new: true },
      week4: { original: true, new: true },
      week5: { original: true, new: true },
      week6: { original: true, new: true },
      week7: { original: false, new: false }
    },
    evaluation: {
      originalLeaderScore: null,
      originalLeaderComment: '',
      newLeaderScore: null,
      newLeaderComment: '',
      originalPastorSummary: '',
      newPastorSummary: ''
    },
    decision: {
      result: '',
      comment: '',
      date: ''
    },
    adminCompleted: false
  },
  // 評估中 (4)
  {
    id: 9,
    name: '張小英',
    originalGroup: '青年A組',
    newGroup: '社青A組',
    originalPastor: '李區牧',
    newPastor: '李區牧',
    originalLeader: '張牧師',
    newLeader: '趙傳道',
    reason: '年齡階段轉換',
    applicationDate: '2024-09-10',
    status: '評估中',
    originalPastorApproved: true,
    originalPastorDate: '2024-09-11',
    newPastorApproved: true,
    newPastorDate: '2024-09-11',
    trackingStartDate: '2024-09-13',
    weeklyTracking: {
      week1: { original: true, new: true },
      week2: { original: true, new: true },
      week3: { original: true, new: true },
      week4: { original: true, new: true },
      week5: { original: true, new: true },
      week6: { original: true, new: true },
      week7: { original: true, new: true }
    },
    evaluation: {
      originalLeaderScore: null,
      originalLeaderComment: '',
      newLeaderScore: null,
      newLeaderComment: '',
      originalPastorSummary: '',
      newPastorSummary: ''
    },
    decision: {
      result: '',
      comment: '',
      date: ''
    },
    adminCompleted: false
  },
  {
    id: 10,
    name: '趙宇軒',
    originalGroup: '社青C組',
    newGroup: '家庭D組',
    originalPastor: '陳區牧',
    newPastor: '王區牧',
    originalLeader: '鄭弟兄',
    newLeader: '王弟兄',
    reason: '結婚成家',
    applicationDate: '2024-09-08',
    status: '評估中',
    originalPastorApproved: true,
    originalPastorDate: '2024-09-09',
    newPastorApproved: true,
    newPastorDate: '2024-09-09',
    trackingStartDate: '2024-09-11',
    weeklyTracking: {
      week1: { original: true, new: true },
      week2: { original: true, new: true },
      week3: { original: true, new: true },
      week4: { original: true, new: true },
      week5: { original: true, new: true },
      week6: { original: true, new: true },
      week7: { original: true, new: true }
    },
    evaluation: {
      originalLeaderScore: 4,
      originalLeaderComment: '適應良好，積極參與',
      newLeaderScore: null,
      newLeaderComment: '',
      originalPastorSummary: '',
      newPastorSummary: ''
    },
    decision: {
      result: '',
      comment: '',
      date: ''
    },
    adminCompleted: false
  },
  {
    id: 11,
    name: '鄭佳慧',
    originalGroup: '家庭B組',
    newGroup: '家庭C組',
    originalPastor: '王區牧',
    newPastor: '王區牧',
    originalLeader: '周姊妹',
    newLeader: '林姊妹',
    reason: '照顧年邁父母，需要更靈活的聚會時間',
    applicationDate: '2024-09-05',
    status: '評估中',
    originalPastorApproved: true,
    originalPastorDate: '2024-09-06',
    newPastorApproved: true,
    newPastorDate: '2024-09-06',
    trackingStartDate: '2024-09-08',
    weeklyTracking: {
      week1: { original: true, new: true },
      week2: { original: true, new: true },
      week3: { original: true, new: true },
      week4: { original: true, new: true },
      week5: { original: true, new: true },
      week6: { original: true, new: true },
      week7: { original: true, new: true }
    },
    evaluation: {
      originalLeaderScore: 5,
      originalLeaderComment: '穩定成熟，祝福她的新階段',
      newLeaderScore: 5,
      newLeaderComment: '融入快速，家庭見證美好',
      originalPastorSummary: '',
      newPastorSummary: ''
    },
    decision: {
      result: '',
      comment: '',
      date: ''
    },
    adminCompleted: false
  },
  {
    id: 12,
    name: '蔡明哲',
    originalGroup: '社青A組',
    newGroup: '社青B組',
    originalPastor: '李區牧',
    newPastor: '李區牧',
    originalLeader: '趙傳道',
    newLeader: '錢姊妹',
    reason: '創業後工作型態改變',
    applicationDate: '2024-09-01',
    status: '評估中',
    originalPastorApproved: true,
    originalPastorDate: '2024-09-02',
    newPastorApproved: true,
    newPastorDate: '2024-09-02',
    trackingStartDate: '2024-09-04',
    weeklyTracking: {
      week1: { original: true, new: true },
      week2: { original: true, new: true },
      week3: { original: true, new: true },
      week4: { original: true, new: true },
      week5: { original: true, new: true },
      week6: { original: true, new: true },
      week7: { original: true, new: true }
    },
    evaluation: {
      originalLeaderScore: 4,
      originalLeaderComment: '創業忙碌但仍委身',
      newLeaderScore: 4,
      newLeaderComment: '積極參與，時間配合良好',
      originalPastorSummary: '建議同意轉組，新小組時間更適合其現況',
      newPastorSummary: ''
    },
    decision: {
      result: '',
      comment: '',
      date: ''
    },
    adminCompleted: false
  },
  // 決議中 (1)
  {
    id: 13,
    name: '陳大明',
    originalGroup: '家庭A組',
    newGroup: '家庭D組',
    originalPastor: '王區牧',
    newPastor: '王區牧',
    originalLeader: '孫弟兄',
    newLeader: '王弟兄',
    reason: '身體因素需要更近的聚會地點',
    applicationDate: '2024-08-25',
    status: '決議中',
    originalPastorApproved: true,
    originalPastorDate: '2024-08-26',
    newPastorApproved: true,
    newPastorDate: '2024-08-26',
    trackingStartDate: '2024-08-28',
    weeklyTracking: {
      week1: { original: true, new: true },
      week2: { original: true, new: true },
      week3: { original: true, new: true },
      week4: { original: true, new: true },
      week5: { original: true, new: true },
      week6: { original: true, new: true },
      week7: { original: true, new: true }
    },
    evaluation: {
      originalLeaderScore: 5,
      originalLeaderComment: '弟兄穩定成熟，身體原因理解',
      newLeaderScore: 5,
      newLeaderComment: '已與弟兄多次交通，歡迎加入',
      originalPastorSummary: '同意轉組，新組更適合弟兄現況',
      newPastorSummary: '歡迎弟兄加入，會特別關懷其身體狀況'
    },
    decision: {
      result: '',
      comment: '',
      date: ''
    },
    adminCompleted: false
  },
  // 資處更新中 (2)
  {
    id: 14,
    name: '周怡君',
    originalGroup: '社青B組',
    newGroup: '家庭C組',
    originalPastor: '李區牧',
    newPastor: '王區牧',
    originalLeader: '錢姊妹',
    newLeader: '林姊妹',
    reason: '照顧長輩需求',
    applicationDate: '2024-08-20',
    status: '資處更新中',
    originalPastorApproved: true,
    originalPastorDate: '2024-08-21',
    newPastorApproved: true,
    newPastorDate: '2024-08-21',
    trackingStartDate: '2024-08-23',
    weeklyTracking: {
      week1: { original: true, new: true },
      week2: { original: true, new: true },
      week3: { original: true, new: true },
      week4: { original: true, new: true },
      week5: { original: true, new: true },
      week6: { original: true, new: true },
      week7: { original: true, new: true }
    },
    evaluation: {
      originalLeaderScore: 5,
      originalLeaderComment: '姊妹穩定，支持其轉組',
      newLeaderScore: 5,
      newLeaderComment: '融入順利，家庭見證美好',
      originalPastorSummary: '同意轉組',
      newPastorSummary: '歡迎加入'
    },
    decision: {
      result: '同意',
      comment: '經評估後同意轉組，請資處更新系統資料',
      date: '2024-10-20'
    },
    adminCompleted: false
  },
  {
    id: 15,
    name: '楊志明',
    originalGroup: '青年B組',
    newGroup: '青年C組',
    originalPastor: '陳區牧',
    newPastor: '陳區牧',
    originalLeader: '陳傳道',
    newLeader: '吳傳道',
    reason: '人際關係重建',
    applicationDate: '2024-08-18',
    status: '決議中',
    originalPastorApproved: true,
    originalPastorDate: '2024-08-19',
    newPastorApproved: true,
    newPastorDate: '2024-08-19',
    trackingStartDate: '2024-08-21',
    weeklyTracking: {
      week1: { original: true, new: true },
      week2: { original: true, new: true },
      week3: { original: true, new: true },
      week4: { original: true, new: true },
      week5: { original: true, new: true },
      week6: { original: true, new: true },
      week7: { original: true, new: true }
    },
    evaluation: {
      originalLeaderScore: 3,
      originalLeaderComment: '人際互動仍需輔導',
      newLeaderScore: 4,
      newLeaderComment: '願意接納並陪伴',
      originalPastorSummary: '建議暫緩，需要先處理人際議題',
      newPastorSummary: '願意配合輔導計畫'
    },
    decision: {
      result: '',
      comment: '',
      date: ''
    },
    adminCompleted: false
  },
  // 已轉組 (5)
  {
    id: 16,
    name: '林小芳',
    originalGroup: '青年C組',
    newGroup: '社青A組',
    originalPastor: '陳區牧',
    newPastor: '李區牧',
    originalLeader: '吳傳道',
    newLeader: '趙傳道',
    reason: '職涯發展需求',
    applicationDate: '2024-08-10',
    status: '已轉組',
    originalPastorApproved: true,
    originalPastorDate: '2024-08-11',
    newPastorApproved: true,
    newPastorDate: '2024-08-11',
    trackingStartDate: '2024-08-13',
    weeklyTracking: {
      week1: { original: true, new: true },
      week2: { original: true, new: true },
      week3: { original: true, new: true },
      week4: { original: true, new: true },
      week5: { original: true, new: true },
      week6: { original: true, new: true },
      week7: { original: true, new: true }
    },
    evaluation: {
      originalLeaderScore: 5,
      originalLeaderComment: '優秀的姊妹，祝福她',
      newLeaderScore: 5,
      newLeaderComment: '適應良好，積極服事',
      originalPastorSummary: '同意轉組',
      newPastorSummary: '歡迎加入'
    },
    decision: {
      result: '同意',
      comment: '評估優良，同意轉組',
      date: '2024-10-15'
    },
    adminCompleted: true,
    adminCompletedDate: '2024-10-16'
  },
  {
    id: 17,
    name: '王筱萍',
    originalGroup: '青年A組',
    newGroup: '社青C組',
    originalPastor: '李區牧',
    newPastor: '陳區牧',
    originalLeader: '張牧師',
    newLeader: '鄭弟兄',
    reason: '學生畢業轉入職場',
    applicationDate: '2024-08-05',
    status: '已轉組',
    originalPastorApproved: true,
    originalPastorDate: '2024-08-06',
    newPastorApproved: true,
    newPastorDate: '2024-08-06',
    trackingStartDate: '2024-08-08',
    weeklyTracking: {
      week1: { original: true, new: true },
      week2: { original: true, new: true },
      week3: { original: true, new: true },
      week4: { original: true, new: true },
      week5: { original: true, new: true },
      week6: { original: true, new: true },
      week7: { original: true, new: true }
    },
    evaluation: {
      originalLeaderScore: 5,
      originalLeaderComment: '成熟的姊妹，祝福新階段',
      newLeaderScore: 5,
      newLeaderComment: '融入快速，服事積極',
      originalPastorSummary: '同意轉組',
      newPastorSummary: '歡迎姊妹'
    },
    decision: {
      result: '同意',
      comment: '各項評估良好，同意轉組',
      date: '2024-10-10'
    },
    adminCompleted: true,
    adminCompletedDate: '2024-10-11'
  },
  {
    id: 18,
    name: '洪俊傑',
    originalGroup: '社青C組',
    newGroup: '家庭B組',
    originalPastor: '陳區牧',
    newPastor: '王區牧',
    originalLeader: '鄭弟兄',
    newLeader: '周姊妹',
    reason: '退休後生活調整',
    applicationDate: '2024-08-01',
    status: '已轉組',
    originalPastorApproved: true,
    originalPastorDate: '2024-08-02',
    newPastorApproved: true,
    newPastorDate: '2024-08-02',
    trackingStartDate: '2024-08-04',
    weeklyTracking: {
      week1: { original: true, new: true },
      week2: { original: true, new: true },
      week3: { original: true, new: true },
      week4: { original: true, new: true },
      week5: { original: true, new: true },
      week6: { original: true, new: true },
      week7: { original: true, new: true }
    },
    evaluation: {
      originalLeaderScore: 5,
      originalLeaderComment: '弟兄成熟穩定',
      newLeaderScore: 5,
      newLeaderComment: '歡迎弟兄，融入良好',
      originalPastorSummary: '同意轉組',
      newPastorSummary: '歡迎弟兄'
    },
    decision: {
      result: '同意',
      comment: '同意轉組',
      date: '2024-10-05'
    },
    adminCompleted: true,
    adminCompletedDate: '2024-10-06'
  },
  {
    id: 19,
    name: '陳柏宇',
    originalGroup: '社青A組',
    newGroup: '家庭A組',
    originalPastor: '李區牧',
    newPastor: '王區牧',
    originalLeader: '趙傳道',
    newLeader: '孫弟兄',
    reason: '新婚夫妻轉家庭組',
    applicationDate: '2024-07-28',
    status: '已轉組',
    originalPastorApproved: true,
    originalPastorDate: '2024-07-29',
    newPastorApproved: true,
    newPastorDate: '2024-07-29',
    trackingStartDate: '2024-07-31',
    weeklyTracking: {
      week1: { original: true, new: true },
      week2: { original: true, new: true },
      week3: { original: true, new: true },
      week4: { original: true, new: true },
      week5: { original: true, new: true },
      week6: { original: true, new: true },
      week7: { original: true, new: true }
    },
    evaluation: {
      originalLeaderScore: 5,
      originalLeaderComment: '祝福弟兄新婚',
      newLeaderScore: 5,
      newLeaderComment: '夫妻同心服事',
      originalPastorSummary: '同意轉組',
      newPastorSummary: '歡迎新家庭'
    },
    decision: {
      result: '同意',
      comment: '同意轉組',
      date: '2024-10-01'
    },
    adminCompleted: true,
    adminCompletedDate: '2024-10-02'
  },
  {
    id: 20,
    name: '謝惠娟',
    originalGroup: '家庭D組',
    newGroup: '家庭B組',
    originalPastor: '王區牧',
    newPastor: '王區牧',
    originalLeader: '王弟兄',
    newLeader: '周姊妹',
    reason: '工作轉職地點調整',
    applicationDate: '2024-07-20',
    status: '已轉組',
    originalPastorApproved: true,
    originalPastorDate: '2024-07-21',
    newPastorApproved: true,
    newPastorDate: '2024-07-21',
    trackingStartDate: '2024-07-23',
    weeklyTracking: {
      week1: { original: true, new: true },
      week2: { original: true, new: true },
      week3: { original: true, new: true },
      week4: { original: true, new: true },
      week5: { original: true, new: true },
      week6: { original: true, new: true },
      week7: { original: true, new: true }
    },
    evaluation: {
      originalLeaderScore: 5,
      originalLeaderComment: '姊妹穩定，祝福她',
      newLeaderScore: 5,
      newLeaderComment: '適應良好',
      originalPastorSummary: '同意轉組',
      newPastorSummary: '歡迎姊妹'
    },
    decision: {
      result: '同意',
      comment: '同意轉組',
      date: '2024-09-25'
    },
    adminCompleted: true,
    adminCompletedDate: '2024-09-26'
  }
];
