import moment from 'moment/moment'
import React from 'react'

const NewsBox = ({ cryptoNews }) => {

  return (
    <>
        {cryptoNews?.map((news, index) => {
            return(
              <div key={index}>
                <a href={news.url} target="_blank" rel="noreferrer">
                    <div className='mb-6 bg-white dark:bg-[#0000008c] text-sm hover:shadow-md hover:shadow-[#00000079] hover:transition hover:ease-in-out hover:duration-[0.25s]'>
                        <div className='flex flex-col pt-6 pb-8 px-4'>
                            <div className='flex items-center justify-between mb-6'>
                                <span className='text-black text-lg dark:text-white font-semibold'> {news?.name} </span>    
                                <span id='img_' className='flex items-center'>
                                    <span className='flex w-24'>
                                        <img className='h-full w-full object-cover' src={news?.image?.thumbnail?.contentUrl} alt={""} />
                                    </span>
                                </span>    
                            </div>
                            <div id="text" className='mb-4'>
                                <span className='text-[15px] text-black dark:text-white'> {news?.description} </span>
                            </div>
                            <div id='description' className='text-[14px] text-black dark:text-white flex items-center justify-between'>
                                <div className='flex items-center'>
                                    <span id='img_' className='flex items-center mr-2'>
                                        <span className='flex w-6'>
                                            <img className='h-full w-full object-cover' src={news.provider[0].image?.thumbnail?.contentUrl} alt={""} />
                                        </span>
                                    </span>
                                    <span> {news?.provider[0]?.name} </span>    
                                </div>
                                <div> {moment(news.datePublished).startOf("ss").fromNow()} </div>
                            </div>
                        </div>
                    </div>
                </a>
              </div>  
            )
        })}
    </>
  )
}

export default NewsBox