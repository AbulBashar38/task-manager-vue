// useFormValidation.js
import { ref } from 'vue'
import type { IFormErrors, ITask } from '../interfaces/Board'

export function useFormValidation(formData: ITask) {
  const errors = ref<IFormErrors>({})

  const validateTitle = (title: string): string | null => {
    if (!title.trim()) {
      return 'Title is required.'
    }
    if (title.trim().length < 3) {
      return 'Title must be at least 3 characters long.'
    }
    return null
  }

  const validateDes = (description: string): string | null => {
    if (!description.trim()) {
      return 'Description is required.'
    }
    if (description.trim().length < 10) {
      return 'Description must be at least 3 characters long.'
    }
    return null
  }
  const validateType = (type: string): string | null => {
    if (!type.trim()) {
      return 'Type is required.'
    }

    return null
  }
  const validateStatus = (status: string): string | null => {
    if (!status.trim()) {
      return 'Status is required.'
    }

    return null
  }

  const validateForm = async (): Promise<boolean> => {
    errors.value = {}
    errors.value.title = validateTitle(formData.title)
    errors.value.description = validateDes(formData.description)
    errors.value.status = validateStatus(formData.status)
    errors.value.type = validateType(formData.type)

    // Return true if there are no errors
    return Object.values(errors.value).filter((item) => item !== null).length === 0
  }

  // Optional: Real-time validation as the user types
  // watch(
  //   () => formData.title,
  //   (newValue) => {
  //     errors.value.name = validateTitle(newValue)
  //   },
  // )

  // watch(
  //   () => formData.description,
  //   (newValue) => {
  //     errors.value.email = validateDes(newValue)
  //   },
  // )

  // watch(
  //   () => formData.type,
  //   (newValue) => {
  //     errors.value.age = validateType(newValue)
  //   },
  // )
  // watch(
  //   () => formData.status,
  //   (newValue) => {
  //     errors.value.age = validateStatus(newValue)
  //   },
  // )

  return {
    errors,
    validateForm,
  }
}
