import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GalleryProvider } from "./contexts/GalleryContext";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ListingPage from "./components/listing/ListingPage";
import PhotoTour from "./components/gallery/PhotoTour";
import Lightbox from "./components/lightbox/Lightbox";
import { ROUTES } from "./utils/constants";

/**
 * Root App component.
 * Sets up routing, global GalleryProvider, and global Lightbox modal overlay.
 */
const App = () => {
  return (
    <GalleryProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-white text-text-primary">
          <Routes>
            {/* Photo Tour route */}
            <Route path={ROUTES.PHOTOS} element={<PhotoTour />} />

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

          {/* Global Lightbox Modal Overlay */}
          <Lightbox />
        </div>
      </BrowserRouter>
    </GalleryProvider>
  );
};

export default App;
