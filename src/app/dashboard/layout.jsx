import React from 'react'
import styles from './page.module.css'

export const metadata = {
  title: 'Dashboard',
  description: 'This is the dashboard page',
}

const Layout = ({children}) => {
  return (
    <div>
        {children}
    </div>
  )
}

export default Layout