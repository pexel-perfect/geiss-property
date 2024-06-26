import { ReactNode } from 'react';
import { MdDoubleArrow } from "react-icons/md";

interface CustomButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

export const CustomOutlinedButton = ({ children, onClick }: CustomButtonProps) => {
  return (
    <button onClick={onClick} className="bg-background text-white font-semibold py-4 px-6 rounded border border-primary md:text-lg lg:text-xl hover:bg-dark transition-colors  duration-300 ">
      <div className='flex justify-center items-center gap-2'>
        <MdDoubleArrow className="ml-2 h-5 w-5" />
        {children}
      </div>
    </button>
  );
};
export const CustomFilledButton = ({ children, onClick }: CustomButtonProps) => {
  return (
    <button onClick={onClick} className="bg-primary  font-semibold py-2 px-6 rounded border border-primary md:text-lg lg:text-xl hover:bg-dark transition-colors  duration-300 text-black hover:text-black/60">
      <div className='flex justify-center items-center gap-2 '>
        <MdDoubleArrow className="ml-2 h-5 w-5" />
        <p>{children}</p>
      </div>
    </button>
  );
};
