import React, { useEffect, useState } from 'react';
import styled, {keyframes} from 'styled-components';

const wave = keyframes`
  50%,
  75% { transform: scale(2.5); }
  80%,
  100% { opacity: 0; }
`;
const Loading = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Dot = styled.div`
  position: relative;
  width: 1em;
  height: 1em;
  margin: 1em;
  border-radius: 50%;
  &:before{
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background: inherit;
    border-radius: inherit;
    animation: ${wave} 2s ease-out infinite;
  }
  background-color: ${(props)=>props.color};
  &:before{
    animation-delay: ${(props)=>props.index * 0.3+'s'};
  }
`;

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
          <Loading>
            <Dot className="dot" color='#7ef9ff' index='1'></Dot>
            <Dot className="dot" color='#89cff0' index='2'></Dot>
            <Dot className="dot" color='#4682b4' index='3'></Dot>
            <Dot className="dot" color='#0f52ba' index='4'></Dot>
            <Dot className="dot" color='#000080' index='5'></Dot>
          </Loading>
        ) : (
          <h1>Hello YERIEL</h1>
      )}
    </>
  );
};

export default App;