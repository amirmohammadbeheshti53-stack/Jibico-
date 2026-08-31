import { styles, html } from './data.js'

export const metadata = { title: 'مقالات | جیبیکو' }

export default function Page(){
  return (
    <>
      <style>{styles}</style>
      <div dangerouslySetInnerHTML={{__html: html}} />
      <script src="articles-data-1.js"></script>
      <script src="articles-data-2.js"></script>
      <script src="articles-data-3.js"></script>
      <script src="articles-data-4.js"></script>
      <script src="/pg-articles.js"></script>
    </>
  )
}
