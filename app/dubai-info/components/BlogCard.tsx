
import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
    title: string;
    image: string;
    excerpt: string;
}
const BlogCard = ({ title, image, excerpt }: BlogCardProps) => {

    return (
        <div className="bg-grayBackground shadow-md  rounded-lg max-w-sm mb-5">
            <Link href={`/dubai-info/${title}`}>
                <Image className="rounded-t-lg w-full blog-card-image" src={image} alt="" width={800} height={500} />
            </Link>
            <div className="p-5">
                <Link href={`/dubai-info/${title}`}>
                    <h5 className="text-xl font-bold  font-primary text-light pb-2">{title}</h5>
                </Link>
                <p className="font-secondary text-description mb-3">{excerpt.slice(0, 130)}...</p>
                <Link href={`/dubai-info/${title}`}>
                    <p className="text-primary font-medium  text-sm px-3 py-2 underline">
                        alles lesen »
                    </p>
                </Link>
            </div>
        </div>
    )
}

export default BlogCard; 