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

