import React from 'react'

import Logo from "../../assets/Images/logo.jpg";


function SidebarItems({open}) {
  return (
    <div className={`text-black flex flex-col justify-between items-center p-7 `}>
        <div className={`w-[130px] origin-left  duration-300 ${!open && 'scale-0'}`}>
        <img src={Logo} alt="Logo" />
      </div>
      <div className={`${!open && 'hidden'}`}>
        <ul>
            <li>fjsdfss</li>
            <li>fjsdfss</li>
            <li>fjsdfss</li>
            <li>fjsdfss</li>
            <li>fjsdfss</li>
            <li>fjsdfss</li>
            <li>fjsdfss</li>
            <li>fjsdfss</li>
            <li>fjsdfss</li>
            <li>fjsdfss</li>
            <ll>fjsdfss</ll>
        </ul>
      </div>
    </div>
  )
}

export default SidebarItems