import React, { Fragment, useState} from 'react'


const Relaciones = ({ima,grande,setImagen1,setImagen2,setImagen3,setImagen4,setImagen5,setImagen6,setImagen7,setImagen8,setImagen9,setImagen10,setEleccion,imagen1,imagen2,imagen3,imagen4,imagen5,imagen6,imagen7,imagen8,imagen9,imagen10,eleccion,columna,setColumnas,setOpcionRelaciones,opcionRelaciones}) => {
    
   
    const cargarOpcion = (opcion) => {
        setOpcionRelaciones(opcion);


    }
    
    
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
              <div >
            {(opcionRelaciones==="inicio")?(
                <div className={columna}>
                        <div>
                            <button className="rounded-lg border-2 border-emerald-600 w-32 h-32 bg-teal-400 hover:bg-teal-600 hover:border-2 hover:border-teal-900 " onClick={()=>cargarOpcion("1")}> 
                            TIPOS DE RELACIONES
                            </button>
                        </div>
            
                        <div>
                            <button className="rounded-lg border-2 border-emerald-600 w-32 h-32 bg-teal-400 hover:bg-teal-600 hover:border-2 hover:border-teal-900 " onClick={()=>cargarOpcion("2")}>
                                PROPIEDADES DE RELACIONES
                            </button>
                            
                        </div>
                </div>
            ):(opcionRelaciones==="1")?(
                <div className={columna}>
                    <div>
                        <button className={imagen1} onClick={()=>imagen("1")}>
                        <img className={imagen1} title="click para agrandar" src={ima[0]} width="50" heitgh="50" alt='20'></img>
                        </button>
                    </div>
                    <div>
                        <button className={imagen2} onClick={()=>imagen("2")}>
                        <img className={imagen2} title="click para agrandar" src={ima[1]} width="50" heitgh="50" alt='20'></img>
                        </button>
                    </div>
                    <div>
                        <button className={imagen3} onClick={()=>imagen("3")}>
                        <img className={imagen3} title="click para agrandar" src={ima[2]} width="50" heitgh="50" alt='20'></img>
                        </button>
                    </div>
                    <div>
                        <button className={imagen4} onClick={()=>imagen("4")}>
                        <img className={imagen4} title="click para agrandar" src={ima[3]} width="50" heitgh="50" alt='20'></img>
                        </button>
                    </div>
                </div>
            ):(
                <div className={columna}>
                <div>
                    <button className={imagen5} onClick={()=>imagen("5")}>
                    <img className={imagen5} title="click para agrandar" src={ima[4]} width="50" heitgh="50" alt='20'></img>
                    </button>
                </div>
                <div>
                    <button className={imagen6} onClick={()=>imagen("6")}>
                    <img className={imagen6} title="click para agrandar" src={ima[5]} width="50" heitgh="50" alt='20'></img>
                    </button>
                </div>
                <div>
                    <button className={imagen7} onClick={()=>imagen("7")}>
                    <img className={imagen7} title="click para agrandar" src={ima[6]} width="50" heitgh="50" alt='20'></img>
                    </button>
                </div>
                <div>
                    <button className={imagen8} onClick={()=>imagen("8")}>
                    <img className={imagen8} title="click para agrandar" src={ima[7]} width="50" heitgh="50" alt='20'></img>
                    </button>
                </div>
                <div>
                    <button className={imagen9} onClick={()=>imagen("9")}>
                    <img className={imagen9} title="click para agrandar" src={ima[8]} width="50" heitgh="50" alt='20'></img>
                    </button>
                </div>
                <div>
                    <button className={imagen10} onClick={()=>imagen("10")}>
                    <img className={imagen10} title="click para agrandar" src={ima[9]} width="50" heitgh="50" alt='20'></img>
                    </button>
                </div>

            </div>
            )      }

            
        </div>

       
        </Fragment>
    )
}

export default Relaciones