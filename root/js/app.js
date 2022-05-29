const formEl = document.querySelector('#color-form');
const colorsEl = document.querySelector('.colors');
const colorCodesEl = document.querySelector('.color-codes');

const getData = async (colorSeed, colorScheme) => {
  try {
    const response = await fetch(
      `https://www.thecolorapi.com/scheme?hex=${colorSeed}&mode=${colorScheme}`
    );
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

const renderData = (data) => {
  Array.from(colorsEl.children).map((el, i) => {
    return el.setAttribute(
      'style',
      `background-color:${data.colors[i].hex.value}`
    );
  });

  Array.from(colorCodesEl.children).map((el, i) => {
    return (el.innerHTML = data.colors[i].hex.value);
  });
};

formEl.addEventListener('submit', async (e) => {
  try {
    e.preventDefault();
    const formData = new FormData(formEl);
    const colorSeed = formData.get('seed-color').slice(1);
    const colorScheme = formData.get('color-scheme').toLowerCase();

    const data = await getData(colorSeed, colorScheme);
    renderData(data);
  } catch (e) {
    console.log(e);
  }
});
