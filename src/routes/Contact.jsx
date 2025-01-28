/* eslint-disable react/prop-types */



export default function Contact (){
 
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
        <img
          className="mask mask-hexagon-2 size-8/12"
          src={'./gallery1.jpg'}
          alt="mask image"
        />
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
