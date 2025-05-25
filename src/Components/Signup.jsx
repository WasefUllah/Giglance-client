import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Signup = () => {
  const [errorText, setErrorText] = useState("");
  const navigate = useNavigate();
  const { signInWithGoogle, setUser, signUpWithEmailPass, updateUser } =
    useContext(AuthContext);
  const handleGoogleBtn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // sign up
  const handleSignUpBtn = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const pass = form.pass.value;
    const photo = form.photo.value;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if (!passwordRegex.test(pass)) {
      setErrorText(
        "Password must be at least 6 characters long and contain both uppercase and lowercase letters."
      );
      // console.log(errorText);
      return;
    }
    signUpWithEmailPass(email, pass).then((result) => {
      const user = result.user;
      const updatedUser = { displayName: name, photoURL: photo };
      updateUser(updatedUser)
        .then(() => {
          setUser({ ...user, displayName: name, photoURL: photo });
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
          setUser(user);
        });
    });
  };
  return (
    <div className="hero mt-20">
      <div className="card shadow-primary w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body text-primary">
          <form onSubmit={handleSignUpBtn} className="fieldset">
            <label className="label text-neutral-950">Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="John Doe"
              required
            />
            <label className="label text-neutral-950">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="johndoe@gmail.com"
              required
            />
            <label className="label text-neutral-950">Password</label>
            <input
              name="pass"
              type="password"
              className="input"
              placeholder="Password"
              required
            />
            <label className="label text-neutral-950">Photo URL</label>
            <input
              name="photo"
              type="text"
              className="input"
              placeholder="Photo URL"
              required
            />
            <div>
              <p className="text-md">
                Already have an account, click here to{" "}
                <NavLink to={"/auth/login"} className="link link-hover">
                  Login
                </NavLink>
              </p>
              {errorText ? (
                <p className="text-xs text-red-500 h-8">{errorText}</p>
              ) : (
                <p className="h-8"></p>
              )}
            </div>
            <button
              type="submit"
              className="btn btn-primary text-secondary mt-0"
            >
              Signup
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

export default Signup;
