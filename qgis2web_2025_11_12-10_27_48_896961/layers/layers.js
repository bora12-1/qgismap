var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 0.500000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_SeoulBusStops_1 = new ol.format.GeoJSON();
var features_SeoulBusStops_1 = format_SeoulBusStops_1.readFeatures(json_SeoulBusStops_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SeoulBusStops_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SeoulBusStops_1.addFeatures(features_SeoulBusStops_1);
var lyr_SeoulBusStops_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SeoulBusStops_1, 
                style: style_SeoulBusStops_1,
                popuplayertitle: 'Seoul Bus Stops',
                interactive: true,
                title: '<img src="styles/legend/SeoulBusStops_1.png" /> Seoul Bus Stops'
            });
var format_SeoulSubwayStations_2 = new ol.format.GeoJSON();
var features_SeoulSubwayStations_2 = format_SeoulSubwayStations_2.readFeatures(json_SeoulSubwayStations_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SeoulSubwayStations_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SeoulSubwayStations_2.addFeatures(features_SeoulSubwayStations_2);
var lyr_SeoulSubwayStations_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SeoulSubwayStations_2, 
                style: style_SeoulSubwayStations_2,
                popuplayertitle: 'Seoul Subway Stations',
                interactive: true,
                title: '<img src="styles/legend/SeoulSubwayStations_2.png" /> Seoul Subway Stations'
            });
var format_YeoidoPark_Roads_3 = new ol.format.GeoJSON();
var features_YeoidoPark_Roads_3 = format_YeoidoPark_Roads_3.readFeatures(json_YeoidoPark_Roads_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YeoidoPark_Roads_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_YeoidoPark_Roads_3.addFeatures(features_YeoidoPark_Roads_3);
var lyr_YeoidoPark_Roads_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_YeoidoPark_Roads_3, 
                style: style_YeoidoPark_Roads_3,
                popuplayertitle: 'Yeoido Park_Roads',
                interactive: true,
    title: 'Yeoido Park_Roads<br />\
    <img src="styles/legend/YeoidoPark_Roads_3_0.png" /> 2 - 3<br />\
    <img src="styles/legend/YeoidoPark_Roads_3_1.png" /> 3 - 4<br />\
    <img src="styles/legend/YeoidoPark_Roads_3_2.png" /> 4 - 5<br />\
    <img src="styles/legend/YeoidoPark_Roads_3_3.png" /> 5 - 6<br />\
    <img src="styles/legend/YeoidoPark_Roads_3_4.png" /> 6 - 7<br />\
    <img src="styles/legend/YeoidoPark_Roads_3_5.png" /> 7 - 8<br />\
    <img src="styles/legend/YeoidoPark_Roads_3_6.png" /> 8 - 9<br />\
    <img src="styles/legend/YeoidoPark_Roads_3_7.png" /> 9 - 10<br />\
    <img src="styles/legend/YeoidoPark_Roads_3_8.png" /> 10 - 11<br />\
    <img src="styles/legend/YeoidoPark_Roads_3_9.png" /> 11 - 12<br />\
    <img src="styles/legend/YeoidoPark_Roads_3_10.png" /> 12 - 13<br />\
    <img src="styles/legend/YeoidoPark_Roads_3_11.png" /> 13 - 14<br />\
    <img src="styles/legend/YeoidoPark_Roads_3_12.png" /> 14 - 15<br />\
    <img src="styles/legend/YeoidoPark_Roads_3_13.png" /> 15 - 16<br />\
    <img src="styles/legend/YeoidoPark_Roads_3_14.png" /> 16 - 17<br />\
    <img src="styles/legend/YeoidoPark_Roads_3_15.png" /> 17 - 18<br />\
    <img src="styles/legend/YeoidoPark_Roads_3_16.png" /> 18 - 19<br />\
    <img src="styles/legend/YeoidoPark_Roads_3_17.png" /> 19 - 20<br />\
    <img src="styles/legend/YeoidoPark_Roads_3_18.png" /> 20 - 21<br />\
    <img src="styles/legend/YeoidoPark_Roads_3_19.png" /> 21 - 22<br />\
    <img src="styles/legend/YeoidoPark_Roads_3_20.png" /> 22 - 23<br />' });
