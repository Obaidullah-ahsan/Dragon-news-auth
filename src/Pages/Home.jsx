import BrakingNews from "./BrakingNews";
import Header from "./Shered/Header/Header";
import LeftSideNav from "./Shered/LeftSideNav/LeftSideNav";
import Navbar from "./Shered/Navbar/Navbar";
import RightSideNav from "./Shered/RightSideNav/RightSideNav";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <BrakingNews></BrakingNews>
      <Navbar></Navbar>
      <div className="grid md:grid-cols-4 gap-5">
        <div className="border">
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="md:col-span-2 border">
          <h2 className="text-xl font-semibold">Dragon News Home</h2>
        </div>
        <div className="border">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
