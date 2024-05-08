import Link from "next/link"
import { FaFacebook, FaInstagram, FaYoutube, FaQuestionCircle, FaHeadset, FaWhatsapp } from "react-icons/fa";
import { Logo } from "./icons";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { NewsLetterForm } from "./form/NewsLetterForm";

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
                                <FaWhatsapp  className="h-5 w-5 text-[#9ca3af]" />
                                <a className="ml-2 text-[#9ca3af] transition hover:text-light" href="https://api.whatsapp.com/send/?phone=971503573748&text=Ich+bin+an+Immobilien+in+Dubai+interessiert&type=phone_number&app_absent=0" target="_blank">+971-50-35-737-48</a>
                            </div>
                            <div className="flex items-center justify-center md:justify-start">
                                <AiOutlineMail className="h-5 w-5 text-[#9ca3af]" />
                                <a className="ml-2 text-[#9ca3af] transition hover:text-light" href="#">anfrage@geissproperty.com</a>
                            </div>
                        </div>
                    </div>

                    <div className="text-center sm:text-left md:col-span-2 ">
                        <p className="text-lg font-medium text-primary ps-4">Jetzt unseren Newsletter abonnieren!</p>
                        <div className="mx-auto mt-4 max-w-md sm:ms-0">
                            
                            <NewsLetterForm />
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
                            <a href="https://www.facebook.com/people/Geiss-Property/61558678481268/" rel="noreferrer" target="_blank" className="text-primary transition hover:text-primary/75">
                                <span className="sr-only">Facebook</span>
                                <FaFacebook className="h-6 w-6" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/geissproperty_original/" rel="noreferrer" target="_blank" className="text-primary transition hover:text-primary/75">
                                <span className="sr-only">Instagram</span>
                                <FaInstagram className="h-6 w-6" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/@GeissProperty" rel="noreferrer" target="_blank" className="text-primary transition hover:text-primary/75 block" style={{ lineHeight: "1" }}>
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