/* eslint-disable react/prop-types */
import { sube } from "../../utils/subeler"
export default function Sube() {
    return (
      <div className="flex flex-col lg:flex-row intersect:motion-preset-slide-up intersect:motion-opacity-in-0 intersect:motion-duration-[2s] p-10">
        {sube.map((item, index) => (
          <div key={index} className="card image-full sm:max-w-sm">
            <figure>
              <img src={item.image} alt="Watch" />
            </figure>
            <div className="card-body">
              <h5 className="card-title mb-2.5 text-primary"> {item.name} </h5>
              <ContectCard
                icon="icon-[tabler--mail]"
                title="E-posta"
                value={item.email}
              />
              <ContectCard
                icon="icon-[tabler--map-pin]"
                title="Adres"
                value={item.address}
              />
              <ContectCard
                icon="icon-[tabler--phone]"
                title="Telefon"
                value={item.phone}
              />
            </div>
          </div>
        ))}
      </div>
    )
}


const ContectCard = ({ icon, title, value }) => {
  return (
    <div className="card m-2 intersect:motion-preset-slide-up intersect:motion-opacity-in-0 intersect:motion-duration-[2s] shadow-none sm:card-side max-w-sm sm:max-w-full">
      <figure>
        <div
          className=" flex justify-center items-center p-5  text-white bg-primary"
          aria-label="Gradient Icon Button"
        >
          <span className={`${icon} size-6`}></span>
        </div>
      </figure>
      <div className="card-body">
        <h5 className="card-title mb-2.5"> {title} </h5>
        <p className="mb-3">{value}</p>
      </div>
    </div>
  )
}