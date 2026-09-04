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
            <ul class="m-sub"><li><a href="/products">محصولات آموزشی</a></li><li><a href="/online">آنلاین‌سازی کسب‌وکار</a></li><li><a href="/subs">اشتراک‌ها</a></li><li><a href="/crm" style="color:var(--gold);font-weight:800">CRM</a></li></ul></li>
        <li><a href="/support">پشتیبانی</a></li>
        <li><a href="/about">جیبیکو چیست؟</a></li>
        <li><a href="https://ble.ir/jibicoclub" target="_blank" style="color:var(--gold)">کانال بله</a></li>
    </ul>
</div>

<div class="wrap">
    <div class="hero">
        <span class="kicker">📊 CRM فروش جیبیکو</span>
        <h1>مشتری‌هات رو <b>نظم</b> بده، درآمدت رو <b>دیده</b>بان</h1>
        <p>یک CRM حرفه‌ای به سبک بهترین‌های بازار — با لید خودکار، پایپ‌لاین فروش، فاکتورزنی و گزارش درآمد؛ به‌علاوه اتصال به شبکه مشاور خرید جیبیکو.</p>
        <div class="hero-btns">
            <a class="btn-gold" href="#demo">▶ دموی تعاملی پایپ‌لاین</a>
            <a class="btn-line" href="https://ble.ir/jibico" target="_blank">سفارش از طریق بله</a>
        </div>
    </div>

    <h2 class="sec-title reveal"><u>امکانات، به سبک حرفه‌ای‌ها</u></h2>
    <p class="sec-desc">هر چیزی که یک CRM کامل داره — به‌علاوه امضای جیبیکو.</p>
    <div class="feats reveal">
        <div class="feat"><div class="ico">📥</div><h4>ثبت خودکار لید</h4><p>فرم‌های سایت مستقیم وارد CRM می‌شن</p></div>
        <div class="feat"><div class="ico">🧭</div><h4>پایپ‌لاین فروش</h4><p>مراحل معامله از لید تا نهایی</p></div>
        <div class="feat new"><div class="ico">🧾</div><h4>فاکتورزنی</h4><p>فاکتور و پیش‌فاکتور فروش</p></div>
        <div class="feat"><div class="ico">⏰</div><h4>یادآور هوشمند</h4><p>هیچ پیگیری‌ای فراموش نمی‌شه</p></div>
        <div class="feat"><div class="ico">🕐</div><h4>تاریخچه کامل</h4><p>تماس، پیام و جلسه در یک‌جا</p></div>
        <div class="feat"><div class="ico">📊</div><h4>گزارش درآمد</h4><p>قیف فروش و عملکرد لحظه‌ای</p></div>
        <div class="feat"><div class="ico">🏷️</div><h4>برچسب‌گذاری</h4><p>داغ / سرد / نهایی‌شده</p></div>
        <div class="feat"><div class="ico">✉️</div><h4>پیامک و ایمیل</h4><p>کمپین و اطلاع‌رسانی خودکار</p></div>
        <div class="feat"><div class="ico">🔐</div><h4>سطح دسترسی تیم</h4><p>هر عضو، فقط کار خودش</p></div>
        <div class="feat new"><div class="ico">🤝</div><h4>اتصال به مشاور خرید</h4><p>شبکه مشاوران جیبیکو کنار تو</p></div>
    </div>

    <!-- دموی تعاملی -->
    <div class="demo reveal" id="demo">
        <div class="demo-head">
            <div><h3>🎮 دموی تعاملی پایپ‌لاین</h3><span class="hint">روی هر مشتری کلیک کن تا به مرحله بعد بره — درآمد نهایی‌شده رو ببین.</span></div>
            <div class="rev-box"><b id="revNum">۰</b><span>درآمد نهایی‌شده (تومان)</span></div>
        </div>
        <div class="board" id="board"></div>
    </div>

    <div class="wait-card reveal">
        <h2>🚀 تو صف راه‌اندازی CRM</h2>
        <p>CRM جیبیکو در فاز بک‌اند فعال می‌شه؛ همین حالا جا رزرو کن تا با انتشار، جزو اولین‌ها باشی.</p>
        <form class="w-form" id="wForm" onsubmit="submitWait(event)">
            <input type="text" id="wName" placeholder="نام و نام خانوادگی" required>
            <input type="tel" id="wMobile" placeholder="شماره موبایل" required>
            <input type="text" id="wBiz" class="full" placeholder="(اختیاری) نام کسب‌وکار">
            <button type="submit">رزرو جای من ←</button>
        </form>
        <div class="w-ok" id="wOk">✅ جای تو در صف راه‌اندازی CRM رزرو شد؛ با انتشار، اول به تو خبر می‌دیم!</div>
    </div>
</div>

`;

