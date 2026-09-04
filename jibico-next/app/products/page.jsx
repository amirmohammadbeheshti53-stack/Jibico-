import { html } from './data.js'
import '../oldpages.css'

export const metadata = { title: 'محصولات آموزشی | جیبیکو' }

export default function Page(){
  return (
    <>
      <div className="oldpage" dangerouslySetInnerHTML={{__html: html}} />
      <script src="/pg-products.js"></script>
    </>
  )
}
