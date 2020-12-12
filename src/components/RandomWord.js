import {palavraAedes} from './content/XMLAedes'; 
import {palavraDengue} from './content/XMLDengue'; 
import {palavraZika} from './content/XMLZika'; 
import {palavraChikungunya} from './content/XMLChikungunya'; 
import { palavraFebre } from './content/XMLFebre'; 
function Sorteio(doenca, level) {
    var questoes =[]
    const matriz =
        [[11, 11, 10, 9, 10],
        [9, 9, 9, 7, 10],
        [11, 11, 11, 9, 11],
        [8, 10, 10 ,9, 11],
        [10, 10, 11, 10, 11]]
    const max = matriz[doenca][level]
        
    for (let i = 0; i < level; i++) {
        let sorteio = Math.floor(Math.random() * (max - i));
        if (questoes.includes(sorteio) === false)
            questoes.push(sorteio)
        else {
            i--;
        }
    }
    return questoes
}  
    
export function RandomWord(level, tema) { 
   
    var palavra = [2], indexQ = [], vet = [];
    if (tema === "Aedes") {
        palavra = palavraAedes();
        
    }
    else if (tema === "Chikungunya") {
        let i = 0;    
        indexQ = Sorteio(1, level)
        while(i < level) {
            palavra = palavraChikungunya(indexQ[i], level);
            vet.push(palavra)
            i++;
        }
    }
    else if (tema === "Dengue"){
        palavra = palavraDengue();
        
    }
    else if (tema === "Zika"){
        palavra = palavraZika();
        
    }
    else if (tema === "FebreAmarela"){
        palavra = palavraFebre();
        
    }  
    console.log("vet:" + vet)
    return vet
}