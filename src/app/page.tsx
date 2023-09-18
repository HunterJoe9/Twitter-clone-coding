import LeftSidebar from "@/components/LeftSidebar";
import MainComponent from "@/components/MainComponent";
import RightSidebar from "@/components/RightSidebar";

const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center text-white relative bg-black">
      <div className="max-w-[70vw] w-full h-full flex relative">
        <LeftSidebar />
        <MainComponent />
        <RightSidebar />
      </div>
    </div>
  )
}

export default Home;