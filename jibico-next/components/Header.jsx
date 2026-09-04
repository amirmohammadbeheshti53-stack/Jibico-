"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import './Header.css'

const STATIC_ROUTES = ['/articles','/videos','/products','/shop','/subs','/online','/crm','/support','/about']

const PAGES = [
  {t:'صفحه اصلی', u:'/'},
  {t:'آزمون رایگان تشخیص', u:'/quiz'},
  {t:'پیشخوان من', u:'/dashboard'},
  {t:'سفارش‌ها', u:'/dashboard?tab=orders'},
  {t:'پیگیری سفارش', u:'/dashboard?tab=track'},
  {t:'لایسنس‌های من', u:'/dashboard?tab=licenses'},
  {t:'پروفایل', u:'/dashboard?tab=profile'},
  {t:'فروشگاه', u:'/shop'},
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
  const [accOpen, setAccOpen] = useState(false)
  const [learnOpen, setLearnOpen] = useState(false)
  const [shopOpen, setShopOpen] = useState(false)
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
    if(STATIC_ROUTES.includes(r.u)){ window.location.href = r.u }
    else { router.push(r.u) }
  }

  function submitConsult(e){
    e.preventDefault()
    const form = e.target
    const name = form.querySelector('[name="cname"]').value.trim()
    const mobile = form.querySelector('[name="cmob"]').value.trim()
    if(!name){ alert('لطفاً نامت رو بنویس.'); return }
    if(!/^09\d{9}$/.test(mobile)){ alert('شماره موبایل معتبر وارد کن.'); return }
    fetch('https://jibicoclub.ir/api/save-consult.php', {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({name, mobile, source:'banner'})
    }).then(()=>{
      form.reset();
      setShowForm(false);
      router.push('/quiz')
    }).catch(()=>{
      form.reset();
      setShowForm(false);
      router.push('/quiz')
    })
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
        <form className="announce-form" onSubmit={submitConsult}>
          <input type="text" name="cname" placeholder="نام و نام خانوادگی" required />
          <input type="tel" name="cmob" placeholder="شماره موبایل" required />
          <button type="submit">ثبت و رفتن به آزمون ←</button>
        </form>
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
            <Link href="/">صفحه اصلی</Link>

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
                <a href="/articles">مقالات</a>
                <a href="/videos">ویدیوهای آموزشی</a>
              </div>
            </div>

            <div className="has-drop">
              <a href="#shop">فروشگاه <span className="caret">▼</span></a>
              <div className="drop">
                <a href="/shop">صفحه فروشگاه</a>
                <a href="/products">محصولات آموزشی</a>
                <a href="/online">آنلاین‌سازی کسب‌وکار</a>
                <a href="/subs">اشتراک‌ها</a>
                <a href="/crm">CRM فروش</a>
              </div>
            </div>

            <a href="/support">پشتیبانی</a>
            <a href="/about">جیبیکو چیست؟</a>

            <a href="/shop" className="cart-btn" title="سبد خرید">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
              <span className="cart-count">۰</span>
            </a>

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
            <Link href="/" onClick={()=>setMenuOpen(false)}>صفحه اصلی</Link>

            <div className="m-acc">
              <button className="m-acc-head" onClick={()=>setAccOpen(!accOpen)}>حساب کاربری من <span>{accOpen?'▲':'▼'}</span></button>
              {accOpen && (
                <div className="m-acc-body">
                  <Link href="/dashboard" onClick={()=>setMenuOpen(false)}>پیشخوان من</Link>
                  <Link href="/dashboard?tab=licenses" onClick={()=>setMenuOpen(false)}>لایسنس‌های من</Link>
                  <Link href="/dashboard?tab=orders" onClick={()=>setMenuOpen(false)}>سفارش‌ها</Link>
                  <Link href="/dashboard?tab=track" onClick={()=>setMenuOpen(false)}>پیگیری سفارش</Link>
                  <Link href="/dashboard?tab=profile" onClick={()=>setMenuOpen(false)}>پروفایل</Link>
                  <a href="/" onClick={(e)=>{e.preventDefault(); setMenuOpen(false); logout()}}>خروج از سیستم</a>
                </div>
              )}
            </div>

            <div className="m-acc">
              <button className="m-acc-head" onClick={()=>setLearnOpen(!learnOpen)}>آموزش‌های رایگان <span>{learnOpen?'▲':'▼'}</span></button>
              {learnOpen && (
                <div className="m-acc-body">
                  <a href="/articles" onClick={()=>setMenuOpen(false)}>مقالات</a>
                  <a href="/videos" onClick={()=>setMenuOpen(false)}>ویدیوهای آموزشی</a>
                </div>
              )}
            </div>

            <div className="m-acc">
              <button className="m-acc-head" onClick={()=>setShopOpen(!shopOpen)}>فروشگاه <span>{shopOpen?'▲':'▼'}</span></button>
              {shopOpen && (
                <div className="m-acc-body">
                  <a href="/shop" onClick={()=>setMenuOpen(false)}>صفحه فروشگاه</a>
                  <a href="/products" onClick={()=>setMenuOpen(false)}>محصولات آموزشی</a>
                  <a href="/online" onClick={()=>setMenuOpen(false)}>آنلاین‌سازی کسب‌وکار</a>
                  <a href="/subs" onClick={()=>setMenuOpen(false)}>اشتراک‌ها</a>
                  <a href="/crm" onClick={()=>setMenuOpen(false)}>CRM فروش</a>
                </div>
              )}
            </div>

            <a href="/support" onClick={()=>setMenuOpen(false)}>پشتیبانی</a>
            <a href="/about" onClick={()=>setMenuOpen(false)}>جیبیکو چیست؟</a>
            <a href="https://ble.ir/jibicoclub" target="_blank" rel="noreferrer" onClick={()=>setMenuOpen(false)} className="ble">کانال بله</a>
          </nav>
        </div>
      )}
    </>
  )
}