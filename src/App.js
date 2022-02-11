import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import './App.css';
import CreateInputs from './components/createInputs/createInputs';
import RandomNumbers from './components/randomNumbers';
import ShowNumbers from './components/showNumbers/ShowNumbers';
import InputedNumbersContext from './context/InputedNumbersContext';
import RandomNumbersContext from './context/RandomNumbersContext';

const generateArray = count => {
  let arr = [];

  for (let i = 0; i < count; i++) {
    let random = Math.round(Math.random() * 10);

    if(arr.includes(random + '')){
      i--
    }else{
      arr.push(random + '')
    }
    
  }

  return arr;
}

function App() {
  const [context, setContext] = useState([])
  const [show, setShow] = useState(false)
  const [count, setCount] = useState(['item']);
  useEffect(() => {
    setShow(false)
  }, [count])
  return (
    <div className="App">
      <RandomNumbersContext.Provider value={generateArray(4)}>
        <InputedNumbersContext.Provider value={context}>
          <div>
            <RandomNumbers />
          </div>
          <div className='inputs'>
            <div className='inputs-block1'>
              {
                count.map((item, index) => {
                  return (
                    <CreateInputs 
                      key={index}
                      setContext={setContext} 
                      setShow={setShow} 
                      onShow={() => {
                        setShow(!show)
                      }}
                      onClick={() => {
                        setCount(prev => [...prev, 'item'])
                      }}
                    />
                  )
                })
              }
            </div>
            <div className='inputs-block2'>
              <ShowNumbers 
                show={show}                       
                onClick={() => {
                  setCount(prev => [...prev, 'item'])
                }} 
              />
            </div>
          </div>
        </InputedNumbersContext.Provider>
      </RandomNumbersContext.Provider>
    </div>
  );
}

export default App;
