import  Kartya  from "./kartya.js";
import { KEPEKLISTA } from "./adat.js";

class Jatek{
    #kepekLista=[];
    #kivalasztasKeplista=[];
   
    constructor(){
        const ART = $("article");
        for (let index = 0; index < KEPEKLISTA.length; index++) {
            let kartya = new Kartya(KEPEKLISTA[index],ART);
            
        }
        $(window).on("trigger",(event)=>{
            console.log(event.detail)


            
        })
    }
    
}

export default Jatek