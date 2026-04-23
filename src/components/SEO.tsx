import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  keywords?: string;
  image?: string;
  type?: 'website' | 'article';
  schema?: object | object[];
  noindex?: boolean;
}

const SITE = 'https://drroofingflorida.com';
const DEFAULT_IMAGE = `${SITE}/og-image.jpg`;

export default function SEO({
  title,
  description,
  canonical,
  keywords,
  image = DEFAULT_IMAGE,
  type = 'website',
  schema,
  noindex = false,
}: SEOProps) {
  const fullUrl = canonical.startsWith('http') ? canonical : `${SITE}${canonical}`;
  const schemas = schema ? (Array.isArray(schema) ? schema : [schema]) : [];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullUrl} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Dr. Roofing FL" />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
}
