import { Outlet } from 'react-router-dom'
import {Header,Footer} from './index'

function App() {
  return (
    <>
      <div className='flex flex-col justify-start items-center gap-4 bg-slate-50 '>
        <div className='border-b sticky top-0 border-gray-400 w-full'>
        <Header/>
        </div>

        <Outlet/>

        <div className='border-t border-gray-400 w-full'>
        <Footer/>
        </div>
      </div>

    </>
  )
}

export default App