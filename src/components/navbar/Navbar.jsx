import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
} from "@nextui-org/react";
import { FaHome } from "react-icons/fa";
import {ChevronDown, Lock, Activity, Flash, Server, TagUser, Scale} from "../../assets/icons/icons";

const icons = {
  chevron: <ChevronDown fill="currentColor" size={16} />,
  scale: <Scale className="text-warning" fill="currentColor" size={30} />,
  lock: <Lock className="text-success" fill="currentColor" size={30} />,
  activity: <Activity className="text-secondary" fill="currentColor" size={30} />,
  flash: <Flash className="text-primary" fill="currentColor" size={30} />,
  server: <Server className="text-success" fill="currentColor" size={30} />,
  user: <TagUser className="text-danger" fill="currentColor" size={30} />,
};

const CustomNavbar = () => {
  return (
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">Achira Silva</p>
      </NavbarBrand>

      <NavbarItem>
        <Link href="#" aria-current="page">
          <FaHome className="m-5" />
          Home
        </Link>
      </NavbarItem>

      <NavbarContent justify="center">
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                endContent={icons.chevron}
                radius="sm"
                variant="light"
              >
                Projects
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          {/* Dropdown Menu for Developments and Designs */}
          <DropdownMenu
            aria-label="Projects Dropdown"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            {/* Developments Section */}
            <DropdownItem
              key="development1"
              description="Innovative app development services for modern businesses."
              //startContent={icons.activity}
            >
              Mobile Development
            </DropdownItem>
            <DropdownItem
              key="development2"
              description="Build scalable and high-performance backend systems."
              //startContent={icons.server}
            >
              Backend Development
            </DropdownItem>
            {/* Designs Section */}
            <DropdownItem
              key="design1"
              description="Creative designs that bring ideas to life."
              //startContent={icons.scale}
            >
              UI/UX Design
            </DropdownItem>
            <DropdownItem
              key="design2"
              description="Crafting visually appealing websites and branding."
              //startContent={icons.flash}
            >
              Web Design
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default CustomNavbar;