var format_OlympicPark_Roads_4 = new ol.format.GeoJSON();
var features_OlympicPark_Roads_4 = format_OlympicPark_Roads_4.readFeatures(json_OlympicPark_Roads_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OlympicPark_Roads_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OlympicPark_Roads_4.addFeatures(features_OlympicPark_Roads_4);
var lyr_OlympicPark_Roads_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OlympicPark_Roads_4, 
                style: style_OlympicPark_Roads_4,
                popuplayertitle: 'Olympic Park_Roads',
                interactive: true,
    title: 'Olympic Park_Roads<br />\
    <img src="styles/legend/OlympicPark_Roads_4_0.png" /> 0 - 1<br />\
    <img src="styles/legend/OlympicPark_Roads_4_1.png" /> 1 - 2<br />\
    <img src="styles/legend/OlympicPark_Roads_4_2.png" /> 2 - 3<br />\
    <img src="styles/legend/OlympicPark_Roads_4_3.png" /> 3 - 4<br />\
    <img src="styles/legend/OlympicPark_Roads_4_4.png" /> 4 - 5<br />\
    <img src="styles/legend/OlympicPark_Roads_4_5.png" /> 5 - 6<br />\
    <img src="styles/legend/OlympicPark_Roads_4_6.png" /> 6 - 7<br />\
    <img src="styles/legend/OlympicPark_Roads_4_7.png" /> 7 - 8<br />\
    <img src="styles/legend/OlympicPark_Roads_4_8.png" /> 8 - 9<br />\
    <img src="styles/legend/OlympicPark_Roads_4_9.png" /> 9 - 10<br />\
    <img src="styles/legend/OlympicPark_Roads_4_10.png" /> 10 - 11<br />\
    <img src="styles/legend/OlympicPark_Roads_4_11.png" /> 11 - 12<br />\
    <img src="styles/legend/OlympicPark_Roads_4_12.png" /> 12 - 13<br />\
    <img src="styles/legend/OlympicPark_Roads_4_13.png" /> 13 - 14<br />\
    <img src="styles/legend/OlympicPark_Roads_4_14.png" /> 14 - 15<br />\
    <img src="styles/legend/OlympicPark_Roads_4_15.png" /> 15 - 16<br />\
    <img src="styles/legend/OlympicPark_Roads_4_16.png" /> 16 - 17<br />\
    <img src="styles/legend/OlympicPark_Roads_4_17.png" /> 17 - 18<br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_SeoulBusStops_1.setVisible(true);lyr_SeoulSubwayStations_2.setVisible(true);lyr_YeoidoPark_Roads_3.setVisible(true);lyr_OlympicPark_Roads_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_SeoulBusStops_1,lyr_SeoulSubwayStations_2,lyr_YeoidoPark_Roads_3,lyr_OlympicPark_Roads_4];
lyr_SeoulBusStops_1.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', });
lyr_SeoulSubwayStations_2.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', });
lyr_YeoidoPark_Roads_3.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', 'Val_min': 'Val_min', 'Val_max': 'Val_max', 'Val_mean': 'Val_mean', 'Val_majori': 'Val_majori', });
lyr_OlympicPark_Roads_4.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', 'Val_min': 'Val_min', 'Val_max': 'Val_max', 'Val_mean': 'Val_mean', 'Val_majori': 'Val_majori', });
lyr_SeoulBusStops_1.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', });
lyr_SeoulSubwayStations_2.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', });
lyr_YeoidoPark_Roads_3.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'maxspeed': 'Range', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', 'Val_min': 'TextEdit', 'Val_max': 'TextEdit', 'Val_mean': 'TextEdit', 'Val_majori': 'TextEdit', });
lyr_OlympicPark_Roads_4.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'maxspeed': 'Range', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', 'Val_min': 'TextEdit', 'Val_max': 'TextEdit', 'Val_mean': 'TextEdit', 'Val_majori': 'TextEdit', });
lyr_SeoulBusStops_1.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', });
lyr_SeoulSubwayStations_2.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', });
lyr_YeoidoPark_Roads_3.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'ref': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', 'Val_min': 'no label', 'Val_max': 'no label', 'Val_mean': 'inline label - visible with data', 'Val_majori': 'no label', });
lyr_OlympicPark_Roads_4.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'ref': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', 'Val_min': 'no label', 'Val_max': 'no label', 'Val_mean': 'inline label - visible with data', 'Val_majori': 'no label', });
lyr_OlympicPark_Roads_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});