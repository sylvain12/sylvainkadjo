import { Metadata } from "next";
import AboutInfoComponent from './components/about-info';
import AboutContactComponent from './components/about-contact';
import NewsletterComponent from '@/components/newsletter';
import { Toaster } from 'sonner';

export const metadata: Metadata = {
  title: "About - SK",
};

export default function AboutPage() {
  return  (<div className="about">
<Toaster position="bottom-center" richColors closeButton />
      <AboutInfoComponent />
      <AboutContactComponent />
      <NewsletterComponent />
    </div>)
}
