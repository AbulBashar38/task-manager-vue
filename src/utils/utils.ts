// useFormValidation.js
import { ref, watch } from 'vue'

export function useFormValidation(formData) {
  const errors = ref({})

  const validateTitle = (title) => {
    if (!title.trim()) {
      return 'Title is required.'
    }
    if (title.trim().length < 3) {
      return 'Title must be at least 3 characters long.'
    }
    return null
  }

  const validateDes = (description) => {
    if (!description.trim()) {
      return 'Description is required.'
    }
    if (description.trim().length < 10) {
      return 'Description must be at least 3 characters long.'
    }
    return null
  }
  const validateType = (type) => {
    if (!type.trim()) {
      return 'Type is required.'
    }

    return null
  }
  const validateStatus = (status) => {
    if (!status.trim()) {
      return 'Status is required.'
    }

    return null
  }

  const validateForm = async () => {
    errors.value = {}
    errors.value.title = validateTitle(formData.title)
    errors.value.description = validateDes(formData.description)
    errors.value.status = validateStatus(formData.status)
    errors.value.type = validateType(formData.type)

    // Return true if there are no errors
    return Object.values(errors.value).filter((item) => item !== null).length === 0
  }

  // Optional: Real-time validation as the user types
  watch(
    () => formData.title,
    (newValue) => {
      errors.value.name = validateTitle(newValue)
    },
  )

  watch(
    () => formData.description,
    (newValue) => {
      errors.value.email = validateDes(newValue)
    },
  )

  watch(
    () => formData.type,
    (newValue) => {
      errors.value.age = validateType(newValue)
    },
  )
  watch(
    () => formData.status,
    (newValue) => {
      errors.value.age = validateStatus(newValue)
    },
  )

  return {
    errors,
    validateForm,
  }
}
