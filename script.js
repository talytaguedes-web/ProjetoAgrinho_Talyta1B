```javascript
let sustentabilidade = 0;


function comprar(produto){

    alert(
        "🛒 Produto adicionado ao carrinho:\n\n" 
        + produto +
        "\n\nObrigado por escolher tecnologia sustentável! 🌱"
    );

}



function adicionarPonto(){


    sustentabilidade += 25;


    if(sustentabilidade > 100){

        sustentabilidade = 100;

    }


    document.getElementById("pontos").innerHTML = sustentabilidade;



    if(sustentabilidade == 100){


        setTimeout(()=>{


            alert(
                "🌎 Parabéns!\n\n" +
                "Sua fazenda alcançou o máximo de sustentabilidade!\n\n" +
                "Produção + Tecnologia + Meio Ambiente = Futuro sustentável 🚜🌱"
            );


        },300);

    }


}
```
