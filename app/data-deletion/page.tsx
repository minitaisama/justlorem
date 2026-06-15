import type { Metadata } from "next";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Data Deletion Request",
  description:
    "Instructions for requesting deletion of personal data associated with Lorem Technology services and Facebook Messenger interactions.",
  path: "/data-deletion",
});

export default function DataDeletionPage() {
  return (
    <main className="min-h-screen bg-[#030712] text-white">
      <Header />
      <section className="mx-auto w-full max-w-[900px] px-5 py-20 md:px-8">
        <h1 className="font-display text-5xl md:text-6xl">
          Data Deletion Request
        </h1>
        <p className="mt-6 text-lg leading-8 text-white/72">
          At {site.name}, we respect your privacy and your right to control
          personal data associated with our services, including interactions via
          Facebook Messenger.
        </p>

        <div className="prose-policy mt-10 space-y-10 text-white/80">
          <section>
            <h2>1. How to Request Data Deletion</h2>
            <p>
              Send an email to{" "}
              <a href={`mailto:${site.email}`} className="text-[#9fc2ff]">
                {site.email}
              </a>{" "}
              with the subject line "Request to delete my data".
            </p>
            <p>Your request should include your full name and email address.</p>
          </section>

          <section>
            <h2>2. Data We Will Delete</h2>
            <ul>
              <li>Your name and email address.</li>
              <li>Data associated with your account.</li>
              <li>
                Messages and interactions handled by our Facebook Messenger
                chatbot services.
              </li>
            </ul>
          </section>

          <section>
            <h2>3. Verification Process</h2>
            <p>
              To protect your data, we may require verification before
              processing your request. Please send the request from your
              registered email address or provide sufficient proof of account
              ownership.
            </p>
          </section>

          <section>
            <h2>4. Processing Time</h2>
            <p>
              We will process valid requests within <strong>7 days</strong>. In
              some cases, it may take slightly longer if additional verification
              is required.
            </p>
          </section>

          <section>
            <h2>5. Confirmation</h2>
            <p>Once your data has been deleted, we will send a confirmation email.</p>
          </section>

          <section>
            <h2>6. Important Notes</h2>
            <ul>
              <li>
                Some data may be retained if required by law or for legitimate
                business purposes.
              </li>
              <li>
                Data processed through Facebook may also be subject to Facebook's
                own data policies.
              </li>
            </ul>
          </section>

          <section>
            <h2>Last updated</h2>
            <p>March 18, 2026</p>
          </section>
        </div>
      </section>
      <Footer />
    </main>
  );
}
