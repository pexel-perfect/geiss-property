import { Skeleton } from "@nextui-org/react"
import { ReactNode } from "react"

interface props {
    children: ReactNode,
    open: boolean
}
const LoadingSkeleton: React.FC<props> = ({ children, open }) => {
    console.log(open, "open");
    return (
        <>
            {open ? <div className="w-full flex flex-col gap-2">
                <Skeleton className="h-3 w-3/5 rounded-lg" />
                <Skeleton className="h-3 w-4/5 rounded-lg" />
            </div>: children}
        </>
    )
}

export default LoadingSkeleton; 