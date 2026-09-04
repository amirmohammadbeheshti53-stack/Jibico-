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
            <ul class="m-sub"><li><a href="/products" style="color:var(--gold);font-weight:800">محصولات آموزشی</a></li><li><a href="/online">آنلاین‌سازی کسب‌وکار</a></li><li><a href="/subs">اشتراک‌ها</a></li><li><a href="/crm">CRM</a></li></ul></li>
        <li><a href="/support">پشتیبانی</a></li>
        <li><a href="/about">جیبیکو چیست؟</a></li>
        <li><a href="https://ble.ir/jibicoclub" target="_blank" style="color:var(--gold)">کانال بله</a></li>
    </ul>
</div>

<div class="wrap">
    <div class="hero">
        <h1>محصولات <b>آموزشی</b></h1>
        <p>هر محصول، یک قدم مشخص در مسیر رشد درآمد — با جزئیات کامل تا بدون تردید انتخاب کنی.</p>
    </div>

    <div class="bundle reveal">
        <span class="b-badge">🔥 پیشنهاد ویژه</span>
        <h2>پکیج کامل جیبیکو</h2>
        <p>دوره مسیر کارشناس پنهان + کتاب استعدادشناسی درآمدی + برنامه اقدام ۹۰ روزه با همراهی — هر سه با هم، برای کسی که می‌خواد جدی شروع کنه.</p>
        <div class="b-price"><span class="fp" data-p="6450000"></span> تومان <s><span class="fp" data-p="7350000"></span></s></div>
        <span class="b-save"><span class="fp" data-p="900000"></span> تومان تخفیف باندل 🎉</span><br>
        <a class="ord-btn" href="https://ble.ir/jibico" target="_blank">سفارش پکیج از طریق بله</a>
    </div>

    <div class="prod reveal">
        <div class="prod-head">
            <div class="p-ico">🎓</div>
            <div><h2>دوره مسیر کارشناس پنهان</h2><div class="sub">از مهارت به درآمد پایدار — با نقشه راه عملی</div></div>
            <div class="price-tag"><b class="fp" data-p="4950000"></b><span>تومان</span></div>
        </div>
        <p class="desc">این دوره برای کسانیه که مهارت دارن ولی دیده نمی‌شن. در حدود ۸ ساعت محتوای ویدیویی در ۱۲ جلسه، قدم‌به‌قدم یاد می‌گیری چطور پورتفولیو بسازی، خدمتت رو بسته‌بندی و قیمت‌گذاری کنی و اولین کانال مشتری‌گیری رو راه بندازی. همراه با ورک‌بوک، تمرین‌های هفتگی و ۳ ماه پشتیبانی پرسش‌وپاسخ.</p>
        <div class="prod-cols">
            <div class="pcol"><h4>📦 چی داخلشه؟</h4><ul>
                <li>۱۲ جلسه ویدیویی (حدود ۸ ساعت)</li>
                <li>ورک‌بوک و تمرین‌های هفتگی</li>
                <li>قالب آماده صفحه نمونه‌کار</li>
                <li>قالب قیمت‌گذاری و پیشنهاد</li>
                <li>۳ ماه پشتیبانی پرسش‌وپاسخ</li>
            </ul></div>
            <div class="pcol"><h4>✅ مناسب کیه؟</h4><ul>
                <li>متخصصی که مهارت داره ولی دیده نمی‌شه</li>
                <li>فریلنسر با درآمد نامنظم</li>
                <li>کارمندی که دنبال مسیر درآمد دومه</li>
                <li>کسی که آماده اقدام عملی هست</li>
            </ul></div>
            <div class="pcol no"><h4>⛔ مناسب کی نیست؟</h4><ul>
                <li>کسی که دنبال یک‌شبه پولدار شدنه</li>
                <li>کسی که حاضر به اقدام و تمرین نیست</li>
                <li>کسی که فقط محتوای انگیزشی می‌خواد</li>
            </ul></div>
        </div>
        <div class="prod-actions">
            <a class="ord-btn" href="https://ble.ir/jibico" target="_blank">🛒 سفارش از طریق بله</a>
            <span class="note-mini">پرداخت آنلاین به‌زودی فعال می‌شه</span>
        </div>
    </div>

    <div class="prod reveal">
        <div class="prod-head">
            <div class="p-ico">📖</div>
            <div><h2>کتاب از استعداد تا درآمد</h2><div class="sub">استعدادشناسی درآمدی — نسخه PDF با دسترسی آنی</div></div>
            <div class="price-tag"><b class="fp" data-p="450000"></b><span>تومان</span></div>
        </div>
        <p class="desc">مبنای فکر جیبیکو، در دستان تو: مدل گلوگاه، آرکتایپ‌های درآمدی و مسیرهای رشد با مثال‌های واقعی ایرانی. این کتاب بهت یاد می‌ده چرا مهارت به‌تنهایی درآمد نمی‌سازه و چطور «بهره‌برداری» از مهارت رو شروع کنی. فقط نسخه PDF — بعد از سفارش، لینک دسترسی آنی برات ارسال می‌شه.</p>
        <div class="prod-cols">
            <div class="pcol"><h4>📦 چی داخلشه؟</h4><ul>
                <li>کتاب کامل PDF (دسترسی آنی)</li>
                <li>چک‌لیست شناسایی گلوگاه</li>
                <li>ورک‌بوک استعدادشناسی درآمدی</li>
            </ul></div>
            <div class="pcol"><h4>✅ مناسب کیه؟</h4><ul>
                <li>کسی که می‌خواد فکر جیبیکو رو عمیق بفهمه</li>
                <li>اهل مطالعه و یادگیری در زمان آزاده</li>
                <li>کسی که قبل از دوره، می‌خواد شروع کنه</li>
            </ul></div>
            <div class="pcol no"><h4>⛔ مناسب کی نیست؟</h4><ul>
                <li>کسی که فقط ویدیو می‌بینه و نمی‌خونه</li>
                <li>کسی که همراهی قدم‌به‌قدم می‌خواد (دوره رو ببین)</li>
            </ul></div>
        </div>
        <div class="prod-actions">
            <a class="ord-btn" href="https://ble.ir/jibico" target="_blank">🛒 سفارش از طریق بله</a>
            <span class="note-mini">فقط نسخه PDF — بدون نسخه چاپی</span>
        </div>
    </div>

    <h2 class="sec-title reveal"><u>کارگاه‌ها و همراهی</u></h2>
    <p class="sec-desc">محصولات مکمل برای کسایی که می‌خوان سریع‌تر و دقیق‌تر پیش برن — همه کارگاه‌ها به صورت <b>آفلاین و حضوری</b>.</p>
    <div class="mini-grid">
        <div class="mini-card reveal">
            <span class="m-badge">کارگاه آفلاین</span>
            <div class="m-ico">🌟</div>
            <h3>کارگاه برندسازی شخصی</h3>
            <div class="m-sub">ویژه کارشناسان پنهان</div>
            <p>در دو جلسه حضوری آفلاین، ویترین حرفه‌ای‌ات رو می‌سازی: صفحه نمونه‌کار، روایت شخصی و برنامه انتشار هفتگی.</p>
            <ul><li>۲ جلسه حضوری آفلاین + جزوه کامل</li><li>بررسی شخصی پورتفولیوی تو</li><li>قالب صفحه برند شخصی</li></ul>
            <div class="m-price"><span class="fp" data-p="2450000"></span> <small>تومان</small></div>
            <a class="ord" href="https://ble.ir/jibico" target="_blank">سفارش از طریق بله</a>
        </div>
        <div class="mini-card reveal">
            <span class="m-badge">کارگاه آفلاین</span>
            <div class="m-ico">🎯</div>
            <h3>کارگاه مشتری‌یابی و کانال فروش</h3>
            <div class="m-sub">یک کانال، متمرکز و مؤثر</div>
            <p>یاد می‌گیری مشتری‌هات کجان، چطور بدون پخش‌شدن در ده کانال، یک کانال متمرکز بسازی و از هر مشتری، ارجاع بگیری.</p>
            <ul><li>۲ جلسه آفلاین + تمرین عملی</li><li>نقشه کانال‌های مشتری‌گیری</li><li>اسکریپت آماده درخواست ارجاع</li></ul>
            <div class="m-price"><span class="fp" data-p="2450000"></span> <small>تومان</small></div>
            <a class="ord" href="https://ble.ir/jibico" target="_blank">سفارش از طریق بله</a>
        </div>
        <div class="mini-card reveal">
            <span class="m-badge">همراهی</span>
            <div class="m-ico">🚀</div>
            <h3>برنامه اقدام ۹۰ روزه + همراهی</h3>
            <div class="m-sub">نقشه شخصی + چک‌این ماهانه</div>
            <p>برنامه ۹۰ روزه اختصاصی بر اساس گزارش آزمون تو + سه جلسه چک‌این ماهانه که مطمئن شیم از مسیر خارج نمی‌شی.</p>
            <ul><li>نقشه ۹۰ روزه شخصی‌سازی‌شده</li><li>۳ جلسه چک‌این ماهانه</li><li>دسترسی به کانال همراهی</li></ul>
            <div class="m-price"><span class="fp" data-p="1950000"></span> <small>تومان</small></div>
            <a class="ord" href="https://ble.ir/jibico" target="_blank">سفارش از طریق بله</a>
        </div>
    </div>

    <div class="guarantee reveal">🛡️ ضمانت بازگشت وجه ۷ روزه — بدون سوال</div>
</div>

`;

