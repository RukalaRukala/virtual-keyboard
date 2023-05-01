const symbolList = [['`', '~', 'ё', 'Ё', 'tilda', 'let-ё'], ['1', '!', '1', '!', 'dig-1', 'symb-!'],
['2', '@', '2', '"', 'dig-2', 'symb-@'], ['3', '#', '3', '№', 'dig-3', 'symb-#'], ['4', '$', '4', ';', 'dig-4', 'symb-$'],
['5', '%', '5', '%', 'dig-5', 'symb-%'], ['6', '^', '6', ':', 'dig-6', 'symb-^'], ['7', '&', '7', '?', 'dig-7', 'symb-&'],
['8', '*', '8', '*', 'dig-8', 'symb-*'], ['9', '(', '9', '(', 'dig-9', 'symb-('], ['0', ')', '0', ')', 'dig-0', 'symb-)'],
['-', '_', '-', '_', 'minus', 'symb-_'], ['=', '+', '=', '+', 'plus', 'symb-+'],
['Backspace', 'Backspace', 'Backspace', 'Backspace', 'Backspace black', 'Backspace'],
['Tab', 'Tab', 'Tab', 'Tab', 'Tab black', 'Tab'], ['q', 'Q', 'й', 'Й', 'let-q', 'let-й'], ['w', 'W', 'ц', 'Ц', 'let-w', 'let-ц'],
['e', 'E', 'у', 'У', 'let-e', 'let-у'], ['r', 'R', 'к', 'К', 'let-r', 'let-к'], ['t', 'T', 'е', 'Е', 'let-t', 'let-е'],
['y', 'Y', 'н', 'Н', 'let-y', 'let-н'], ['u', 'U', 'г', 'Г', 'let-u', 'let-г'], ['i', 'I', 'ш', 'Ш', 'let-i', 'let-ш'],
['o', 'O', 'щ', 'Щ', 'let-o', 'let-щ'], ['p', 'P', 'з', 'З', 'let-p', 'let-з'], ['[', '{', 'х', 'Х', 'brecket-l', 'let-х'],
[']', '}', 'ъ', 'Ъ', 'brecket-r', 'let-ъ'], ['\\', '|', '\\', '/', 'reslash', 'let-\\'], ['Del', 'Del', 'Del', 'Del', 'del black', 'Delete'],
['CapsLock', 'CapsLock', 'CapsLock', 'CapsLock', 'CapsLock black', 'CapsLock'], ['a', 'A', 'ф', 'Ф', 'let-a', 'let-ф'],
['s', 'S', 'ы', 'Ы', 'let-s', 'let-Ы'], ['d', 'D', 'в', 'В', 'let-d', 'let-в'], ['f', 'F', 'а', 'А', 'let-f', 'let-а'],
['g', 'G', 'п', 'П', 'let-g', 'let-п'], ['h', 'H', 'р', 'Р', 'let-h', 'let-р'], ['j', 'J', 'о', 'О', 'let-j', 'let-о'],
['k', 'K', 'л', 'Л', 'let-k', 'let-л'], ['l', 'L', 'д', 'Д', 'let-l', 'let-Д'], [';', ':', 'ж', 'Ж', 'semi', 'Semicolon'],
['\'', '"', 'э', 'Э', 'quotes', 'let-э'], ['Enter', 'Enter', 'Enter', 'Enter', 'Enter black', 'Enter'],
['Shift', 'Shift', 'Shift', 'Shift', 'shift shift-l black', 'ShiftLeft'],
['z', 'Z', 'я', 'Я', 'let-z', 'let-я'], ['x', 'X', 'ч', 'Ч', 'let-x', 'let-ч'],
['c', 'C', 'с', 'С', 'let-c', 'let-с'], ['v', 'V', 'м', 'М', 'let-v', 'let-м'], ['b', 'B', 'и', 'И', 'let-b', 'let-и'],
['n', 'N', 'т', 'Т', 'let-n', 'let-т'], ['m', 'M', 'ь', 'Ь', 'let-m', 'let-ь'], [',', '<', 'б', 'Б', 'comma', 'let-б'],
['.', '>', 'ю', 'Ю', 'dot', 'Period'], ['/', '?', '.', ',', 'slash', 'Slash'], ['&#9650;', '&#9650;', '&#9650;', '&#9650;', 'but-up black', 'ArrowUp'],
['Shift', 'Shift', 'Shift', 'Shift', 'shift shift-r black', 'ShiftRight'],
['Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'ctrl ctrl-l black', 'ControlLeft'], ['Win', 'Win', 'Win', 'Win', 'win black', 'MetaLeft'],
['Alt', 'Alt', 'Alt', 'Alt', 'alt alt-l black', 'AltLeft'], ['', '', '', '', 'Space', 'Space'],
['Alt', 'Alt', 'Alt', 'Alt', 'alt alt-r black', 'AltRight'], ['&#9668;', '&#9668;', '&#9668;', '&#9668;', 'but-left  black', 'ArrowLeft'],
['&#9660;', '&#9660;', '&#9660;', '&#9660;', 'but-down black', 'ArrowDown'], ['&#9658;', '&#9658;', '&#9658;', '&#9658;', 'but-right black', 'ArrowRight'],
['Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'ctrl ctrl-r  black', 'ControlRight']];

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
instuction.textContent = 'Для переключения языка комбинация: shift + alt (с левой стороны)';
instuction.setAttribute('class', 'ctrl-alt');
wrapper.appendChild(instuction);

const instuctionTab = document.createElement('p');
instuctionTab.textContent = 'Перед началом ввода текста нажмите Tab для отображения в диалоговом окне';
instuctionTab.setAttribute('class', 'full-for-print');
wrapper.appendChild(instuctionTab);

const keys = document.querySelectorAll('.but');

function runOnKeys(func, ...codes) {
  const pressed = new Set();

  document.addEventListener('keydown', (event) => {
    pressed.add(event.code);

    for (const code of codes) {
      if (!pressed.has(code)) {
        return;
      }
    }
    pressed.clear();

    func();
  });

  document.addEventListener('keyup', (event) => {
    pressed.delete(event.code);
  });
}

const span = document.querySelectorAll('span');

runOnKeys(() => {
  for (let i = 0; i < span.length; i += 1) {
    if (span[i].classList[0] === 'eng' && span[i].classList.length === 1) {
      span[i].classList.add('hidden');
      span[i].querySelector('.caseDown').classList.add('hidden');
    } else if (span[i].classList[0] === 'eng' && span[i].classList.length === 2) {
      span[i].classList.remove('hidden');
      span[i].querySelector('.caseDown').classList.remove('hidden');
    } else if (span[i].classList[0] === 'rus' && span[i].classList.length === 1) {
      span[i].classList.add('hidden');
      span[i].querySelector('.caseDown').classList.add('hidden');
    } else if (span[i].classList[0] === 'rus' && span[i].classList.length === 2) {
      span[i].classList.remove('hidden');
      span[i].querySelector('.caseDown').classList.remove('hidden');
    }
  }
},
'AltLeft',
'ShiftLeft',
);

for (let i = 0; i < keys.length; i += 1) {
  keys[i].setAttribute('nameEn', symbolList[i][0]);
  keys[i].setAttribute('enUpperCase', symbolList[i][1]);
  keys[i].setAttribute('nameRu', symbolList[i][2]);
  keys[i].setAttribute('ruUpperCase', symbolList[i][3]);
}

window.addEventListener('mousedown', (event) => {
  const elem = event.target;
  if (elem.nodeName === 'SPAN') {
    document.getElementById(event.target.parentElement.parentElement.getAttribute('id')).classList.add('active');
  }
  if (elem.className.split(' ')[1] === 'but') {
    document.getElementById(elem.getAttribute('id')).classList.add('active');
  }
});

window.addEventListener('mouseup', (event) => {
  const elem = event.target;
  if (elem.nodeName === 'SPAN') {
    document.getElementById(event.target.parentElement.parentElement.getAttribute('id')).classList.remove('active');
  }
  if (elem.className.split(' ')[1] === 'but') {
    document.getElementById(elem.getAttribute('id')).classList.remove('active');
  }
});

window.addEventListener('mouseenter', (event) => {
  if (event.target.getAttribute('id') === 'CapsLock' || event.target.parentElement.parentElement.getAttribute('id') === 'CapsLock') {
    document.querySelector('#Capslock').classList.add('active');
  }
});

window.addEventListener('keydown', (event) => {
  for (let i = 0; i < keys.length; i += 1) {
    if (event.code !== 'CapsLock' && event.key !== 'Shift' && event.code !== 'Period' && event.code !== 'Slash' && event.code !== 'Semicolon') {
      if (event.key === keys[i].getAttribute('nameEn')
      || event.key === keys[i].getAttribute('enUpperCase')
      || event.key === keys[i].getAttribute('nameRu')
      || event.key === keys[i].getAttribute('ruUpperCase')) {
        keys[i].classList.add('active');
      }
      if (event.code === 'Space') {
        document.getElementById('Space').classList.add('active');
      }
      if (event.code === 'Delete') {
        document.getElementById('Delete').classList.add('active');
      }
      if (event.code === 'MetaLeft') {
        document.getElementById('MetaLeft').classList.add('active');
      }
      if (event.code === 'ControlLeft') {
        document.getElementById('ControlLeft').classList.add('active');
      }
      if (event.code === 'ControlRight') {
        document.getElementById('ControlRight').classList.add('active');
      }
      if (event.code === 'AltLeft') {
        document.getElementById('AltLeft').classList.add('active');
        document.getElementById('AltRight').classList.remove('active');
      }
      if (event.code === 'AltRight') {
        document.getElementById('AltRight').classList.add('active');
        document.getElementById('AltLeft').classList.remove('active');
      }
      if (event.code === 'ControlLeft') {
        document.getElementById('ControlLeft').classList.add('active');
      }
      if (event.code === 'ControlRight') {
        document.getElementById('ControlRight').classList.add('active');
      }
      if (event.code === 'ArrowUp') {
        document.getElementById('ArrowUp').classList.add('active');
      }
      if (event.code === 'ArrowDown') {
        document.getElementById('ArrowDown').classList.add('active');
      }
      if (event.code === 'ArrowRight') {
        document.getElementById('ArrowRight').classList.add('active');
      }
      if (event.code === 'ArrowLeft') {
        document.getElementById('ArrowLeft').classList.add('active');
      }
    }
    if (event.code === 'ShiftLeft') {
      document.getElementById('ShiftLeft').classList.add('active');
    }
    if (event.code === 'ShiftRight') {
      document.getElementById('ShiftRight').classList.add('active');
    }
    if (event.code === 'Period') {
      document.getElementById('Period').classList.add('active');
    }
    if (event.code === 'Slash') {
      document.getElementById('Slash').classList.add('active');
    }
    if (event.code === 'Semicolon') {
      document.getElementById('Semicolon').classList.add('active');
    }
  }
});

window.addEventListener('keyup', (event) => {
  for (let i = 0; i < keys.length; i += 1) {
    if (event.code !== 'CapsLock') {
      if (event.key === keys[i].getAttribute('nameEn')
      || event.key === keys[i].getAttribute('enUpperCase')
      || event.key === keys[i].getAttribute('nameRu')
      || event.key === keys[i].getAttribute('ruUpperCase')) {
        keys[i].classList.remove('active');
      }
      if (event.code === 'Space') {
        document.getElementById('Space').classList.remove('active');
      }
      if (event.code === 'Delete') {
        document.getElementById('Delete').classList.remove('active');
      }
      if (event.code === 'MetaLeft') {
        document.getElementById('MetaLeft').classList.remove('active');
      }
      if (event.code === 'ShiftLeft') {
        document.getElementById('ShiftLeft').classList.remove('active');
      }
      if (event.code === 'ShiftRight') {
        document.getElementById('ShiftLeft').classList.remove('active');
      }
      if (event.code === 'ControlLeft') {
        document.getElementById('ControlLeft').classList.remove('active');
      }
      if (event.code === 'ControlRight') {
        document.getElementById('ControlRight').classList.remove('active');
      }
      if (event.code === 'AltLeft') {
        document.getElementById('AltLeft').classList.remove('active');
        document.getElementById('AltRight').classList.remove('remove');
      }
      if (event.code === 'AltRight') {
        document.getElementById('AltRight').classList.remove('active');
        document.getElementById('AltLeft').classList.remove('remove');
      }
      if (event.code === 'ArrowUp') {
        document.getElementById('ArrowUp').classList.remove('active');
      }
      if (event.code === 'ArrowDown') {
        document.getElementById('ArrowDown').classList.remove('active');
      }
      if (event.code === 'ArrowRight') {
        document.getElementById('ArrowRight').classList.remove('active');
      }
      if (event.code === 'ArrowLeft') {
        document.getElementById('ArrowLeft').classList.remove('active');
      }
      setTimeout(() => {
        keys[i].classList.remove('remove');
      }, 200);
    }
  }
  if (event.code === 'CapsLock') {
    const list = Array.from(document.getElementById('CapsLock').classList);
    if (list[4] === 'active') {
      document.getElementById('CapsLock').classList.remove('active');
    } else {
      document.getElementById('CapsLock').classList.add('active');
    }
  }
});
