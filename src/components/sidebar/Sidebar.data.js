import {
  AccountCircleOutlined,
  CreditCard,
  Dashboard,
  ExitToApp,
  InsertChart,
  LocalShipping,
  NotificationsNone,
  PersonOutline,
  PsychologyOutlined,
  SettingsApplications,
  SettingsSystemDaydreamOutlined,
  Store,
} from "@mui/icons-material";

export const links = [
  {
    title: "Main",
    links: [
      {
        name: "Dashboard",
        link: "dashboard",
        icon: <Dashboard />,
      },
    ],
  },
  {
    title: "Lists",
    links: [
      {
        name: "Users",
        link: "users",
        icon: <PersonOutline />,
      },
      {
        name: "Products",
        link: "products",
        icon: <Store />,
      },
      {
        name: "Orders",
        link: "orders",
        icon: <CreditCard />,
      },
    ],
  },
  {
    title: "Useful",
    links: [
      {
        name: "Stats",
        link: "stats",
        icon: <InsertChart />,
      },
      {
        name: "Notifications",
        link: "notifications",
        icon: <NotificationsNone />,
      },
    ],
  },
  {
    title: "Service",
    links: [
      {
        name: "System Health",
        link: "system-health",
        icon: <SettingsSystemDaydreamOutlined />,
      },
      {
        name: "Logs",
        link: "logs",
        icon: <PsychologyOutlined />,
      },
      {
        name: "Settings",
        link: "settings",
        icon: <SettingsApplications />,
      },
    ],
  },
  {
    title: "User",
    links: [
      {
        name: "Profile",
        link: "profile",
        icon: <AccountCircleOutlined />,
      },
      {
        name: "Logout",
        link: "logout",
        icon: <ExitToApp />,
      },
    ],
  },
];
