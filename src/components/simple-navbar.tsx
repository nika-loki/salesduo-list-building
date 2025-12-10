"use client";

import Image from "next/image";
import Link from "next/link";

/**
 * Simplified navbar for legal and static pages
 * - No role selection
 * - No dynamic behavior
 * - Just logo and basic navigation
 */
export function SimpleNavbar() {
  return (
    <nav className="border-b border-border bg-background sticky top-0 z-50">
      <div className="flex items-center justify-between h-12 px-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <Image
            src="/favicon/favicon-32x32.png"
            alt="SalesDuo"
            width={24}
            height={24}
            className="w-6 h-6"
          />
          <span className="text-base font-semibold text-text-primary">
            SalesDuo
          </span>
        </Link>

        {/* Simple Navigation */}
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="text-xs text-text-secondary hover:text-text-primary transition-colors"
          >
            Home
          </Link>
          <Link
            href="/upload"
            className="text-xs text-text-secondary hover:text-text-primary transition-colors"
          >
            Get Quote
          </Link>
        </div>
      </div>
    </nav>
  );
}
