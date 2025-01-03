import loginImage from "../assets/img/loginImage.png";
import { Link } from "react-router-dom";

export function ForgotPassWord() {
  return (
    <div className="w-full min-h-screen flex items-center justify-around">
      <div className="hidden md:block ">
        <img src={loginImage} alt="" />
        <h1 className="text-blue-500 text-2xl mt-6 text-center">
          Expensive Control Application
        </h1>
      </div>
      <div className="min-w-48 w-96 p-4 sm:p-0">
        <h1 className="text-blue-500 font-semibold text-2xl mb-9">
          Forgot password
        </h1>
        <p className="text-gray-700 text-xl mb-14">
          Enter your email, we will send a <br /> message to the app owner!
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
            <Link
              to="/"
              className="bg-blue-500 text-white rounded-xl py-4 px-8 mt-12 block w-full text-center "
            >
              Enviar
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
