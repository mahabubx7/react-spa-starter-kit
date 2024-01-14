import { DashboardHeader } from '@/components/Header'
import { Outlet } from 'react-router-dom'
import styles from './layout.module.scss'

export function DashboardLayout() {
  return (
    <main className={styles.base__layout}>
      <div className={styles.layout__dashboard}>
        <DashboardHeader css={styles.layout__dashboard__header} />

        <div className={styles.layout__dashboard__page}>
          <div className={styles.base__layout__container}>
            <Outlet />
          </div>
        </div>
      </div>
    </main>
  )
}
