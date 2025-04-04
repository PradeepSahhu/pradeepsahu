"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import "./loadingstyle.css";

const Loading = () => {
  return (
    <div className={`container`}>
      <div className={`box `}></div>
    </div>
  );
};

const Admin = () => {
  const router = useRouter();
  const [details, setDetails] = useState({
    username: "",
    password: "",
  });

  const [loggedIn, setLoggedIn] = useState(false);
  const [loggedInMessage, setLoggedInMessage] = useState("");

  const Message = () => {
    return (
      <div className="my-2">
        <p className="text-red-600 ">{loggedInMessage}</p>
      </div>
    );
  };

  const handleAuth = async () => {
    console.log("login button clicked");
    console.log(details);
    try {
      const res = await fetch(`${process.env.API}userlogin`, {
        // const res = await fetch("http://localhost:8000/userlogin", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(details),
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("This is the authentication page");
      console.log(res);

      if (!res.ok) {
        console.log("Can't authenticate the user");
        setLoggedInMessage("Please Enter correct username or password");
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

  const handleClick = async () => {
    setLoggedInMessage("");
    console.log("the handle click is ");
    setLoggedIn(true);
    await handleAuth();
    setLoggedIn(false);
    // window.location.href = "./Admin/UploadProject";
    // router.push("/Admin/UploadProject");
    // router.push("/Admin/ProjectMenu");
  };

  return (
    <>
      <div className="bg-white dark:bg-black flex backdrop: w-full text-black h-[100vh] justify-center align-middle text-center items-center">
        {loggedIn && <Loading />}
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

          {<Message />}
        </div>
      </div>
    </>
  );
};

export default Admin;
