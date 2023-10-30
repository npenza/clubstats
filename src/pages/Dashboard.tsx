import { ReactNode } from "react";
import PageWrapper from "../components/utils/PageWrapper";
import { useUserStore } from "../store/UserStore";

function Dashboard(): ReactNode {
  return <div>Welcome!</div>;
}

function LogInDashboard(): ReactNode {
  return <div>Please log in</div>;
}

export default function DashboardPage() {
  const { userLoggedIn } = useUserStore();

  return (
    <PageWrapper
      component={userLoggedIn ? <Dashboard /> : <LogInDashboard />}
    />
  );
}
