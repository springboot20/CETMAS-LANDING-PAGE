import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

// layouts
const LandingLayout = lazy(() => import("@/layout/LandingLayout"));
const TalentLayout = lazy(() => import("@/layout/talent/TalentLayout"));
const ClientLayout = lazy(() => import("@/layout/client/ClientLayout"));
const AdminLayout = lazy(() => import("@/layout/admin/AdminLayout"));
const AboutTalent = lazy(() => import("@/pages/Talent/landing-page/about-talents/AboutTalent"));

// dashboards
const ClientDashBoard = lazy(() => import("@/pages/dashboard/client/ClientDashBoard"));
const TalentDashBoard = lazy(() => import("@/pages/dashboard/talent/TalentDashBoard"));
const AdminDashBoard = lazy(() => import("@/pages/dashboard/admin/AdminDashboard"));

// jobs
const Jobs = lazy(() => import("@/pages/dashboard/talent/jobs/Jobs"));
const JobDescription = lazy(() => import("@/pages/dashboard/talent/components/Description"));
const ClientJobs = lazy(() => import("@/pages/dashboard/client/Jobs/Jobs"));
const SavedJobs = lazy(() => import("@/pages/dashboard/talent/components/Saved"));

// messages
const Messages = lazy(() => import("@/pages/dashboard/common/messages/TalentMessages"));
const AdminMessages = lazy(() => import("@/pages/dashboard/common/messages/AdminMesages"));
const ClientMessages = lazy(() => import("@/pages/dashboard/common/messages/ClientMessages"));

// profiles
const TalentProfile = lazy(
  () => import("@/pages/dashboard/common/profile/components/TalentProfile"),
);
const AdminProfile = lazy(() => import("@/pages/dashboard/common/profile/components/AdminProfile"));
const Profile = lazy(() => import("@/pages/dashboard/common/profile/Profile"));
const LandingPage = lazy(() => import("@/pages/Talent/landing-page/Index"));
const ApplicantProfile = lazy(
  () => import("@/pages/dashboard/common/profile/components/Applicant"),
);
const ClientProfile = lazy(
  () => import("@/pages/dashboard/common/profile/components/ClientProfile"),
);

// wallet
const Wallet = lazy(() => import("@/pages/dashboard/common/wallet/Wallet"));

// forms
import { Login } from "@/pages/Talent/landing-page/components/forms/Login";
import { ClientForm } from "@/pages/Talent/landing-page/components/forms/signup-forms/ClientForm";
import { TalentForm } from "@/pages/Talent/landing-page/components/forms/signup-forms/TalentForm";
import { AdminLogin } from "@/pages/Talent/landing-page/components/forms/AdminLogin";

// others
const Applicants = lazy(() => import("@/pages/dashboard/common/applicants/Applicants"));
const Talents = lazy(() => import("@/pages/Talent/landing-page/talents/Talents"));
const Clients = lazy(() => import("@/pages/dashboard/common/clients/Clients"));

// notfound {*}
import { NotFound } from "@/components/NotFound";

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
