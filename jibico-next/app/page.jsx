"use client"

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Hero from '../components/Hero'
import { api } from '../lib/api'
import '../components/Home.css'

const toFa = n => String(n).padStart(2,'0').replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d])

const MARQUEE = ['تحلیل شخصیت','تحلیل استعداد','نقشه راه درآمد','برنامه اقدام ۹۰ روزه','کوچینگ فردی','از استعداد تا درآمد']
const PROBLEMS = [
  {e:'🤔', t:'نمی‌دانید چه شغلی مناسب شماست'},
  {e:'🧶', t:'چندین مسیر را امتحان کرده‌اید اما نتیجه نگرفته‌اید'},
  {e:'📉', t:'درآمدتان متوقف شده و رشد نمی‌کند'},
  {e:'🎯', t:'ایده‌های زیادی دارید اما نمی‌دانید از کجا شروع کنید'},
]
const STEPS = [
  {n:'۱', e:'🧠', t:'ارزیابی شخصیت', d:'پرسشنامه‌های استاندارد و علمی'},
  {n:'۲', e:'💎', t:'تحلیل استعدادها', d:'شناسایی نقاط قوت و توانمندی‌های شما'},
  {n:'۳', e:'📈', t:'تحلیل فرصت‌های درآمدی', d:'بررسی بازار و فرصت‌های مناسب شما'},
  {n:'۴', e:'🧭', t:'نسخه اختصاصی رشد درآمد', d:'ارائه نقشه راه و برنامه اقدام کاملاً شخصی‌سازی‌شده'},
]
const GETS = [
  {e:'🧠', t:'تحلیل شخصیت', d:'شناخت الگوهای فکری و رفتاری شما'},
  {e:'⭐', t:'تحلیل توانمندی‌ها', d:'کشف استعدادها و مهارت‌های منحصر‌به‌فرد شما'},
  {e:'⚖️', t:'تحلیل شرایط محیطی', d:'بررسی وضعیت فعلی و منابع در دسترس شما'},
  {e:'🎯', t:'پیشنهاد شغل مناسب', d:'معرفی بهترین مسیرهای شغلی متناسب با شما'},
  {e:'📈', t:'نقشه راه رشد درآمد', d:'برنامه مرحله‌به‌مرحله برای افزایش درآمد شما'},
  {e:'🗓️', t:'برنامه اقدام ۹۰ روزه', d:'برنامه عملی و زمان‌بندی‌شده برای شروع سریع'},
]
const PATH = [
  {e:'🧑', t:'کارمند'}, {e:'🎬', t:'تولید محتوا'}, {e:'🌟', t:'برندسازی شخصی'},
  {e:'🛒', t:'فروش محصولات یا خدمات'},
]
const ARTICLES = [
  {cls:'gold', e:'💰', c:'گلوگاه درآمد', t:'چرا مهارتت به درآمد تبدیل نمی‌شه؟', d:'همون سوالی که جیبیکو ازش متولد شد — با سه گلوگاه رایج و راه شروع.'},
  {cls:'blue', e:'🌟', c:'برندسازی', t:'برندسازی شخصی برای کارشناسان پنهان', d:'اگه مهارت داری ولی کسی نمی‌شناسه‌ات، این مقاله اولین قدم‌ها رو نشونت می‌ده.'},
  {cls:'green', e:'💳', c:'قیمت‌گذاری', t:'چطور برای خدمتت قیمت بگذاری؟', d:'روش سه‌بسته‌ای برای قیمت‌گذاری با اعتماد — بدون اینکه مشتری بپره.'},
]
const TESTIMONIALS = [
  '«با تحلیل جیبیکو مسیر دقیق خودم را پیدا کردم و درآمدم ۳ برابر شد.»',
  '«نقشه راهی که گرفتم کاملاً متناسب با شرایط من بود و خیلی کمکم کرد.»',
  '«بهترین سرمایه‌گذاری بود که تا الان انجام دادم. جیبیکو زندگی کاری من را تغییر داد.»',
]

