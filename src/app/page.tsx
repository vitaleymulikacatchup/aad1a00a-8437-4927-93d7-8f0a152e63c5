"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import ProductCardFive from '@/components/sections/product/ProductCardFive';
import AboutFeature from '@/components/sections/about/AboutFeature';
import FeatureCardEleven from '@/components/sections/feature/FeatureCardEleven';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import { Zap, Star, CheckCircle, Shield, Users, Sparkles, Heart, HelpCircle } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="directional-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="small"
      sizing="large"
      background="radialGradient"
      cardStyle="gradient-subtle"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="glass"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="Tello"
          button={{
            text: "Browse Cars",
            href: "#featured"
          }}
          className="border-b border-accent"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardRotatedCarousel
          title="Find Your Dream Car at Tello"
          description="Discover premium new cars with unbeatable prices and exceptional service. Browse our exclusive inventory of quality vehicles in 
"
          tag="Premium Selection"
          tagIcon={Zap}
          buttons={[
            {
              text: "Browse Inventory",
              href: "#featured"
            },
            {
              text: "Contact Us",
              href: "#contact"
            }
          ]}
          carouselItems={[
            {
              id: "1",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35bov8zjOkdGcVDNMecOsQMxHeM/uploaded-1765887352551-6k6drmmy.jpg",
              imageAlt: "Luxury red sports car"
            },
            {
              id: "2",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35bov8zjOkdGcVDNMecOsQMxHeM/uploaded-1765887353809-7zu76wqo.jpg",
              imageAlt: "Modern red sedan"
            },
            {
              id: "3",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35bov8zjOkdGcVDNMecOsQMxHeM/uploaded-1765887355298-ne8qv8zr.jpg",
              imageAlt: "Red car in showroom"
            },
            {
              id: "4",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35bov8zjOkdGcVDNMecOsQMxHeM/uploaded-1765887356817-6tepggp3.jpg",
              imageAlt: "Elegant red vehicle"
            },
            {
              id: "5",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35bov8zjOkdGcVDNMecOsQMxHeM/uploaded-1765887358932-sajaaor1.jpg",
              imageAlt: "Premium red car"
            },
            {
              id: "6",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35bov8zjOkdGcVDNMecOsQMxHeM/uploaded-1765887360280-sctmlr0q.jpg",
              imageAlt: "Red car dealership"
            }
          ]}
          autoPlay={true}
          autoPlayInterval={4000}
          className="w-full"
          titleClassName="text-4xl md:text-6xl font-bold"
          descriptionClassName="text-lg md:text-xl"
        />
      </div>

      <div id="featured" data-section="featured">
        <ProductCardFive
          title="Featured Inventory"
          description="Handpicked selection of premium new cars available now"
          tag="New Arrivals"
          tagIcon={Star}
          buttons={[
            {
              text: "View All Cars",
              href: "#"
            }
          ]}
          textboxLayout="default"
          containerStyle="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          useInvertedBackground="noInvert"
          products={[
            {
              id: "car-1",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35bov8zjOkdGcVDNMecOsQMxHeM/uploaded-1765887361688-zzmu2car.jpg",
              imageAlt: "2024 Red Sports Car",
              button: {
                text: "View Details",
                href: "#"
              },
              isFavorited: false
            },
            {
              id: "car-2",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35bov8zjOkdGcVDNMecOsQMxHeM/uploaded-1765887363875-r32fh5rv.jpg",
              imageAlt: "Luxury Red Sedan",
              button: {
                text: "View Details",
                href: "#"
              },
              isFavorited: false
            },
            {
              id: "car-3",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35bov8zjOkdGcVDNMecOsQMxHeM/uploaded-1765887365549-7b82z0et.jpg",
              imageAlt: "Modern Red SUV",
              button: {
                text: "View Details",
                href: "#"
              },
              isFavorited: false
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <AboutFeature
          title="Why Choose Tello? We believe in providing the best car buying experience in the USA with transparency, quality, and exceptional customer service. Every vehicle is carefully selected to meet our high standards."
          useInvertedBackground="noInvert"
          features={[
            {
              icon: CheckCircle,
              title: "Premium Selection",
              description: "Carefully curated inventory of new cars from top manufacturers with competitive pricing."
            },
            {
              icon: Shield,
              title: "Quality Assured",
              description: "Every vehicle undergoes rigorous inspection and comes with our satisfaction guarantee."
            },
            {
              icon: Users,
              title: "Expert Team",
              description: "Our knowledgeable staff is ready to help you find the perfect car for your lifestyle."
            },
            {
              icon: Zap,
              title: "Fast Process",
              description: "Quick and hassle-free purchase process with flexible financing options available."
            }
          ]}
        />
      </div>

      <div id="howItWorks" data-section="howItWorks">
        <FeatureCardEleven
          title="How It Works"
          description="Simple steps to get your dream car"
          tag="Easy Process"
          tagIcon={Sparkles}
          features={[
            {
              id: 1,
              title: "Browse & Select",
              description: "Explore our extensive inventory of new cars online or visit our showroom. Filter by brand, price, and features to find your perfect match.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35bov8zjOkdGcVDNMecOsQMxHeM/uploaded-1765887367067-lbdhde34.jpg",
              imageAlt: "Browse car inventory"
            },
            {
              id: 2,
              title: "Inspection & Test Drive",
              description: "All vehicles undergo thorough inspection. Schedule a test drive to experience your chosen car firsthand.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35bov8zjOkdGcVDNMecOsQMxHeM/uploaded-1765887368914-1ukr8yw3.jpg",
              imageAlt: "Professional car inspection"
            },
            {
              id: 3,
              title: "Paperwork & Financing",
              description: "Our team handles all documentation and offers flexible financing options to suit your budget.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35bov8zjOkdGcVDNMecOsQMxHeM/uploaded-1765887371519-ehz1s57q.jpg",
              imageAlt: "Car purchase paperwork"
            },
            {
              id: 4,
              title: "Delivery & Support",
              description: "Receive your new car with complete support and ongoing customer service after purchase.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35bov8zjOkdGcVDNMecOsQMxHeM/uploaded-1765887372730-k8t1aolw.jpg",
              imageAlt: "Car key handover delivery"
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground="noInvert"
          usePrimaryButtonImage={false}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThree
          title="What Our Customers Say"
          description="Real feedback from satisfied Tello customers"
          tag="Customer Reviews"
          tagIcon={Heart}
          textboxLayout="default"
          containerStyle="default"
          animationType="slide-up"
          useInvertedBackground="noInvert"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              handle: "@sarah_j",
              testimonial: "Amazing experience! Found the perfect car at Tello. The team was professional and helpful throughout the entire process.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35bov8zjOkdGcVDNMecOsQMxHeM/uploaded-1765887374059-qduc2s0f.jpg",
              imageAlt: "Sarah Johnson"
            },
            {
              id: "2",
              name: "Michael Chen",
              handle: "@mchen_automotive",
              testimonial: "Best dealership I've worked with. Fair prices, quality vehicles, and exceptional customer service. Highly recommend!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35bov8zjOkdGcVDNMecOsQMxHeM/uploaded-1765887375196-zpxwuti9.jpg",
              imageAlt: "Michael Chen"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              handle: "@emily_drives",
              testimonial: "Tello made buying a new car easy and stress-free. The inspection report was thorough and the paperwork handled smoothly.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35bov8zjOkdGcVDNMecOsQMxHeM/uploaded-1765887376773-yt54hqs6.jpg",
              imageAlt: "Emily Rodriguez"
            },
            {
              id: "4",
              name: "David Williams",
              handle: "@davidw",
              testimonial: "Great selection of cars and competitive pricing. The sales team was knowledgeable without being pushy. Very satisfied!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35bov8zjOkdGcVDNMecOsQMxHeM/uploaded-1765887378941-925x0rsz.jpg",
              imageAlt: "David Williams"
            },
            {
              id: "5",
              name: "Jessica Martinez",
              handle: "@jmartinez_drive",
              testimonial: "Fantastic experience at Tello. They found me exactly what I was looking for and made the entire process seamless.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35bov8zjOkdGcVDNMecOsQMxHeM/uploaded-1765887380573-62awf6yg.jpg",
              imageAlt: "Jessica Martinez"
            },
            {
              id: "6",
              name: "Robert Anderson",
              handle: "@randerson_cars",
              testimonial: "Outstanding service! Professional team, quality vehicles, and fast turnaround. I've already recommended Tello to my friends.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35bov8zjOkdGcVDNMecOsQMxHeM/uploaded-1765887382523-c1ojdghc.jpg",
              imageAlt: "Robert Anderson"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Frequently Asked Questions"
          description="Find answers to common questions about buying your next car"
          tag="Help & Support"
          tagIcon={HelpCircle}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35bov8zjOkdGcVDNMecOsQMxHeM/uploaded-1765887367067-lbdhde34.jpg"
          imageAlt="Tello showroom"
          mediaPosition="left"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What is Tello's return policy?",
              content: "We offer a 7-day satisfaction guarantee on all vehicles. If you're not completely satisfied, we'll work with you to find the right solution."
            },
            {
              id: "2",
              title: "Do you offer financing options?",
              content: "Yes, we partner with multiple lenders to offer competitive financing rates. Our team can help you explore options that fit your budget."
            },
            {
              id: "3",
              title: "Are all your cars new?",
              content: "Yes, at Tello we specialize exclusively in new cars from major manufacturers. Every vehicle is brand new with full manufacturer warranty."
            },
            {
              id: "4",
              title: "How long does the buying process take?",
              content: "Our streamlined process typically takes 2-3 hours from browsing to paperwork completion. We aim to make it as efficient as possible."
            },
            {
              id: "5",
              title: "Do you handle trade-ins?",
              content: "Yes, we accept trade-ins and can provide competitive valuations. Bring your current vehicle and we'll evaluate it for you."
            },
            {
              id: "6",
              title: "What warranty do the cars have?",
              content: "All new cars come with the manufacturer's full warranty. Our team can explain coverage details and optional extended warranty plans."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Get in Touch"
          description="Have questions? Contact our team and we'll be happy to help you find your perfect car."
          useInvertedBackground="noInvert"
          buttonText="Send Message"
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Your Email",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: true
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your car preferences or ask any questions...",
            rows: 5,
            required: true
          }}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35bov8zjOkdGcVDNMecOsQMxHeM/uploaded-1765887383807-aijgrj18.jpg"
          imageAlt="Tello car lot"
          logoText="Tello"
          copyrightText="© 2025 Tello. All rights reserved."
          columns={[
            {
              title: "Company",
              items: [
                {
                  label: "About Us",
                  href: "#about"
                },
                {
                  label: "How It Works",
                  href: "#howItWorks"
                },
                {
                  label: "Contact",
                  href: "#contact"
                }
              ]
            },
            {
              title: "Support",
              items: [
                {
                  label: "FAQ",
                  href: "#faq"
                },
                {
                  label: "Financing",
                  href: "#"
                },
                {
                  label: "Trade-In",
                  href: "#"
                }
              ]
            },
            {
              title: "Legal",
              items: [
                {
                  label: "Privacy Policy",
                  href: "#"
                },
                {
                  label: "Terms of Service",
                  href: "#"
                },
                {
                  label: "Terms and Conditions",
                  href: "#"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}