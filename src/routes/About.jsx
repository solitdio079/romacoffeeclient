import { useEffect } from 'react'
import { useLocation,} from 'react-router-dom'
export default function About() {
  const location = useLocation()

  useEffect(() => {
    const loadFlyonui = async () => {
      await import('flyonui/flyonui')
      window.HSStaticMethods.autoInit()
    }
    loadFlyonui()
  }, [location.pathname])
  return (
    <div
      id="about"
      className="flex bg-white  intersect:motion-preset-slide-up intersect:motion-opacity-in-0 intersect:motion-duration-[2s] flex-col backdrop-blur-md items-center lg:flex-row p-10"
    >
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
