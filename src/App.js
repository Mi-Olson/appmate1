
import './App.css';
import Logica from "./components/Logica"

import Unidades from "./components/Unidades.jsx"
import Encabezado from './components/Encabezado';
import Relaciones from './components/Relaciones';
import Razonamiento from './components/Razonamiento';




import { useState, useEffect } from 'react';

function App() {
  

  const [data,setData]=useState([]);
  const[unidad,setUnidad]=useState("inicio");
  //// LOGICA  ---IMAGENES//
  const[dimension,setDimension] =useState("rounded-md w-56 h-32 mx-3 my-2 hover:scale-110 ");
  const[grande,setGrande] =useState("rounded-80  h-screen w-screen mx-0 px-10 py-5 mt-5 ");

  const[imagen1,setImagen1] =useState(dimension);
  const[imagen2,setImagen2] =useState(dimension);
  const[imagen3,setImagen3] =useState(dimension);
  const[imagen4,setImagen4] =useState(dimension);
  const[imagen5,setImagen5] =useState(dimension);
  const[imagen6,setImagen6] =useState(dimension);
  const[imagen7,setImagen7] =useState(dimension);
  const[imagen8,setImagen8] =useState(dimension);
  const[imagen9,setImagen9] =useState(dimension);
  const[imagen10,setImagen10] =useState(dimension);
  
  const[eleccion,setEleccion]=useState(false);
   
  

  const getData = async ({}) => {
    try{
    //  cargarInicio(true)
    const url= `mate1.json`;

    const api = await fetch(url);
    
    const data = await api.json();
    
   
    
    setData(data[2].data);
     
   
   
    }
    catch (error){
      console.log(error);
    }
  } 
   useEffect (() =>{
       getData({});
      
   },[]);
  return (
    <div >
      <header >

      <Encabezado
       eleccion={eleccion}
       setEleccion={setEleccion}
       setImagen1={setImagen1}
       setImagen2={setImagen2}
       setImagen3={setImagen3}
       setImagen4={setImagen4}
       dimension={dimension}
       setUnidad={setUnidad}
       unidad={unidad}
      />  

      <div className="grid grid-cols-1  gap-1 md:grid-cols-3 md:gap-3 lg:grid-cols-3 lg:gap-5 lg:grid-rows-2   mx-5   my-5 " >
        { unidad ==="inicio" ? (data.map(dato=>(

                      <Unidades
                        key={dato.id}
                        id={dato.id}
                        unidad={dato.unidad}
                        contenido={dato.contenido}
                        fondo={"bg-gradient-to-r from-emerald-500 to-emerald-100 w-90 h-60  rounded-xl p-8  dark:bg-slate-800  "}
                        setUnidad={setUnidad}

                                   
                      
                      /> 
                    ))) : (unidad==="1")?(<div className='grid grid-cols-1 mx-0 px-0'>
                      <Logica
                      dimension={dimension}
                      grande={grande}
                      setImagen1={setImagen1}
                      setImagen2={setImagen2}
                      setEleccion={setEleccion}
                      eleccion={eleccion}
                      imagen1={imagen1}
                      imagen2={imagen2}
                      /></div>):
                      (unidad==="3")?(<div className='grid grid-cols-1 mx-0 px-0'>
                      <Razonamiento
                      dimension={dimension}
                      grande={grande}
                      setImagen1={setImagen1}
                      setImagen2={setImagen2}
                      setEleccion={setEleccion}
                      eleccion={eleccion}
                      imagen1={imagen1}
                      imagen2={imagen2}
                      /></div>)
                      :(unidad==="4")?( <div className='grid grid-cols-1 mx-0 px-0'>
                        <Relaciones
                        dimension={dimension}
                        grande={grande}
                        setImagen1={setImagen1}
                        setImagen2={setImagen2}
                        setImagen3={setImagen3}
                        setImagen4={setImagen4}
                        setImagen5={setImagen5}
                        setImagen6={setImagen6}
                        setImagen7={setImagen7}
                        setImagen8={setImagen8}
                        setImagen9={setImagen9}
                        setImagen10={setImagen10}
                        setEleccion={setEleccion}
                        eleccion={eleccion}
                        imagen1={imagen1}
                        imagen2={imagen2}
                        imagen3={imagen3}
                        imagen4={imagen4}
                        imagen5={imagen5}
                        imagen6={imagen6}
                        imagen7={imagen7}
                        imagen8={imagen8}
                        imagen9={imagen9}
                        imagen10={imagen10}
                        
                        /></div>):(<p>que lio</p>)}
        </div>            
      
       
      </header>
    </div>
  );
}

export default App;
