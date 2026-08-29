import Header from '../components/Header'
import './globals.css'

export const metadata = {
  title: 'جیبیکو | از استعداد تا درآمد',
  description: 'جیبیکو با تحلیل شخصیت، استعداد و شرایط تو، نقشه راه اختصاصی رشد درآمد می‌سازه.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}