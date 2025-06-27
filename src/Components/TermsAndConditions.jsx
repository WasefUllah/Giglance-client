import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10 text-base-content">
      <h1 className="text-3xl font-bold mb-6 text-primary">
        Terms & Conditions
      </h1>

      <div className="space-y-4">
        <p>
          Welcome to our freelancing platform. By accessing or using our
          website, you agree to be bound by the terms and conditions described
          below. Please read them carefully.
        </p>

        <h2 className="text-xl font-semibold mt-6">1. User Accounts</h2>
        <p>
          You are responsible for maintaining the confidentiality of your
          account and password. You agree to accept responsibility for all
          activities that occur under your account.
        </p>

        <h2 className="text-xl font-semibold mt-6">
          2. Posting & Bidding Tasks
        </h2>
        <p>
          Users may post tasks or place bids. We do not guarantee the quality or
          timely delivery of any task. All agreements are solely between users.
        </p>

        <h2 className="text-xl font-semibold mt-6">3. Payments</h2>
        <p>
          Our platform is not responsible for handling payments unless otherwise
          specified. Users should make arrangements directly.
        </p>

        <h2 className="text-xl font-semibold mt-6">4. Prohibited Activities</h2>
        <p>
          You may not use the platform for any illegal activities, harassment,
          spam, or to violate intellectual property rights.
        </p>

        <h2 className="text-xl font-semibold mt-6">5. Termination</h2>
        <p>
          We reserve the right to terminate accounts or block access to the
          platform if any user violates these terms.
        </p>

        <h2 className="text-xl font-semibold mt-6">6. Changes to Terms</h2>
        <p>
          We may modify these Terms & Conditions at any time. Your continued use
          of the platform means you accept the updated terms.
        </p>

        <p className="mt-6 italic text-sm">
          If you have any questions about our Terms & Conditions, please contact
          us via the contact page.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
