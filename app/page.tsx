import { OfferCard } from "@/components/OfferCard";
import { CustomButton } from "@/utils/CustomButton";
import { CustomDescription } from "@/utils/CustomDescription";
import { CustomTitle } from "@/utils/CustomTitle";
import { DividerWithIcon } from "@/utils/DividerWithIcon";
import { DividerWithImg } from "@/utils/DividerWithImg";
import { Image as NextUIImage } from "@nextui-org/image";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<>
			{/* hero section */}
			<div
				className="relative bg-cover bg-center h-screen flex items-center justify-center"
				style={{
					backgroundImage: `url('/images/carmen-und-robert-geiss-in-dubai.jpg')`,
				}}
			>
				<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-60"></div>
				<div className="relative z-10 text-center text-white">
					<h1 className="text-4xl md:text-6xl lg:text-7xl mb-4 font-primary">Die Geissens - Immobilien in Dubai</h1>
					<p className="text-lg md:text-xl lg:text-2xl mb-6">Entdecken Sie Luxusimmobilien mit Geiss Properties in Dubai.</p>
					<CustomButton>
						Kontaktformular
					</CustomButton>
				</div>
			</div>
			{/* section 2 started */}
			<div className="bg-grayBackground">
				<div className=" container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4  pb-14">
					<Link href={"/listings"}>
						<div className="flex flex-col items-center justify-center pt-4 lg:pt-0">
							<Image src="/images/geiss-dubai-appartments.png" alt="geiss-dubai-appartments" width={40} height={40} />
							<p className="text-light font-thin text-lg sm:text-xl lg:text-2xl pt-2">Elegante Wohnungen</p>
						</div>
					</Link>
					<Link href={"/listings"}>
						<div className="flex flex-col items-center justify-center pt-4 lg:pt-0">
							<Image src="/images/geiss-modern-houses.png" alt="geiss-dubai-appartments" width={40} height={40} />
							<p className="text-light font-thin text-lg sm:text-xl lg:text-2xl pt-2">Luxusvillen</p>
						</div>
					</Link>
					<Link href={"/listings"}>
						<div className="flex flex-col items-center justify-center pt-4 lg:pt-0">
							<Image src="/images/geiss-happy-customers.png" alt="geiss-dubai-appartments" width={40} height={40} />
							<p className="text-light font-thin text-lg sm:text-xl lg:text-2xl pt-2">Glückliche Eigentümer</p>
						</div>
					</Link>
				</div>
			</div>

			{/* section 3 */}
			<div className="container pb-14">
				<div className="text-center">
					<p className="text-primary">Jetzt den Luxus Dubai&apos;s entdecken mit Carmen und Robert Geiss!</p>
					<CustomTitle>The World of Luxury</CustomTitle>
					<CustomDescription>Carmen und Robert Geiss laden bei Geiss Properties ein, in eine Welt unvergleichlichen Luxus und einzigartiger Möglichkeiten einzutreten. Unser Portfolio umfasst ein sorgfältig ausgewähltes Angebot exquisitester Immobilien, gelegen in den besten Lagen und prestigeträchtigen Gegenden Dubais.</CustomDescription>
				</div>
			</div>
			<DividerWithImg />
			{/* image section */}
			<div className="container pb-12">
				<div
					className="flex flex-col items-center md:flex-row md:justify-center gap-2 md:gap-6"

				>
					<NextUIImage

						width={500}
						src="/images/geiss-propertie-carmen-geiss-768x512.jpg"
						alt="NextUI Album Cover"
					/>
					<NextUIImage

						width={500}
						src="/images/geiss-propertie-robert-geiss-768x512.jpg"
						alt="NextUI Album Cover"
					/>
				</div>
			</div>
			<DividerWithIcon />
			<div className="container pb-14">
				<CustomTitle > Aktuelle Angebote</CustomTitle>
				<div className="pt-4">
					<div
						className="flex flex-col items-center md:flex-row md:justify-center gap-2 md:gap-6"
					>
						<OfferCard
							title="APARTMENT ONE ZA’ABEEL TOWER - KAUF OR MIETE"
							price="2,375,000 EUR"
							area="2,015 Sq. Ft. | 187 m²"
							bed="3"
							url="Entry-2-Bedroom-zaabeel-Tower.jpg"
						/>
						<OfferCard
							title="DUPLEX APARTMENT ONE ZA'ABEEL TOWER - ZUM KAUF ODER MIETE"
							price="4,375,000 EUR"
							area="2,579 Sq. Ft. | 240 m²"
							bed="3"
							url="High-end-living-Room-zaabeel-Tower.jpg"
						/>
						<OfferCard
							title="VILLA PALM JUMEIRAH"
							price="13,000,000 EUR"
							area="6,060 Sq. Ft. | 563 m²"
							bed="4"
							url="Villa-Palm.png"
						/>
					</div>
				</div>
			</div>
		</>
	);
}
