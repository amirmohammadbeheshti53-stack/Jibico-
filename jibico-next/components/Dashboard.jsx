"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { ARCHETYPES, BOTTLENECK_NAMES, PLAYBOOKS } from '../utils/score'
import { api } from '../lib/api'
import './Dashboard.css'

const TABS = [
  {id:'overview', e:'🏠', t:'نمای کلی'},
  {id:'report',   e:'📊', t:'گزارش آزمون'},
  {id:'orders',   e:'🛒', t:'سفارش‌ها'},
  {id:'track',    e:'📦', t:'پیگیری سفارش'},
  {id:'licenses', e:'🔑', t:'لایسنس‌های من'},
  {id:'profile',  e:'👤', t:'پروفایل'},
]

const STATUS_FA = { paid:'پرداخت شده', pending:'در انتظار بررسی', delivered:'تحویل شده', cancelled:'لغو شده' }

export default function Dashboard(){
  const router = useRouter()
  const searchParams = useSearchParams()
  const [tab, setTab] = useState(searchParams?.get('tab') || 'overview')

  useEffect(()=>{
    const t = searchParams?.get('tab')
    if(t && TABS.some(x=>x.id===t)) setTab(t)
    else if(!t) setTab('overview')
  },[searchParams])

  const [profile, setProfile] = useState(null)
  const [report, setReport] = useState(null)
  const [pName, setPName] = useState('')
  const [pMobile, setPMobile] = useState('')
  const [trackCode, setTrackCode] = useState('')
  const [trackMsg, setTrackMsg] = useState(null)
  const [trackList, setTrackList] = useState(null)
  const [orders, setOrders] = useState([])

  useEffect(()=>{
    try{
      const p = JSON.parse(localStorage.getItem('jibico_profile')||'null')
      if(p){ setProfile(p); setPName(p.name||''); setPMobile(p.mobile||'') }
    }catch(e){}
    try{ setReport(JSON.parse(localStorage.getItem('jibico_report')||'null')) }catch(e){}
  },[])

  useEffect(()=>{
    if(profile?.mobile){
      fetch('https://jibicoclub.ir/api/my-orders.php',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({mobile:profile.mobile})})
        .then(r=>r.json()).then(d=>{ if(d&&d.ok) setOrders(d.orders||[]) }).catch(()=>{})
    }
  },[profile])

  const completeness = (report?60:0) + (profile?40:0)
  const activeLicenses = orders.filter(o=>o.status==='paid'||o.status==='delivered').length

  function saveProfile(){
    if(!pName.trim()){ alert('لطفاً نامت رو بنویس.'); return }
    if(!/^09\d{9}$/.test(pMobile.trim())){ alert('شماره موبایل معتبر وارد کن.'); return }
    const p = { name:pName.trim(), mobile:pMobile.trim() }
    localStorage.setItem('jibico_profile', JSON.stringify(p))
    api('save-profile.php', p)
    setProfile(p)
    alert('✅ پروفایل ذخیره شد.')
  }

  function trackOrder(){
    if(!trackCode.trim()){ setTrackMsg('لطفاً کد سفارش رو وارد کن.'); setTrackList(null); return }
    fetch('https://jibicoclub.ir/api/my-orders.php',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({track:trackCode.trim()})})
      .then(r=>r.json()).then(d=>{
        if(d&&d.ok&&d.orders.length){ setTrackList(d.orders); setTrackMsg(null) }
        else { setTrackList(null); setTrackMsg('سفارشی با این کد پیدا نشد. کد رو بررسی کن یا از پشتیبانی کمک بگیر.') }
      }).catch(()=>{ setTrackList(null); setTrackMsg('خطا در ارتباط با سرور؛ دوباره تلاش کن.') })
  }

  function logout(){
    localStorage.removeItem('jibico_report')
    localStorage.removeItem('jibico_profile')
    router.push('/')
  }

  function faPrice(n){ return Number(n).toLocaleString('fa-IR') }
  function faDate(d){ try{ return new Date(d).toLocaleDateString('fa-IR') }catch(e){ return d } }

  return (
    <section className="dash">
      <aside className="dash-side">
        <div className="dash-user">
          <div className="dash-avatar">{profile ? profile.name[0] : '👤'}</div>
          <div>
            <b>{profile ? profile.name : 'کاربر جیبیکو'}</b>
            <span>تکمیل پروفایل: {completeness}٪</span>
          </div>
        </div>
        <nav>
          {TABS.map(t=>(
            <button key={t.id} className={'dash-link'+(tab===t.id?' active':'')} onClick={()=>setTab(t.id)}>{t.e} {t.t}</button>
          ))}
          <button className="dash-link exit" onClick={logout}>🚪 خروج از سیستم</button>
        </nav>
      </aside>

      <div className="dash-main">
        {tab==='overview' && (
          <>
            <h1>سلام{profile ? ' '+profile.name : ''} 👋</h1>
            <div className="stat-grid">
              <div className="stat"><div className="s-e">🧭</div><b>{report ? 'داده شده ✅' : 'ندادی'}</b><span>آزمون تشخیص</span></div>
              <div className="stat"><div className="s-e">🔍</div><b>{report ? BOTTLENECK_NAMES[report.primary] : '—'}</b><span>گلوگاه اصلی</span></div>
              <div className="stat"><div className="s-e">🛒</div><b>{orders.length.toLocaleString('fa-IR')}</b><span>سفارش‌ها</span></div>
              <div className="stat"><div className="s-e">🔑</div><b>{activeLicenses.toLocaleString('fa-IR')}</b><span>لایسنس فعال</span></div>
            </div>
            {report ? (
              <div className="dash-card">
                <h3>{ARCHETYPES[report.archetype].e} آرکتایپ تو: {ARCHETYPES[report.archetype].t}</h3>
                <div className="d-bar-row"><div className="d-bar-label"><span>سطح مهارت</span><b>{report.skill}٪</b></div><div className="d-bar"><div style={{width:report.skill+'%'}}></div></div></div>
                <div className="d-bar-row"><div className="d-bar-label"><span>بهره‌برداری مالی</span><b>{report.monet}٪</b></div><div className="d-bar"><div style={{width:report.monet+'%'}}></div></div></div>
                <button className="btn-gold" onClick={()=>setTab('report')}>مشاهده گزارش کامل ↗</button>
              </div>
            ) : (
              <div className="dash-card center">
                <h3>هنوز آزمون ندادی!</h3>
                <p>اولین قدم برای ساختن نقشه راه درآمدت، دادن آزمون رایگانه.</p>
                <Link href="/quiz" className="btn-gold">🚀 شروع آزمون رایگان</Link>
              </div>
            )}
          </>
        )}

        {tab==='report' && (
          <>
            <h1>📊 گزارش آزمون تو</h1>
            {report ? (
              <>
                <div className="dash-card">
                  <h3>{ARCHETYPES[report.archetype].e} {ARCHETYPES[report.archetype].t}</h3>
                  <p className="d-muted">{ARCHETYPES[report.archetype].h}</p>
                  <div className="d-bar-row"><div className="d-bar-label"><span>سطح مهارت</span><b>{report.skill}٪</b></div><div className="d-bar"><div style={{width:report.skill+'%'}}></div></div></div>
                  <div className="d-bar-row"><div className="d-bar-label"><span>بهره‌برداری مالی</span><b>{report.monet}٪</b></div><div className="d-bar"><div style={{width:report.monet+'%'}}></div></div></div>
                  <div className="d-bar-row"><div className="d-bar-label"><span>فشار شکاف</span><b>{report.gap}٪</b></div><div className="d-bar"><div style={{width:report.gap+'%'}}></div></div></div>
                </div>
                <div className="dash-card">
                  <h3>🧠 شخصیت و سبک رفتار</h3>
                  <div className="d-chips">
                    <span className="d-chip">MBTI: {report.mbti.type}</span>
                    <span className="d-chip">مزاج: {report.mbti.temperament}</span>
                    <span className="d-chip">DISC: {report.disc.style}</span>
                  </div>
                </div>
                <div className="dash-card">
                  <h3>🎯 سه قدم اول تو</h3>
                  {PLAYBOOKS[report.primary].map((s,i)=>(<div className="d-line" key={i}>{i+1}. {s}</div>))}
                </div>
              </>
            ) : (
              <div className="dash-card center"><p>گزارشی نیست؛ اول آزمون بده.</p><Link href="/quiz" className="btn-gold">شروع آزمون</Link></div>
            )}
          </>
        )}

        {tab==='orders' && (
          <>
            <h1>🛒 سفارش‌ها</h1>
            {!profile ? (
              <div className="dash-card center">
                <h3>اول پروفایلت رو کامل کن</h3>
                <p>برای دیدن سفارش‌هات، شماره موبایلی که باهاش خرید کردی رو توی پروفایل ثبت کن.</p>
                <button className="btn-gold" onClick={()=>setTab('profile')}>تکمیل پروفایل</button>
              </div>
            ) : orders.length ? (
              orders.map((o,i)=>(
                <div className="dash-card" key={i}>
                  <h3>{o.product_name}</h3>
                  <div className="d-chips">
                    <span className="d-chip">کد: {o.track_code}</span>
                    <span className="d-chip">مبلغ: {faPrice(o.price)} تومان</span>
                    <span className="d-chip">وضعیت: {STATUS_FA[o.status]||o.status}</span>
                    <span className="d-chip">تاریخ: {faDate(o.created_at)}</span>
                  </div>
                  {o.delivery_info && <a className="btn-gold" href={o.delivery_info} target="_blank" rel="noreferrer">📥 دریافت محصول</a>}
                </div>
              ))
            ) : (
              <div className="empty-box">
                <div className="e-ico">🛒</div>
                <h3>هنوز سفارش ثبت نکردی</h3>
                <p>وقتی محصول یا اشتراکی بخری، همه سفارش‌هات اینجا با وضعیت و فاکتور نشون داده می‌شن.</p>
                <div className="e-actions">
                  <Link className="btn-gold" href="/products">مشاهده محصولات آموزشی</Link>
                  <Link className="btn-ghost" href="/subs">مشاهده اشتراک‌ها</Link>
                </div>
              </div>
            )}
          </>
        )}

        {tab==='track' && (
          <>
            <h1>📦 پیگیری سفارش</h1>
            <div className="dash-card">
              <h3>کد سفارش رو وارد کن</h3>
              <div className="track-form">
                <input type="text" placeholder="مثلاً JBC-1405-001" value={trackCode} onChange={e=>setTrackCode(e.target.value)} />
                <button className="btn-gold" onClick={trackOrder}>پیگیری سفارش</button>
              </div>
              {trackMsg && <div className="track-msg">⚠️ {trackMsg}</div>}
              {trackList && trackList.map((o,i)=>(
                <div className="d-line" key={i}>{o.product_name} — وضعیت: {STATUS_FA[o.status]||o.status} — تاریخ: {faDate(o.created_at)}</div>
              ))}
            </div>
          </>
        )}

        {tab==='licenses' && (
          <>
            <h1>🔑 لایسنس‌های من</h1>
            {activeLicenses ? (
              orders.filter(o=>o.status==='paid'||o.status==='delivered').map((o,i)=>(
                <div className="dash-card" key={i}>
                  <h3>{o.product_name}</h3>
                  <div className="d-chips">
                    <span className="d-chip">کد: {o.track_code}</span>
                    <span className="d-chip">وضعیت: {STATUS_FA[o.status]}</span>
                  </div>
                  {o.delivery_info && <a className="btn-gold" href={o.delivery_info} target="_blank" rel="noreferrer">📥 دسترسی</a>}
                </div>
              ))
            ) : (
              <div className="empty-box">
                <div className="e-ico">🔑</div>
                <h3>لایسنس فعالی نداری</h3>
                <p>لایسنس‌های محصولات و اشتراک‌هات اینجا مدیریت می‌شن؛ با تاریخ انقضا و امکان تمدید.</p>
                <div className="e-actions">
                  <Link className="btn-gold" href="/subs">خرید اشتراک</Link>
                </div>
              </div>
            )}
          </>
        )}

        {tab==='profile' && (
          <>
            <h1>👤 پروفایل</h1>
            <div className="dash-card">
              <h3>اطلاعات حساب</h3>
              <div className="p-form">
                <input type="text" placeholder="نام و نام خانوادگی" value={pName} onChange={e=>setPName(e.target.value)} />
                <input type="tel" placeholder="شماره موبایل" value={pMobile} onChange={e=>setPMobile(e.target.value)} />
                <button className="btn-gold" onClick={saveProfile}>ذخیره پروفایل</button>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  )
}