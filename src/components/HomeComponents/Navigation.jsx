import React, { useEffect, useState } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Card,
  IconButton,
} from "@material-tailwind/react";
import {
  CubeTransparentIcon,
  UserCircleIcon,
  CodeBracketSquareIcon,
  Square3Stack3DIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  RocketLaunchIcon,
  Bars2Icon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

// profile menu component
const profileMenuItems = [
  {
    label: "My Profile",
    icon: UserCircleIcon,
  },
  {
    label: "Edit Profile",
    icon: Cog6ToothIcon,
  },
  {
    label: "Sign Out",
    icon: PowerIcon,
  },
];

function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      {/* <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            className="border border-pmColor p-0.5"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={closeMenu}
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
              }`}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList> */}
    </Menu>
  );
}





function NavList() {
  return (
    <ul className="mb-4 flex flex-col text-black mt-4 lg:gap-5 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      <Typography

        className="p-2 font-heebo font-semibold text-sm text-black"
      >
        <Link href="#" className="flex items-center hover:text-pmColor transition-colors">
          Home
        </Link>
      </Typography>
      <Typography

        className="p-2 font-heebo font-semibold text-sm text-black"
      >
        <Link href="#" className="flex items-center hover:text-pmColor transition-colors">
          All Tourists Spot
        </Link>
      </Typography>
      <Typography

        className="p-2 font-heebo font-semibold text-sm text-black"
      >
        <Link href="#" className="flex items-center hover:text-pmColor transition-colors">
          Add Tourists Spot
        </Link>
      </Typography>
      <Typography

        className="p-2 font-heebo font-semibold text-sm text-black"
      >
        <Link href="#" className="flex items-center hover:text-pmColor transition-colors">
          My List
        </Link>
      </Typography>
    </ul>
  );
}

const Navigation = () => {
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false),
    );
  }, []);


  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 52) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  console.log(scrolled);


  return (
    <Navbar className={`mx-auto bg-opacity-100 lg:rounded-3xl p-2 md:py-4 duration-200 ${scrolled?"md:mt-4":"md:mt-20"} mt-2 md:w-full w-[98%] fixed z-50 left-[50%] translate-x-[-50%] lg:pl-6`}>
      <div className="relative mx-auto flex items-center justify-between text-black">

        <h1 className="mr-4 ml-2 cursor-pointer py-1.5 font-nunito text-2xl font-black flex-1"> Trip <span className="text-pmColor">Trove</span></h1>

        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden"
        >
          <Bars2Icon className="h-6 w-6" />
        </IconButton>

        <Button size="sm" variant="text" className="sm:ml-6 md:mr-6 bg-pmColor hover:text-black text-white">
          <span>Log In</span>
        </Button>
        <ProfileMenu />
      </div>
      <MobileNav open={isNavOpen} className="overflow-scroll">
        <NavList />
      </MobileNav>
    </Navbar>
  );
};

export default Navigation;