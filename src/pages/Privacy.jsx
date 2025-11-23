import React from 'react';

const Privacy = () => {
  return (
    <div className="max-w-3xl mx-auto bg-amber-100 p-6 space-y-6 font-sans text-gray-800">
      <h1 className="text-3xl font-bold">Privacy Policy</h1>
      
      <p>
        At <strong>FilmFusion Pro</strong>, your privacy is very important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our website.
      </p>

      <section>
        <h2 className="text-xl font-semibold">1. Information We Collect</h2>
        <ul className="list-disc list-inside">
          <li>Personal information such as your name, email address, and profile picture when you register or login.</li>
          <li>Non-personal information such as your browser type, device, or IP address for improving website performance.</li>
          <li>Movie preferences, collections, and watchlist data to enhance your user experience.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">2. How We Use Your Information</h2>
        <ul className="list-disc list-inside">
          <li>To provide and personalize your experience on FilmFusion Pro.</li>
          <li>To improve our website features and performance.</li>
          <li>To communicate with you regarding updates, support, or new features.</li>
          <li>To protect against fraudulent or unauthorized activity.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">3. Sharing Your Information</h2>
        <p>
          We respect your privacy and will not sell or rent your personal information to third parties. We may share information with trusted service providers to help operate the website or provide services, under strict confidentiality agreements.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">4. Cookies and Tracking</h2>
        <p>
          FilmFusion Pro may use cookies and similar technologies to enhance user experience, analyze usage patterns, and deliver relevant content. You can manage cookies through your browser settings.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">5. Data Security</h2>
        <p>
          We implement reasonable security measures to protect your personal information. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">6. Your Rights</h2>
        <ul className="list-disc list-inside">
          <li>You can view and update your account information anytime.</li>
          <li>You may request deletion of your personal data by contacting our support team.</li>
          <li>You have the right to opt out of promotional emails and communications.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">7. Changes to Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. All changes will be posted on this page, and your continued use of FilmFusion Pro constitutes acceptance of the updated policy.
        </p>
      </section>

      <p className="font-semibold">
        If you have any questions about this Privacy Policy, please contact us at <strong>support@filmfusionpro.com</strong>.
      </p>
    </div>
  );
};

export default Privacy;
