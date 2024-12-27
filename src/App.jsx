
import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navi from './Components/Nav/Nav.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navi />
    </>
  )
}

export default App;
