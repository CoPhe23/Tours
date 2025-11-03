import { useState, useEffect } from "react"
import { MyModal } from "./MyModal"

export function MyCard({ id, name, image, price, info }){
  const [open, setOpen] = useState(false)
  useEffect(()=>{
    console.log('MyCard mounted', id)
    return ()=>console.log('MyCard unmounted', id)
  }, [id])

  console.log('MyCard render', id, name, price)

  function openModal(){
    console.log('openModal', id)
    setOpen(true)
  }

  return (
    <article className="group relative rounded-2xl overflow-hidden shadow-sm ring-1 ring-neutral-200 dark:ring-neutral-800 bg-white dark:bg-neutral-800 transition hover:-translate-y-0.5 hover:shadow-md">
      <div className='aspect-[16/10] w-full overflow-hidden'>
        {console.log('Render image', image)}
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          loading="lazy"
        />
      </div>
      <div className="p-4 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="text-lg font-semibold tracking-tight truncate">{name}</h3>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-0.5">From {price} €</p>
        </div>
        <div>
          <button
            onClick={openModal}
            className="cursor-pointer shrink-0 inline-flex items-center rounded-xl px-3 py-2 text-sm font-medium bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-400"
          >
            Details
          </button>
        </div>
      </div>
      {console.log('Open state', open)}
      {open ? (
        <MyModal
          open={open}
          setOpen={setOpen}
          id={id}
          name={name}
          image={image}
          price={price}
          info={info}
        />
      ) : null}
    </article>
  )
}
