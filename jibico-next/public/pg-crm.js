
(function(){
"use strict";
var PHONE='09120281178';
try{ document.getElementById('cpyYear').textContent = new Intl.DateTimeFormat('fa-IR',{year:'numeric'}).format(new Date()); }catch(e){}

/* ===== دموی پایپ‌لاین ===== */
var STAGES=['لید جدید','در مذاکره','نهایی‌شده','از دست رفته'];
var SCOLOR=['#60a5fa','#f2b632','#4ade80','#f87171'];
var deals=[
 {n:'فروش کاوه',v:12000000,s:1,t:'hot'},
 {n:'سارا احمدی',v:4500000,s:0,t:'cold'},
 {n:'شرکت رادین',v:25000000,s:2,t:'hot'},
 {n:'گالری نیکا',v:8000000,s:0,t:'cold'},
 {n:'آرمون تک',v:15000000,s:1,t:'hot'}
];
function fa(n){return n.toLocaleString('fa-IR');}
function renderBoard(){
    var html='';
    for(var c=0;c<4;c++){
        html+='<div class="col"><h5><b style="background:'+SCOLOR[c]+'"></b>'+STAGES[c]+'</h5>';
        deals.forEach(function(d,i){
            if(d.s!==c)return;
            html+='<div class="deal s'+d.s+'" onclick="moveDeal('+i+')" title="کلیک کن">'+
                '<span class="tag '+d.t+'">'+(d.t==='hot'?'داغ':'سرد')+'</span>'+
                '<div class="dn">'+d.n+'</div><div class="dv">'+fa(d.v)+' تومان</div></div>';
        });
        html+='</div>';
    }
    document.getElementById('board').innerHTML=html;
    var rev=0;deals.forEach(function(d){if(d.s===2)rev+=d.v;});
    document.getElementById('revNum').textContent=fa(rev);
}
window.moveDeal=function(i){deals[i].s=(deals[i].s+1)%4;renderBoard();};
renderBoard();

window.submitWait=function(ev){
    ev.preventDefault();
    var name=document.getElementById('wName').value.trim();
    var mobile=document.getElementById('wMobile').value.trim();
    if(!name){toast('لطفاً نامت رو بنویس.');return;}
    if(!/^09\d{9}$/.test(mobile)){toast('شماره موبایل معتبر وارد کن (مثل '+PHONE+').');return;}
    document.getElementById('wForm').style.display='none';
    document.getElementById('wOk').style.display='block';
    setTimeout(function(){ window.location.href='https://ble.ir/jibicoclub'; },1500);
};

function toast(msg){var t=document.createElement('div');t.textContent=msg;t.style.cssText='position:fixed;bottom:95px;left:50%;transform:translateX(-50%);background:#0e2440;color:#f2b632;padding:12px 26px;border-radius:50px;border:1px solid rgba(242,182,50,.5);z-index:2000;font-size:14px;box-shadow:0 10px 30px rgba(0,0,0,.4);transition:opacity .4s;font-family:inherit';document.body.appendChild(t);setTimeout(function(){t.style.opacity='0';},2200);setTimeout(function(){t.remove();},2700);}
document.addEventListener('click',function(e){var el=e.target.closest?e.target.closest('a.soon'):null;if(el){e.preventDefault();toast('🚧 این بخش در فازهای بعدی ساخته می‌شه.');}});
window.addEventListener('scroll',function(){var y=window.pageYOffset||0;var h=document.documentElement.scrollHeight-window.innerHeight;document.getElementById('prog').style.width=(h>0?(y/h)*100:0)+'%';document.getElementById('header').classList.toggle('scrolled',y>60);document.getElementById('toTop').classList.toggle('show',y>500);},{passive:true});
try{if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(en){if(en.isIntersecting){en.target.classList.add('on');io.unobserve(en.target);}});},{threshold:.15});document.querySelectorAll('.reveal').forEach(function(el){io.observe(el);});}else{document.querySelectorAll('.reveal').forEach(function(el){el.classList.add('on');});}}catch(e){document.querySelectorAll('.reveal').forEach(function(el){el.classList.add('on');});}
})();

