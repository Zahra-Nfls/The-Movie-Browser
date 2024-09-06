import Home from "./../assets/images/home.png"
import Search from "./../assets/images/loupe.png"
import User from "./../assets/images/user.png"
import { Link } from 'react-router-dom';

import logo from "./../../src/assets/images/play.png"
export default function Header(){
    return (
        <div className="flex justify-between bg-gray-900 py-8">
        <header className="flex flex-row items-baseline  pl-6 ">
            <Link to="/home">
        <h1 className="text-4xl text-white flex flex-row"><img className="w-12 rounded-full" src={logo} alt="logo"/>𝚉-𝙵𝚕𝚒𝚡</h1>
            </Link>
        </header>
        <nav className="flex flex-row items-center justify-center gap-7 mt-5">
            <Link to="/home">
            <img className="w-7 " src={Home}  alt="Home" />
            </Link>
            <Link to="/search">
            <img className="w-7 " src={Search}alt="Search" />
            </Link>
            <Link to="/user">
            <img className="w-7 mr-8 " src={User} alt="User" />
            </Link>
        </nav>
        </div>
    )
}