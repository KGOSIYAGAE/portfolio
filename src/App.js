import './App.css';
import Intro from './components/intro/intro';
import About from './components/about/about';
import ProductList from './components/productList/productList';
import Contacts from './components/contacts/contacts';
/*import Toggle from './components/toggle/toggle'*/


function App() {
  return (
    <div className="App">
     
    <Intro/>
    <About/>
    <ProductList/>
    <Contacts/>
    

    </div>
  );
}

export default App;
