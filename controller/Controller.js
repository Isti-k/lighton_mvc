import Model from "../Model/Model.js";
import JatekTer from "../View/JatekTer.js";




export default class Controller{

    constructor(){
        this.model = new Model()
        this.lista=this.model.getLista()
        new JatekTer(this.lista);
        this.kapcsolasEsemenyKezeles();
    }
    
    kapcsolasEsemenyKezeles(){
        $(window).on("kapcsolas", (event) => {
            //console.log(event.detail);
            let id = event.detail;
            /* Itt változtatjuk meg a program állapotát */
            this.model.szomszedokValtoztatasa(id);
            console.log(id)
        });
    }
}