export default function (Alpine) {
  Alpine.magic('formData', (el, {}) => Object.fromEntries(new FormData(el)))
  Alpine.magic('formDataArray', (el, {}) =>
    Object.entries(Object.fromEntries(new FormData(el)))
  )
}
