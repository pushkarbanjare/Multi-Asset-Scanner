import React from "react";

const Stock = () => {
  return (
    <div className="bg-slate-900 text-white h-screen w-screen">
      <div className="text-center p-5">
        <h1 className="text-5xl font-semibold py-20">Stock-Screener</h1>
      </div>

      <div className="flex flex-col items-center m-auto rounded-sm">
        <div className="flex flex-col w-1/2 bg-slate-800 rounded-xl px-5 py-2 text-center">
          <div className="flex border-b-2 border-b-slate-700 bg-slate-900 px-5 py-2 rounded-md">
            <p className="w-1/5 font-bold underline">S.No</p>
            <p className="w-1/4 font-bold underline">Name</p>
            <p className="w-1/4 font-bold underline">Price</p>
            <p className="w-1/3 font-bold underline">Sector</p>
          </div>

          <div className="flex border-b-2 border-b-slate-700 bg-slate-900 px-5 py-2 rounded-md">
            <p className="w-1/5">1</p>
            <p className="w-1/4 uppercase">RELIANCE</p>
            <p className="w-1/4">3034.4</p>
            <p className="w-1/3">Energy</p>
          </div>
          <div className="flex border-b-2 border-b-slate-700 bg-slate-900 px-5 py-2 rounded-md">
            <p className="w-1/5">2</p>
            <p className="w-1/4 uppercase">AUROPHARMA</p>
            <p className="w-1/4">1550.2</p>
            <p className="w-1/3">Pharma</p>
          </div>
          <div className="flex border-b-2 border-b-slate-700 bg-slate-900 px-5 py-2 rounded-md">
            <p className="w-1/5">3</p>
            <p className="w-1/4 uppercase">ITC</p>
            <p className="w-1/4">509.8</p>
            <p className="w-1/3">FMCG</p>
          </div>
          <div className="flex border-b-2 border-b-slate-700 bg-slate-900 px-5 py-2 rounded-md">
            <p className="w-1/5">4</p>
            <p className="w-1/4 uppercase">TATAMOTORS</p>
            <p className="w-1/4">1093</p>
            <p className="w-1/3">Auto</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stock;
