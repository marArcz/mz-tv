import toast, { Toaster } from 'react-hot-toast';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './_root/pages/Home';
import Watch from './_root/pages/Watch';

function App() {

    return (
        <>
            <main className='h-screen w-full dark:bg-dark-bg text-white flex flex-col px-4 py-7'>
                <Routes>
                    <Route path='/watch' element={<Watch/>}/>
                    <Route index element={<Home/>}/>
                </Routes>
            </main>
            {/* toast container */}
            <Toaster />
        </>
    )
}

export default App