export default function Home(){
  const router = useRouter()
  const [left, setLeft] = useState({d:7,h:0,m:0,s:0})
  const [submitted, setSubmitted] = useState(false)

  useEffect(()=>{
    const target = Date.now() + 7*24*3600*1000
    const t = setInterval(()=>{
      const diff = Math.max(0, target - Date.now())
      setLeft({ d:Math.floor(diff/86400000), h:Math.floor(diff/3600000)%24,
                m:Math.floor(diff/60000)%60, s:Math.floor(diff/1000)%60 })
    },1000)
    return ()=>clearInterval(t)
  },[])

  async function submitFree(e){
    e.preventDefault()
    const name = (document.getElementById('fName')?.value || '').trim()
    const mobile = (document.getElementById('fMobile')?.value || '').trim()
    const job = (document.getElementById('fJob')?.value || '').trim()
    const challenge = (document.getElementById('fChallenge')?.value || '').trim()
    if(!name){ alert('لطفاً نام و نام خانوادگی رو بنویس.'); return }
    if(!/^09\d{9}$/.test(mobile)){ alert('شماره موبایل معتبر وارد کن (مثل 09123456789).'); return }
    try{ localStorage.setItem('jibico_profile', JSON.stringify({ name, mobile })) }catch(err){}
    api('save-profile.php', { name, mobile })
    const r = await api('save-consult.php', { name, mobile, job, challenge })
    if(!r || !r.ok){ alert('⚠️ خطا در ثبت اطلاعات؛ دوباره تلاش کن.'); return }
    setSubmitted(true)
    setTimeout(()=>router.push('/quiz'), 1800)
  }

  return (
    <>
      <Hero />

      <div className="marquee"><div className="marquee-track">
        {[...MARQUEE, ...MARQUEE].map((m,i)=>(<span key={i}>{m} ✦</span>))}
      </div></div>

      <section className="lsec">
        <h2 className="sec-title">جیبیکو چیست؟</h2>
        <p className="sec-desc">جیبیکو بین «من الان کجام؟» و «منطقی‌ترین مسیر به درآمد بیشتر کجاست؟» قرار می‌گیرد؛ با پرسشنامه‌های استاندارد شخصیت و استعداد، برای هر فرد یک نقشه راه اختصاصی می‌سازد — نه یک نسخه عمومی برای همه.</p>
      </section>

      <section className="lsec alt">
        <h2 className="sec-title">آیا این مشکلات را دارید؟</h2>
        <p className="sec-desc">اگر هر کدام از این‌ها برایت آشناست، جای درستی آمده‌ای.</p>
        <div className="wrap">
          <div className="prob-grid">
            {PROBLEMS.map((p,i)=>(<div className="prob" key={i}><div className="p-ico">{p.e}</div><p>{p.t}</p></div>))}
          </div>
          <div className="stat-bar">
            <div className="sb-ico">👥</div>
            <p>بیش از <b>۸۵٪</b> افراد بدون شناخت توانایی‌های واقعی خود، مسیر شغلی انتخاب می‌کنند.</p>
          </div>
        </div>
      </section>

      <section className="lsec">
        <h2 className="sec-title">جیبیکو چگونه کار می‌کند؟</h2>
        <p className="sec-desc">چهار قدم، از شناخت خودت تا نقشه راه اختصاصی.</p>
        <div className="wrap steps-grid">
          {STEPS.map((s,i)=>(
            <div className="step-card" key={i}>
              <div className="s-circle">{s.e}<span className="s-num">{s.n}</span></div>
              <h4>{s.t}</h4><p>{s.d}</p>
              {i<STEPS.length-1 && <i className="s-arrow">←</i>}
            </div>
          ))}
        </div>
      </section>

      <section className="lsec alt">
        <h2 className="sec-title">با جیبیکو چه چیزی دریافت می‌کنید؟</h2>
        <p className="sec-desc">خروجی، یک تصویر روشن و قابل‌اجراست — نه یک متن انگیزشی.</p>
        <div className="wrap gets-grid">
          {GETS.map((g,i)=>(<div className="get" key={i}><div className="g-ico">{g.e}</div><h4>{g.t}</h4><p>{g.d}</p></div>))}
        </div>
      </section>

      <section className="lsec">
        <div className="duo">
          <div className="free-card" id="free">
            <div className="count-box">
              <div className="c-item"><b>{toFa(left.d)}</b><span>روز</span></div>
              <div className="c-item"><b>{toFa(left.h)}</b><span>ساعت</span></div>
              <div className="c-item"><b>{toFa(left.m)}</b><span>دقیقه</span></div>
              <div className="c-item"><b>{toFa(left.s)}</b><span>ثانیه</span></div>
            </div>
            <h3>دریافت تحلیل اولیه رایگان</h3>
            <p className="fc-sub">فرم زیر را تکمیل کنید تا مستقیم وارد آزمون شوید.</p>
            {submitted ? (
              <div className="free-ok">✅ اطلاعات ثبت شد!<br/>در حال انتقال به صفحه آزمون...</div>
            ) : (
              <form className="free-form" onSubmit={submitFree}>
                <input id="fName" type="text" placeholder="نام و نام خانوادگی" />
                <input id="fMobile" type="tel" placeholder="شماره موبایل" />
                <input id="fJob" type="text" placeholder="شغل فعلی شما چیست؟" />
                <select id="fChallenge" defaultValue="">
                  <option value="" disabled>بزرگ‌ترین چالش درآمدی شما چیست؟</option>
                  <option>درآمدم رشد نمی‌کند</option>
                  <option>نمی‌دانم چه شغلی مناسبم است</option>
                  <option>مشتری و بازار پیدا نمی‌کنم</option>
                  <option>نمی‌دانم از کجا شروع کنم</option>
                  <option>سرمایه و زمان کافی ندارم</option>
                </select>
                <button type="submit">شروع تحلیل رایگان ←</button>
              </form>
            )}
          </div>

          <div className="path-card">
            <h3>مثال یک مسیر رشد درآمدی</h3>
            <div className="path-row">
              {PATH.map((p,i)=>(
                <span className="path-item" key={i}>
                  <span className="pi-ico">{p.e}</span>{p.t}
                  {i<PATH.length-1 && <i className="path-arrow">←</i>}
                </span>
              ))}
            </div>
            <div className="path-item path-final">
              <span className="pi-ico">💰</span>درآمد ماهانه بالاتر و آزادی مالی
            </div>
          </div>
        </div>
      </section>

      <section className="lsec alt">
        <h2 className="sec-title">آخرین مقالات</h2>
        <p className="sec-desc">تازه‌ترین محتوای رایگان ما برای رشد درآمدت.</p>
        <div className="wrap art-grid">
          {ARTICLES.map((a,i)=>(
            <a className="art" href="/articles" key={i}>
              <div className={'art-head '+a.cls}>{a.e}</div>
              <div className="art-body">
                <span className="a-cat">{a.c}</span>
                <h4>{a.t}</h4><p>{a.d}</p>
                <b>خواندن مقاله ←</b>
              </div>
            </a>
          ))}
        </div>
        <a className="all-btn" href="/articles">همه مقالات ←</a>
      </section>

      <section className="lsec white">
        <h2 className="sec-title">آنچه کاربران جیبیکو می‌گویند</h2>
        <p className="sec-desc">تجربه‌های واقعی، از مسیرهای واقعی.</p>
        <div className="wrap testi-grid">
          {TESTIMONIALS.map((t,i)=>(<div className="testi" key={i}><div className="stars">★★★★★</div><p>{t}</p></div>))}
        </div>
      </section>
    </>
  )
}