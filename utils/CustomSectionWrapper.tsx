import { ReactNode } from "react"

interface CustomSectionWrapperProps{
    children: ReactNode
}
export const CustomSectionWrapper = ({ children }: CustomSectionWrapperProps) => {
    return (
        <div className="container" >
            {children}
        </div>
    )
}