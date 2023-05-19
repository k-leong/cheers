import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter basename={import.meta.env.DEV ? '/' : '/cheers/'}>
    <App />
  </BrowserRouter>
)

