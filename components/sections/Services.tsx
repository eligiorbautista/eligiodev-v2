import React from 'react';
import { SECTION_TITLES } from '../../config/site';
import SectionTitle from '../ui/SectionTitle';

interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

const CodeIcon: React.FC = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
  </svg>
);

const WrenchIcon: React.FC = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.032a4.5 4.5 0 004.5-4.5c0-1.409-.807-2.622-2.03-3.227a4.5 4.5 0 00-6.807 3.835 4.5 4.5 0 00-2.497.308" />
  </svg>
);

const GlobeIcon: React.FC = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
  </svg>
);

const SearchIcon: React.FC = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
  </svg>
);

const CpuIcon: React.FC = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25z" />
  </svg>
);

const SERVICES: ServiceItem[] = [
  {
    icon: <CodeIcon />,
    title: 'Web Design & Build',
    description: 'Custom websites built from scratch with modern frameworks. From landing pages to full web applications that actually convert.',
  },
  {
    icon: <WrenchIcon />,
    title: 'Site Maintenance',
    description: 'Monthly updates, security patches, and performance tuning so your site stays fast, secure, and up-to-date without you lifting a finger.',
  },
  {
    icon: <GlobeIcon />,
    title: 'Domain & Hosting',
    description: 'End-to-end setup and management of domains, DNS, SSL certificates, and cloud hosting — fully configured so everything just works.',
  },
  {
    icon: <SearchIcon />,
    title: 'Search Optimization',
    description: 'Technical SEO, meta tags, structured data, and Google Search Console setup to get your business found organically.',
  },
  {
    icon: <CpuIcon />,
    title: 'Custom Tools & Apps',
    description: 'Internal dashboards, automation scripts, inventory systems, and small business software built exactly for your workflow.',
  },
];

const PRICING_TIERS: PricingTier[] = [
  {
    name: 'Starter Build',
    price: '₱10,000',
    period: 'one-time',
    description: 'Perfect for small businesses getting online for the first time.',
    features: [
      'Up to 3 custom pages',
      'Mobile-first responsive design',
      'Contact form + Google Maps',
      'Basic on-page SEO',
      '1 week delivery',
    ],
  },
  {
    name: 'Business Package',
    price: '₱30,000',
    period: 'one-time',
    description: 'Everything you need for a professional business presence.',
    features: [
      'Up to 7 custom pages',
      'Custom animations & interactions',
      'Blog or CMS integration',
      'Advanced SEO + Analytics setup',
      'Social media integration',
      '2 week delivery',
    ],
    highlighted: true,
  },
  {
    name: 'Monthly Care',
    price: '₱3,000',
    period: 'month',
    description: 'Ongoing support and updates after your site goes live.',
    features: [
      '5 content changes per month',
      'Security monitoring & backups',
      'Performance optimization',
      'Plugin/framework updates',
      'Priority email support',
    ],
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24">
      <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
        {/* Header */}
        <div className="mb-14 sm:mb-16 lg:mb-20">
          <SectionTitle number="02">{SECTION_TITLES.services}</SectionTitle>
          <p className="text-base sm:text-lg text-text-secondary max-w-2xl leading-relaxed mt-4">
            I help businesses build and maintain their web presence — from fresh builds to long-term care. Here's what I can do for you.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 mb-20 sm:mb-24 lg:mb-28">
          {SERVICES.map((service, index) => (
            <div
              key={index}
              className="group relative p-6 sm:p-7 lg:p-8 bg-primary/30 border border-accent/10 hover:border-accent/25 transition-all duration-300"
            >
              <div className="text-accent/70 group-hover:text-accent transition-colors duration-300 mb-5">
                {service.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-text-main mb-3 group-hover:text-accent transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-text-secondary/80 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Pricing */}
        <div>
          <div className="mb-8 sm:mb-10">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-main tracking-tight mb-3">
              Transparent Pricing
            </h3>
            <p className="text-base sm:text-lg text-text-secondary max-w-xl leading-relaxed">
              No hidden costs. No surprises. Pick what fits your budget and scale when you're ready.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {PRICING_TIERS.map((tier, index) => (
              <div
                key={index}
                className={`relative p-6 sm:p-7 lg:p-8 border transition-all duration-300 ${
                  tier.highlighted
                    ? 'border-accent/40 bg-accent/5 hover:border-accent/60'
                    : 'border-accent/10 bg-primary/20 hover:border-accent/25'
                }`}
              >
                {tier.highlighted && (
                  <span className="absolute -top-3 left-6 bg-accent text-background font-mono text-[10px] sm:text-xs px-3 py-1 font-bold tracking-wider">
                    MOST POPULAR
                  </span>
                )}
                <h4 className="text-base sm:text-lg font-bold text-text-main mb-2">
                  {tier.name}
                </h4>
                <p className="text-sm text-text-secondary/70 mb-5 sm:mb-6">
                  {tier.description}
                </p>
                <div className="flex items-baseline gap-1 mb-6 sm:mb-7">
                  <span className="text-3xl sm:text-4xl font-bold text-text-main tracking-tight">
                    {tier.price}
                  </span>
                  <span className="font-mono text-xs sm:text-sm text-text-secondary/50">
                    /{tier.period}
                  </span>
                </div>
                <ul className="space-y-3">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <svg
                        className="w-4 h-4 text-accent/70 flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm sm:text-base text-text-secondary/90">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
