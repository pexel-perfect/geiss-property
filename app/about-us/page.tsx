import { title } from "@/components/primitives";
import { CustomDescription } from "@/utils/CustomDescription";
import { DividerWithImg } from "@/utils/DividerWithImg";

const  AboutPage = () =>{
	return (
		<>
			<div
				className="relative bg-cover bg-center  flex itemsp-center justify-center py-16 md:py-28"
				style={{
					backgroundImage: `url('/images/geiss-property-about-us.jpg')`,
				}}
			>
				<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-60"></div>
				<div className="relative z-10 text-center text-white">
					<h1 className="text-4xl md:text-6xl lg:text-7xl mb-4 font-primary">Aktuelle Angebote</h1>
					<p className="text-lg md:text-xl lg:text-3xl mb-2 md:mb-6 font-primary">- Carmen und Robert Geiss -</p>
					<p className="text-lg md:text-xl lg:text-3xl mb-6 font-primary">- Die Geissens -</p>
				</div>
			</div>
			<div className="container">
				<CustomDescription textCenter="text-center">Geiss Properties is your real estate partner in the United Arab Emirates. In addition to our many years of experience in the international real estate market, we also offer you corporate and residence services to make your move and everyday life easier. Our services start where your dreams begin.</CustomDescription>
				<DividerWithImg spaceClass="py-12" />

				<div className="pt-4">
					<h1 className="text-white text-xl font-bold font-primary">Discover unparalleled luxury with Geiss Properties in Dubai.
					</h1>
					<p className="font-primary text-description pt-2">Increase your quality of life to unreachable heights with Geiss Properties. Known for their success in the lifestyle industry and as a dynamic television family, Robert and Carmen Geiss bring their unique flair for luxury living to the heart of Dubai.</p>
				</div>
				<div className="pt-8">
					<h1 className="text-white text-xl font-bold font-primary">Fulfill your wishes in the city of dreams
					</h1>
					<p className="font-primary text-description pt-2">{`Geiss Properties doesn't just stand for real estate; we showcase the Geiss family's commitment to shaping the landscape of luxury living in Dubai. Based on their extensive experience, each property is a canvas where lifestyle, innovation and comfort interact seamlessly.`}</p>
				</div>
				<div className="pt-8">
					<h1 className="text-white text-xl font-bold font-primary">Tailored for the discerning individual

					</h1>
					<p className="font-primary text-description pt-2">{`Discover our exclusive portfolio of properties, carefully selected to embody the lifestyle that the Geiss family represents. Offering more than just a home, Geiss Properties enables a seamless moving experience designed for those who appreciate the finer things in life.`}</p>
				</div>
				<div className="pt-8">
					<h1 className="text-white text-xl font-bold font-primary">Invest with confidence
					</h1>
					<p className="font-primary text-description pt-2">{`As experienced investors, Robert and Carmen Geiss have long recognized Dubai's growth and prosperity potential. Geiss Properties invites you to invest in your future with confidence, knowing that your luxury residence is backed by the legacy of a trusted name in the business world.
				`}</p>
				</div>
				<div className="py-8">
					<h1 className="text-white text-xl font-bold font-primary">Welcome to the pinnacle of luxury
					</h1>
					<p className="font-primary text-description pt-2">{`In the heart of Dubai, Geiss Properties combines the entrepreneurial spirit of the Geiss family with the futuristic development of the city, creating a perfect environment for luxury and lifestyle.
					Begin your journey with Geiss Properties, where each residence reflects the exceptional in the vibrant city of Dubai. Your future of unparalleled luxury begins here. Contact us now and find out more about us.
				`}</p>
				</div>
			</div>
		</>
	);
}

export default AboutPage; 