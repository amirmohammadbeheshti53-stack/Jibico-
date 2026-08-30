import './Hero.css'

export default function Hero(){
  return (
    <section className="hero">
      <div className="hero-grid">
        <div className="hero-photo">
          <img src="/jamal.jpg" alt="جمال صمدی" />
          <div className="name-card">
            <h3>جمال صمدی</h3>
            <p>پژوهشگر توسعه فردی و طراحی مسیر درآمد<br/>بیش از ۱۰ سال تجربه در حوزه کسب‌وکار و رشد درآمد</p>
          </div>
        </div>
        <div className="hero-text">
          <h1>مسیر درآمدی مناسب شما<br/>در <b>جیبیکو</b> منتظر شماست</h1>
          <p>جیبیکو با تحلیل شخصیت، مهارت‌ها و شرایط شما، نقشه راهی اختصاصی برای افزایش درآمد و رشد شغلی ارائه می‌دهد.</p>
          <div className="hero-cta">
            <a href="#free" className="btn-gold">🚀 دریافت تحلیل اولیه رایگان</a>
          </div>
          <div className="hero-mini">
            <span>⏱️ ۵ دقیقه</span>
            <span>🆓 کاملاً رایگان</span>
            <span>🎯 گزارش آنی</span>
          </div>
        </div>
      </div>
      <div className="trust">
        <div className="trust-item"><span className="t-ico">🎯</span>تحلیل علمی و دقیق</div>
        <div className="trust-item"><span className="t-ico">🔒</span>حفظ کامل اطلاعات</div>
        <div className="trust-item"><span className="t-ico">📄</span>گزارش اختصاصی شما</div>
        <div className="trust-item"><span className="t-ico">🎧</span>پشتیبانی و همراهی</div>
      </div>
    </section>
  )
}