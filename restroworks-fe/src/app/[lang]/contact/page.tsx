import type { Metadata } from 'next';
import type { Locale } from '@/lib/i18n-config';
import { getDictionary } from '@/lib/dictionaries';
import { ContactForm } from './contact-form';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';

type Props = {
  params: Promise<{ lang: Locale }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  return {
    title: dictionary.contact_page.meta.title,
    description: dictionary.contact_page.meta.description,
  };
}

export default async function ContactPage({ params }: Props) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-50/50 via-white to-indigo-50/50">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-purple-300/20 blur-3xl" />
        <div className="absolute top-1/2 -left-40 h-80 w-80 rounded-full bg-indigo-300/20 blur-3xl" />
      </div>

      <div className="container relative mx-auto max-w-7xl px-4 py-16 sm:py-24">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            <span className="text-gradient">
              {dictionary.contact_page.title}
            </span>
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            {dictionary.contact_page.description}
          </p>
          <div className="mx-auto mt-6 h-1 w-24 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6 animate-slide-in-left">
            {/* Email Card */}
            <Card className="group border-2 border-gray-200 hover:border-purple-300 transition-all hover:shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-100 to-indigo-100 text-purple-600 transition-transform group-hover:scale-110">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600 text-sm">contact@restroworks.com</p>
                    <p className="text-gray-600 text-sm">support@restroworks.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Phone Card */}
            <Card className="group border-2 border-gray-200 hover:border-purple-300 transition-all hover:shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-100 to-indigo-100 text-purple-600 transition-transform group-hover:scale-110">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600 text-sm">+1 (555) 123-4567</p>
                    <p className="text-gray-600 text-sm">+1 (555) 987-6543</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Location Card */}
            <Card className="group border-2 border-gray-200 hover:border-purple-300 transition-all hover:shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-100 to-indigo-100 text-purple-600 transition-transform group-hover:scale-110">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Office</h3>
                    <p className="text-gray-600 text-sm">123 Business Street</p>
                    <p className="text-gray-600 text-sm">San Francisco, CA 94102</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hours Card */}
            <Card className="group border-2 border-gray-200 hover:border-purple-300 transition-all hover:shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-100 to-indigo-100 text-purple-600 transition-transform group-hover:scale-110">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Hours</h3>
                    <p className="text-gray-600 text-sm">Mon - Fri: 9am - 6pm</p>
                    <p className="text-gray-600 text-sm">Sat - Sun: Closed</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 animate-slide-in-right">
            <Card className="border-2 border-gray-200 shadow-2xl">
              <CardContent className="p-8 sm:p-12">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {dictionary.contact.send_message}
                  </h2>
                  <p className="text-gray-600">
                    {dictionary.contact.form_description}
                  </p>
                </div>
                <ContactForm dictionary={dictionary.contact_page} />
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center animate-fade-in">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              <span>{dictionary.contact.trust.response}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-blue-500" />
              <span>{dictionary.contact.trust.secure}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-purple-500" />
              <span>{dictionary.contact.trust.no_spam}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
