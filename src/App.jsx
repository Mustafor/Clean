import './App.css'
import { FaceBookIcon, Item1, Item2, Item3, Item4, LogoIcon, MIcon, TelegramIcon, TwitterIcon, WatchIcon } from './assets/images/Icon'
import Hero from './assets/images/Hero.png'
import img1 from './assets/images/img1.png'
import img2 from './assets/images/img2.png'
import img3 from './assets/images/img3.png'
import img4 from './assets/images/img4.png'
import img5 from './assets/images/img5.png'
import plan from './assets/images/plan.png'
import speed from './assets/images/speed.png'
import puple from './assets/images/puple.png'
import how from './assets/images/how.png'

function App() {
  return(
    <>
      <div className='px-[114px] py-[19px] flex items-center border-b-[2px] border-b-[#D8E3FE] justify-between gap-[73px]'>
        <div>
          <LogoIcon/>
        </div>
        <ul className='flex items-center gap-[42px]'>
          <li>
            <a className='text-[12px] text-[#697CA6] font-medium hover:text-black duration-300' href="#">Home</a>
          </li>
          <li>
            <a className='text-[12px] text-[#697CA6] font-medium hover:text-black duration-300' href="#">Blog</a>
          </li>
          <li>
            <a className='text-[12px] text-[#697CA6] font-medium hover:text-black duration-300' href="#">Features</a>
          </li>
          <li>
            <a className='text-[12px] text-[#697CA6] font-medium hover:text-black duration-300' href="#">Pricing</a>
          </li>
          <li>
            <a className='text-[12px] text-[#697CA6] font-medium hover:text-black duration-300' href="#">Documentation</a>
          </li>
        </ul>
        <div className='flex cursor-pointer items-center gap-[37px]'>
            <FaceBookIcon/>
            <TelegramIcon/>
            <TwitterIcon/>
            <MIcon/>
        </div>
        <button className='w-[113px] py-[13px] bg-[#D2E1FF] rounded-md text-[#3A79FF] text-[13px] font-bold border-[2px] border-[#D2E1FF] duration-300 hover:border-[2px] hover:bg-transparent'>Get started</button>
      </div>
      <div className='pt-[37px] bg-[#F4F7FF]'>
        <img className='cursor-pointer' src={Hero} alt="hero" width={1500} height={700}/>
      </div>
      <div className='flex items-center justify-center gap-[76px] px-[114px] py-[60px]'>
      <img className='cursor-pointer' src={img1} alt="img" width={116} height={29}/>
      <img className='cursor-pointer' src={img2} alt="img" width={116} height={29}/>
      <img className='cursor-pointer' src={img3} alt="img" width={116} height={29}/>
      <img className='cursor-pointer' src={img4} alt="img" width={116} height={29}/>
      <img className='cursor-pointer' src={img5} alt="img" width={116} height={29}/>
      </div>
      <div className='px-[114px] pt-[50px] bg-[#F5F8FF] flex items-center justify-center gap-[55px]'>
        <div>
          <span className='text-[10px] font-bold text-[#3D4F9F] mb-[27px]'>DESKTOP AND MOBILE APP</span>
          <h2 className='text-[36px] font-bold text-[#3D4F9F] mb-[27px]'>Plan and manage</h2>
          <p className='text-[15px] text-[#8D96BD] w-[413px] mb-[47px]'>Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu atqui laudem an, insolens gubergren similique est cu. Et vel modus congue vituperata. Solum patrioque no sea. Mea ex malis mollis oporteat. Eum an expetenda consequat.</p>
          <div className='flex items-center gap-[3px]'>
          <button className='flex items-center justify-center gap-[6px] w-[130px] py-[13px] bg-[#4C85FF] rounded-md border-[2px] border-[#4C85FF] text-white hover:bg-transparent duration-300 hover:text-[#4C85FF] text-[13px] font-bold'>
            <span>View video</span>
            <WatchIcon/>
          </button>
          <button className='bg-white w-[130px] py-[13px] border-[2px] text-[13px] text-[#ADB4D2] font-bold rounded-md hover:bg-slate-500 duration-300 hover:border-slate-500 border-[#ADB4D2]'>See features</button>
          </div>
        </div>
          <img className='flex items-center justify-center' src={plan} alt="plan" width={653} height={436}/>
      </div>
      <div className='px-[114px] py-[50px]'>
        <span className='flex items-center mb-[20px] justify-center text-[#3D4F9F] text-[10px] font-bold'>ABOUT US</span>
        <h2 className='text-[#3D4F9F] text-center text-[24px] font-bold mb-[92px]'>Read about our app</h2>
        <ul className='flex justify-center gap-[67px]'>
          <li>
            <div className='w-[69px] mx-auto h-[69px] rounded-full mb-[33px] bg-[#F1F5FF] flex items-center justify-center'>
              <Item1/>
            </div>
            <strong className='text-[14px] font-bold text-[#4074F8] mb-[25px] block text-center'>Overview</strong>
            <p className='text-center w-[140px] text-[#ADB3CB] text-[11px]'>Brute laoreet efficiendi id his, ea illum nonumes luptatum pro.</p>
          </li>
          <li>
            <div className='w-[69px] mx-auto h-[69px] rounded-full mb-[33px] bg-[#F1F5FF] flex items-center justify-center'>
              <Item2/>
            </div>
            <strong className='text-[14px] font-bold text-[#4074F8] mb-[25px] block text-center'>Files</strong>
            <p className='text-center w-[140px] text-[#ADB3CB] text-[11px]'>No vim nulla vitae intellegat. Ei enim error ius, solet atomorum conceptam ex has.</p>
          </li>
          <li>
            <div className='w-[69px] mx-auto h-[69px] rounded-full mb-[33px] bg-[#F1F5FF] flex items-center justify-center'>
              <Item3/>
            </div>
            <strong className='text-[14px] font-bold text-[#4074F8] mb-[25px] block text-center'>Meeting chats</strong>
            <p className='text-center w-[140px] text-[#ADB3CB] text-[11px]'>Vim ne tacimates neglegentur. Erat diceret omittam at est.</p>
          </li>
          <li>
            <div className='w-[69px] mx-auto h-[69px] rounded-full mb-[33px] bg-[#F1F5FF] flex items-center justify-center'>
              <Item4/>
            </div>
            <strong className='text-[14px] font-bold text-[#4074F8] mb-[25px] block text-center'>Save events</strong>
            <p className='text-center w-[140px] text-[#ADB3CB] text-[11px]'>Nisl idque mel ea, nominati voluptatum.
            </p>
          </li>
        </ul>
        <div className='flex items-center mt-[92px] justify-center gap-[16px]'>
          <button className='w-[113px] py-[13px] rounded-md bg-[#FFD7D7] font-bold duration-300 hover:bg-transparent hover:border-[2px] border-[2px] border-[#FFD7D7] text-[13px] text-[#D43F3F]'>Read more</button>
          <div className='flex items-center gap-[17px]'>
            <span className='border-[1px] border-[#DAE4FE] w-[15px] block'></span>
            <strong className='text-[#ADB3CB] text-[11px] font-bold'>OR</strong>
            <span className='border-[1px] border-[#DAE4FE] w-[15px] block'></span>
            <button className='w-[113px] py-[13px] rounded-md bg-[#D2E1FF] font-bold duration-300 hover:bg-transparent hover:border-[2px] border-[2px] border-[#D2E1FF] text-[13px] text-[#3A79FF]'>Get started</button>
          </div>
        </div>
      </div>
      <div className='flex justify-center'>
        <div className='bg-[#6888FF] py-[66px] pl-[360px] pr-[94px] w-[720px]'>
            <img className='mb-[24px] ml-[190px]' src={speed} alt="speed" width={65} height={66}/>
            <strong className='text-[48px] ml-[160px] font-bold text-white mb-[30px]'>89%</strong>
            <p className='w-[260px] text-end text-[18px] text-white'>Customers who have increased their productivity</p>
        </div>
        <div className='bg-[#E9EFFF] w-[720px] py-[66px] pl-[94px] pr-[370px]'>
          <img className='mb-[24px]' src={puple} alt="puple" width={71} height={62}/>
          <strong className='text-[#5E80FF] text-[48px] font-bold mb-[30px]'>3123</strong>
          <p className='text-[18px] w-[260px] text-[#5E80FF]'>Users who have used our application</p>
        </div>
      </div>
      <div className='px-[114px] bg-[#F5F8FF] py-[104px]'>
        <span className='text-center block text-[#3D4F9F] text-[10px] font-medium mb-[20px]'>OUR RESOURCES</span>
        <h2 className='text-[24px] font-bold text-[#3D4F9F] text-center mb-[92px]'>Start reading our blog</h2>
        <div className='bg-white w-[958px] mx-auto flex items-center justify-center'>
          <div>
          <img  className='cursor-pointer' src={how} alt="how" width={407} height={267}/>
          </div>
            <div>
              <h2 className='text-[36px] font-bold text-[#3D4F9F] mb-[32px]'>How to start planning</h2>
              <p className='w-[408px] text-[14px] text-[#8D96BD] mb-[31px]'>Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti. Natum petentium principes mei ea. Tota everti periculis vis ei, quas tibique pro at, eos ut decore ...
              </p>
              <div className='flex items-center gap-[8px]'>
                <button className='w-[113px] py-[13px] bg-[#D2E1FF] rounded-md border-[2px] border-[#D2E1FF] text-[#3A79FF] text-[13px] font-bold hover:bg-transparent duration-300'>Read now</button>
                <button className='w-[211px] py-[13px] border-[2px] border-white rounded-md text-[#A6B6DA] text-[13px] font-bold hover:bg-[#A6B6DA] hover:border-[#A6B6DA] hover:text-white duration-300'>Add to your bookmarks</button>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default App
