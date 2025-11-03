import { useEffect } from 'react'

export function Footer(){
  useEffect(()=>{
    console.log('Footer mounted')
    return ()=>console.log('Footer unmounted')
  },[])

  console.log('Footer render')
  return (
    <footer className="w-full h-[60px] bg-gradient-to-r from-blue-700 to-indigo-500 text-white flex items-center justify-center">
      <p className="text-sm"><span>© 2025 FM™.</span> All rights reserved.</p>
    </footer>
  )
}
