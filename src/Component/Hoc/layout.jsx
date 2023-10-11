import React,{Children} from 'react'
import Navdata from '../Navigation/navdata'
import Footer from '../PageComponent/footer'


function Layout({children}) {
  return (
    <div>
        <Navdata/>
       

        <div>
            {children}
        </div>
        <Footer/>
      
    </div>
  )
}

export default Layout
