"use client";
import { signOut, useSession } from "next-auth/react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Logo } from "./Logo";
import { NavMenu } from "./NavMenu";
import { UserActions } from "./UserActions";

export const Header = () => {
  const { data: session } = useSession();

  const pathUrl = usePathname();
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index: any) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <>
      <header
        className={`ud-header left-0 top-0 z-40 flex w-full items-center ${
          sticky
            ? "shadow-nav fixed z-30 border-b border-stroke bg-white/80 backdrop-blur-[5px] dark:border-dark-3/20 dark:bg-dark/10"
            : "absolute bg-transparent"
        }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <Logo pathUrl={pathUrl} sticky={sticky} />

            <div className="flex w-full items-center justify-between px-4">
              <NavMenu
                handleSubmenu={handleSubmenu}
                navbarOpen={navbarOpen}
                navbarToggleHandler={navbarToggleHandler}
                openIndex={openIndex}
                pathUrl={pathUrl}
                sticky={sticky}
              />
              <div className="hidden items-center justify-end pr-16 sm:flex lg:pr-0">
                {/* <ThemeToggler /> */}
                <UserActions
                  pathUrl={pathUrl}
                  session={session}
                  signOut={signOut}
                  sticky={sticky}
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
