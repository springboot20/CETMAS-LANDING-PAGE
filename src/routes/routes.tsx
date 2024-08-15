import { createBrowserRouter } from "react-router-dom";

import { TalentLayout } from "@/layout/talent/TalentLayout";
import { LandingLayout } from "@/layout/LandingLayout";
import { ClientDashBoard } from "@/pages/dashboard/client/ClientDashBoard";
import { Messages } from "@/pages/dashboard/common/messages/TalentMessages";
import { TalentProfile } from "@/pages/dashboard/common/profile/components/TalentProfile";
import { Wallet } from "@/pages/dashboard/common/wallet/Wallet";
import { Jobs } from "@/pages/dashboard/talent/jobs/Jobs";
import { JobDescription } from "@/pages/dashboard/talent/components/Description";
import { SavedJobs } from "@/pages/dashboard/talent/components/Saved";
import { TalentDashBoard } from "@/pages/dashboard/talent/TalentDashBoard";
import { AboutTalent } from "@/pages/Talent/landing-page/about-talents/AboutTalent";
import { Login } from "@/pages/Talent/landing-page/components/forms/Login";
import { ClientForm } from "@/pages/Talent/landing-page/components/forms/signup-forms/ClientForm";
import { TalentForm } from "@/pages/Talent/landing-page/components/forms/signup-forms/TalentForm";
import { LandingPage } from "@/pages/Talent/landing-page/Index";
import { Talents } from "@/pages/Talent/landing-page/talents/Talents";
import { ClientLayout } from "@/layout/client/ClientLayout";
import { AdminLayout } from "@/layout/admin/AdminLayout";
import { AdminDashBoard } from "@/pages/dashboard/admin/AdminDashboard";
import { ClientJobs } from "@/pages/dashboard/client/Jobs/Jobs";
import { NotFound } from "@/components/NotFound";
import { Profile } from "@/pages/dashboard/common/profile/Profile";
import { AdminProfile } from "@/pages/dashboard/common/profile/components/AdminProfile";
import { ClientProfile } from "@/pages/dashboard/common/profile/components/ClientProfile";
import { Applicants } from "@/pages/dashboard/common/applicants/Applicants";
import { AdminLogin } from "@/pages/Talent/landing-page/components/forms/AdminLogin";
import { AdminMessages } from "@/pages/dashboard/common/messages/AdminMesages";
import { ClientMessages } from "@/pages/dashboard/common/messages/ClientMessages";
import { ApplicantProfile } from "@/pages/dashboard/common/profile/components/Applicant";
import { Clients } from "@/pages/dashboard/common/clients/Clients";

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
        children: [
          {
            index: true,
            element: <Applicants />,
          },
          {
            path: ":id",
            element: (
              <Profile>
                <ApplicantProfile />
              </Profile>
            ),
          },
        ],
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
        element: <ClientMessages />,
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
      {
        path: "*",
        element: <NotFound />,
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
        path: "jobs",
        element: <AdminDashBoard />,
      },
      {
        path: "messages",
        element: <AdminMessages />,
      },
      {
        path: "wallet",
        element: <Wallet />,
      },
      {
        path: "applicants",
        children: [
          {
            index: true,
            element: <Applicants />,
          },
          {
            path: ":id",
            element: (
              <Profile>
                <ApplicantProfile />
              </Profile>
            ),
          },
        ],
      },
      {
        path: "clients",
        children: [
          {
            index: true,
            element: <Clients />,
          },
          {
            path: ":id",
            element: (
              <Profile>
                <AdminProfile />
              </Profile>
            ),
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
