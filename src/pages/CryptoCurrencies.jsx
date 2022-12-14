import React, { useEffect, useState } from 'react'
import { useGetCryptosQuery } from '../redux/services/cryptoApi'
import CryptoBox from '../component/CryptoBox'
import Loader from "../component/Loader"
import Footer from '../component/Footer';

const CryptoCurrencies = ({ simplified }) => {
    const count = simplified ? 10 : 100;
    const { data: cryptoList, isFetching } = useGetCryptosQuery(count);
    const [cryptos, setCryptos] = useState();
    
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(()=> {
        setCryptos(cryptoList?.data?.coins);

        const filteredData = cryptoList?.data.coins?.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()));
        setCryptos(filteredData);
    }, [cryptoList, searchTerm])

    if(isFetching) return <Loader />;
  return (
    <>
        <div className='flex flex-col justify-between bg-slate-100 dark:bg-slate-800 min-h-[100vh] w-full pt-4'>
        <div className='px-4'>
            {!simplified && 
                <div id='top' className='mb-12'>
                    <div className='flex items-center justify-center text-[14px]'>
                        <input type="text" placeholder='Search Cryptocurrency' onChange={(e) => setSearchTerm(e.target.value)} className='p-1 w-[15rem] border-solid border-slate-800 border-[1px]' />
                    </div>
                </div>
            }
            <div className='grid sm:grid-cols-2 sm:gap-8 md:grid-cols-3 md:gap-8 lg:grid-cols-4 lg:gap-8'>
                <CryptoBox cryptos={cryptos} simplified={simplified}/>
            </div>
        </div>
        {!simplified && <Footer />}
        </div>
    </>
  )
}

export default CryptoCurrencies