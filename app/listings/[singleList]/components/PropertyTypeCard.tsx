import Image from "next/image";
import { FC } from "react";

interface props {
    type: string;
    value: string;
}
const PropertyTypeCard: FC<props> = ({ type, value }) => {
    return (
        <div className=" pt-6 ">
            <div className="flex items-center gap-2">
                <p className="font-primary text-light">{type} :</p>
                <p className="font-primary text-light">{value}</p>
            </div>
            <hr className="hidden md:flex mt-4" style={{ border: ".5px dotted #9c9ca7", width: "50%" }} />
        </div>
    )
}

export default PropertyTypeCard; 