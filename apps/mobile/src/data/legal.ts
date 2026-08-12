import type { LegalDoc } from '../screens/LegalScreen';

/**
 * Parent-facing legal copy for the app. Plain-language, aligned with the
 * Australian Privacy Principles (Privacy Act 1988) and eSafety Commissioner
 * guidance for services used by children. Reviewed copy can replace these
 * defaults before release.
 */
export const PRIVACY_DOC: LegalDoc = {
  title: 'Privacy Policy',
  updated: 'August 2026',
  sections: [
    {
      heading: 'Who we are',
      body: 'BilbyBots is a learning app that helps Australian primary and secondary school students keep up with their schoolwork. This policy explains what information we collect and how we look after it.',
    },
    {
      heading: 'Information we collect',
      body: 'When a parent signs up with Google, we receive your name and email address from Google. The profile we create for each child (name, school year, state and chosen subjects) is provided by the parent. We also store progress made inside the app — completed lessons, badges and practice-test results.',
    },
    {
      heading: 'How we use it',
      body: 'We use this information only to run the app: to build each child\u2019s weekly plan, save their progress, and show parents how their child is tracking. We do not sell personal information and we do not show advertising.',
    },
    {
      heading: 'Children\u2019s privacy',
      body: 'Accounts are parent-managed. A parent creates and controls each child profile, can edit it at any time, and can delete all saved data from Settings. We encourage parents to stay involved in how the app is used.',
    },
    {
      heading: 'Where data lives',
      body: 'Your account data is stored securely with our service provider (Supabase) on servers in Australia. On-device progress is stored locally on your device so the app works offline too.',
    },
    {
      heading: 'Your rights',
      body: 'You can access, correct or delete your information at any time — in the app, or by emailing us. If you have a concern, contact us first and we will respond promptly.',
    },
  ],
};

export const TERMS_DOC: LegalDoc = {
  title: 'Terms of Service',
  updated: 'August 2026',
  sections: [
    {
      heading: 'Using BilbyBots',
      body: 'BilbyBots provides weekly learning plans and NAPLAN-style practice for students in Years 1–10. By creating an account you agree to these terms.',
    },
    {
      heading: 'Parental responsibility',
      body: 'A parent or guardian must create the account and manage child profiles. Please supervise your child\u2019s use of the app, especially the first few times.',
    },
    {
      heading: 'Our content',
      body: 'All lesson and practice content is original and written for BilbyBots. NAPLAN-style practice questions are not official NAPLAN tests and are not affiliated with ACARA. Results are for practice only.',
    },
    {
      heading: 'What you may not do',
      body: 'You may not copy or redistribute our content for commercial purposes, attempt to access another account, or use the app in any way that breaks the law.',
    },
    {
      heading: 'Changes and availability',
      body: 'We may update content, features or these terms over time. We will keep this page current so you always know what applies.',
    },
  ],
};

export const CONTACT_DOC: LegalDoc = {
  title: 'Contact us',
  updated: 'August 2026',
  sections: [
    {
      heading: 'We\u2019d love to hear from you',
      body: 'Questions, feedback or concerns about privacy, content or the app in general? Reach out and we\u2019ll get back to you as soon as we can.',
    },
    {
      heading: 'Email',
      body: 'hello@bilbybots.com — for general questions and feedback.',
    },
    {
      heading: 'Privacy',
      body: 'For privacy-related questions or to exercise any data right, email privacy@bilbybots.com. We respond to privacy requests within 30 days.',
    },
  ],
};
