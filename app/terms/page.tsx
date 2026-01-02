import { Metadata } from 'next';
import TermsOfServiceClient from './TermsOfServiceClient';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Read the terms and conditions for using Diary Journey. Understand your rights and responsibilities.',
};

export default function TermsOfService() {
  return <TermsOfServiceClient />;
}
