"use client";
import { IoIosContact } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

export default function Contact() {
    return (
        <div className="bg-[#191919] flex flex-col items-center py-10">
            <h1 className="text-purple-500 text-5xl md:text-7xl font-bold mb-10">CONTACT US</h1>
            
            <div className="flex flex-col md:flex-row gap-10 w-full justify-center items-center">
                
                {/* Contact Information */}
                <div className="flex flex-col justify-center items-center border-4 bg-white h-auto md:h-[500px] w-11/12 md:w-[600px] p-6 rounded-lg shadow-lg">
                    <div className="flex items-center mb-8 text-xl md:text-2xl font-semibold">
                        <IoIosContact className="text-purple-500 mr-3" />
                        <span>0310-0208544</span>  
                    </div>
                    <div className="flex items-center mb-8 text-xl md:text-2xl font-semibold">
                        <MdEmail className="text-purple-500 mr-3" />
                        <span>aqsawaqar253@gmail.com</span>
                    </div>
                    <div className="flex items-center mb-8 text-xl md:text-2xl font-semibold">
                        <FaFacebookSquare className="text-purple-500 mr-3" />
                        <a href="https://facebook.com/AqsaAshraf" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800">
                            facebook.com/Aqsa Ashraf
                        </a>
                    </div>
                    <div className="flex items-center mb-8 text-xl md:text-2xl font-semibold">
                        <FaLinkedin className="text-purple-500 mr-3" />
                        <a href="https://linkedin.com/in/aqsa-waqar" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800">
                            linkedin.com/in/aqsa-waqar
                        </a>
                    </div>
                    <div className="flex items-center mb-8 text-xl md:text-2xl font-semibold">
                        <IoLogoGithub className="text-purple-500 mr-3" />
                        <a href="https://github.com/Aqsawaqar55" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800">
                            github.com/Aqsawaqar55
                        </a>
                    </div>
                </div>

                {/* Message Form */}
                <div className="w-11/12 md:w-[500px] flex flex-col items-center">
                    <h1 className="text-white text-2xl md:text-3xl mb-4">Message me:</h1>
                    <textarea 
                        className="text-lg md:text-xl p-4 border-2 border-black h-48 md:h-[200px] w-full md:w-[450px] rounded-lg"  
                        placeholder="Write your message here..."
                    />
                    <button 
                        className="bg-purple-500 text-white py-2 px-6 rounded-lg mt-6 hover:bg-purple-600 transition-all" 
                        onClick={() => alert("Thank you for contacting us!\nAqsa Waqar\nI'll be in touch soon")}
                    >
                        Send
                    </button>
                </div>
            </div>
            
            {/* Footer */}
            <div className="w-full md:w-[85%] bg-purple-500 mt-10 p-3 rounded-lg">
                <h3 className="text-right text-lg md:text-xl text-gray-300 mr-4">Thank you for contacting us!</h3>
            </div>
        </div>
    );
}
