import { CustomDescription } from "@/utils/CustomDescription";
import { DividerWithImg } from "@/utils/DividerWithImg";
import Image from "next/image";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";

const ImprintPage = () => {
    return (
        <>
            <div
                className="relative bg-cover bg-center  flex itemsp-center justify-center py-16 md:py-36"
                style={{
                    backgroundImage: `url('/images/corporate-services-geiss-property-scaled.jpg')`,
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-60"></div>
                <div className="relative z-10 text-center text-white">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl mb-4 font-primary">imprint</h1>
                </div>
            </div>
            <div className="container">                
            <Image width={140} height={100} src="/images/siegel-impressum-blau.png" alt="Divider Logo" className="pb-4" />

                <div className="pt-4">
                    <h1 className="text-white text-xl font-bold font-primary">Information obligations in accordance with Section 5 of the Telemedia Act (TMG)</h1>
                    <p className="font-primary text-description pt-2">Geiss, Creek Harbour, Dubai, United Arab Emirates</p>
                </div>
                <div className="pt-8">
                    <h1 className="text-white text-xl font-bold font-primary">Contact</h1>
                    <div className="text-left">                        
                        <p className="text-[#9ca3af] pt-4">Creek Harbour, Dubai, United Arab Emirates</p>
                        <div className="mt-4 space-y-2 text-sm">
                            <div className="flex items-center justify-start">
                                <AiOutlinePhone className="h-5 w-5 text-[#9ca3af]" />
                                <a className="ml-2 text-[#9ca3af] transition hover:text-light" href="#">+49-2234-9967099</a>
                            </div>
                            <div className="flex items-center justify-start">
                                <FaWhatsapp className="h-5 w-5 text-[#9ca3af]" />
                                <a className="ml-2 text-[#9ca3af] transition hover:text-light" href="https://api.whatsapp.com/send/?phone=971503573748&text=Ich+bin+an+Immobilien+in+Dubai+interessiert&type=phone_number&app_absent=0" target="_blank">+971-50-35-737-48</a>
                            </div>
                            <div className="flex items-center justify-start">
                                <AiOutlineMail className="h-5 w-5 text-[#9ca3af]" />
                                <a className="ml-2 text-[#9ca3af] transition hover:text-light" href="#">anfrage@geissproperty.com</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-8">
                    <h1 className="text-white text-xl font-bold font-primary">Arbitration proceedings before a consumer arbitration board</h1>
                    <p className="font-primary text-description pt-2">{`We are neither willing nor obliged to take part in dispute resolution proceedings before a consumer arbitration board.`}</p>
                </div>
            </div>
        </>
    );
}
export default ImprintPage; 