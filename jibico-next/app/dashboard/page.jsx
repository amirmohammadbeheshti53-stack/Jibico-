import { Suspense } from 'react'
import Dashboard from '../../components/Dashboard'

export const metadata = {
  title: 'پیشخوان من | جیبیکو',
}

export default function DashboardPage(){
  return (
    <Suspense fallback={null}>
      <Dashboard />
    </Suspense>
  )
}