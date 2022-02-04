import { CompassOutline,StatsChartOutline,CreateOutline,WalletOutline,SearchOutline } from 'react-ionicons'
import Image from 'next/image'
import Userlogo from './usr.png'
function Header() {
    return (
        <div className={`w-full h-14 backdrop-blur-sm md:h-20 bg-transparent text-white fixed top-0 left-0 flex flex-row`}>
            <div className={`w-2/5 md:w-1/4 text-2xl ml-4 md:text-3xl md:ml-14 md:mt-5 mt-2 font-semibold md:font-normal lg:font-semibold font-ubuntu`}>Deiner-NFT.</div>
            <div className={`block md:hidden w-3/4 realtive flex flex-row`}>
                {/* <div className="w-20 text-center rounded-lg right-0 mt-3 mr-4 absolute border border-black">Menu</div> */}
                <div className="right-0 mt-3 mr-5 absolute cursor-pointer"><WalletOutline color={"white"} /></div>
            </div>
            <div className={`hidden md:block w-full relative md:flex md:flex-row space-x-3`}>
                <div className={`ml-10 mt-5 border hover:border-2 border-white rounded-lg h-10 flex flex-row p-2 w-2/5`}>
                    <SearchOutline color={"white"}/>
                    <input className="ml-1 border-none bg-transparent w-full placeholder:text-gray-200 outline-none" type='text' placeholder='Search items, collections, and accounts' />
                </div>
                <div className="relevant flex flex-row mt-6 space-x-10 xl:space-x-4">
                    {/* mobile */}
                    <div className='block xl:hidden'><CompassOutline color={'white'} height="25px" width="25px" /></div>
                    <div className='block xl:hidden'><StatsChartOutline color={'white'} height="25px" width="25px" /></div>
                    <div className='block xl:hidden'><CreateOutline color={'white'} height="25px" width="25px" /></div>
                    {/* desktop */}
                    <div className="hidden xl:block font-semibold text-lg cursor-pointer">Explore</div>
                    <div className="hidden xl:block font-semibold text-lg cursor-pointer">Stats</div>
                    <div className="hidden xl:block font-semibold text-lg cursor-pointer">Create</div>
                </div>
                <div className="hidden md:block right-16 mt-6 absolute md:flex md:flex-row">
                    <div className='mr-6 cursor-pointer'><Image src={Userlogo} className='rounded-full ' width={34} height={34} /></div>
                    <div className='cursor-pointer'><WalletOutline color={"white"} height="32px" width="32px"/></div>
                </div>
            </div>
        </div>
    )
}

export default Header
