import React, { useContext } from 'react';
import { ThemeContext } from '../Layouts/ThemeProvider';

const Terms = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className={`max-w-3xl ${theme === "light" ? "bg-gray-100" : "bg-gray-400"}  mx-auto p-6 space-y-6 font-sans text-gray-800`}>
      <h1 className="text-3xl font-bold">Terms and Conditions</h1>
      
      <p>Welcome to <strong>FilmFusion Pro</strong>! By accessing or using our website, you agree to comply with and be bound by the following terms and conditions. Please read them carefully before using our services.</p>

      <section>
        <h2 className="text-xl font-semibold">1. Acceptance of Terms</h2>
        <p>By using FilmFusion Pro, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree, please do not use our website.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">2. Use of Website</h2>
        <ul className="list-disc list-inside">
          <li>FilmFusion Pro is intended for personal, non-commercial use.</li>
          <li>You may browse, search, and manage movies on our platform in accordance with these terms.</li>
          <li>You must not misuse the website or attempt to gain unauthorized access to any part of it.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">3. User Accounts</h2>
        <ul className="list-disc list-inside">
          <li>Certain features require registration and a user account.</li>
          <li>You are responsible for maintaining the confidentiality of your login information.</li>
          <li>You agree to provide accurate and complete information when creating an account.</li>
          <li>We reserve the right to suspend or terminate accounts that violate these terms.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">4. Intellectual Property</h2>
        <p>All content on FilmFusion Pro, including text, images, logos, and movie data, is the property of FilmFusion Pro or its licensors. You may not reproduce, distribute, or create derivative works from our content without prior written permission.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">5. User-Generated Content</h2>
        <p>Users can add movies to their collections and leave suggestions or reviews if applicable. You agree not to post offensive, inappropriate, or illegal content. We reserve the right to remove content that violates these terms.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">6. Limitation of Liability</h2>
        <p>FilmFusion Pro strives to provide accurate movie information, but we are not responsible for errors or omissions. We are not liable for any damages, direct or indirect, resulting from the use of our website.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">7. Privacy</h2>
        <p>Your personal information is handled according to our <strong>Privacy Policy</strong>. By using our website, you consent to the collection and use of your data as described in the privacy terms.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">8. Modifications</h2>
        <p>FilmFusion Pro reserves the right to update or modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on the website. Continued use of the website constitutes acceptance of the updated terms.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">9. Governing Law</h2>
        <p>These terms are governed by the laws of Bangladesh. Any disputes arising from using the website will be subject to the jurisdiction of Bangladeshi courts.</p>
      </section>

      <p className="font-semibold">By using FilmFusion Pro, you agree to these Terms and Conditions.</p>
    </div>
  );
};

export default Terms;
