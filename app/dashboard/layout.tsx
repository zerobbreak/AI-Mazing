//layout.tsx
import AdminPanelLayout from "@/components/admin-panel/admin-panel-layout";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  title: "AI Mazing",
  description: "A Next.js 13 Meta Education Aplication",
};

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <AdminPanelLayout>{children}</AdminPanelLayout>
    </ClerkProvider>
  );
}
