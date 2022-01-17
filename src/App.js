
const Header = () => {

  return <header>
    <nav className="uppercase container flex justify-start items-center  mt-4 sm:mt-12">
      <div><img src="./logo512.png" className="w-16 md:w-20" alt="reactjs logo" /></div>
      <ul className=" hidden sm:flex flex-1 justify-end  items-center gap-12 text-cyan-500">
        <a href="#Home" className="hover:text-cyan-600 cursor-pointer">Home</a>
        <a href="#Services" className="hover:text-cyan-600 cursor-pointer">Services</a>
        <a href="#Contact" className="hover:text-cyan-600 cursor-pointer">Contact</a>
        <button className="bg-cyan-400 text-white px-7 py-3 rounded-md uppercase hover:bg-cyan-600">Login</button>
      </ul>
      <div class="flex sm:hidden flex-1 justify-end">
        <i class="text-2xl fas fa-bars"></i>
      </div>
    </nav>
  </header>
}

const Hero = () => {

  return <section id="Home" className="relative">
    <div className="container  flex flex-col-reverse lg:flex-row gap-12 mt-24">
      <div className="flex flex-1 flex-col justify-center items-left">
        <h2 className="uppercase sm:text-[30px] text-[20px] font-bold text-cyan-500  mb-3">Hi, I'm Amer. A web developer</h2>
        <p className="text-sm text-left font-normal">This is me Amer. I have a passion to learn new technologies. This website is created by using <span className="text-pink-600 font-medium">TailwindCss</span> </p>
        <div className="mt-10 flex gap-5 justify-start">
          <button className="flex gap-2 shadow-md py-3 px-7 transition hover:bg-cyan-600 text-white rounded-md duration-30 bg-cyan-500"><a href="https://github.com/amer2019IIUM" target="_blank" rel="noopener noreferrer"> View Github </a><i className="fab fa-github text-[22px]"></i></button>
          <button className="flex gap-2 shadow-md py-3 px-7 transition hover:bg-cyan-600 text-white rounded-md duration-30 bg-cyan-500"><a href="https://codepen.io/amer2019iium" target="_blank" rel="noopener noreferrer"> View Codepen  </a><i className="fab fa-codepen text-[22px]"></i></button>
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-center items-start z-10 ">
        <img src="https://d3kqdc25i4tl0t.cloudfront.net/articles/content/543_378726_tech.hero.jpg" className="w-full rounded-lg " alt="" />
      </div>
    </div>
    <div className="hidden lg:block overflow-hidden bg-cyan-500 rounded-l-full top-1/2 right-0  origin-bottom  lg:-bottom-28 lg:-36 absolute h-60 w-2/6"></div>
  </section >
}

const Services = () => {
  return <section id="Services" className="services bg-gray-100 h-[450px] mt-36">

    <div className="container flex flex-col justify-center items-center sm:pt-20 pt-10">
      <h2 className="text-xl sm:text-3xl font-medium uppercase text-cyan-500">Services</h2>
      <p className="font-light text-center">These are some services that I'm working on:</p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mt-5 ">
        <div className="bg-white w-58 border flex justify-center items-center p-10 rounded-xl hover:scale-105">
          <div className="text-center">
            <i class="fas fa-laptop text-[50px]  text-gray-600"></i>
            <h2 className="text-xl font-bold text-cyan-500 my-2">Web Development</h2>
            <p className="text-sm">I'm working on the web development and still learning new technologies.</p>
          </div>
        </div>
        <div className="bg-white w-58 border flex justify-center items-center py-4 rounded-xl hover:scale-105">
          <div className="text-center ">
            <i class="fas fa-mobile text-[50px] text-gray-600"></i>
            <h2 className="text-xl font-bold text-cyan-500 my-2">Mobile Development</h2>
            <p className="text-sm">I'm working on the Mobile development and still learning new technologies.</p>
          </div>
        </div>
        <div className="bg-white w-58 border flex justify-center items-center py-4 rounded-xl hover:scale-105">
          <div className="text-center">
            <i class="far fa-object-ungroup text-[50px] text-gray-600"></i>
            <h2 className="text-xl font-bold text-cyan-500 my-2">Design UIs</h2>
            <p className="text-sm">I'm working on the web development and still learning new technologies.</p>
          </div>
        </div>


      </div>
    </div>
  </section>
}


const Contact = () => {
  return <section id="Services" className="services h-[320px]">

    <div className="container flex flex-col justify-center items-center sm:pt-20 pt-10 mt-72 md:mt-0">
      <h2 className="text-xl sm:text-3xl font-medium uppercase text-cyan-500">Get in touch</h2>
      <div className="grid  gap-28 grid-cols-3 mt-5 ">
        <div className="bg-cyan-500  border flex justify-center items-center py-4 rounded-xl hover:scale-105  ">
          <div className="text-center">
            <i class="fab fa-instagram text-[50px]  text-white"></i>
          </div>
        </div>
        <div className="bg-cyan-500 border flex justify-center items-center py-4 rounded-xl hover:scale-105 ">
          <div className="text-center ">
            <i class="fab fa-facebook text-[50px] text-white"></i>

          </div>
        </div>
        <div className="bg-cyan-500 border flex justify-center items-center py-4 rounded-xl hover:scale-105  ">
          <div className="text-center ">
            <i class="fab fa-linkedin text-[50px] text-white"></i>
          </div>
        </div>


      </div>
    </div>
  </section>
}


const Footer = () => {
  return <section className="services  bg-cyan-500 text-white">

    <div className="container flex flex-col justify-center items-center py-5">
      <p> Developed by Amer using <span className="text-pink-300"><a href="https://tailwindcss.com/" target=" _blank" rel="noopener noreferrer">TailwindCss</a> && <a href="https://reactjs.org/" target=" _blank" rel="noopener noreferrer">ReactJs</a></span> </p>

    </div>
  </section >
}

function App() {

  return (
    <div className="font-Poppins">
      <Header />
      <Hero />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;