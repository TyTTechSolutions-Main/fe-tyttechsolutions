import { toast } from 'react-toastify'

export const showToast = (
  type: 'success' | 'error' | 'info',
  message: string
) => {
  toast[type](message, { position: 'top-right' })
}
