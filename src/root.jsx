/* eslint-disable react/prop-types */
//import { IStaticMethods } from 'flyonui/flyonui'
import { useEffect,} from 'react';
import { useLocation, Outlet } from 'react-router-dom';
//import Hero from '../components/Hero';
import {towns,} from '../utils/turkey'
//import Navbar from '../components/Navbar';
//import Footer from '../components/Footer';
import { NavLink } from 'react-router-dom'
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
      <Navbar />
        
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




const  Navbar = ()=> {
     
  return (
    <nav className="intersect:motion-opacity-in-0 intersect:motion-duration-[2s] intersect:motion-translate-y-in-100 navbar rounded-none justify-between gap-4 sticky top-0 z-50 shadow">
      <div className="navbar-start">
       
          <div className="dropdown   relative inline-flex [--auto-close:inside] [--offset:9]">
            <button
              id="dropdown-name"
              type="button"
              className="dropdown-toggle btn btn-text btn-circle dropdown-open:bg-base-content/10 dropdown-open:text-base-content"
              aria-haspopup="menu"
              aria-expanded="false"
              aria-label="Dropdown"
            >
              <span className="icon-[tabler--menu-2] size-6 lg:size-8 "></span>
            </button>
            <ul
              className="dropdown-menu dropdown-open:opacity-100 hidden"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="dropdown-name"
            >
              <li>
                <NavLink className="dropdown-item" to="/">
                  Ana Sayfa
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="/about">
                  Hakkımızda
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="/sube">
                  Şubelerimiz
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="/contact">
                  İletişim
                </NavLink>
              </li>

              <hr className="border-base-content/25 -mx-2 my-3" />

              <li>
                <NavLink className="dropdown-item" to="/franchising">
                  Franchising
                </NavLink>
              </li>
            </ul>
          </div>
      

       
      </div>
      <div className="navbar-center flex items-center">
        <a
          className="link text-base-content link-neutral text-xl font-semibold no-underline"
          href="#"
        >
          <img src="./logo.png" className="w-14 lg:w-24" />
        </a>
      </div>
      <div className="navbar-end items-center gap-4">
        <a
          target="_blank"
          href="https://www.instagram.com/romacoffeetea/"
          className="btn btn-sm btn-text btn-circle size-[2.125rem]"
          aria-label="Search Button"
        >
          <span className="icon-[tabler--brand-instagram] lg:size-8 size-[1.375rem]"></span>
        </a>
      </div>
    </nav>
  )
}








//import { Link } from 'react-router-dom'
const  Footer =()=> {
  
  return (
    <footer className="footer  intersect:motion-preset-slide-up intersect:motion-opacity-in-0 intersect:motion-duration-[2s] bg-base-200/60 px-6 py-4">
      <div className="flex w-full flex-wrap items-center justify-between">
        <div className="flex items-center gap-2 text-xl font-bold">
          <img src="./logo.png" className="w-14 lg:w-24" />
        </div>
        <aside className="grid-flow-col items-center">
          <p>
            {' '}
            ©2025{' '}
            <a className="link link-hover font-medium" href="#">
              Roma Coffee Tea
            </a>{' '}
          </p>
        </aside>
        <div className="flex h-5 gap-4">
          <a href="#" className="link" aria-label="Github Link">
            <span className="icon-[tabler--brand-github] size-5"></span>
          </a>
          <a href="#" className="link" aria-label="Facebook Link">
            <span className="icon-[tabler--brand-facebook] size-5"></span>
          </a>
          <a href="#" className="link" aria-label="X Link">
            <span className="icon-[tabler--brand-x] size-5"></span>
          </a>
          <a href="#" className="link" aria-label="Google Link">
            <span className="icon-[tabler--brand-google] size-5"></span>
          </a>
          <a
            target="_blank"
            href="https://bysolitdio.net"
            className="link"
            aria-label="bySolitdio Link"
          >
            <img src="./bysolitdio.svg" className="w-16 bg-black p-2"></img>
          </a>
        </div>
      </div>
    </footer>
  )
}




