var alumnos=[
    {
        name: 'Andrea',
        lastname:'Puentes',
        age:'33',
        social:['instagram', 'facebook', 'twitter'],
        family:[
            {
                name:'Mabel',
                rol:'mother'
            },
            {
                name:'Antonio',
                rol:'father'
            },
            {
                name:'Karina',
                rol:'sister'
            },
            {
                name:'Matias',
                rol:'brother'
            },
            {
                name:'Valentina',
                rol:'child'
            }
        ],
        occupation:[
            {
                type:'estudiante',
                position:'Fullstack',
                company:'Rolling School'
            },
           {
                type:'trabajo',
                position:'Programador',
                company:'ACN'
           }
        ]
    },
    {
        name: 'Melisa',
        lastname:'Rodriguez',
        age:'25',
        social:['instagram'],
        family:[
            {
                name:'Carmen',
                rol:'mother'
            },
            {
                name:'Jose',
                rol:'father'
            },
            {
                name:'Maria',
                rol:'sister'
            }
        ],
        occupation:[
            {
                type:'estudiante',
                position:'Universidad',
                company:'UNT'
            }
        ]
    },
    {
        name: 'Maria',
        lastname:'Perez',
        age:'25',
        social:['facebook'],
        family:[
            {
                name:'Carmen',
                rol:'mother'
            },
            {
                name:'Jose',
                rol:'father'
            },
            {
                name:'Maria',
                rol:'sister'
            }
        ],
        occupation:[
            {
                type:'estudiante',
                position:'Universidad',
                company:'UTN'
            },
           {
                type:'trabajo',
                position:'Administrativo',
                company:'Poder Judicial'
           },
           {
                type:'trabajo',
                position:'Comerciante',
                company:'Sporting'
           }
        ]
    }
];

// console.log(alumnos[0].name);

// console.log(alumnos[0].family[0].rol+': '+alumnos[0].family[0].name);

// console.log(alumnos[0].occupation[0].type+': '+alumnos[0].occupation[0].position);

/*
for (var i=0; i < alumnos.length; i++)
{
    console.log("Familiares de ", alumnos[i].name);
    for(var j=0; j< alumnos[i].family.length; j++)
    {
        console.log(alumnos[i].family[j].rol, ': ',alumnos[i].family[j].name);
    }
    console.log("____________________");
}


 let cont = 0;

 while(cont<100)
 {
     console.log("Hola Mundo");
     cont++;
 }

window.alert('Chau');

let name = window.prompt('Ingrese su nombre: ');

console.log('Hola ', name);

let confirmar = window.confirm('Desea permanecer en esta pantalla?');

console.log(confirmar);

*/

let i = 0;

while​ (i<1000​) {
​console​.log(​"Hola mundo"​);
    i = i + ​1​; 
}