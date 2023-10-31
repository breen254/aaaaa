import HomeIcon from '@mui/icons-material/Home';
import ShopIcon from '@mui/icons-material/Shop';
import Person2Icon from '@mui/icons-material/Person2';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
export const sidebarLinks = [
  {
    Icon: HomeIcon,
    route: "/",
    label: "Home",
  },
  {
    Icon: ShopIcon,
    route: "/shops",
    label: "Shops",
  },
  {
    Icon: ProductionQuantityLimitsIcon,
    route: "/products",
    label: "Products",
  },

  {
    Icon: Person2Icon,
    route: "/profile",
    label: "Profile",
  },

];

export const profileTabs = [
  { value: "threads", label: "Threads", icon: "/assets/reply.svg" },
  { value: "replies", label: "Replies", icon: "/assets/members.svg" },
  { value: "tagged", label: "Tagged", icon: "/assets/tag.svg" },
];

export const communityTabs = [
  { value: "threads", label: "Threads", icon: "/assets/reply.svg" },
  { value: "members", label: "Members", icon: "/assets/members.svg" },
  { value: "requests", label: "Requests", icon: "/assets/request.svg" },
];
