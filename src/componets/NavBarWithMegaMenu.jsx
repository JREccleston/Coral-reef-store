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

                <MenuItem className="flex items-center gap-3 rounded-lg hover:bg-orange-700">
                    <div className="flex items-center justify-center rounded-lg !bg-cyan-500 p-2 ">
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
                        <Button
                            size="sm"
                            variant="text"
                            className="font-kalam relative inline-flex items-center justify-center mt-4 mr-2 overflow-hidden text-lg font-bold text-black rounded-lg hover:bg-orange-700 hover:text-black"
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
                        </Button>
                    </Typography>
                </MenuHandler>
                <MenuList className="hidden max-w-screen-xl rounded-xl lg:block bg-slate2">
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
            >
                <Button size="sm"
                    variant="text"
                    className="font-kalam relative inline-flex items-center justify-center mt-4 mr-2 overflow-hidden text-lg font-bold text-black rounded-lg hover:bg-orange-700 hover:text-black">
                    Home
                </Button>
            </Typography>
            <NavListMenu />
            <Typography
                as="a"
                href="#"
            >
                <Button size="sm"
                    variant="text"
                    className="font-kalam relative inline-flex items-center justify-center mt-4 mr-2 overflow-hidden text-lg font-bold text-black rounded-lg hover:bg-orange-700 hover:text-black">
                    About
                </Button>
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
            variant="filled"
            fullWidth='true'
            blurred='false'
            shadow='true'
            className="mx-auto w-full px-12 pb-5 fixed top-0 z-50 bg-b1 border-transparent">


            <div className="flex items-center justify-between text-black">
                < Typography
                    as="a"
                    href="#"
                    variant="h6"
                    className="mr-4 mt-4 cursor-pointer py-1.5 lg:ml-2 text-3xl font-kalam"
                >
                    Thunder Corals
                </Typography >
                <div className="hidden lg:block">
                    <NavList />
                </div>
                <div className="hidden gap-2 lg:flex">
                    <Button
                        size="sm"
                        variant="text"
                        className="font-kalam relative inline-flex items-center justify-center mt-4 mr-2 overflow-hidden text-lg font-normal text-black rounded-lg hover:bg-orange-700 hover:text-black">
                        Login
                    </Button>
                    <Button
                        size="sm"
                        variant="text"
                        className=" font-kalam relative inline-flex items-center justify-center mt-4 mr-2 overflow-hidden text-lg font-normal text-black rounded-lg hover:bg-orange-700 hover:text-black">
                        Sign In
                    </Button>
                </div>
                <IconButton
                    variant="text"
                    className="lg:hidden text-blue-700"
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                    ) : (
                        <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                    )}
                </IconButton>
            </div >
            <Collapse open={openNav}>
                <NavList />
                <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
                    <Button ripple={true} variant="outlined" size="sm" className="text-blue-700 border-orange-400 text-lg font-kalam" fullWidth>
                        Log In
                    </Button>
                    <Button size="sm" className="text-blue-700 bg-orange-400 text-lg font-kalam" fullWidth>
                        Sign In
                    </Button>
                </div>
            </Collapse>
        </Navbar >
    );

}
