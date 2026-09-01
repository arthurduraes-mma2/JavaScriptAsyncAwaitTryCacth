function prepararPedido(){
    return new Promise((resolve)=>{
        console.log("Preparando pedido ......");

        setTimeout(()=>{
            resolve("Hambuger pronto!");
        },3000);
    })
}

prepararPedido().then((resultado)=>{
    console.log(resultado)
})