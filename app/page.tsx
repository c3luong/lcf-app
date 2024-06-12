export default function Home() {
  return (
    <main className="flex flex-row min-h-screen min-w-full bg-red justify-center text-base md:text-2xl text-white">
      <div className="flex max-w-screen-md grow flex-col justify-between max-h-[700px]">
        <div className="flex flex-row p-2"> 
          <div className="w-1/4 hover:underline"> <a href="https://squareup.com/ca/en/online-ordering">Menu</a></div>
          <div className="w-1/2 hover:underline text-center font-mono text-xs content-center"> <a href="https://google.ca">French</a></div>
          <div className="w-1/4"> &nbsp; </div>
        </div>
        <div className="flex justify-stretch flex-row text-center items-end"> 
          <div className="w-1/12 flex-none"></div>
          <div className="w-2/12 font-mono"> Asian <br /> Cuisine </div>
          <div className="w-6/12 text-6xl md:text-8xl"> Lynn Chau <br /> Fusion </div>
          <div className="w-2/12 font-mono"> Cusine <br /> Asiatique </div>
          <div className="w-1/12 flex-none"></div> 
        </div>
        <div className="py-4"> 
          <hr />
          <div className="flex flex-column text-center content-between py-8">
            <div className="flex flex-col w-1/3">
              <div>Location</div>
              <div className="font-mono text-xs">519 Main Street, <br /> Shediac, New Brunswick, <br /> Canada E4P 2C4 </div>
            </div>
            <div className="flex flex-col w-1/3">
              <div>Hours</div>
              <div className="font-mono text-xs">Mon & Wed-Sun: 11AM - 8PM <br /> Tues: Closed</div>
            </div>
            <div className="flex flex-col w-1/3">
              <div>Phone</div>
              <div className="font-mono text-xs"> 506-532-1313 </div>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </main>
  );
}