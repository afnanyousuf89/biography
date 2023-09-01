import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile';
import { Suspense, lazy, useMemo, useState } from 'react';
const SomeHeavyLoad = lazy(()=>import('./components/SomeHeavyLoad'));

function App() {
  const [a,setA] = useState(0);
  const [show,setShow] = useState(false);
  const dep = 0;

  const heavyLoadB = useMemo(()=>{
    let index;
    for (index = 0; index < 1000000000; index++) {
    
    }
    return index;
  },[dep])




  let handleclick = () => {
    setA((p)=>p+1)
    setShow(true)
  }
  console.log('Profile is called')
  return (
    <>
    {/* <p>Heavy Value: {heavyLoadB}</p>
    <input type='button' onClick={handleclick} value="+" />
    <p>{ show && a}</p>
      <Profile /> */}

      <Suspense fallback={<h1>Loading.....</h1>}>
        <SomeHeavyLoad />
      </Suspense>

    </>
  );
}

export default App;
