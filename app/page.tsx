export default function Home() {
  return (
    <main className="flex flex-row min-h-screen min-w-full bg-red justify-center text-base md:text-2xl text-white">
      <div className="flex max-w-screen-md grow flex-col justify-between max-h-[600px] md:max-h-[650px]">
        <div className="flex flex-row p-4"> 
          <div className="w-1/4 hover:underline tracking-widest"> <a href="https://squareup.com/ca/en/online-ordering">Menu</a></div>
          <div className="w-1/2 text-center font-mono text-xs content-center"> EN | <a className="hover:underline" href="https://google.ca">FR</a></div>
          <div className="w-1/4"> &nbsp; </div>
        </div>
        <div className="flex justify-stretch flex-row text-center items-end"> 
          <div className="w-1/12 flex-none"></div>
          <div className="w-2/12 font-mono"> Asian <br /> Cuisine </div>
          <div className="w-6/12 text-5xl md:text-8xl tracking-widest"> Lynn Chau <br /> Fusion </div>
          <div className="w-2/12 font-mono"> Cusine<br />Asiatique </div>
          <div className="w-1/12 flex-none"></div> 
        </div>
        <div className="py-4"> 
          <hr />
          <div className="flex md:flex-row flex-col text-center content-between py-8">
            <div className="flex flex-col md:w-1/3 py-4">
              <div className="tracking-widest	">Location</div>
              <div className="font-mono text-sm">519 Main Street, <br /> Shediac, NB E4P 2C4</div>
            </div>
            <div className="flex flex-col md:w-1/3 py-4">
              <div className="tracking-widest">Hours</div>
              <div className="font-mono text-sm">Mon & Wed-Sun: 11AM - 8PM <br /> Tues: Closed</div>
            </div>
            <div className="flex flex-col md:w-1/3 py-4">
              <div className="tracking-widest">Phone</div>
              <div className="font-mono text-sm"> 506-532-1313 </div>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </main>
  );
}
