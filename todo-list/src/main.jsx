import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import TodoContext from './todocontex.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // < TodoContext.Provider value={{list, setList}}>
    <App />
    // </TodoContext.Provider>
)
