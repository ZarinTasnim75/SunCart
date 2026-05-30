import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navlink = ({href, children}) => {
    const pathname = usePathname();

    const isActive = href === pathname;
    return (
        <div>
            <Link href={href} className={`${isActive ? "text-red-500" : ""}`}> {children}</Link>
        </div>
    );
};

export default Navlink;