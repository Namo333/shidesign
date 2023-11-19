import React, { useState, useEffect, useRef } from 'react';
import { Navbar, Footer, Preloader } from './components';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [buttonStyle, setButtonStyle] = useState({});
  const footerRef = useRef(null);

  useEffect(() => {
      const checkScroll = () => {
        if (footerRef.current.getBoundingClientRect().top <= window.innerHeight)
            setButtonStyle({ 
                position: 'relative', 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            });
        else
            setButtonStyle({ 
                position: 'fixed',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                bottom: '20px',
            });
    };

      window.addEventListener('scroll', checkScroll);
      return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  useEffect(() => {
      setTimeout(() => {
          setIsLoading(false);
      }, 3000);
  }, []);
  
  return (
      <div className="max-2xl:container mx-auto px-[72px]">
          {isLoading ? (
              <Preloader /> 
          ) : (
              <div>
                  <Navbar />
                  <a 
                      href="https://t.me/zverkovdsg" 
                      id="scrollButton" 
                      style={buttonStyle} 
                      className='px-[30px] py-1.5 bg-red-500 rounded-[34px] shadow justify-center items-center inline-flex text-white text-[21px] font-normal leading-9 fixed bottom-[20px] left-0 right-0 m-auto max-w-max'
                  >
                      Заказать дизайн 
                  </a>
                  <Footer ref={footerRef} />
              </div>
          )}
      </div>
  );
};

export default App;