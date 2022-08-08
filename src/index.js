import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Header from './layouts/header/header';
import Slider from './layouts/slider/slider';
import ProductListMenu from './layouts/productList/productListMenu';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <Slider/>
    <ProductListMenu>
      
    </ProductListMenu>
  </React.StrictMode>
);
