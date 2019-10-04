let i = 0;

const addElement = () => {
    const app = document.getElementById('app');
    //const b = createElement('input','form-control');
    const b = createGroup(i);
    app.appendChild(b);

    i++;

}

const createElement = (type, className, placeholder, id) => {
    const a = document.createElement(type);
    a.className = className;
    if(type ==='input'){
        if(!!placeholder){
            a.placeholder = placeholder;
        }
        a.id = placeholder + '_input_'+ id;
    }
    return a;
}

const createGroup = (i) => {
    const row = createElement('div', 'row my-2');
    const col1 = createElement('div', 'col');
    const col2 = createElement('div', 'col');
    const col3 = createElement('div', 'col');
    const col4 = createElement('div', 'col');
    const input1 = createElement('input', 'form-control', 'Name', i);
    const input2 = createElement('input', 'form-control', 'Lastname', i);
    const input3 = createElement('input', 'form-control', 'Email', i);
    const input4 = createElement('input', 'form-control', 'Telefono', i);
    row.appendChild(col1);
    row.appendChild(col2);
    row.appendChild(col3);    
    row.appendChild(col4);  
    col1.appendChild(input1);
    col2.appendChild(input2);
    col3.appendChild(input3);     
    col4.appendChild(input4); 

    return row;

}