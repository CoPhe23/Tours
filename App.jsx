import './App.css'
import { Header } from './components/Header';
import { Tour } from "./components/Tour"
import { Footer } from './components/Footer'

export default function App(){
  const VERSION = 'v4'
  console.log('App render', VERSION)

  return (
    <div className="min-h-screen w-full flex flex-col bg-neutral-50 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100">
      {console.log('Rendering Header')}
      <Header/>
      {console.log('Rendering Tour')}
      <main className="flex-1 w-full">
        <Tour version={VERSION}/>
      </main>
      {console.log('Rendering Footer')}
      <Footer/>
    </div>
  )
}
