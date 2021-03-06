import { Fragment } from "react";

import '../App.css';

const Encabezado = ({setEleccion,setImagen1,setImagen2,setImagen3,setImagen4,setImagen5,setImagen6,setImagen7,setImagen8,setImagen9,setImagen10,dimension,eleccion,setUnidad,unidad,setColumnas,setOpcionRelaciones,opcionRelaciones}) => {
    console.log(`opcionRelaciones en encabezado:${opcionRelaciones}`);
    const cargarOpcion = (opcion) => {
        setOpcionRelaciones(opcion);


    }
    const normalizarImagen=()=>{
        setEleccion(false);
        // setColumnas("grid grid-cols-4 gap-x-60 ");
        setColumnas("grid grid-cols-2  gap-1 md:grid-cols-3 md:gap-3 lg:grid-cols-4 lg:gap-x-60");
       
        setImagen1(dimension);
        setImagen2(dimension);
        setImagen3(dimension);
        setImagen4(dimension);
        setImagen5(dimension);
        setImagen6(dimension);
        setImagen7(dimension);
        setImagen8(dimension);
        setImagen9(dimension);
        setImagen10(dimension)
        
    }
    const irAInicio=()=>{
        setUnidad("inicio");
        setOpcionRelaciones("inicio");

    }
    return ( 
        <Fragment>
    <div className='w-screen h-16 mx-0 px-5 bg-emerald-600'>
        { (eleccion && unidad !=="inicio") 
            ?(
            <button className="Boton" onClick={()=>normalizarImagen()}>
            ver tamaño normal
            </button>
           )
           :( (!eleccion && unidad !=="inicio" && opcionRelaciones ==="inicio" )?(

           <button className="Boton" onClick={()=>irAInicio()}>
           IR A INICIO
           </button>
           ) :((!eleccion && unidad ==="4" && opcionRelaciones !=="inicio" )?(
            <div>
                    <button className="Boton" onClick={()=>irAInicio()}>
                    IR A INICIO
                    </button>
                    <button className="Boton" onClick={()=>cargarOpcion("inicio")}>
                    VOLVER
                    </button>

            </div>
           ):(<p></p>))
           )   
          
        }
        </div> 
    
    </Fragment>

);
       }
 
export default Encabezado;