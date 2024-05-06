import Link from "next/link"
import { FaFacebook, FaInstagram, FaYoutube, FaQuestionCircle, FaHeadset } from "react-icons/fa";
import { Logo } from "./icons";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";

export const Footer = () => {

    return (

        <footer className="bg-grayBackground text-light">
            <div className="container">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
                    <div className="text-center sm:text-left">
                        <Logo />
                        <p className="text-[#9ca3af] pt-4">Unser Portfolio umfasst exquisite Immobilien in den besten Lagen und prestigeträchtigen Vierteln Dubais.</p>
                    </div>

                    <div className="text-center sm:text-left">
                        <p className="text-lg font-medium text-primary">Menü</p>
                        <ul className="mt-4 space-y-2 text-sm">
                            <li>
                                <Link className="text-[#9ca3af] transition hover:text-light" href="/about-us">Über uns</Link>
                            </li>
                            <li>
                                <Link className="text-[#9ca3af] transition hover:text-light" href="/listings">Angebote</Link>
                            </li>
                            <li>
                                <Link className="text-[#9ca3af] transition hover:text-light" href="dubai-info">Dubai-News</Link>
                            </li>
                            <li>
                                <Link className="text-[#9ca3af] transition hover:text-light" href="/corporate-relocation-services">Services</Link>
                            </li>
                            <li>
                                <Link className="text-[#9ca3af] transition hover:text-light" href="/contact-us">Kontaktformular</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="text-center sm:text-left">
                        <p className="text-lg font-medium text-primary">Geiss Properties</p>
                        <p className="text-[#9ca3af] pt-4">Creek Harbour, Dubai, United Arab Emirates</p>
                        <div className="mt-4 space-y-2 text-sm">
                            <div className="flex items-center justify-center md:justify-start">
                                <AiOutlinePhone className="h-5 w-5 text-[#9ca3af]" />
                                <a className="ml-2 text-[#9ca3af] transition hover:text-light" href="#">+49-2234-9967099</a>
                            </div>
                            <div className="flex items-center justify-center md:justify-start">
                                <AiOutlineMail className="h-5 w-5 text-[#9ca3af]" />
                                <a className="ml-2 text-[#9ca3af] transition hover:text-light" href="#">inquiry@geissproperty.com</a>
                            </div>
                        </div>
                    </div>

                    <div className="text-center sm:text-left md:col-span-2">
                        <p className="text-lg font-medium text-primary">Stay in Touch</p>
                        <div className="mx-auto mt-4 max-w-md sm:ms-0">
                            <form className="w-full">
                                <label htmlFor="UserEmail" className="sr-only">Email</label>
                                <div className="flex border border-gray-700 rounded-md">
                                    <input
                                        type="email"
                                        id="UserEmail"
                                        placeholder="john@rhcp.com"
                                        className="w-full border-none focus:border-transparent focus:outline-none sm:text-sm bg-grayBackground px-4"
                                    />
                                    <button className="px-6 py-3 text-sm font-bold uppercase bg-primary text-white transition-none hover:bg-primary/60 sm:w-auto sm:shrink-0">
                                        Sign Up
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />

                <div className="mb-6 sm:flex sm:items-center sm:justify-between">
                    <p className="text-center text-sm text-[#9ca3af] sm:text-left">
                        Copyright &copy; 2024 Geiss Property । All rights reserved.
                    </p>
                    <ul className="mt-4 flex justify-center gap-6 sm:mt-0 sm:justify-start">
                        <li>
                            <a href="#" rel="noreferrer" target="_blank" className="text-primary transition hover:text-primary/75">
                                <span className="sr-only">Facebook</span>
                                <FaFacebook className="h-6 w-6" />
                            </a>
                        </li>
                        <li>
                            <a href="#" rel="noreferrer" target="_blank" className="text-primary transition hover:text-primary/75">
                                <span className="sr-only">Instagram</span>
                                <FaInstagram className="h-6 w-6" />
                            </a>
                        </li>
                        <li>
                            <a href="#" rel="noreferrer" target="_blank" className="text-primary transition hover:text-primary/75 block" style={{ lineHeight: "1" }}>
                                <span className="sr-only">YouTube</span>
                                <FaYoutube className="h-6 w-6" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>

    )
}