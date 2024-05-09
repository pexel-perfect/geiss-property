import Image from "next/image";
import { FC } from "react";

interface props {
    item: string;
    count: string;
    url: string;
}
const SingleListIconBox: FC<props> = ({ item, count, url }) => {
    return (
        <div className="flex items-center gap-2 pt-6 ">
            <Image src={url} height={30} width={30} alt="bed" />
            <p className="font-primary text-light">{item} :</p>
            <hr className="hidden md:flex" style={{ border: ".5px dotted #9c9ca7", width: "100px" }} />
            <p className="font-primary text-light">{count}</p>
        </div>
    )
}

export default SingleListIconBox; 