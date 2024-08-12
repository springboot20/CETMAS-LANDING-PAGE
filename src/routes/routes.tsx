import { TalentLayout } from "@/layout/talent/TalentLayout";
import { LandingLayout } from "@/layout/LandingLayout";
import { ClientDashBoard } from "@/pages/dashboard/client/ClientDashBoard";
import { Messages } from "@/pages/dashboard/common/messages/Messages";
import { TalentProfile } from "@/pages/dashboard/common/profile/components/TalentProfile";
import { Wallet } from "@/pages/dashboard/common/wallet/Wallet";
import { Jobs } from "@/pages/dashboard/talent/job/Jobs";
import { JobDescription } from "@/pages/dashboard/talent/job/Jobs/JobDescription";
import { SavedJobs } from "@/pages/dashboard/talent/job/SavedJobs";
import { TalentDashBoard } from "@/pages/dashboard/talent/TalentDashBoard";
import { AboutTalent } from "@/pages/Talent/landing-page/about-talents/AboutTalent";
import { Login } from "@/pages/Talent/landing-page/components/forms/Login";
import { ClientForm } from "@/pages/Talent/landing-page/components/forms/signup-forms/ClientForm";
import { TalentForm } from "@/pages/Talent/landing-page/components/forms/signup-forms/TalentForm";
import { LandingPage } from "@/pages/Talent/landing-page/Index";
import { Talents } from "@/pages/Talent/landing-page/talents/Talents";
import { createBrowserRouter } from "react-router-dom";
import { ClientLayout } from "@/layout/client/ClientLayout";
import { AdminLayout } from "@/layout/admin/AdminLayout";
import { AdminDashBoard } from "@/pages/dashboard/admin/AdminDashboard";
import { ClientJobs } from "@/pages/dashboard/client/Jobs/Jobs";
import { NotFound } from "@/components/NotFound";
import { Profile } from "@/pages/dashboard/common/profile/Profile";
import { AdminProfile } from "@/pages/dashboard/common/profile/components/AdminProfile";
import { ClientProfile } from "@/pages/dashboard/common/profile/components/ClientProfile";
import { Applicants } from "@/pages/dashboard/common/applicants/Applicants";
import { AdminLogin } from "@/pages/Talent/landing-page/components/forms/Login copy";

export const routes = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "/admin-login",
        element: <AdminLogin />,
      },
      {
        path: "register",
        children: [
          {
            path: "talent",
            element: <TalentForm />,
          },
          {
            path: "client",
            element: <ClientForm />,
          },
        ],
      },
    ],
  },
  {
    path: "/",
    element: <LandingLayout />,
    children: [
      {
        path: "talents",
        element: <Talents />,
      },
      {
        path: "about-talents",
        element: <AboutTalent />,
      },
    ],
  },
  {
    path: "/talent",
    element: <TalentLayout />,
    children: [
      {
        path: "dashboard",
        element: <TalentDashBoard />,
      },
      {
        path: "jobs",
        children: [
          {
            index: true,
            element: <Jobs />,
          },
          {
            path: "saved",
            element: <SavedJobs />,
          },
          {
            path: ":id",
            element: <JobDescription />,
          },
        ],
      },
      {
        path: "messages",
        element: <Messages />,
      },
      {
        path: "wallet",
        element: <Wallet />,
      },
      {
        path: "profile",
        element: (
          <Profile>
            <TalentProfile />
          </Profile>
        ),
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "/client",
    element: <ClientLayout />,
    children: [
      {
        path: "dashboard",
        element: <ClientDashBoard />,
      },
      {
        path: "applicants",
        element: <Applicants />,
      },
      {
        path: "jobs",
        children: [
          {
            index: true,
            element: <ClientJobs />,
          },
        ],
      },
      {
        path: "messages",
        element: <Messages />,
      },
      {
        path: "wallet",
        element: <Wallet />,
      },
      {
        path: "profile",
        element: (
          <Profile>
            <ClientProfile />
          </Profile>
        ),
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "dashboard",
        element: <AdminDashBoard />,
      },
      {
        path: "messages",
        element: <Messages />,
      },
      {
        path: "wallet",
        element: <Wallet />,
      },
      {
        path: "profile",
        element: (
          <Profile>
            <AdminProfile />
          </Profile>
        ),
      },
      {
        path: "applicants",
        element: <Applicants />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
