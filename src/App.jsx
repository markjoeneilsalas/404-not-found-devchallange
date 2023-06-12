import Navbar from './components/Navbar'
import Hero from './components/Hero'
import './App.css'



const App = () => (
    <div>
      <div className='nav'>
        <Navbar />
      </div>
      <section>
        <div>
          <Hero />
        </div>
      </section>

      <div className='creator'>
        created by Dxdex - devChallenges.io
      </div>
    </div>
  )

export default App