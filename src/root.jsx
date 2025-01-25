/* eslint-disable react/prop-types */
//import { IStaticMethods } from 'flyonui/flyonui'
import { useEffect, useState} from 'react';
import { useLocation, useFetcher,Link } from 'react-router-dom';
//import Hero from '../components/Hero';
import {towns, districts} from '../utils/turkey'
import toast, { Toaster } from 'react-hot-toast'
import { images } from '../utils/images'
import ScrollToHashElement from '@cascadia-code/scroll-to-hash-element'

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
      <ScrollToHashElement />
      <div style={{ backgroundImage: 'url("./gallery3.jpg")' }}>
        <nav className="intersect:motion-opacity-in-0 intersect:motion-duration-[2s] intersect:motion-translate-y-in-100 navbar rounded-none justify-between gap-4 sticky top-0 z-50 shadow">
          <div className="navbar-start">
            <div className="dropdown relative inline-flex [--auto-close:inside] [--offset:9]">
              <button
                id="dropdown-name"
                type="button"
                className="dropdown-toggle btn btn-text btn-circle dropdown-open:bg-base-content/10 dropdown-open:text-base-content"
                aria-haspopup="menu"
                aria-expanded="false"
                aria-label="Dropdown"
              >
                <span className="icon-[tabler--menu-2] size-6 lg:size-8"></span>
              </button>
              <ul
                className="dropdown-menu dropdown-open:opacity-100 hidden"
                role="menu"
                data-scrollspy="#pages"
                data-scrollspy-scrollable-parent="#pages"
                aria-orientation="vertical"
                aria-labelledby="dropdown-name"
              >
                <li>
                  <Link className="dropdown-item" to="#about">
                    Hakkımızda
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#gallery">
                    Galerimiz
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#contact">
                    İletişim
                  </Link>
                </li>
                <hr className="border-base-content/25 -mx-2 my-3" />
                <li>
                  <Link className="dropdown-item" to="#home">
                    Ana Sayfa
                  </Link>
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
              target='_blank'
              href="https://www.instagram.com/romacoffeetea/"
              className="btn btn-sm btn-text btn-circle size-[2.125rem]"
              aria-label="Search Button"
            >
              <span className="icon-[tabler--brand-instagram] lg:size-8 size-[1.375rem]"></span>
            </a>
            

          </div>
        </nav>
        <div id="pages" className="flex-col">
          <div
            className="w-full h-8"
            style={{
              backgroundColor: '#ffffff',
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='32' height='64' viewBox='0 0 32 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 28h20V16h-4v8H4V4h28v28h-4V8H8v12h4v-8h12v20H0v-4zm12 8h20v4H16v24H0v-4h12V36zm16 12h-4v12h8v4H20V44h12v12h-4v-8zM0 36h8v20H0v-4h4V40H0v-4z' fill='%23000000' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            }}
          ></div>
          <Hero />
        </div>
        <div
          className="w-full h-8"
          style={{
            backgroundColor: '#ffffff',
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='32' height='64' viewBox='0 0 32 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 28h20V16h-4v8H4V4h28v28h-4V8H8v12h4v-8h12v20H0v-4zm12 8h20v4H16v24H0v-4h12V36zm16 12h-4v12h8v4H20V44h12v12h-4v-8zM0 36h8v20H0v-4h4V40H0v-4z' fill='%23000000' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}
        ></div>
        <Services />
        <Gallery />

        <About />
        <Contact />
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2991.573072880676!2d33.7746348!3d41.4267854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4084fb9d9bb94229%3A0xbadf45c91e458afd!2sRoma%20Coffee%20Tea!5e0!3m2!1sen!2str!4v1729418522822!5m2!1sen!2str"
        width="100%"
        height="350"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        x
      ></iframe>
      <Footer />
    </>
  )
}



