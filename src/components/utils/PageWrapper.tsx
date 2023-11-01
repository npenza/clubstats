import { ReactNode } from "react";

// A component that wraps the page content
export default function PageWrapper({ component }: { component: ReactNode }) {
  return (
    <div className="px-4 min-h-[100vh] w-[100%] bg-gray-100">{component}</div>
  );
}
