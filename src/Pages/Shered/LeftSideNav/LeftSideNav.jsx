import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="p-2">
      <h2 className="text-xl font-semibold">All Caterogy</h2>
      <div className="flex flex-col gap-2 font-medium">
        {categories.map((categorie) => (
          <NavLink key={categorie.id}>
            <button className="btn w-full text-[17px] justify-start text-[#9F9F9F] hover:text-black bg-white border-0 shadow-none pl-10">{categorie.name}</button>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftSideNav;
