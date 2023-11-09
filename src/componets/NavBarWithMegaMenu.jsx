import React from "react";
import {
    Navbar,
    Collapse,
    Typography,
    Button,
    IconButton,
    List,
    ListItem,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
} from "@material-tailwind/react";
import {
    ChevronDownIcon,
    Bars3Icon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import {
    Bars4Icon,
    SquaresPlusIcon,
    SunIcon,
    UserGroupIcon,
} from "@heroicons/react/24/solid";

const navListMenuItems = [
    {
        title: "LPS Corals",
        description: "Large Polyp Stony corals",
        icon: SquaresPlusIcon,
    },
    {
        title: "SPS Corals",
        description: "Small Polyp Stony corals",
        icon: UserGroupIcon,
    },
    {
        title: "Softies",
        description: "Soft corals",
        icon: Bars4Icon,
    },
    {
        title: "Signature Colonies",
        description: "A collection of my favorite mother colonies",
        icon: SunIcon,
    },
];

function NavListMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const renderItems = navListMenuItems.map(
        ({ icon, title, description }, key) => (
            <a href="#" key={key}>
                <MenuItem className="flex items-center gap-3 rounded-lg">
                    <div className="flex items-center justify-center rounded-lg !bg-cyan-100 p-2 ">
                        {" "}
                        {React.createElement(icon, {
                            strokeWidth: 2,
                            className: "h-6 text-gray-900 w-6",
                        })}
                    </div>
                    <div className=' text-blue-700 font-kalam'>
                        <Typography
                            variant="h6"
                            className="flex items-center font-kalam text-lg"
                        >
                            {title}
                        </Typography>
                        <Typography
                            variant="paragraph"
                            className=" text-base !font-medium text-black font-Nuecha"
                        >
                            {description}
                        </Typography>
                    </div>
                </MenuItem>
            </a>
        ),
    );

    return (
        <React.Fragment>
            <Menu
                open={isMenuOpen}
                handler={setIsMenuOpen}
                offset={{ mainAxis: 20 }}
                placement="bottom"
                allowHover={true}
            >
                <MenuHandler>
                    <Typography as="div" variant="small" className="font-medium ">
                        <ListItem
                            className="flex items-center gap-2 py-2 pr-4 font-medium text-blue-700 text-lg hover:bg-orange-700 font-kalam"
                            selected={isMenuOpen || isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen((cur) => !cur)}
                        >
                            Shop Corals
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen ? "rotate-180" : ""
                                    }`}
                            />
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`block h-3 w-3 transition-transform lg:hidden ${isMobileMenuOpen ? "rotate-180" : ""
                                    }`}
                            />
                        </ListItem>
                    </Typography>
                </MenuHandler>
                <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
                    <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
                        {renderItems}
                    </ul>
                </MenuList>
            </Menu>
            <div className="block lg:hidden">
                <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
            </div>
        </React.Fragment>
    );
}

function NavList() {
    return (
        <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
            <Typography
                as="a"
                href="#"
                variant="small"
                color="black"
                className="font-medium"
            >
                <ListItem className="flex items-center gap-2 py-2 pr-4 text-lg text-blue-700 hover:bg-orange-700 font-kalam">Home</ListItem>
            </Typography>
            <NavListMenu />
            <Typography
                as="a"
                href="#"
                variant="small"
                color="black"
                className="font-medium font-kalam"
            >
                <ListItem className="flex items-center gap-2 py-2 pr-4 text-lg text-blue-700 hover:bg-orange-700 font-kalam">
                    About
                </ListItem>
            </Typography>
        </List>
    );
}

export function NavbarWithMegaMenu() {

    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    return (
        <Navbar
            variant="gradient"
            color="white"
            className="mx-auto w-full px-10 py-5 fixed top-0 z-50">


            <div className="flex items-center justify-between text-blue-700">
                <Typography
                    as="a"
                    href="#"
                    variant="h6"
                    className="mr-4 cursor-pointer py-1.5 lg:ml-2 text-xl font-kalam"
                >
                    Thunder Corals
                </Typography>
                <div className="hidden lg:block">
                    <NavList />
                </div>
                <div className="hidden gap-2 lg:flex">
                    <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-base font-medium text-blue-700 rounded-lg group-hover:from-cyan-500 group-hover:to-blue-300 hover:text-black focus:ring-4 focus:outline-none focus:ring-orange-700">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 hover:bg-orange-700 bg-transparent rounded-md group-hover:bg-opacity-0">
                            Login
                        </span>
                    </button>
                    <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-base font-medium text-blue-700 rounded-lg group-hover:from-cyan-500 group-hover:to-blue-300 hover:text-black  focus:ring-4 focus:outline-none focus:ring-orange-700">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 hover:bg-orange-700 bg-transparent rounded-md group-hover:bg-opacity-0">
                            Sign In
                        </span>
                    </button>
                </div>
                <IconButton
                    variant="text"
                    color="blue-gray"
                    className="lg:hidden"
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                    ) : (
                        <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                    )}
                </IconButton>
            </div>
            <Collapse open={openNav}>
                <NavList />
                <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
                    <Button variant="outlined" size="sm" color="blue-gray" fullWidth>
                        Log In
                    </Button>
                    <Button variant="gradient" size="sm" fullWidth>
                        Sign In
                    </Button>
                </div>
            </Collapse>
        </Navbar>
    );
}