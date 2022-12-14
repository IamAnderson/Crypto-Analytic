import React from 'react'
import { NavLink } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined } from '@ant-design/icons';

const Sidebar = () => {

  let activeNav = {
    backgroundColor: "skyblue",
    color: "#000000ab",
    padding: "1rem 0.25rem",
    width: "inherit",
    border: "1px solid inherit"
};

  return (
    <div className='flex relative md:hidden'>
        <div className='absolute right-0 top-[-1px] flex flex-col bg-slate-900 dark:bg-slate-100 text-sm text-gray-200 dark:text-gray-800 px-4 py-2 gap-6'>
            <NavLink to="/" style={({isActive}) => isActive ? activeNav : null}><span className='flex items-center'><HomeOutlined className='mr-2'/> Home</span></NavLink>
            <NavLink to="/crypto_currencies" style={({isActive}) => isActive ? activeNav : null}><span className='flex items-center'><FundOutlined className='mr-2'/> Cryptocurrencies</span></NavLink>
            <NavLink to="/exchanges" style={({isActive}) => isActive ? activeNav : null}><span className='flex items-center'><MoneyCollectOutlined className='mr-2'/> Exchanges</span></NavLink>
            <NavLink to="/news" style={({isActive}) => isActive ? activeNav : null}><span className='flex items-center'><BulbOutlined className='mr-2'/> News</span></NavLink>
        </div>
    </div>
  )
}

export default Sidebar