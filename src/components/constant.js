import { MdDashboard } from "react-icons/md";
import { FaFileUpload } from "react-icons/fa";
import { FaMoneyBill } from "react-icons/fa6";
import { MdLibraryBooks } from "react-icons/md";
import { FaCalendar } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";

export const sidetabs = [
  {
    name: "DashBoard",
    path: "/base/dashboard",
    icon: <MdDashboard />,
  },
  {
    name: "upload",
    path: "/base",
    icon: <FaFileUpload />,
  },
  {
    name: "Invoice",
    path: "/base/invoice",
    icon: <FaMoneyBill />,
  },
  {
    name: "Schedule",
    path: "/base/schedule",
    icon: <MdLibraryBooks />,
  },
  {
    name: "Calender",
    path: "/base/calender",
    icon: <FaCalendar />,
  },
  {
    name: "Notification",
    path: "/base/notification",
    icon: <IoIosNotifications />,
  },
  {
    name: "Settings",
    path: "/base/setting",
    icon: <IoIosSettings />,
  },
];
