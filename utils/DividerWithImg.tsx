import Image from 'next/image';
import React from 'react';

interface Props {
    spaceClass?: string; 
}
export const DividerWithImg:React.FC<Props> = ({spaceClass = "py-2"}) => {
    return (
        <div className={`flex items-center justify-center ${spaceClass}`}>
            <hr className="border-primary border-t border-solid md:w-1/4 lg:w-1/5 xl:w-1/6" style={{width: "120px"}} />
            <Image width={140} height={100} src="/images/geiss-properies-logo-effekt.png" alt="Divider Logo" className="mx-4" />
            <hr className="border-primary border-t border-solid md:w-1/4 lg:w-1/5 xl:w-1/6" style={{width: "120px"}} />
        </div>
    );
};
