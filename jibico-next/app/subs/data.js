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
            <ul class="m-sub"><li><a href="/products">محصولات آموزشی</a></li><li><a href="/online">آنلاین‌سازی کسب‌وکار</a></li><li><a href="/subs" style="color:var(--gold);font-weight:800">اشتراک‌ها</a></li><li><a href="/crm">CRM</a></li></ul></li>
        <li><a href="/support">پشتیبانی</a></li>
        <li><a href="/about">جیبیکو چیست؟</a></li>
        <li><a href="https://ble.ir/jibicoclub" target="_blank" style="color:var(--gold)">کانال بله</a></li>
    </ul>
</div>

<div class="wrap">
    <div class="hero">
        <h1>اشتراک‌های <b>جیبیکو</b></h1>
        <p>همراهی مستمر، تا نتیجه — برای رشد خودت، برای تامین‌کننده‌ها و برای مشاورهای خرید.</p>
    </div>

    <h2 class="sec-title reveal"><u>اشتراک‌های عمومی</u></h2>
    <p class="sec-desc">برای هر کسی که می‌خواد مسیر درآمدش رو با همراهی پیش ببره.</p>
    <div class="plans reveal">
        <div class="plan">
            <div class="p-ico">🔁</div><h3>پلاس</h3><div class="who">شروع همراهی</div>
            <div class="price"><span class="fp" data-p="500000"></span> <small>تومان / ماهانه</small></div>
            <ul><li>گزارش تازه ماهانه از وضعیتت</li><li>پیگیری پیشرفت برنامه</li><li>اولویت پشتیبانی</li><li>عضویت در کامیونیتی خصوصی</li></ul>
            <a class="ord" href="https://ble.ir/jibico" target="_blank">سفارش از طریق بله</a>
        </div>
        <div class="plan pop">
            <span class="pop-tag">⭐ محبوب‌ترین</span>
            <div class="p-ico">🚀</div><h3>پرو</h3><div class="who">رشد جدی</div>
            <div class="price"><span class="fp" data-p="1000000"></span> <small>تومان / ماهانه</small></div>
            <ul><li>همه موارد پلاس</li><li>جلسه چک‌این ماهانه با کوچ</li><li>۲۰٪ تخفیف همه دوره‌ها</li><li>بازبینی فصلی نقشه راه</li></ul>
            <a class="ord" href="https://ble.ir/jibico" target="_blank">سفارش از طریق بله</a>
        </div>
        <div class="plan">
            <div class="p-ico">👥</div><h3>تیم</h3><div class="who">کسب‌وکارهای کوچک</div>
            <div class="price"><span class="fp" data-p="2400000"></span> <small>تومان / ماهانه</small></div>
            <ul><li>۳ عضو تیم</li><li>گزارش اختصاصی هر عضو</li><li>جلسه ماهانه تیمی</li><li>مشاوره آنلاین‌سازی</li></ul>
            <a class="ord" href="https://ble.ir/jibico" target="_blank">سفارش از طریق بله</a>
        </div>
    </div>

    <h2 class="sec-title reveal"><u>اشتراک تامین‌کننده</u></h2>
    <p class="sec-desc">تامین‌کننده‌ای؟ با خرید اشتراک، در اپلیکیشن جیبیکو دیده می‌شی و درخواست‌های خرید به سمتت میاد.</p>
    <div class="plans reveal">
        <div class="plan">
            <div class="p-ico">🚚</div><h3>پلاس</h3><div class="who">شروع دیده‌شدن</div>
            <div class="price"><span class="fp" data-p="5000000"></span> <small>تومان / ماهانه</small></div>
            <ul><li>نمایش در بخش تامین‌کنندگان اپ</li><li>تا ۱۰ درخواست خرید در ماه</li><li>صفحه پروفایل تامین‌کننده</li><li>پشتیبانی در ساعات کاری</li></ul>
            <a class="ord" href="https://ble.ir/jibico" target="_blank">سفارش از طریق بله</a>
        </div>
        <div class="plan pop">
            <span class="pop-tag">⭐ پیشنهاد ما</span>
            <div class="p-ico">🏭</div><h3>پرو</h3><div class="who">رشد تامین</div>
            <div class="price"><span class="fp" data-p="7000000"></span> <small>تومان / ماهانه</small></div>
            <ul><li>نمایش در اول لیست تامین‌کنندگان</li><li>تا ۳۰ درخواست خرید در ماه</li><li>نشان کیفیت جیبیکو</li><li>گزارش ماهانه عملکرد</li></ul>
            <a class="ord" href="https://ble.ir/jibico" target="_blank">سفارش از طریق بله</a>
        </div>
        <div class="plan">
            <div class="p-ico">💎</div><h3>پلاتینیوم</h3><div class="who">بازیگر بزرگ بازار</div>
            <div class="price"><span class="fp" data-p="12000000"></span> <small>تومان / ماهانه</small></div>
            <ul><li>درخواست‌های خرید نامحدود</li><li>نمایش اختصاصی در دسته‌بندی تو</li><li>مدیر حساب اختصاصی</li><li>اولویت در سیستم اتصال</li></ul>
            <a class="ord" href="https://ble.ir/jibico" target="_blank">سفارش از طریق بله</a>
        </div>
    </div>

    <h2 class="sec-title reveal"><u>اشتراک مشاور خرید</u></h2>
    <p class="sec-desc">مشاور خریدی؟ با خرید اشتراک، در اپلیکیشن جیبیکو به تامین‌کننده‌ها وصل می‌شی و مشتری می‌گیری.</p>
    <div class="plans reveal">
        <div class="plan">
            <div class="p-ico">🧭</div><h3>پلاس</h3><div class="who">شروع مشاوره</div>
            <div class="price"><span class="fp" data-p="1000000"></span> <small>تومان / ماهانه</small></div>
            <ul><li>نمایش در بخش مشاوران اپ</li><li>تا ۱۰ اتصال مشتری در ماه</li><li>صفحه پروفایل مشاور</li><li>پشتیبانی در ساعات کاری</li></ul>
            <a class="ord" href="https://ble.ir/jibico" target="_blank">سفارش از طریق بله</a>
        </div>
        <div class="plan pop">
            <span class="pop-tag">⭐ پیشنهاد ما</span>
            <div class="p-ico">🎯</div><h3>پرو</h3><div class="who">مشاور حرفه‌ای</div>
            <div class="price"><span class="fp" data-p="3000000"></span> <small>تومان / ماهانه</small></div>
            <ul><li>نمایش در اول لیست + نشان تایید</li><li>تا ۳۰ اتصال مشتری در ماه</li><li>گزارش ماهانه درآمد</li><li>اولویت در پیشنهادهای ویژه</li></ul>
            <a class="ord" href="https://ble.ir/jibico" target="_blank">سفارش از طریق بله</a>
        </div>
        <div class="plan">
            <div class="p-ico">💎</div><h3>پلاتینیوم</h3><div class="who">برند مشاوره</div>
            <div class="price"><span class="fp" data-p="5000000"></span> <small>تومان / ماهانه</small></div>
            <ul><li>اتصال مشتری نامحدود</li><li>نمایش اختصاصی در دسته‌بندی تو</li><li>مدیر حساب اختصاصی</li><li>اولویت در سیستم اتصال</li></ul>
            <a class="ord" href="https://ble.ir/jibico" target="_blank">سفارش از طریق بله</a>
        </div>
    </div>

    <div class="app-teaser reveal">
        <div class="a-ico">📱</div>
        <h2>اپلیکیشن <b>جیبیکو</b> — به‌زودی</h2>
        <p>اپلیکیشن جیبیکو، تامین‌کننده رو به مشاور خرید وصل می‌کنه و بالعکس. اشتراکت رو همین حالا رزرو کن؛ با انتشار اپ، پروفایلت فعال و در اولویت نمایش قرار می‌گیره.</p>
        <a class="btn-gold" href="https://ble.ir/jibico" target="_blank">رزرو اشتراک از طریق بله</a>
    </div>
</div>

`;

