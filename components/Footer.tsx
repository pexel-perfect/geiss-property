import Link from "next/link"
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { Logo } from "./icons";

export const Footer = () => {

    return (

        <footer className="bg-grayBackground text-light">
            <div className="container ">
                <div
                    className=" grid grid-cols-1 gap-8  md:grid-cols-4 lg:grid-cols-6"
                >
                    <div className="text-center sm:text-left">
                        <Logo />
                        <p className="text-[#9ca3af] pt-4">Unser Portfolio umfasst exquisite Immobilien in den besten Lagen und prestigeträchtigen Vierteln Dubais.</p>

                    </div>

                    <div className="text-center sm:text-left">
                        <p className="text-lg font-medium text-primary">Menü</p>

                        <ul className="mt-8 space-y-4 text-sm">
                            <li>
                                <a className="text-[#9ca3af] transition hover:text-light" href="#">
                                    Über uns
                                </a>
                            </li>

                            <li>
                                <a className="text-[#9ca3af] transition hover:text-light" href="#"> Angebote </a>
                            </li>

                            <li>
                                <a className="text-[#9ca3af] transition hover:text-light" href="#"> Dubai-News </a>
                            </li>

                            <li>
                                <a className="text-[#9ca3af] transition hover:text-light" href="#"> Services </a>
                            </li>
                            <li>
                                <a className="text-[#9ca3af] transition hover:text-light" href="#"> Kontaktformular </a>
                            </li>
                        </ul>
                    </div>

                    <div className="text-center sm:text-left">
                        <p className="text-lg font-medium text-primary">Resources</p>

                        <ul className="mt-8 space-y-4 text-sm">
                            <li>
                                <a className="text-[#9ca3af] transition hover:text-[#9ca3af]/75" href="#"> Online Guides </a>
                            </li>

                            <li>
                                <a className="text-[#9ca3af] transition hover:text-[#9ca3af]/75" href="#">
                                    Conference Notes
                                </a>
                            </li>

                            <li>
                                <a className="text-[#9ca3af] transition hover:text-[#9ca3af]/75" href="#"> Forum </a>
                            </li>

                            <li>
                                <a className="text-[#9ca3af] transition hover:text-[#9ca3af]/75" href="#"> Downloads </a>
                            </li>

                            <li>
                                <a className="text-[#9ca3af] transition hover:text-[#9ca3af]/75" href="#">
                                    Upcoming Events
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="text-center sm:text-left">
                        <p className="text-lg font-medium text-primary">Helpful Links</p>

                        <ul className="mt-8 space-y-4 text-sm">
                            <li>
                                <a className="text-[#9ca3af] transition hover:text-[#9ca3af]/75" href="#"> FAQs </a>
                            </li>

                            <li>
                                <a className="text-[#9ca3af] transition hover:text-[#9ca3af]/75" href="#"> Support </a>
                            </li>

                        </ul>
                    </div>

                    <div className="text-center sm:text-left md:col-span-4 lg:col-span-2">
                        <p className="text-lg font-medium text-primary">Stay in Touch</p>
                        <div className="mx-auto mt-8 max-w-md sm:ms-0">
                            <form className="mt-6 w-full">
                                <label htmlFor="UserEmail" className="sr-only"> Email </label>

                                <div
                                    className="rounded-md border border-gray-700 p-2 focus-within:ring sm:flex sm:items-center sm:gap-4"
                                >
                                    <input
                                        type="email"
                                        id="UserEmail"
                                        placeholder="john@rhcp.com"
                                        className="w-full border-none focus:border-transparent focus:outline-none sm:text-sm bg-grayBackground px-4"
                                    />

                                    <button
                                        className="mt-1 w-full rounded bg-primary px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-none hover:bg-primary/60 sm:mt-0 sm:w-auto sm:shrink-0"
                                    >
                                        Sign Up
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-700 sm:mx-auto  lg:my-8" />
                <div className="mb-6 sm:flex sm:items-center sm:justify-between">
                    <p className="text-center text-sm text-[#9ca3af] sm:text-left">
                        Copyright &copy; 2024 Geiss Property । All rights reserved.
                    </p>
                    <ul className="mt-4 flex justify-center gap-6 sm:mt-0 sm:justify-start">
                        <li>
                            <a
                                href="#"
                                rel="noreferrer"
                                target="_blank"
                                className="text-primary transition hover:text-primary/75"
                            >
                                <span className="sr-only">Facebook</span>
                                <FaFacebook className="h-6 w-6" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                rel="noreferrer"
                                target="_blank"
                                className="text-primary transition hover:text-primary/75"
                            >
                                <span className="sr-only">Instagram</span>
                                <FaInstagram className="h-6 w-6" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                rel="noreferrer"
                                target="_blank"
                                className="text-primary transition hover:text-primary/75 block"
                                style={{ lineHeight: "1" }}
                            >
                                <span className="sr-only">YouTube</span>
                                <FaYoutube className="h-6 w-6" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer >
    )
}