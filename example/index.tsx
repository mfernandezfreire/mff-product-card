import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductImage, ProductTitle, ProductButtons, } from '../.';

const product = {
  id: '1',
  title: 'Coffe Mug',
  // img: './coffee-mug.png'
};

const App = () => {
  return (
    <>
      <ProductCard
        product={product}
        initialValues={{
          count: 4,
          maxCount: 15
        }}
      >
        {
          ({ count, maxCount, isMaxCountReached, reset, increaseBy }) => (
            <>
              <ProductImage />
              <ProductTitle />
              <ProductButtons />
            </>
          )
        }
      </ ProductCard >
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));