import React, { useEffect } from "react";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-primary font-medium mb-8">Your Privacy Matters</p>

        <div className="prose prose-primary max-w-none text-gray-600 space-y-6 text-sm leading-relaxed">
          <p>
            Better Health Project is committed to protecting your privacy and handling your personal information responsibly and transparently.
          </p>
          
          <p>
            This Privacy Policy explains how we collect, use, and protect your information when you use our website, app, or services.
          </p>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Information We Collect</h2>
            <p className="mb-3">We may collect the following information:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Personal details such as name and email address</li>
              <li>Contact information submitted through forms</li>
              <li>Information related to coaching services or enquiries</li>
              <li>App usage and interaction data</li>
              <li>Technical data such as browser type, device, and IP address</li>
            </ul>
            <p className="mt-3 italic">We only collect information necessary to provide our services effectively.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">How We Use Your Information</h2>
            <p className="mb-3">Your information may be used to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Provide coaching services and support</li>
              <li>Respond to enquiries and communications</li>
              <li>Manage your account and access to services</li>
              <li>Improve our website, app, and user experience</li>
              <li>Meet legal or regulatory requirements</li>
            </ul>
            <p className="mt-3 italic">We do not sell or misuse your personal data.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Data Storage & Security</h2>
            <p>
              We take reasonable steps to protect your information using appropriate technical and organisational measures.
            </p>
            <p>
              Access to personal data is limited to authorised individuals only.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Sharing of Information</h2>
            <p className="mb-3">We do not share your personal information with third parties except:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>When required to provide our services (e.g. secure payment processors)</li>
              <li>When legally required</li>
              <li>With trusted service providers who comply with data protection standards</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Cookies</h2>
            <p className="mb-3">Our website may use cookies to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Improve functionality and performance</li>
              <li>Understand how visitors use our site</li>
            </ul>
            <p className="mt-3">You can control cookie preferences through your browser settings.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Your Rights</h2>
            <p className="mb-3">You have the right to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Access your personal data</li>
              <li>Request corrections or updates</li>
              <li>Request deletion of your data where applicable</li>
            </ul>
            <p className="mt-3">To make a request, please contact us using the details below.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or how your data is handled, please contact:
            </p>
            <p className="font-medium text-gray-900 mt-2">
              Email: hello@betterhealthproject.com
            </p>
          </section>

          <section className="pt-8 border-t border-gray-100">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Policy Updates</h2>
            <p>
              This Privacy Policy may be updated from time to time. Any changes will be posted on this page.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
