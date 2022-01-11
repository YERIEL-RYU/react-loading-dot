import React, { useEffect, useState } from 'react';
import './App.scss'

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    }, 5000)
  },[]);
  
  return (
    <>
      {
        loading? (
          <div className='loading'>
            <div className='dot'></div>
            <div className='dot'></div>
            <div className='dot'></div>
            <div className='dot'></div>
            <div className='dot'></div>
          </div>
        ) : (
          <h1>Hello YERIEL</h1>
      )}
    </>
  );
};

export default App;