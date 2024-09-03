import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-slate-900 text-white h-screen scrollbar-thumb-slate-900 scrollbar-track-slate-600 scrollbar-thin overflow-y-scroll ">
      <nav className="flex justify-between px-5 py-5">
        <div className="flex items-center">
          <Link className="text-2xl font-semibold" to="/">
            MultiAssetScreener
          </Link>
        </div>
      </nav>
      <div className="flex justify-center text-center p-5">
        <h1 className="text-3xl pt-20 w-2/3 leading-relaxed">
          Multi Asset Screener is a screener application for various assets like
          cryptocurrencies and stocks based on momentum and the data is
          available for Daily, Weekly and Monthly timeframes.
        </h1>
      </div>
      <div className="flex text-center h-screen">
        <div className="w-1/2">
          <div className="p-10">
            <div>
              <h3 className="text-2xl pt-20">
                Stock Screener is a platform to screen various stocks based on
                their momentum.
              </h3>
            </div>
            <div className="pt-10 font-medium">
              <Link to="/stock">
                <button className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">
                  Go to Stock-Screener
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <div className="p-10">
            <div>
              <h3 className="text-2xl pt-20">
                Crypto Screener is a platform to screen various crypto pairs
                based on their momentum.
              </h3>
            </div>
            <div className="pt-10 font-medium">
              <Link to="/crypto">
                <button className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">
                  Go to Crypto-Screener
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <a
          href="https://pushkarbanjare.vercel.app/"
          target="_blank"
          className="ml-2"
        >
          <div className="text-md p-2 hover:text-pink-400 duration-200">
            Developer Profile : @pushkarbanjare
          </div>
        </a>
      </div>
    </div>
  );
};

export default Home;
