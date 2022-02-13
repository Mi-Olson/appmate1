
import './App.css';
import Logica from "./components/Logica"
import Spinner from './components/Spinner'

import Unidades from "./components/Unidades.jsx"
import Encabezado from './components/Encabezado';
import Relaciones from './components/Relaciones';
import Razonamiento from './components/Razonamiento';
import Combinatoria from './components/Combinatoria';

//imagenes relaciones
import rela1 from "./components/images/clas_relaciones-1.jpg"
import rela2 from "./components/images/clas_relaciones_2.png"
import rela3 from "./components/images/clas-rel-3.png"
import rela4 from "./components/images/clas-rel-4.png"
import rela5 from "./components/images/clas-rel-5.png"
import rela6 from "./components/images/clas-rel-6.png"
import rela7 from "./components/images/clas-rel-7.png"
import rela8 from "./components/images/clas-rel-8.png"
import rela9 from "./components/images/clas-rel-9.png"
import rela10 from "./components/images/clas-rel-10.png"



import { useState, useEffect } from 'react';

function App() {
  const [ima,setIma]=useState([rela1,rela2,rela3,rela4,rela5,rela6,rela7,rela8,rela9,rela10]);
  

  const [data,setData]=useState([]);
  //para spinner(apaga o enciende)
  const [esperaActiva, setEsperaActiva] = useState(false);

  const[unidad,setUnidad]=useState("inicio");
  //// LOGICA  ---IMAGENES//
  const[dimension,setDimension] =useState("rounded-md w-56 h-32  border-double border-4 border-emerald-600 hover:scale-110 hover:border-hidden mx-5 my-5");
  const[grande,setGrande] =useState("rounded-80  h-screen w-screen mx-0 px-5 py-5 mt-5 ");

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

   const [columna,setColumnas]=useState("grid grid-cols-1  gap-1 md:grid-cols-3 md:gap-3 lg:grid-cols-3 lg:gap-5 lg:grid-rows-2   mx-5   my-5 ");
  // const [columna,setColumnas]=useState("grid grid-cols-2  gap-1 md:grid-cols-3 md:gap-3 lg:grid-cols-4 lg:gap-x-10 ");
    
  
  const [opcionRelaciones,setOpcionRelaciones]=useState("inicio");

  const getData = async () => {
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
       getData();
      
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
       setImagen5={setImagen5}
       setImagen6={setImagen6}
       setImagen7={setImagen7}
       setImagen8={setImagen8}
       setImagen9={setImagen9}
       setImagen10={setImagen10}
       
       dimension={dimension}
       setUnidad={setUnidad}
       unidad={unidad}
       setOpcionRelaciones={setOpcionRelaciones}
       opcionRelaciones={opcionRelaciones}
       setEsperaActiva={setEsperaActiva}
      
       setColumnas={setColumnas}
      />  

      <div  >
        { (unidad ==="inicio" && !esperaActiva) ? (
                  <div  className="grid grid-cols-1  gap-1 md:grid-cols-3 md:gap-3 lg:grid-cols-3 lg:gap-5 lg:grid-rows-2   mx-5   my-5 ">{
                  data.map(dato=>(
                    
                      <Unidades
                        key={dato.id}
                        id={dato.id}
                        unidad={dato.unidad}
                        contenido={dato.contenido}
                        fondo={"bg-gradient-to-r from-emerald-500 to-emerald-100 w-90 h-60  rounded-xl p-8  dark:bg-slate-800  "}
                        setUnidad={setUnidad}
                        setEsperaActiva={setEsperaActiva}
                        

                                   
                      
                      /> 
                      
                    ))}</div>
                    ) : (unidad==="1" && !esperaActiva)?(<div className='grid grid-cols-1 mx-0 px-0'>
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
                      (unidad==="3" && !esperaActiva)?(<div className='grid grid-cols-1 mx-0 px-0'>
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
                      :(unidad==="4" && !esperaActiva)?( 
                      <div className="grid grid-cols-1  gap-1 md:grid-cols-3 md:gap-3 lg:grid-cols-3 lg:gap-5 lg:grid-rows-2   mx-5   my-5 " >
                        <Relaciones
                        setOpcionRelaciones={setOpcionRelaciones}
                        esperaActiva={esperaActiva}
                        setEsperaActiva={setEsperaActiva}

                        opcionRelaciones={opcionRelaciones}
                        dimension={dimension}
                        grande={grande}
                        columna={columna}
                        setColumnas={setColumnas}
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
                        ima={ima}
                        
                        /></div>):((unidad==="5" && !esperaActiva)?( <div className='grid grid-cols-1 mx-0 px-0'>
                        <Combinatoria
                        dimension={dimension}
                        grande={grande}
                        setImagen1={setImagen1}
                        setImagen2={setImagen2}
                        setImagen3={setImagen3}
                        setImagen4={setImagen4}
                        setImagen5={setImagen5}
                        
                        setEleccion={setEleccion}
                        eleccion={eleccion}
                        imagen1={imagen1}
                        imagen2={imagen2}
                        imagen3={imagen3}
                        imagen4={imagen4}
                        imagen5={imagen5}
                      
                        
                        /></div>):(esperaActiva ?
                          <Spinner/>:(<p></p>)))}
        </div>            
      
       
      </header>
    </div>
  );
}

export default App;
