import { ReactNode } from "react"

interface CustomDescriptionProps {
    children: string; 
    textCenter?: string; 
}
export const CustomDescription = ({ children, textCenter }: CustomDescriptionProps) => {
    return (
        <p className={`text-light font-primary lg:text-xl font-extralight lg:px-32 tracking-wide leading-8 ${textCenter}`}>{children}</p>
    )
}