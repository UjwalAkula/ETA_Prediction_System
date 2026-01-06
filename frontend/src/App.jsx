import Navbar from "./components/Navbar";
import EtaForm from "./components/EtaForm";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      {/* main content */}
      <main className="grow pt-24 pb-16">
        <EtaForm />
      </main>

      <Footer />
    </div>
  );
};

export default App;
