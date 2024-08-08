import logo from './logo.svg';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Dashboard from './components/dashboard/Dashboard';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Dashboard />
      <Footer />
    </div>
  );
};

export default App;
