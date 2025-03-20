"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const Admin = () => {
  const router = useRouter();
  const [details, setDetails] = useState({
    username: "",
    password: "",
  });

  const handleAuth = async () => {
    try {
      const res = await fetch(`${process.env.API}/userlogin`, {
        method: "POST",
        body: JSON.stringify(details),
        headers: {
          "Content-Type": "applicaiton/json",
        },
      });

      if (!res.ok) {
        console.log("Can't authenticate the user");
        return;
      }

      console.log("can't authenticate");

      router.push("/Admin/ProjectMenu");
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
    // window.location.href = "./Admin/UploadProject";
    // router.push("/Admin/UploadProject");
    // router.push("/Admin/ProjectMenu");
  };

  return (
    <>
      <div className="bg-white dark:bg-black flex backdrop: w-full text-black h-[100vh] justify-center align-middle text-center items-center">
        {/* // the form starts here */}
        <div className="bg-white dark:bg-black px-10 py-5 text-white">
          <div className="flex gap-10 px-5 py-2 ">
            <label>Enter the email id</label>
            <input
              type="email"
              name="username"
              className="px-5 py-2 border-[1px] border-white rounded-md"
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className="flex gap-10 px-5 py-2">
            <label>Enter the password</label>
            <input
              name="password"
              type="password"
              className="px-5 py-2 border-white border-[1px] rounded-md"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="flex mt-5 justify-center">
            <button
              className="bg-white rounded-xl px-5 py-2 text-black"
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
