import '@/styles/globals.css'
import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import axios from 'axios'

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BACKEND_BASEURL

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