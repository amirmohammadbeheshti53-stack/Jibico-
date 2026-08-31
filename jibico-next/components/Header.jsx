"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import './Header.css'

const SITE = 'https://jibicoclub.ir'

const PAGES = [
  {t:'صفحه اصلی', u:'/'},
  {t:'آزمون رایگان تشخیص', u:'/quiz'},
  {t:'پیشخوان من', u:'/dashboard'},
  {t:'سفارش‌ها', u:'/dashboard?tab=orders'},
  {t:'پیگیری سفارش', u:'/dashboard?tab=track'},
  {t:'لایسنس‌های من', u:'/dashboard?tab=licenses'},
  {t:'پروفایل', u:'/dashboard?tab=profile'},
  {t:'مقالات', u:'/articles'},
  {t:'ویدیوهای آموزشی', u:'/videos'},
  {t:'محصولات آموزشی', u:'/products'},
  {t:'آنلاین‌سازی کسب‌وکار', u:'/online'},
  {t:'اشتراک‌ها', u:'/subs'},
  {t:'CRM فروش', u:'/crm'},
  {t:'پشتیبانی', u:'/support'},
  {t:'جیبیکو چیست؟', u:'/about'},
]

export default function Header() {
  const router = useRouter()
  const [menuOpen, setMenuOpen] = useState(false)
  const [showAnnounce, setShowAnnounce] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [prog, setProg] = useState(0)
  const [q, setQ] = useState('')

  useEffect(()=>{
    const onScroll=()=>{
      const h = document.documentElement
      setProg(h.scrollTop / (h.scrollHeight - h.clientHeight) * 100)
    }
    window.addEventListener('scroll', onScroll, {passive:true})
    return ()=>window.removeEventListener('scroll', onScroll)
  },[])

  function logout(){
    localStorage.removeItem('jibico_report')
    localStorage.removeItem('jibico_profile')
    router.push('/')
  }

  const results = q.trim().length > 1 ? PAGES.filter(p => p.t.includes(q.trim())) : []

  function goSearch(r){
    setQ('')
    if(r.u.startsWith('http')) window.location.href = r.u
    else router.push(r.u)
  }

  return (
    <>
      <div className="scroll-progress" style={{width: prog+'%'}}></div>

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
          <Link href="/" className="logo-box">
            <span className="logo">جیبیکو</span>
            <span className="logo-tag">از استعداد تا درآمد</span>
          </Link>

          <div className="search-console">
            <svg className="s-mag" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.5" y2="16.5"/>
            </svg>
            <input type="text" placeholder="🔍 جستجو در جیبیکو..." value={q} onChange={e=>setQ(e.target.value)} />
            {q.trim().length > 1 && (
              <div className="search-drop">
                {results.length ? results.map((r,i)=>(
                  <button key={i} onClick={()=>goSearch(r)}>{r.t}<span className="sd-badge">صفحه</span></button>
                )) : <div className="sd-empty">نتیجه‌ای پیدا نشد</div>}
              </div>
            )}
          </div>

          <nav className="header-menu">
            <Link href="/" className="active">صفحه اصلی</Link>

            <div className="has-drop">
              <a href="#account">حساب کاربری من <span className="caret">▼</span></a>
              <div className="drop">
                <Link href="/dashboard">پیشخوان من</Link>
                <Link href="/dashboard?tab=licenses">لایسنس‌های من</Link>
                <Link href="/dashboard?tab=orders">سفارش‌ها</Link>
                <Link href="/dashboard?tab=track">پیگیری سفارش</Link>
                <Link href="/dashboard?tab=profile">پروفایل</Link>
                <a href="/" onClick={(e)=>{e.preventDefault(); logout()}}>خروج از سیستم</a>
              </div>
            </div>

            <div className="has-drop">
              <a href="#learn">آموزش‌های رایگان <span className="caret">▼</span></a>
              <div className="drop">
                <a href={'/articles'}>مقالات</a>
                <a href={'/videos'}>ویدیوهای آموزشی</a>
              </div>
            </div>

            <div className="has-drop">
              <a href="#shop">فروشگاه <span className="caret">▼</span></a>
              <div className="drop">
                <a href={'/products'}>محصولات آموزشی</a>
                <a href={'/online'}>آنلاین‌سازی کسب‌وکار</a>
                <a href={'/subs'}>اشتراک‌ها</a>
                <a href={'/crm'}>CRM</a>
              </div>
            </div>

            <a href={'/support'}>پشتیبانی</a>
            <a href={'/about'}>جیبیکو چیست؟</a>
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
            <Link href="/dashboard">پیشخوان من</Link>
            <Link href="/dashboard?tab=orders">سفارش‌ها</Link>
            <Link href="/dashboard?tab=track">پیگیری سفارش</Link>
            <Link href="/dashboard?tab=profile">پروفایل</Link>
            <a href={'/articles'}>مقالات</a>
            <a href={'/videos'}>ویدیوهای آموزشی</a>
            <a href={'/products'}>فروشگاه</a>
            <a href={'/support'}>پشتیبانی</a>
            <a href={'/about'}>جیبیکو چیست؟</a>
            <a href="https://ble.ir/jibicoclub" target="_blank" rel="noreferrer" className="ble">کانال بله</a>
            <a href="/" onClick={(e)=>{e.preventDefault(); logout()}} className="exit-m">خروج از سیستم</a>
          </nav>
        </div>
      )}
    </>
  )
}

