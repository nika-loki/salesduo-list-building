import type { ReactNode } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';

interface LegalLayoutProps {
  title: string;
  lastUpdated?: Date;
  children: ReactNode;
  showBackToHome?: boolean;
  showPrivacyLink?: boolean;
  showTermsLink?: boolean;
}

export function LegalLayout({
  title,
  lastUpdated = new Date(),
  children,
  showBackToHome = true,
  showPrivacyLink = false,
  showTermsLink = false,
}: LegalLayoutProps) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            <p className="text-muted-foreground">
              Last updated:{' '}
              {lastUpdated.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-12">
            {children}
          </div>

          {/* Navigation Links */}
          <div className="mt-12 pt-8 border-t border-border flex gap-6 flex-wrap">
            {showBackToHome && (
              <Link
                href="/"
                className="text-primary hover:underline inline-flex items-center gap-2"
              >
                ← Back to Home
              </Link>
            )}
            {showPrivacyLink && (
              <Link
                href="/privacy"
                className="text-primary hover:underline inline-flex items-center gap-2"
              >
                View Privacy Policy →
              </Link>
            )}
            {showTermsLink && (
              <Link
                href="/terms"
                className="text-primary hover:underline inline-flex items-center gap-2"
              >
                View Terms of Service →
              </Link>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
