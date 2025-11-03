import { useEffect } from 'react'
import { Modal } from 'react-responsive-modal'
import 'react-responsive-modal/styles.css';

export function MyModal({ open, setOpen, name, image, price, info }){
  useEffect(()=>{
    console.log('MyModal mounted', name)
    return ()=>console.log('MyModal unmounted', name)
  }, [name])

  console.log('MyModal render', open)

  return (
    <Modal open={open} onClose={()=> {console.log('Modal closed'); setOpen(false)}} center classNames={{ modal: "rounded-2xl" }}>
      {console.log('Modal content render')}
      <div className="max-w-lg">
        <div className="aspect-video w-full overflow-hidden rounded-xl mb-4">
          <img src={image} alt={name} className="h-full w-full object-cover" />
        </div>
        <h2 className="text-2xl font-semibold mb-2">{name}</h2>
        <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">{info}</p>
        <div className="text-right font-medium">
          <span className="inline-block rounded-lg px-3 py-1 bg-neutral-900 text-white dark:bg-white dark:text-neutral-900">
            {price} €
          </span>
        </div>
      </div>
    </Modal>
  )
}
