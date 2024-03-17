
import './App.css';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from './component/Navbar';
import Locationbar from './component/Locationbar';

function App() {
  return (
    <>
      <main>
        <Routes>
          <Route>
            <Route></Route>
            <Route exact
              path="/" element={<Home />} />
            <Route path='/*' element={<MainSection />}></Route>
            <Route path='*' element={<NoMatch />} />
          </Route>
        </Routes>
      </main>
    </>
  );
}

const NoMatch = () => {
  return (
    <div className='No_Match'>
      <h2>Webpage Under Construction!!!</h2>
      <p>We are working on something awesome. Please check back later.</p>
      <Link to="/" className="back-to-home-button">Back to Home</Link>
    </div>
  )
}

const MainSection = () => {
  return (
    <>
      <Locationbar />
      <section className='home_section'>
        <div className="home_content">
          <Outlet />
        </div>
      </section>
      <Navbar />
    </>
  )
}

export default App;
