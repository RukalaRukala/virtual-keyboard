const symbolList = [['`', '~', 'ё', 'Ё', 'tilda', 'let-ё'], ['1', '!', '1', '!', 'dig-1', 'symb-!'],
['2', '@', '2', '"', 'dig-2', 'symb-@'], ['3', '#', '3', '№', 'dig-3', 'symb-#'], ['4', '$', '4', ';', 'dig-4', 'symb-$'],
['5', '%', '5', '%', 'dig-5', 'symb-%'], ['6', '^', '6', ':', 'dig-6', 'symb-^'], ['7', '&', '7', '?', 'dig-7', 'symb-&'],
['8', '*', '8', '*', 'dig-8', 'symb-*'], ['9', '(', '9', '(', 'dig-9', 'symb-('], ['0', ')', '0', ')', 'dig-0', 'symb-)'],
['-', '_', '-', '_', 'minus', 'symb-_'], ['=', '+', '=', '+', 'plus', 'symb-+'],
['Backspace', 'Backspace', 'Backspace', 'Backspace', 'Backspace black', 'Backspace'],
['Tab', 'Tab', 'Tab', 'Tab', 'Tab black', 'Tab'], ['q', 'Q', 'й', 'Й', 'let-q', 'let-й'], ['w', 'W', 'ц', 'Ц', 'let-w', 'let-ц'],
['e', 'E', 'у', 'У', 'let-e', 'let-у'], ['r', 'R', 'к', 'К', 'let-r', 'let-к'], ['t', 'T', 'е', 'Е', 'let-t', 'let-е'],
['y', 'Y', 'н', 'Н', 'let-y', 'let-е'], ['u', 'U', 'г', 'Г', 'let-u', 'let-г'], ['i', 'I', 'ш', 'Ш', 'let-i', 'let-ш'],
['o', 'O', 'щ', 'Щ', 'let-o', 'let-щ'], ['p', 'P', 'з', 'З', 'let-p', 'let-з'], ['[', '{', 'х', 'Х', 'brecket-l', 'let-х'],
[']', '}', 'ъ', 'Ъ', 'brecket-r', 'let-ъ'], ['\\', '|', '\\', '/', 'reslash', 'let-\\'], ['Del', 'Del', 'Del', 'Del', 'del black', 'Delete'],
['CapsLock', 'CapsLock', 'CapsLock', 'CapsLock', 'CapsLock black', 'CapsLock'], ['a', 'A', 'ф', 'Ф', 'let-a', 'let-ф'],
['s', 'S', 'ы', 'Ы', 'let-s', 'let-Ы'], ['d', 'D', 'в', 'В', 'let-d', 'let-в'], ['f', 'F', 'а', 'А', 'let-f', 'let-а'],
['g', 'G', 'п', 'П', 'let-g', 'let-п'], ['h', 'H', 'р', 'Р', 'let-h', 'let-р'], ['j', 'J', 'о', 'О', 'let-j', 'let-о'],
['k', 'K', 'л', 'Л', 'let-k', 'let-л'], ['l', 'L', 'д', 'Д', 'let-l', 'let-Д'], [';', ':', 'ж', 'Ж', 'semi', 'let-ж'],
['\'', '"', 'э', 'Э', 'quotes', 'let-э'], ['Enter', 'Enter', 'Enter', 'Enter', 'Enter black', 'Enter'],
['Shift', 'Shift', 'Shift', 'Shift', 'shift shift-l black', 'Shift'],
['z', 'Z', 'я', 'Я', 'let-z', 'let-я'], ['x', 'X', 'ч', 'Ч', 'let-x', 'let-ч'],
['c', 'C', 'с', 'С', 'let-c', 'let-с'], ['v', 'V', 'м', 'М', 'let-v', 'let-м'], ['b', 'B', 'и', 'И', 'let-b', 'let-и'],
['n', 'N', 'т', 'Т', 'let-n', 'let-т'], ['m', 'M', 'ь', 'Ь', 'let-m', 'let-ь'], [',', '<', 'б', 'Б', 'comma', 'let-б'],
['.', '>', 'ю', 'Ю', 'dot', 'let-ю'], ['/', '?', '.', ',', 'slash', 'let-.'], ['&#9650;', '&#9650;', '&#9650;', '&#9650;', 'but-up black', 'ArrowUp'],
['Shift', 'Shift', 'Shift', 'Shift', 'shift shift-r black', 'Shift'],
['Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'ctrl ctrl-l black', 'Control'], ['Win', 'Win', 'Win', 'Win', 'win black', 'Meta'],
['Alt', 'Alt', 'Alt', 'Alt', 'alt alt-l black', 'Alt'], ['', '', '', '', 'Space', 'Space'],
['Alt', 'Alt', 'Alt', 'Alt', 'alt alt-r black', 'Alt'], ['&#9668;', '&#9668;', '&#9668;', '&#9668;', 'but-left  black', 'ArrowLeft'],
['&#9660;', '&#9660;', '&#9660;', '&#9660;', 'but-down black', 'ArrowDown'], ['&#9658;', '&#9658;', '&#9658;', '&#9658;', 'but-right black', 'ArrowRight'],
['Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'ctrl ctrl-r  black', 'Control']];

const wrapper = document.createElement('div');
wrapper.setAttribute('class', 'wrapper');

const heading = document.createElement('h1');
heading.textContent = 'Виртуальная клавиатура';

const textarea = document.createElement('textarea');
textarea.setAttribute('class', 'input-window textarea');
textarea.setAttribute('id', 'textarea');
textarea.setAttribute('rows', '5');
textarea.setAttribute('cols', '50');

const keyboard = document.createElement('div');
keyboard.setAttribute('class', 'main-keyboard keyboard');
keyboard.setAttribute('id', 'keyboard');

const button = document.createElement('div');
button.setAttribute('class', 'keyboard-but');

document.body.appendChild(wrapper);
wrapper.appendChild(heading);
wrapper.appendChild(textarea);
wrapper.appendChild(keyboard);

for (let i = 0; i < 64; i += 1) {
  keyboard.insertAdjacentHTML('beforeend', `<div id="${symbolList[i][5]}" class="keyboard-but but ${symbolList[i][4]}">
                                                  <span class='eng'>
                                                    <span class='caseDown'>${symbolList[i][0]}</span>
                                                    <span class='caseUp hidden'>${symbolList[i][1]}</span>
                                                    <span class='caps hidden'>${symbolList[i][0]}</span>
                                                    <span class='shiftCaps hidden'>${symbolList[i][1]}</span>
                                                  </span>
                                                  <span class='rus hidden'>
                                                    <span class='caseDown hidden'>${symbolList[i][2]}</span>
                                                    <span class='caseUp hidden'>${symbolList[i][3]}</span>
                                                    <span class='caps hidden'>${symbolList[i][2]}</span>
                                                    <span class='shiftCaps hidden'>${symbolList[i][3]}</span>
                                                  </span>
                                                </div>`);
}

const discription = document.createElement('p');
discription.textContent = 'Клавиатура создана в операционной системе Windows';
discription.setAttribute('class', 'system');
wrapper.appendChild(discription);

const instuction = document.createElement('p');
instuction.textContent = 'Для переключения языка комбинация: левыe ctrl + alt';
instuction.setAttribute('class', 'ctrl-alt');
wrapper.appendChild(instuction);

changeRadius = (event) => {
  const name = event.target.className;
  document.querySelector(`.${name.split(' ')[2]}`).style.borderRadius = '50px';
  event.stopPropagation();
};

document.addEventListener('mousedown', changeRadius);
document.addEventListener('mouseup', (event) => event.target.style.borderRadius = '3px');

// const buttn = document.querySelector('.tilda');
// buttn.mousedown = function(event) {
//   event.target.style.borderRadius = '50px';
// };

// buttn.mouseup = function(event) {
//   event.target.style.borderRadius = '3px';
// };

let keys = document.querySelectorAll('.but');
let spaceKey = document.querySelector('.space');
let shiftLeft = document.querySelector('.shift-l');
let shiftRight = document.querySelector('.shift-r');
let capsLock = document.querySelector('.caps-lock');

for (let i = 0; i < keys.length; i += 1) {
  keys[i].setAttribute('nameEn', symbolList[i][0]);
  keys[i].setAttribute('enUpperCase', symbolList[i][1]);
  keys[i].setAttribute('nameRu', symbolList[i][2]);
  keys[i].setAttribute('ruUpperCase', symbolList[i][3]);
}

window.addEventListener('keydown', function(event) {
  for (let i = 0; i < keys.length; i += 1) {
    console.log(event.key);
    if (event.key === keys[i].getAttribute('nameEn')
    || event.key === keys[i].getAttribute('enUpperCase')
    || event.key === keys[i].getAttribute('nameRu')
    || event.key === keys[i].getAttribute('ruUpperCase')) {
      keys[i].classList.add('active');
    }
    if (event.code == 'Space') {
      spaceKey.classList.add('active');
    }
    if (event.code == 'ShiftLeft') {
      shiftRight.classList.remove('active');
    }
    if (event.code == 'ShiftRight') {
      shiftLeft.classList.remove('active');
    }
    if (event.code == 'CapsLock') {
      CapsLock.classList.toggle('active');
    }
  }
})

window.addEventListener('keyup', function(event) {
  for (let i = 0; i < keys.length; i += 1) {
    console.log(event.key);
    if (event.key === keys[i].getAttribute('nameEn')
    || event.key === keys[i].getAttribute('enUpperCase')
    || event.key === keys[i].getAttribute('nameRu')
    || event.key === keys[i].getAttribute('ruUpperCase')) {
      keys[i].classList.remove('active');
      keys[i].classList.add('remove');
    }
    if (event.code == 'Space') {
      spaceKey.classList.remove('active');
      spaceKey.classList.add('remove');
    }
    if (event.code == 'ShiftLeft') {
      shiftRight.classList.remove('active');
      spaceKey.classList.remove('remove');
    }
    setTimeout(() =>{
      keys[i].classList.remove('remove')
    },200)
  }
})