const Hero = () => {
  return (
    <div
      id="home"
      className="flex intersect:motion-opacity-in-0 intersect:motion-duration-[2s] intersect:motion-preset-slide-up flex-col backdrop-blur-md items-center lg:flex-row min-h-96 p-10"
    >
      <div className="lg:w-1/2 w-full justify-items-center lg:justify-items-start text-center lg:text-left flex-col justify-center  space-y-4">
        <h1 className="text-white font-bold text-5xl ">Roma Coffee Tea</h1>
        <p className="text-base-content/80 text-base text-gray-400">
          Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
        </p>
        <div className="flex space-x-2">
          <Link to="#contact" className="btn btn-primary -motion-translate-y-loop-50 motion-duration-[2s] motion-ease-spring-smooth">
            <span className="icon-[tabler--home]"></span> Franchising
          </Link>

          <Link to="#gallery" className="btn btn-secondary">Galeri</Link>
        </div>
      </div>
      <div className="lg:w-1/2 w-full flex justify-center">
        <img
          className="mask mask-hexagon size-8/12"
          src={'./gallery3.jpg'}
          alt="mask image"
        />
      </div>
    </div>
  )
}
const Services = () => {
  return (
    <div id="services" className="flex bg-white intersect:motion-opacity-in-0 intersect:motion-duration-[2s] flex-col backdrop-blur-md justify-between space-y-4 items-center lg:flex-row min-h-96 p-10">
      <div className="card sm:max-w-sm">
        <div className="card-body">
          <button
            className="btn btn-square btn-gradient btn-lg btn-primary"
            aria-label="Gradient Icon Button"
          >
            <span className="icon-[tabler--star] size-8"></span>
          </button>
          <h5 className="card-title mb-2.5">Featured Update</h5>
          <p>
            Explore the latest enhancements and updates. Stay informed with our
            new features designed to improve your experience and deliver greater
            value.
          </p>
        </div>
      </div>

      <div className="card sm:max-w-sm">
        <div className="card-body">
          <button
            className="btn btn-square btn-gradient btn-lg btn-primary"
            aria-label="Gradient Icon Button"
          >
            <span className="icon-[tabler--star] size-8"></span>
          </button>
          <h5 className="card-title mb-2.5">Featured Update</h5>
          <p>
            Explore the latest enhancements and updates. Stay informed with our
            new features designed to improve your experience and deliver greater
            value.
          </p>
        </div>
      </div>

      <div className="card sm:max-w-sm">
        <div className="card-body">
          <button
            className="btn btn-square btn-gradient btn-lg btn-primary"
            aria-label="Gradient Icon Button"
          >
            <span className="icon-[tabler--star] size-8"></span>
          </button>
          <h5 className="card-title mb-2.5">Featured Update</h5>
          <p>
            Explore the latest enhancements and updates. Stay informed with our
            new features designed to improve your experience and deliver greater
            value.
          </p>
        </div>
      </div>
    </div>
  )
}
const About = () => {
  return (
    <div id="about" className="flex bg-white intersect:motion-opacity-in-0 intersect:motion-duration-[2s] flex-col backdrop-blur-md items-center lg:flex-row p-10">
      <div className="lg:w-1/2 w-full justify-items-center lg:justify-items-start text-center lg:text-left flex-col justify-center  space-y-4">
        <p className="text-base-content/80 text-base text-primary">Bizim</p>
        <h1 className="text-gray-950 font-bold text-5xl">Hakkımızda</h1>
        <p className="text-base-content/80 text-base text-gray-900">
          Roma Coffee & Tea olarak, kahve ve çay kültürünü yeniden keşfetmek
          isteyen herkes için özel bir deneyim sunuyoruz. Roma’nın büyülü
          sokaklarından esinlenerek kurduğumuz markamız, kaliteli kahve
          çekirdekleri ve özenle seçilmiş çay çeşitleriyle zengin bir damak
          zevki arayanlar için ideal bir durak. Kahvelerimiz, dünyanın farklı
          bölgelerinden titizlikle toplanan en iyi çekirdeklerle hazırlanır.
          Uzman baristalarımız, her fincanda mükemmel dengeyi yakalamak için
          taze çekirdekleri özenle öğütüp demliyor. Çay tutkunları için de geniş
          bir koleksiyon sunuyoruz; geleneksel lezzetlerden egzotik harmanlara
          kadar uzanan çeşitlerimizle her zevke hitap ediyoruz. Roma Coffee &
          Tea olarak, sadece içecek sunmakla kalmıyor; aynı zamanda rahat bir
          atmosfer, güler yüzlü hizmet ve damaklarda unutulmaz bir tat bırakmayı
          hedefliyoruz. Misafirlerimizin her ziyaretinde kendilerini evlerinde
          hissetmeleri için sıcak, samimi ve huzur dolu bir ortam yaratıyoruz.
          Siz de lezzet dolu bu dünyayı keşfetmek için bizi ziyaret edin.
          Roma’nın ruhunu fincanınızda hissedin!
        </p>
      </div>
      <div className="lg:w-1/2 w-full flex justify-center">
        <img
          className="mask mask-decagon size-8/12"
          src={'./gallery2.jpg'}
          alt="mask image"
        />
      </div>
    </div>
  )
}

