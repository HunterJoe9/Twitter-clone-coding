import LeftSidebar from "@/components/LeftSidebar";
import {BsDot, BsChat,BsThreeDots, BsSearch} from 'react-icons/bs'
import {AiOutlineRetweet, AiOutlineHeart} from 'react-icons/ai'
import {IoStatsChart,IoShareOutline} from 'react-icons/io5'
import MainComponent from "@/components/MainComponent";
import RightSidebar from "@/components/RightSidebar";

const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-[70vw] w-full h-full flex relative">
        <LeftSidebar />
        <MainComponent />
        <RightSidebar />
      </div>
    </div>
  )
}

export default Home;