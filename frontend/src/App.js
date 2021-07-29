import data from './data';
import Product from './component/Product';
function App() {
  return (
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
                <div className="row center">
                  {
                   data.products.map((product) => (
                      <Product key={product._id} product = {product}></Product>
                    ))
                  }
                </div>
            </main>
            <footer className="row center"> 
                All Right Reserved!
            </footer>
        </div>
  );
}

export default App;
