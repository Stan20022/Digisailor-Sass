import { CgWebsite } from "react-icons/cg";
import { LuContact2 } from "react-icons/lu";
import { SlSettings } from "react-icons/sl";
import { BsCalendar3 } from "react-icons/bs";
import { RxDashboard } from "react-icons/rx";
import { PiPaperPlaneTiltLight } from "react-icons/pi";
import { GoPeople, GoCalendar, GoBriefcase } from "react-icons/go";

// Social icons
import { IoMail } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa6";
import { MdChevronRight } from "react-icons/md";
import { FaLinkedin, FaFacebook } from "react-icons/fa";

// Interfaces for constants
interface MenuItem {
  href: string;
  name: string;
}

interface SidebarMenuItems {
  href: string;
  menu: string;
  icons: any;
}

interface SocialIcons {
  href: string;
  title: string;
  name: any;
}

interface FeaturesName {
  name: string;
}

interface FeatureSwiper {
  heading: string;
  description: string;
}

interface LandingPageMenu {
  href: string;
  name: string;
  icon: any;
}

// constants
export const menuItems: MenuItem[] = [
  {
    href: "/",
    name: "Home",
  },
  {
    href: "/",
    name: "About Us",
  },
  {
    href: "/",
    name: "Terms & Conditions",
  },
  {
    href: "/",
    name: "Privacy Policy",
  },
];

export const sidebarMenuItems: SidebarMenuItems[] = [
  {
    href: "/dashboard",
    menu: "Dashboard",
    icons: RxDashboard,
  },
  {
    href: "/business",
    menu: "Business",
    icons: GoBriefcase,
  },
  {
    href: "/staffs",
    menu: "Staff",
    icons: GoPeople,
  },
  {
    href: "/companies",
    menu: "Companies",
    icons: GoPeople,
  },
  {
    href: "/appointment",
    menu: "Appointments",
    icons: GoCalendar,
  },
  {
    href: "/contacts",
    menu: "Contacts",
    icons: LuContact2,
  },
  {
    href: "/calendar",
    menu: "Calendar",
    icons: BsCalendar3,
  },
  {
    href: "/plans",
    menu: "Plans",
    icons: PiPaperPlaneTiltLight,
  },
  {
    href: "/landing-page",
    menu: "Landing Page",
    icons: CgWebsite,
  },
  {
    href: "/settings",
    menu: "Settings",
    icons: SlSettings,
  },
];

export const socialIcons: SocialIcons[] = [
  {
    href: "https://www.linkedin.com/company/digisailor/mycompany/",
    title: "Linkedin",
    name: FaLinkedin,
  },
  {
    href: "https://wa.me/917904210874/?text=Hello, I would like to get in touch with your team regarding an inquiry.",
    title: "Whatsapp",
    name: FaWhatsapp,
  },
  {
    href: "mailto:info@digisailor.com",
    title: "Mail",
    name: IoMail,
  },
  {
    href: "https://www.facebook.com/digisailors",
    title: "Facebook",
    name: FaFacebook,
  },
];

export const featuresName: FeaturesName[] = [
  {
    name: "Plans",
  },
  {
    name: "Staff",
  },
  {
    name: "Business",
  },
  {
    name: "Contacts",
  },
  {
    name: "Dashboard",
  },
  {
    name: "Appointments",
  },
  {
    name: "Customization",
  },
];

export const featureSwiper: FeatureSwiper[] = [
  {
    heading: "Convenient Dashboard",
    description:
      "A user friendly interface that displays summary information, key performance indicators, and important data for quick reference and decision-making.",
  },
  {
    heading: "Stunning Templates",
    description:
      "A collection of professionally designed, visually appealing templates that can be used to create websites and more.",
  },
  {
    heading: "Staffs Management",
    description:
      "A system for managing staff details, schedules, and tasks to ensure efficient operation and resource allocation.",
  },
  {
    heading: "Appointment Scheduler",
    description:
      "A tool for scheduling and managing appointments, meetings, or events, ensuring no conflicts and efficient time management.",
  },
  {
    heading: "Contacts Storage",
    description:
      "A secure place to store and manage contact information such as names, addresses, phone numbers, and emails for easy access and communication.",
  },
  {
    heading: "Event Management",
    description:
      "A comprehensive tool for planning, organizing, and executing events, including guest lists, venues, schedules, and more.",
  },
  {
    heading: "Plans & Prices",
    description:
      "Detailed information about the various plans, packages, or services offered, including their features and prices for easy comparison and selection.",
  },
  {
    heading: "Customizations",
    description:
      "Options and tools to tailor the product or service to meet specific needs or preferences, enhancing user experience and satisfaction.",
  },
];

export const landingPageMenu: LandingPageMenu[] = [
  {
    href: "/topbar",
    name: "Topbar",
    icon: MdChevronRight,
  },
  {
    href: "/custompage",
    name: "Custom Page",
    icon: MdChevronRight,
  },
  {
    href: "/home",
    name: "Home",
    icon: MdChevronRight,
  },
  {
    href: "/feature",
    name: "Feature",
    icon: MdChevronRight,
  },
  {
    href: "/discover",
    name: "Discover",
    icon: MdChevronRight,
  },
  {
    href: "/screenshot",
    name: "Screenshot",
    icon: MdChevronRight,
  },
  {
    href: "/faq",
    name: "FAQ",
    icon: MdChevronRight,
  },
  {
    href: "/testimonials",
    name: "Testimonials",
    icon: MdChevronRight,
  },
];
