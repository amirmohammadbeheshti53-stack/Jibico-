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
        <li><a href="/about">جیبیکو چیست؟</a></li>
        <li><a href="https://ble.ir/jibicoclub" target="_blank" style="color:var(--gold)">کانال بله</a></li>
    </ul>
</div>

<div class="wrap">
    <div class="hero">
        <h1>فروشگاه <b>جیبیکو</b></h1>
        <p>هر چیزی که برای رشد درآمدت لازم داری، در چهار دسته — هر کدوم یه قدم مشخص.</p>
    </div>

    <div class="cats reveal">
        <a class="cat" href="/products"><div class="c-ico">🎓</div><h3>محصولات آموزشی</h3><p>دوره، کتاب و کارگاه‌های عملی</p><span class="c-go">دیدن محصولات ←</span></a>
        <a class="cat" href="/online"><div class="c-ico">🌐</div><h3>آنلاین‌سازی کسب‌وکار</h3><p>سایت، مشتری‌گیری و پرداخت</p><span class="c-go">مشاوره رایگان ←</span></a>
        <a class="cat" href="/subs"><div class="c-ico">🔁</div><h3>اشتراک‌ها</h3><p>همراهی، تامین‌کننده و مشاور خرید</p><span class="c-go">دیدن اشتراک‌ها ←</span></a>
        <a class="cat" href="/crm"><div class="c-ico">📊</div><h3>CRM فروش</h3><p>مدیریت مشتری و پیگیری هوشمند</p><span class="c-go">آشنایی با CRM ←</span></a>
    </div>

    <h2 class="sec-title reveal"><u>پرفروش‌های این ماه</u></h2>
    <p class="sec-desc">اون‌هایی که بیشترین تاثیر رو روی درآمد کاربرها داشتن.</p>
    <div class="mini-grid reveal">
        <div class="mini-card">
            <span class="m-badge">پرفروش</span>
            <div class="m-ico">🎓</div>
            <h3>دوره مسیر کارشناس پنهان</h3>
            <div class="m-sub">از مهارت به درآمد پایدار</div>
            <p>۱۲ جلسه ویدیویی، ورک‌بوک، قالب نمونه‌کار و ۳ ماه پشتیبانی — برای متخصصی که دیده نمی‌شه.</p>
            <div class="m-price">۴۵۰,۰۰۰ <small>تومان</small></div>
            <a class="ord" href="/products">دیدن جزئیات و سفارش</a>
        </div>
        <div class="mini-card">
            <span class="m-badge">PDF آنی</span>
            <div class="m-ico">📖</div>
            <h3>کتاب از استعداد تا درآمد</h3>
            <div class="m-sub">استعدادشناسی درآمدی</div>
            <p>مبنای فکر جیبیکو با مثال‌های واقعی ایرانی — چرا مهارت به‌تنهایی درآمد نمی‌سازه.</p>
            <div class="m-price">۴,۹۵۰,۰۰۰ <small>تومان</small></div>
            <a class="ord" href="/products">دیدن جزئیات و سفارش</a>
        </div>
        <div class="mini-card">
            <span class="m-badge">همراهی</span>
            <div class="m-ico">🚀</div>
            <h3>برنامه اقدام ۹۰ روزه</h3>
            <div class="m-sub">نقشه شخصی + چک‌این ماهانه</div>
            <p>برنامه اختصاصی بر اساس گزارش آزمون تو + سه جلسه چک‌این که از مسیر خارج نشی.</p>
            <div class="m-price">۱,۹۵۰,۰۰۰ <small>تومان</small></div>
            <a class="ord" href="/products">دیدن جزئیات و سفارش</a>
        </div>
    </div>
    <div class="all-link reveal"><a href="/products">همه محصولات آموزشی ←</a></div>

    <div class="guarantee reveal">🛡️ ضمانت بازگشت وجه ۷ روزه روی همه محصولات — بدون سوال</div>
</div>

`;

