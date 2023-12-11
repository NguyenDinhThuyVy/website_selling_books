import React from 'react';
import './style.scss';

const LoadingPage = () => {
  return (
    <div class="wrapper">
      <div class="book-loader-container">
        <div class="spine"></div>
        <div class="page" style="--page-num: 1"></div>
        <div class="page" style="--page-num: 2"></div>
        <div class="page" style="--page-num: 3"></div>
        <div class="page" style="--page-num: 4"></div>
        <div class="page static right"></div>
        <div class="page static left"></div>
      </div>
    </div>
  );
};

export default LoadingPage;
