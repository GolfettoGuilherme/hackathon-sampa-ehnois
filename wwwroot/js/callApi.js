var urlApi = "https://webapiagoravai.azurewebsites.net/api";

//seja foda !!!
function buscarLinha(idLinha){
    $.ajax({
        url: urlApi + "/hack/GetLinha/" + idLinha,
        type: "GET",
        crossDomain : true
    }).done(function(result){
        if(result){
            limparMapa();
            let corLinha = "";
            result.forEach(function(i){
                dadosParaLinha.push({lat: i.latitude, lng: i.longitude});
                corLinha = $(this).corLinha;
            });
            adicionarLinha(dadosParaLinha,corLinha);
        } else{
            alert("Deu ruim");
        }
    });
}

function getInfoLinha(idLinha,dataInicio,dataFim){
    $.ajax({
        url: urlApi + "/hack/spSelBuscaLinha/" + idLinha + "/" + dataInicio + "/" + dataFim,
        type: "GET",
        crossDomain : true,
        dataType:'jsonp'
    }).done(function(result){
        if(result){
            console.log(result);
        }
    });
}

