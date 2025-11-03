import { useEffect } from 'react'

export function Header(){
  useEffect(()=>{
    console.log('Header mounted')
    return ()=>console.log('Header unmounted')
  },[])

  console.log('Header render')
  return (
    <header className="w-full bg-gradient-to-r from-blue-700 to-indigo-500 text-white">
      <div className="max-w-7xl mx-auto px-4 h-[64px] flex items-center">
        <h1 className="text-[20px] sm:text-2xl font-semibold">Explore Tours</h1>
      </div>
    </header>
  )
}
