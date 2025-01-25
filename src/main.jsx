import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from 'react-router-dom'
import Root, {action as franchiseAction} from './root'
import ErrorPage from './error-page'
import App from './App'
const router = createBrowserRouter([{
    path: "/",
  element: <Root />,
  action: franchiseAction,
    errorElement:<ErrorPage/>
}])
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <App router={router}/>
  </StrictMode>
)
