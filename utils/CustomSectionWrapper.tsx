import { ReactNode } from "react"

interface CustomSectionWrapperProps{
    children: ReactNode
}
export const CustomSectionWrapper = ({ children }: CustomSectionWrapperProps) => {
    return (
        <div className="py-8 sm:py-6 md:py-8 lg:py-10 xl:py-12 px-4">
            {children}
        </div>
    )
}