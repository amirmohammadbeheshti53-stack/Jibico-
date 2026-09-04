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
            <ul class="m-sub"><li><a href="/articles" style="color:var(--gold);font-weight:800">مقالات</a></li><li><a href="/videos">ویدیوهای آموزشی</a></li></ul></li>
        <li><button onclick="toggleSub(this)">فروشگاه <span class="caret">▼</span></button>
            <ul class="m-sub"><li><a href="/products">محصولات آموزشی</a></li><li><a href="/online">آنلاین‌سازی کسب‌وکار</a></li><li><a href="/subs">اشتراک‌ها</a></li><li><a href="/crm">CRM</a></li></ul></li>
        <li><a href="/support">پشتیبانی</a></li>
        <li><a href="/about">جیبیکو چیست؟</a></li>
        <li><a href="https://ble.ir/jibicoclub" target="_blank" style="color:var(--gold)">کانال بله</a></li>
    </ul>
</div>

<div class="wrap">
    <div class="hero">
        <h1>مقالات <b>آموزشی</b> رایگان</h1>
        <p>بیست کتابچه کامل و عمیق — بخون، تمرین کن، PDFش رو رایگان ببر.</p>
        <div class="a-stats">
            <span class="astat">📚 <b id="artCount">۲۰</b> کتابچه کامل</span>
            <span class="astat">⏱️ <b>۴+</b> ساعت مطالعه</span>
            <span class="astat">🛠️ <b>۶۰+</b> تمرین و قالب</span>
            <span class="astat">📥 PDF رایگان</span>
        </div>
    </div>

    <div class="tools">
        <input type="text" class="a-search" id="aSearch" oninput="window.renderList()" placeholder="🔍 جستجو در مقالات...">
        <div class="filters" id="filters">
            <button class="active" onclick="setCat('all',this)">همه</button>
            <button onclick="setCat('gap',this)">🔍 گلوگاه درآمد</button>
            <button onclick="setCat('brand',this)">🌟 برندسازی</button>
            <button onclick="setCat('price',this)">💳 قیمت‌گذاری</button>
            <button onclick="setCat('channel',this)">🎯 مشتری‌یابی</button>
            <button onclick="setCat('person',this)">🧠 شخصیت و رفتار</button>
        </div>
    </div>

    <div class="grid" id="artList"></div>
    <div id="articleView"></div>
</div>

`;

