import facebook from "./../../src/assets/images/facebook.png"
import twitter from "./../../src/assets/images/twitter.png"
import instagram from "./../../src/assets/images/instagram.png"
import email from "./../../src/assets/images/email.png"
import qrCode from "./../../src/assets/images/qr-code.png"

export default function Footer(){


    return(
        <>
        <div className="flex flex-col justify-center align-center space-x-6  bg-gray-900">
                <nav className="mt-12">
                    <ul className="flex flex-row justify-center align-center gap-9 text-white list-none  decoration-solid  cursor-pointer mb-3 underline decoration-solid">
                        <li>FAQ</li>
                        <li>Terms of Use</li>
                        <li>Help Center</li>
                        <li>Privacy</li>
                    </ul>
                </nav>
            <div className="flex flex-row  justify-around mx-10 ">
                <div className="flex items-center flex flex-col">
            <h2 className="mb-2 text-white">
            𝙳𝚘𝚠𝚗𝚕𝚊𝚍 𝚃𝚑𝚎 𝙰𝚙𝚙
            </h2>
                <a href="https://play.google.com/store/games?hl=en&pli=1" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <img className="w-20" src={qrCode} alt="qrCode" />
                </a>
                </div>
                <div className="flex  items-center flex-col space-x-3" >
                    <section>
                    <h2 className="mb-2 text-white">
                    𝙵𝚘𝚕𝚕𝚘𝚠 𝚄𝚜 𝚘𝚗: 
                    </h2>
                    </section>
                    <section  className="flex  items-center flex-row space-x-3">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                        <img className="w-6" src={facebook} alt="fb" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                            <img className="w-6" src={twitter} alt="x" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                        <img className="w-6" src={instagram} alt="ig" />
                        </a>
                        <a href="https://www.microsoft.com/en-us/microsoft-365/outlook/log-in" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                        <img className="w-6" src={email} alt="@" />
                        </a>
                    </section>
                </div>
            </div>
                <div className="mt-8 text-center text-white bg-gray-900 mt-10">
                    <p>&copy; 2024 MovieBrowser. All rights reserved.</p>
                </div>
                    </div>
        </>
    )
}