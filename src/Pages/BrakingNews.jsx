import Marquee from "react-fast-marquee";

const BrakingNews = () => {
  return (
    <div className="flex bg-[#F3F3F3] p-3 rounded-sm mt-6">
      <button className="btn bg-[#D72050] text-white rounded-none px-6 text-[20px]">Latest</button>
      <Marquee>
        I can be a React component, multiple React components, or just some
        text.
      </Marquee>
    </div>
  );
};

export default BrakingNews;
