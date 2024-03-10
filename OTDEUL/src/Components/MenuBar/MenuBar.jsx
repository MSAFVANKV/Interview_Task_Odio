import React from 'react';
import { Link } from 'react-router-dom';

import cart from '../../assets/Images/MenuItems/cart.png';
import menu from '../../assets/Images/MenuItems/menu.png';
import bell from '../../assets/Images/MenuItems/bell.png';
import profile from '../../assets/Images/MenuItems/profile.png';
import home from '../../assets/Images/MenuItems/home.png';

function MenuBar() {
  const menuItems = [
    {
      id: 1,
      title: 'Home',
      path: '/',
      icon: home,
    },
    {
      id: 2,
      title: 'Category',
      path: '/',
      icon: menu,
    },
    {
      id: 3,
      title: 'Notification',
      path: '/',
      icon: bell,
    },
    {
      id: 4,
      title: 'Cart',
      path: '/',
      icon: cart,
    },
    {
      id: 5,
      title: 'My Account',
      path: '/',
      icon: profile,
    },
  ];

  return (
    <div className="w-full bg-white">
      <ul className="grid grid-cols-5 ">
        {menuItems.map((menuItem) => (
          <li key={menuItem.id} className="border-gray-400  border-b-inherit border">
            <Link to={menuItem.path} className="flex flex-col items-center justify-center h-full text-black">
              <img src={menuItem.icon} alt={menuItem.title} className="" />
              <span className='text-[0.55rem]'>{menuItem.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MenuBar;
