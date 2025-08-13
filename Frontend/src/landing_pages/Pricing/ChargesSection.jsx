import React, { useState } from 'react';
import './ChargesSection.css'; 
import EquityTable from './PricingTables/EquityTable.jsx';
import CurrencyTable from './PricingTables/CurrencyTable.jsx';
import CommodityTable from './PricingTables/CommodityTable.jsx';

const ChargesSection = () => {
  const [activeTab, setActiveTab] = useState('equity');

  return (
    <div className="container">
      <div className="tabs">
        <div 
          className={`tab ${activeTab === 'equity' ? 'active' : ''}`}
          onClick={() => setActiveTab('equity')}
        >
          Equity
        </div>
        <div 
          className={`tab ${activeTab === 'currency' ? 'active' : ''}`}
          onClick={() => setActiveTab('currency')}
        >
          Currency
        </div>
        <div 
          className={`tab ${activeTab === 'commodity' ? 'active' : ''}`}
          onClick={() => setActiveTab('commodity')}
        >
          Commodity
        </div>
      </div>
      
      <div className="tab-content">
        {activeTab === 'equity' && <EquityTable />}
        {activeTab === 'currency' && <CurrencyTable />}
        {activeTab === 'commodity' && <CommodityTable />}
      </div>
      <div className='text-center mt-4 pt-1'>
        <p className='fs-5'><a href="£" className='text-decoration-none'>Calculate your costs upfront</a> using our brokerage calculator</p>
      </div>
    </div>
  );
};

export default ChargesSection;