import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "Privacy Policy for Lorem Technology services, website, third-party login, and data deletion requests.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#030712] text-white">
      <Header />
      <section className="mx-auto w-full max-w-[900px] px-5 py-20 md:px-8">
        <h1 className="font-display text-5xl md:text-6xl">Privacy Policy</h1>
        <p className="mt-4 text-sm text-white/60">
          <strong>Effective date:</strong> March 18, 2026
        </p>

        <div className="prose-policy mt-10 space-y-10 text-white/80">
          <section>
            <p>
              {site.name} ("we", "our", or "us") operates the website{" "}
              <Link href="/" className="text-[#9fc2ff]">
                {site.url}
              </Link>
              .
            </p>
            <p>
              This Privacy Policy describes how we collect, use, and protect
              information when you use our services, including when you log in
              via third-party platforms such as Facebook.
            </p>
          </section>

          <section>
            <h2>1. Information We Collect</h2>
            <ul>
              <li>
                <strong>Personal Information:</strong> name and email address.
              </li>
              <li>
                <strong>Social Login Data:</strong> profile name and basic
                account information provided by third-party login providers.
              </li>
              <li>
                <strong>Messaging Data:</strong> messages sent through Facebook
                Messenger when interacting with our chatbot services.
              </li>
            </ul>
          </section>

          <section>
            <h2>2. How We Use Your Information</h2>
            <ul>
              <li>To authenticate and manage user accounts.</li>
              <li>To operate and improve chatbot services.</li>
              <li>To respond to user messages and provide support.</li>
              <li>To communicate with users when necessary.</li>
            </ul>
          </section>

          <section>
            <h2>3. Data Sharing</h2>
            <p>We do not sell personal data.</p>
            <p>
              We may share data with trusted third-party services only when
              necessary to operate our services, including hosting providers,
              analytics tools when applicable, and Facebook platform services.
            </p>
          </section>

          <section>
            <h2>4. Data Retention</h2>
            <p>
              We retain information only as long as necessary to provide our
              services or comply with legal obligations.
            </p>
          </section>

          <section>
            <h2>5. Your Rights</h2>
            <p>
              You may request access, correction, or deletion of your personal
              data. Please refer to the{" "}
              <Link href="/data-deletion" className="text-[#9fc2ff]">
                Data Deletion Request
              </Link>{" "}
              page for instructions.
            </p>
          </section>

          <section>
            <h2>6. Data Security</h2>
            <p>
              We take reasonable measures to protect information from
              unauthorized access, disclosure, or misuse.
            </p>
          </section>

          <section>
            <h2>7. Contact Us</h2>
            <p>
              For questions about this policy or your data, contact{" "}
              <a href={`mailto:${site.email}`} className="text-[#9fc2ff]">
                {site.email}
              </a>
              .
            </p>
          </section>

          <section>
            <h2>8. Updates to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will
              be posted on this page with an updated effective date.
            </p>
          </section>
        </div>
      </section>
      <Footer />
    </main>
  );
}
