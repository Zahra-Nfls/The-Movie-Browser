import { Link } from "react-router-dom"
import logo from "./../../src/assets/images/play.png"


export default function User(){

    return(
        <>
        <div
            className="relative min-h-screen bg-cover bg-center bg-no-repeat flex flex-col"
            style={{ backgroundImage: `url("./../../src/assets/images/BG.jpg")` }}
        >
            <header className="absolute top-0 left-0 m-4"> <Link to="/home">
        <h1 className="text-4xl text-white flex flex-row"><img className="w-12 rounded-full" src={logo} alt="logo"/>𝚉-𝙵𝚕𝚒𝚡</h1>
            </Link>
            </header>
            <section className="flex justify-center items-center ">
            <div className="bg-black bg-opacity-75 p-8 rounded-lg text-center w-full max-w-md my-40 flex justify-center items-center flex-col ">
            <h2 className="text-4xl text-white mb-6">Sign In</h2>
            <form className="flex flex-col gap-4">
                <input
                type="text"
                placeholder="Email or mobile number"
                className="pl-2 bg-transparent border border-white text-white placeholder-white py-2 rounded-md"
                />
                <input
                type="text"
                placeholder="Password"
                className="pl-2 bg-transparent border border-white text-white placeholder-white py-2 rounded-md"
                />
                <button className="mt-6 inline-block bg-red-600 px-4 py-2 rounded text-white hover:bg-red-700 transition duration-300">
                Sign In
                </button>
                <p className="text-white text-center mt-4">Or</p>
                <button className="bg-white bg-opacity-75 text-black px-4 py-2 rounded-md transition duration-300 ease-in-out hover:bg-gray-500 hover:bg-opacity-75">
                Use a Sign-In Code
                </button>
            </form>
            <p className="text-white mt-4">Forgot password?</p>
            <form className="mt-4">
                <input
                type="checkbox"
                className="form-checkbox h-4 w-4 rounded text-white "
                /> <label htmlFor="rememberMe" className="text-white ml-2">
                Remember Me
                </label>
            </form>
            <p className="text-white mt-4">
                New to 𝚉-𝙵𝚕𝚒𝚡?{" "} {" "}
                <a className="underline decoration-solid" href="#">
                Sign up now.
                </a>
            </p>
            </div>
            </section>
        </div>
        </>
    )
}