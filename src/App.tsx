import './App.css'
import NewsAndAdv from './components/NewsAndAdv/NewsAndAdv'
import Services from './components/Services/Services'
import Search from './components/Search/Search'
import Banner from './components/Banner/Banner'
import Usefulls from './components/Usefulls/Usefulls'

function App() {
  return (
    <div className='container'>
      <NewsAndAdv />
      <Services />
      <Search />
      <Banner />
      <Usefulls />
    </div>
  )
}

export default App
