const getData = async(colorSeed, colorScheme) => {
  try {
    const response = await fetch(`https://www.thecolorapi.com/scheme?hex=${colorSeed}&mode=${colorScheme}`)
    const data = await response.json()
    return data
  } catch(e) {
    console.log(e)
  }
}

const renderData = async() => {
  try {
    const data = await getData()
  } catch(e) {
    console.log(e);
  }
}

const formEl = document.querySelector('#color-form')

formEl.addEventListener('submit', (e) => {
  e.preventDefault()
  const formData = new FormData(formEl)
  console.log(formData.get('seed-color'))
}) 