import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import NewsBoard from './components/NewsBoard/NewsBoard'
import Footer from './components/Footer/Footer';

const App = () => {
  const [category,setCategory] = useState("general");
  return (
    <div>
      <Navbar setCategory={setCategory}/>
      <NewsBoard category={category}/>
      <Footer/>
    </div>
  )
}

export default App