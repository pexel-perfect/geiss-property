'use client'
import { CustomDescription } from "@/utils/CustomDescription";
import { getListings } from '../../lib/data'
import { OfferCard } from "@/components/OfferCard";
import React from "react";
import LoadingSkeleton from "@/utils/LoadingSkeleton";

const AboutPage = () => {
	const [listings, setListings] = React.useState<any>(null);
	console.log(listings, "listings");
	const [loading, setLoading] = React.useState<boolean>(true);
	React.useEffect(() => {
		const fetchList = async () => {
			setLoading(true);
			try {
				const data = await getListings();
				console.log(data, "data");
				setListings(data);
			} catch (error: any) {
				throw new Error(error.message)
			} finally {
				setLoading(false);
			}
		};

		fetchList();
	}, []);
	return (
		<LoadingSkeleton open={loading}>
			<div
				className="relative bg-cover bg-center  flex items-center justify-center py-16 md:py-24"
				style={{
					backgroundImage: `url('/images/listing_page_banner.jpg')`,
				}}
			>
				<div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 opacity-60"></div>
				<div className="relative z-10 text-center text-white">
					<h1 className="text-4xl md:text-6xl lg:text-7xl mb-4 font-primary">Aktuelle Angebote</h1>
					<p className="text-lg md:text-xl lg:text-3xl mb-2 md:mb-6 font-primary">- Carmen und Robert Geiss -</p>
					<p className="text-lg md:text-xl lg:text-3xl mb-6 font-primary">- Die Geissens -</p>
				</div>
			</div>
			<div className="container text-center">
				<CustomDescription >Carmen und Robert Geiss laden bei Geiss Properties ein, in eine Welt unvergleichlichen Luxus und einzigartiger Möglichkeiten einzutreten. Unser Portfolio umfasst ein sorgfältig ausgewähltes Angebot exquisitester Immobilien, gelegen in den besten Lagen und prestigeträchtigen Gegenden Dubais.</CustomDescription>
			</div>

			<div className="container grid grid-cols-1 md:grid-cols-3 gap-4">
				{listings?.map((list: any) => (
					<OfferCard
						key={list.id}
						title={list.title}
						price={list.price}
						area={list.area}
						bed={list.bedroom}
						url={list.bannerImages[0]?.link}
						redirect={`/listings/${list.id}`}
					/>
				))}

			</div>
		</LoadingSkeleton>
	);
}

export default AboutPage; 