import { Link, Route, Routes } from 'react-router-dom'
import { About, Error, Home } from '@pages'

export default function Router() {
  return (
    <>
      <header>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/error'>Error!</Link>
          </li>
        </ul>
      </header>

      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  )
}
