/* eslint-disable react/prop-types */
import { RouterProvider } from "react-router-dom";
import SplashScreen from "./Spashscreen";
import { useEffect, useState } from "react";
import ObserverProvider from "./Observer";

export default function App({ router }) {
   const [showSplashscreen, setShowSplashscreen] = useState(true)

   useEffect(() => {
     setTimeout(() => {
       setShowSplashscreen(false)
     }, 3000)
   }, [])

   return showSplashscreen ? (
     <SplashScreen />
   ) : (
     <ObserverProvider>
       <RouterProvider router={router} />
     </ObserverProvider>
   )
}