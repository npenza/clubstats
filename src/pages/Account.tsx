import { ReactNode } from "react";
import PageWrapper from "../components/utils/PageWrapper";

function Account(): ReactNode {
  return <div>Account</div>;
}

export default function AccountPage() {
  return <PageWrapper component={<Account />} />;
}
