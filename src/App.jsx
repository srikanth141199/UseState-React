import { useState } from 'react';
import data from './data'

const App = () => {

  const [birthList, setbirthlist] = useState(data)
  const Handeler = () =>{
    setbirthlist([]);
  }
  return (
    <main >
      <section className='container'>
      <h3>Birthday Buddy</h3>
      {(birthList.map((obj1)=>{
        return(
          <section className='person' key={obj1.id}>
            <img className='img' src={obj1.image} alt={obj1.name} />
            <h4>{obj1.name}</h4>
            <p>{obj1.age} years</p>
          </section>
        )
      }))}
      <button onClick={Handeler} className='btn btn-block'>Clear All</button>
      </section>
    </main>
  );
};
export default App;

