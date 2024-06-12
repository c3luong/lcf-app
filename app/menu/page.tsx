import React from 'react'

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      <div className="flex flex-col w-full max-w-[960px] font-mono">
        <div className="flex flex-col divide-y divide-red-500 divide-y-2 text-red-500 text-left py-4 text-xl	font-black">
          <div>APPETIZERS</div>
          <div> </div>
        </div>
        <div className="flex flex-col md:flex-row font-semibold">
          <div className="flex flex-col w-full md:w-1/2">
            <div className="flex flex-col w-full pb-2">
              <div className="flex w-full">
                <div className="shrink-0">Imperial Rolls</div>
                <div className="flex-grow mx-2 overflow-x-hidden">·································································</div>
                <div className="justify-left">6</div>
              </div>
              <div className="font-light italic"> 
                two pieces
              </div>
            </div>
            <div className="flex flex-col w-full pb-2">
              <div className="flex w-full">
                <div className="shrink-0">Saigon Salad Rolls</div>
                <div className="flex-grow mx-2 overflow-x-hidden">·································································</div>
                <div className="justify-left">7</div>
              </div>
              <div className="font-light italic"> 
                two pieces
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full pb-2 md:w-1/2 md:pl-6">
            <div className="flex w-full">
              <div className="shrink-0">Hanoi Shrimp Cakes</div>
              <div className="flex-grow mx-2 overflow-x-hidden">.....................................................</div>
              <div className="justify-left">7.5</div>
            </div>
            <div className="font-light italic"> 
              two pieces
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
