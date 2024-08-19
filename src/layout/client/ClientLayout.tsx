import React from "react";
import { Disclosure } from "@headlessui/react";
import { Outlet } from "react-router-dom";
import { DashBoardNavigation } from "@/components/navigation/DashBoardNavigation.tsx";
import {
  DashBoardIcon,
  JobIcon,
  MessageIcon,
  ProfileIcon,
  WalletIcon,
} from "@/components/Icons";
import { Notification } from "@/components/panel/NotificationPanel";
import { ClientNavigation } from "@/components/navigation/header/ClientNavigation";
import { useHeader } from "@/context/HeaderContext";

const ClientLayout: React.FC = () => {
  const { open, handleClose, openNotification, setOpenNotification } = useHeader();

  const routes = [
    {
      to: "/client/dashboard",
      label: "dashboard",
      Icon: DashBoardIcon,
      current: true,
    },
    {
      to: "/client/jobs",
      label: "jobs",
      Icon: JobIcon,
      current: true,
    },
    {
      to: "/client/messages",
      label: "messages",
      Icon: MessageIcon,
      current: true,
    },
    {
      to: "/client/wallet",
      label: "wallet",
      Icon: WalletIcon,
      current: true,
    },
    {
      to: "/client/profile",
      label: "profile",
      Icon: ProfileIcon,
      current: true,
    },
  ];

  return (
    <Disclosure as="div">
      <>
        <Notification open={openNotification} setOpenNotification={setOpenNotification} />
        <div className="relative z-10 w-full flex lg:justify-between items-stretch h-screen flex-shrink-0">
          {/* Navigation starts */}
          <DashBoardNavigation open={open} close={handleClose} routes={routes} />
          {/* Navigation starts */}

          {/* Main section starts */}
          <main className="absolute w-full left-0 lg:w-[calc(100%-8rem)] lg:left-32 min-h-screen right-0">
            <div className="w-full relative flex flex-col justify-between h-full">
              <ClientNavigation />

              <Outlet />
            </div>
          </main>
          {/* Main section ends */}
        </div>
      </>
    </Disclosure>
  );
};

export default ClientLayout;
