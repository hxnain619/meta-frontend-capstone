import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const PageLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-green/30">
      <Navbar />
      <div className="flex-grow">
        <main className="bg-gray-100">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default PageLayout;
