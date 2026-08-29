import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import './Home.css'

const PROBLEMS = [
  {e:'🤔', t:'نمی‌دونم چه شغلی مناسبمه'},
  {e:'🧶', t:'چند مسیر رو امتحان کردم، نتیجه نگرفتم'},
  {e:'📉', t:'درآمدم متوقف شده و رشد نمی‌کنه'},
  {e:'🎯', t:'ایده زیاد دارم، نمی‌دونم از کجا شروع کنم'},
]
const STEPS = [
  {e:'🧠', t:'ارزیابی شخصیت', d:'پرسشنامه‌های استاندارد و علمی'},
  {e:'💎', t:'تحلیل استعدادها', d:'شناسایی نقاط قوت تو'},
  {e:'📈', t:'تحلیل فرصت‌های درآمدی', d:'بررسی بازار و فرصت‌ها'},
  {e:'🧭', t:'نقشه راه اختصاصی', d:'برنامه اقدام شخصی‌سازی‌شده'},
]

function Home(){
  return (
    <>
      <Hero />

      <section className="home-sec">
        <h2 className="sec-title"><u>آیا این مشکلات رو داری؟</u></h2>
        <p className="sec-desc">اگه هر کدوم برات آشناست، جای درستی اومدی.</p>
        <div className="prob-grid">
          {PROBLEMS.map((p,i)=>(<div className="prob" key={i}><div className="p-ico">{p.e}</div><p>{p.t}</p></div>))}
        </div>
      </section>

      <section className="home-sec alt">
        <h2 className="sec-title"><u>جیبیکو چطوری کار می‌کنه؟</u></h2>
        <p className="sec-desc">چهار قدم، از شناخت خودت تا نقشه راه.</p>
        <div className="steps-grid">
          {STEPS.map((s,i)=>(<div className="step-card" key={i}><div className="s-circle">{s.e}</div><h4>{s.t}</h4><p>{s.d}</p></div>))}
        </div>
      </section>

      <section className="cta-band">
        <h2>آماده‌ای مسیر درآمدت رو ببینی؟</h2>
        <p>همین الان آزمون رایگان رو بده و گزارش اختصاصی‌ت رو بگیر.</p>
        <Link to="/quiz" className="btn-gold">🚀 شروع آزمون رایگان</Link>
      </section>
    </>
  )
}

export default Home