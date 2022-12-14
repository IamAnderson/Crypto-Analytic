import React from 'react';
import { Row, Col} from 'antd';
import { useGetExchangesQuery } from '../redux/services/cryptoApi';
import Loader from '../component/Loader';
import Footer from '../component/Footer';


const Exchanges = () => {
  const { data, isFetching } = useGetExchangesQuery();
  // API is not available

  // eslint-disable-next-line
  const exchangesList = data?.data?.exchanges;
  
  if (isFetching) return <Loader />;

  return (
    <div className='flex flex-col justify-between bg-slate-100 dark:bg-slate-800 min-h-[100vh] w-full'>
      <div className='pt-8 px-8 text-black dark:text-white'>
        <Row>
          <Col span={6}>Exchanges</Col>
          <Col span={6}>24h Trade Volume</Col>
          <Col span={6}>Markets</Col>
          <Col span={6}>Change</Col>
        </Row>
        <Row className='flex items-center justify-center w-full h-[80vh] text-2xl text-black dark:text-white'>
          API NOT AVAILABLE
          {/* {exchangesList?.map((exchange) => (
            <Col span={24}>
              <Collapse>
                <Panel
                  key={exchange.uuid}
                  showArrow={false}
                  header={(
                    <Row key={exchange.uuid}>
                      <Col span={6}>
                        <Text><strong>{exchange.rank}.</strong></Text>
                        <Avatar className="exchange-image" src={exchange.iconUrl} />
                        <Text><strong>{exchange.name}</strong></Text>
                      </Col>
                      <Col span={6}>${millify(exchange.volume)}</Col>
                      <Col span={6}>{millify(exchange.numberOfMarkets)}</Col>
                      <Col span={6}>{millify(exchange.marketShare)}%</Col>
                    </Row>
                    )}
                >
                  {HTMLReactParser(exchange.description || '')}
                </Panel>
              </Collapse>
            </Col>
          ))} */}
        </Row>
      </div>
      <Footer />
    </div>
  );
};

export default Exchanges;