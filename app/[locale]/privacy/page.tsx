import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLocale, site, type Locale } from '@/lib/site';

const copy = {
  en: { title: 'Privacy Policy', intro: 'This website is a corporate profile for Pearl Water. It does not require an account, process online payments or intentionally collect sensitive personal information.', sections: [
    ['Information processed', 'Basic technical request data may be processed by hosting and security providers to operate and protect the website. If analytics are enabled in the future, this policy will be updated to explain the data and controls used.'],
    ['Contact actions', 'Phone links and Google Maps links open services outside this website. Any information you provide through those services is handled under their own privacy terms.'],
    ['Cookies', 'Pearl does not require advertising cookies for the current profile-site experience. If optional marketing or analytics tools are added later, consent and disclosure will be implemented where required.'],
    ['Data retention', 'This website currently does not provide account creation or a database-backed contact form. Any future form will include a clear retention and purpose notice before launch.'],
    ['Questions', 'For privacy questions, contact Pearl using the official phone numbers listed on the Contact page.'],
  ], updated: 'Last updated: August 2026' },
  ar: { title: 'سياسة الخصوصية', intro: 'هذا الموقع هو ملف تعريفي لشركة مياه اللؤلؤة. لا يتطلب إنشاء حساب، ولا يعالج مدفوعات إلكترونية، ولا يطلب عمداً معلومات شخصية حساسة.', sections: [
    ['المعلومات التقنية', 'قد يعالج مزود الاستضافة والحماية بيانات تقنية أساسية مرتبطة بطلبات الموقع بهدف التشغيل والأمان. إذا تمت إضافة أدوات تحليلات مستقبلاً، يتم تحديث هذه السياسة وشرح نوع البيانات وخيارات التحكم.'],
    ['التواصل والروابط الخارجية', 'روابط الاتصال وخرائط Google تفتح خدمات خارج هذا الموقع. أي معلومات تقدمها عبر تلك الخدمات تخضع لسياسات الخصوصية الخاصة بها.'],
    ['ملفات الارتباط', 'تجربة الموقع الحالية لا تحتاج إلى ملفات ارتباط إعلانية. إذا أضيفت لاحقاً أدوات تسويق أو تحليلات اختيارية، يتم تطبيق الإفصاح والموافقة عند الحاجة.'],
    ['الاحتفاظ بالبيانات', 'الموقع حالياً لا يوفر حسابات مستخدمين أو نموذج تواصل مرتبط بقاعدة بيانات. أي نموذج مستقبلي سيعرض غرض الاستخدام وفترة الاحتفاظ قبل إطلاقه.'],
    ['الاستفسارات', 'لأي سؤال متعلق بالخصوصية، يمكن التواصل مع اللؤلؤة عبر أرقام الاتصال الرسمية الموجودة في صفحة تواصل معنا.'],
  ], updated: 'آخر تحديث: أغسطس 2026' },
  ku: { title: 'سیاسەتی تایبەتمەندی', intro: 'ئەم ماڵپەڕە ناساندنی کۆمپانیای Pearl Water ـە و پێویستی بە هەژمار یان پارەدانی ئۆنلاین نییە.', sections: [
    ['زانیاری تەکنیکی', 'دابینکەری میوانداری و پاراستن دەتوانێت زانیاری تەکنیکی بنەڕەتی بۆ کارکردن و پاراستنی ماڵپەڕ پرۆسە بکات.'],
    ['پەیوەندی و بەستەرە دەرەکییەکان', 'بەستەری تەلەفۆن و Google Maps خزمەتگوزاری دەرەکی دەکەنەوە و سیاسەتی تایبەتمەندی خۆیان هەیە.'],
    ['Cookies', 'لە ئەزموونی ئێستادا cookie ـی ڕیکلامی پێویست نییە. ئەگەر ئامرازێکی نوێ زیاد بکرێت، ئەم سیاسەتە نوێ دەکرێتەوە.'],
    ['هەڵگرتنی زانیاری', 'ئەم وەشانە هەژماری بەکارهێنەر یان فۆرمی پەیوەندی بە بنکەدراوە نییە.'],
    ['پرسیار', 'بۆ پرسیاری تایبەتمەندی لە ڕێگەی ژمارە فەرمییەکانی پەڕەی پەیوەندی پەیوەندی بکە.'],
  ], updated: 'نوێکردنەوەی کۆتایی: ئابی 2026' },
} as const;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const c = copy[locale];
  return { title: `${c.title} | Pearl Water`, description: c.intro, alternates: { canonical: `${site.baseUrl}/${locale}/privacy` } };
}

export default async function Privacy({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params; if (!isLocale(raw)) notFound(); const locale = raw as Locale; const c = copy[locale];
  return <section className="section legal-page"><div className="site-shell legal-shell"><span className="eyebrow">Pearl Water</span><h1>{c.title}</h1><p className="legal-intro">{c.intro}</p><div className="legal-sections">{c.sections.map(([title, body]) => <article key={title}><h2>{title}</h2><p>{body}</p></article>)}</div><small>{c.updated}</small></div></section>;
}
