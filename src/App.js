import React from 'react';
import './App.css';


function App() {
  return (

      <div className='page'>
        <div className='section menu'></div>
        <div className='section header'>
          <img src={process.env.PUBLIC_URL + '/header.svg'} alt="header"/>
        </div>
        <div className='section content'>
          <img src={process.env.PUBLIC_URL + '/content.svg'} alt="content"/>
        </div>
        <div className='section sign-up'>
          <img src={process.env.PUBLIC_URL + '/sign-up.svg'} alt="sign-up"/>
        </div>
        <div className='section feature-1'>
          <img src={process.env.PUBLIC_URL + '/feature.svg'} alt="feature"/>
        </div>
        <div className='section feature-2'>
          <img src={process.env.PUBLIC_URL + '/feature.svg'} alt='feature'/>
        </div>
        <div className='section feature-3'>
          <img src={process.env.PUBLIC_URL + '/feature.svg'} alt='feature'/>
        </div>
        </div>


  );
}

export default App;
