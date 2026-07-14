import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | DeepLearnHQ",
  description:
    "Read the terms and conditions governing your use of the DeepLearnHQ website and services.",
};

export default function TermsOfUsePage() {
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
            <span className="text-white">Terms of Service</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Terms of <span className="text-[#1E6FD9]">Service</span>
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
              These Terms of Service (&quot;Agreement&quot;) constitute a legally binding agreement
              between DeepLearnHQ, Inc. (&quot;DeepLearnHQ,&quot; &quot;we,&quot; &quot;us,&quot;
              &quot;our,&quot; or &quot;Company&quot;) and you (&quot;User,&quot; &quot;you,&quot;
              or &quot;your&quot;). By accessing or using our website, products, and services,
              including but not limited to SeekhoAI, DoHuub, BehaveBridge, and UrgentCareX, you
              agree to be bound by the terms and conditions of this Agreement. If you do not agree
              to these terms, please do not use our services.
            </p>

            {/* Section 1 */}
            <div>
              <h2 className="text-2xl font-bold text-[#0B0C0D] mb-6">
                1. Use License and Restrictions
              </h2>
              <div className="space-y-5">
                <div>
                  <h3 className="text-lg font-semibold text-[#0B0C0D] mb-2">
                    1.1 Grant of License
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We grant you a limited, non-exclusive, non-transferable, revocable license to
                    access and use our website and services solely for your personal or business
                    purposes in accordance with this Agreement.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0B0C0D] mb-2">
                    1.2 Permitted Use
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-3">You may:</p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600 leading-relaxed">
                    <li>Access and view content for personal or business use</li>
                    <li>Create an account and use features made available to you</li>
                    <li>Download materials expressly provided for download</li>
                    <li>Use our services in compliance with all applicable laws</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0B0C0D] mb-2">
                    1.3 Prohibited Use
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-3">You may not:</p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600 leading-relaxed">
                    <li>Reproduce, distribute, or transmit any content without written permission</li>
                    <li>
                      Reverse engineer, decompile, disassemble, or attempt to derive the source
                      code of our services
                    </li>
                    <li>Use automated tools, bots, or scrapers to access our services</li>
                    <li>
                      Access our services for competitive analysis or benchmarking without
                      permission
                    </li>
                    <li>
                      Attempt to gain unauthorized access to our systems or networks
                    </li>
                    <li>Interfere with the operation of our services or infrastructure</li>
                    <li>Use our services to transmit malware, viruses, or harmful code</li>
                    <li>Harass, threaten, abuse, or defame any person or entity</li>
                    <li>
                      Use our services for illegal purposes or in violation of any applicable law
                    </li>
                    <li>
                      Violate the intellectual property rights of DeepLearnHQ or third parties
                    </li>
                    <li>
                      Collect or solicit personal information from other users without consent
                    </li>
                    <li>Impersonate or misrepresent your identity or affiliation</li>
                    <li>Engage in data mining or unauthorized data collection</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-2xl font-bold text-[#0B0C0D] mb-6">
                2. Intellectual Property Rights
              </h2>
              <div className="space-y-5">
                <div>
                  <h3 className="text-lg font-semibold text-[#0B0C0D] mb-2">
                    2.1 Our Intellectual Property
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    All content, materials, designs, technologies, software, code, algorithms, and
                    other intellectual property on our website and services (&quot;Company IP&quot;)
                    are owned by or licensed to DeepLearnHQ. This includes but is not limited to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600 leading-relaxed">
                    <li>Website design and layout</li>
                    <li>Product software and code</li>
                    <li>Instructional content on SeekhoAI</li>
                    <li>Course materials and learning resources</li>
                    <li>Trademarks, logos, and brand assets</li>
                    <li>Patents and proprietary processes</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0B0C0D] mb-2">
                    2.2 Your IP and Content
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    You retain ownership of any content, data, or materials you create, upload, or
                    submit (&quot;User Content&quot;). However, by submitting User Content to our
                    services, you grant DeepLearnHQ a worldwide, royalty-free, perpetual,
                    irrevocable license to use, reproduce, modify, distribute, and display your
                    User Content for the purpose of providing, improving, and marketing our
                    services.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0B0C0D] mb-2">
                    2.3 License Restrictions
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    Except as explicitly stated in this Agreement, you may not:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600 leading-relaxed">
                    <li>
                      Copy, modify, adapt, translate, or create derivative works of Company IP
                    </li>
                    <li>Sell, rent, lease, license, or otherwise exploit Company IP</li>
                    <li>Remove or alter any proprietary notices or labels</li>
                    <li>Use Company IP in any manner that violates applicable law</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0B0C0D] mb-2">
                    2.4 Third-Party Content
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our services may contain or reference content from third parties. Use of
                    third-party content is subject to the rights and restrictions of those third
                    parties. We do not guarantee the accuracy, completeness, or legality of
                    third-party content.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-2xl font-bold text-[#0B0C0D] mb-6">
                3. User Accounts and Responsibilities
              </h2>
              <div className="space-y-5">
                <div>
                  <h3 className="text-lg font-semibold text-[#0B0C0D] mb-2">
                    3.1 Account Creation
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    You are responsible for maintaining the confidentiality of your account
                    credentials (username, password, email). You are fully responsible for all
                    activities conducted through your account.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0B0C0D] mb-2">
                    3.2 Accurate Information
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    You agree to provide accurate, current, and complete information when creating
                    your account. You are responsible for updating information to keep it accurate.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0B0C0D] mb-2">
                    3.3 Prohibited Accounts
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    You may not create accounts for:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600 leading-relaxed">
                    <li>
                      Individuals under the age of 13 (or the applicable age of digital consent in
                      your jurisdiction)
                    </li>
                    <li>Anyone for whom you are not authorized to provide consent</li>
                    <li>
                      Multiple accounts for the same individual without written permission
                    </li>
                    <li>Deceptive or fraudulent purposes</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0B0C0D] mb-2">
                    3.4 Account Termination
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We reserve the right to suspend or terminate your account at any time, with or
                    without cause, if we believe you have violated this Agreement or engaged in
                    conduct harmful to our services, other users, or our business.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-2xl font-bold text-[#0B0C0D] mb-6">
                4. Limitation of Liability
              </h2>
              <div className="space-y-5">
                <div>
                  <h3 className="text-lg font-semibold text-[#0B0C0D] mb-2">
                    4.1 Disclaimer of Warranties
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    OUR WEBSITE AND SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS
                    AVAILABLE&quot; WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED. WE DISCLAIM
                    ALL IMPLIED WARRANTIES, INCLUDING BUT NOT LIMITED TO WARRANTIES OF
                    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0B0C0D] mb-2">
                    4.2 No Guarantee of Results
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    We do not guarantee that:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600 leading-relaxed">
                    <li>Our services will be error-free, uninterrupted, or secure</li>
                    <li>Our services will meet your specific requirements</li>
                    <li>
                      Users will achieve specific learning outcomes or business results
                    </li>
                    <li>
                      The accuracy, completeness, or reliability of any content or information
                      provided
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0B0C0D] mb-2">
                    4.3 Liability Limits
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    TO THE FULLEST EXTENT PERMITTED BY LAW, DEEPLEARNAHQ SHALL NOT BE LIABLE FOR:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600 leading-relaxed mb-3">
                    <li>
                      Indirect, incidental, special, consequential, punitive, or exemplary damages
                    </li>
                    <li>Loss of profits, revenue, data, or business opportunities</li>
                    <li>Damage to reputation or goodwill</li>
                    <li>Cost of substitute goods or services</li>
                    <li>Damages arising from your use or inability to use our services</li>
                  </ul>
                  <p className="text-gray-600 leading-relaxed">
                    EXCEPT WHERE PROHIBITED BY LAW, OUR TOTAL LIABILITY FOR ANY CLAIM SHALL NOT
                    EXCEED THE AMOUNT YOU PAID TO DEEPLEARNAHQ IN THE 12 MONTHS PRECEDING THE
                    CLAIM, OR $100, WHICHEVER IS LESS.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0B0C0D] mb-2">
                    4.4 Essential Terms
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Some jurisdictions do not allow the exclusion of certain warranties or
                    limitations of liability. If such limitations are unenforceable in your
                    jurisdiction, DeepLearnHQ&apos;s liability shall be limited to the greatest
                    extent permitted by law.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-2xl font-bold text-[#0B0C0D] mb-4">
                5. Indemnification
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You agree to indemnify, defend, and hold harmless DeepLearnHQ, its officers,
                directors, employees, agents, and affiliates from any claims, liabilities, damages,
                and costs (including reasonable attorneys&apos; fees) arising from:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 leading-relaxed">
                <li>Your violation of this Agreement or applicable law</li>
                <li>Your use of our services in an unauthorized or unlawful manner</li>
                <li>Your User Content or data</li>
                <li>Your infringement of any third-party intellectual property rights</li>
                <li>Any harm caused by your conduct or activities</li>
              </ul>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-2xl font-bold text-[#0B0C0D] mb-6">
                6. Termination
              </h2>
              <div className="space-y-5">
                <div>
                  <h3 className="text-lg font-semibold text-[#0B0C0D] mb-2">
                    6.1 Your Termination Rights
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    You may stop using our services at any time. Upon request, we will delete your
                    account and associated data subject to legal retention requirements.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0B0C0D] mb-2">
                    6.2 Our Termination Rights
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    We may terminate your access to our services at any time, with or without
                    cause, by providing notice to you. Cause includes:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600 leading-relaxed">
                    <li>Violation of this Agreement</li>
                    <li>Engaging in illegal or harmful conduct</li>
                    <li>Non-payment of fees (for paid services)</li>
                    <li>Violation of third-party rights</li>
                    <li>Conduct that negatively impacts our services or user experience</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0B0C0D] mb-2">
                    6.3 Effects of Termination
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-3">Upon termination:</p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600 leading-relaxed">
                    <li>Your right to use our services ceases immediately</li>
                    <li>Your account and associated content may be deleted</li>
                    <li>
                      Sections regarding intellectual property, limitation of liability, and
                      governing law survive termination
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-2xl font-bold text-[#0B0C0D] mb-6">
                7. Governing Law and Jurisdiction
              </h2>
              <div className="space-y-5">
                <div>
                  <h3 className="text-lg font-semibold text-[#0B0C0D] mb-2">
                    7.1 Governing Law
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    This Agreement shall be governed by and construed in accordance with the laws
                    of the State of Wisconsin, without regard to its conflict of law principles.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0B0C0D] mb-2">
                    7.2 Jurisdiction and Venue
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    You agree that any legal action or proceeding arising under or relating to this
                    Agreement shall be brought exclusively in the federal or state courts located in
                    Dane County, Wisconsin. You consent to the personal jurisdiction and venue of
                    these courts.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0B0C0D] mb-2">
                    7.3 Dispute Resolution
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Before initiating legal proceedings, we encourage you to contact us to attempt
                    to resolve any dispute. If a dispute cannot be resolved through negotiation,
                    either party may pursue legal remedies as permitted by law.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="text-2xl font-bold text-[#0B0C0D] mb-4">
                8. Modifications to Terms
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to modify this Agreement at any time. Material changes will be
                posted on our website with an updated &quot;Effective Date.&quot; Your continued use
                of our services following the posting of modified terms constitutes your acceptance
                of the changes. If you do not agree to modified terms, you must stop using our
                services.
              </p>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="text-2xl font-bold text-[#0B0C0D] mb-6">
                9. Service Availability and Modifications
              </h2>
              <div className="space-y-5">
                <div>
                  <h3 className="text-lg font-semibold text-[#0B0C0D] mb-2">
                    9.1 No Guarantee of Availability
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We do not guarantee continuous, uninterrupted access to our services. We may
                    perform maintenance, upgrades, or modifications that temporarily interrupt
                    service.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0B0C0D] mb-2">
                    9.2 Right to Modify Services
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We reserve the right to modify, suspend, or discontinue any feature or service
                    at any time, with or without notice, subject to applicable law.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0B0C0D] mb-2">
                    9.3 Suspension and Downtime
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We are not liable for service interruptions, downtime, data loss, or any
                    damages resulting from maintenance or modifications.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 10 */}
            <div>
              <h2 className="text-2xl font-bold text-[#0B0C0D] mb-6">
                10. Payment Terms
              </h2>
              <div className="space-y-5">
                <div>
                  <h3 className="text-lg font-semibold text-[#0B0C0D] mb-2">10.1 Fees</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Prices for paid services are as stated on our website. We may change fees with
                    30 days&apos; notice. Continued use of our services after fee changes
                    constitutes acceptance.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0B0C0D] mb-2">10.2 Billing</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We will bill your designated payment method on the schedule you select. You are
                    responsible for maintaining accurate payment information.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0B0C0D] mb-2">10.3 Refunds</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Refund policies are as stated in the specific service terms. Unless otherwise
                    stated, fees are non-refundable.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0B0C0D] mb-2">10.4 Taxes</h3>
                  <p className="text-gray-600 leading-relaxed">
                    You are responsible for any applicable sales tax, VAT, or other taxes. We will
                    collect taxes as required by law.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 11 */}
            <div>
              <h2 className="text-2xl font-bold text-[#0B0C0D] mb-4">
                11. Third-Party Links and Services
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Our website may contain links to third-party websites and services. We are not
                responsible for the content, accuracy, or practices of third-party sites. Your use
                of third-party services is governed by their terms and privacy policies, not ours.
              </p>
            </div>

            {/* Section 12 */}
            <div>
              <h2 className="text-2xl font-bold text-[#0B0C0D] mb-4">
                12. Feedback and Suggestions
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Any feedback, suggestions, or ideas you provide to DeepLearnHQ
                (&quot;Feedback&quot;) may be used by us without obligation or compensation to you.
                You grant DeepLearnHQ a worldwide, royalty-free license to use your Feedback in any
                manner.
              </p>
            </div>

            {/* Section 13 */}
            <div>
              <h2 className="text-2xl font-bold text-[#0B0C0D] mb-4">
                13. Severability
              </h2>
              <p className="text-gray-600 leading-relaxed">
                If any provision of this Agreement is found to be invalid, unenforceable, or
                illegal, that provision shall be modified to the minimum extent necessary to make it
                valid, or if that is not possible, severed. The remaining provisions shall remain in
                full force and effect.
              </p>
            </div>

            {/* Section 14 */}
            <div>
              <h2 className="text-2xl font-bold text-[#0B0C0D] mb-4">
                14. Entire Agreement
              </h2>
              <p className="text-gray-600 leading-relaxed">
                This Agreement, together with our Privacy Policy and any other agreements
                referenced herein, constitutes the entire agreement between you and DeepLearnHQ
                regarding your use of our services and supersedes all prior and contemporaneous
                understandings, whether written or oral.
              </p>
            </div>

            {/* Section 15 */}
            <div>
              <h2 className="text-2xl font-bold text-[#0B0C0D] mb-4">
                15. Contact Information
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have questions about this Agreement, our terms, or wish to report a
                violation, please contact us:
              </p>
              <div className="bg-gray-50 rounded-xl p-6 space-y-2">
                <p className="text-[#0B0C0D] font-semibold">DeepLearnHQ, Inc.</p>
                <p className="text-gray-600 text-sm">
                  Email:{" "}
                  <a
                    href="mailto:legal@deeplearnahq.com"
                    className="text-[#1E6FD9] hover:underline"
                  >
                    legal@deeplearnahq.com
                  </a>
                </p>
                <p className="text-gray-600 text-sm">Madison, Wisconsin, United States</p>
                <p className="text-gray-600 text-sm mt-3">
                  <strong className="text-[#0B0C0D]">General Inquiries:</strong>{" "}
                  <a
                    href="mailto:info@deeplearnahq.com"
                    className="text-[#1E6FD9] hover:underline"
                  >
                    info@deeplearnahq.com
                  </a>
                </p>
              </div>
            </div>

            {/* Section 16 */}
            <div>
              <h2 className="text-2xl font-bold text-[#0B0C0D] mb-4">
                16. Waiver of Jury Trial and Class Action
              </h2>
              <p className="text-gray-600 leading-relaxed">
                TO THE EXTENT PERMITTED BY LAW, YOU AND DEEPLEARNAHQ WAIVE THE RIGHT TO A JURY
                TRIAL. YOU ALSO WAIVE THE RIGHT TO PARTICIPATE IN ANY CLASS ACTION, CLASS
                ARBITRATION, OR REPRESENTATIVE ACTION AGAINST DEEPLEARNAHQ.
              </p>
            </div>

            {/* Closing acknowledgment */}
            <div className="border-t border-gray-200 pt-8">
              <p className="text-gray-600 leading-relaxed italic">
                By using DeepLearnHQ&apos;s website and services, you acknowledge that you have
                read this Agreement, understand it, and agree to be bound by its terms.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
