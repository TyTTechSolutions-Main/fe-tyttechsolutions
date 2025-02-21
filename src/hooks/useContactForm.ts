import { useState } from 'react'
import { CONTACT, MESSAGES } from '../mocks'
import { showToast } from '../utils/toastUtils'
import type { FormField } from '../types/formTypes'

const { success, sendError, fieldIncomplete, conexionError, missingProject } =
  MESSAGES
const { fields, sendSubmitButton, sendingMessage } = CONTACT as {
  fields: FormField[]
  sendSubmitButton: string
  sendingMessage: string
}

export const useContactForm = () => {
  const [formData, setFormData] = useState<Record<string, string>>({})
  const [selectedChips, setSelectedChips] = useState<string[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const validateForm = () => {
    const missingFields = fields
      .filter(
        (field) => !formData[field.id] || formData[field.id].trim() === ''
      )
      .map((field) => field.label)

    if (missingFields.length > 0) {
      showToast('info', `${fieldIncomplete} ${missingFields.join(', ')}`)
      return false
    }

    if (selectedChips.length === 0) {
      showToast('info', missingProject)
      return false
    }

    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return
    setIsSubmitting(true)

    const subject = selectedChips.join(', ')
    const data = { ...formData, subject }

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        showToast('success', success)
        setFormData({})
        setSelectedChips([])
      } else {
        showToast('error', sendError)
      }
    } catch (error) {
      showToast('error', conexionError)
    } finally {
      setIsSubmitting(false)
    }
  }

  return {
    formData,
    selectedChips,
    isSubmitting,
    handleChange,
    setSelectedChips,
    handleSubmit,
    fields,
    sendSubmitButton,
    sendingMessage,
  }
}
