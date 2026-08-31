
(function(){
"use strict";
var PHONE='09120281178';
try{ document.getElementById('cpyYear').textContent = new Intl.DateTimeFormat('fa-IR',{year:'numeric'}).format(new Date()); }catch(e){}

function formatPrices(){
    document.querySelectorAll('.fp').forEach(function(el){
        var n=parseInt(el.getAttribute('data-p'),10);
        el.textContent=n.toLocaleString('fa-IR');
    });
}
formatPrices();

function toast(msg){var t=document.createElement('div');t.textContent=msg;t.style.cssText='position:fixed;bottom:95px;left:50%;transform:translateX(-50%);background:#0e2440;color:#f2b632;padding:12px 26px;border-radius:50px;border:1px solid rgba(242,182,50,.5);z-index:2000;font-size:14px;box-shadow:0 10px 30px rgba(0,0,0,.4);transition:opacity .4s;font-family:inherit';document.body.appendChild(t);setTimeout(function(){t.style.opacity='0';},2200);setTimeout(function(){t.remove();},2700);}
document.addEventListener('click',function(e){var el=e.target.closest?e.target.closest('a.soon'):null;if(el){e.preventDefault();toast('🚧 این بخش در فازهای بعدی ساخته می‌شه.');}});
window.addEventListener('scroll',function(){var y=window.pageYOffset||0;var h=document.documentElement.scrollHeight-window.innerHeight;document.getElementById('prog').style.width=(h>0?(y/h)*100:0)+'%';document.getElementById('header').classList.toggle('scrolled',y>60);document.getElementById('toTop').classList.toggle('show',y>500);},{passive:true});
try{if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(en){if(en.isIntersecting){en.target.classList.add('on');io.unobserve(en.target);}});},{threshold:.15});document.querySelectorAll('.reveal').forEach(function(el){io.observe(el);});}else{document.querySelectorAll('.reveal').forEach(function(el){el.classList.add('on');});}}catch(e){document.querySelectorAll('.reveal').forEach(function(el){el.classList.add('on');});}
})();

