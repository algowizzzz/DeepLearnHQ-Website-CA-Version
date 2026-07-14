import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | DeepLearnHQ",
  description:
    "Read our privacy policy to understand how DeepLearnHQ collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#0B0C0D] pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-[#1E6FD9] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white">Privacy Policy</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Privacy <span className="text-[#1E6FD9]">Policy</span>
          </h1>
          <p className="text-gray-400 mt-4">Last updated: April 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">

            {/* Intro */}
            <p className="text-gray-600 leading-relaxed">
              DeepLearnHQ, Inc. (&quot;DeepLearnHQ,&quot; &quot;we,&quot; &quot;us,&quot; &quot;our,&quot; or
              &quot;Company&quot;) respects your privacy. This Privacy Policy explains how we collect, use,
              disclose, and otherwise process your information across our website, products, and services.
              Please read this policy carefully. By accessing or using DeepLearnHQ&apos;s website and
              services, you agree to the practices described in this Privacy Policy.
            </p>

            {/* Section 1 */}
            <div>
              <h2 className="text-2xl font-bold text-[#0B0C0D] mb-6">
                1. Information We Collect
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-[#0B0C0D] mb-3">
                    1.1 Information You Provide Directly
                  </h3>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      <strong className="text-[#0B0C0D]">Contact Information.</strong>{" "}
                      When you contact us, subscribe to our newsletter, fill out forms, or request
                      information about our services, we collect information such as your name, email
                      address, phone number, company name, job title, and message content.
                    </p>
                    <p>
                      <strong className="text-[#0B0C0D]">Account Information.</strong>{" "}
                      If you create an account to access our services (including SeekhoAI or other
                      products), we collect your username, password, email address, and any profile
                      information you choose to provide.
                    </p>
                    <p>
                      <strong className="text-[#0B0C0D]">Communication Content.</strong>{" "}
                      We collect and retain email messages, support tickets, chat conversations, and
                      other communications you send us.
                    </p>
                    <p>
                      <strong className="text-[#0B0C0D]">Service Usage Information.</strong>{" "}
                      When you use our services, we collect information about your interactions,
                      including course progress (on SeekhoAI), features you use, content you access,
                      searches you conduct, and how long you spend on specific content.
                    </p>
                    <p>
                      <strong className="text-[#0B0C0D]">Payment Information.</strong>{" "}
                      If you make a purchase, we collect billing address, payment method details, and
                      transaction history. Payment processing is handled by third-party payment
                      processors, and we do not store full credit card numbers.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#0B0C0D] mb-3">
                    1.2 Information Collected Automatically
                  </h3>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      <strong className="text-[#0B0C0D]">Device and Browser Information.</strong>{" "}
                      We collect information about your device type, operating system, browser type,
                      and version.
                    </p>
                    <p>
                      <strong className="text-[#0B0C0D]">IP Address and Location.</strong>{" "}
                      We collect your IP address and may infer approximate geographic location based
                      on IP data.
                    </p>
                    <p>
                      <strong className="text-[#0B0C0D]">Cookies and Tracking Technologies.</strong>{" "}
                      We use cookies, web beacons, pixels, and similar technologies to recognize you,
                      remember your preferences, understand how you use our services, and deliver
                      personalized content. See Section 4 (Cookies) for more details.
                    </p>
                    <p>
                      <strong className="text-[#0B0C0D]">Analytics Data.</strong>{" "}
                      We use analytics tools to understand traffic patterns, user behavior, feature
                      usage, and performance metrics. This includes page views, click patterns, time
                      on site, and user flows.
                    </p>
                    <p>
                      <strong className="text-[#0B0C0D]">Log Files.</strong>{" "}
                      Our servers automatically log information about requests, including timestamp,
                      request type, response status, referrer URL, and other technical details.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-2xl font-bold text-[#0B0C0D] mb-4">
                2. How We Use Your Information
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 leading-relaxed">
                <li>
                  <strong className="text-[#0B0C0D]">Providing Services.</strong> To deliver,
                  maintain, and improve our website and products, including SeekhoAI, DoHuub,
                  BehaveBridge, and UrgentCareX.
                </li>
                <li>
                  <strong className="text-[#0B0C0D]">Communication.</strong> To respond to your
                  inquiries, send transactional communications (order confirmations, password
                  resets), and provide customer support.
                </li>
                <li>
                  <strong className="text-[#0B0C0D]">Marketing and Outreach.</strong> To send
                  newsletters, promotional material, product updates, and information about new
                  features or services (you can opt out at any time).
                </li>
                <li>
                  <strong className="text-[#0B0C0D]">Learning and Analytics.</strong> To understand
                  how users interact with our platform, identify usage trends, measure engagement,
                  and optimize user experience.
                </li>
                <li>
                  <strong className="text-[#0B0C0D]">Personalization.</strong> To customize content,
                  recommendations, and learning paths based on your interests and behavior.
                </li>
                <li>
                  <strong className="text-[#0B0C0D]">Research and Development.</strong> To develop
                  new products, features, and services, and to conduct research on learning outcomes
                  and product effectiveness.
                </li>
                <li>
                  <strong className="text-[#0B0C0D]">Security and Compliance.</strong> To detect,
                  prevent, and address fraud, abuse, security issues, and to comply with legal
                  obligations.
                </li>
                <li>
                  <strong className="text-[#0B0C0D]">Legal Obligations.</strong> To comply with
                  applicable laws, regulations, court orders, and government requests.
                </li>
              </ul>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-2xl font-bold text-[#0B0C0D] mb-4">
                3. Information Sharing
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                We do not sell your personal information to third parties. We may share information
                in the following circumstances:
              </p>
              <div className="space-y-5">
                <div>
                  <h3 className="text-lg font-semibold text-[#0B0C0D] mb-2">
                    3.1 Service Providers
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We share information with vendors and service providers who help us operate our
                    website, deliver services, process payments, send email communications, conduct
                    analytics, and provide customer support. These third parties are contractually
                    obligated to use your information only as necessary to provide services to us
                    and are required to maintain confidentiality.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0B0C0D] mb-2">
                    3.2 Business Transfers
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    If DeepLearnHQ is acquired, merged, or enters bankruptcy, your information may
                    be transferred as part of that transaction. We will notify you of any such
                    change and any choices you may have regarding your information.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0B0C0D] mb-2">
                    3.3 Legal Requirements
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We may disclose your information if required by law, court order, government
                    request, or to protect our legal rights, privacy, safety, or property.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0B0C0D] mb-2">
                    3.4 Aggregated and De-identified Data
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We may share aggregated, anonymized, or de-identified data with partners,
                    researchers, and the public for analysis, benchmarking, and research purposes.
                    This data cannot reasonably identify you.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-2xl font-bold text-[#0B0C0D] mb-4">
                4. Cookies and Tracking Technologies
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use cookies and similar tracking technologies to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 leading-relaxed mb-6">
                <li>Remember your preferences and login information</li>
                <li>Understand how you use our services</li>
                <li>Deliver personalized content and recommendations</li>
                <li>Measure advertising effectiveness and marketing campaign performance</li>
                <li>Detect and prevent fraud</li>
              </ul>

              <div className="space-y-5">
                <div>
                  <h3 className="text-lg font-semibold text-[#0B0C0D] mb-3">
                    4.1 Types of Cookies
                  </h3>
                  <div className="space-y-3 text-gray-600 leading-relaxed">
                    <p>
                      <strong className="text-[#0B0C0D]">Essential Cookies.</strong>{" "}
                      Required for the website to function (e.g., authentication, security).
                    </p>
                    <p>
                      <strong className="text-[#0B0C0D]">Functional Cookies.</strong>{" "}
                      Remember your preferences and settings.
                    </p>
                    <p>
                      <strong className="text-[#0B0C0D]">Analytics Cookies.</strong>{" "}
                      Collect information about how you use our website (e.g., Google Analytics).
                    </p>
                    <p>
                      <strong className="text-[#0B0C0D]">Marketing Cookies.</strong>{" "}
                      Track your interactions across websites to deliver targeted advertising.
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0B0C0D] mb-3">
                    4.2 Cookie Preferences
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    Most web browsers allow you to control cookies through browser settings. You can:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600 leading-relaxed mb-3">
                    <li>Delete cookies stored on your device</li>
                    <li>Block all or specific types of cookies</li>
                    <li>Receive notice when cookies are set</li>
                  </ul>
                  <p className="text-gray-600 leading-relaxed">
                    Disabling cookies may affect the functionality of our services. For more
                    information, visit www.allaboutcookies.org or www.youronlinechoices.com.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-2xl font-bold text-[#0B0C0D] mb-4">
                5. Third-Party Services
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our website and services may integrate with or link to third-party services and
                platforms, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 leading-relaxed mb-4">
                <li><strong className="text-[#0B0C0D]">Analytics.</strong> Google Analytics, Mixpanel</li>
                <li><strong className="text-[#0B0C0D]">Payment Processing.</strong> Stripe, PayPal</li>
                <li><strong className="text-[#0B0C0D]">Email Services.</strong> SendGrid, Mailchimp</li>
                <li><strong className="text-[#0B0C0D]">Cloud Infrastructure.</strong> AWS, Google Cloud</li>
                <li>
                  <strong className="text-[#0B0C0D]">Learning Platforms.</strong> External course
                  providers integrated with SeekhoAI
                </li>
                <li><strong className="text-[#0B0C0D]">Communication Tools.</strong> Slack, Zoom</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                We are not responsible for the privacy practices of third-party services. We
                encourage you to review the privacy policies of any third-party services before
                providing them with your information.
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-2xl font-bold text-[#0B0C0D] mb-4">
                6. Data Retention
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We retain your information for as long as necessary to provide services, comply with
                legal obligations, resolve disputes, and enforce our agreements. Retention periods
                vary based on the context:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 leading-relaxed mb-4">
                <li>
                  <strong className="text-[#0B0C0D]">Account Information.</strong> Retained while
                  your account is active and for a reasonable period afterward for backup and legal
                  purposes.
                </li>
                <li>
                  <strong className="text-[#0B0C0D]">Marketing Communications.</strong> Retained
                  until you unsubscribe.
                </li>
                <li>
                  <strong className="text-[#0B0C0D]">Customer Support Records.</strong> Retained
                  for 3 years after the last interaction.
                </li>
                <li>
                  <strong className="text-[#0B0C0D]">Analytics Data.</strong> Typically retained
                  for 25 months.
                </li>
                <li>
                  <strong className="text-[#0B0C0D]">Log Files.</strong> Typically retained for 90
                  days.
                </li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                You may request deletion of your personal information subject to certain legal and
                operational exceptions.
              </p>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-2xl font-bold text-[#0B0C0D] mb-4">
                7. Data Security
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We implement industry-standard technical, administrative, and organizational
                safeguards to protect your information against unauthorized access, alteration,
                disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 leading-relaxed mb-4">
                <li>Encryption in transit (HTTPS/TLS)</li>
                <li>Encryption at rest for sensitive data</li>
                <li>Access controls and authentication mechanisms</li>
                <li>Regular security assessments and vulnerability testing</li>
                <li>Employee training on data privacy and security</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                However, no security measure is completely foolproof. If you believe your account
                has been compromised, please contact us immediately.
              </p>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="text-2xl font-bold text-[#0B0C0D] mb-4">
                8. Your Rights and Choices
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Depending on your location, you may have rights regarding your personal information:
              </p>
              <div className="space-y-5">
                <div>
                  <h3 className="text-lg font-semibold text-[#0B0C0D] mb-2">
                    8.1 Access and Portability
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    You can request a copy of the personal information we hold about you in a
                    portable format.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0B0C0D] mb-2">
                    8.2 Correction and Deletion
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    You can request that we correct inaccurate information or delete your personal
                    information, subject to certain exceptions.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0B0C0D] mb-2">
                    8.3 Opt-Out of Communications
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    You can opt out of marketing communications by clicking the
                    &quot;unsubscribe&quot; link in any email or by updating your preferences in
                    your account settings.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0B0C0D] mb-2">
                    8.4 Cookie Preferences
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    You can control your cookie preferences through your browser settings or by
                    adjusting your preferences on our website.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0B0C0D] mb-2">
                    8.5 California Residents (CCPA)
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    If you are a California resident, you have specific rights under the California
                    Consumer Privacy Act (CCPA), including the right to know what personal
                    information is collected, the right to access, delete, and opt-out of the sale
                    or sharing of personal information.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0B0C0D] mb-2">
                    8.6 EU Residents (GDPR)
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    If you are in the European Union or European Economic Area, you have rights
                    under the General Data Protection Regulation (GDPR), including the right to
                    access, rectification, erasure, restriction, portability, and objection.
                  </p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mt-5">
                To exercise any of these rights, please contact us at{" "}
                <a
                  href="mailto:privacy@deeplearnahq.com"
                  className="text-[#1E6FD9] hover:underline"
                >
                  privacy@deeplearnahq.com
                </a>
                . We will respond to your request within the timeframe required by applicable law.
              </p>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="text-2xl font-bold text-[#0B0C0D] mb-4">
                9. Children&apos;s Privacy
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Our services are not intended for children under the age of 13. We do not knowingly
                collect personal information from children under 13. If we become aware that we
                have collected information from a child under 13, we will take steps to delete such
                information promptly. For information about SeekhoAI&apos;s use by minors in
                educational settings, contact us directly.
              </p>
            </div>

            {/* Section 10 */}
            <div>
              <h2 className="text-2xl font-bold text-[#0B0C0D] mb-4">
                10. International Data Transfers
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                DeepLearnHQ operates globally with offices and team members in Madison, Wisconsin,
                USA and Toronto, Ontario, Canada. Your information may be transferred to, stored in,
                and processed in countries other than your country of residence, which may have data
                protection laws that differ from your home country. By using our services, you consent
                to such transfers.
              </p>
              <p className="text-gray-600 leading-relaxed">
                For individuals in the EU, we rely on appropriate safeguards such as Standard
                Contractual Clauses to ensure adequate protection when transferring personal data
                outside the EU.
              </p>
            </div>

            {/* Section 11 */}
            <div>
              <h2 className="text-2xl font-bold text-[#0B0C0D] mb-4">
                11. Changes to This Privacy Policy
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our
                practices, technology, legal requirements, or other factors. We will post the
                updated policy on our website and update the &quot;Effective Date&quot; at the top
                of this page. If we make material changes that affect your rights or how we use
                your information, we will notify you by email or by posting a prominent notice on
                our website.
              </p>
            </div>

            {/* Section 12 */}
            <div>
              <h2 className="text-2xl font-bold text-[#0B0C0D] mb-4">
                12. Contact Us
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have questions about this Privacy Policy, our privacy practices, or wish to
                exercise your rights, please contact us:
              </p>
              <div className="bg-gray-50 rounded-xl p-6 space-y-2">
                <p className="text-[#0B0C0D] font-semibold">DeepLearnHQ, Inc.</p>
                <p className="text-gray-600 text-sm">
                  Email:{" "}
                  <a
                    href="mailto:privacy@deeplearnahq.com"
                    className="text-[#1E6FD9] hover:underline"
                  >
                    privacy@deeplearnahq.com
                  </a>
                </p>
                <p className="text-gray-600 text-sm">Madison, Wisconsin, United States</p>
                <p className="text-gray-600 text-sm mt-3">
                  <strong className="text-[#0B0C0D]">Data Protection Officer:</strong>{" "}
                  <a
                    href="mailto:dpo@deeplearnahq.com"
                    className="text-[#1E6FD9] hover:underline"
                  >
                    dpo@deeplearnahq.com
                  </a>
                </p>
              </div>
              <p className="text-gray-600 leading-relaxed mt-4">
                We are committed to working with you to resolve any privacy concerns. If you
                believe we have not addressed your concern, you may have the right to lodge a
                complaint with your local data protection authority.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
