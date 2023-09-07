import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const incrementCounter = () => {
    document.getElementById('flutter_widget')?.contentWindow?.postMessage(
      {
        sender: "React",
        message: "Hello Flutter"
      },
      "*"
    );
    setCount(count + 1)
  }

  useEffect(() => {
    document.getElementById('flutter_widget')?.contentWindow?.addEventListener('main_page', message => {
      setCount(count + 1)
    });
  }, [])

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={incrementCounter}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <iframe id="flutter_widget" src="http://localhost:56070/" height="500" width="500" />,
    </>
  )
}

export default App
