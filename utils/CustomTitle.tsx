import { ReactNode } from "react"

interface CustomTitleProps {
    children: string;
    fontFamily?: "font-primary" | "font-secondary"
}
export const CustomTitle = ({ children, fontFamily = "font-primary" }: CustomTitleProps) => {

    return (
        <p className={`text-white text-4xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl ${fontFamily} py-4`}>{children}</p>

    )
}