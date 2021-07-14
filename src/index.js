import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import Slider from './App';
import reportWebVitals from './reportWebVitals';
let s1 = 'https://www.csu.ru/PublishingImages/skripov.JPG'
let s2 = 'https://pobeda.spbu.ru/media/k2/items/cache/665e96c29d55b13435d7a8d39deafe53_XL.jpg'
let s3 = 'https://cs10.pikabu.ru/post_img/big/2020/07/03/7/1593772584135748270.png'
ReactDOM.render(
  <React.StrictMode>
    <Slider urls={[s1,s2,s3]}  />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
