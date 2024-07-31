alert("iniciando")


function Tempo(a,b,c){
    
    
    setTimeout(function(){
        alert(`Tempo ${b}`)
    },b* 1000)
    setTimeout(function(){
        alert(`Tempo ${c}`)
    },c* 1000)
}
Tempo(3,5,7)