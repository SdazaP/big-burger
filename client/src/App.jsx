import "./App.css";
import SplitText from "./components/SplitText";
import AnimatedContent from "./components/AnimatedContent";

function App() {
  const phoneNumber = "+522411036474";
  const message = "Hola, me gustaría ordenar...";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  return (
    <>
      {/* Header */}
      <section className="hero body-font h-dvh flex justify-center items-center bg-black">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0"></div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <SplitText></SplitText>
            <h1 className="text-center text-white tracking-widest text-xl lilita-one-regular mb-4">
              Siguenos en nuestras redes
            </h1>
            <div className="grid grid-cols-4 gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=100094771684830"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  id="facebook"
                  className="bg-white sticky duration-500 border-2 border-blue-600 fixed w-12 transform hover:-translate-y-3 h-12 text-2xl rounded-full hover:bg-blue-600 hover:text-white text-blue-600"
                >
                  <i className="fab fa-facebook-f"></i>
                </button>
              </a>
              <a
                href="https://www.instagram.com/big__burger29/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  id="instagram"
                  className=" border-2 hover:border-0 border-pink-500 bg-gradient-to-b text-2xl hover:from-indigo-600 hover:via-pink-600 hover:to-yellow-500 min-w-wull hover:text-white bg-white text-pink-600 w-12 h-12  transform hover:-translate-y-3 rounded-full duration-500 "
                >
                  <i className="fab fa-instagram"></i>
                </button>
              </a>

              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <button
                  id="whatsapp"
                  className="bg-white duration-500    w-12 h-12 border-2 rounded-full border-green-600 transform hover:-translate-y-3  text-2xl text-green-500 hover:bg-green-600 hover:text-white"
                >
                  <i className="fab fa-whatsapp"></i>
                </button>
              </a>

              <button
                id="tiktok"
                className="bg-white transform hover:-translate-y-3  border-2 w-12 h-12 rounded-full duration-500 text-black border-black hover:bg-black hover:text-white text-2xl"
              >
                <i className="fab fa-tiktok"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Galeria */}
      <h1 className="text-center text-yellow-400 tracking-widest text-6xl mb-1 mt-6 lilita-one-regular">
        GALERÍA
      </h1>
      <AnimatedContent
        distance={150}
        direction="horizontal"
        reverse={false}
        config={{ tension: 80, friction: 20 }}
        initialOpacity={0.2}
        animateOpacity
        scale={1.1}
        threshold={0.2}
      >
        <div className="container mx-auto p-4 mt-12 mb-12 ">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://upload.wikimedia.org/wikipedia/commons/0/03/Kashi_Vishwanath_Temple_Banaras.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://pbs.twimg.com/media/FGRnUzPVEAAbqM8?format=jpg&name=large"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://pbs.twimg.com/media/FGRnNpAVUAYqRYv?format=jpg&name=large"
                  alt=""
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://pbs.twimg.com/media/FGRnP_TUUAAttG3?format=jpg&name=large"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://i.pinimg.com/originals/c0/7d/17/c07d17d7ca0b9f39f5aded4b6dca8f02.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Benares-_The_Golden_Temple%2C_India%2C_ca._1915_%28IMP-CSCNWW33-OS14-66%29.jpg/1280px-Benares-_The_Golden_Temple%2C_India%2C_ca._1915_%28IMP-CSCNWW33-OS14-66%29.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://www.jagranimages.com/images/newimg/27072020/27_07_2020-shri-kashi-vishwanath-temple_20557350.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://www.jansatta.com/wp-content/uploads/2021/12/Kashi-Vishwanath-Mandir.png?w=1024"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://staticimg.amarujala.com/assets/images/2021/11/07/750x506/kashi-vishwanath-dham_1636258507.jpeg?w=674&dpr=1.0"
                  alt=""
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://staticimg.amarujala.com/assets/images/2020/01/13/750x506/kashi-vishwanath-mandir-varanasi_1578924152.png?w=700&dpr=2.0"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Ahilya_Ghat_by_the_Ganges%2C_Varanasi.jpg/800px-Ahilya_Ghat_by_the_Ganges%2C_Varanasi.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://upload.wikimedia.org/wikipedia/commons/2/25/Chet_Singh_Ghat_in_Varanasi.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </AnimatedContent>

      {/* Menu */}
      <h1 className="text-center text-yellow-400 tracking-widest text-6xl mb-1 lilita-one-regular">
        MENÚ
      </h1>
      <section className="body-font flex flex-col sm:flex-row gap-8 sm:gap-24 mx-auto justify-center items-center p-4">
        <img
          className="h-auto max-w-full rounded-lg sm:max-w-[45%]"
          src="https://scontent.xx.fbcdn.net/v/t1.15752-9/474357371_397226223449933_6001185992665505139_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=0024fc&_nc_ohc=iaV-W3v8b0AQ7kNvgHrK_sr&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gFo6VhQW8FN8KXBQLE90c8uHKo7FgEjRwLnopQTzkhHiQ&oe=67C10F30"
          alt=""
        />
        <img
          className="h-auto max-w-full rounded-lg sm:max-w-[45%]"
          src="https://scontent.xx.fbcdn.net/v/t1.15752-9/474041244_411373702001334_3034937472672885430_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=0024fc&_nc_ohc=yMlUPXnmhzMQ7kNvgGP20Zy&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gF4F5kXjPl0SJECp6pvT-zL8MHPZKKAe1Mw3p91aFSx7w&oe=67C11231"
          alt=""
        />
      </section>

      {/* Mapa */}
      <h1 className="text-center text-yellow-400 tracking-widest text-6xl mt-6 lilita-one-regular">
        NUESTRA UBICACIÓN
      </h1>
      <section className="text-gray-600 body-font h-screen flex items-center justify-center">
        <div className="container mx-auto flex sm:flex-nowrap w-dvh">
          <div className="lg:w-full sm:w-1/2 bg-gray-300 rounded-lg h-[80vh] overflow-hidden sm:mr-10 p-10 flex items-end justify-center relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameBorder="0"
              title="map"
              marginHeight="0"
              marginWidth="0"
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30103.953486087452!2d-98.16030272993805!3d19.41265718917218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d02018b3a0bddd%3A0xa99644cd634bcb3e!2sCdad.%20de%20Apizaco%2C%20Tlax.!5e0!3m2!1ses-419!2smx!4v1739822264717!5m2!1ses-419!2smx"
            ></iframe>
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  DIRECCIÓN
                </h2>
                <p className="mt-1">
                  Photo booth tattooed prism, portland taiyaki hoodie neutra
                  typewriter
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  NUESTRO CORREO
                </h2>
                <a className="text-yellow-500 leading-relaxed">
                  example@email.com
                </a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  ORDENA AL
                </h2>
                <p className="leading-relaxed">2411036474</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pie de página */}
      <footer className="text-gray-white body-font">
        <div className="bg-black">
          <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-10 h-10 text-white p-2 bg-yellow-500 rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="ml-3 text-xl">BIG BURGER</span>
            </a>
            <p className="text-sm text-white sm:ml-6 sm:mt-0 mt-4">
              © 2025 Sebastian Daza —
              <a
                href="https://www.linkedin.com/in/sebdazap/"
                rel="noopener noreferrer"
                className="text-gray-400 ml-1"
                target="_blank"
              >
                @sebdazap
              </a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <a
                className="ml-3 text-gray-500"
                href="https://www.instagram.com/_sdzap_/"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a
                className="ml-3 text-gray-500"
                href="https://www.linkedin.com/in/sebdazap/"
              >
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
