import { useEffect, useState, useMemo } from 'react'
import { getTours } from '../utils'
import { MyCard } from './MyCard'

export function Tour({ version }){
  console.log('Tour render', version)
  const [tours, setTours] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(()=>{
    console.log('Tour mounted')
    let active = true
    ;(async ()=>{
      setLoading(true)
      setError('')
      try{
        const data = await getTours()
        console.log('Fetched data', data)
        if(active) setTours(data || [])
      }catch(e){
        console.log('Error fetching', e)
        if(active) setError(e.message)
      }finally{
        if(active){
          console.log('Loading finished')
          setLoading(false)
        }
      }
    })()
    return ()=>{
      active = false
      console.log('Tour unmounted')
    }
  }, [])

  const content = useMemo(()=>{
    console.log('Memo content', { loading, error, tours })
    if(loading) return <p className="text-sm text-neutral-500">Loading tours…</p>
    if(error) return <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
    if(!tours.length) return <p className="text-sm text-neutral-500">No tours available right now.</p>

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {tours.map(t => {
          console.log('Render card', t.id)
          return <MyCard key={t.id} {...t}/>
        })}
      </div>
    )
  }, [loading, error, tours])

  return (
    <section className='w-full py-8'>
      <div className="mx-auto w-full max-w-7xl px-4">{content}</div>
    </section>
  )
}
