// —— 预加载大图，切换 CSS 变量背景 ——  
(function(){
    const root = document.documentElement;
    const largeBg = "https://api.rls.ovh/adaptive";
    const img = new Image();
    img.src = largeBg;
    img.onload = () => {
      root.style.setProperty('--alist-bg', `url("${largeBg}")`);
    };
  })();
  
  // —— Loading 文本动态 & 淡出 ——  
  const loadingText = document.getElementById('loading-text');
  let dots = 0;
  const interval = setInterval(()=>{
    dots = (dots + 1) % 4;
    loadingText.textContent = 'Loading' + '.'.repeat(dots);
  }, 500);
  window.addEventListener('load', ()=> {
    clearInterval(interval);
    const screen = document.getElementById('loading-screen');
    screen.style.opacity = '0';
    setTimeout(()=> screen.remove(), 500);
  });
  