import React, { useEffect } from "react";

const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Terms and Conditions</h1>
        <p className="text-primary font-medium mb-8">Please Read Carefully</p>

        <div className="prose prose-primary max-w-none text-gray-600 space-y-6 text-sm leading-relaxed">
          <p>
            These Terms and Conditions govern your use of the Better Health Project website, app, and services.
          </p>
          
          <p>
            By accessing or using our services, you agree to these terms.
          </p>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Services Provided</h2>
            <p>
              Better Health Project provides health and lifestyle coaching, educational content, and digital tools designed to support healthier habits.
            </p>
            <p>
              All services are provided for informational and educational purposes only.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3 text-red-600">Not Medical Advice</h2>
            <p>
              Our services do not replace professional medical advice, diagnosis, or treatment.
            </p>
            <p className="font-medium">
              You should always consult a qualified healthcare professional before making changes to your diet, exercise, or lifestyle.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">User Responsibilities</h2>
            <p className="mb-3">By using our services, you agree to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Provide accurate and honest information</li>
              <li>Use services responsibly and lawfully</li>
              <li>Follow guidance at your own discretion</li>
              <li>Take full responsibility for your health decisions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Payments & Access</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Pricing and payment terms are provided before purchase</li>
              <li>Access to services may be limited to active subscriptions or programs</li>
              <li>Digital products and coaching services are non-transferable</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Cancellations & Refunds</h2>
            <p>
              Refund and cancellation policies vary depending on the service purchased and will be clearly outlined at the time of purchase.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Intellectual Property</h2>
            <p>
              All content, materials, and branding provided by Better Health Project remain our intellectual property.
            </p>
            <p>
              You may not reproduce, distribute, or reuse content without written permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Limitation of Liability</h2>
            <p>
              Better Health Project is not liable for any direct or indirect loss resulting from the use or misuse of our services.
            </p>
            <p className="italic">
              Participation is voluntary and undertaken at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Changes to Terms</h2>
            <p>
              We reserve the right to update these Terms and Conditions at any time.
            </p>
            <p>
              Continued use of the services constitutes acceptance of any updates.
            </p>
          </section>

          <section className="pt-8 border-t border-gray-100">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Contact Information</h2>
            <p>
              For questions regarding these terms, please contact:
            </p>
            <p className="font-medium text-gray-900 mt-2">
              Email: hello@betterhealthproject.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
