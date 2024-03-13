import { LuContact2 } from "react-icons/lu";
import { SlSettings } from "react-icons/sl";
import { BsCalendar3 } from "react-icons/bs";
import { RxDashboard } from "react-icons/rx";
import { PiPaperPlaneTiltLight } from "react-icons/pi";
import { GoPeople, GoCalendar, GoBriefcase } from "react-icons/go";

// Social icons
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

export const menuItems = [
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

export const sidebarMenuItems = [
  {
    href: "/dashboard",
    menu: "Dashboard",
    icons: RxDashboard,
  },
  {
    href: "/dashboard/business",
    menu: "Business",
    icons: GoBriefcase,
  },
  {
    href: "/",
    menu: "Staff",
    icons: GoPeople,
  },
  {
    href: "/",
    menu: "Appointments",
    icons: GoCalendar,
  },
  {
    href: "/",
    menu: "Contacts",
    icons: LuContact2,
  },
  {
    href: "/",
    menu: "Calendar",
    icons: BsCalendar3,
  },
  {
    href: "/",
    menu: "Plans",
    icons: PiPaperPlaneTiltLight,
  },
  {
    href: "/dashboard/settings",
    menu: "Settings",
    icons: SlSettings,
  },
];

export const socialIcons = [
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

export const featuresName = [
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
