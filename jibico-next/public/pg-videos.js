
(function(){
"use strict";
var PHONE='09120281178';
try{ document.getElementById('cpyYear').textContent = new Intl.DateTimeFormat('fa-IR',{year:'numeric'}).format(new Date()); }catch(e){}

/* وقتی ویدیو آماده شد، لینک embed آپارات رو در src بذار — مثال:
   src:'https://www.aparat.com/video/video/embed/XXXXX' */
var VIDEOS=[
 {id:1,emoji:'💰',grad:'linear-gradient(135deg,#f7c948,#c77f12)',dur:'۱۲:۴۰',level:'مقدماتی',cat:'درآمد',title:'چرا مهارتت پول نمی‌سازه؟',desc:'شناخت گلوگاه درآمد — پایه و اساس همه چیز.',src:''},
 {id:2,emoji:'👣',grad:'linear-gradient(135deg,#f2b632,#d99a1b)',dur:'۱۸:۲۰',level:'مقدماتی',cat:'درآمد',title:'سه قدم اول از مهارت به درآمد',desc:'از کجا شروع کنی وقتی هیچ نقشه‌ای نداری.',src:''},
 {id:3,emoji:'🌟',grad:'linear-gradient(135deg,#0ea5e9,#14b8a6)',dur:'۱۵:۰۵',level:'متوسط',cat:'برندسازی',title:'برندسازی شخصی برای کارشناسان پنهان',desc:'دیده‌شدن بدون اینفلوئنسربازی.',src:''},
 {id:4,emoji:'💳',grad:'linear-gradient(135deg,#14b8a6,#0e9488)',dur:'۰۹:۴۵',level:'متوسط',cat:'قیمت‌گذاری',title:'قیمت‌گذاری سه‌بسته‌ای در عمل',desc:'با مثال واقعی، سه بسته قیمتی بساز.',src:''},
 {id:5,emoji:'🎯',grad:'linear-gradient(135deg,#8b5cf6,#6d28d9)',dur:'۲۲:۱۰',level:'حرفه‌ای',cat:'مهارت',title:'از فریلنسری پراکنده تا کسب‌وکار متمرکز',desc:'چطور نه بگی و روی یک چیز بزرگ تمرکز کنی.',src:''},
 {id:6,emoji:'🧭',grad:'linear-gradient(135deg,#f7c948,#14b8a6)',dur:'۰۷:۳۰',level:'مقدماتی',cat:'درآمد',title:'معرفی آزمون جیبیکو و گزارش‌ها',desc:'ببین آزمون چطور مسیر اختصاصی تو رو می‌سازه.',src:''}
];

function renderGrid(){
    var html='';
    VIDEOS.forEach(function(v){
        html+='<div class="v-card" onclick="openVideo('+v.id+')">'+
            '<div class="thumb" style="background:'+v.grad+'"><span class="v-emoji">'+v.emoji+'</span>'+
            '<span class="mini-play">▶</span><span class="dur">'+v.dur+'</span></div>'+
            '<div class="v-body"><h4>'+v.title+'</h4><p>'+v.desc+'</p>'+
            '<div class="v-meta"><span>'+v.level+'</span><span>'+v.cat+'</span></div></div></div>';
    });
    document.getElementById('videoGrid').innerHTML=html;
}
window.openVideo=function(id){
    var v=null;VIDEOS.forEach(function(x){if(x.id===id)v=x;});
    if(!v)return;
    var pb=document.getElementById('playerBox');
    if(v.src){pb.innerHTML='<iframe src="'+v.src+'" allowfullscreen></iframe>';}
    else{pb.innerHTML='<div class="big-play">▶</div><p>این ویدیو به‌زودی بارگذاری می‌شه — برای اطلاع، عضو کانال بله شو.</p>';}
    document.getElementById('mTitle').textContent=v.title;
    document.getElementById('mDesc').textContent=v.desc+' — '+v.dur+' | '+v.level;
    document.getElementById('modal').classList.add('open');
};
window.closeModal=function(){document.getElementById('modal').classList.remove('open');};
document.getElementById('modal').addEventListener('click',function(e){if(e.target===this)closeModal();});

function toast(msg){var t=document.createElement('div');t.textContent=msg;t.style.cssText='position:fixed;bottom:95px;left:50%;transform:translateX(-50%);background:#0e2440;color:#f2b632;padding:12px 26px;border-radius:50px;border:1px solid rgba(242,182,50,.5);z-index:2000;font-size:14px;box-shadow:0 10px 30px rgba(0,0,0,.4);transition:opacity .4s;font-family:inherit';document.body.appendChild(t);setTimeout(function(){t.style.opacity='0';},2200);setTimeout(function(){t.remove();},2700);}
document.addEventListener('click',function(e){var el=e.target.closest?e.target.closest('a.soon'):null;if(el){e.preventDefault();toast('🚧 این بخش در فازهای بعدی ساخته می‌شه.');}});
window.addEventListener('scroll',function(){var y=window.pageYOffset||0;var h=document.documentElement.scrollHeight-window.innerHeight;document.getElementById('prog').style.width=(h>0?(y/h)*100:0)+'%';document.getElementById('header').classList.toggle('scrolled',y>60);document.getElementById('toTop').classList.toggle('show',y>500);},{passive:true});
try{if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(en){if(en.isIntersecting){en.target.classList.add('on');io.unobserve(en.target);}});},{threshold:.15});document.querySelectorAll('.reveal').forEach(function(el){io.observe(el);});}else{document.querySelectorAll('.reveal').forEach(function(el){el.classList.add('on');});}}catch(e){document.querySelectorAll('.reveal').forEach(function(el){el.classList.add('on');});}

renderGrid();
})();

