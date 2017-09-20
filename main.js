// // ejercicios resueltos del Quiz
// const foo = str => {
//     str = `===${str}===`;
//     return str;
// }

// const a = 'hola';
// const b = foo(a);

// console.log(a);
// console.log(b);

const foo = arr => arr.sort();
const a = [4, 1, 3, 2];
console.log(a);
const b = foo(a);
// const a = 'fruta';
// const b = a + "pera";
// const c = a;
// muta el valor de a, MUTABILIDAD, modifica su valor original
//la propiedad de sort() devuelve el valor ordenado del array a la variable a y al mismo tiempo ese sería el valor de b
const c = (a == b);
// console.log(a);
// console.log(b);
// console.log(c);

// ejercicio guiado

// Uno: Se dan dos arreglos, debes recorrer ambas y retornar solo los elementos que existan en ambas
l1 = [1, 2, 3];
l2 = [2, 3, 4];

function interseccion(l1, l2) {
    var l3 = [];
    for (var i = 0; i < l1.length; i++) {
        for (var j = 0; j < l2.length; j++) {
            if (l1[i] == l2[j]) {
                l3.push(l1[i]);
            }
        }
    }
    console.log(l3);
    return l3;
}

var resultado = interseccion(l1, l2);
console.log(resultado);

function interseccionSet2(l1, l2) {
    return l1.filter(function(n) {
        return l2.indexOf(n) !== -1;
    });
};

var res = interseccionSet2(l1, l2);
console.log(res);

// ejercicio 2: arreglo de objetos
var productos = [{
        nombre: 'pijama',
        tipo: 'ropa'
    },
    {
        nombre: 'nevera',
        tipo: 'electrodoméstico'
    },
    {
        nombre: 'assus',
        tipo: 'computador'
    },
    {
        nombre: 'macbook',
        tipo: 'computador'
    },
    {
        nombre: 'pijama',
        tipo: 'ropa',
    },
    {
        nombre: 'toshiba',
        tipo: 'computador'
    }
];

var computadores = [];
for (var i = 0; i < productos.length; i++) {
    if (productos[i].tipo === 'computador') {
        computadores.push(productos[i]);
    }
}

var computadores = productor.filter(function(producto) {
    return producto.tipo == 'computador';
});