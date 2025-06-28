import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { LocationPage } from "./pages/LocationPage";
import { ServicesPage } from "./pages/ServicesPage";
import { PinterestOrganicGrowthPage } from "./pages/PinterestOrganicGrowthPage";
import { PinterestPinDesignPage } from "./pages/PinterestPinDesignPage";
import { PinterestAdsPage } from "./pages/PinterestAdsPage";
import { SocialMediaMarketingPage } from "./pages/SocialMediaMarketingPage";
import { PinterestSeoEcommercePage } from "./pages/PinterestSeoEcommercePage";
import { ServiceDetailPage } from "./pages/ServiceDetailPage";
import { TestimonialsPage } from "./pages/TestimonialsPage";
import { ContactPage } from "./pages/ContactPage";
import { CaseStudyPage } from "./pages/CaseStudyPage";
import { BlogPage } from "./pages/BlogPage";
import { BlogPostPage } from "./pages/BlogPostPage";
import { locations } from "./data/locations";

function App() {
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <ScrollToTop />
        <Header
          locations={locations}
          selectedLocation={selectedLocation}
          onLocationChange={setSelectedLocation}
        />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/:locationId" element={<LocationPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route
            path="/services/pinterest-organic-growth"
            element={<PinterestOrganicGrowthPage />}
          />
          <Route
            path="/services/pinterest-pin-design"
            element={<PinterestPinDesignPage />}
          />
          <Route
            path="/services/pinterest-ads"
            element={<PinterestAdsPage />}
          />
          <Route
            path="/services/pinterest-seo-ecommerce"
            element={<PinterestSeoEcommercePage />}
          />
          <Route
            path="/services/social-media-marketing"
            element={<SocialMediaMarketingPage />}
          />
          <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/case-study/:caseStudyId" element={<CaseStudyPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:postId" element={<BlogPostPage />} />
          <Route
            path="/contact"
            element={<ContactPage selectedLocation={selectedLocation} />}
          />
          {/* Catch-all route for 404s */}
          <Route
            path="*"
            element={
              <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    404 - Page Not Found
                  </h1>
                  <p className="text-gray-600 mb-8">
                    The page you're looking for doesn't exist.
                  </p>
                  <Link
                    to="/"
                    className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
                  >
                    Go Home
                  </Link>
                </div>
              </div>
            }
          />
        </Routes>

        <Footer locations={locations} />

        {/* WhatsApp Button - appears on all pages */}
        <WhatsAppButton
          phoneNumber="8801234567890"
          message="Hi! I'm interested in your Pinterest marketing services. Can you help me grow my business on Pinterest?"
        />
      </div>
    </Router>
  );
}

export default App;
