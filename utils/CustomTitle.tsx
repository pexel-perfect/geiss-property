import { ReactNode } from "react"

interface CustomTitleProps {
    children: string;
    fontFamily?: "font-primary" | "font-secondary"
}
export const CustomTitle = ({ children, fontFamily = "font-primary" }: CustomTitleProps) => {

    return (
        <p className={`text-light text-3xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl ${fontFamily} py-4`}>{children}</p>

    )
}