const Contact = () => {
  const fetcher = useFetcher()
  const [selectedTown, setSelectedTown] = useState('37')
   useEffect(() => {
     const toastOptions = { duration: 5000 }

     fetcher.data
       ? fetcher.data.msg
         ? toast.success(fetcher.data.msg, toastOptions)
         : toast.error(fetcher.data, toastOptions)
       : ''
   })
  return (
    <div id="contact" className="flex intersect:motion-opacity-in-0 intersect:motion-duration-[2s] flex-col backdrop-blur-md items-center lg:flex-row p-10">
      <div className="lg:w-1/2 w-full justify-items-center lg:justify-items-start text-center lg:text-left flex-col justify-center  space-y-4">
        <p className="text-base-content/80 text-base text-primary">Bizimle</p>
        <h1 className="text-gray-950 font-bold text-5xl">İletişime Geçin</h1>
        <p className="text-base-content/80 text-base text-gray-900">
          Explore the latest enhancements and updates. Stay informed with our
          new features designed to improve your experience and deliver greater
          value.
        </p>
        <ContectCard
          icon="icon-[tabler--mail]"
          title="E-posta"
          value="romacoffeetea37@gmail.com"
        />
        <ContectCard
          icon="icon-[tabler--map-pin]"
          title="Adresimiz"
          value=" Kuzeykent Mahallesi, Vali Aydın Arslan Caddesi, 37150
                        Kuzeykent/Kastamonu"
        />
        <ContectCard
          icon="icon-[tabler--phone]"
          title="Telefonumuz"
          value="+90 546 836 13 26"
        />
      </div>
      <div className="lg:w-1/2 w-full flex justify-center">
        <div className="card lg:max-w-lg w-full">
          <div className="card-header">
            <h5 className="card-title">Franchise Talebi</h5>
          </div>
          <fetcher.Form method="post" className="card-body">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label className="label label-text" htmlFor="firstName">
                  {' '}
                  Ad{' '}
                </label>
                <input
                  type="text"
                  placeholder="John"
                  className="input"
                  id="firstName"
                  name="firstName"
                  required
                />
              </div>
              <Toaster />
              <div>
                <label className="label label-text" htmlFor="lastName">
                  {' '}
                  Soyad{' '}
                </label>
                <input
                  type="text"
                  placeholder="Doe"
                  className="input"
                  id="lastName"
                  name="lastName"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label className="label label-text" htmlFor="email">
                  {' '}
                  Email{' '}
                </label>
                <input
                  type="email"
                  className="input"
                  placeholder="john@gmail.com"
                  id="email"
                  name="email"
                  aria-label="john@gmail.com"
                  required=""
                />
              </div>
              <div>
                <label className="label label-text" htmlFor="phone">
                  {' '}
                  Telefon{' '}
                </label>
                <div className="input-group">
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="input"
                    placeholder="+90 598 000 00 00"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label className="label label-text" htmlFor="town">
                  İl
                </label>
                <select
                  defaultValue={selectedTown}
                  onChange={(e) => setSelectedTown(e.target.value)}
                  className="select max-w-sm appearance-none"
                  aria-label="select"
                  required
                  id="town"
                  name="town"
                >
                  {' '}
                  {towns.map((item) => (
                    <option value={item.id} key={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="label label-text" htmlFor="district">
                  Ilçe
                </label>
                <div className="input-group">
                  <select
                    className="select max-w-sm appearance-none"
                    aria-label="select"
                    required
                    id="district"
                    name="district"
                  >
                    {districts
                      .filter((item) => item.il_id === selectedTown)
                      .map((item) => (
                        <option value={item.id} key={item.id}>
                          {item.name}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div>
                <label className="label label-text" htmlFor="textareaLabel">
                  {' '}
                  Söylemek istediğiniz{' '}
                </label>
                <textarea
                  className="textarea"
                  placeholder="Hello!!!"
                  id="textareaLabel"
                  name="message"
                ></textarea>
              </div>
            </div>
            <button className="btn my-3 btn-gradient btn-primary">
              {fetcher.state === 'idle' ? (
                'Gönder'
              ) : (
                <span className="loading loading-spinner"></span>
              )}
            </button>
          </fetcher.Form>
        </div>
      </div>
    </div>
  )
} 
const ContectCard = ({icon,title, value}) => {
  return (
    <div className="card intersect:motion-opacity-in-0 intersect:motion-duration-[2s] shadow-none sm:card-side max-w-sm sm:max-w-full">
      <figure>
        <div
          className=" flex justify-center items-center p-5  text-white bg-primary"
          aria-label="Gradient Icon Button"
        >
          <span className={`${icon} size-12`}></span>
        </div>
      </figure>
      <div className="card-body">
        <h5 className="card-title mb-2.5"> {title} </h5>
        <p className="mb-3">{value}</p>
      </div>
    </div>
  )
}

const Footer = () => {
  return (
    <footer className="footer intersect:motion-opacity-in-0 intersect:motion-duration-[2s] bg-base-200/60 px-6 py-4">
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
        </div>
      </div>
    </footer>
  )
}


const Gallery = () => {
  return (
    <div
      id="gallery"
      style={{
        backgroundColor: '#ffffff',
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='32' height='64' viewBox='0 0 32 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 28h20V16h-4v8H4V4h28v28h-4V8H8v12h4v-8h12v20H0v-4zm12 8h20v4H16v24H0v-4h12V36zm16 12h-4v12h8v4H20V44h12v12h-4v-8zM0 36h8v20H0v-4h4V40H0v-4z' fill='%23000000' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
      }}
      className="flex flex-col intersect:motion-opacity-in-0 intersect:motion-duration-[2s] items-center lg:flex p-10"
    >
      <div
        id="horizontal-thumbnails"
        data-carousel='{ "loadingClasses": "opacity-0" }'
        className="relative w-full background-opacity-20"
      >
        <div className="carousel">
          <div className="carousel-body h-3/4 opacity-0">
            {images.map((item) => (
              <div key={item.id} className="carousel-slide">
                <div className="flex size-full justify-center">
                  <img
                    src={item.src}
                    className="size-96 object-cover"
                    alt="gallery image"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="carousel-pagination bg-base-100 absolute bottom-0 end-0 start-0 z-[1] h-1/4 gap-2 flex justify-center gap-2 overflow-x-auto pt-2">
            {images.map((item) => (
              <img
                key={item.id}
                src={item.src}
                className="carousel-pagination-item max-h-48 carousel-active:opacity-100 grow object-cover opacity-30"
                alt="pagination"
              />
            ))}
          </div>

          <button type="button" className="carousel-prev">
            <span className="mb-15" aria-hidden="true">
              <span className="size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow">
                <span className="icon-[tabler--chevron-left] size-5 cursor-pointer rtl:rotate-180"></span>
              </span>
            </span>
            <span className="sr-only">Previous</span>
          </button>

          <button type="button" className="carousel-next">
            <span className="sr-only">Next</span>
            <span className="mb-15" aria-hidden="true">
              <span className="size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow">
                <span className="icon-[tabler--chevron-right] size-5 cursor-pointer rtl:rotate-180"></span>
              </span>
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}
