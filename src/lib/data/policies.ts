export type PolicyContent =
  | { type: 'paragraph'; text: string }
  | { type: 'bullets'; items: string[] };

export type PolicySection = {
  heading: string;
  content: PolicyContent[];
};

export type Policy = {
  appName: string;
  effectiveDate: string;
  intro: string;
  sections: PolicySection[];
};

export const policies: Record<string, Policy> = {
  swiftsky: {
    appName: 'SwiftSky',
    effectiveDate: 'February 22, 2026',
    intro:
      'At SwiftSky, we value your privacy. This policy explains how we handle your information. Our primary philosophy is simple: We do not collect, store, or share your personal data.',
    sections: [
      {
        heading: '1. Information We Collect',
        content: [
          {
            type: 'paragraph',
            text: 'SwiftSky does not require you to create an account, and we do not collect personal information such as your name, email address, or phone number.',
          },
          {
            type: 'bullets',
            items: [
              'Zip Code Data: To provide weather information, the app asks you to provide a zip code.',
              'Local Storage: The zip code you provide is stored locally on your device only. We do not transmit this zip code to our own servers, nor do we store it anywhere outside of your personal device.',
            ],
          },
        ],
      },
      {
        heading: '2. Third-Party Services (APIs)',
        content: [
          {
            type: 'paragraph',
            text: 'To provide real-time weather data, SwiftSky communicates with a third-party Weather API.',
          },
          {
            type: 'bullets',
            items: [
              'When the app requests weather data, it sends the zip code you provided to the API provider.',
              'This third-party provider does not receive any other identifying information from us (such as your name or device ID).',
              'Please note that the API provider may have its own privacy policy regarding how they handle incoming requests.',
            ],
          },
        ],
      },
      {
        heading: '3. Data Retention',
        content: [
          {
            type: 'paragraph',
            text: 'Because we do not collect your data, we do not "retain" it on any servers. The zip code stored on your device remains there until you change it or delete the app.',
          },
        ],
      },
      {
        heading: "4. Children's Privacy",
        content: [
          {
            type: 'paragraph',
            text: 'SwiftSky does not knowingly collect any personal information from children. Since no data is transmitted to us, we are inherently compliant with COPPA (Children\'s Online Privacy Protection Act) regulations.',
          },
        ],
      },
      {
        heading: '5. Changes to This Policy',
        content: [
          {
            type: 'paragraph',
            text: 'We may update our Privacy Policy from time to time. Any changes will be reflected by the "Effective Date" at the top of this page.',
          },
        ],
      },
      {
        heading: '6. Contact Us',
        content: [
          {
            type: 'paragraph',
            text: 'If you have any questions about this Privacy Policy, you can contact us at: fletcherappdev@gmail.com',
          },
        ],
      },
    ],
  },
};
