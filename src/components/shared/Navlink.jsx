import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navlink = ({href, children}) => {
    const pathname = usePathname();

    const isActive = href === pathname;
    return (
        <div>
            <Link href={href} className={`${isActive ? "border-b-2 border-b-red-700" : ""}`}> {children}</Link>
        </div>
    );
};

export default Navlink;