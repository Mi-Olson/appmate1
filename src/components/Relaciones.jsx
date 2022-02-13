import React, { Fragment} from 'react'


const Relaciones = ({setEsperaActiva,esperaActiva,ima,grande,setImagen1,setImagen2,setImagen3,setImagen4,setImagen5,setImagen6,setImagen7,setImagen8,setImagen9,setImagen10,setEleccion,imagen1,imagen2,imagen3,imagen4,imagen5,imagen6,imagen7,imagen8,imagen9,imagen10,eleccion,columna,setColumnas,setOpcionRelaciones,opcionRelaciones}) => {
    
   
    const cargarOpcion = (opcion) => {
       
  
        setEsperaActiva(true);

        setTimeout(() => {
            setOpcionRelaciones(opcion);
            // Paso el cargando a false
            // para eliminar el spinner
            setEsperaActiva(false);
   
            
                
                }, 3000);
       

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
            
            {(opcionRelaciones==="inicio" && !esperaActiva)?(
                <div  >
              
                        <figure className="bg-gradient-to-r from-emerald-500 to-emerald-100 w-90 h-60  rounded-xl p-8  dark:bg-slate-800 mb-5  ">  
                                <div className="flex grid grid-cols-2 " > 
                                    <div className="underline italic text-lg font-medium " >
                                
                                    </div>   
                                    <button className="rounded-full w-32 h-8 bg-emerald-600 hover:bg-emerald-400" onClick={()=>cargarOpcion("1")}> Contenido</button>
                                </div>
                                    
                                    <div className="pt-6 space-y-4">
                                                <blockquote>
                                                <p className="text-lg font-medium">
                                                TIPOS DE RELACIONES
                                                </p>
                                                </blockquote>
                                    
                                                        
                                    </div>
                        </figure> 
                
                       <figure className="bg-gradient-to-r from-emerald-500 to-emerald-100 w-90 h-60  rounded-xl p-8  dark:bg-slate-800  ">  
                        <div className="flex grid grid-cols-2 " > 
                            <div className="underline italic text-lg font-medium " >
                   
                            </div>   
                            <button className="rounded-full w-32 h-8 bg-emerald-600 hover:bg-emerald-400" onClick={()=>cargarOpcion("2")}> Contenido</button>
                        </div>
             
                        <div className="pt-6 space-y-4">
                            <blockquote>
                            <p className="text-lg font-medium">  PROPIEDADES DE RELACIONES</p>
                            </blockquote>
                            <figcaption className="text-xs font-medium">
                                <div>      </div>
                                
                            </figcaption>
                        </div>
        
                        </figure>
                 </div>
               


            ):(opcionRelaciones==="1" && !esperaActiva)?(
                <div className="grid grid-rows-1 grid-flow-col gap-4">
                    
                    <div >
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
            ):((opcionRelaciones==="2" && !esperaActiva)?(
                <div className="grid grid-rows-2 grid-flow-col gap-4">
                <div className='mx-5'>
                    <button className={imagen5} onClick={()=>imagen("5")}>
                    <img className={imagen5} title="click para agrandar" src={ima[4]} width="50" heitgh="50" alt='20'></img>
                    </button>
                </div>
                <div className='mx-5' >
                    <button className={imagen6} onClick={()=>imagen("6")}>
                    <img className={imagen6} title="click para agrandar" src={ima[5]} width="50" heitgh="50" alt='20'></img>
                    </button>
                </div>
                <div className='mx-5' >
                    <button className={imagen7} onClick={()=>imagen("7")}>
                    <img className={imagen7} title="click para agrandar" src={ima[6]} width="50" heitgh="50" alt='20'></img>
                    </button>
                </div>
                <div className='mx-5'>
                    <button className={imagen8} onClick={()=>imagen("8")}>
                    <img className={imagen8} title="click para agrandar" src={ima[7]} width="50" heitgh="50" alt='20'></img>
                    </button>
                </div>
                <div className='mx-5'>
                    <button className={imagen9} onClick={()=>imagen("9")}>
                    <img className={imagen9} title="click para agrandar" src={ima[8]} width="50" heitgh="50" alt='20'></img>
                    </button>
                </div>
                <div className='mx-5'>
                    <button className={imagen10} onClick={()=>imagen("10")}>
                    <img className={imagen10} title="click para agrandar" src={ima[9]} width="50" heitgh="50" alt='20'></img>
                    </button>
                </div>

            </div>):(<p></p>)
            )      }

            
        

       
        </Fragment>
    )
}

export default Relaciones