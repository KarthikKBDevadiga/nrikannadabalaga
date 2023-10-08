import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Footer from "@/components/Footer";

interface PageFrameProps {
  children?: any;
  meta?: {
    title?: string;
    description?: string;
    keywords?: string[];
    structuredDatas?: any[];
  };
}

export default function PageFrame({ children, meta }: PageFrameProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-col overflow-hidden">
      <div className="overflow-scroll">
        <main className="mx-auto overflow-scroll">{children}</main>
      </div>
    </div>
  );
}
