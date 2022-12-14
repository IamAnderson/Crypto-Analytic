import React from 'react'
import { NavLink } from 'react-router-dom'
import millify from 'millify'
import { useGetCryptosQuery } from '../redux/services/cryptoApi'
import CryptoCurrencies from './CryptoCurrencies'
import News from './News'
import Footer from '../component/Footer'
import Loader from '../component/Loader'

const Home = () => {
    const { data, isFetching } = useGetCryptosQuery(10);
    const globalStats = data?.data?.stats;

    if(isFetching) return <Loader />;

  return (
    <>
            <>
                <div className='flex flex-col bg-slate-100 dark:bg-slate-800 min-h-[100vh] w-full pt-4 '>
                    <div className='px-4'>
                    <div id="top" className='mb-12'>
                        <div className='flex justify-start text-black text-2xl md:text-3xl font-semibold dark:text-white mb-4'>Global Crypto Stats</div>
                        <div className='flex items-start'>
                            <div id='left' className='flex-[0.5%] flex flex-col items-start gap-4'>
                                <div className='flex flex-col items-start'>
                                    <span className='text-sm text-gray-400 dark:text-gray-500'>Total Crypocurrencies</span>
                                    <span className='text-2xl text-gray-700 dark:text-gray-200'> {millify(globalStats.total)} </span>
                                </div>
                                <div className='flex flex-col items-start'>
                                    <span className='text-sm text-gray-400 dark:text-gray-500'>Total Market Cap</span>
                                    <span className='text-2xl text-gray-700 dark:text-gray-200'> {millify(globalStats.totalMarketCap)} </span>
                                </div>
                                <div className='flex flex-col items-start'>
                                    <span className='text-sm text-gray-400 dark:text-gray-500'>Total Markets</span>
                                    <span className='text-2xl text-gray-700 dark:text-gray-200'> {millify(globalStats.totalMarkets)} </span>
                                </div>
                            </div>
                            <div id='right' className='flex-[0.5%] flex flex-col items-end md:items-start gap-4'>
                                <div className='flex flex-col items-start'>
                                    <span className='text-sm text-gray-400 dark:text-gray-500'>Total Exchanges</span>
                                    <span className='text-2xl text-gray-700 dark:text-gray-200'>{millify(globalStats.totalExchanges)}</span>
                                </div>
                                <div className='flex flex-col items-start'>
                                    <span className='text-sm text-gray-400 dark:text-gray-500'>Total 24h Vol</span>
                                    <span className='text-2xl text-gray-700 dark:text-gray-200'>{millify(globalStats.total24hVolume)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="middle" className='mb-12'>
                        <div className='flex justify-between text-black text-2xl md:text-3xl font-semibold dark:text-white mb-4'>Top 10 Cryptocurrencies in the world <NavLink to="/crypto_currencies"><span className='hidden md:inline-block md:text-blue-500 md:text-3xl'>Show More</span></NavLink></div>
                            <div>
                                <CryptoCurrencies simplified/>
                            </div>
                        <div><NavLink to="/crypto_currencies"><span className='text-blue-500 text-lg md:hidden'>Show More</span></NavLink></div>
                    </div>
                    <div id='down' className='mb-12'>
                        <div>
                            <div className='flex justify-between text-black text-2xl md:text-3xl font-semibold dark:text-white mb-4'>Latest Crypto News <NavLink to="/news"><span className='inline-block text-blue-500 text-lg font-normal md:text-3xl'>Show More</span></NavLink></div>
                            <div>
                                <News simplified/>
                            </div>
                        </div>
                    </div>
                    </div>
                    <Footer />
                </div>
            </>
    </>
  )
}

export default Home