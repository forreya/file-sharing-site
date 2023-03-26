import '@/styles/globals.css'
import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import axios from 'axios'

axios.defaults.baseURL = "http://localhost:4000/"

function App({ Component, pageProps }: AppProps) {
  return (
    <div className='grid h-screen font-serif bg-gray-900 text-white place-items-center'>
      <div>
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default App;