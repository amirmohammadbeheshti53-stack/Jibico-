"use client"

import { useEffect, useState } from 'react'
import Link from 'next/link'
import './Footer.css'

const SITE = 'https://jibicoclub.ir'

export default function Footer(){
  const [showTop, setShowTop] = useState(false)
  useEffect(()=>{
    const onScroll=()=>setShowTop(window.scrollY>500)
    window.addEventListener('scroll', onScroll, {passive:true})
    return ()=>window.removeEventListener('scroll', onScroll)
  },[])
  const year = new Intl.DateTimeFormat('fa-IR',{year:'numeric'}).format(new Date())

  return (
    <>
      <footer>
        <div className="footer-top">
          <div className="f-col">
            <Link href="/" className="logo-box"><span className="logo">جیبیکو</span><span className="logo-tag">از استعداد تا درآمد</span></Link>
            <p className="f-desc">جیبیکو با تحلیل شخصیت، استعداد و شرایط تو، نقشه راه اختصاصی رشد درآمد می‌سازه — نه یه نسخه عمومی برای همه.</p>
            <div className="f-social">
              <a href="https://ble.ir/jibicoclub" target="_blank" rel="noreferrer" title="بله"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4 20-7z"/></svg></a>
              <a href="https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=b878nx4" target="_blank" rel="noreferrer" title="اینستاگرام"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg></a>
            </div>
          </div>
          <div className="f-col"><h4>دسترسی سریع</h4><ul className="f-links">
            <li><Link href="/">صفحه اصلی</Link></li>
            <li><a href={'/about'}>جیبیکو چیست؟</a></li>
            <li><a href={'/support'}>پشتیبانی</a></li>
            <li><a href="/#free">مشاوره رایگان</a></li>
          </ul></div>
          <div className="f-col"><h4>آموزش و فروشگاه</h4><ul className="f-links">
            <li><a href={'/articles'}>مقالات</a></li>
            <li><a href={'/videos'}>ویدیوهای آموزشی</a></li>
            <li><a href={'/products'}>محصولات آموزشی</a></li>
            <li><a href={'/subs'}>اشتراک‌ها</a></li>
            <li><a href={'/crm'}>CRM فروش</a></li>
          </ul></div>
          <div className="f-col"><h4>تماس با ما</h4><ul className="f-contact">
            <li><span className="c-ico">📞</span><a href="tel:+989120281178">۰۹۱۲۰۲۸۱۱۷۸</a></li>
            <li><span className="c-ico">🕐</span><span>پشتیبانی در ساعات کاری</span></li>
            <li><span className="c-ico">📣</span><a href="https://ble.ir/jibicoclub" target="_blank" rel="noreferrer">کانال بله جیبیکو</a></li>
          </ul></div>
        </div>
        <div className="footer-bottom">
          <div className="fb-copy">© {year} <b>جیبیکو</b> — کلیه حقوق محفوظ است. از استعداد تا درآمد 💛</div>
          <div className="fb-badges"><div className="badge-box">نماد اعتماد</div><div className="badge-box">ساماندهی</div></div>
        </div>
      </footer>

      <a className="float-ble" href="https://ble.ir/jibicoclub" target="_blank" rel="noreferrer" title="کانال بله">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4 20-7z"/></svg>
      </a>
      <button className={'to-top'+(showTop?' show':'')} onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}>↑</button>
    </>
  )
}

