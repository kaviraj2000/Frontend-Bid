import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-white text-black p-6">
      <h1 className="text-2xl font-bold">Privacy Policy</h1>
      <p>Last Updated: 27-Oct-2024</p>
      <p>
        Thank you for using Kalyan Online Game. We are committed to protecting your personal
        information and your right to privacy. If you have any questions or concerns about this
        Privacy Policy or our practices regarding your personal information, please contact us at{' '}
        <a href="mailto:support@kogame.com" className="text-blue-400">
          support@kogame.com
        </a>.
      </p>

      <h2 className="text-xl font-semibold">1. Information We Collect</h2>
      <p>We collect different types of information to provide and improve our services to you.</p>
      
      <h3 className="font-semibold">1.1 Personal Information</h3>
      <p>Username, email address, and profile information for features like account creation, game progress, and notifications.</p>
      
      <h3 className="font-semibold">1.2 Non-Personal Information</h3>
      <p>Device information, usage data, IP address, and general location data.</p>
      
      <h3 className="font-semibold">1.3 Information Collected Automatically</h3>
      <p>Log and usage data, device data, and unique device identifiers.</p>

      <h2 className="text-xl font-semibold">2. How We Use Your Information</h2>
      <p>We use the information collected for various purposes:</p>
      <ul className="list-disc ml-6">
        <li>To provide, operate, and maintain the app</li>
        <li>To improve and personalize your gaming experience</li>
        <li>To send notifications or updates</li>
        <li>To detect and prevent fraud or abuse</li>
        <li>To analyze usage trends and improve app functionality</li>
      </ul>

      <h2 className="text-xl font-semibold">3. Sharing Your Information</h2>
      <p>We may share your information in the following cases:</p>
      <ul className="list-disc ml-6">
        <li>With service providers</li>
        <li>For legal reasons</li>
        <li>With your consent</li>
      </ul>

      <h2 className="text-xl font-semibold">4. Third-Party Services and Links</h2>
      <p>
        Our app may contain links to third-party websites or services not operated by us. Please
        review their privacy policies before using them.
      </p>

      <h2 className="text-xl font-semibold">5. Data Security</h2>
      <p>
        We implement measures to protect your information, but no electronic storage method is
        100% secure.
      </p>

      <h2 className="text-xl font-semibold">6. Children's Privacy</h2>
      <p>
        Our app is not intended for children under 13. We do not knowingly collect personal
        information from children under 13. If found, we will delete it promptly.
      </p>

      <h2 className="text-xl font-semibold">7. Your Privacy Rights</h2>
      <p>
        Depending on your location, you may have certain rights regarding your personal
        information. Please contact us to exercise these rights.
      </p>

      <h2 className="text-xl font-semibold">8. Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy periodically. Changes will be posted here, with the
        "Last Updated" date modified accordingly.
      </p>

      <h2 className="text-xl font-semibold">9. Contact Us</h2>
      <p>If you have any questions, please contact us at:</p>
      <p>
        <a href="mailto:support@kogame.com" className="text-blue-400">
          support@kogame.com
        </a>
      </p>
    </div>
  );
};

export default PrivacyPolicy;
