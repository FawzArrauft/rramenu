import './App.css'
// import Buttonmenu from './components/Buttonmenu'
// import Headermenu from './components/Headermenu'
import Homepagemenu from './components/Homepagemenu'
import Menu1 from './components/Menu1'

function App() {
  return (
      <section className='bg-darkpattern w-screen h-screen overflow-y-auto relative bg-cover'>
        <div className=''>
          {/* <Homepagemenu /> */}
          <Menu1 />
        </div>
      </section>
  )
}

export default App
