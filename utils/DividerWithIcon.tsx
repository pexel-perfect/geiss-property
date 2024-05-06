import { FaStar } from "react-icons/fa";

export const DividerWithIcon = () => {
    return (
        <div className="flex items-center justify-center gap-2 py-2">
            <hr className="border-primary border-t border-solid md:w-1/4 lg:w-1/5 xl:w-1/6" style={{ width: "120px" }} />
            <FaStar style={{ color: "#FCD8B0", fontSize: "2.5em" }} />
            <hr className="border-primary border-t border-solid md:w-1/4 lg:w-1/5 xl:w-1/6" style={{ width: "120px" }} />
        </div>
    );
};
