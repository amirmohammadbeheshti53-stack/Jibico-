import { styles, html } from './data.js'

export const metadata = { title: 'آنلاین‌سازی کسب‌وکار | جیبیکو' }

export default function Page(){
  return (
    <>
      <style>{styles}</style>
      <div dangerouslySetInnerHTML={{__html: html}} />
      <script src="/pg-online.js"></script>
    </>
  )
}
