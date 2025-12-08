import Link from "next/link";

/**
 * Navigation links and CTA button
 *
 * Features:
 * - Pricing and Examples anchor links
 * - Start Free CTA button
 * - Hover states and transitions
 */
export function NavLinks() {
  return (
    <div className="flex items-center gap-6">
      <a
        href="#pricing"
        className="text-sm text-text-secondary hover:text-text-primary transition-colors"
      >
        Pricing
      </a>
      <a
        href="#examples"
        className="text-sm text-text-secondary hover:text-text-primary transition-colors"
      >
        Examples
      </a>

      {/* CTA Button */}
      <Link
        href="/upload"
        className="px-4 py-1.5 bg-cta text-white rounded-lg font-medium hover:bg-cta-hover transition-colors text-sm"
      >
        Start Free →
      </Link>
    </div>
  );
}
