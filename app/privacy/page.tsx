import { Metadata } from 'next';
import PrivacyPolicyClient from './PrivacyPolicyClient';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Learn how Diary Journey collects, uses, and protects your personal information. Your privacy is our priority.',
};

export default function PrivacyPolicy() {
  return <PrivacyPolicyClient />;
}
