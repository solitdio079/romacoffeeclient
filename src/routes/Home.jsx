import { Link } from "react-router-dom"
import {images} from "../../utils/images"
export default function HomePage() {
  return (
   <Carousel/>
  )
}

const Carousel = () => {
    return (
      <div
        data-carousel='{
    "loadingClasses": "opacity-0",
    "dotsItemClasses": "carousel-box",
    "isAutoPlay": true, "speed": 2000 
  }'
        className="relative w-full rounded-none intersect:motion-opacity-in-0 intersect:motion-duration-[2s] intersect:motion-preset-slide-up"
      >
        <div className="carousel min-h-96">
          <div className="carousel-body h-full opacity-0">
            <div
              className="carousel-slide"
              style={{ backgroundImage: 'url("./gallery1.jpg")' }}
            >
              <div
                id="home"
                className="flex  flex-col backdrop-blur-md items-center lg:flex-row min-h-96 p-10"
              >
                <div className="lg:w-1/2 w-full justify-items-center lg:justify-items-start text-center lg:text-left flex-col justify-center  space-y-4">
                  <h1 className="text-white font-bold text-5xl ">
                    Roma Coffee Tea
                  </h1>
                  <p className="text-base-content/80 text-base text-gray-400">
                    Vivo pro Capulus.
                  </p>
                  <div className="flex space-x-2">
                    <Link
                      to="#contact"
                      className="btn btn-primary -motion-translate-y-loop-50 motion-duration-[2s] motion-ease-spring-smooth"
                    >
                      <span className="icon-[tabler--home]"></span> Franchising
                    </Link>

                    <Link to="#gallery" className="btn btn-secondary">
                      Galeri
                    </Link>
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
            </div>

            {images.map((item) => (
              <div
                key={item.src}
                style={{ background: `url(${item.src})` }}
                className="carousel-slide"
              >
                <div className="flex h-full justify-center">
                  <img
                    src={item.src}
                    className="size-full max-h-screen object-cover"
                    alt="game"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <button type="button" className="carousel-prev">
          <span className="size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow">
            <span className="icon-[tabler--chevron-left] size-5 cursor-pointer rtl:rotate-180"></span>
          </span>
          <span className="sr-only">Previous</span>
        </button>
        <button type="button" className="carousel-next">
          <span className="sr-only">Next</span>
          <span className="size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow">
            <span className="icon-[tabler--chevron-right] size-5 cursor-pointer rtl:rotate-180"></span>
          </span>
        </button>

        <div className="carousel-pagination absolute bottom-3 end-0 start-0 flex justify-center gap-3"></div>
      </div>
    )
}

