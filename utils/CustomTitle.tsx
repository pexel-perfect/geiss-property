import { ReactNode } from "react"

interface CustomTitleProps {
    children: string
}
export const CustomTitle = ({ children }: CustomTitleProps) => {
    return (
        <p className="text-light text-3xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-primary py-4">{children}</p>
    )
}