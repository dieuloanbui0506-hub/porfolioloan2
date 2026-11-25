// Where contact messages are delivered (via FormSubmit.co – first message triggers a one-time activation email).
const CONTACT_EMAIL = 'dieuloanbui0506@gmail.com';

// Traditional Chinese translations, keyed by the English text in data-en.
const ZH = {
  'Luxury Hospitality': '精品酒店服務',
  'About': '關於我', 'Experience': '工作經歷', 'Competencies': '專業能力', 'Education': '學歷', 'Contact': '聯絡',
  'Guest Relation Officer • Caravelle Saigon Hotel': '賓客關係專員 • 西貢卡拉維爾酒店',
  'Elevating Every Stay Into a <span>Memorable Journey</span>': '將每一次入住,化為<span>難忘的旅程</span>',
  'Hello, I am <strong>Bui Dieu Loan</strong> — a dedicated hospitality professional based in Ho Chi Minh City specializing in 5-star Front Office operations, VIP Guest Relations, and Executive Lounge experiences.': '您好,我是<strong>裴妙鸞(Bui Dieu Loan)</strong>——常駐胡志明市的酒店專業人員,專精於五星級前廳營運、貴賓賓客關係及行政酒廊服務。',
  '<strong>Career Motto & Vision:</strong> My life motto is to continuously improve and develop my knowledge, skills, and experience in the Hotel Management field. In the short term, my goal is to become a <strong>Front Office Supervisor</strong>.': '<strong>職涯信念與願景:</strong>我的座右銘是在酒店管理領域不斷精進知識、技能與經驗。短期目標是成為<strong>前廳主管</strong>。',
  'Get in Touch': '立即聯絡',
  '⬇ Download Original CV (PDF)': '⬇ 下載原始履歷(PDF)',
  '5-Star Hotel Experience': '五星級酒店經驗',
  'PMS Systems Mastery': '精通 PMS 系統',
  'Hotel Management (2026–2028)': '酒店管理碩士(2026–2028)',
  'VIP & Lounge Specialist': '貴賓與酒廊專員',
  'Ho Chi Minh City, Vietnam': '越南胡志明市',
  'Career Journey': '職涯歷程',
  'Professional Hospitality Experience': '專業酒店工作經歷',
  'All Roles (4)': '全部職務(4)',
  'Guest Relations & VIP': '賓客關係與貴賓',
  'Front Office Operations': '前廳營運',
  'Traineeships': '實習經歷',
  'Guest Relation Officer': '賓客關係專員',
  'August 2025 – Present': '2025年8月 – 至今',
  'Reviewed guest profiles, preferences, and stay history prior to arrival to identify special requirements and ensure personalized service.': '客人抵達前審閱其檔案、偏好與入住紀錄,掌握特殊需求並提供個人化服務。',
  'Conducted VIP room inspections to ensure room readiness and compliance with hotel standards prior to guest arrival.': '客人抵達前親自檢查貴賓客房,確保房況完備並符合酒店標準。',
  'Prepared and coordinated VIP amenities and personalized arrangements to enhance guest satisfaction and create memorable experiences.': '準備並協調貴賓迎賓禮遇與個人化安排,提升賓客滿意度並創造難忘體驗。',
  'Responded to guest inquiries, requests, and complaints promptly and professionally, ensuring effective resolution and service recovery.': '迅速且專業地回應賓客詢問、需求與客訴,確保有效解決並完成服務補救。',
  'Collaborated closely with Housekeeping and Engineering teams to address room-related issues and maintain a high standard of guest comfort.': '與房務部及工程部密切合作,處理客房問題並維持高水準的住宿舒適度。',
  'Assisted guests during check-in and check-out processes, providing personalized service and ensuring a seamless guest experience.': '協助賓客辦理入住與退房,提供個人化服務,確保流暢的住宿體驗。',
  'Built positive relationships with guests, proactively identifying their needs and delivering exceptional hospitality throughout their stay.': '與賓客建立良好關係,主動掌握需求,於住宿期間提供卓越的待客服務。',
  'Supported Signature Lounge operations including check-in, check-out, and serving VIP guests.': '支援尊榮酒廊(Signature Lounge)營運,包括入住、退房及接待貴賓。',
  'Guest Service Agent': '賓客服務專員(櫃檯接待)',
  'September 2022 – April 2025': '2022年9月 – 2025年4月',
  'Assisted guests with check-in and check-out procedures, ensuring accuracy, efficiency, and a seamless guest experience.': '協助賓客辦理入住與退房手續,確保準確、高效且流暢的體驗。',
  'Assigned guest rooms based on reservation details, room availability, guest preferences, and hotel standards.': '依訂房資料、客房可用狀況、賓客偏好及酒店標準分配客房。',
  'Processed reservations, room upgrades, and payment transactions in accordance with hotel policies and procedures.': '依酒店政策與程序處理訂房、客房升等及付款交易。',
  'Handled guest inquiries, requests, and complaints professionally, providing prompt solutions to enhance guest satisfaction.': '專業處理賓客詢問、需求與客訴,迅速提供解決方案以提升滿意度。',
  'Coordinated with Housekeeping and Engineering departments to resolve room-related issues and ensure guest comfort.': '與房務部及工程部協調,解決客房問題並確保賓客舒適。',
  'Maintained accurate guest records and updated guest profiles in the property management system (PMS).': '於 PMS 系統中維護正確的賓客紀錄並更新賓客檔案。',
  'Supported VIP arrivals by coordinating special requests and ensuring all arrangements were communicated to relevant departments.': '協調特殊需求以支援貴賓抵達,並確保所有安排已傳達至相關部門。',
  'Computed bills, collected payments, and issued VAT invoices for guests accurately.': '準確結算帳單、收款並為賓客開立增值稅發票。',
  'Arranged tours, taxis, and restaurant reservations while providing information on hotel facilities and local attractions.': '安排旅遊行程、計程車與餐廳訂位,並介紹酒店設施與當地景點。',
  'Supported Executive Lounge with check-in, check-out, and guest service.': '支援行政酒廊的入住、退房與賓客服務。',
  'Front Office Trainee': '前廳實習生',
  'June 2022 – August 2022': '2022年6月 – 2022年8月',
  'Trained in 5-star Front Office standards, guest welcoming protocols, and reservation registration workflows.': '接受五星級前廳標準、賓客迎接禮儀及訂房登記流程的訓練。',
  'Transitioned directly into a full-time Guest Service Agent role upon completion of the traineeship.': '實習結束後直接轉任全職賓客服務專員。',
  'F&B Trainee': '餐飲實習生',
  'December 2021 – March 2022': '2021年12月 – 2022年3月',
  'Gained foundational international hotel experience in Food & Beverage service standards and guest hospitality under the Accor brand.': '在雅高(Accor)品牌下累積餐飲服務標準與待客的國際酒店基礎經驗。',
  'Capabilities & Tools': '能力與工具',
  'Core Hospitality Competencies': '核心酒店專業能力',
  'PMS & Digital Systems': 'PMS 與數位系統',
  'Proficient in property management systems for guest profiling, room assignment, folio billing, and VAT invoicing.': '熟練使用酒店管理系統進行賓客檔案管理、排房、帳務結算與增值稅發票開立。',
  'English Communication': '英語溝通',
  'Effectively communicate with international guests and handle foreign guest inquiries and complaints with poise and cultural sensitivity.': '有效與國際賓客溝通,沉著且具文化敏感度地處理外籍賓客的詢問與客訴。',
  'Problem Solving & Service Recovery': '問題解決與服務補救',
  'Stay calm under pressure and handle guest complaints with flexibility, turning challenging situations into positive guest loyalty.': '在壓力下保持冷靜,靈活處理客訴,將困難情境轉化為賓客忠誠度。',
  'Cross-Departmental Teamwork': '跨部門團隊合作',
  'Proactively support colleagues on internal procedures when needed and coordinate seamlessly across Front Office, Housekeeping, Engineering, and Lounge teams.': '主動協助同事熟悉內部流程,並與前廳、房務、工程及酒廊團隊順暢協作。',
  'Academic Background': '學術背景',
  'Education & Qualifications': '學歷與證照',
  "Master's Degree • In Progress": '碩士 • 就讀中',
  'Major: Hotel Management': '主修:酒店管理',
  "Bachelor's Degree • Graduated": '學士 • 已畢業',
  'Connect With Me': '與我聯繫',
  "Let's Discuss Hospitality Opportunities": '洽談酒店業合作機會',
  'Available for Front Office Supervisor and Senior Guest Relations opportunities in Ho Chi Minh City.': '可於胡志明市擔任前廳主管及資深賓客關係職務。',
  'Phone': '電話',
  'Location & Date of Birth': '地點與出生年月',
  'Send a Direct Message': '直接發送訊息',
  'Your Name / Hotel': '您的姓名 / 酒店',
  'Your Email': '您的電子郵件',
  'Subject': '主旨',
  'Message': '訊息內容',
  'Send Message ➔': '發送訊息 ➔'
};

