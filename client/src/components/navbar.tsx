import React from 'react';
import { Link,  } from 'react-router-dom'; // For navigation links
import { Button } from './ui/button';
import { Drawer, DrawerContent} from './ui/drawer';


const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false); // State for mobile menu visibility

    const toggleDrawer = () => setIsOpen(!isOpen);

    return (
        <nav className="flex items-center justify-between px-4 py-2 bg-gray-800 text-white">
            <Link to="/" className="text-xl font-bold">Frogmi Earthquake</Link>

            <ul className="hidden md:flex space-x-4">
                <li>
                    <Link to="/" className="hover:text-gray-400">Home</Link>
                </li>
             
            </ul>

            <Button variant="ghost" onClick={toggleDrawer} className="md:hidden">
                <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                >
                    <line x1="4" y1="6" x2="20" y2="6"></line>
                    <line x1="4" y1="12" x2="20" y2="12"></line>
                    <line x1="4" y1="18" x2="20" y2="18"></line>
                </svg>
            </Button>

            <Drawer open={isOpen} onClose={toggleDrawer}>
                <DrawerContent className="flex flex-col space-y-4 p-4">
                    <Link to="/" className="text-xl font-bold mb-4">Frogmi Earthquake</Link>
                    <Link to="/" className="text-lg hover:text-gray-400">Home</Link>
                </DrawerContent>
            </Drawer>
        </nav>
    );
};

export default Navbar;
