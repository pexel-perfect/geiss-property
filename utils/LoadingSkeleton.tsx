import { Skeleton, Spinner } from "@nextui-org/react"
import { ReactNode } from "react"

interface props {
    children: ReactNode,
    open: boolean
}
const LoadingSkeleton: React.FC<props> = ({ children, open }) => {
    console.log(open, "open");
    return (
        <>
            {open ? <div className="container flex justify-center items-center h-screen">
                <Spinner label="Please wait..." color="secondary" labelColor="secondary" />
            </div> : children}
        </>
    )
}

export default LoadingSkeleton; 