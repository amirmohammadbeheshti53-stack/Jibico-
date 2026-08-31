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
.hero h1{font-size:clamp(28px,5vw,42px);font-weight:900;margin-bottom:12px}.hero h1 b{color:var(--gold)}
.hero p{color:var(--muted);font-size:16px;max-width:600px;margin:0 auto 25px}
.v-stats{display:flex;gap:12px;justify-content:center;flex-wrap:wrap}
.schip{background:var(--navy2);border:1px solid var(--line);border-radius:50px;padding:8px 20px;font-size:13px;color:var(--muted)}
.schip b{color:var(--gold)}
.featured{background:var(--navy2);border:1px solid rgba(242,182,50,.4);border-radius:20px;overflow:hidden;margin:50px 0;display:grid;grid-template-columns:1.3fr 1fr;cursor:pointer;transition:.3s}
.featured:hover{border-color:var(--gold)}
.f-thumb{position:relative;min-height:260px;background:linear-gradient(135deg,#f7c948,#c77f12);display:flex;align-items:center;justify-content:center}
.f-thumb .f-emoji{font-size:90px}
.f-tag{position:absolute;top:15px;right:15px;background:rgba(10,26,47,.85);color:var(--gold);border:1px solid rgba(242,182,50,.4);border-radius:50px;padding:4px 16px;font-size:12px;font-weight:700}
.play-btn{width:76px;height:76px;border-radius:50%;background:rgba(10,26,47,.8);border:2px solid var(--gold);display:flex;align-items:center;justify-content:center;font-size:26px;color:var(--gold);position:absolute;transition:.3s}
.featured:hover .play-btn{transform:scale(1.15);background:var(--gold);color:var(--navy)}
.f-info{padding:30px;display:flex;flex-direction:column;justify-content:center}
.f-info h3{font-size:20px;margin-bottom:10px}
.f-info p{color:var(--muted);font-size:14px;margin-bottom:18px}
.f-meta{display:flex;gap:10px;flex-wrap:wrap}
.f-meta span{background:var(--gold-soft);color:var(--gold);border-radius:50px;padding:4px 14px;font-size:12px}
.path-strip{display:flex;gap:10px;align-items:center;justify-content:center;flex-wrap:wrap;margin-bottom:45px}
.p-step{background:var(--navy2);border:1px solid var(--line);border-radius:50px;padding:8px 20px;font-size:13px;cursor:pointer;transition:.3s}
.p-step:hover{border-color:var(--gold);color:var(--gold)}
.p-step b{color:var(--gold)}
.p-arrow{color:var(--muted)}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:20px;margin-bottom:60px}
.v-card{background:var(--navy2);border:1px solid var(--line);border-radius:18px;overflow:hidden;transition:.3s;cursor:pointer}
.v-card:hover{border-color:var(--gold);transform:translateY(-6px)}
.thumb{position:relative;height:160px;display:flex;align-items:center;justify-content:center}
.thumb .v-emoji{font-size:56px}
.dur{position:absolute;bottom:10px;left:10px;background:rgba(10,26,47,.85);color:#fff;border-radius:8px;padding:2px 10px;font-size:12px}
.thumb .mini-play{width:52px;height:52px;border-radius:50%;background:rgba(10,26,47,.75);border:2px solid var(--gold);display:flex;align-items:center;justify-content:center;color:var(--gold);font-size:18px;position:absolute;transition:.3s}
.v-card:hover .mini-play{background:var(--gold);color:var(--navy);transform:scale(1.1)}
.v-body{padding:18px}
.v-body h4{font-size:15px;margin-bottom:6px}
.v-body p{color:var(--muted);font-size:13px}
.v-meta{display:flex;gap:8px;margin-top:12px}
.v-meta span{background:var(--gold-soft);color:var(--gold);border-radius:50px;padding:3px 12px;font-size:11px}
.modal{position:fixed;inset:0;background:rgba(0,0,0,.75);z-index:2000;display:none;align-items:center;justify-content:center;padding:20px}
.modal.open{display:flex}
.modal-card{background:var(--navy2);border:1px solid var(--line);border-radius:20px;max-width:640px;width:100%;position:relative;animation:fadeIn .4s ease;overflow:hidden}
.modal-x{position:absolute;top:12px;left:12px;z-index:5;background:rgba(10,26,47,.7);border:none;color:#fff;font-size:20px;width:38px;height:38px;border-radius:50%;cursor:pointer}
.modal-x:hover{color:var(--gold)}
.player{height:300px;background:#000;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px}
.player iframe{width:100%;height:100%;border:none}
.player .big-play{width:80px;height:80px;border-radius:50%;border:2px solid var(--gold);background:var(--gold-soft);color:var(--gold);font-size:28px;display:flex;align-items:center;justify-content:center;animation:pulse 2s infinite}
.player p{color:var(--muted);font-size:14px;text-align:center;padding:0 20px}
.m-body{padding:25px}
.m-body h3{font-size:19px;color:var(--gold);margin-bottom:8px}
.m-body .desc{color:var(--muted);font-size:14px;margin-bottom:18px}
.m-btns{display:flex;gap:10px;flex-wrap:wrap}
.m-btns a{flex:1 1 200px;text-align:center;padding:12px;border-radius:12px;font-weight:800;font-size:14px;text-decoration:none;transition:.3s}
.mb-gold{background:var(--grad-gold);color:var(--navy)}
.mb-gold:hover{transform:translateY(-3px)}
@keyframes fadeIn{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
@keyframes pulse{0%,100%{box-shadow:0 0 0 0 rgba(242,182,50,.4)}50%{box-shadow:0 0 0 16px rgba(242,182,50,0)}}
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
.float-ble{position:fixed;bottom:25px;right:25px;width:56px;height:56px;border-radius:50%;background:var(--grad-gold);color:var(--navy);display:flex;align-items:center;justify-content:center;text-decoration:none;z-index:1200;box-shadow:0 10px 25px rgba(242,182,50,.4);animation:pulse2 2.4s infinite}
.float-ble svg{width:26px;height:26px}
@keyframes pulse2{0%,100%{box-shadow:0 10px 25px rgba(242,182,50,.4),0 0 0 0 rgba(242,182,50,.5)}50%{box-shadow:0 10px 25px rgba(242,182,50,.4),0 0 0 18px rgba(242,182,50,0)}}
.js .reveal{opacity:0;transform:translateY(40px);transition:all .8s cubic-bezier(.4,0,.2,1)}.js .reveal.on{opacity:1;transform:translateY(0)}
@media (max-width:980px){.menu{display:none}.burger{display:flex}.topbar{display:flex}.search-console{display:none}.featured{grid-template-columns:1fr}.footer-top{grid-template-columns:1fr 1fr}.footer-bottom{justify-content:center;text-align:center}}
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
            <ul class="m-sub"><li><a href="/articles">مقالات</a></li><li><a href="/videos" style="color:var(--gold);font-weight:800">ویدیوهای آموزشی</a></li></ul></li>
        <li><button onclick="toggleSub(this)">فروشگاه <span class="caret">▼</span></button>
            <ul class="m-sub"><li><a href="/products">محصولات آموزشی</a></li><li><a href="/online">آنلاین‌سازی کسب‌وکار</a></li><li><a href="/subs">اشتراک‌ها</a></li><li><a href="/crm">CRM</a></li></ul></li>
        <li><a href="/support">پشتیبانی</a></li>
        <li><a href="/about">جیبیکو چیست؟</a></li>
        <li><a href="https://ble.ir/jibicoclub" target="_blank" style="color:var(--gold)">کانال بله</a></li>
    </ul>
</div>

<div class="wrap">
    <div class="hero">
        <h1>ویدیوهای <b>آموزشی</b> رایگان</h1>
        <p>هر ویدیو، یه قدم کوچیک و عملی در مسیر رشد درآمد — بدون هزینه، بدون تعهد.</p>
        <div class="v-stats">
            <span class="schip">🎬 <b>۶</b> ویدیو</span>
            <span class="schip">⏱️ <b>۸۵</b> دقیقه آموزش</span>
            <span class="schip">🆓 کاملاً رایگان</span>
        </div>
    </div>

    <div class="featured reveal" onclick="openVideo(1)">
        <div class="f-thumb"><span class="f-tag">⭐ پیشنهاد این هفته</span><span class="f-emoji">🎬</span><span class="play-btn">▶</span></div>
        <div class="f-info">
            <h3>چرا مهارتت پول نمی‌سازه؟</h3>
            <p>شناخت گلوگاه درآمد در ۱۲ دقیقه — همون چیزی که آزمون جیبیکو عمیق‌ترش می‌کنه.</p>
            <div class="f-meta"><span>⏱️ ۱۲:۴۰</span><span>🌱 مقدماتی</span><span>💰 درآمد</span></div>
        </div>
    </div>

    <div class="path-strip reveal">
        <span class="p-step" onclick="openVideo(1)"><b>۱.</b> شناخت گلوگاه</span>
        <span class="p-arrow">←</span>
        <span class="p-step" onclick="openVideo(2)"><b>۲.</b> سه قدم اول</span>
        <span class="p-arrow">←</span>
        <span class="p-step" onclick="openVideo(3)"><b>۳.</b> برندسازی شخصی</span>
    </div>

    <div class="grid" id="videoGrid"></div>
</div>

<div class="modal" id="modal">
    <div class="modal-card">
        <button class="modal-x" onclick="closeModal()">✕</button>
        <div class="player" id="playerBox"></div>
        <div class="m-body">
            <h3 id="mTitle"></h3>
            <p class="desc" id="mDesc"></p>
            <div class="m-btns">
                <a class="mb-gold" href="https://ble.ir/jibicoclub" target="_blank">📣 اطلاع‌رسانی در کانال بله</a>
            </div>
        </div>
    </div>
</div>

`;

