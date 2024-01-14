import { Link } from 'react-router-dom'

type IDashboardHeaderProps = {
  css?: CSSModuleClasses[string]
}

export function DashboardHeader(props: IDashboardHeaderProps) {
  const { css } = props

  return (
    <header className={css ? `${css}` : ``}>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/dashboard'>Dashboard!</Link>
        </li>
        <li>
          <Link to='/error'>Error!</Link>
        </li>
        <li>
          <Link to='/dashboard/err'>Error (Dashboard)!</Link>
        </li>
      </ul>
    </header>
  )
}
