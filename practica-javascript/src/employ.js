let cantidad = window.prompt('Ingrese la cantidad de empleados:');
let employee=[];

for(let i=0;i<cantidad; i++)
{
    let name_emp=window.prompt('Ingrese Nombre:');
    let lastname_emp=window.prompt('Ingrese Apellido');
    let start_date = window.prompt('Fecha de ingreso');
    let end_date_emp;


    if(window.prompt('Continua en la empresa Y/N')=== 'N')
    {
        end_date_emp=window.prompt('Fecha de egreso');
    }
    let cant_puesto=window.prompt('Cantidad de puestos:');

    let rol=[];

    for(let j=0; j<cant_puesto;j++)
    {
        let name_rol = prompt('Nombre de Rol: ');
        rol.push(name_rol);
    }

    employee[i]=
        {
            name:name_emp,
            lastname:lastname_emp,
            start_date:start_date
        }
        if(end_date_emp)
        {
           employee[i].end_date=end_date_emp;

        }

        if(rol.length!==0){
            employee[i].rol=rol;
        }


    console.log(employee);
}