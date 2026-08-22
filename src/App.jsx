import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GalleryProvider } from "./contexts/GalleryContext";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ListingPage from "./components/listing/ListingPage";
import { ROUTES } from "./utils/constants";

// Lazy load overlay modals for bundle splitting
const PhotoTour = lazy(() => import("./components/gallery/PhotoTour"));
const Lightbox = lazy(() => import("./components/lightbox/Lightbox"));

/**
 * Root App component.
 * Sets up routing, global GalleryProvider, and code-split modal overlays.
 */
const App = () => {
  return (
    <GalleryProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-white text-text-primary">
          <Suspense fallback={null}>
            <Routes>
              {/* Standalone Photo Tour route */}
              <Route path={ROUTES.PHOTOS} element={<PhotoTour isOverlay={false} />} />

              {/* Listing Page route with shared Header and Footer */}
              <Route
                path={ROUTES.LISTING}
                element={
                  <>
                    <Header />
                    <ListingPage />
                    <Footer />
                  </>
                }
              />
            </Routes>

            {/* Global Full-Viewport PhotoTour Modal Overlay */}
            <PhotoTour isOverlay={true} />

            {/* Global Lightbox Modal Overlay */}
            <Lightbox />
          </Suspense>
        </div>
      </BrowserRouter>
    </GalleryProvider>
  );
};

export default App;
