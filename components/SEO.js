import Head from "next/head";

export default function SEO({
  title = "Bharat Enamel - Premium Enameling Services",
  description = "Leading provider of high-quality enameling services in India. Specialized in industrial enameling, coating solutions, and custom enamel work.",
  keywords = "enamel coating, industrial enameling, Bharat Enamel, coating services, enamel work India",
  ogImage = "/og-image.jpg",
  url = "https://bharatenamel.com",
}) {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Bharat Enamel" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Bharat Enamel" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Bharat Enamel",
            url: url,
            logo: `${url}/icons/be-logo.svg`,
            description: description,
            address: {
              "@type": "PostalAddress",
              addressCountry: "IN",
            },
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "customer service",
              availableLanguage: ["en", "hi"],
            },
            sameAs: [
              // Add your social media links here
              // "https://www.facebook.com/bharatenamel",
              // "https://www.linkedin.com/company/bharatenamel"
            ],
          }),
        }}
      />
    </Head>
  );
}
