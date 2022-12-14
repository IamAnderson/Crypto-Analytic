import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';
import Sidebar from './Sidebar';
import { HiSun, HiMoon } from "react-icons/hi";

const Navbar = ({ darkMode, setDarkMode }) => {
    const [ showSidebar, setShowSidebar ] = useState(false);

    let activeNav = {
        backgroundColor: "skyblue",
        color: "#000000ab",
        padding: "1rem 0.25rem",
        width: "inherit",
        border: "1px solid inherit"
    };

  return (
    <>
        <nav className='flex items-end pb-4 justify-between px-4 h-[10vh] bg-slate-900 dark:bg-slate-100 md:h-[100vh] md:flex-col md:items-start md:justify-start md:sticky md:left-0 md:top-0'>
            <div className='flex items-center text-white dark:text-black text-3xl font-semibold pt-4 md:mb-8'> <NavLink reloadDocument to="/"> C_Analytic </NavLink> <span className='ml-6 cursor-pointer active:scale-[80%]' onClick={() => setDarkMode(!darkMode)}> {darkMode ? <HiSun /> : <HiMoon />} </span></div>
            <div className='flex items-center justify-center bg-white dark:bg-black px-4 py-2 text-cyan-700 dark:text-cyan-200 md:hidden'>
                <div className='flex items-center justify-center'> <MenuOutlined onClick={() => setShowSidebar(!showSidebar)}/> </div>
            </div>
            <div className='hidden md:flex md:flex-col md:text-gray-200 md:dark:text-gray-800 md:gap-6 md:text-sm'>
                <NavLink to="/" style={({isActive}) => isActive ? activeNav : null}><span className='flex items-center'><HomeOutlined className='mr-2'/> Home</span></NavLink>
                <NavLink to="/crypto_currencies" style={({isActive}) => isActive ? activeNav : null}><span className='flex items-center'><FundOutlined className='mr-2'/> Cryptocurrencies</span></NavLink>
                <NavLink to="/exchanges" style={({isActive}) => isActive ? activeNav : null}><span className='flex items-center'><MoneyCollectOutlined className='mr-2'/> Exchanges</span></NavLink>
                <NavLink to="/news" style={({isActive}) => isActive ? activeNav : null}><span className='flex items-center'><BulbOutlined className='mr-2'/> News</span></NavLink>
            </div>
        </nav>
        <> {showSidebar && ( < Sidebar/> )} </>
    </>
  )
}

export default Navbar