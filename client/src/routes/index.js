import { lazy } from 'react'
const Transactions = lazy(() => import('../pages/protected/Transactions'))

const routes = [
  {
    path: '/transactions',
    component: Transactions,
  },
]

export default routes
