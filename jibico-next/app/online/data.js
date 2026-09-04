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
            <ul class="m-sub"><li><a href="/products">محصولات آموزشی</a></li><li><a href="/online" style="color:var(--gold);font-weight:800">آنلاین‌سازی کسب‌وکار</a></li><li><a href="/subs">اشتراک‌ها</a></li><li><a href="/crm">CRM</a></li></ul></li>
        <li><a href="/support">پشتیبانی</a></li>
        <li><a href="/about">جیبیکو چیست؟</a></li>
        <li><a href="https://ble.ir/jibicoclub" target="_blank" style="color:var(--gold)">کانال بله</a></li>
    </ul>
</div>

<div class="wrap">
    <div class="hero">
        <h1>کسب‌وکارت رو <b>آنلاین</b> کن</h1>
        <p>سایت، صفحه جذب مشتری و اتصال به شبکه‌های اجتماعی — هر چیزی که کسب‌وکارت برای دیده‌شدن لازم داره، با ما.</p>
        <a class="btn-gold" href="#consult">📞 اول مشاوره رایگان بگیر</a>
        <span class="mini-note">قیمت بعد از مشاوره و بر اساس نیاز تو اعلام می‌شه — شفاف و اختصاصی.</span>
    </div>

    <div class="vs reveal">
        <div class="vs-card vs-bad"><h3>❌ بدون وب‌سایت</h3><ul>
            <li>مشتری‌ها پیدات نمی‌کنن</li>
            <li>اعتبارت به دهان‌گردی وابسته‌ست</li>
            <li>سفارش‌ها لای پیام‌ها گم می‌شن</li>
            <li>فقط در ساعات کاری وجود داری</li>
        </ul></div>
        <div class="vs-card vs-good"><h3>✅ با وب‌سایت جیبیکو</h3><ul>
            <li>۲۴ ساعته در دسترس و قابل پیدا شدن</li>
            <li>ویترین حرفه‌ای که اعتماد می‌سازه</li>
            <li>فرم جذب مشتری و پیگیری منظم</li>
            <li>اتصال به شبکه‌های اجتماعی و کانال بله</li>
        </ul></div>
    </div>

    <h2 class="sec-title reveal"><u>مسیر همکاری</u></h2>
    <p class="sec-desc">چهار قدم، از اولین تماس تا تحویل — بدون هیچ هزینه پنهان.</p>
    <div class="steps4 reveal">
        <div class="st"><div class="n">۱</div><h4>مشاوره رایگان</h4><p>یک گفتگوی ۱۵ دقیقه‌ای برای شناخت کسب‌وکارت</p></div>
        <div class="st"><div class="n">۲</div><h4>نیازسنجی و پیشنهاد اختصاصی</h4><p>دامنه کار، زمان و قیمت شفاف اعلام می‌شه</p></div>
        <div class="st"><div class="n">۳</div><h4>طراحی و اجرا</h4><p>سایت، فرم جذب مشتری و اتصال شبکه‌ها</p></div>
        <div class="st"><div class="n">۴</div><h4>تحویل و پشتیبانی</h4><p>آموزش پنل + یک ماه همراهی رایگان</p></div>
    </div>

    <h2 class="sec-title reveal"><u>چرا جیبیکو؟</u></h2>
    <div class="why reveal">
        <div class="w"><div class="ico">🎯</div><h4>ابزار مشتری‌گیری، نه فقط سایت</h4><p>سایتت طوری ساخته می‌شه که لید جمع کنه، نه فقط زیبا باشه.</p></div>
        <div class="w"><div class="ico">⚡</div><h4>تحویل سریع</h4><p>بین ۲ تا ۴ هفته، بسته به دامنه کار.</p></div>
        <div class="w"><div class="ico">🤝</div><h4>همراهی بعد از تحویل</h4><p>یک ماه پشتیبانی و آموزش، رایگان.</p></div>
    </div>

    <div class="consult-card reveal" id="consult">
        <h2>📞 رزرو مشاوره رایگان آنلاین‌سازی</h2>
        <p>فرم رو پر کن؛ در ساعات کاری تماس می‌گیریم و بعد از مشاوره، قیمت دقیق و شفاف رو اعلام می‌کنیم.</p>
        <form class="c-form" id="cForm" onsubmit="submitConsult(event)">
            <input type="text" id="cName" placeholder="نام و نام خانوادگی" required>
            <input type="tel" id="cMobile" placeholder="شماره موبایل" required>
            <select id="cBiz" class="full" required>
                <option value="">نوع کسب‌وکار</option>
                <option>خدماتی</option><option>فروشگاهی</option><option>آموزشی</option><option>هنری / شخصی</option><option>سایر</option>
            </select>
            <textarea id="cMsg" class="full" rows="3" placeholder="(اختیاری) درباره کسب‌وکارت یک خط بنویس..."></textarea>
            <button type="submit">ثبت درخواست مشاوره ←</button>
            <span class="c-note">🕐 پشتیبانی در ساعات کاری | بدون هیچ تعهد مالی</span>
        </form>
        <div class="c-ok" id="cOk">✅ درخواست مشاوره‌ات ثبت شد؛ در ساعات کاری باهات تماس می‌گیریم.</div>
    </div>

    <div class="call-strip reveal">
        <span class="cs-ico">📞</span>
        <div class="cs-txt"><b>ترجیح می‌دی مستقیم صحبت کنیم؟</b><p>در ساعات کاری، پاسخگوی تلفنی تو هستیم.</p></div>
        <a href="tel:+989120281178" class="cs-btn">۰۹۱۲۰۲۸۱۱۷۸</a>
    </div>
</div>

`;

