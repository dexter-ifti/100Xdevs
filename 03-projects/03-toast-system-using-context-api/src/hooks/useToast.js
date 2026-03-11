import { useContext } from 'react'
import { ToastContext } from '../contexr/ToastContext'


function useToast() {

  return (
    useContext(ToastContext)
  )
}

export default useToast 