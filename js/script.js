const symbolList = [['`', '~', 'ё', 'Ё', 'symb-`', 'let-ё'], ['1', '!', '1', '!', 'dig-1', 'symb-!'],
['2', '@', '2', '"', 'dig-2', 'symb-@'], ['3', '#', '3', '№', 'dig-3', 'symb-#'], ['4', '$', '4', ';', 'dig-4', 'symb-$'],
['5', '%', '5', '%', 'dig-5', 'symb-%'], ['6', '^', '6', ':', 'dig-6', 'symb-^'], ['7', '&', '7', '?', 'dig-7', 'symb-&'],
['8', '*', '8', '*', 'dig-8', 'symb-*'], ['9', '(', '9', '(', 'dig-9', 'symb-('], ['0', ')', '0', ')', 'dig-0', 'symb-)'],
['-', '_', '-', '_', 'symb--', 'symb-_'], ['=', '+', '=', '+', 'symb-=', 'symb-+'],
['Backspase', 'Backspase', 'Backspase', 'Backspase', 'backspase', 'backspase'],
['Tab', 'Tab', 'Tab', 'Tab', 'tab', 'tab'], ['q', 'Q', 'й', 'Й', 'let-q', 'let-й'], ['w', 'W', 'ц', 'Ц', 'let-w', 'let-ц'],
['e', 'E', 'у', 'У', 'let-e', 'let-у'], ['r', 'R', 'к', 'К', 'let-r', 'let-к'], ['t', 'T', 'е', 'Е', 'let-t', 'let-е'],
['y', 'Y', 'н', 'Н', 'let-y', 'let-е'], ['u', 'U', 'г', 'Г', 'let-u', 'let-г'], ['i', 'I', 'ш', 'Ш', 'let-i', 'let-ш'],
['o', 'O', 'щ', 'Щ', 'let-o', 'let-щ'], ['p', 'P', 'з', 'З', 'let-p', 'let-з'], ['[', '{', 'х', 'Х', 'let-[', 'let-х'],
[']', '}', 'ъ', 'Ъ', 'let-]', 'let-ъ'], ['\\', '|', '\\', '/', 'let-\\', 'let-\\'], ['Del', 'Del', 'Del', 'Del', 'del', 'del'],
['CapsLock', 'CapsLock', 'CapsLock', 'CapsLock', 'caps-lock', 'caps-lock'], ['a', 'A', 'ф', 'Ф', 'let-a', 'let-ф'],
['s', 'S', 'ы', 'Ы', 'let-s', 'let-Ы'], ['d', 'D', 'в', 'В', 'let-d', 'let-в'], ['f', 'F', 'а', 'А', 'let-f', 'let-а'],
['g', 'G', 'п', 'П', 'let-g', 'let-п'], ['h', 'H', 'р', 'Р', 'let-h', 'let-р'], ['j', 'J', 'о', 'О', 'let-j', 'let-о'],
['k', 'K', 'л', 'Л', 'let-k', 'let-л'], ['l', 'L', 'д', 'Д', 'let-l', 'let-Д'], [';', ':', 'ж', 'Ж', 'let-;', 'let-ж'],
['\'', '"', 'э', 'Э', 'let-\'', 'let-э'], ['Enter', 'Enter', 'Enter', 'Enter', 'enter', 'enter'],
['Shift', 'Shift', 'Shift', 'Shift', 'shift shift-l', 'shift shift-l'],
['z', 'Z', 'я', 'Я', 'let-z', 'let-я'], ['x', 'X', 'ч', 'Ч', 'let-x', 'let-ч'],
['c', 'C', 'с', 'С', 'let-c', 'let-с'], ['v', 'V', 'м', 'М', 'let-v', 'let-м'], ['b', 'B', 'и', 'И', 'let-b', 'let-и'],
['n', 'N', 'т', 'Т', 'let-n', 'let-т'], ['m', 'M', 'ь', 'Ь', 'let-m', 'let-ь'], [',', '<', 'б', 'Б', 'let-,', 'let-б'],
['.', '>', 'ю', 'Ю', 'let-.', 'let-ю'], ['/', '?', '.', ',', 'let-/', 'let-.'], ['&#9650;', '&#9650;', '&#9650;', '&#9650;', 'but-up', 'but-up'],
['Shift', 'Shift', 'Shift', 'Shift', 'shift shift-r', 'shift shift-r'],
['Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'ctrl ctrl-l', 'ctrl ctrl-l'], ['Win', 'Win', 'Win', 'Win', 'win', 'win'],
['Alt', 'Alt', 'Alt', 'Alt', 'alt alt-l', 'alt alt-l'], ['', '', '', '', 'space', 'space'],
['Alt', 'Alt', 'Alt', 'Alt', 'alt alt-r', 'alt alt-r'], ['&#9668;', '&#9668;', '&#9668;', '&#9668;', 'but-left', 'but-left'],
['&#9660;', '&#9660;', '&#9660;', '&#9660;', 'but-down', 'but-down'], ['&#9658;', '&#9658;', '&#9658;', '&#9658;', 'but-right', 'but-right'],
['Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'ctrl ctrl-r', 'ctrl ctrl-r']];

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
  keyboard.insertAdjacentHTML('beforeend', `<div class="keyboard-but but ${symbolList[i][4]}">
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
