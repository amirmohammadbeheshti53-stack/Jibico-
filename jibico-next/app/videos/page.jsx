import { html } from './data.js'
import '../oldpages.css'

export const metadata = { title: 'ویدیوهای آموزشی | جیبیکو' }

export default function Page(){
  return (
    <>
      <div className="oldpage" dangerouslySetInnerHTML={{__html: html}} />
      <script src="/pg-videos.js"></script>
    </>
  )
}
