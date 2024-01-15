import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { DashboardLayout, DefaultLayout } from '@layouts'
import { ErrorBoundary } from './utils'

const HomePage = lazy(() => import('./pages/Home'))
const AboutPage = lazy(() => import('./pages/About'))
const ErrorPage = lazy(() => import('./pages/Error'))
const DashboardIndex = lazy(() => import('./pages/dashboard/Welcome'))

/* Test Fake Error */
const AboutWithError = () => (
  <ErrorBoundary>
    <AboutPage />
  </ErrorBoundary>
)

export default function Router() {
  return (
    <Suspense fallback={<div>Loading Page ...</div>}>
      <Routes>
        <Route path='/' element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path='about' element={<AboutWithError />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>

        <Route path='/dashboard' element={<DashboardLayout />}>
          <Route index element={<DashboardIndex />} />
          <Route
            path='*'
            element={<ErrorPage message='Error! from Dashboard Area' />}
          />
        </Route>
      </Routes>
    </Suspense>
  )
}
