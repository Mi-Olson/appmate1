import React, { Fragment } from 'react'
import linklogica from "./images/linklogica.jpg"
import logica2 from "./images/logica-2.png"

const Logica = ({dimension,grande,setImagen1,setImagen2,setEleccion,imagen1,imagen2,eleccion}) => {
    

    const imagen=(numero)=>{
       
       
        if (numero==="1" && !eleccion){
            setImagen2("hidden");
            setImagen1(grande);
            setEleccion(true);

        }
        else  if (numero==="2" && !eleccion){
            setImagen1("hidden");
            setImagen2(grande);
            setEleccion(true);

        }
           
    }
    
   
    
    return (
        <Fragment>
                   
         <div className="flex justify-center grid-rows-1 grid-flow-col gap-10 mt-10 ">
            <div>
                <button className={imagen1} onClick={()=>imagen("1")}>
                <img className={imagen1} title="click para agrandar" src={linklogica} width="100" heitgh="100" alt='20'></img>
                </button>
            </div>
            <div>
                <button className={imagen2} onClick={()=>imagen("2")}>
                <img className={imagen2} title="click para agrandar" src={logica2} width="100" heitgh="100" alt='20'></img>
                </button>
            </div>
           

           
            
            
        </div>

       
        </Fragment>
    )
}

export default Logica
