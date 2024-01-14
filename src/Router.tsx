import { Route, Routes } from 'react-router-dom'
import { DashboardLayout, DefaultLayout } from '@layouts'
import { About, Error, Home } from '@pages'
import { DashboardIndex } from '@pages/dashboard'

export default function Router() {
  return (
    <>
      <Routes>
        <Route path='/' element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='*' element={<Error />} />
        </Route>

        <Route path='/dashboard' element={<DashboardLayout />}>
          <Route index element={<DashboardIndex />} />
          <Route
            path='*'
            element={<Error message='Error! from Dashboard Area' />}
          />
        </Route>
      </Routes>
    </>
  )
}
