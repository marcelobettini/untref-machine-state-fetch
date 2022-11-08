import './App.css'
import { useEffect, useState } from 'react';


function App() {
  const handleResponse = (res) => {
    if (res.ok) {
      res.json()
      setState('loaded')
    } else setState('req-error')
  }
  const [state, setState] = useState('stand-by')
  useEffect(() => {
    setTimeout(() => {
      setState('loading')
      fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => handleResponse(res))
        .catch(err => setState('net-error'))
    }, 1500)
  }, []);

  if (state === "stand-by") return <div className='App-header'>Standing by</div>
  if (state === 'loading') return <div className='App-header'>Data Loading</div>
  if (state === 'loaded') return <div className='App-header'>Data Loaded</div>
  if (state === 'req-error') return <div className='App-header'>request-error, escribí bien los endpoints, cat</div>
  if (state === 'net-error') return <div className='App-header'>network error... not your fault</div>

}

export default App
