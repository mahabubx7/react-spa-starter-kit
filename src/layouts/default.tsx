import { Outlet } from 'react-router-dom'
import { DefaultHeader } from '@/components/Header'
import styles from './layout.module.scss'

export function DefaultLayout() {
  return (
    <main className={styles.base__layout}>
      <div className={styles.layout__default}>
        <DefaultHeader css={styles.layout__default__header} />

        <div className={styles.layout__default__page}>
          <div className={styles.base__layout__container}>
            <Outlet />
          </div>
        </div>
      </div>
    </main>
  )
}
