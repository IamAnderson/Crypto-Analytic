import React from 'react'
import HTMLReactParser from 'html-react-parser'
import { useParams } from 'react-router-dom'
import millify from 'millify'
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, ThunderboltOutlined } from '@ant-design/icons';
import { useGetCryptosDetailsQuery, useGetCryptosHistoryQuery } from '../redux/services/cryptoApi'
import { useState } from 'react';
import { Col, Select } from 'antd';
import LineChart from '../component/LineChart';
import Loader from "../component/Loader";
import Footer from '../component/Footer';

const CryptoDetails = () => {

  const coinUUID = useParams();
  let coinId = coinUUID.id 
  const [timePeriod, setTimePeriod] = useState("7d") 

  const {data, isFetching} = useGetCryptosDetailsQuery(coinId);
  const { data: coinHistory } = useGetCryptosHistoryQuery({ coinId, timePeriod });
  const cryptoDetails = data?.data?.coin;

  const { Option } = Select;

  const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

  const stats = [
    {
      title: "Price to USD",
      value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`,
      icon: <DollarCircleOutlined />,
    },
    {
      title: "Rank",
      value: cryptoDetails?.rank,
      icon: <NumberOutlined />,
    },
    {
      title: "Epoch timestamp",
      value: cryptoDetails?.listedAt,
      icon: <ThunderboltOutlined />,
    },
    {
      title: "Market Cap",
      value: `$ ${
        cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)
      }`,
      icon: <DollarCircleOutlined />,
    },
    {
      title: "All-time-high(daily avg.)",
      value: `$ ${
        cryptoDetails?.allTimeHigh?.price &&
        millify(cryptoDetails?.allTimeHigh?.price)
      }`,
      icon: <TrophyOutlined />,
    },
  ];

  const genericStats = [
    {
      title: "Number Of Markets",
      value: cryptoDetails?.numberOfMarkets,
      icon: <FundOutlined />,
    },
    {
      title: "Number Of Exchanges",
      value: cryptoDetails?.numberOfExchanges,
      icon: <MoneyCollectOutlined />,
    },
    {
      title: "Aprroved Supply",
      value: cryptoDetails?.supply?.confirmed ? (
        <CheckOutlined />
      ) : (
        <StopOutlined />
      ),
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: "Total Supply",
      value: `$ ${
        cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)
      }`,
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: "Circulating Supply",
      value: `$ ${
        cryptoDetails?.supply?.circulating &&
        millify(cryptoDetails?.supply?.circulating)
      }`,
      icon: <ExclamationCircleOutlined />,
    },
  ];

  if(isFetching) return <Loader />;
  return (
    <>
      <div className='flex flex-col bg-slate-100 dark:bg-slate-800 min-h-[100vh] w-full'>
        <div className='flex flex-col pt-4 px-4 mb-8 w-full'>
          <div className='flex flex-col items-center'>
            <span className='text-4xl font-bold text-sky-600 dark:text-sky-300 mb-8'> {cryptoDetails?.name} ({cryptoDetails?.symbol}) Price </span>
            <span className='text-lg text-gray-600 dark:text-gray-200 mb-8'> {cryptoDetails?.name} live price in US dollars. View value statistics, market cap and supply </span>
            <span className='h-[2px] w-[100%] bg-gray-300 mb-8'/>
          </div>
          <div className='flex flex-col justify-center items-center lg:flex-row lg:items-start lg:justify-between mb-8 w-full'>
            <div className='flex flex-col'>
              <Select defaultValue="7d" className="select-timeperiod" placeholder="Select Timeperiod" onChange={(value) => setTimePeriod(value)}>
                {time.map((date, index) => <Option key={index}>{date}</Option>)}
              </Select>
              <div className='text-4xl font-medium text-sky-600 dark:text-sky-300 mt-4 mb-4 lg:mb-[0]'> {cryptoDetails?.name} Price Chart</div>
            </div>
            <div className='text-black dark:text-white text-lg font-semibold'> {cryptoDetails?.change} Current {cryptoDetails?.name} Price: {millify(cryptoDetails?.price)} </div>
          </div>
          <div>
            <LineChart coinHistory={coinHistory} />
          </div>
          <div className='mt-4 mb-12'>
            <Col className="flex flex-col justify-center lg:flex-row lg:justify-between lg:items-center">
              <Col className="mb-8 lg:mb-[0]">
                <Col className="">
                  <div className="text-2xl font-bold text-sky-600 dark:text-sky-300 mb-4">{cryptoDetails?.name} Value Statistics</div>
                  <p className='text-lg text-gray-700 dark:text-gray-200 mb-8'>An overview showing the stats of {cryptoDetails?.name}.</p>
                </Col>
                {stats.map(({ icon, title, value }) => (
                  <Col className="flex items-end justify-between border-b pb-4 mb-4 text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-600">
                    <Col className="flex items-end text-lg">
                      <span className='mr-1'>{icon}</span>
                      <span>{title}</span>
                    </Col>
                    <div className="text-lg text-black dark:text-white font-bold">{value}</div>
                  </Col>
                ))}
              </Col>
              <Col className="">
                <Col className="">
                  <div className="text-2xl font-bold text-sky-600 dark:text-sky-300 mb-4">Other Stats Info</div>
                  <p className='text-lg text-gray-700 dark:text-gray-200 mb-8'>An overview showing the statistics of {cryptoDetails?.name}.</p>
                </Col>
                {genericStats.map(({ icon, title, value, index }) => (
                  <Col key={index} className="flex items-end justify-between border-b pb-4 mb-4 text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-600">
                    <Col className="flex items-end text-lg">
                      <span className='mr-1'>{icon}</span>
                      <span>{title}</span>
                    </Col>
                    <span className="text-lg text-black dark:text-white font-bold">{value}</span>
                  </Col>
                ))}
              </Col>
            </Col>
          </div>
          <div>
            <Col className="flex flex-col lg:flex-row lg:gap-16 lg:items-start lg:justify-between">
              <div className="flex-[0.5] flex flex-col mb-8 lg:mb-[0]">
                <span className="text-3xl font-medium text-sky-600 dark:text-sky-300 mt-4 mb-4">What is {cryptoDetails?.name}?</span>
                <span className="text-lg font-medium text-sky-600 dark:text-sky-300">{HTMLReactParser(cryptoDetails?.description)}</span>
              </div>
              <Col className="flex-[0.5] flex flex-col items-center">
                <span className="flex justify-start w-full text-3xl font-medium text-sky-600 dark:text-sky-300 mt-4 mb-4">{cryptoDetails?.name} Links</span>
                {cryptoDetails?.links?.map((link, index) => (
                  <div className="flex justify-between w-full border-b pb-4border-gray-300 dark:border-gray-600 mb-4" key={index}>
                    <span className="text-black capitalize dark:text-white text-lg">{link.type}</span>
                    <a href={link.url} target="_blank" rel="noreferrer" className='text-lg font-medium text-sky-600 dark:text-sky-300'>{link.name}</a>
                  </div>
                ))}
              </Col>
            </Col>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default CryptoDetails






















