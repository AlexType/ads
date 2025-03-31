import "./App.scss";
import Bloggers from "./components/Bloggers";
import Contacts from "./components/Contacts/Contacts";
import FAQ from "./components/FAQ";
import Feedback from "./components/Feedback";
import Header from "./components/Header";
import Main from "./components/Main";
import Services from "./components/Services";
import Stats from "./components/Stats";

function App() {
  return (
    <main className="main">
      <Header />
      <div className="section-main">
        <div className="container">
          <Main />
        </div>
      </div>
      <div className="section-services" id="services">
        <Services />
      </div>
      <div className="section-bloggers"  >
        <Bloggers />
      </div>
      <div className="section-stats py-5">
        <div className="container">
          <Stats />
        </div>
      </div>
      <div className="section-faq py-5" id="feedback">
        <Feedback />
        <div className="container">
          <div className="mt-5">
            <FAQ />
          </div>
        </div>
      </div>
      <div className="container py-5" id="contacts">
        <Contacts />
      </div>
    </main>
  );
}

export default App;
