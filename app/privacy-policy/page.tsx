"use client";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#030712] text-white">
      <section className="max-w-[900px] mx-auto w-full px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-display mb-6">
          <span className="gradient-text">Privacy Policy</span>
        </h1>
        <p className="text-sm text-white/70 mb-8">
          <strong>Effective date:</strong> March 18, 2026
        </p>

        <p className="text-white/80 leading-relaxed mb-6">
          Lorem ("we", "our", or "us") operates the website
          {" "}
          <span className="text-white/80">https://www.jusrlorem.com/</span>.
        </p>

        <p className="text-white/80 leading-relaxed mb-10">
          This Privacy Policy describes how we collect, use, and protect your
          information when you use our services, including when you log in via
          third-party platforms such as Facebook.
        </p>

        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-display mb-3">1. Information We Collect</h2>
            <p className="text-white/80 mb-4">
              We may collect the following types of information:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-white/80">
              <li>
                <strong>Personal Information:</strong> Name, email address
              </li>
              <li>
                <strong>Social Login Data:</strong> Information provided by third-party
                login providers (such as Facebook), including your profile name and
                basic account information
              </li>
              <li>
                <strong>Messaging Data:</strong> Messages you send via Facebook
                Messenger when interacting with our chatbot
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display mb-3">2. How We Use Your Information</h2>
            <p className="text-white/80 mb-4">
              We use the collected information for the following purposes:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-white/80">
              <li>To authenticate and manage user accounts</li>
              <li>To operate and improve our chatbot services on Facebook Messenger</li>
              <li>
                To automatically respond to user messages and provide customer support
              </li>
              <li>To communicate with users when necessary</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display mb-3">3. Data Sharing</h2>
            <p className="text-white/80 mb-4">We do not sell your personal data.</p>
            <p className="text-white/80 mb-4">
              We may share your data with trusted third-party services only when
              necessary to operate our services, such as:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-white/80">
              <li>Hosting and infrastructure providers</li>
              <li>Analytics tools (if applicable)</li>
              <li>Facebook platform services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display mb-3">4. Data Retention</h2>
            <p className="text-white/80">
              We retain your information only as long as necessary to provide our
              services or comply with legal obligations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display mb-3">5. Your Rights</h2>
            <p className="text-white/80 mb-4">You have the right to:</p>
            <ul className="list-disc pl-5 space-y-2 text-white/80">
              <li>Request access to your personal data</li>
              <li>Request correction of your data</li>
              <li>Request deletion of your data</li>
            </ul>
            <p className="text-white/80 mt-4">
              Please refer to the Data Deletion section below for instructions on how
              to request deletion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display mb-3">6. Data Security</h2>
            <p className="text-white/80">
              We take reasonable measures to protect your information from
              unauthorized access, disclosure, or misuse.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display mb-3">7. Contact Us</h2>
            <p className="text-white/80">
              If you have any questions about this Privacy Policy or your data,
              please contact us at:
            </p>
            <p className="text-white/80 mt-2">
              Email: taind2512@gmail.com
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display mb-3">8. Updates to This Policy</h2>
            <p className="text-white/80">
              We may update this Privacy Policy from time to time. Changes will be
              posted on this page with an updated effective date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display mb-3">9. Data Deletion</h2>
            <p className="text-white/80">
              If you would like to request deletion of your personal data, please
              refer to our Data Deletion instructions here:
            </p>
            <p className="text-white/80 mt-2">
              https://www.jusrlorem.com/data-deletion
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
