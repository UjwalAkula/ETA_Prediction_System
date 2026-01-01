import Navbar from "./components/Navbar";
import EtaForm from "./components/EtaForm";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc]">
      <Navbar />
      <main className="grow">
        <EtaForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;
