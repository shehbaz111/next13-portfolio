import React from 'react'
import styles from './page.module.css'

export const metadata = {
  title: 'Our Works',
  description: 'This is the out work display page',
}

const Layout = ({children}) => {
  return (
    <div>
      <h1 className={styles.mainTitle}>Our Works</h1>
      {children}
    </div>
  )
}

export default Layout