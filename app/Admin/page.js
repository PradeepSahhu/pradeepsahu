"use client";

import { useState } from "react";

const Admin = () => {
  const [details, setDetails] = useState({
    username: "",
    password: "",
  });

  const handleAuth = async () => {
    try {
      const res = await fetch(`${process.env.API}/authenticate`, {
        method: "POST",
        body: JSON.stringify(details),
        headers: {
          "Content-Type": "applicaiton/json",
        },
      });

      if (!res.ok) {
        console.log("Can't authenticate the user");
      }
    } catch (error) {
      console.log("there is some problem with the user");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleClick = () => {
    console.log("the handle click is ");
    handleAuth();
  };

  return (
    <>
      <div className="bg-white dark:bg-black flex backdrop: w-full text-black h-[100vh] justify-center align-middle text-center items-center">
        {/* // the form starts here */}
        <div className="bg-white dark:bg-black px-10 py-5 text-white">
          <div className="flex gap-10">
            <label>Enter the email id</label>
            <input
              type="email"
              name="username"
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className="flex gap-10 ">
            <label>Enter the password</label>
            <input
              name="password"
              type="password"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <button
              onClick={() => {
                handleClick();
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
