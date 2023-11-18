import { Navbar, Footer } from './components';

const App = () => (
  <div className="container mx-auto px-[72px]">
    <Navbar />
    <Footer />
    <a href="#" id='scrollButton'
      className='px-[30px] py-1.5 bg-red-500 rounded-[34px] shadow justify-center items-center inline-flex text-white text-[21px] font-normal leading-9 fixed bottom-[20px] left-0 right-0 m-auto max-w-max'>
      Заказать дизайн
    </a>
  </div>
)

export default App