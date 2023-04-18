import React from 'react'
import { NavLink } from 'react-router-dom'

const PageNavigation = (props) => {
  return (
    <>
        <div className='nav_bg'>
            <div className='text'>
                <NavLink to="/">
                    Home
                </NavLink><span>/{props.title}</span>
            </div>
        </div>
    </>
  )
}

export default PageNavigation