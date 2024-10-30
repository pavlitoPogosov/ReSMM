interface NavbarToggleProps {
  navbarOpen: boolean;
  setNavbarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  pathUrl: string;
  sticky: boolean;
}

export const NavbarToggle: React.FC<NavbarToggleProps> = ({
  navbarOpen,
  setNavbarOpen,
  pathUrl,
  sticky,
}) => (
  <button
    onClick={() => setNavbarOpen(!navbarOpen)}
    aria-label="Mobile Menu"
    className="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
  >
    <span
      className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 ${navbarOpen ? " top-[7px] rotate-45" : " "} ${pathUrl !== "/" && "!bg-dark dark:!bg-white"} ${pathUrl === "/" && sticky ? "bg-dark dark:bg-white" : "bg-white"}`}
    />
    <span
      className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 ${navbarOpen ? "opacity-0 " : " "} ${pathUrl !== "/" && "!bg-dark dark:!bg-white"} ${pathUrl === "/" && sticky ? "bg-dark dark:bg-white" : "bg-white"}`}
    />
    <span
      className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 ${navbarOpen ? " top-[-8px] -rotate-45" : " "} ${pathUrl !== "/" && "!bg-dark dark:!bg-white"} ${pathUrl === "/" && sticky ? "bg-dark dark:bg-white" : "bg-white"}`}
    />
  </button>
);
