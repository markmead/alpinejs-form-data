export default function (Alpine) {
  Alpine.magic('formData', (el, {}) => Object.fromEntries(new FormData(el)))
}
