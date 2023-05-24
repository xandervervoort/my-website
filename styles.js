/*style
 color*/
const palette1 = {
  purple1: '#10002B',
  purple2: '#240046',
  purple3: '#3C096C',
  purple4: '#5A189A',
  purple5: '#7B2CBF',
  purple6: '#9D4EDD',
  purple7: '#C77DFF',
  purple8: '#E0AAFF'
};

const palette2 = {
  purple1: '#03045E',
  purple2: '#0077B6',
  purple3: '#00B4D8',
  purple4: '#90E0EF',
  purple5: '#CAF0F8',
  purple6: '#89CFF0',
  purple7: '#088F8F',
  purple8: '#5F9EA0'
};

function applyColorPalette(palette) {
  const keys = Object.keys(palette);

  for (let i = 0; i < keys.length; i++) {
    let n = i + 1;
    let variable = '--color' + n;
    document.documentElement.style.setProperty(variable, palette[keys[i]]);
  }
}

function handleThemeChange() {
  const selectedTheme = document.getElementById('background-theme-select').value;
  localStorage.setItem("background-theme", selectedTheme);
  if (selectedTheme === 'palette1') {
    applyColorPalette(palette1);
  } else if (selectedTheme === 'palette2') {
    applyColorPalette(palette2);
  }
}

const ThemeSubmit = document.getElementById('background-theme-submit');
ThemeSubmit.addEventListener('click', handleThemeChange);

// fonts

const fontSizeSubmit = document.getElementById('font-size-submit');
fontSizeSubmit.addEventListener('click', function () {
  const size = document.getElementById('font-size').value;
  document.documentElement.style.setProperty('--font-size', size + 'px');
  localStorage.setItem('font-size', size);
});

const fontFamilySubmit = document.getElementById('font-family-submit');
fontFamilySubmit.addEventListener('click', function () {
  const font = document.getElementById('font-family').value;
  document.documentElement.style.setProperty('--font', font);
  localStorage.setItem('font-family', font);
});


document.getElementById('reset-local-storage').addEventListener('click', function () {
  localStorage.clear();
})
/* other */
function setSelectedOption(selectElement, selectedValue) {
  for (let i = 0; i < selectElement.options.length; i++) {
    if (selectElement.options[i].value === selectedValue) {
      selectElement.options[i].selected = true;
      break;
    }
  }
}

document.body.onload = function () {
  const theme = localStorage.getItem('background-theme');
  const fontSize = localStorage.getItem('font-size');
  const fontFamily = localStorage.getItem('font-family');

  const fontFamilySelect = document.getElementById('font-family');
  setSelectedOption(fontFamilySelect, fontFamily);

  const fontSizeSelect = document.getElementById('font-size');
  setSelectedOption(fontSizeSelect, fontSize);

  const backgroundThemeSelect = document.getElementById('background-theme-select');
  setSelectedOption(backgroundThemeSelect, theme);

  if (theme === 'palette1') {
    applyColorPalette(palette1);
  } else if (theme === 'palette2') {
    applyColorPalette(palette2);
  }

  document.documentElement.style.setProperty('--font-size', fontSize + 'px');
  document.documentElement.style.setProperty('--font', fontFamily);

  document.body.style.visibility = 'visible';
}