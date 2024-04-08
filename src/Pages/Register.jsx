import { Link } from "react-router-dom";
import Navbar from "./Shered/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
    const {createUser}=useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const photo = form.get('photo');
    const email = form.get('email');
    const password = form.get('password');
    createUser(email,password)
    .then(result =>{
        console.log(result.user);
        e.target.reset();
    })
    .catch(error=>{
        alert(error.code);
    })
  };
  return (
    <div className="bg-[#F3F3F3] min-h-screen">
      <Navbar></Navbar>
      <div className="card shrink-0 rounded-none w-full max-w-xl px-16 pt-10 pb-6 shadow-2xl bg-base-100 text-center mx-auto mt-10">
        <h1 className="text-3xl font-bold">Register your account</h1>
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Your Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter your photo url"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Email address</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input input-bordered"
              required
            />
          </div>
          <div>
            <button className="btn bg-black text-white px-6 text-[20px] ml-1 w-full">Register</button>
          </div>
        </form>
        <p className="text-[#706F6F]">
          Already Have An Account ?
          <Link to="/login">
            <button className="btn btn-link pl-1 text-red-600 font-bold">
              Login
            </button>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
