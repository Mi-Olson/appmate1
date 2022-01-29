import React, { Fragment} from 'react'
import rela1 from "./images/clas_relaciones-1.jpg"
import rela2 from "./images/clas_relaciones_2.png"
import rela3 from "./images/clas-rel-3.png"
import rela4 from "./images/clas-rel-4.png"
import rela5 from "./images/clas-rel-5.png"
import rela6 from "./images/clas-rel-6.png"
import rela7 from "./images/clas-rel-7.png"
import rela8 from "./images/clas-rel-8.png"
import rela9 from "./images/clas-rel-9.png"
import rela10 from "./images/clas-rel-10.png"


const Relaciones = ({grande,setImagen1,setImagen2,setImagen3,setImagen4,setImagen5,setImagen6,setImagen7,setImagen8,setImagen9,setImagen10,setEleccion,imagen1,imagen2,imagen3,imagen4,imagen5,imagen6,imagen7,imagen8,imagen9,imagen10,eleccion,columna,setColumnas}) => {
   
    
    const imagen=(numero)=>{
        setColumnas("");
        setImagen1("hidden");
        setImagen2("hidden");
        setImagen3("hidden");
        setImagen4("hidden");
        setImagen5("hidden");
        setImagen6("hidden");
        setImagen7("hidden");
        setImagen8("hidden");
        setImagen9("hidden");
        setImagen10("hidden");
        setEleccion(true);

       
       
            
            
       
       
        if (numero==="1" && !eleccion){
            setImagen1(grande);
            

        }else if(numero==="2" && !eleccion){
            setImagen2(grande);
          
        }else if(numero==="3" && !eleccion){
            setImagen3(grande);
       

        }else if(numero==="4" && !eleccion){
            setImagen4(grande);
        

        }else if(numero==="5" && !eleccion){
            setImagen5(grande);
        

        }else if(numero==="6" && !eleccion){
            setImagen6(grande);
        
        }else if(numero==="7" && !eleccion){
            setImagen7(grande);
           
        }else if(numero==="8" && !eleccion){
            setImagen8(grande);
            

        }else if(numero==="9" && !eleccion){
            setImagen9(grande);
         

        }else if(numero==="10" && !eleccion){
            setImagen10(grande);
            
        }
           
    }
    
    
    
    return (
        <Fragment>
             <div className={columna}>
                      
         
         
            <div>
                <button className={imagen1} onClick={()=>imagen("1")}>
                <img className={imagen1} title="click para agrandar" src={rela1} width="50" heitgh="50" alt='20'></img>
                </button>
            </div>
            <div>
                <button className={imagen2} onClick={()=>imagen("2")}>
                <img className={imagen2} title="click para agrandar" src={rela2} width="50" heitgh="50" alt='20'></img>
                </button>
            </div>
            <div>
                <button className={imagen3} onClick={()=>imagen("3")}>
                <img className={imagen3} title="click para agrandar" src={rela3} width="50" heitgh="50" alt='20'></img>
                </button>
            </div>
            <div>
                <button className={imagen4} onClick={()=>imagen("4")}>
                <img className={imagen4} title="click para agrandar" src={rela4} width="50" heitgh="50" alt='20'></img>
                </button>
            </div>
            <div>
                <button className={imagen5} onClick={()=>imagen("5")}>
                <img className={imagen5} title="click para agrandar" src={rela5} width="50" heitgh="50" alt='20'></img>
                </button>
            </div>
            <div>
                <button className={imagen6} onClick={()=>imagen("6")}>
                <img className={imagen6} title="click para agrandar" src={rela6} width="50" heitgh="50" alt='20'></img>
                </button>
            </div>
            <div>
                <button className={imagen7} onClick={()=>imagen("7")}>
                <img className={imagen7} title="click para agrandar" src={rela7} width="50" heitgh="50" alt='20'></img>
                </button>
            </div>
            <div>
                <button className={imagen8} onClick={()=>imagen("8")}>
                <img className={imagen8} title="click para agrandar" src={rela8} width="50" heitgh="50" alt='20'></img>
                </button>
            </div>
            <div>
                <button className={imagen9} onClick={()=>imagen("9")}>
                <img className={imagen9} title="click para agrandar" src={rela9} width="50" heitgh="50" alt='20'></img>
                </button>
            </div>
            <div>
                <button className={imagen10} onClick={()=>imagen("10")}>
                <img className={imagen10} title="click para agrandar" src={rela10} width="50" heitgh="50" alt='20'></img>
                </button>
            </div>
            

           
            
            
        </div>

       
        </Fragment>
    )
}

export default Relaciones