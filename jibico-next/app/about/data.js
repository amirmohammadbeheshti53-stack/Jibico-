export const styles = `
:root{--navy:#0a1a2f;--navy2:#0e2440;--gold:#f2b632;--gold-soft:rgba(242,182,50,.12);--muted:#94a3b8;--line:#1e3a5f;--grad-gold:linear-gradient(135deg,#f7c948,#e0a416)}
*{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}
body{font-family:'Dana','Segoe UI',Tahoma,sans-serif;background:var(--navy);color:#e2e8f0;line-height:1.8;overflow-x:hidden}
a{text-decoration:none}.wrap{max-width:1100px;margin:0 auto;padding:0 20px}
.announce{background:var(--grad-gold);color:var(--navy);text-align:center;padding:10px 40px 10px 20px;font-size:14px;font-weight:700;position:relative;display:flex;align-items:center;justify-content:center;gap:12px;flex-wrap:wrap}
.announce b{background:rgba(10,26,47,.15);padding:2px 10px;border-radius:50px;margin-left:8px}
.an-btn{background:var(--navy);color:var(--gold);border:none;border-radius:50px;padding:6px 20px;font-family:inherit;font-size:13px;font-weight:800;cursor:pointer;transition:.3s;white-space:nowrap}
.an-btn:hover{transform:scale(1.06)}
.announce .close-a{position:absolute;left:12px;top:50%;transform:translateY(-50%);background:none;border:none;font-size:18px;cursor:pointer;color:var(--navy);width:28px;height:28px;border-radius:50%}
.announce .close-a:hover{background:rgba(10,26,47,.1)}
.announce-form{display:none;background:var(--navy2);padding:14px 20px;gap:10px;justify-content:center;align-items:center;flex-wrap:wrap;border-bottom:1px solid var(--line)}
.announce-form.open{display:flex}
.announce-form input{padding:10px 16px;border-radius:10px;border:1px solid var(--line);background:var(--navy);color:#e2e8f0;font-family:inherit;font-size:13px;width:190px}
.announce-form input:focus{outline:none;border-color:var(--gold)}
.announce-form button{background:var(--grad-gold);color:var(--navy);border:none;border-radius:10px;padding:10px 24px;font-family:inherit;font-weight:800;cursor:pointer;transition:.3s}
.announce-form button:hover{transform:translateY(-2px)}
.topbar{display:none;background:#071322;padding:10px 20px;justify-content:space-between;align-items:center}
.topbar-left,.topbar-right{display:flex;gap:18px;align-items:center}
.topbar button,.topbar a{background:none;border:none;color:#cfd8e3;cursor:pointer;padding:4px;text-decoration:none}.topbar svg{width:22px;height:22px}
.search-row{display:none;background:#071322;padding:0 20px 12px;position:relative}.search-row.open{display:block}
.search-row input{width:100%;padding:10px 15px;border-radius:10px;border:1px solid #1e3a5f;background:#0a1a2f;color:#fff;font-family:inherit}
#prog{position:fixed;top:0;right:0;height:3px;background:var(--grad-gold);width:0;z-index:1100}
header{background:var(--navy);position:sticky;top:0;z-index:1000;transition:.3s}header.scrolled{box-shadow:0 8px 30px rgba(0,0,0,.35)}
.nav{display:flex;justify-content:space-between;align-items:center;padding:14px 0;gap:15px}
.logo-box{display:flex;flex-direction:column;line-height:1.4}.logo{font-size:26px;font-weight:900;color:var(--gold)}.logo-tag{font-size:11px;color:#8fa3ba}
.menu{display:flex;list-style:none;gap:6px;align-items:center}.menu>li{position:relative}
.menu>li>a{color:#dce6f2;text-decoration:none;padding:10px 14px;border-radius:10px;font-size:15px;display:block;transition:.25s;cursor:pointer}
.menu>li>a:hover{background:var(--gold-soft);color:var(--gold)}
.menu>li>a.active-home{color:var(--gold);background:var(--gold-soft);font-weight:800}
.menu .ble a{color:var(--gold);border:1px solid rgba(242,182,50,.4);border-radius:50px;margin-right:6px;padding:9px 18px}
.menu .ble a:hover{background:var(--gold);color:var(--navy)}
.drop{display:none;position:absolute;top:100%;right:0;background:var(--navy2);border:1px solid #1e3a5f;border-radius:14px;min-width:210px;padding:10px;box-shadow:0 20px 40px rgba(0,0,0,.4);list-style:none;z-index:999}
.menu li.has-drop:hover .drop{display:block}
.drop a{display:block;color:#cfd8e3;text-decoration:none;padding:9px 14px;border-radius:9px;font-size:14px;transition:.2s}
.drop a:hover{background:var(--gold-soft);color:var(--gold);padding-right:20px}
.caret{font-size:10px;opacity:.7}
.search-console{position:relative;flex:1;max-width:300px;margin:0 10px}
.search-console .s-mag{position:absolute;right:12px;top:50%;transform:translateY(-50%);width:18px;height:18px;color:var(--muted);pointer-events:none}
.search-console input{width:100%;padding:10px 40px 10px 14px;border-radius:50px;border:1px solid var(--line);background:var(--navy2);color:#e2e8f0;font-family:inherit;font-size:13px}
.search-console input:focus{outline:none;border-color:var(--gold)}
.search-results{position:absolute;top:115%;right:0;left:0;background:var(--navy2);border:1px solid var(--line);border-radius:14px;max-height:320px;overflow-y:auto;display:none;z-index:1200;box-shadow:0 20px 50px rgba(0,0,0,.5)}
.search-results.open{display:block}
.sr-item{display:flex;gap:10px;align-items:center;padding:11px 14px;cursor:pointer}.sr-item:hover{background:var(--gold-soft)}
.sr-item .tt{font-size:14px;flex:1}.sr-item .bd{font-size:10px;color:var(--gold);border:1px solid rgba(242,182,50,.4);border-radius:50px;padding:2px 10px}
.sr-empty{padding:14px;text-align:center;color:var(--muted);font-size:13px}
.burger{display:none;background:none;border:none;cursor:pointer;flex-direction:column;gap:5px;padding:6px}
.burger span{width:26px;height:3px;background:var(--gold);border-radius:5px;transition:.3s}
.burger.active span:nth-child(1){transform:rotate(45deg) translate(6px,6px)}.burger.active span:nth-child(2){opacity:0}.burger.active span:nth-child(3){transform:rotate(-45deg) translate(6px,-6px)}
.m-panel{position:fixed;top:0;right:-100%;width:82%;max-width:340px;height:100vh;background:var(--navy2);z-index:1500;transition:.4s;padding:25px;overflow-y:auto}
.m-panel.open{right:0}.m-panel .close-x{background:none;border:none;color:var(--gold);font-size:26px;cursor:pointer;margin-bottom:15px}
.m-search{margin-bottom:15px;position:relative}
.m-search input{width:100%;padding:11px 16px;border-radius:10px;border:1px solid #1e3a5f;background:#0a1a2f;color:#fff;font-family:inherit;font-size:14px}
.m-search .search-results{top:105%}
.m-menu{list-style:none}.m-menu>li{border-bottom:1px solid #1e3a5f}
.m-menu>li>a,.m-menu>li>button{display:flex;justify-content:space-between;align-items:center;width:100%;color:#e2e8f0;text-decoration:none;background:none;border:none;padding:14px 4px;font-size:16px;font-family:inherit;cursor:pointer}
.m-sub{list-style:none;display:none;padding:0 12px 12px;background:rgba(0,0,0,.15);border-radius:10px}.m-sub.open{display:block}
.m-sub a{display:block;color:#9fb2c8;text-decoration:none;padding:8px 10px;font-size:14px}.m-sub a:hover{color:var(--gold)}
.overlay{position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:1400;display:none}.overlay.show{display:block}
.hero{text-align:center;padding:70px 0 30px}
.hero .kicker{display:inline-block;background:var(--gold-soft);border:1px solid rgba(242,182,50,.3);color:var(--gold);border-radius:50px;padding:7px 20px;font-size:13px;font-weight:700;margin-bottom:20px}
.hero h1{font-size:clamp(28px,5vw,44px);font-weight:900;margin-bottom:16px}.hero h1 b{color:var(--gold)}
.hero p{color:var(--muted);font-size:17px;max-width:620px;margin:0 auto}
.route-sec{padding:50px 0}
.route{position:relative;height:90px;margin:0 10px}
.route .line{position:absolute;top:50%;right:0;left:0;height:3px;transform:translateY(-50%);background:repeating-linear-gradient(90deg,var(--gold) 0 12px,transparent 12px 24px);animation:dash 1s linear infinite}
@keyframes dash{to{background-position:24px 0}}
.route .dot{position:absolute;top:50%;transform:translate(50%,-50%);width:18px;height:18px;border-radius:50%;background:var(--navy);border:3px solid var(--gold)}
.dot.end{left:0;right:auto;transform:translate(-50%,-50%)}
.route .traveler{position:absolute;top:50%;right:0;transform:translate(50%,-50%);font-size:26px;animation:travel 5s ease-in-out infinite alternate}
@keyframes travel{from{right:2%}to{right:96%}}
.route .lbl{position:absolute;top:-8px;font-size:14px;font-weight:700;color:#cbd5e1}
.lbl.end{left:0}
.route-cap{text-align:center;color:var(--muted);font-size:16px;margin-top:10px}.route-cap b{color:var(--gold)}
.sec-title{text-align:center;font-size:clamp(22px,3.5vw,30px);font-weight:900;margin-bottom:12px}
.sec-title u{text-decoration:none;border-bottom:4px solid var(--gold);padding-bottom:6px}
.sec-desc{text-align:center;color:var(--muted);max-width:600px;margin:0 auto 35px}
.vs{display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:50px;align-items:stretch}
.vs-card{border-radius:18px;padding:28px;background:var(--navy2);display:flex;flex-direction:column}
.vs-bad{border:1px solid var(--line)}.vs-good{border:1px solid rgba(242,182,50,.4)}
.vs-card h3{text-align:center;margin-bottom:16px;font-size:18px}
.vs-card ul{list-style:none;flex:1}
.vs-card li{padding:9px 0;border-bottom:1px dashed var(--line);font-size:14px}
.vs-card li:last-child{border:none}
.vs-bad li{color:var(--muted)}.vs-good li{color:#cbd5e1}
.verdict{margin-top:14px;padding:12px;border-radius:10px;font-size:13px;font-weight:700;text-align:center}
.verdict.bad{background:rgba(239,68,68,.1);border:1px solid rgba(239,68,68,.3);color:#f87171}
.verdict.good{background:rgba(74,222,128,.1);border:1px solid rgba(74,222,128,.3);color:#4ade80}
.steps4{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-bottom:50px}
.st{background:var(--navy2);border:1px solid var(--line);border-radius:16px;padding:22px;text-align:center;transition:.3s}
.st:hover{border-color:var(--gold);transform:translateY(-5px)}
.st .n{width:38px;height:38px;margin:0 auto 12px;background:var(--grad-gold);color:var(--navy);border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:900}
.st h4{font-size:14px;margin-bottom:6px}.st p{color:var(--muted);font-size:12px}
.chips3{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:50px}
.echip{background:var(--navy2);border:1px solid var(--line);border-radius:16px;padding:24px 18px;text-align:center;transition:.3s}
.echip:hover{border-color:var(--gold);transform:translateY(-6px)}
.echip .ico{font-size:34px;margin-bottom:12px}.echip h4{color:var(--gold);margin-bottom:6px}.echip p{color:var(--muted);font-size:13px}
.founder{background:var(--navy2);border:1px solid var(--line);border-radius:20px;padding:35px;display:flex;gap:25px;align-items:center;flex-wrap:wrap;margin-bottom:50px}
.founder img{width:130px;height:130px;border-radius:50%;object-fit:cover;border:2px solid var(--gold)}
.founder .f-txt{flex:1;min-width:240px}
.founder h3{color:var(--gold);font-size:20px;margin-bottom:4px}
.founder .role{color:var(--muted);font-size:13px;margin-bottom:12px}
.founder p{color:#cbd5e1;font-size:14px}
.lead-card{background:var(--navy2);border:1px solid rgba(242,182,50,.4);border-radius:20px;padding:40px;text-align:center;margin-bottom:60px}
.lead-card h2{font-size:clamp(22px,4vw,32px);font-weight:900;margin-bottom:10px}
.lead-card>p{color:var(--muted);font-size:14px;margin-bottom:25px}
.btn-gold{display:inline-block;background:var(--grad-gold);color:var(--navy);padding:15px 40px;border-radius:12px;font-weight:800;font-size:16px;border:none;cursor:pointer;font-family:inherit;transition:.3s;position:relative;overflow:hidden}
.btn-gold:hover{transform:translateY(-4px);box-shadow:0 15px 35px rgba(242,182,50,.35)}
.lead-form{display:none;max-width:420px;margin:0 auto;gap:10px;flex-direction:column}
.lead-form.open{display:flex}
.lead-form input{padding:12px 16px;border-radius:10px;border:1px solid var(--line);background:var(--navy);color:#e2e8f0;font-family:inherit;font-size:14px;text-align:center}
.lead-form input:focus{outline:none;border-color:var(--gold)}
footer{background:var(--navy);color:#cfd8e3;border-top:1px solid var(--line)}
.footer-top{display:grid;grid-template-columns:1.4fr 1fr 1fr 1.2fr;gap:40px;padding:60px 0 40px}
.f-col h4{color:var(--gold);font-size:16px;margin-bottom:18px;font-weight:800}
.f-col .f-desc{font-size:13px;color:var(--muted);margin:14px 0 18px}
.f-links{list-style:none}.f-links li{margin-bottom:10px}
.f-links a{color:#9fb2c8;font-size:13px;text-decoration:none;transition:.2s;display:inline-block}
.f-links a:hover{color:var(--gold);transform:translateX(-4px)}
.f-contact{list-style:none}
.f-contact li{display:flex;gap:10px;align-items:center;margin-bottom:14px;font-size:13px}
.f-contact .c-ico{width:38px;height:38px;border:1px solid rgba(242,182,50,.4);border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:16px;background:var(--gold-soft);flex-shrink:0}
.f-contact a{color:#e2e8f0;text-decoration:none;font-weight:700}.f-contact a:hover{color:var(--gold)}
.f-social{display:flex;gap:10px}
.f-social a{width:40px;height:40px;border:1px solid #2a4a73;border-radius:10px;display:flex;align-items:center;justify-content:center;color:#cfd8e3;text-decoration:none;transition:.3s}
.f-social a:hover{border-color:var(--gold);color:var(--gold);transform:translateY(-4px)}.f-social svg{width:18px;height:18px}
.footer-bottom{border-top:1px solid var(--line);padding:22px 0;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:14px}
.fb-copy{font-size:12px;color:var(--muted)}.fb-copy b{color:var(--gold)}
.fb-badges{display:flex;gap:10px}
.badge-box{width:70px;height:70px;border:1px dashed #2a4a73;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:10px;color:var(--muted);text-align:center;padding:4px}
.to-top{position:fixed;bottom:25px;left:25px;width:50px;height:50px;border:none;border-radius:50%;background:var(--grad-gold);color:var(--navy);font-size:20px;font-weight:900;cursor:pointer;opacity:0;visibility:hidden;transition:.3s;z-index:1200}
.to-top.show{opacity:1;visibility:visible}
.float-ble{position:fixed;bottom:25px;right:25px;width:56px;height:56px;border-radius:50%;background:var(--grad-gold);color:var(--navy);display:flex;align-items:center;justify-content:center;text-decoration:none;z-index:1200;box-shadow:0 10px 25px rgba(242,182,50,.4);animation:pulse 2.4s infinite}
.float-ble svg{width:26px;height:26px}
@keyframes pulse{0%,100%{box-shadow:0 10px 25px rgba(242,182,50,.4),0 0 0 0 rgba(242,182,50,.5)}50%{box-shadow:0 10px 25px rgba(242,182,50,.4),0 0 0 18px rgba(242,182,50,0)}}
.js .reveal{opacity:0;transform:translateY(40px);transition:all .8s cubic-bezier(.4,0,.2,1)}.js .reveal.on{opacity:1;transform:translateY(0)}
@media (max-width:980px){.menu{display:none}.burger{display:flex}.topbar{display:flex}.search-console{display:none}.vs{grid-template-columns:1fr}.steps4,.chips3{grid-template-columns:1fr}.footer-top{grid-template-columns:1fr 1fr}.footer-bottom{justify-content:center;text-align:center}}
@media (max-width:640px){.announce{flex-wrap:nowrap;justify-content:flex-start;gap:8px;padding:9px 12px 9px 34px}.announce .an-text{flex:1;min-width:0;font-size:11px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.announce .an-text b{display:none}.an-btn{font-size:11px;padding:6px 14px}.announce .close-a{left:6px;width:22px;height:22px;font-size:14px}.announce-form input{width:100%}.footer-top{grid-template-columns:1fr}}
`;
export const html = `
<div class="overlay" id="overlay" onclick="togglePanel()"></div>
<div class="m-panel" id="mPanel">
    <button class="close-x" onclick="togglePanel()">✕</button>
    <div class="m-search"><input type="text" id="mSearchInput" placeholder="🔍 جستجو در جیبیکو..." autocomplete="off"><div class="search-results" id="mSearchResults"></div></div>
    <ul class="m-menu">
        <li><a href="/">صفحه اصلی</a></li>
        <li><button onclick="toggleSub(this)">حساب کاربری من <span class="caret">▼</span></button>
            <ul class="m-sub"><li><a href="#" class="soon">پیشخوان من</a></li><li><a href="#" class="soon">لایسنس‌های من</a></li><li><a href="#" class="soon">سفارش‌ها</a></li><li><a href="#" class="soon">پیگیری سفارش</a></li><li><a href="#" class="soon">پروفایل</a></li><li><a href="#" class="soon">خروج از سیستم</a></li></ul></li>
        <li><button onclick="toggleSub(this)">آموزش‌های رایگان <span class="caret">▼</span></button>
            <ul class="m-sub"><li><a href="/articles">مقالات</a></li><li><a href="/videos">ویدیوهای آموزشی</a></li></ul></li>
        <li><button onclick="toggleSub(this)">فروشگاه <span class="caret">▼</span></button>
            <ul class="m-sub"><li><a href="/products">محصولات آموزشی</a></li><li><a href="/online">آنلاین‌سازی کسب‌وکار</a></li><li><a href="/subs">اشتراک‌ها</a></li><li><a href="/crm">CRM</a></li></ul></li>
        <li><a href="/support">پشتیبانی</a></li>
        <li><a href="/about" style="color:var(--gold);font-weight:800">جیبیکو چیست؟</a></li>
        <li><a href="https://ble.ir/jibicoclub" target="_blank" style="color:var(--gold)">کانال بله</a></li>
    </ul>
</div>

<div class="wrap">
    <div class="hero">
        <span class="kicker">❓ جیبیکو چیست؟</span>
        <h1>قطب‌نمای <b>اختصاصی</b> رشد درآمد تو</h1>
        <p>جیبیکو یه دوره آموزشی یا یه مشاوره عمومی نیست؛ یه مسیریابه که بین «الان کجام» و «منطقی‌ترین مسیر کدومه» قرار می‌گیره.</p>
    </div>

    <div class="route-sec reveal">
        <div class="route">
            <span class="lbl">من الان کجام؟</span>
            <span class="lbl end">کجا باید برم؟</span>
            <div class="line"></div>
            <div class="dot"></div>
            <div class="dot end"></div>
            <span class="traveler">🧭</span>
        </div>
        <p class="route-cap">جیبیکو دقیقاً <b>وسط این دو نقطه</b> می‌شینه و مسیر رو برای تو ترسیم می‌کنه.</p>
    </div>

    <h2 class="sec-title reveal"><u>تفاوت جیبیکو با بقیه</u></h2>
    <p class="sec-desc">یه مثال واقعی، دو جور — کنار هم ببین و مقایسه کن:</p>
    <div class="vs reveal">
        <div class="vs-card vs-bad">
            <h3>❌ نسخه عمومی</h3>
            <ul>
                <li>«صبور باش، درست می‌شه.»</li>
                <li>«توی شبکه‌های اجتماعی فعال‌تر باش.»</li>
                <li>«دنبال علاقه‌ات برو.»</li>
                <li>«محتوای بیشتر تولید کن.»</li>
            </ul>
            <div class="verdict bad">درست ولی بی‌مصرف — نمی‌گه از کجا و با چی شروع کنی.</div>
        </div>
        <div class="vs-card vs-good">
            <h3>🎯 نسخه جیبیکو</h3>
            <ul>
                <li>🔍 گلوگاه لیلا: بسته‌بندی و قیمت‌گذاری (مهارت ۸۲٪، بهره‌برداری ۳۱٪)</li>
                <li>📦 تعریف سه بسته خدمت مشخص با قیمت‌گذاری شفاف</li>
                <li>💰 افزایش ۲۰٪ قیمت در پیشنهاد بعدی</li>
                <li>🖼️ انتشار صفحه نمونه‌کار — قدم اول همین هفته</li>
            </ul>
            <div class="verdict good">اختصاصی، عدد‌محور، قابل اجرا — مخصوص لیلا، نه همه.</div>
        </div>
    </div>

    <h2 class="sec-title reveal"><u>چطور کار می‌کنه؟</u></h2>
    <div class="steps4 reveal">
        <div class="st"><div class="n">۱</div><h4>ارزیابی شخصیت</h4><p>پرسشنامه‌های استاندارد و علمی</p></div>
        <div class="st"><div class="n">۲</div><h4>تحلیل استعدادها</h4><p>شناسایی نقاط قوت و توانمندی‌ها</p></div>
        <div class="st"><div class="n">۳</div><h4>تحلیل فرصت‌های درآمدی</h4><p>بررسی بازار و فرصت‌های مناسب</p></div>
        <div class="st"><div class="n">۴</div><h4>نسخه اختصاصی رشد درآمد</h4><p>نقشه راه و برنامه اقدام شخصی</p></div>
    </div>

    <h2 class="sec-title reveal"><u>زیر کاپوت جیبیکو</u></h2>
    <div class="chips3 reveal">
        <div class="echip"><div class="ico">🧠</div><h4>MBTI</h4><p>تایپ شخصیتی و الگوهای فکری تو</p></div>
        <div class="echip"><div class="ico">📊</div><h4>DISC</h4><p>سبک رفتار و نحوه عمل و ارتباط تو</p></div>
        <div class="echip"><div class="ico">🔍</div><h4>مدل گلوگاه</h4><p>عامل محدودکننده درآمد تو کدومه</p></div>
    </div>

    <div class="founder reveal">
        <img src="jamal.jpg" onerror="this.onerror=null;this.src='https://image.qwenlm.ai/public_source/48193368-bca2-41b5-84d0-741a69f64903/14155021a-7b17-48f6-9255-af7af8a21e01.png'" alt="جمال صمدی">
        <div class="f-txt">
            <h3>جمال صمدی</h3>
            <div class="role">پژوهشگر توسعه فردی و طراحی مسیر درآمد — بنیان‌گذار جیبیکو</div>
            <p>بیش از ۱۰ سال تجربه در حوزه کسب‌وکار و رشد درآمد. جیبیکو از یک سوال ساده متولد شد: «چرا آدم‌های بااستعداد، از استعدادشون درآمد کافی نمی‌گیرن؟»</p>
        </div>
    </div>

    <div class="lead-card reveal">
        <h2>حالا نوبت توئه؛ مسیرت رو پیدا کن.</h2>
        <p>قبل از شروع آزمون، مشخصاتت رو ثبت کن تا گزارش و پیگیری‌هات برات محفوظ بمونه.</p>
        <button class="btn-gold" id="leadBtn" onclick="openLead()">🚀 شروع آزمون رایگان</button>
        <div class="lead-form" id="leadForm">
            <input type="text" id="lName" placeholder="نام و نام خانوادگی">
            <input type="tel" id="lMobile" placeholder="شماره موبایل">
            <button class="btn-gold" onclick="submitLead()">ثبت و شروع آزمون ←</button>
        </div>
    </div>
</div>

`;

