import loginImage from "../assets/img/loginImage.png";
import { spiral } from "ldrs";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

spiral.register();
export function Login() {
  const [loader, setLoader] = useState<boolean>(true);

  useEffect(() => {
    setInterval(() => {
      setLoader(false);
    }, 4000);
  }, []);
  return (
    <>
      {loader ? (
        <div className="bg-white w-screen h-screen flex items-center justify-center">
          <l-spiral size="90" speed="0.9" color="#2996F5"></l-spiral>
        </div>
      ) : (
        <div className="w-full min-h-screen flex items-center justify-around">
          <div className="hidden md:block">
            <img src={loginImage} alt="" />
            <h1 className="text-blue-500 text-2xl mt-6 text-center">
              Expensive Control Application
            </h1>
          </div>
          <div className="min-w-48 p-4 sm:p-0">
            <h1 className="text-blue-500 font-semibold text-2xl mb-9">
              Welcome Back!
            </h1>
            <p className="text-gray-700 text-xl mb-14">
              Enter with your crendences to continue
            </p>
            <div>
              <form action="" className="space-y-9">
                <div className="flex flex-col">
                  <label htmlFor="">Email</label>
                  <input
                    type="email"
                    name=""
                    id=""
                    placeholder="srsaimbo@gmail.com"
                    className="border-b-2 border-gray-500/60 bg-gray-100/35 outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="">Password</label>
                  <input
                    type="password"
                    name=""
                    id=""
                    placeholder="000000"
                    className="border-b-2 border-gray-500/60 bg-gray-100/35 outline-none"
                  />
                </div>
                <div className="mt-12">
                  <Link
                    to="/forgot-password"
                    className="text-right block text-blue-500 mb-12"
                  >
                    Forget Password
                  </Link>
                </div>
                <Link
                  to="/"
                  className="bg-blue-500 text-white rounded-xl py-4 px-8 mt-12 block w-full text-center "
                >
                  Entar
                </Link>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
