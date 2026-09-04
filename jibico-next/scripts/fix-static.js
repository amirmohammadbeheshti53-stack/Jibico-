const fs = require('fs');
const path = require('path');

const staticPages = ['about','articles','videos','products','shop','subs','online','crm','support'];

const chromeScript = `
<style>
.search-drop a{display:flex;justify-content:space-between;align-items:center;gap:10px;padding:12px 16px;color:#e2e8f0;font-size:14px}
.search-drop a:hover{background:rgba(242,182,50,.12);color:#f2b632}
</style>
<script>
(function(){
  var PAGES=[['صفحه اصلی','/'],['آزمون رایگان تشخیص','/quiz'],['پیشخوان من','/dashboard'],['سفارش‌ها','/dashboard?tab=orders'],['پیگیری سفارش','/dashboard?tab=track'],['لایسنس‌های من','/dashboard?tab=licenses'],['پروفایل','/dashboard?tab=profile'],['فروشگاه','/shop'],['مقالات','/articles'],['ویدیوهای آموزشی','/videos'],['محصولات آموزشی','/products'],['آنلاین‌سازی کسب‌وکار','/online'],['اشتراک‌ها','/subs'],['CRM فروش','/crm'],['پشتیبانی','/support'],['جیبیکو چیست؟','/about']];

  var burger=document.querySelector('.burger');
  if(burger){
    var ov=document.createElement('div');ov.className='overlay';ov.style.display='none';
    var mp=document.createElement('div');mp.className='m-panel';mp.style.display='none';
    mp.innerHTML='<button class="close-x" id="mClose">✕</button><nav class="m-menu">'+
      '<a href="/">صفحه اصلی</a>'+
      '<div class="m-acc"><button class="m-acc-head" id="mAccHead">حساب کاربری من <span>▼</span></button>'+
      '<div class="m-acc-body" id="mAccBody" style="display:none">'+
      '<a href="/dashboard">پیشخوان من</a><a href="/dashboard?tab=licenses">لایسنس‌های من</a><a href="/dashboard?tab=orders">سفارش‌ها</a><a href="/dashboard?tab=track">پیگیری سفارش</a><a href="/dashboard?tab=profile">پروفایل</a>'+
      '<a href="/" id="mLogout">خروج از سیستم</a></div></div>'+
      '<div class="m-acc"><button class="m-acc-head" id="mLearnHead">آموزش‌های رایگان <span>▼</span></button>'+
      '<div class="m-acc-body" id="mLearnBody" style="display:none">'+
      '<a href="/articles">مقالات</a><a href="/videos">ویدیوهای آموزشی</a></div></div>'+
      '<div class="m-acc"><button class="m-acc-head" id="mShopHead">فروشگاه <span>▼</span></button>'+
      '<div class="m-acc-body" id="mShopBody" style="display:none">'+
      '<a href="/shop">صفحه فروشگاه</a><a href="/products">محصولات آموزشی</a><a href="/online">آنلاین‌سازی کسب‌وکار</a><a href="/subs">اشتراک‌ها</a><a href="/crm">CRM فروش</a></div></div>'+
      '<a href="/support">پشتیبانی</a><a href="/about">جیبیکو چیست؟</a>'+
      '<a href="https://ble.ir/jibicoclub" target="_blank" class="ble">کانال بله</a></nav>';
    document.body.appendChild(ov);document.body.appendChild(mp);
    function closeM(){ov.style.display='none';mp.style.display='none';}
    burger.addEventListener('click',function(){var open=mp.style.display==='block';ov.style.display=open?'none':'block';mp.style.display=open?'none':'block';});
    ov.addEventListener('click',closeM);
    document.getElementById('mClose').addEventListener('click',closeM);
    function wire(hid,bid){var h=document.getElementById(hid);if(h){h.addEventListener('click',function(){var b=document.getElementById(bid);b.style.display=b.style.display==='none'?'flex':'none';});}}
    wire('mAccHead','mAccBody');wire('mLearnHead','mLearnBody');wire('mShopHead','mShopBody');
    document.getElementById('mLogout').addEventListener('click',function(e){e.preventDefault();try{localStorage.removeItem('jibico_report');localStorage.removeItem('jibico_profile');}catch(err){}location.href='/';});
  }

  var sin=document.querySelector('.search-console input');
  if(sin){
    var drop=document.createElement('div');drop.className='search-drop';drop.style.display='none';
    sin.parentNode.appendChild(drop);
    sin.addEventListener('input',function(){
      var q=sin.value.trim();
      if(q.length<2){drop.style.display='none';drop.innerHTML='';return;}
      var hits=PAGES.filter(function(p){return p[0].indexOf(q)>-1;}).slice(0,8);
      drop.innerHTML='';
      if(!hits.length){drop.innerHTML='<div class="sd-empty">نتیجه‌ای پیدا نشد</div>';}
      hits.forEach(function(h){var a=document.createElement('a');a.href=h[1];a.innerHTML=h[0]+'<span class="sd-badge">صفحه</span>';drop.appendChild(a);});
      drop.style.display='flex';
    });
    document.addEventListener('click',function(e){if(!e.target.closest('.search-console'))drop.style.display='none';});
  }

  var anBtn=document.querySelector('.an-btn');
  if(anBtn){anBtn.addEventListener('click',function(){
    var f=document.querySelector('.announce-form');
    if(!f){f=document.createElement('form');f.className='announce-form';f.style.display='none';
      f.innerHTML='<input type="text" name="cname" placeholder="نام و نام خانوادگی"><input type="tel" name="cmob" placeholder="شماره موبایل"><button type="submit">ثبت و رفتن به آزمون ←</button>';
      document.querySelector('.announce').insertAdjacentElement('afterend',f);
      f.addEventListener('submit',function(e){
        e.preventDefault();
        var name=f.querySelector('[name="cname"]').value.trim();
        var mob=f.querySelector('[name="cmob"]').value.trim();
        if(!name){alert('لطفاً نامت رو بنویس.');return;}
        if(!/^09\\d{9}$/.test(mob)){alert('شماره موبایل معتبر وارد کن.');return;}
        try{
          fetch('https://jibicoclub.ir/api/save-consult.php',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({name:name,mobile:mob,source:'banner'})});
        }catch(err){}
        location.href='/quiz';
      });
    }
    f.style.display=f.style.display==='none'?'flex':'none';
  });}
  var anClose=document.querySelector('.close-a');
  if(anClose){anClose.addEventListener('click',function(){var a=document.querySelector('.announce');if(a)a.style.display='none';var f=document.querySelector('.announce-form');if(f)f.style.display='none';});}

  var tt=document.querySelector('.to-top');
  if(tt){tt.addEventListener('click',function(){window.scrollTo({top:0,behavior:'smooth'});});}
})();
</script>
`;

staticPages.forEach(page => {
  const htmlPath = path.join(__dirname, '../out', `${page}.html`);
  if (!fs.existsSync(htmlPath)) return;
  let html = fs.readFileSync(htmlPath, 'utf8');

  html = html.replace(/<script src="\/_next\/[^"]*"[^>]*><\/script>/g, '');
  html = html.replace(/<script>self\.__next_f\.push\([\s\S]*?<\/script>/g, '');

  html = html.replace('</body>', chromeScript + '</body>');

  fs.writeFileSync(htmlPath, html, 'utf8');
  console.log(`Fixed ${page}.html`);
});