// UI/status messages for the contact form.
const MSG = {
  en: { sending: 'Sending…', ok: 'Thank you! Your message has been sent. I will reply soon.', err: 'Sorry, the message could not be sent. Please email me directly at ' + CONTACT_EMAIL + '.', invalid: 'Please fill in all fields with a valid email.' },
  zh: { sending: '傳送中…', ok: '謝謝您!訊息已送出,我會盡快回覆。', err: '很抱歉,訊息傳送失敗。請直接來信 ' + CONTACT_EMAIL + '。', invalid: '請完整填寫所有欄位並輸入有效的電子郵件。' },
  vi: { sending: 'Đang gửi…', ok: 'Cảm ơn bạn! Tin nhắn đã được gửi, mình sẽ phản hồi sớm.', err: 'Rất tiếc, không gửi được tin nhắn. Vui lòng email trực tiếp tới ' + CONTACT_EMAIL + '.', invalid: 'Vui lòng điền đầy đủ và nhập email hợp lệ.' }
};

document.addEventListener('DOMContentLoaded', () => {
  // Theme
  const themeBtn = document.getElementById('theme-toggle');
  const themeLabel = document.getElementById('theme-label');
  const applyTheme = (t) => {
    document.documentElement.setAttribute('data-theme', t);
    localStorage.setItem('portfolio_theme', t);
    if (themeLabel) themeLabel.textContent = t === 'dark' ? 'Light' : 'Dark';
  };
  applyTheme(localStorage.getItem('portfolio_theme') || 'light');
  themeBtn && themeBtn.addEventListener('click', () => {
    applyTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
  });

  // Languages: en / zh (Traditional) / vi
  let lang = 'en';
  const htmlLang = { en: 'en', zh: 'zh-Hant', vi: 'vi' };
  const setLang = (l) => {
    lang = l;
    document.documentElement.lang = htmlLang[l];
    localStorage.setItem('portfolio_lang', l);
    document.querySelectorAll('.lang-btn').forEach((b) => b.classList.toggle('active', b.dataset.lang === l));
    document.querySelectorAll('[data-en]').forEach((el) => {
      const en = el.getAttribute('data-en');
      let text = en;
      if (l === 'vi') text = el.getAttribute('data-vi') || en;
      if (l === 'zh') text = ZH[en] || en;
      el.innerHTML = text;
    });
    document.querySelectorAll('[data-ph-en]').forEach((el) => {
      el.placeholder = el.getAttribute(`data-ph-${l}`) || el.getAttribute('data-ph-en');
    });
    const status = document.getElementById('form-status');
    if (status) { status.textContent = ''; status.className = ''; }
  };
  document.querySelectorAll('.lang-btn').forEach((b) => b.addEventListener('click', () => setLang(b.dataset.lang)));
  const saved = localStorage.getItem('portfolio_lang');
  if (saved && saved !== 'en') setLang(saved);

  // Experience filter
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.timeline-card');
  filterBtns.forEach((btn) => btn.addEventListener('click', () => {
    filterBtns.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.getAttribute('data-filter');
    cards.forEach((c) => {
      c.style.display = (f === 'all' || (c.getAttribute('data-category') || '').includes(f)) ? 'block' : 'none';
    });
  }));

  // Contact form -> email via FormSubmit AJAX endpoint
  const form = document.getElementById('contact-form');
  if (form) {
    const status = document.getElementById('form-status');
    const submitBtn = form.querySelector('button[type="submit"]');
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = document.getElementById('sender-name').value.trim();
      const email = document.getElementById('sender-email').value.trim();
      const subject = document.getElementById('sender-subject').value.trim();
      const message = document.getElementById('sender-message').value.trim();
      if (!name || !subject || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        status.textContent = MSG[lang].invalid; status.className = 'form-err'; return;
      }
      status.textContent = MSG[lang].sending; status.className = '';
      submitBtn.disabled = true;
      try {
        const res = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            name, email, message,
            _subject: `[Portfolio] ${subject}`,
            _replyto: email,
            _template: 'table',
            _captcha: 'false',
            language: lang
          })
        });
        const data = await res.json().catch(() => ({}));
        if (!res.ok || data.success === 'false' || data.success === false) throw new Error('send failed');
        status.textContent = MSG[lang].ok; status.className = 'form-ok';
        form.reset();
      } catch (err) {
        status.textContent = MSG[lang].err; status.className = 'form-err';
      } finally {
        submitBtn.disabled = false;
      }
    });
  }
});
