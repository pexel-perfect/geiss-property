import { ReactNode } from 'react';
import { MdDoubleArrow } from "react-icons/md";

interface CustomButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

export const CustomButton = ({ children, onClick }: CustomButtonProps) => {
  return (
    <button onClick={onClick} className="bg-background text-white font-semibold py-4 px-6 rounded border border-primary md:text-lg lg:text-xl hover:bg-dark transition-colors  duration-300 ">
      <div className='flex justify-center items-center gap-2'>
        <MdDoubleArrow className="ml-2 h-5 w-5" />
        {children}
      </div>
    </button>
  );
};
