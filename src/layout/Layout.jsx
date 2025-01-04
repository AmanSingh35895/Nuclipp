import React from 'react'
import { Header } from './Header/Header'
import { Footer } from './Footer/Footer'

export const Layout = ({children}) => {
  return (
    <>
        <Header />
            <div className='text-red-900'>{children}</div>
        <Footer />
    </>
  )
}
