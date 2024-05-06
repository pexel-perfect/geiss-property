import { ReactNode } from "react"

interface CustomDescriptionProps {
    children: string
}
export const CustomDescription = ({ children }: CustomDescriptionProps) => {
    return (
        <p className="text-light font-primary lg:text-xl font-extralight lg:px-32 tracking-wide leading-8">{children}</p>
    )
}