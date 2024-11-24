//layout.tsx
import AdminPanelLayout from "@/components/admin-panel/admin-panel-layout";
import { NextAuthProvider } from "@/providers/NextAuthProvider";
export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AdminPanelLayout>
      <NextAuthProvider>{children}</NextAuthProvider>
    </AdminPanelLayout>
  );
}
