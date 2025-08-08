(()=>{
  // Footer year
  const yearNode = document.getElementById('y');
  if (yearNode) yearNode.textContent = String(new Date().getFullYear());

  const drawer   = document.getElementById('drawer');
  const backdrop = document.getElementById('backdrop');
  const openBtn  = document.getElementById('openMenu');
  const closeBtn = document.getElementById('closeMenu');

  if (!drawer || !backdrop || !openBtn) return;

  function openDrawer(){
    if (drawer.classList.contains('open')) return;
    drawer.classList.add('open');
    backdrop.classList.add('open');
    drawer.style.visibility = 'visible';
    drawer.style.pointerEvents = 'auto';
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer(){
    if (!drawer.classList.contains('open')) return;
    drawer.classList.remove('open');
    backdrop.classList.remove('open');
    drawer.style.visibility = 'hidden';
    drawer.style.pointerEvents = 'none';
    document.body.style.overflow = '';
  }

  // Register listeners once
  openBtn.addEventListener('click', openDrawer);
  closeBtn && closeBtn.addEventListener('click', closeDrawer);
  backdrop.addEventListener('click', closeDrawer);
  drawer.querySelectorAll('a').forEach(a=>a.addEventListener('click', closeDrawer));

  // Close on Escape
  document.addEventListener('keydown', (e)=>{
    if (e.key === 'Escape') closeDrawer();
  });

  // Ensure closed on bfcache restore
  window.addEventListener('pageshow', ()=>{
    closeDrawer();
  });
})();
