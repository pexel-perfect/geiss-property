import { ReactNode } from "react"

interface CustomDescriptionProps {
    children: string
}
export const CustomDescription = ({ children }: CustomDescriptionProps) => {
    return (
        <p className="text-light font-primary text-xl font-extralight px-32 tracking-wide leading-8">{children}</p>
    )
}