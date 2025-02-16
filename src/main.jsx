import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from 'react-router-dom'
import Root, {action as franchiseAction} from './root'
import ErrorPage from './error-page'
import App from './App'
import About from './routes/About'
import HomePage from './routes/Home'
import Contact from './routes/Contact'
import Franchise from './routes/Franchising'
import Sube from './routes/Sube'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    action: franchiseAction,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/about',
        element: <About />,
        errorElement: <ErrorPage />,
      },

      {
        path: '/contact',
        element: <Contact />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/sube",
        element: <Sube />,
        errorElement:<ErrorPage/>
      },
      {
        path: '/franchising',
        element: <Franchise/>,
        errorElement: <ErrorPage />,
      },
    ],
  },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <App router={router}/>
  </StrictMode>
)
