import { BrowserRouter, Route } from 'react-router-dom';
import CartScreen from './Screens/CartScreen';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
function App() {
  return (
    <BrowserRouter>
    <div className="grid-container">
            <header className="row">
                <div>
                    <a className="brand" href="/">Ararat</a>
                </div>
                <div>
                    <a href="/cart">Cart</a>
                    <a href="/signin">Sign In</a>
                </div>
            </header>
            <main>
              <Route path="/cart/:id?" component={CartScreen}></Route>
              <Route path="/product/:id" component={ProductScreen}></Route>
              <Route path="/" component={HomeScreen} exact></Route>
                
            </main>
            <footer className="row center"> 
                All Right Reserved!
            </footer>
        </div>
        </BrowserRouter>
  );
}

export default App;
