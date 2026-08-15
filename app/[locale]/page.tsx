import { notFound } from 'next/navigation';
import { HomePage } from '@/components/HomePage';
import { isLocale, type Locale } from '@/lib/site';
import { pageMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params; if (!isLocale(locale)) return {}; return pageMetadata(locale, 'home');
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params; if (!isLocale(locale)) notFound(); return <HomePage locale={locale as Locale}/>;
}
