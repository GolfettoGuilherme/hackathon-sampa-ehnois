var map;
var markers = [];
var linhas = [];
var marcoZero = {lat: -23.5504652, lng: -46.6335146};
var proximoPonto = {lat: -23.549422, lng: -46.637629};
var dadosParaLinha = [];

$(document).ready(function () {    
    initMap();
    // adicionarPino(marcoZero);
    // adicionarPino(proximoPonto);
    // desenharLinha(dadosParaLinha);

    $(".botao-buscar").click(function(){
        let nomeLinha = $("#buscaLinha").val();
        let dataMin = $("#dataInicio").val();
        let dataMax = $("#dataFinal").val();
        limparMapa();
        getInfoLinha(nomeLinha,dataMin,dataMax);
    });

    $("#btn-extrair").click(function(){
        let nomeLinha = $("#buscaLinha").val();
        let dataMin = $("#dataInicio").val();
        let dataMax = $("#dataFinal").val();

        extrair(nomeLinha,dataMin,dataMax);
    });
});

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: {lat: -23.596720, lng: -46.672759}
    });
}


function adicionarPino(posicao){
    var marker = new google.maps.Marker({
        position: posicao,
        map: map,
        title: 'idLinha'
    });
    markers.push(marker);

    marker.addListener('click', function() {
        map.setZoom(18);
        map.setCenter(marker.getPosition());
        $("#ModalDadosLinha").modal();
    });
}

function adicionarLinha(posicoes,corDaLinha){
    console.log(posicoes);
    posicoes.forEach(function(i){
        adicionarPino(i);
    });
    desenharLinha(posicoes,corDaLinha);
}

function desenharLinha(dadosLinha, corDaLinha){
    var flightPath = new google.maps.Polyline({
        path: dadosLinha,
        geodesic: true,
        strokeColor: corDaLinha,
        strokeOpacity: 1.0,
        strokeWeight: 5
    });
    flightPath.setMap(map);
    linhas.push(flightPath);
}

function limparMapa(){
    if (markers !== null && markers.length > 0) {
        for (var i = 0; i < markers.length; i++) {
            let m = markers[i];
            m.setMap(null);
        }
        if (map === null)
            markers = [];
    }

    if(linhas !== null && linhas.length > 0){
        for(var i = 0; i < linhas.length; i++){
            let linha = linhas[i];
            linha.setMap(null);
        }
    }    
    dadosParaLinha = [];
    
}

