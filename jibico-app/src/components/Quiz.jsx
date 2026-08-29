import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { QUESTIONS, LIKERT } from '../data/questions'
import { computeProfile, ARCHETYPES, BOTTLENECK_NAMES, PLAYBOOKS } from '../utils/score'
import './Quiz.css'

function Quiz() {
  const [started, setStarted] = useState(false)
  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState({})
  const [finished, setFinished] = useState(false)
  const [consultOpen, setConsultOpen] = useState(false)
  const [consultOk, setConsultOk] = useState(false)

  const visible = QUESTIONS.filter(q => !q.showIf || answers[q.showIf.field] === q.showIf.equals)
  const q = visible[index]
  const progress = Math.round((index / visible.length) * 100)

  function answer(value){
    setAnswers({ ...answers, [q.id]: value })
    if (index + 1 < visible.length) setIndex(index + 1)
    else setFinished(true)
  }

  function answerText(qq){
    const val = (document.getElementById('ta_'+qq.id)?.value || '').trim()
    if(qq.req && !val){ alert('لطفاً حداقل یک جمله بنویس.'); return }
    answer(val)
  }

  function restart(){
    setStarted(false); setIndex(0); setAnswers({}); setFinished(false)
    setConsultOpen(false); setConsultOk(false)
  }

  function submitConsult(){
    const name = (document.getElementById('cName')?.value || '').trim()
    const mobile = (document.getElementById('cMobile')?.value || '').trim()
    if(!name){ alert('لطفاً نامت رو بنویس.'); return }
    if(!/^09\d{9}$/.test(mobile)){ alert('شماره موبایل معتبر وارد کن.'); return }
    setConsultOk(true)
  }

  useEffect(()=>{
    if(finished){
      try{ localStorage.setItem('jibico_report', JSON.stringify(computeProfile(answers))) }catch(e){}
    }
  },[finished])

  /* ---------- صفحه شروع ---------- */
  if(!started){
    return (
      <section className="quiz">
        <div className="quiz-card intro">
          <div className="quiz-big">🧭</div>
          <h1>آزمون رایگان <b>تشخیص و تحلیل شخصیت</b></h1>
          <p>وضعیت فعلی، گلوگاه اصلی درآمد، تایپ شخصیتی MBTI و سبک رفتار DISC تو مشخص می‌شه و گزارش اختصاصی‌ات رو همین‌جا می‌گیری.</p>
          <div className="quiz-chips">
            <span className="qchip">⏱️ حدود ۱۵ دقیقه</span>
            <span className="qchip">🧠 MBTI + DISC</span>
            <span className="qchip">🎯 گزارش آنی</span>
          </div>
          <button className="btn-gold" onClick={()=>setStarted(true)}>شروع آزمون رایگان</button>
        </div>
      </section>
    )
  }

  /* ---------- صفحه گزارش ---------- */
  if(finished){
    const p = computeProfile(answers)
    const arch = ARCHETYPES[p.archetype]
    const c = p.mbti.counts
    return (
      <section className="quiz">
        <div className="quiz-card report">
          <div className="rep-emoji">{arch.e}</div>
          <div className="rep-title">{arch.t}</div>
          <div className="rep-headline">{arch.h}</div>
          {p.coach && <div className="flag-note">🤝 پیشنهاد می‌کنیم یک جلسه کوچینگ انسانی برای بخش ذهنی داشته باشی.</div>}

          <div className="rep-block">
            <h4>📊 نمای کلی تو</h4>
            <div className="bar-row"><div className="bar-label"><span>سطح مهارت</span><b>{p.skill}٪</b></div><div className="bar"><div style={{width:p.skill+'%'}}></div></div></div>
            <div className="bar-row"><div className="bar-label"><span>بهره‌برداری مالی</span><b>{p.monet}٪</b></div><div className="bar"><div style={{width:p.monet+'%'}}></div></div></div>
            <div className="bar-row"><div className="bar-label"><span>فشار شکاف</span><b>{p.gap}٪</b></div><div className="bar"><div style={{width:p.gap+'%'}}></div></div></div>
          </div>

          <div className="rep-block">
            <h4>🧠 شخصیت و سبک رفتار تو</h4>
            <div className="type-row">
              <span className="type-chip">MBTI: {p.mbti.type}</span>
              <span className="type-chip">مزاج: {p.mbti.temperament}</span>
              <span className="type-chip">DISC: {p.disc.style}</span>
            </div>
            <div className="step">انرژی: {c.E}-{c.I} ({p.mbti.strength.EI})</div>
            <div className="step">دریافت اطلاعات: {c.S}-{c.N} ({p.mbti.strength.SN})</div>
            <div className="step">تصمیم‌گیری: {c.T}-{c.F} ({p.mbti.strength.TF})</div>
            <div className="step">سبک زندگی: {c.J}-{c.P} ({p.mbti.strength.JP})</div>
            <div className="step">سبک برنامه تو: {p.style.deadline_mode} | کانال پیشنهادی: {p.style.channel_bias} | ریتم: {p.style.pace}</div>
          </div>

          <div className="rep-block">
            <h4>🔍 گلوگاه اصلی: {BOTTLENECK_NAMES[p.primary]}</h4>
            <div className="step">گلوگاه فرعی: {BOTTLENECK_NAMES[p.secondary]}</div>
            {p.close && <div className="step">ℹ️ دو گلوگاه به هم نزدیکن؛ در مشاوره دقیق‌تر بررسی می‌کنیم.</div>}
          </div>

          <div className="rep-block">
            <h4>🎯 سه قدم اول تو</h4>
            {PLAYBOOKS[p.primary].map((s,i)=>(<div className="step" key={i}>{i+1}. {s}</div>))}
          </div>

          <div className="rep-block">
            <h4>➕ قدم بعدی</h4>
            <div className="next-box">
              <button className="next-gold" onClick={()=>setConsultOpen(!consultOpen)}>📞 تنظیم مشاوره تلفنی برای بررسی دقیق‌تر</button>
              <Link className="next-line" to="/">برگشت به صفحه اصلی</Link>
            </div>
            {consultOpen && !consultOk && (
              <div className="consult-form">
                <input type="text" id="cName" placeholder="نام و نام خانوادگی" />
                <input type="tel" id="cMobile" placeholder="شماره موبایل" />
                <button className="btn-gold" onClick={submitConsult}>ثبت درخواست مشاوره</button>
              </div>
            )}
            {consultOk && <div className="consult-ok">✅ درخواست مشاوره‌ات ثبت شد؛ در ساعات کاری باهات تماس می‌گیریم.</div>}
          </div>

          <button className="btn-ghost" onClick={restart}>شروع دوباره</button>
        </div>
      </section>
    )
  }

  /* ---------- صفحه سوال ---------- */
  return (
    <section className="quiz">
      <div className="quiz-card">
        <div className="quiz-top"><span className="q-section">{q.section}</span><span>سوال {index+1} از {visible.length}</span></div>
        <div className="quiz-bar"><div style={{width:progress+'%'}}></div></div>
        <h3 className="quiz-q">{q.text}</h3>
        <div className="quiz-opts">
          {q.type==='likert' && LIKERT.map((label,i)=>(<button key={i} className="opt" onClick={()=>answer(i+1)}>{label}</button>))}
          {q.type==='mbti' && (<>
            <button className="opt" onClick={()=>answer(q.a.p)}>{q.a.t}</button>
            <button className="opt" onClick={()=>answer(q.b.p)}>{q.b.t}</button>
          </>)}
          {q.type==='choice' && q.options.map((op,i)=>(<button key={i} className="opt" onClick={()=>answer(op.value)}>{op.label}</button>))}
          {q.type==='text' && (
            <div className="text-wrap">
              <textarea id={'ta_'+q.id} className="ta" rows="4" placeholder="اینجا بنویس..." defaultValue={answers[q.id]||''}></textarea>
              <button className="btn-gold" style={{width:'100%'}} onClick={()=>answerText(q)}>ثبت و ادامه</button>
            </div>
          )}
        </div>
        {index>0 && <button className="back-btn" onClick={()=>setIndex(index-1)}>→ سوال قبلی</button>}
      </div>
    </section>
  )
}

export default Quiz