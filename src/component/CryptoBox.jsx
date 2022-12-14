import millify from 'millify'
import { NavLink } from 'react-router-dom'

const CryptoBox = ({ cryptos }) => {

  return (
    <>
        { cryptos?.map((crypto) => {
            return(
                <NavLink to={`/crypto/${crypto?.uuid}`} key={crypto?.uuid}>
                    <div className='mb-6 bg-white dark:bg-[#0000008c] text-sm hover:shadow-md hover:shadow-[#00000079] hover:transition hover:ease-in-out hover:duration-[0.25s]'>
                        <div className='flex flex-col pt-6 pb-8'>
                            <div className='flex items-center justify-between px-4'>
                                <span className='text-black dark:text-white font-semibold'>{crypto?.rank}. <span> {crypto?.name} </span></span>    
                                <span id='img_' className='flex items-center'>
                                    <span className='flex w-10'>
                                        <img className='h-full w-full object-cover' src={crypto?.iconUrl} alt={crypto?.symbol} />
                                    </span>
                                </span>    
                            </div>
                            <span className='h-[1px] w-full bg-gray-400 dark:bg-gray-500 my-6'/>
                            <div className='flex flex-col items-start text-black dark:text-white gap-2 px-4'>
                                <span className='flex items-center'>Price: <span className='ml-1 font-semibold'> ${millify(crypto?.price)} </span></span>
                                <span className='flex items-center'>Market Cap: <span className='ml-1 text-green-800 font-semibold'> ${millify(crypto?.marketCap)} </span></span>
                                <span className='flex items-center'>Daily Change: <span className='ml-1'> {millify(crypto?.change)}% </span></span>
                            </div>
                        </div>
                    </div>
                </NavLink>
            )
        }) }
    </>
  )
}

export default CryptoBox 