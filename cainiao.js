
// 强力屏蔽逻辑 - 2025.2 适配版
const v = {
  home: {
    selectors: [
      'div.home-recommend',              // 首页商品推广
      'div.bottom-nav-tab:has(> a[href*="discover"])',  // 发现按钮
      'div[data-role="campus-life"]'     // 校园生活按钮
    ]
  },
  profile: {
    selectors: [
      'section.hot-activity',            // 热门活动
      'div.promotion-card:has(img[alt="广告"])'
    ]
  }
};

const path = $request.url.split('/').pop();
if (path === 'home') {
  v.home.selectors.forEach(s => {
    document.querySelectorAll(s).forEach(el => {
      el.style.display = 'none';         // 双重屏蔽策略
      el.parentNode.removeChild(el);
    });
  });
} else if (path === 'profile') {
  v.profile.selectors.forEach(s => {
    document.querySelectorAll(s).forEach(el => el.remove());
  });
}

$done();