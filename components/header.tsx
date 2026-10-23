"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
    const pathname = usePathname();

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/coins", label: "All Coins" },
    ];

    return (
        <header>
            <div className="main-container inner">
                <Link href="/" className="site-logo" aria-label="Coins Pulse home">
                    <Image
                        src="/assets/logo.svg"
                        alt="Coins Pulse Logo"
                        width={132}
                        height={40}
                        priority
                    />
                </Link>

                <nav className="site-nav" aria-label="Main navigation">
                    {navLinks.map(({ href, label }) => {
                        const isActive =
                            href === "/"
                                ? pathname === "/"
                                : pathname === href ||
                                pathname.startsWith(`${href}/`);

                        return (
                            <Link
                                key={href}
                                href={href}
                                className={`nav-link ${
                                    isActive ? "is-active" : ""
                                }`}
                                aria-current={isActive ? "page" : undefined}
                            >
                                {label}
                            </Link>
                        );
                    })}

                    <button type="button" className="search-trigger">
                        Search
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Header;
