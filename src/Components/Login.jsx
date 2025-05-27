import React, { useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const location = useLocation();

  const navigate = useNavigate();
  const { signInWithGoogle, setUser, signInWithEmailPass } =
    useContext(AuthContext);
  const handleGoogleBtn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // login btn
  const handleLoginBtn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const pass = form.pass.value;
    signInWithEmailPass(email, pass)
      .then((result) => {
        const user = result.user;
        form.reset();
        setUser(user);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <div className="hero mt-20">
      <div className="card shadow-primary w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body text-primary">
          <form onSubmit={handleLoginBtn} className="fieldset">
            <label className="label text-neutral-950">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
            />
            <label className="label text-neutral-950">Password</label>
            <input
              name="pass"
              type="password"
              className="input"
              placeholder="Password"
            />
            <div>
              <p className="text-md">
                Don't have an account, click here to{" "}
                <NavLink to={"/auth/signup"} className="link link-hover">
                  Signup
                </NavLink>
              </p>
            </div>
            <button
              type="submit"
              className="btn btn-primary text-secondary mt-0"
            >
              Login
            </button>
          </form>
          <button
            onClick={handleGoogleBtn}
            className="btn bg-white text-black border-[#e5e5e5]"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
