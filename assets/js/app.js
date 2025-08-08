(()=>{
const openBtn=document.getElementById('openMenu'),
      drawer=document.getElementById('drawer'),
      closeBtn=document.getElementById('closeMenu'),
      backdrop=document.getElementById('backdrop');
if(openBtn&&drawer&&closeBtn&&backdrop){
  const open=()=>{document.body.style.overflow='hidden'};
  const close=()=>{drawer.classList.remove('open');backdrop.classList.remove('open');document.body.style.overflow=''};
  openBtn.addEventListener('click',open);closeBtn.addEventListener('click',close);backdrop.addEventListener('click',close);
  drawer.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));
}
document.getElementById('y')&&(document.getElementById('y').textContent=new Date().getFullYear());
})();


// Ensure drawer only opens on menu button click
document.addEventListener('DOMContentLoaded', () => {
  const drawer = document.getElementById('drawer');
  const openBtn = document.getElementById('openMenu');
  const closeBtn = document.getElementById('closeMenu');
  const backdrop = document.querySelector('.backdrop');

  if(drawer) {
    drawer.classList.remove('open'); // start closed
  }
  if(openBtn) {
    openBtn.addEventListener('click', () => {
      
      backdrop && backdrop.classList.add('active');
    });
  }
  if(closeBtn) {
    closeBtn.addEventListener('click', () => {
      drawer.classList.remove('open');
      backdrop && backdrop.classList.remove('active');
    });
  }
});

// Safety: ensure drawer/backdrop are closed on load (Safari cache fix)
document.addEventListener('DOMContentLoaded', ()=>{
  try{
    const d=document.getElementById('drawer'), b=document.getElementById('backdrop');
    d && d.classList.remove('open');
    b && b.classList.remove('open');
  }catch(e){}
});

// Robust open/close (works even if some nodes are missing initially)
(function(){
  const openBtn = document.getElementById('openMenu');
  const drawer  = document.getElementById('drawer');
  const backdrop= document.getElementById('backdrop');

  function openDrawer(){
    if(!drawer||!backdrop) return;
    drawer.classList.add('open');
    backdrop.classList.add('open');
    drawer.style.visibility = 'visible';
    drawer.style.pointerEvents = 'auto';
    document.body.style.overflow = 'hidden';
    // Attach close listeners lazily
    const closeBtn = document.getElementById('closeMenu');
    function close(){
      drawer.classList.remove('open');
      backdrop.classList.remove('open');
      drawer.style.visibility = 'hidden';
      drawer.style.pointerEvents = 'none';
      document.body.style.overflow = '';
    }
    closeBtn && closeBtn.addEventListener('click', close, {once:false});
    backdrop.addEventListener('click', close, {once:false});
    drawer.querySelectorAll('a').forEach(a=>a.addEventListener('click', close));
  }

  openBtn && openBtn.addEventListener('click', openDrawer);
})();
