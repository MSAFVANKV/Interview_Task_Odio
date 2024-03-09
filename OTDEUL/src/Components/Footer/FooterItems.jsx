import React from 'react'

function FooterItems({title, Links}) {
  return (
    <ul>
        <h1 className="mb-1 text-[#909090] sm:text-[0.95rem] ">{title}</h1>
        {
            Links.map((link) => (
                <li className='md:text-[0.85rem]  text-[0.75rem] cursor-pointer leading-5'>{link.name}</li>
            ))
        }
    </ul>
  )
}

export default FooterItems