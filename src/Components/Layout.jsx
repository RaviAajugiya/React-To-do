import React from 'react'
import { Outlet } from 'react-router-dom'


function Layout() {
    return (
        <>
            {/* </> */}
            <Outlet/>
            <Footer/>
        </>
    )
}

export default Layout