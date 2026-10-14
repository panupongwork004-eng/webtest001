import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Docker Lab Starter",
  description: "โปรเจกต์เริ่มต้นสำหรับห้องทดลอง Docker ด้วย Next.js และ TypeScript",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}