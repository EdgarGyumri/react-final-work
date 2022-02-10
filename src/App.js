import React from 'react';
import './App.css';
import InputFields from './components/inputFields';
import RandomNumbers from './components/randomNumbers';
import ShowNumbers from './components/showNumbers/ShowNumbers';
import RandomNumbersContext from './context/RandomNumbersContext';

const generateArray = count => {
  let arr = [];

  for (let i = 0; i < count; i++) {
    let random = Math.round(Math.random() * count);

    if(arr.includes(random)){
      i--
    }else{
      arr.push(random)
    }
    
  }

  return arr;
}

function App() {
  return (
    <div className="App">
      <RandomNumbersContext.Provider value={generateArray(5)}>
        <div>
          <RandomNumbers />
        </div>
        <div>
          <InputFields />
          <ShowNumbers />
        </div>
      </RandomNumbersContext.Provider>
    </div>
  );
}

export default App;
