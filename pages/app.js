// pages/app.js
import Navbar from '../components/Navbar';  // Check path and correct export
import Footer from '../components/Footer';  // Check path and correct export

const AppPage = () => {
  return (
    <div>
      <Navbar />
      <div>App Page Content</div>
      <Footer />
    </div>
  );
};

export default AppPage;
