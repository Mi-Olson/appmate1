import { Fragment } from "react";
import React from 'react';


  


const unidades = ({key,id,unidad,contenido,fondo,setUnidad,setEsperaActiva}) => {
   
   const eleccion = (elegida) => {
      
       
   
  
    setEsperaActiva(true);

    setTimeout(() => {
        // Paso el cargando a false
        // para eliminar el spinner
        setEsperaActiva(false);
        setUnidad(elegida.id);
       
            
            }, 3000);
   ;
};
    
  

return(
    <Fragment >
        {/* <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800 "> */}
        <figure className={fondo}>  
        <div className="flex grid grid-cols-2 " > 
              <div className="underline italic text-lg font-medium " >
               unidad {id} 
               </div>   
               <button className="rounded-full w-32 h-8 bg-emerald-600 hover:bg-emerald-400" onClick={()=>eleccion({id})}> Contenido</button>
         </div>
             
             <div className="pt-6 space-y-4">
                <blockquote>
                 <p className="text-lg font-medium">
                 {unidad}
                </p>
                 </blockquote>
                <figcaption className="text-xs font-medium">
                    <div>
                     contenido :   {contenido}
                     
                    </div>
                    
                 </figcaption>
            </div>
        </figure>
</Fragment>
)
};

export default unidades;