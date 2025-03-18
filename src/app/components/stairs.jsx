import React from "react"

export default function Stairs() {
  return (
    <div className="w-full bg-white dark:bg-slate-900">
      <div className="">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-stretch">
          <div className="w-full md:w-1/4 h-20 overflow-hidden shadow-lg md:rounded-l-lg md:rounded-r-none">
            <div className="h-[10%] bg-black dark:bg-slate-900"></div>
            <div className="h-[90%] bg-white dark:bg-slate-800"></div>
          </div>
          <div className="w-full md:w-1/4 h-20 overflow-hidden shadow-lg -mt-[1px] md:mt-0 md:border-l-0">
            <div className="h-[30%] bg-black dark:bg-slate-900"></div>
            <div className="h-[70%] bg-white dark:bg-slate-800"></div>
          </div>
          <div className="w-full md:w-1/4 h-20 overflow-hidden shadow-lg -mt-[1px] md:mt-0 md:border-l-0">
            <div className="h-[50%] bg-black dark:bg-slate-900"></div>
            <div className="h-[50%] bg-white dark:bg-slate-800"></div>
          </div>
          <div className="w-full md:w-1/4 h-20 overflow-hidden shadow-lg -mt-[1px] md:mt-0 md:rounded-r-lg md:rounded-l-none md:border-l-0">
            <div className="h-[70%] bg-black dark:bg-slate-900"></div>
            <div className="h-[30%] bg-white dark:bg-slate-800"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
