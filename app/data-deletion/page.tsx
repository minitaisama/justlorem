"use client";

export default function DataDeletionPage() {
  return (
    <main className="min-h-screen bg-[#030712] text-white">
      <section className="max-w-[900px] mx-auto w-full px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-display mb-6">
          <span className="gradient-text">Data Deletion Request</span>
        </h1>
        <p className="text-white/80 leading-relaxed mb-8">
          At Lorem, we respect your privacy and your right to control your
          personal data.
        </p>
        <p className="text-white/80 leading-relaxed mb-10">
          This page explains how you can request the deletion of your data
          associated with our services, including interactions via Facebook
          Messenger.
        </p>

        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-display mb-3">
              1. How to Request Data Deletion
            </h2>
            <p className="text-white/80 mb-4">
              To request deletion of your personal data, please send an email to:
            </p>
            <p className="text-white/80">
              <strong>Email:</strong> taind2512@gmail.com
            </p>
            <p className="text-white/80 mt-4">Your request should include:</p>
            <ul className="list-disc pl-5 space-y-2 text-white/80">
              <li>Your full name</li>
              <li>Your email address</li>
              <li>
                A brief description of your request (e.g., "Request to delete my
                data")
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display mb-3">2. Data We Will Delete</h2>
            <p className="text-white/80 mb-4">
              Upon receiving a valid request, we will delete:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-white/80">
              <li>Your name and email address</li>
              <li>Any data associated with your account</li>
              <li>
                Messages and interactions handled by our Facebook Messenger
                chatbot
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display mb-3">3. Verification Process</h2>
            <p className="text-white/80 mb-4">
              To protect your data, we may require verification before processing
              your request.
            </p>
            <p className="text-white/80 mb-4">Please make sure:</p>
            <ul className="list-disc pl-5 space-y-2 text-white/80">
              <li>You send the request from your registered email address</li>
              <li>Or provide sufficient proof of account ownership</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display mb-3">4. Processing Time</h2>
            <p className="text-white/80">
              We will process all valid requests within <strong>7 days</strong>.
            </p>
            <p className="text-white/80 mt-2">
              In some cases, it may take slightly longer if additional
              verification is required.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display mb-3">5. Confirmation</h2>
            <p className="text-white/80">
              Once your data has been deleted, we will send you a confirmation
              email.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display mb-3">6. Important Notes</h2>
            <ul className="list-disc pl-5 space-y-2 text-white/80">
              <li>
                Some data may be retained if required by law or for legitimate
                business purposes
              </li>
              <li>
                Data processed through Facebook may also be subject to Facebook’s
                own data policies
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display mb-3">7. Contact</h2>
            <p className="text-white/80">
              If you have any questions about data deletion, please contact us:
            </p>
            <p className="text-white/80 mt-2">
              <strong>Email:</strong> taind2512@gmail.com
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display mb-3">Last updated</h2>
            <p className="text-white/80">March 18, 2026</p>
          </section>
        </div>
      </section>
    </main>
  );
}
