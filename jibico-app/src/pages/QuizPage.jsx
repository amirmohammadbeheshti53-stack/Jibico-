import { Link } from 'react-router-dom'
import Quiz from '../components/Quiz'

function QuizPage(){
  return (
    <>
      <div style={{textAlign:'center', padding:'15px'}}>
        <Link to="/" style={{color:'var(--muted)', fontSize:'13px'}}>→ برگشت به صفحه اصلی</Link>
      </div>
      <Quiz />
    </>
  )
}

export default QuizPage