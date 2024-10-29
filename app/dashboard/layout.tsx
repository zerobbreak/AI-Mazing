//layout.tsx
import AdminPanelLayout from "@/components/admin-panel/admin-panel-layout";
import { UserProvider } from "@/context/UserContext";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AdminPanelLayout>
      <UserProvider>
        {children}
      </UserProvider>
    </AdminPanelLayout>
  );
}
