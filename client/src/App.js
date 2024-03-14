import React from 'react'
import img from './static/badAssGorilla.jpg'
import './App.css';

function App() {

  const [open, setOpen] = React.useState(false)

  return (
    <div className="App">
      <button onClick={() => setOpen(true)} className='button'>Modal Window</button>
        <div className={`modal-window ${open ? 'show' : ''}`}>
          <img className='img' src={img} alt='i1'/>
          <button onClick={() => setOpen(false)} className='X'>X</button>
        </div>
    </div>
  );
}

export default App;
