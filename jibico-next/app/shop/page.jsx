import { styles, html } from './data.js'

export const metadata = { title: 'فروشگاه | جیبیکو' }

export default function Page(){
  return (
    <>
      <style>{styles}</style>
      <div dangerouslySetInnerHTML={{__html: html}} />
      <script src="/pg-shop.js"></script>
    </>
  )
}
