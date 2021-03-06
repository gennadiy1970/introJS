const keys = [
    'abstract',
    'await',
    'boolean',
    'break',
    'byte',
    'catch',
    'case',
    'char',
    'class',
    'const',
    'continue',
    'debugger',
    'default',
    'delete',
    'do',
    'double',
    'else',
    'enum',
    'export',
    'extends',
    'final',
    'finally',
    'float',
    'for',
    'function',
    'goto',
    'if',
    'import',
    'interface',
    'in',
    'int',
    'instanceof',
    'implements',
    'let',
    'long',
    'native',
    'new',
    'return',
    'package',
    'private',
    'protected',
    'public',
    'short',
    'synchronized',
    'static',
    'super',
    'switch',
    'this',
    'throw',
    'transient',
    'try',
    'typeof',
    'var',
    'void',
    'volatile',
    'while',
    'with',
    'yield'
]

const listWords = document.querySelector('.list-words')
listWords.innerHTML = keys.map(el => `<li class="key-word">${el}</li>`).join("")