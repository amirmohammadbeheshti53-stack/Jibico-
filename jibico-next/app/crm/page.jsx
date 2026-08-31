import { styles, html } from './data.js'

export const metadata = { title: 'CRM فروش | جیبیکو' }

export default function Page(){
  return (
    <>
      <style>{styles}</style>
      <div dangerouslySetInnerHTML={{__html: html}} />
      <script src="/pg-crm.js"></script>
    </>
  )
}
