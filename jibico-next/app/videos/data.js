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

