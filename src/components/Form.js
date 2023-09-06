import React, {useState} from 'react';

export default function CreateUser() {
  const [values,setValues] = useState({
    proveedor:'',
    cif: '',
    localidad: '',
  })

  const handlerOnChange = (e) => {
    setValues(() => {
      return {...values,[e.target.name]: e.target.value}
    });
  };
  const handleSubmit=(event)=>{
    event.preventDefault();
    console.log(values);
    };

  return (
    <form onSubmit={handleSubmit}>
      <div className='row'>
        <label htmlFor="proveedor">Proveedor</label>
        <input type='text' id='proveedor' name='proveedor' onChange={handlerOnChange} />
      </div>
      <div className='row'>
        <label htmlFor="password">CIF</label>
        <input type='text' id='cif' name='cif' onChange={handlerOnChange} />
      </div>
      <div className='row'>
        <label htmlFor="localidad">Localidad</label>
        <input type='text' id='localidad' name='localidad' onChange={handlerOnChange} />
      </div>
      <div className='row-buttons'>
        <button type='submit'>Añadir</button>
      </div>
    </form>
  );
};
