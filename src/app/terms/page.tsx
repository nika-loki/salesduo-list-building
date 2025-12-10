import type { Metadata } from "next";
import Link from "next/link";
import { SimpleNavbar } from "@/components/simple-navbar";

export const metadata: Metadata = {
  title: "Terms of Service | SalesDuo",
  description:
    "Terms and conditions for using SalesDuo list-building services.",
};

export default function TermsOfServicePage() {
  return (
    <>
      <SimpleNavbar />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
            <p className="text-muted-foreground">
              Effective Date:{" "}
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>

          {/* Table of Contents */}
          <nav className="bg-muted/30 p-6 rounded-lg border border-border mb-12">
            <h2 className="text-lg font-semibold mb-4">Table of Contents</h2>
            <ol className="space-y-2 text-sm">
              <li>
                <a href="#agreement" className="text-primary hover:underline">
                  1. Agreement to Terms
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary hover:underline">
                  2. Our Services
                </a>
              </li>
              <li>
                <a href="#accounts" className="text-primary hover:underline">
                  3. Accounts and Registration
                </a>
              </li>
              <li>
                <a
                  href="#acceptable-use"
                  className="text-primary hover:underline"
                >
                  4. Acceptable Use Policy
                </a>
              </li>
              <li>
                <a
                  href="#intellectual-property"
                  className="text-primary hover:underline"
                >
                  5. Intellectual Property Rights
                </a>
              </li>
              <li>
                <a
                  href="#data-rights"
                  className="text-primary hover:underline"
                >
                  6. Data Rights and Commercial Use
                </a>
              </li>
              <li>
                <a
                  href="#fees-payment"
                  className="text-primary hover:underline"
                >
                  7. Fees and Payment
                </a>
              </li>
              <li>
                <a href="#disclaimers" className="text-primary hover:underline">
                  8. Disclaimers and Warranties
                </a>
              </li>
              <li>
                <a
                  href="#limitation-liability"
                  className="text-primary hover:underline"
                >
                  9. Limitation of Liability
                </a>
              </li>
              <li>
                <a
                  href="#indemnification"
                  className="text-primary hover:underline"
                >
                  10. Indemnification
                </a>
              </li>
              <li>
                <a href="#termination" className="text-primary hover:underline">
                  11. Termination
                </a>
              </li>
              <li>
                <a
                  href="#dispute-resolution"
                  className="text-primary hover:underline"
                >
                  12. Dispute Resolution and Governing Law
                </a>
              </li>
              <li>
                <a href="#general" className="text-primary hover:underline">
                  13. General Provisions
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary hover:underline">
                  14. Contact Information
                </a>
              </li>
            </ol>
          </nav>

          {/* Content */}
          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-12">
            {/* Agreement to Terms */}
            <section id="agreement">
              <h2 className="text-2xl font-semibold mb-4">
                1. Agreement to Terms
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Welcome to SalesDuo Pte. Ltd. ("SalesDuo," "we," "our," or "us"). These Terms of Service ("Terms") govern
                your access to and use of our list-building and lead enrichment
                services, websites, and related applications (collectively, the
                "Services").
              </p>
              <p className="text-foreground/80 leading-relaxed mb-4">
                By accessing or using our Services, you agree to be bound by
                these Terms and our Privacy Policy, which complies with the General Data Protection Regulation (GDPR), Singapore Personal Data Protection Act (PDPA), and other applicable data protection laws. If you do not agree with
                these Terms, you must not access or use our Services.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-4">
                We reserve the right to update these Terms at any time. When we
                make material changes, we will notify you by updating the
                "Effective Date" and posting a notice on our website. Your
                continued use of the Services after changes become effective
                constitutes your acceptance of the revised Terms.
              </p>
            </section>

            {/* Our Services */}
            <section id="services">
              <h2 className="text-2xl font-semibold mb-4">2. Our Services</h2>

              <h3 className="text-xl font-medium mb-3 mt-6">
                Service Description
              </h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                SalesDuo provides on-demand list-building and lead enrichment
                services, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-4">
                <li>
                  Custom lead list generation based on your specifications
                </li>
                <li>Data enrichment with specified column definitions</li>
                <li>Pay-as-you-go credits model</li>
                <li>Research and data validation services</li>
              </ul>

              <h3 className="text-xl font-medium mb-3 mt-6">
                Service Availability
              </h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                We strive to provide reliable Services, but we do not guarantee
                uninterrupted or error-free access. We may modify, suspend, or
                discontinue any part of the Services at any time, with or
                without notice, for maintenance, updates, or other reasons.
              </p>

              <h3 className="text-xl font-medium mb-3 mt-6">
                Credits-Based Model
              </h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Our Services operate on a credits-based system. You purchase
                credits which are consumed as you use our Services. The number
                of credits required for each service depends on the scope and
                complexity of your request.
              </p>
            </section>

            {/* Accounts and Registration */}
            <section id="accounts">
              <h2 className="text-2xl font-semibold mb-4">
                3. Accounts and Registration
              </h2>

              <h3 className="text-xl font-medium mb-3 mt-6">Eligibility</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                To use our Services, you must:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-4">
                <li>
                  Be at least 18 years old or the age of majority in your
                  jurisdiction
                </li>
                <li>
                  Have the legal authority to enter into binding contracts
                </li>
                <li>Represent a legitimate business or organization</li>
                <li>
                  Not be prohibited from using our Services under applicable
                  laws
                </li>
              </ul>

              <h3 className="text-xl font-medium mb-3 mt-6">
                Account Information
              </h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                When you create an account or engage our Services, you must
                provide accurate, current, and complete information. You are
                responsible for maintaining the accuracy of your account
                information and promptly updating it when necessary.
              </p>

              <h3 className="text-xl font-medium mb-3 mt-6">
                Account Security
              </h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                You are responsible for maintaining the confidentiality of any
                login credentials and for all activities that occur under your
                account. You must immediately notify us of any unauthorized use
                of your account or any other security breach.
              </p>
            </section>

            {/* Acceptable Use Policy */}
            <section id="acceptable-use">
              <h2 className="text-2xl font-semibold mb-4">
                4. Acceptable Use Policy
              </h2>

              <p className="text-foreground/80 leading-relaxed mb-4">
                You agree not to use our Services to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-4">
                <li>
                  <strong>Violate Laws:</strong> Engage in any activity that
                  violates applicable laws, regulations, or third-party rights
                </li>
                <li>
                  <strong>Spam or Harassment:</strong> Send unsolicited
                  communications, engage in phishing, or harass individuals
                </li>
                <li>
                  <strong>Data Privacy Violations:</strong> Collect, use, or
                  process personal data in violation of GDPR, CCPA, PDPA,
                  CAN-SPAM, or other data protection laws
                </li>
                <li>
                  <strong>Fraudulent Activity:</strong> Engage in fraud,
                  misrepresentation, or deceptive practices
                </li>
                <li>
                  <strong>Harmful Content:</strong> Transmit viruses, malware,
                  or any malicious code
                </li>
                <li>
                  <strong>Service Interference:</strong> Interfere with,
                  disrupt, or overload our Services or servers
                </li>
                <li>
                  <strong>Unauthorized Access:</strong> Attempt to gain
                  unauthorized access to our systems or other users' accounts
                </li>
                <li>
                  <strong>Competitive Analysis:</strong> Use our Services to
                  build a competitive product or service
                </li>
                <li>
                  <strong>Reverse Engineering:</strong> Reverse engineer,
                  decompile, or disassemble our Services
                </li>
              </ul>

              <p className="text-foreground/80 leading-relaxed mb-4">
                You are solely responsible for ensuring that your use of data
                obtained through our Services complies with all applicable laws,
                including obtaining proper consent from individuals before
                contacting them.
              </p>
            </section>

            {/* Intellectual Property */}
            <section id="intellectual-property">
              <h2 className="text-2xl font-semibold mb-4">
                5. Intellectual Property Rights
              </h2>

              <h3 className="text-xl font-medium mb-3 mt-6">
                Our Intellectual Property
              </h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                The Services, including all content, features, functionality,
                designs, logos, trademarks, and technology, are owned by
                SalesDuo or our licensors and are protected by international
                copyright, trademark, patent, trade secret, and other
                intellectual property laws.
              </p>

              <h3 className="text-xl font-medium mb-3 mt-6">Limited License</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Subject to your compliance with these Terms, we grant you a
                limited, non-exclusive, non-transferable, revocable license to
                access and use our Services solely for your internal business
                purposes.
              </p>

              <h3 className="text-xl font-medium mb-3 mt-6">
                Deliverables and Data
              </h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Upon completion of service delivery, you own the data and
                deliverables we provide. However, we retain ownership of our
                methodologies, processes, tools, templates, and any pre-existing
                intellectual property used to create the deliverables.
              </p>

              <h3 className="text-xl font-medium mb-3 mt-6">Feedback</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                If you provide us with any feedback, suggestions, or ideas about
                our Services, you grant us a worldwide, perpetual, irrevocable,
                royalty-free license to use, modify, and incorporate such
                feedback without any obligation to you.
              </p>
            </section>

            {/* Data Rights and Commercial Use */}
            <section id="data-rights">
              <h2 className="text-2xl font-semibold mb-4">
                6. Data Rights and Commercial Use
              </h2>

              <h3 className="text-xl font-medium mb-3 mt-6">
                Usage Data and Analytics
              </h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                By using our Services, you acknowledge and agree that we may collect, analyze, and use aggregated and anonymized usage data for business purposes, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-4">
                <li>Improving and developing our Services</li>
                <li>Creating industry benchmarks and market insights</li>
                <li>Training and improving our algorithms and models</li>
                <li>Research and analytics purposes</li>
              </ul>

              <h3 className="text-xl font-medium mb-3 mt-6">
                Commercial Use of Data
              </h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                We may use and commercialize data derived from your use of our Services in the following ways:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-4">
                <li>
                  <strong>Aggregated Data Products:</strong> Create and sell aggregated, anonymized datasets and market intelligence reports that do not identify individual users
                </li>
                <li>
                  <strong>Trend Analysis:</strong> Analyze patterns and trends across our user base to develop data products for third parties
                </li>
                <li>
                  <strong>Model Training:</strong> Use aggregated data to train AI and machine learning models for commercial purposes
                </li>
                <li>
                  <strong>Audience Creation:</strong> Create lookalike audiences and similar user segments for advertising and marketing purposes (in hashed or encrypted formats)
                </li>
              </ul>

              <h3 className="text-xl font-medium mb-3 mt-6">
                Data Sharing and Distribution
              </h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                We may share or distribute certain data as follows:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-4">
                <li>
                  <strong>Aggregated Data:</strong> Share aggregated, anonymized data with partners, advertisers, and other third parties for commercial purposes
                </li>
                <li>
                  <strong>Advertising Platforms:</strong> Share information with advertising platforms (such as Meta, Google) in hashed or encrypted formats for targeted advertising, conversion tracking, and audience creation
                </li>
                <li>
                  <strong>Research Partners:</strong> Collaborate with academic and commercial research partners using aggregated data
                </li>
              </ul>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Personal data that directly identifies you will not be sold or shared for commercial purposes without your explicit consent, except as required to provide the Services or as outlined in our Privacy Policy.
              </p>

              <h3 className="text-xl font-medium mb-3 mt-6">
                User Consent and Control
              </h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                By using our Services, you consent to the data practices described in this section. You may request to opt out of certain data sharing practices by contacting us at{" "}
                <a
                  href="mailto:privacy@salesduo.io"
                  className="text-primary hover:underline font-medium"
                >
                  privacy@salesduo.io
                </a>
                . However, opting out may limit your ability to use certain features of our Services.
              </p>

              <h3 className="text-xl font-medium mb-3 mt-6">
                Data Retention for Commercial Purposes
              </h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Aggregated and anonymized data may be retained indefinitely for commercial use, even after you close your account or request deletion of your personal information. This data cannot be used to identify you personally.
              </p>
            </section>

            {/* Fees and Payment */}
            <section id="fees-payment">
              <h2 className="text-2xl font-semibold mb-4">
                7. Fees and Payment
              </h2>

              <h3 className="text-xl font-medium mb-3 mt-6">
                Credits and Pricing
              </h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Our Services operate on a pay-as-you-go credits model. You
                purchase credits which are consumed when you use our Services.
                Credit pricing and consumption rates are displayed on our
                website and may be updated from time to time with reasonable
                notice.
              </p>

              <h3 className="text-xl font-medium mb-3 mt-6">
                Payment Processing
              </h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                All payments are processed securely through Stripe, our
                third-party payment processor. By providing payment information,
                you agree to Stripe's Terms of Service and Privacy Policy. We do
                not store your complete credit card information on our servers.
              </p>

              <h3 className="text-xl font-medium mb-3 mt-6">
                Auto-Recharge Subscription
              </h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                You may opt into an auto-recharge subscription that
                automatically purchases credits when your balance falls below a
                specified threshold. You can configure or cancel auto-recharge
                settings at any time through your account dashboard.
                Cancellation takes effect immediately, but does not refund any
                previously purchased credits.
              </p>

              <h3 className="text-xl font-medium mb-3 mt-6">
                Refunds and Credits
              </h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Credit purchases are generally non-refundable. However, we may
                provide refunds or credit adjustments at our sole discretion in
                cases of:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-4">
                <li>Service errors or technical failures on our part</li>
                <li>Duplicate charges or billing errors</li>
                <li>Circumstances required by applicable law</li>
              </ul>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Unused credits expires according to your purchased package.
              </p>

              <h3 className="text-xl font-medium mb-3 mt-6">
                Currency and Taxes
              </h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                All fees are in US Dollars (USD) unless otherwise specified.
                Prices are exclusive of applicable taxes, duties, and similar
                charges. You are responsible for paying all such taxes, except
                for taxes based on our net income.
              </p>

              <h3 className="text-xl font-medium mb-3 mt-6">
                Payment Failures
              </h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                If a payment fails (including auto-recharge payments), we will
                notify you and may suspend your access to Services until payment
                is resolved. We reserve the right to terminate accounts with
                repeated payment failures.
              </p>
            </section>

            {/* Disclaimers */}
            <section id="disclaimers">
              <h2 className="text-2xl font-semibold mb-4">
                8. Disclaimers and Warranties
              </h2>

              <div className="bg-amber-500/10 p-6 rounded-lg border border-amber-500/30 mb-6">
                <p className="text-sm font-medium uppercase tracking-wide mb-2">
                  Important Legal Notice
                </p>
                <p className="text-sm text-foreground/80">
                  Please read this section carefully as it limits our warranties
                  and explains the nature of our Services.
                </p>
              </div>

              <h3 className="text-xl font-medium mb-3 mt-6">AS-IS Basis</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                THE SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS
                WITHOUT WARRANTIES OF ANY KIND. TO THE FULLEST EXTENT PERMITTED
                BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED,
                INCLUDING:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-4">
                <li>
                  Warranties of merchantability, fitness for a particular
                  purpose, and non-infringement
                </li>
                <li>
                  Warranties that the Services will be uninterrupted,
                  error-free, or secure
                </li>
                <li>
                  Warranties regarding the accuracy, completeness, or
                  reliability of any data or content
                </li>
                <li>
                  Warranties that the Services will meet your requirements or
                  expectations
                </li>
              </ul>

              <h3 className="text-xl font-medium mb-3 mt-6">Data Accuracy</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                While we strive to provide accurate data, we do not warrant the
                accuracy, completeness, or timeliness of any data provided
                through our Services. You are responsible for verifying all data
                before use and for compliance with applicable laws when using
                the data.
              </p>

              <h3 className="text-xl font-medium mb-3 mt-6">
                Third-Party Services
              </h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Our Services may integrate with or rely on third-party services,
                data sources, or platforms. We are not responsible for the
                availability, accuracy, or functionality of such third-party
                services, and we disclaim all liability related to them.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section id="limitation-liability">
              <h2 className="text-2xl font-semibold mb-4">
                9. Limitation of Liability
              </h2>

              <h3 className="text-xl font-medium mb-3 mt-6">
                Exclusion of Damages
              </h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL
                SALESDUO, ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, OR
                AGENTS BE LIABLE FOR ANY:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-4">
                <li>
                  Indirect, incidental, consequential, special, or punitive
                  damages
                </li>
                <li>
                  Loss of profits, revenue, data, goodwill, or business
                  opportunities
                </li>
                <li>
                  Damages resulting from your use or inability to use the
                  Services
                </li>
                <li>
                  Damages resulting from unauthorized access to or alteration of
                  your data
                </li>
                <li>
                  Damages resulting from third-party content, services, or
                  conduct
                </li>
                <li>
                  Damages resulting from errors, mistakes, or inaccuracies in
                  data or content
                </li>
              </ul>

              <h3 className="text-xl font-medium mb-3 mt-6">Liability Cap</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Our total liability to you is limited to the amount you paid us in the past 12 months.
              </p>

              <h3 className="text-xl font-medium mb-3 mt-6">
                Essential Purpose
              </h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                The limitations in this section apply regardless of the legal
                theory on which a claim is based (contract, tort, negligence,
                strict liability, or otherwise) and even if we have been advised
                of the possibility of such damages. These limitations reflect
                the allocation of risk between the parties and are fundamental
                to our pricing and the agreement between us.
              </p>

              <h3 className="text-xl font-medium mb-3 mt-6">
                Jurisdictional Exceptions
              </h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Some jurisdictions do not allow the exclusion or limitation of
                certain damages. In such jurisdictions, our liability is limited
                to the maximum extent permitted by law.
              </p>
            </section>

            {/* Indemnification */}
            <section id="indemnification">
              <h2 className="text-2xl font-semibold mb-4">
                10. Indemnification
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                You agree to indemnify, defend, and hold harmless SalesDuo, its
                affiliates, and their respective officers, directors, employees,
                agents, and representatives from and against any claims,
                liabilities, damages, losses, costs, or expenses (including
                reasonable attorneys' fees) arising from or relating to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-4">
                <li>
                  Your use of the Services or data obtained through the Services
                </li>
                <li>Your violation of these Terms or applicable laws</li>
                <li>
                  Your violation of any third-party rights, including
                  intellectual property, privacy, or data protection rights
                </li>
                <li>
                  Your use of data in violation of GDPR, CCPA, PDPA, CAN-SPAM,
                  or other data protection laws
                </li>
                <li>Any content, data, or information you provide to us</li>
                <li>Your negligence or willful misconduct</li>
              </ul>
              <p className="text-foreground/80 leading-relaxed mb-4">
                We reserve the right to assume the exclusive defense and control
                of any matter subject to indemnification by you, in which case
                you agree to cooperate with our defense of such claim.
              </p>
            </section>

            {/* Termination */}
            <section id="termination">
              <h2 className="text-2xl font-semibold mb-4">11. Termination</h2>

              <h3 className="text-xl font-medium mb-3 mt-6">
                Your Right to Terminate
              </h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                You may stop using the Services at any time by closing your
                account. Termination does not entitle you to a refund of unused
                credits unless required by law.
              </p>

              <h3 className="text-xl font-medium mb-3 mt-6">
                Our Right to Terminate
              </h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                We may suspend or terminate your access to the Services at any
                time, with or without cause, with or without notice, at our sole
                discretion. Grounds for immediate termination include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-4">
                <li>Violation of these Terms or our Acceptable Use Policy</li>
                <li>Non-payment of fees</li>
                <li>Fraudulent, abusive, or illegal activity</li>
                <li>
                  Activities that harm or threaten to harm us, our users, or
                  third parties
                </li>
                <li>Court order or legal requirement</li>
              </ul>

              <h3 className="text-xl font-medium mb-3 mt-6">
                Effect of Termination
              </h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Upon termination:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-4">
                <li>
                  Your right to access and use the Services immediately ceases
                </li>
                <li>
                  You remain liable for all fees and charges incurred prior to
                  termination
                </li>
                <li>
                  Sections that by their nature should survive (including
                  warranties disclaimers, limitations of liability,
                  indemnification, and dispute resolution) will continue to
                  apply
                </li>
              </ul>
            </section>

            {/* Dispute Resolution */}
            <section id="dispute-resolution">
              <h2 className="text-2xl font-semibold mb-4">
                12. Dispute Resolution and Governing Law
              </h2>

              <h3 className="text-xl font-medium mb-3 mt-6">Governing Law</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                These Terms and any disputes arising out of or related to these
                Terms or the Services shall be governed by and construed in
                accordance with the laws of Singapore, without regard to its
                conflict of law principles.
              </p>

              <h3 className="text-xl font-medium mb-3 mt-6">
                Informal Resolution
              </h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Before initiating any formal dispute resolution, you agree to
                first contact us at{" "}
                <a
                  href="mailto:legal@salesduo.io"
                  className="text-primary hover:underline font-medium"
                >
                  legal@salesduo.io
                </a>{" "}
                to attempt to resolve the dispute informally. We will attempt to
                resolve disputes in good faith for at least 30 days before
                either party may initiate formal proceedings.
              </p>

              <h3 className="text-xl font-medium mb-3 mt-6">
                Jurisdiction and Venue
              </h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Any disputes that cannot be resolved informally shall be subject
                to the exclusive jurisdiction of the courts of Singapore. You
                irrevocably consent to the jurisdiction and venue of such courts
                and waive any objection to jurisdiction or venue.
              </p>

              <h3 className="text-xl font-medium mb-3 mt-6">
                Class Action Waiver
              </h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                To the extent permitted by law, all disputes must be brought on
                an individual basis only, and not as a plaintiff or class member
                in any purported class, consolidated, or representative
                proceeding. You waive any right to participate in a class action
                or class-wide arbitration.
              </p>

              <h3 className="text-xl font-medium mb-3 mt-6">Time Limitation</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Any claim or cause of action arising out of or related to these
                Terms or the Services must be filed within one (1) year after
                the claim or cause of action arose, or it will be permanently
                barred.
              </p>
            </section>

            {/* General Provisions */}
            <section id="general">
              <h2 className="text-2xl font-semibold mb-4">
                13. General Provisions
              </h2>

              <h3 className="text-xl font-medium mb-3 mt-6">Entire Agreement</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                These Terms, together with our Privacy Policy and any
                service agreements, constitute the entire agreement between
                you and SalesDuo regarding the Services and supersede all
                prior agreements and understandings.
              </p>

              <h3 className="text-xl font-medium mb-3 mt-6">Severability</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                If any provision of these Terms is found to be invalid or
                unenforceable, the remaining provisions will remain in full
                force and effect, and the invalid provision will be modified
                to the minimum extent necessary to make it valid and
                enforceable.
              </p>

              <h3 className="text-xl font-medium mb-3 mt-6">Waiver</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Our failure to enforce any right or provision in these Terms
                does not constitute a waiver of that right or provision. Any
                waiver must be in writing and signed by an authorized
                representative of SalesDuo.
              </p>

              <h3 className="text-xl font-medium mb-3 mt-6">Assignment</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                You may not assign or transfer these Terms or your rights
                without our prior written consent. We may assign or transfer
                these Terms without restriction. Any attempted assignment in
                violation of this provision is void.
              </p>

              <h3 className="text-xl font-medium mb-3 mt-6">Force Majeure</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                We are not liable for any delay or failure to perform due to
                circumstances beyond our reasonable control, including acts
                of God, war, terrorism, riots, pandemics, natural disasters,
                government actions, or failures of third-party services.
              </p>

              <h3 className="text-xl font-medium mb-3 mt-6">
                Relationship of Parties
              </h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Nothing in these Terms creates a partnership, joint venture,
                employment, or agency relationship between you and SalesDuo.
                You have no authority to bind us or make commitments on our
                behalf.
              </p>

              <h3 className="text-xl font-medium mb-3 mt-6">Notices</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                We may provide notices to you via email, postal mail, or
                postings on our website. Notices to us must be sent to the
                contact information provided below.
              </p>

              <h3 className="text-xl font-medium mb-3 mt-6">English Language</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                These Terms are written in English. Any translations are
                provided for convenience only. In case of conflicts, the
                English version prevails.
              </p>
            </section>

            {/* Contact Information */}
            <section id="contact">
              <h2 className="text-2xl font-semibold mb-4">
                14. Contact Information & Data Protection Officer
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                If you have questions about these Terms of Service, please
                contact us:
              </p>
              <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
                <div className="text-sm text-foreground/80 space-y-4">
                  <div>
                    <p className="font-medium mb-1">Legal & Terms Inquiries</p>
                    <a
                      href="mailto:legal@salesduo.io"
                      className="text-primary hover:underline"
                    >
                      legal@salesduo.io
                    </a>
                  </div>
                  <div>
                    <p className="font-medium mb-1">Data Protection Officer (DPO)</p>
                    <p className="mb-1">For privacy, data protection, and GDPR/PDPA compliance matters:</p>
                    <a
                      href="mailto:dpo@salesduo.io"
                      className="text-primary hover:underline"
                    >
                      dpo@salesduo.io
                    </a>
                  </div>
                  <div>
                    <p className="font-medium mb-1">Mailing Address</p>
                    <p>SalesDuo Pte. Ltd.</p>
                    <p>Attn: Data Protection Officer</p>
                    <p>3012 Bedok Industrial Park E #02-2072</p>
                    <p>Singapore 489978</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Navigation Links */}
          <div className="mt-12 pt-8 border-t border-border flex gap-6">
            <Link
              href="/"
              className="text-primary hover:underline inline-flex items-center gap-2"
            >
              ← Back to Home
            </Link>
            <Link
              href="/privacy"
              className="text-primary hover:underline inline-flex items-center gap-2"
            >
              View Privacy Policy →
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
