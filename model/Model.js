import JatekTer from "../View/JatekTer.js";





export default class Model{
    
    #lista = [false,true,false,true,false,true,false,true,false];
    constructor(){
   
        
    }
getLista(){
    return this.#lista
}
    szomszedokValtoztatasa(id){
        this.#lista[id] = !this.#lista[id];
        if(id % 3 !== 0){
            this.#lista[id-1] = !this.#lista[id-1];
        }
        if(id % 3 !== 2){
            this.#lista[id+1] = !this.#lista[id+1];
        }
        if(id > 2){
            this.#lista[id-3] = !this.#lista[id-3];
        }
        if(id <6){
            this.#lista[id+3] = !this.#lista[id+3];
        }
    }
}
