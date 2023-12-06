import Squares2X2Icon from "@heroicons/react/24/outline/Squares2X2Icon";
import WalletIcon from "@heroicons/react/24/outline/WalletIcon";
import UserIcon from "@heroicons/react/24/outline/UserIcon";
import CurrencyDollarIcon from "@heroicons/react/24/outline/CurrencyDollarIcon";
import UsersIcon from "@heroicons/react/24/outline/UsersIcon";
import DocumentDuplicateIcon from "@heroicons/react/24/outline/DocumentDuplicateIcon";

const iconClasses = `h-6 w-6`;
const submenuIconClasses = `h-5 w-5`;

const routes = [
  {
    path: "/app/dashboard",
    icon: <Squares2X2Icon className={iconClasses} />,
    name: "Dashboard",
  },
  {
    path: "/app/transactions",
    icon: <CurrencyDollarIcon className={iconClasses} />,
    name: "Transactions",
  },
  {
    path: "",
    icon: <DocumentDuplicateIcon className={`${iconClasses} inline`} />,
    name: "Payments",
    submenu: [
      {
        path: "/app/payment-methods",
        icon: <WalletIcon className={submenuIconClasses} />,
        name: "Payment methods",
      },
    ],
  },
  {
    path: "/app/cards",
    icon: <WalletIcon className={iconClasses} />,
    name: "Cards",
  },
  {
    path: "/app/capital",
    icon: <CurrencyDollarIcon className={iconClasses} />,
    name: "Capital",
  },
  {
    path: "",
    icon: <UsersIcon className={`${iconClasses} inline`} />,
    name: "Accounts",
    submenu: [
      {
        path: "/app/credit",
        icon: <UserIcon className={submenuIconClasses} />,
        name: "Profile",
      },
    ],
  },
];

export default routes;
