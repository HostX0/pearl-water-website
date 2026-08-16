import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLocale, site, type Locale } from '@/lib/site';

const copy = {
  en: { title: 'Terms of Use', intro: 'These terms apply to the Pearl Water corporate website and its informational content.', sections: [
    ['Website purpose', 'The site presents Pearl Water, its published product formats, company information, quality story and contact channels. It is not an e-commerce store and does not create a purchase contract.'],
    ['Accuracy of information', 'Pearl aims to keep public information current. Product availability, technical specifications, certifications and contact details may change and should be confirmed directly with the company when they affect a commercial decision.'],
    ['Brand and content', 'Pearl, اللؤلؤة, the Pearl logo, product imagery and website content are brand assets and may not be copied or reused commercially without permission from the rights holder.'],
    ['External links', 'Links to Google Maps and other third-party services are provided for convenience. Pearl is not responsible for the availability or policies of third-party services.'],
    ['Changes', 'The website and these terms may be updated as the brand, product range and verified company information evolve.'],
  ], updated: 'Last updated: August 2026' },
  ar: { title: 'شروط الاستخدام', intro: 'تنظم هذه الشروط استخدام الموقع التعريفي لمياه اللؤلؤة والمحتوى المنشور داخله.', sections: [
    ['غرض الموقع', 'يعرض الموقع العلامة والمنتجات المنشورة ومعلومات الشركة وقصة الجودة ووسائل التواصل. الموقع ليس متجراً إلكترونياً ولا ينشئ عقد شراء عبر الإنترنت.'],
    ['دقة المعلومات', 'نسعى إلى إبقاء المعلومات محدثة، لكن توفر المنتجات والمواصفات الفنية والشهادات وأرقام الاتصال قد يتغير. أي معلومة تؤثر على قرار تجاري يفضل تأكيدها مباشرة مع الشركة.'],
    ['العلامة والمحتوى', 'Pearl واللؤلؤة والشعار وصور المنتجات ومحتوى الموقع أصول للعلامة ولا يجوز إعادة استخدامها تجارياً من دون إذن صاحب الحقوق.'],
    ['الروابط الخارجية', 'يتم توفير روابط خرائط Google والخدمات الخارجية للتسهيل، ولا تتحمل اللؤلؤة مسؤولية توفر أو سياسات الخدمات الخارجية.'],
    ['التحديثات', 'يمكن تحديث الموقع وهذه الشروط مع تطور العلامة ومجموعة المنتجات والمعلومات الموثقة للشركة.'],
  ], updated: 'آخر تحديث: أغسطس 2026' },
  ku: { title: 'مەرجەکانی بەکارهێنان', intro: 'ئەم مەرجانە بۆ ماڵپەڕی ناساندنی Pearl Water و ناوەڕۆکی زانیارییەکەیە.', sections: [
    ['ئامانجی ماڵپەڕ', 'ماڵپەڕەکە براند، بەرهەم، زانیاری کۆمپانیا، جۆرایەتی و پەیوەندی پیشان دەدات و فرۆشگای ئۆنلاین نییە.'],
    ['دروستی زانیاری', 'بەردەستبوونی بەرهەم، وردەکاری تەکنیکی و بەڵگەنامەکان دەتوانن بگۆڕێن و بۆ بڕیاری بازرگانی دەبێت لە کۆمپانیا پشتڕاست بکرێنەوە.'],
    ['براند و ناوەڕۆک', 'Pearl، لؤلؤە، لۆگۆ و وێنەکانی بەرهەم سامانی براندن و بەبێ مۆڵەت نابێت بۆ مەبەستی بازرگانی بەکاربهێنرێن.'],
    ['بەستەرە دەرەکییەکان', 'Google Maps و خزمەتگوزارییە دەرەکییەکان سیاسەت و بەردەستبوونی خۆیان هەیە.'],
    ['نوێکردنەوە', 'ماڵپەڕ و ئەم مەرجانە دەتوانن لەگەڵ گەشەی براند و زانیاری نوێ بگۆڕێن.'],
  ], updated: 'نوێکردنەوەی کۆتایی: ئابی 2026' },
} as const;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const c = copy[locale];
  return { title: `${c.title} | Pearl Water`, description: c.intro, alternates: { canonical: `${site.baseUrl}/${locale}/terms` } };
}

export default async function Terms({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params; if (!isLocale(raw)) notFound(); const locale = raw as Locale; const c = copy[locale];
  return <section className="section legal-page"><div className="site-shell legal-shell"><span className="eyebrow">Pearl Water</span><h1>{c.title}</h1><p className="legal-intro">{c.intro}</p><div className="legal-sections">{c.sections.map(([title, body]) => <article key={title}><h2>{title}</h2><p>{body}</p></article>)}</div><small>{c.updated}</small></div></section>;
}
