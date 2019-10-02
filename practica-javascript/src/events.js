const fnPassBlur =() => {
    const pass = document.getElementById('pass');
    if(pass.value.length < 7 || pass.value.length>20 )
    {
        errorPass.style.display = 'block';
        //alert("La longitud de la password no es correcta.")
    }
    else{
        errorPass.style.display = 'none';
    }
}

const runAlert = () => {
    alert("Bienvenido "+ document.getElementById('name').value);
}

const fnNameBlur = () => {
    const lenName=document.getElementById('name');
    
    if (lenName.value === '' )    {
        //name.style.border = '1px solid red';
        errorName.style.display = 'block';
    } else {
        //name.style.border = '1px solid grey';
        errorName.style.display = 'none';
    }
}

const fnAgeBlur = () => {
    
}

const fnGetAge = () => {
    let a = new Date();
    //const a = f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear());
    const date_i = document.getElementById('date').value;
    let b = new Date(date_i);
    let age_i = a.getFullYear() - b.getFullYear();
    const mm = a.getMonth() - b.getMonth()
    if (mm < 0 || (mm === 0 && a.getDate()<b.getDate()))
    {
        age_i --;
        //console.log(tipeof(age_i));
    }
    age.innerText = 'Edad: ' + age_i;
}

// const fnPassBlur = () => {
//     if (document.getElementById('Pass').length = 0 )
//     {
//         text.style.border = '1px solid red';
//         error.style.display = 'block';
//     } else {
//         text.style.border = '1px solid grey';
//         error.style.display = 'none';
//     }
// }

/*
function suma(a, b) {
    return a + b;
}
const suma = function(a, b) {
    return a+ b;
}
const suma = (a, b) => {
    return a + b;
}
const suma = (a, b) => a + b;
const b = 3;
const a = 1;
const r = suma(b, a);
const k = suma(1, 8);
console.log(r + k);

const runAlert = () => {
    alert('Hola mundo');
}

function fnFocus() {
    console.log('Entré al input :)');
}

const fnBlur = function() {
    const text = document.getElementById('text');
    const error = document.getElementById('error');
    if(text.value === '') {
        text.style.border = '1px solid red';
        error.style.display = 'block';
    } else {
        text.style.border = '1px solid grey';
        error.style.display = 'none';
    }
    console.log('Salí del elemento', text.value);
}

const fnInput = () => {
    const text = document.getElementById('text');
    document.getElementById('result').innerHTML = text.value;
    console.log('on input', text.value);
}*/