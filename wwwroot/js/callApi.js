var urlApi = "https://webapiagoravai.azurewebsites.net/api";

function buscarLinha(idLinha){
    // $.ajax({
    //     url: urlApi + ""
    // });
}

function buscarTeste(){
    $.ajax({
        url: urlApi + "/hack/GetTeste",
        type: "GET",
        crossDomain : true
    }).done(function(result){
        if(result){
            console.log(result);
        }
    });
}