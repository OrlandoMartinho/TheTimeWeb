import loginImage from "../assets/img/loginImage.png";
import { Link } from "react-router-dom";

export function ConfirmCode() {
  return (
    <div className="w-full min-h-screen flex items-center justify-around">
      <div className="hidden md:block">
        <img src={loginImage} alt="" />
        <h1 className="text-blue-500 text-2xl mt-6 text-center">
          Expensive Control Application
        </h1>
      </div>
      <div className="min-w-48 w-96 p-4 sm:p-0">
        <h1 className="text-blue-500 font-semibold text-2xl mb-9">
          Enter the code
        </h1>
        <p className="text-gray-700 text-xl mb-14">
          Enter the code sent to the owner's <br /> email
        </p>
        <div>
          <form action="" className="space-y-9">
            <div className="flex flex-row justify-between">
              <input
                type="numer"
                name=""
                id=""
                placeholder="0"
                className="border-2 border-gray-500/60 rounded-full w-12 h-12 text-center bg-gray-100/35 outline-none"
              />
              <input
                type="numer"
                name=""
                id=""
                placeholder="0"
                className="border-2 border-gray-500/60 rounded-full w-12 h-12 text-center bg-gray-100/35 outline-none"
              />
              <input
                type="numer"
                name=""
                id=""
                placeholder="0"
                className="border-2 border-gray-500/60 rounded-full w-12 h-12 text-center bg-gray-100/35 outline-none"
              />
              <input
                type="numer"
                name=""
                id=""
                placeholder="0"
                className="border-2 border-gray-500/60 rounded-full w-12 h-12 text-center bg-gray-100/35 outline-none"
              />
            </div>
            <Link
              to="/"
              className="bg-blue-500 text-white rounded-xl py-4 px-8 mt-12 block w-full text-center "
            >
              Confirmar
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
