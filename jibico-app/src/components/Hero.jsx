import { Link } from 'react-router-dom'
import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>مسیر درآمدی مناسب شما<br />در <b>جیبیکو</b> منتظر شماست</h1>
        <p>جیبیکو با تحلیل شخصیت، مهارت‌ها و شرایط شما، نقشه راهی اختصاصی برای افزایش درآمد و رشد شغلی ارائه می‌دهد.</p>
        <div className="hero-cta">
          <Link to="/quiz" className="btn-gold">🚀 دریافت تحلیل اولیه رایگان</Link>
        </div>
        <div className="hero-mini">
          <span>⏱️ ۱۵ دقیقه</span>
          <span>🆓 کاملاً رایگان</span>
          <span>🎯 گزارش آنی</span>
        </div>
      </div>
    </section>
  )
}

export default Hero