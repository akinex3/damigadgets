// import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './HOC/Navbar';
import Users from './componentss/Users';
import About from './Pages/About';
import GadgetBlog from './componentss/GadgetBlog';
import Blog from './componentss/blog';
import ErrPage from './componentss/ErrPage';
import DetailPage from './Pages/DetailPage';
import NewBlog from './Pages/NewBlog';
function App() {


  

  return (
   <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/users' element={<Users />} />
          <Route path='/about' element={<About />} />
          <Route path='/gadgets' element={<GadgetBlog />} />
          <Route path='/blog' element={<Blog/>} />
          <Route path='/gadgets/:id' element={<DetailPage />} />
          <Route path='/addblog' element={<NewBlog />} />
          <Route path='*' element={<ErrPage/>} />
        </Routes>
   </Router>
  );
}

export default App;
