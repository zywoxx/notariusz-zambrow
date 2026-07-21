/* =========================================================
   Wspólny skrypt - nawigacja mobilna, tło navu, akordeon.
   ========================================================= */

// Tło navu przy przewijaniu (dotyczy navu leżącego na obrazie)
(function(){
  var nav = document.getElementById('nav');
  if(nav && nav.classList.contains('on-image')){
    var onScroll = function(){ nav.classList.toggle('scrolled', window.scrollY > 40); };
    window.addEventListener('scroll', onScroll, {passive:true});
    onScroll();
  }
})();

// Menu mobilne
(function(){
  var toggle = document.getElementById('toggle');
  var menu = document.getElementById('menu');
  if(!toggle || !menu) return;
  toggle.addEventListener('click', function(){
    menu.classList.toggle('show');
    toggle.classList.toggle('x');
  });
  menu.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click', function(){
      menu.classList.remove('show');
      toggle.classList.remove('x');
    });
  });
})();

// Akordeon (jedna pozycja otwarta naraz)
(function(){
  var btns = document.querySelectorAll('.acc-btn');
  if(!btns.length) return;
  btns.forEach(function(btn){
    btn.addEventListener('click', function(){
      var item = btn.parentElement;
      var open = item.classList.contains('open');
      document.querySelectorAll('.acc-item.open').forEach(function(i){
        i.classList.remove('open');
        i.querySelector('.acc-btn').setAttribute('aria-expanded','false');
      });
      if(!open){
        item.classList.add('open');
        btn.setAttribute('aria-expanded','true');
      }
    });
  });
})();
