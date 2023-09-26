import { useState } from 'react'
import Header from './components/Header'
import RoleSelect from './components/RoleSelect'
import Textarea from './components/Textarea'
import GenerateButton from './components/GenerateButton'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="p-2 md:px-4 min-h-screen">
      <Header />
      <main className="p-2 mt-8 md:mt-10 flex flex-col md:justify-center">
        <h1 className="text-center md:self-center sm:text-6xl text-4xl max-w-[708px] font-bold text-slate-900">
          Decrypt AWS Cloudwatch Logs with Generative AI.
        </h1>
        <div className="md:mx-auto md:w-1/2 md:mt-8">
          <div className="mt-8">
            <p className="text-left font-medium">Select a role</p>
            <RoleSelect />
          </div>
          <div className="mt-8">
            <p className="text-left font-medium">Paste a Cloudwatch Log (or leave blank)</p>
            <Textarea />
          </div>
          <GenerateButton />
          <div className="mt-2 w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
          </div>
        </div>
      </main>
      <footer className="flex justify-between items-center">
        <div>
          <a target="_blank" href="https://icons8.com/icon/NBitJhLPr65d/hieroglyph">
            Hieroglyph
          </a> icon by
          <a target="_blank" href="https://icons8.com"> Icons8</a>
        </div>
        <div>
          sqciqnvivn
        </div>

      </footer>
    </div>
  )
}

export default App
