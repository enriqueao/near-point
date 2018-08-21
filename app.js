var request = require('request');
var geolib = require('geolib');

getEstacion = async(lat, lng) => {
    // let {data: stations, status } = await getActiveStations();
    console.log("Inicio la petición");
    let stations = await getActiveStations();
    console.log(stations);
    console.log("Finalizo la petición");
    let isPoint = geolib.isPointInCircle(
        { latitude: 20.741610, longitude: -100.447301},
        {latitude: lat, longitude: lng},
        5000
    );
    return isPoint;
};


getActiveStations = async ()=>{
    request
        .get(`http://hidrojurica.ml:8090/scrape/stations/map`)
        .on('data', (data) => {
            // return JSON.parse(data.toString()).data;
            return 12;
        }).on('error', (error) => {
            console.log(error);
        });
}


getEstacion(20.703952, -100.444632).then((estacion)=>{
    console.log(estacion);
}).catch((err)=>{
    console.log(err);
})