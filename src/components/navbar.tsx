"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useUserRole } from "@/hooks/use-user-role";
import { RoleSelectionModal } from "./navbar/role-selection-modal";
import { RoleSelector } from "./navbar/role-selector";
import { NavLinks } from "./navbar/nav-links";

export function Navbar() {
  const { selectedRole, showRoleModal, updateRole } = useUserRole();
  const [showLogo, setShowLogo] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show logo when at top or scrolling up
      if (currentScrollY < 50) {
        setShowLogo(true);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setShowLogo(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down
        setShowLogo(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav className="border-b border-border bg-background sticky top-0 z-50">
      <div className="flex items-center justify-between h-12 px-6">
        {/* Left: Logo */}
        <div className="flex items-center">
          <Link
            href="/"
            className={`flex items-center gap-2 hover:opacity-80 transition-all duration-300 ${
              showLogo
                ? "opacity-100 scale-100 w-auto"
                : "opacity-0 scale-95 w-0 overflow-hidden"
            }`}
          >
            <Image
              src="/favicon/favicon-32x32.png"
              alt="SalesDuo"
              width={24}
              height={24}
              className="w-6 h-6 flex-shrink-0"
            />
            <span className="text-base font-semibold text-text-primary whitespace-nowrap">
              SalesDuo
            </span>
          </Link>
        </div>

        {/* Center: Role Selector with smooth position transition */}
        <RoleSelector
          selectedRole={selectedRole}
          onRoleChange={updateRole}
          showLogo={showLogo}
        />

        {/* Navigation Links */}
        <NavLinks />
      </div>

      {/* Role Selection Modal */}
      <RoleSelectionModal isOpen={showRoleModal} onRoleSelect={updateRole} />
    </nav>
  );
}
