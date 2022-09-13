import React, { useState } from "react";
import { Link } from "react-router-dom";

function SignupPage() {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [plainPassword, setPlainPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="flex flex-col w-full items-center justify-center h-[90vh]">
      <div className="flex pb-3 flex-col   w-80 ">
        <div className="flex justify-between w-full items-center">
          {" "}
          <p
            className="font-bold text-gray-800  text-lg tracking-tight leading-4"
            style={{ fontFamily: "Montserrat" }}
          >
            Signup
          </p>
          <p
            className=" text-gray-800  text-sm tracking-tight leading-4"
            style={{ fontFamily: "Poppins" }}
          >
            Welcome
          </p>
        </div>
      </div>
      <div className="flex flex-col">
        <p className="text-sm">Username</p>
        <div className="flex relative  transition-all">
          <div
            className={`absolute top-0.5    mt-[1px] left-0 transition-all text-gray-700
        `}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          </div>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="username"
            className={`outline-none ring-1   rounded-md p-2 pl-8
          ring-gray-500 focus:ring-main
        text-gray-800 transition-all text-sm w-[320px] md:w-[350px]`}
          />
        </div>
      </div>
      <div className="flex flex-col mt-1">
        <p className="text-sm">Password</p>
        <div className="flex relative  transition-all">
          <div
            className={`absolute top-0.5    mt-[1px] left-0 transition-all text-gray-700`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
          </div>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={plainPassword ? "text" : "password"}
            className={`outline-none ring-1   rounded-md p-2 pl-8 ring-gray-500 focus:ring-main
             text-gray-800 transition-all text-sm w-[320px] md:w-[350px]`}
            placeholder="password"
          />
          <div
            className={`absolute top-0.5    mt-[1px] right-1 transition-all cursor-pointer text-gray-700`}
            onClick={() => setPlainPassword(!plainPassword)}
          >
            {plainPassword ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-1">
        <p className="text-sm">Confirm Password</p>
        <div className="flex relative  transition-all">
          <div
            className={`absolute top-0.5    mt-[1px] left-0 transition-all text-gray-700`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
          </div>
          <input
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type={plainPassword ? "text" : "password"}
            className={`outline-none ring-1   rounded-md p-2 pl-8 ring-gray-500 focus:ring-main
             text-gray-800 transition-all text-sm w-[320px] md:w-[350px]`}
            placeholder="confirm password"
          />
          <div
            className={`absolute top-0.5    mt-[1px] right-1 transition-all cursor-pointer text-gray-700`}
            onClick={() => setPlainPassword(!plainPassword)}
          >
            {plainPassword ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            )}
          </div>
        </div>
      </div>

      <div
        // onClick={LoginWithEmail}
        className="flex justify-center   w-[340px] mt-2  cursor-pointer rounded-md font-bold bg-main py-1.5 text-white tracking-wider bg-teal-700 hover:bg-green-700 transition-all"
      >
        Login
      </div>

      <div className="mt-3 flex flex-col leading-4 text-sm text-center">
        <p>Already have an Account?</p>
        <p
          //   onClick={() => router.push("/signup")}
          className="text-blue-600 hover:underline cursor-pointer"
        >
          <Link to={"/login"}>Go to login</Link>
        </p>
      </div>
    </div>
  );
}

export default SignupPage;
