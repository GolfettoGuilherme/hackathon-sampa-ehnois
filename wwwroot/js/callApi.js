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
        url: urlApi + "/hack/spSelBuscaLinha/" + idLinha.replace("-","") + "/" + dataInicio + "/" + dataFim,
        type: "GET",
        crossDomain : true
    }).done(function(result){
        if(result){
            console.log(result);
            $("#nomeLinha").text(result.idLinha + " " + result.nomeLinha);
            $("#mediaPassageiros").text(result.mediaPassageiros);
            $("#mediaPagantes").text(result.mediaPassageirosPagantes);
            $("#mediaEstudantesPagantes").text(result.mediaPagEstudante);
            $("#mediaGratis").text(result.mediaGratuidade);
            $("#bloco-pai-retorno").css("height","550px");
            $("#bloco-retorno").show('slow');
            buscarLinha(idLinha);
        }
    });
}
function extrair(idLinha,dataInicio,dataFim){
    window.open(urlApi + "/hack/Extracao/" + idLinha.replace("-","") + "/" + dataInicio + "/" + dataFim, "_blank");
}
