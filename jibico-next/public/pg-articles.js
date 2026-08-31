
(function(){
"use strict";
var PHONE='09120281178';
try{ document.getElementById('cpyYear').textContent = new Intl.DateTimeFormat('fa-IR',{year:'numeric'}).format(new Date()); }catch(e){}
if(window.ARTICLES)document.getElementById('artCount').textContent=window.ARTICLES.length.toLocaleString('fa-IR');

var currentCat='all';
window.renderList=function(){
    var q=(document.getElementById('aSearch').value||'').trim();
    var html='';
    (window.ARTICLES||[]).forEach(function(a){
        if(currentCat!=='all'&&a.cat!==currentCat)return;
        if(q&&(a.title+a.excerpt).indexOf(q)===-1)return;
        html+='<div class="a-card" onclick="openArticle('+a.id+')">'+
            '<div class="a-cover" style="background:'+a.grad+'">'+a.emoji+'</div>'+
            '<div class="a-body"><h4>'+a.title+'</h4><p>'+a.excerpt+'</p>'+
            '<div class="a-meta"><span>⏱️ '+a.time+'</span><span>'+a.catName+'</span><span>📖 کتابچه کامل</span></div></div></div>';
    });
    if(!html)html='<p style="text-align:center;color:var(--muted);grid-column:1/-1">مقاله‌ای با این مشخصات پیدا نشد. 🤔</p>';
    document.getElementById('artList').innerHTML=html;
};
window.setCat=function(cat,btn){
    currentCat=cat;
    var btns=document.querySelectorAll('#filters button');
    btns.forEach(function(b){b.classList.remove('active');});
    btn.classList.add('active');
    window.renderList();
};
window.openArticle=function(id){
    var a=null;(window.ARTICLES||[]).forEach(function(x){if(x.id===id)a=x;});
    if(!a)return;
    document.getElementById('artList').style.display='none';
    document.querySelector('.tools').style.display='none';
    document.querySelector('.hero').style.display='none';
    var view=document.getElementById('articleView');
    view.style.display='block';
    var next=(window.ARTICLES||[])[id%window.ARTICLES.length];
    var tocItems=a.toc.split('|');
    var tocHtml='<div class="toc"><h5>📑 فهرست این کتابچه</h5><ul>';
    tocItems.forEach(function(t,i){tocHtml+='<li><b>'+(i+1)+'.</b> '+t+'</li>';});
    tocHtml+='</ul></div>';
    view.innerHTML=
        '<button class="back-btn" onclick="backToList()">→ برگشت به مقالات</button>'+
        '<div class="art-cover" style="background:'+a.grad+'">'+a.emoji+'</div>'+
        '<div class="art-head"><div class="a-meta"><span>'+a.catName+'</span><span>⏱️ '+a.time+'</span><span>✍️ جمال صمدی</span></div><h2>'+a.title+'</h2></div>'+
        tocHtml+
        '<div class="art-body">'+a.body+'<div class="keybox">💡 '+a.key+'</div></div>'+
        '<div class="feedback"><button onclick="giveFeedback(true)">👍 مفید بود</button><button onclick="giveFeedback(false)">👎 نه چندان</button></div>'+
        '<div class="pdf-box"><h4>📥 دانلود رایگان نسخه PDF این کتابچه</h4><p>نام و شماره تماست رو وارد کن تا لینک دانلود باز بشه.</p>'+
        '<form class="pdf-form" id="pdfForm" onsubmit="unlockPdf(event,\''+a.pdf+'\')">'+
        '<input type="text" id="pName" placeholder="نام و نام خانوادگی" required>'+
        '<input type="tel" id="pMobile" placeholder="شماره موبایل" required>'+
        '<button type="submit" class="btn-gold">دریافت لینک دانلود</button></form>'+
        '<div class="dl-wrap" id="dlWrap"><a class="dl-link" href="'+a.pdf+'" download>⬇️ دانلود PDF</a></div></div>'+
        '<div class="next-read"><div class="nr-txt">بعدی بخوان:<b>'+next.title+'</b></div>'+
        '<button class="btn-gold" onclick="openArticle('+next.id+')">خواندن ←</button></div>';
    try{history.replaceState(null,'','#'+a.hash);}catch(e){}
    window.scrollTo({top:0,behavior:'smooth'});
};
window.backToList=function(){
    document.getElementById('articleView').style.display='none';
    document.getElementById('artList').style.display='grid';
    document.querySelector('.tools').style.display='flex';
    document.querySelector('.hero').style.display='block';
    try{history.replaceState(null,'',location.pathname);}catch(e){}
};
window.unlockPdf=function(ev,pdf){
    ev.preventDefault();
    var name=document.getElementById('pName').value.trim();
    var mobile=document.getElementById('pMobile').value.trim();
    if(!name){toast('لطفاً نامت رو بنویس.');return;}
    if(!/^09\d{9}$/.test(mobile)){toast('شماره موبایل معتبر وارد کن (مثل '+PHONE+').');return;}
    document.getElementById('pdfForm').style.display='none';
    document.getElementById('dlWrap').style.display='block';
};
window.giveFeedback=function(good){toast(good?'💛 خوشحالیم که مفید بود!':'🙏 ممنون؛ نسخه بهتری می‌نویسیم.');};

(function(){
    var h=location.hash.replace('#','');
    if(!h)return;
    (window.ARTICLES||[]).forEach(function(a){if(a.hash===h)window.openArticle(a.id);});
})();

function toast(msg){var t=document.createElement('div');t.textContent=msg;t.style.cssText='position:fixed;bottom:95px;left:50%;transform:translateX(-50%);background:#0e2440;color:#f2b632;padding:12px 26px;border-radius:50px;border:1px solid rgba(242,182,50,.5);z-index:2000;font-size:14px;box-shadow:0 10px 30px rgba(0,0,0,.4);transition:opacity .4s;font-family:inherit';document.body.appendChild(t);setTimeout(function(){t.style.opacity='0';},2200);setTimeout(function(){t.remove();},2700);}
document.addEventListener('click',function(e){var el=e.target.closest?e.target.closest('a.soon'):null;if(el){e.preventDefault();toast('🚧 این بخش در فازهای بعدی ساخته می‌شه.');}});
window.addEventListener('scroll',function(){var y=window.pageYOffset||0;var h=document.documentElement.scrollHeight-window.innerHeight;document.getElementById('prog').style.width=(h>0?(y/h)*100:0)+'%';document.getElementById('header').classList.toggle('scrolled',y>60);document.getElementById('toTop').classList.toggle('show',y>500);},{passive:true});
window.renderList();
})();

