import React, { useContext, useEffect, useState } from "react";
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
  IconButton,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  PowerIcon,
  Bars2Icon,
} from "@heroicons/react/24/solid";
import { Link, NavLink } from "react-router-dom";
import { GlobalStateContext } from "../GlobalContext/GlobalContext";
import ThemeToggle from "./ThemeToggle";



// profile menu component
const profileMenuItems = [
  {
    label: null,
    icon: UserCircleIcon,
  },
  {
    label: "Edit Profile",
    icon: Cog6ToothIcon,
    link: "/update-profile",

  },
  {
    label: "Log Out",
    icon: PowerIcon,
    func: "logout"
  },
];

function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const { user, logout } = useContext(GlobalStateContext);
  const closeMenu = () => setIsMenuOpen(false);


  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      {
        user && <MenuHandler>
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
              src={user?.photoURL || "https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"}
            />
          
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""
                }`}
            />
          </Button>
        </MenuHandler>
      }
      {
        user && <MenuList className="p-1">
          {profileMenuItems.map(({ label, icon, link, func }, key) => {
            const isLastItem = key === profileMenuItems.length - 1;
            return (
              <div key={label}>
                {
                  func === "logout" ? <Link onClick={() => logout()} to={link}>

                    <MenuItem

                      onClick={closeMenu}
                      className={`flex items-center gap-2 rounded ${isLastItem
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

                  </Link> : <Link to={link}>

                    <MenuItem

                      onClick={closeMenu}
                      className={`flex items-center gap-2 rounded ${isLastItem
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

                        {label || user.displayName}
                      </Typography>
                    </MenuItem>

                  </Link>
                }
              </div>
            );
          })}
        </MenuList>
      }
    </Menu>
  );
}





function NavList() {

  const { user, logout } = useContext(GlobalStateContext);

  return (
    <ul className="mb-4 flex flex-col text-black mt-4 lg:gap-5 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      <Typography

        className="p-2 font-heebo font-semibold text-sm text-black hover:text-pmColor"
      >
        <NavLink className={({ isActive, isPending }) =>
          isActive
            ? 'text-pmColor'
            : isPending
              ? ''
              : ""
        } to="/">
          Home
        </NavLink>
      </Typography>
      <Typography

        className="p-2 font-heebo font-semibold text-sm text-black hover:text-pmColor"
      >
        <NavLink className={({ isActive, isPending }) =>
          isActive
            ? 'text-pmColor'
            : isPending
              ? ''
              : ""
        } to="/all-tourists-spots">
          All Tourists Spots
        </NavLink>
      </Typography>
      {
        user && <Typography

          className="p-2 font-heebo font-semibold text-sm text-black hover:text-pmColor"
        >
          <NavLink className={({ isActive, isPending }) =>
            isActive
              ? 'text-pmColor'
              : isPending
                ? ''
                : ""
          } to="/add-tourists-spot">
            Add Tourists Spot
          </NavLink>
        </Typography>
      }
      {
        user && <Typography

          className="p-2 font-heebo font-semibold text-sm text-black hover:text-pmColor"
        >
          <NavLink className={({ isActive, isPending }) =>
            isActive
              ? 'text-pmColor'
              : isPending
                ? ''
                : ""
          } to="/my-list">
            My List
          </NavLink>
        </Typography>
      }
    </ul>
  );
}

const Navigation = () => {

  const { user, logout } = useContext(GlobalStateContext);

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


  return (
    <Navbar className={`mx-auto bg-opacity-100 lg:rounded-3xl p-2 md:py-4 duration-200 ${scrolled ? "md:-mt-10" : "md:mt-4"} mt-2 md:w-full w-[98%] fixed z-50 left-[50%] translate-x-[-50%] lg:pl-6`}>
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
        <div className="sm:mx-6 mr-1">
          <ThemeToggle></ThemeToggle>
        </div>

        {
          user ? "" : <Link to='/login'>
            <Button size="sm" variant="text" className={`bg-pmColor hover:text-black text-white lg:mr-6`}>
              <span>Log In</span>
            </Button>
          </Link>
        }

        <ProfileMenu />
      </div>
      <MobileNav open={isNavOpen} className="overflow-scroll">
        <NavList />
      </MobileNav>
    </Navbar>
  );
};

export default Navigation;