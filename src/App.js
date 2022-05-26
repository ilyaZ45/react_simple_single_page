import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
const App = () => {
  return (
      <div className="app-wrapper">
        <Header />
          <Nav />
        <Main />
          <Footer />
      </div>
  );
}

export default App;
