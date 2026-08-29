import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showAnnounce, setShowAnnounce] = useState(true)
  const [showForm, setShowForm] = useState(false)

  return (
    <>
      {showAnnounce && (
        <div className="announce">
          <span className="an-text">🎁 <b>پیشنهاد هفته</b> مشاوره رایگان برای ۲۰ نفر اول</span>
          <button className="an-btn" onClick={() => setShowForm(!showForm)}>همین الان رزرو کن</button>
          <button className="close-a" onClick={() => setShowAnnounce(false)}>✕</button>
        </div>
      )}

      {showForm && (
        <div className="announce-form">
          <input type="text" placeholder="نام و نام خانوادگی" />
          <input type="tel" placeholder="شماره موبایل" />
          <button>ثبت و رفتن به آزمون ←</button>
        </div>
      )}

      <header className="site-header">
        <div className="header-nav">
          <Link to="/" className="logo-box">
            <span className="logo">جیبیکو</span>
            <span className="logo-tag">از استعداد تا درآمد</span>
          </Link>

          <div className="search-console">
            <svg className="s-mag" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.5" y2="16.5"/>
            </svg>
            <input type="text" placeholder="🔍 جستجو در جیبیکو..." />
          </div>

          <nav className="header-menu">
            <Link to="/" className="active">صفحه اصلی</Link>

            <div className="has-drop">
              <a href="#account">حساب کاربری من <span className="caret">▼</span></a>
              <div className="drop">
                <a href="#dash">پیشخوان من</a>
                <a href="#license">لایسنس‌های من</a>
                <a href="#orders">سفارش‌ها</a>
                <a href="#track">پیگیری سفارش</a>
                <a href="#profile">پروفایل</a>
                <a href="#exit">خروج از سیستم</a>
              </div>
            </div>

            <div className="has-drop">
              <a href="#learn">آموزش‌های رایگان <span className="caret">▼</span></a>
              <div className="drop">
                <a href="#articles">مقالات</a>
                <a href="#videos">ویدیوهای آموزشی</a>
              </div>
            </div>

            <div className="has-drop">
              <a href="#shop">فروشگاه <span className="caret">▼</span></a>
              <div className="drop">
                <a href="#products">محصولات آموزشی</a>
                <a href="#online">آنلاین‌سازی کسب‌وکار</a>
                <a href="#subs">اشتراک‌ها</a>
                <a href="#crm">CRM</a>
              </div>
            </div>

            <a href="#support">پشتیبانی</a>
            <a href="#about">جیبیکو چیست؟</a>
            <a href="https://ble.ir/jibicoclub" target="_blank" rel="noreferrer" className="ble">کانال بله</a>
          </nav>

          <button className="burger" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>

      {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)}></div>}
      {menuOpen && (
        <div className="m-panel">
          <button className="close-x" onClick={() => setMenuOpen(false)}>✕</button>
          <nav className="m-menu">
            <Link to="/">صفحه اصلی</Link>
            <a href="#account">حساب کاربری من</a>
            <a href="#articles">مقالات</a>
            <a href="#videos">ویدیوهای آموزشی</a>
            <a href="#shop">فروشگاه</a>
            <a href="#support">پشتیبانی</a>
            <a href="#about">جیبیکو چیست؟</a>
            <a href="https://ble.ir/jibicoclub" target="_blank" rel="noreferrer" className="ble">کانال بله</a>
          </nav>
        </div>
      )}
    </>
  )
}

export default Header