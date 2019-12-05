

const human = (() => {
    let ojos, pelo, piel;
    const nacer = (a, b, c) => {
        ojos = a;
        pelo = b;
        piel = c;
    }

    const gender= a =>{
        let g;
        if (a ==='M') {
            g = 'Masculino';
        }
        else{
            g = 'Femenino';
        }

        console.log('Genero ' + g);
    }

    const description = () => {
        console.log(ojos, pelo, piel);
    }

    const correr = (k) => {
        if (k > 10) {
            console.log('Meta superada');
        } 
        else{
            console.log('Seguí poco para la meta');
        }
    }



    return {
        nacer,
        gender,
        description,
        correr
    }
})();

human.nacer('negros', 'amarillo', 'blanco');
human.description();
human.gender('M');
human.correr(15);