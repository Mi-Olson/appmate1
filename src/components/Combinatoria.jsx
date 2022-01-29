import React,{Fragment} from 'react'
import comb1 from "./images/comb-1.png"
import comb2 from "./images/comb-2.png"
import comb3 from "./images/comb-3.png"
import comb4 from "./images/comb-4.png"






const Combinatoria = ({grande,setImagen1,setImagen2,setImagen3,setImagen4,setImagen5,setEleccion,imagen1,imagen2,imagen3,imagen4,imagen5,eleccion}) => {


    const imagen=(numero)=>{
       
       
        if (numero==="1" && !eleccion){
            setImagen1(grande);
            
            setImagen2("hidden");
            setImagen3("hidden");
            setImagen4("hidden");
           
            setEleccion(true);

        }else if(numero==="2" && !eleccion){
            setImagen2(grande);
            setImagen1("hidden");
            
            setImagen3("hidden");
            setImagen4("hidden");
           
            setEleccion(true);

        }else if(numero==="3" && !eleccion){
            setImagen3(grande);
            setImagen1("hidden");
            setImagen2("hidden");
           
            setImagen4("hidden");
           
            setEleccion(true);

        }else if(numero==="4" && !eleccion){
            setImagen4(grande);
            setImagen1("hidden");
            setImagen2("hidden");
            setImagen3("hidden");
           
           
            setEleccion(true);

      

       
        }
           
    }
    

    return (
        <Fragment>
                      
        {/* <div className="grid gap-x-72 gap-y-px grid-cols-4  grid-rows-3 "> */}
        <div className="grid grid-rows-1 grid-flow-col gap-4"> 
           <div>
               <button className={imagen1} onClick={()=>imagen("1")}>
               <img className={imagen1} title="click para agrandar" src={comb1} width="100" heitgh="100" alt='20'></img>
               </button>
           </div>
           <div>
               <button className={imagen2} onClick={()=>imagen("2")}>
               <img className={imagen2} title="click para agrandar" src={comb2} width="200" heitgh="200" alt='20'></img>
               </button>
           </div>
           <div>
               <button className={imagen3} onClick={()=>imagen("3")}>
               <img className={imagen3} title="click para agrandar" src={comb3} width="200" heitgh="200" alt='20'></img>
               </button>
           </div>
           <div>
               <button className={imagen4} onClick={()=>imagen("4")}>
               <img className={imagen4} title="click para agrandar" src={comb4} width="200" heitgh="200" alt='20'></img>
               </button>
           </div>
           
          
           

          
           
           
       </div>

      
       </Fragment>
     );
}
 
export default Combinatoria;