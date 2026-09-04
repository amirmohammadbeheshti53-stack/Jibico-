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
        <li><a href="/support" style="color:var(--gold);font-weight:800">پشتیبانی</a></li>
        <li><a href="/about">جیبیکو چیست؟</a></li>
        <li><a href="https://ble.ir/jibicoclub" target="_blank" style="color:var(--gold)">کانال بله</a></li>
    </ul>
</div>

<div class="wrap">
    <div class="hero">
        <h1>پشتیبانی <b>جیبیکو</b></h1>
        <p>هر سوالی داری، این‌جاییم که کمکت کنیم — سریع و بدون پیچیدگی.</p>
        <div class="status-chips">
            <span class="schip"><span class="dot-g"></span> آنلاین و پاسخگو</span>
            <span class="schip">⏱️ میانگین پاسخ: <b>۷۲ ساعت</b></span>
            <span class="schip">🕐 <b>ساعات کاری</b></span>
        </div>
    </div>

    <h2 class="sec-title reveal"><u>راه‌های ارتباطی</u></h2>
    <div class="channels reveal">
        <a href="tel:+989120281178" class="ch-card">
            <div class="ico">📞</div>
            <h3>تماس تلفنی</h3>
            <p>در ساعات کاری، مستقیم با ما صحبت کن</p>
            <span class="val">۰۹۱۲۰۲۸۱۱۷۸</span>
        </a>
        <a href="https://ble.ir/jibico" target="_blank" class="ch-card">
            <div class="ico">📣</div>
            <h3>کانال بله جیبیکو</h3>
            <p>پیام بذار، در ساعات کاری پاسخ می‌دیم</p>
            <span class="val">ble.ir/jibico</span>
        </a>
    </div>

    <h2 class="sec-title reveal"><u>ثبت درخواست پشتیبانی</u></h2>
    <div class="req-card reveal">
        <h3>فرم درخواست</h3>
        <p>فرم رو پر کن؛ در ساعات کاری باهات تماس می‌گیریم.</p>
        <form class="w-form" id="wForm" onsubmit="submitReq(event)">
            <input type="text" id="rName" placeholder="نام و نام خانوادگی" required>
            <input type="tel" id="rMobile" placeholder="شماره موبایل" required>
            <select id="rSubject" class="full" required>
                <option value="">موضوع درخواست</option>
                <option>سوال درباره آزمون و گزارش</option>
                <option>پیگیری سفارش / اشتراک</option>
                <option>مشکل فنی سایت</option>
                <option>درخواست مشاوره</option>
                <option>سایر</option>
            </select>
            <textarea id="rMsg" class="full" rows="4" placeholder="توضیح درخواستت..."></textarea>
            <button type="submit">ثبت درخواست ←</button>
        </form>
        <div class="w-ok" id="wOk">✅ درخواستت ثبت شد؛ در ساعات کاری باهات تماس می‌گیریم.</div>
    </div>

    <h2 class="sec-title reveal"><u>سوالات متداول — شاید جواب همین‌جا باشه</u></h2>
    <div class="faq reveal">
        <div class="faq-item"><button class="faq-q" onclick="faqToggle(this)">گزارش آزمونی که دادم کجا می‌ره؟ <span>+</span></button>
            <div class="faq-a"><p>در پایان آزمون، گزارش کاملت (آرکتایپ، MBTI، DISC، گلوگاه و قدم‌های اول) همون‌جا نمایش داده می‌شه. برای بررسی دقیق‌تر، می‌تونی از همون صفحه، مشاوره تلفنی رزرو کنی.</p></div></div>
        <div class="faq-item"><button class="faq-q" onclick="faqToggle(this)">چطور PDF مقاله رو دانلود کنم؟ <span>+</span></button>
            <div class="faq-a"><p>در پایان هر مقاله، نام و شماره موبایلت رو وارد کن تا لینک دانلود PDF همون‌جا برات باز بشه.</p></div></div>
        <div class="faq-item"><button class="faq-q" onclick="faqToggle(this)">مشاوره رایگان چطور برگزار می‌شه؟ <span>+</span></button>
            <div class="faq-a"><p>بعد از ثبت‌نام، در زمان انتخابی باهات تماس می‌گیریم؛ یه گفتگوی ۱۵ دقیقه‌ای برای بررسی گلوگاه اصلی و قدم بعدی.</p></div></div>
        <div class="faq-item"><button class="faq-q" onclick="faqToggle(this)">سفارش محصول از چه طریقیه؟ <span>+</span></button>
            <div class="faq-a"><p>از طریق کانال بله جیبیکو؛ پیام بذار تا راهنماییت کنیم. پرداخت آنلاین به‌زودی فعال می‌شه.</p></div></div>
        <div class="faq-item"><button class="faq-q" onclick="faqToggle(this)">آزمون چقدر طول می‌کشه؟ <span>+</span></button>
            <div class="faq-a"><p>حدود ۱۵ دقیقه؛ شامل سوالات وضعیت، مهارت، MBTI، DISC و چند سوال تشریحی کوتاه.</p></div></div>
    </div>
</div>

`;

