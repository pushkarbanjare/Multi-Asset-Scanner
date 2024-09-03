import React, { useContext, useEffect, useState } from "react";
import { CoinContext } from "../contexts/CryptoContext";

const Crypto = () => {
  const { allCoin } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);

  useEffect(() => {
    setDisplayCoin(allCoin);
  }, [allCoin]);

  return (
    <div className="bg-slate-900 text-white h-screen w-screen">
      <div className="text-center p-5">
        <h1 className="text-5xl font-semibold py-20">Crypto-Screener</h1>
      </div>

      <div className="flex flex-col items-center m-auto rounded-sm">
        <div className="flex flex-col w-1/2 bg-slate-800 rounded-xl px-5 py-2 text-center">
          <div className="flex border-b-2 border-b-slate-700 bg-slate-900 px-5 py-2 rounded-md">
            <p className="w-1/5 font-bold underline">S.No</p>
            <p className="w-1/4 font-bold underline">Pair</p>
            <p className="w-1/4 font-bold underline">Price</p>
            <p className="w-1/3 font-bold underline">Percentage</p>
          </div>

          {displayCoin.slice(0, 10).map((item, index) => (
            <div key={index} className="flex bg-slate-850 px-5 py-2 rounded-md">
              <p className="w-1/5">{item.market_cap_rank}</p>
              <p className="w-1/4 uppercase">{item.symbol}</p>
              <p className="w-1/4">{item.current_price}</p>
              <p className="w-1/3">{item.price_change_percentage_24h}%</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Crypto;
