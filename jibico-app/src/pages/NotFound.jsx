import { Link } from 'react-router-dom'
import './NotFound.css'

function NotFound(){
  return (
    <section className="nf">
      <div className="nf-code">۴۰۴</div>
      <h1>صفحه‌ای که دنبالش بودی پیدا نشد!</h1>
      <p>نگران نباش؛ می‌تونیم برگردیم به صفحه اصلی یا آزمون رو شروع کنیم.</p>
      <div className="nf-btns">
        <Link to="/" className="btn-gold">برگشت به صفحه اصلی</Link>
        <Link to="/quiz" className="btn-ghost">شروع آزمون رایگان</Link>
      </div>
    </section>
  )
}

export default NotFound