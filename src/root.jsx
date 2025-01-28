/* eslint-disable react/prop-types */
//import { IStaticMethods } from 'flyonui/flyonui'
import { useEffect,} from 'react';
import { useLocation, Outlet } from 'react-router-dom';
//import Hero from '../components/Hero';
import {towns,} from '../utils/turkey'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
//import ScrollToHashElement from '@cascadia-code/scroll-to-hash-element'

export async function action({ request }) {
  const formData = await request.formData()

  const bodyObject = Object.fromEntries(formData)
  bodyObject.town = towns.filter((item) => item.id === bodyObject.town)[0].name
  bodyObject.fullName = bodyObject.firstName + " " +bodyObject.lastName

  try {
    const req = await fetch('https://romacoffeeserver.onrender.com/franchise', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bodyObject),
    })

    const response = await req.json()
    return response
  } catch (error) {
    return { error: error.message }
  }
}
export default function Root() {
  const location = useLocation()
 
    useEffect(() => {
      const loadFlyonui = async () => {
        await import('flyonui/flyonui')
        window.HSStaticMethods.autoInit()
      }
      loadFlyonui()
    }, [location.pathname])
  return (
    <>
      
        <Navbar/>
        
        <Outlet/>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2991.573072880676!2d33.7746348!3d41.4267854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4084fb9d9bb94229%3A0xbadf45c91e458afd!2sRoma%20Coffee%20Tea!5e0!3m2!1sen!2str!4v1729418522822!5m2!1sen!2str"
        width="100%"
        height="350"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        x
      ></iframe>
     <Footer/>
    </>
  )
}










