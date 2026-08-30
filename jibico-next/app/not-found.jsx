import Link from 'next/link'
import './not-found.css'

export default function NotFound(){
  return (
    <section className="nf">
      <div className="nf-code">۴۰۴</div>
      <h1>صفحه‌ای که دنبالش بودی پیدا نشد!</h1>
      <p>نگران نباش؛ می‌تونیم برگردیم به صفحه اصلی یا آزمون رو شروع کنیم.</p>
      <div className="nf-btns">
        <Link href="/" className="btn-gold">برگشت به صفحه اصلی</Link>
        <Link href="/quiz" className="btn-ghost">شروع آزمون رایگان</Link>
      </div>
    </section>
  )
}