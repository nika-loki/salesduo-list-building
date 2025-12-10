import type { Metadata } from 'next';
import Link from 'next/link';
import { SimpleNavbar } from '@/components/simple-navbar';

export const metadata: Metadata = {
  title: 'Privacy Policy | SalesDuo',
  description: 'Learn how SalesDuo collects, uses, and protects your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <SimpleNavbar />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground">
              Effective Date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Table of Contents */}
          <nav className="bg-muted/30 p-6 rounded-lg border border-border mb-12">
            <h2 className="text-lg font-semibold mb-4">Table of Contents</h2>
            <ol className="space-y-2 text-sm">
              <li><a href="#introduction" className="text-primary hover:underline">1. Introduction</a></li>
              <li><a href="#information-we-collect" className="text-primary hover:underline">2. Information We Collect</a></li>
              <li><a href="#how-we-use" className="text-primary hover:underline">3. How We Use Your Information</a></li>
              <li><a href="#legal-basis" className="text-primary hover:underline">4. Legal Basis for Processing (GDPR & PDPA)</a></li>
              <li><a href="#how-we-share" className="text-primary hover:underline">5. How We Share Your Information</a></li>
              <li><a href="#data-retention" className="text-primary hover:underline">6. Data Retention</a></li>
              <li><a href="#your-rights" className="text-primary hover:underline">7. Your Rights and Choices</a></li>
              <li><a href="#security" className="text-primary hover:underline">8. Security</a></li>
              <li><a href="#data-breach" className="text-primary hover:underline">9. Data Breach Notification</a></li>
              <li><a href="#international-transfers" className="text-primary hover:underline">10. International Data Transfers</a></li>
              <li><a href="#children" className="text-primary hover:underline">11. Children's Privacy</a></li>
              <li><a href="#third-party-links" className="text-primary hover:underline">12. Third-Party Links</a></li>
              <li><a href="#changes" className="text-primary hover:underline">13. Changes to This Privacy Policy</a></li>
              <li><a href="#california" className="text-primary hover:underline">14. California Privacy Rights</a></li>
              <li><a href="#contact" className="text-primary hover:underline">15. Contact Us</a></li>
            </ol>
          </nav>

          {/* Content */}
          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-12">

            {/* Introduction */}
            <section id="introduction">
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                SalesDuo Pte. Ltd. ("we," "our," or "us") provides list-building and lead enrichment services. This Privacy Policy describes how we collect, use, disclose, and protect personal information in compliance with:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-4">
                <li>The General Data Protection Regulation (GDPR) for users in the European Economic Area</li>
                <li>The Personal Data Protection Act 2012 (PDPA) for users in Singapore</li>
                <li>The California Consumer Privacy Act (CCPA) for users in California</li>
                <li>Other applicable data protection laws worldwide</li>
              </ul>
              <p className="text-foreground/80 leading-relaxed mb-4">
                By using our Services, you agree to the collection and use of information in accordance with this policy. If you do not agree with this policy, please do not use our Services.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-4">
                <strong>Data Controller:</strong> SalesDuo Pte. Ltd., 3012 Bedok Industrial Park E #02-2072, Singapore 489978, is the data controller responsible for your personal information.
              </p>
            </section>

            {/* Information We Collect */}
            <section id="information-we-collect">
              <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>

              <h3 className="text-xl font-medium mb-3 mt-6">A. Information You Provide</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                We collect information you directly provide when you:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-4">
                <li>Create an account or purchase credits</li>
                <li>Fill out forms on our website</li>
                <li>Communicate with us via email or other channels</li>
                <li>Subscribe to our newsletter or marketing communications</li>
              </ul>
              <p className="text-foreground/80 leading-relaxed mb-4">
                This may include your <strong>name</strong>, <strong>email address</strong>, <strong>company name</strong>, <strong>phone number</strong>, <strong>payment information</strong>, and any other information you choose to provide.
              </p>

              <h3 className="text-xl font-medium mb-3 mt-6">B. Information Collected Automatically</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                When you access our services, we automatically collect:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-4">
                <li><strong>Device information:</strong> Browser type, operating system, device identifiers</li>
                <li><strong>Log data:</strong> IP address, access times, pages viewed, referring URLs</li>
                <li><strong>Cookies and similar technologies:</strong> Session data, preferences, authentication tokens</li>
              </ul>

              <h3 className="text-xl font-medium mb-3 mt-6">Cookies and Tracking Technologies</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                We use cookies and similar tracking technologies to enhance your experience and analyze usage:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-4">
                <li><strong>Essential Cookies:</strong> Required for core functionality such as authentication, session management, and security</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how users interact with our Services to improve user experience</li>
                <li><strong>Advertising and Tracking Technologies:</strong> We use Meta Pixel and similar tracking technologies to measure advertising campaign effectiveness, understand user behavior, and deliver relevant advertisements</li>
              </ul>
              <p className="text-foreground/80 leading-relaxed mb-4">
                You can control cookies through your browser settings. You can also:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-4">
                <li>Adjust your ad preferences in your Meta account settings</li>
                <li>Use browser settings to block tracking cookies</li>
                <li>Opt out of interest-based advertising through industry opt-out tools</li>
              </ul>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Note that disabling certain cookies may limit your ability to use some features of our Services.
              </p>

              <h3 className="text-xl font-medium mb-3 mt-6">C. Information from Other Sources</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                We may receive information about you from other sources, such as publicly available databases, marketing partners, or when you interact with our social media pages. We combine this with information we collect directly.
              </p>
            </section>

            {/* How We Use */}
            <section id="how-we-use">
              <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                We use collected information for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-4">
                <li><strong>Provide Services:</strong> Process payments, manage credits, deliver our list-building services, and communicate with you</li>
                <li><strong>Improve and Develop:</strong> Understand usage patterns, develop new features, and enhance user experience</li>
                <li><strong>Communications:</strong> Send service updates, respond to inquiries, and provide customer support</li>
                <li><strong>Marketing:</strong> Send promotional materials and newsletters (with your consent)</li>
                <li><strong>Security and Fraud Prevention:</strong> Detect and prevent security incidents, abuse, and fraudulent activity</li>
                <li><strong>Legal Compliance:</strong> Comply with applicable laws, regulations, and legal processes</li>
                <li><strong>Business Operations:</strong> Conduct internal research, analytics, and maintain business records</li>
                <li><strong>Commercial Data Products:</strong> Create aggregated, anonymized datasets, market intelligence reports, and data products for commercial purposes</li>
                <li><strong>Advertising and Analytics:</strong> Create lookalike audiences, measure advertising effectiveness, and improve targeting (in hashed or encrypted formats)</li>
              </ul>
            </section>

            {/* Legal Basis for Processing */}
            <section id="legal-basis">
              <h2 className="text-2xl font-semibold mb-4">4. Legal Basis for Processing (GDPR & PDPA)</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                We process your personal information based on the following legal grounds, as required by GDPR Article 6 and Singapore PDPA:
              </p>

              <div className="bg-muted/30 p-6 rounded-lg border border-border mb-6">
                <h3 className="text-lg font-medium mb-4">Legal Bases</h3>
                <ul className="space-y-3 text-sm text-foreground/80">
                  <li><strong>Consent (GDPR Art. 6(1)(a), PDPA s.13):</strong> When you explicitly agree to our processing activities, such as marketing communications or optional data sharing</li>
                  <li><strong>Contract Performance (GDPR Art. 6(1)(b), PDPA s.13(b)):</strong> To fulfill our contractual obligations when you purchase credits or use our Services</li>
                  <li><strong>Legal Obligation (GDPR Art. 6(1)(c), PDPA s.13(b)):</strong> To comply with legal requirements, such as tax laws, financial regulations, or court orders</li>
                  <li><strong>Legitimate Interests (GDPR Art. 6(1)(f), PDPA s.13(d)):</strong> For our business operations, fraud prevention, security, and service improvement, where these interests do not override your rights</li>
                </ul>
              </div>

              <h3 className="text-xl font-medium mb-3 mt-6">Specific Processing Activities</h3>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-4">
                <li><strong>Account creation and service delivery:</strong> Contract performance</li>
                <li><strong>Payment processing:</strong> Contract performance and legal obligation</li>
                <li><strong>Marketing communications:</strong> Consent (you can withdraw at any time)</li>
                <li><strong>Data analytics and service improvement:</strong> Legitimate interests</li>
                <li><strong>Security and fraud prevention:</strong> Legitimate interests and legal obligation</li>
                <li><strong>Commercial data products (aggregated/anonymized):</strong> Legitimate interests</li>
                <li><strong>Advertising and tracking:</strong> Consent (via cookie consent banner)</li>
              </ul>

              <h3 className="text-xl font-medium mb-3 mt-6">Consent Management</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Where we rely on your consent, you have the right to withdraw it at any time without affecting the lawfulness of processing based on consent before withdrawal. To withdraw consent, contact us at{' '}
                <a href="mailto:privacy@salesduo.io" className="text-primary hover:underline font-medium">
                  privacy@salesduo.io
                </a>
                .
              </p>
            </section>

            {/* How We Share */}
            <section id="how-we-share">
              <h2 className="text-2xl font-semibold mb-4">5. How We Share Your Information</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                We may share your information in the following circumstances:
              </p>

              <h3 className="text-xl font-medium mb-3 mt-6">Service Providers</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                We share information with third-party vendors who perform services on our behalf, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-4">
                <li>Cloud hosting and infrastructure providers</li>
                <li>Email delivery and communication services</li>
                <li>Database and storage services</li>
                <li>Customer relationship management platforms</li>
                <li>Payment processing services (Stripe) for handling transactions and subscriptions</li>
              </ul>
              <p className="text-foreground/80 leading-relaxed mb-4">
                These service providers are contractually obligated to protect your information and use it only for the purposes we specify.
              </p>

              <h3 className="text-xl font-medium mb-3 mt-6">Payment Processing</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                We use Stripe to process payments and manage subscriptions. When you make a purchase, your payment information is transmitted directly to Stripe and is subject to Stripe's Privacy Policy. We do not store your complete credit card information on our servers. We receive limited information from Stripe, such as the last four digits of your card and transaction status, to manage your account and provide customer support.
              </p>

              <h3 className="text-xl font-medium mb-3 mt-6">Commercial Data Use and Monetization</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                We may use and share aggregated, anonymized data for commercial purposes, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-4">
                <li><strong>Data Products:</strong> Creating and selling aggregated datasets, market intelligence reports, and industry benchmarks that do not identify individual users</li>
                <li><strong>Advertising Platforms:</strong> Sharing hashed or encrypted information with advertising platforms (such as Meta, Google) for targeted advertising, conversion tracking, and lookalike audience creation</li>
                <li><strong>Research and Analytics:</strong> Collaborating with partners to analyze trends and develop data-driven insights</li>
                <li><strong>Model Training:</strong> Using aggregated data to train AI and machine learning models for commercial applications</li>
              </ul>
              <p className="text-foreground/80 leading-relaxed mb-4">
                <strong>Important:</strong> Aggregated and anonymized data cannot be used to identify you personally. We do not sell personal information that directly identifies you (such as your name, email address, or phone number) to third parties without your explicit consent.
              </p>

              <h3 className="text-xl font-medium mb-3 mt-6">Legal Requirements and Protection</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                We may disclose information when required by law or when we believe disclosure is necessary to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-4">
                <li>Comply with legal obligations, court orders, or government requests</li>
                <li>Enforce our terms of service or other agreements</li>
                <li>Protect the rights, property, or safety of SalesDuo, our users, or the public</li>
                <li>Detect, prevent, or address fraud, security, or technical issues</li>
              </ul>

              <h3 className="text-xl font-medium mb-3 mt-6">Business Transfers</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                If we are involved in a merger, acquisition, financing, reorganization, bankruptcy, or sale of assets, your information may be transferred as part of that transaction. We will provide notice before your information becomes subject to a different privacy policy.
              </p>
            </section>

            {/* Data Retention */}
            <section id="data-retention">
              <h2 className="text-2xl font-semibold mb-4">6. Data Retention</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                We retain different categories of personal information for varying periods based on their purpose and legal requirements:
              </p>

              <div className="bg-muted/30 p-6 rounded-lg border border-border mb-6">
                <h3 className="text-lg font-medium mb-4">Retention Periods</h3>
                <ul className="space-y-3 text-sm text-foreground/80">
                  <li><strong>Account and Profile Data:</strong> Retained while your account is active and for 2 years after account deletion</li>
                  <li><strong>Transaction and Payment Records:</strong> Retained for 7 years to comply with tax and financial regulations</li>
                  <li><strong>Communication Records:</strong> Retained for 3 years for customer service and dispute resolution</li>
                  <li><strong>Marketing Data:</strong> Retained until you opt out, then deleted within 30 days</li>
                  <li><strong>Aggregated and Anonymized Data:</strong> Retained indefinitely for commercial and analytical purposes</li>
                  <li><strong>Legal and Compliance Data:</strong> Retained as required by applicable law or until legal obligations expire</li>
                </ul>
              </div>

              <p className="text-foreground/80 leading-relaxed mb-4">
                The criteria we use to determine retention periods include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-4">
                <li>The duration of your relationship with us</li>
                <li>Legal or regulatory requirements (tax, financial, data protection laws)</li>
                <li>The need to resolve disputes or enforce agreements</li>
                <li>Business operational needs and legitimate interests</li>
              </ul>
              <p className="text-foreground/80 leading-relaxed mb-4">
                When we no longer need your information, we securely delete or anonymize it in accordance with our data retention schedule and applicable laws.
              </p>
            </section>

            {/* Your Rights */}
            <section id="your-rights">
              <h2 className="text-2xl font-semibold mb-4">7. Your Rights and Choices</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>

              <div className="bg-muted/50 p-6 rounded-lg border border-border mb-6">
                <ul className="space-y-3 text-sm text-foreground/80">
                  <li><strong>Right of Access (GDPR Art. 15):</strong> Request a copy of your personal information and details about how we process it</li>
                  <li><strong>Right to Rectification (GDPR Art. 16):</strong> Request correction of inaccurate or incomplete information</li>
                  <li><strong>Right to Erasure (GDPR Art. 17):</strong> Request deletion of your personal information under certain circumstances</li>
                  <li><strong>Right to Data Portability (GDPR Art. 20):</strong> Receive your information in a structured, machine-readable format and transmit it to another controller</li>
                  <li><strong>Right to Object (GDPR Art. 21):</strong> Object to processing based on legitimate interests or for direct marketing purposes</li>
                  <li><strong>Right to Restriction (GDPR Art. 18):</strong> Request restriction of processing under certain conditions</li>
                  <li><strong>Right to Withdraw Consent (GDPR Art. 7):</strong> Withdraw previously given consent at any time (without affecting the lawfulness of processing based on consent before withdrawal)</li>
                  <li><strong>Right to Lodge a Complaint:</strong> File a complaint with your local data protection authority if you believe your rights have been violated</li>
                </ul>
              </div>

              <h3 className="text-xl font-medium mb-3 mt-6">How to Exercise Your Rights</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                To exercise any of these rights, contact us at{' '}
                <a href="mailto:privacy@salesduo.io" className="text-primary hover:underline font-medium">
                  privacy@salesduo.io
                </a>
                . We will respond within one month of receiving a valid request (or as required by applicable law). In complex cases, we may extend this period by an additional two months and will notify you of the extension.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-4">
                We may need to verify your identity before processing certain requests to protect your privacy and security. You will not be discriminated against for exercising your privacy rights.
              </p>

              <h3 className="text-xl font-medium mb-3 mt-6">Consent Withdrawal</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Where we process your personal information based on your consent, you have the right to withdraw that consent at any time. Withdrawal of consent does not affect the lawfulness of processing based on consent before withdrawal.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-4">
                To withdraw consent for specific processing activities, contact us at{' '}
                <a href="mailto:privacy@salesduo.io" className="text-primary hover:underline font-medium">
                  privacy@salesduo.io
                </a>
                {' '}with details of the consent you wish to withdraw.
              </p>

              <h3 className="text-xl font-medium mb-3 mt-6">Marketing Communications</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                You can opt out of marketing emails by clicking the "unsubscribe" link in any promotional email or by contacting us directly.
              </p>
            </section>

            {/* Security */}
            <section id="security">
              <h2 className="text-2xl font-semibold mb-4">8. Security</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                We implement appropriate technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-4">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and monitoring</li>
                <li>Access controls and authentication mechanisms</li>
                <li>Employee training on data protection practices</li>
                <li>Incident response procedures</li>
              </ul>
              <p className="text-foreground/80 leading-relaxed mb-4">
                While we take reasonable precautions, no security system is impenetrable. We cannot guarantee the absolute security of your information.
              </p>
            </section>

            {/* Data Breach Notification */}
            <section id="data-breach">
              <h2 className="text-2xl font-semibold mb-4">9. Data Breach Notification (PDPA & GDPR)</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                In accordance with the Singapore Personal Data Protection Act (PDPA) and GDPR, we have implemented procedures to detect, report, and investigate data breaches.
              </p>

              <h3 className="text-xl font-medium mb-3 mt-6">When We Notify</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                We will notify the relevant supervisory authority and affected individuals of a data breach when:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-4">
                <li><strong>PDPA Requirements:</strong> The breach affects 500 or more individuals, OR the breach is likely to result in significant harm to affected individuals (identity theft, financial loss, damage to reputation, etc.)</li>
                <li><strong>GDPR Requirements:</strong> The breach is likely to result in a risk to the rights and freedoms of individuals</li>
              </ul>

              <h3 className="text-xl font-medium mb-3 mt-6">Notification Timeline</h3>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-4">
                <li><strong>PDPC (Singapore):</strong> Within 3 calendar days of assessing that notification is required</li>
                <li><strong>GDPR Supervisory Authority:</strong> Within 72 hours of becoming aware of the breach</li>
                <li><strong>Affected Individuals:</strong> Without undue delay when the breach is likely to result in high risk to their rights and freedoms</li>
              </ul>

              <h3 className="text-xl font-medium mb-3 mt-6">What We Include</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Data breach notifications will contain:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-4">
                <li>Description of the nature of the breach and categories of data affected</li>
                <li>Approximate number of individuals and data records affected</li>
                <li>Contact information for our Data Protection Officer</li>
                <li>Likely consequences of the breach</li>
                <li>Measures taken or proposed to address the breach and mitigate harm</li>
              </ul>

              <p className="text-foreground/80 leading-relaxed mb-4">
                If you suspect unauthorized access to your account or personal information, contact us immediately at{' '}
                <a href="mailto:privacy@salesduo.io" className="text-primary hover:underline font-medium">
                  privacy@salesduo.io
                </a>
                .
              </p>
            </section>

            {/* International Transfers */}
            <section id="international-transfers">
              <h2 className="text-2xl font-semibold mb-4">10. International Data Transfers</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Your information may be transferred to, stored, and processed in countries other than your country of residence. These countries may have data protection laws different from your jurisdiction.
              </p>
              <h3 className="text-xl font-medium mb-3 mt-6">International Transfer Safeguards</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                When we transfer information internationally, we implement appropriate safeguards to ensure your information receives adequate protection:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-4">
                <li><strong>GDPR Compliance:</strong> Standard Contractual Clauses (SCCs) approved by the European Commission for transfers outside the EEA</li>
                <li><strong>PDPA Compliance (Section 26):</strong> We ensure that recipients outside Singapore provide a standard of protection comparable to the PDPA through:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Contractual obligations requiring equivalent data protection standards</li>
                    <li>Verification that the recipient country has data protection laws substantially similar to Singapore's PDPA</li>
                    <li>Your explicit consent for transfers where other safeguards are not available</li>
                  </ul>
                </li>
                <li><strong>Adequacy Decisions:</strong> Transfers to countries deemed to have adequate data protection by the European Commission or Singapore PDPC</li>
                <li><strong>Binding Corporate Rules:</strong> Where applicable, internal policies ensuring consistent data protection across our organization</li>
              </ul>
            </section>

            {/* Children */}
            <section id="children">
              <h2 className="text-2xl font-semibold mb-4">11. Children's Privacy</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Our services are not directed to individuals under 16 years of age. We do not knowingly collect personal information from children under 16.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-4">
                If we learn we have collected information from a child under 16, we will delete it promptly. If you believe we have collected information from a child, please contact us at{' '}
                <a href="mailto:privacy@salesduo.io" className="text-primary hover:underline">
                  privacy@salesduo.io
                </a>
                .
              </p>
            </section>

            {/* Third-Party Links */}
            <section id="third-party-links">
              <h2 className="text-2xl font-semibold mb-4">12. Third-Party Links</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Our website may contain links to third-party websites or services. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </section>

            {/* Changes */}
            <section id="changes">
              <h2 className="text-2xl font-semibold mb-4">13. Changes to This Privacy Policy</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or business operations.
              </p>

              <h3 className="text-xl font-medium mb-3 mt-6">Material Changes</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                For material changes that significantly affect your rights or how we process your personal information, we will provide at least 30 days' advance notice before the changes take effect. We will notify you by:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-4">
                <li>Updating the "Effective Date" at the top of this policy</li>
                <li>Posting a prominent notice on our website</li>
                <li>Sending you an email notification (if you have provided your email address)</li>
                <li>Displaying an in-app notification (if applicable)</li>
              </ul>

              <h3 className="text-xl font-medium mb-3 mt-6">Non-Material Changes</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                For minor or non-material changes (such as clarifications, formatting updates, or administrative changes), we will update the "Effective Date" and post the revised policy on our website.
              </p>

              <h3 className="text-xl font-medium mb-3 mt-6">Your Acceptance</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Your continued use of our Services after the effective date of changes constitutes your acceptance of the updated Privacy Policy. If you do not agree with the changes, you should discontinue using our Services and contact us to close your account.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-4">
                For users in the European Economic Area, if changes require new consent under GDPR, we will seek your explicit consent before applying the updated policy to your personal information.
              </p>
            </section>

            {/* California Rights */}
            <section id="california">
              <h2 className="text-2xl font-semibold mb-4">14. California Privacy Rights</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                If you are a California resident, the California Consumer Privacy Act (CCPA) provides you with specific rights regarding your personal information:
              </p>

              <h3 className="text-xl font-medium mb-3 mt-6">Your California Rights</h3>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-4">
                <li><strong>Right to Know:</strong> Request disclosure of the categories and specific pieces of personal information we collect, use, and disclose</li>
                <li><strong>Right to Delete:</strong> Request deletion of your personal information</li>
                <li><strong>Right to Opt-Out:</strong> Opt out of the "sale" or "sharing" of personal information for targeted advertising</li>
                <li><strong>Right to Non-Discrimination:</strong> Not receive discriminatory treatment for exercising your privacy rights</li>
              </ul>

              <h3 className="text-xl font-medium mb-3 mt-6">Data Selling and Sharing Disclosure</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Under California law, sharing certain information with advertising platforms for targeted advertising may be considered a "sale" or "sharing" of personal information. We share hashed or encrypted identifiers with advertising platforms (such as Meta, Google) for purposes that may qualify as sales or sharing under CCPA.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-4">
                We do not sell personal information that directly identifies you (such as your name, email address, or precise contact information) to third parties. However, we do commercialize aggregated, anonymized data as described in this policy.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-4">
                To opt out of data sharing for targeted advertising, contact us at{' '}
                <a href="mailto:privacy@salesduo.io" className="text-primary hover:underline font-medium">
                  privacy@salesduo.io
                </a>{' '}
                with "Do Not Sell My Personal Information" in the subject line.
              </p>

              <h3 className="text-xl font-medium mb-3 mt-6">Categories of Information Collected</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                In the past 12 months, we have collected the following categories of personal information:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-4">
                <li>Identifiers (name, email address, IP address)</li>
                <li>Commercial information (purchase history, credit transactions, payment information)</li>
                <li>Internet activity (browsing history, interactions with our website)</li>
                <li>Professional information (company name, job title)</li>
              </ul>

              <p className="text-foreground/80 leading-relaxed mb-4">
                To exercise your California privacy rights, contact us at{' '}
                <a href="mailto:privacy@salesduo.io" className="text-primary hover:underline font-medium">
                  privacy@salesduo.io
                </a>{' '}
                with the subject line "California Privacy Request."
              </p>
            </section>

            {/* Contact */}
            <section id="contact">
              <h2 className="text-2xl font-semibold mb-4">15. Contact Us & Data Protection Officer</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                If you have questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="bg-primary/5 p-6 rounded-lg border border-primary/20 mb-6">
                <div className="text-sm text-foreground/80 space-y-4">
                  <div>
                    <p className="font-medium mb-1">General Privacy Inquiries</p>
                    <a href="mailto:privacy@salesduo.io" className="text-primary hover:underline">
                      privacy@salesduo.io
                    </a>
                  </div>
                  <div>
                    <p className="font-medium mb-1">Data Protection Officer (DPO)</p>
                    <p className="mb-1">As required by Singapore PDPA and GDPR, our designated Data Protection Officer is responsible for ensuring compliance with data protection laws and serving as your point of contact for privacy matters.</p>
                    <a href="mailto:dpo@salesduo.io" className="text-primary hover:underline">
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

              <h3 className="text-xl font-medium mb-3 mt-6">Supervisory Authority Complaints</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                If you believe we have not addressed your concerns appropriately, you have the right to lodge a complaint with the relevant supervisory authority:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-4">
                <li><strong>European Economic Area:</strong> Your local data protection authority</li>
                <li><strong>Singapore:</strong> Personal Data Protection Commission (PDPC) at <a href="https://www.pdpc.gov.sg" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">www.pdpc.gov.sg</a></li>
                <li><strong>California:</strong> California Attorney General</li>
              </ul>
            </section>

          </div>

          {/* Back to Home */}
          <div className="mt-12 pt-8 border-t border-border">
            <Link
              href="/"
              className="text-primary hover:underline inline-flex items-center gap-2"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
