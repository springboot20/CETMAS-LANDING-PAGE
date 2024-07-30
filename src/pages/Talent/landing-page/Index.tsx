import React, { Fragment } from 'react';

/** Components imports starts */
import { Footer } from '@/components/footer/Footer.tsx';
import { Navigation } from '@/components/navigation/Navigation.tsx';
/** Components imports ends */

/** Landing page component imports starts */
import { HeroSection } from './components/hero/HeroSection';
import { TrustedPartners } from './components/trusted/TrustedPartners.tsx';
import { AboutSection } from './components/about/AboutSection.tsx';
import { TestimonialSection } from './components/testimonial/TestimonialSection.tsx';
import { TalentsSection } from './components/talents/TalentsSection.tsx';
/** Landing page component imports ends */

export const LandingPage: React.FC = () => {
  return (
    <Fragment>
      {/* App navigation start */}
      <Navigation />
      {/* App navigation end */}

      {/* Hero section start */}
      <HeroSection />
      {/* Hero section end */}

      {/* TrustedPartner section start */}
      <TrustedPartners />
      {/* TrustedPartner section end */}

      {/* About section start */}
      <AboutSection />
      {/* About section end */}

      {/* Testimonial section start */}
      <TestimonialSection />
      {/* Testimonial section end */}

      {/* Talents section start */}
      <TalentsSection />
      {/* Talents section end */}

      {/* Footer section start */}
      <Footer />
      {/* Footer section end */}
    </Fragment>
  );
};
