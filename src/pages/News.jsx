import React, { useState } from 'react'
import NewsBox from '../component/NewsBox'
import { Select, Col} from 'antd';
import { useGetCryptoNewsQuery } from '../redux/services/cryptoNewsApi'
import { useGetCryptosQuery } from '../redux/services/cryptoApi';
import Footer from '../component/Footer';
import Loader from '../component/Loader';

const News = ({simplified}) => {
    
    const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
    const { data } = useGetCryptosQuery(100);
    const { data: cryptoNews, isFetching } = useGetCryptoNewsQuery({newsCategory, count: simplified ? 10 : 100});
    
    const { Option } = Select;
   
    if(isFetching) return <Loader />;

  return (
    <>
        <div className='flex flex-col justify-between min-h-[100vh]'>
            <div className='bg-slate-100 dark:bg-slate-800 min-h-[100vh] w-full pt-12 px-4'>
                {!simplified &&
                    <div id='top' className='mb-12'>
                        <Col span={24}>
                            <Select
                                showSearch
                                className="select-news"
                                placeholder="Select a Crypto"
                                optionFilterProp="children"
                                onChange={(value) => setNewsCategory(value)}
                                filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0} 
                            >
                                <Option value="Cryptocurency">Cryptocurrency</Option>
                                {data?.data?.coins?.map((currency, index) => <Option value={currency.name} key={index}>{currency.name}</Option>)}
                            </Select>
                        </Col>
                    </div>
                }
                <div id="down" className='mb-12'>
                    <div className='grid sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-8'>
                        <NewsBox cryptoNews={cryptoNews?.value}/>
                    </div>
                </div>
            </div>
        {!simplified && <Footer />}
        </div>    
    </>
  )
}

export default News