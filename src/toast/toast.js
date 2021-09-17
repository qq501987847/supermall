export function toast(a) {
  const div = document.createElement('div')
  div.innerText = a
  div.className = 'toast'
  document.body.appendChild(div)

  let timer = setTimeout(function () {
    document.body.removeChild(div)
    clearTimeout(timer)
  }, 2000)
}