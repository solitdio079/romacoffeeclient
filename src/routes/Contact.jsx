/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import {  useFetcher,  } from 'react-router-dom'
//import Hero from '../components/Hero';
import { towns, districts } from '../../utils/turkey'
import toast, { Toaster } from 'react-hot-toast'


export default function Contact (){
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
    <div
      id="contact"
      className="flex intersect:motion-preset-slide-up intersect:motion-opacity-in-0 intersect:motion-duration-[2s] flex-col backdrop-blur-md items-center lg:flex-row p-10"
    >
      <div className="lg:w-1/2 w-full justify-items-center lg:justify-items-start text-center lg:text-left flex-col justify-center  space-y-4">
        <p className="text-base-content/80 text-base text-primary">Bizimle</p>
        <h1 className="font-bold text-5xl">İletişime Geçin</h1>
        <p className="text-base-content/80 text-base">
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
        <div className="card lg:max-w-lg w-full my-3 lg:my-0">
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
const ContectCard = ({ icon, title, value }) => {
  return (
    <div className="card  intersect:motion-preset-slide-up intersect:motion-opacity-in-0 intersect:motion-duration-[2s] shadow-none sm:card-side max-w-sm sm:max-w-full">
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
