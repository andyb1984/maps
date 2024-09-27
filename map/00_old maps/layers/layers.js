var wms_layers = [];

var lyr_Guidford_BNG_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "Guidford_BNG",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Guidford_BNG_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-93364.812478, 6650500.883418, -46234.726641, 6682589.503851]
                            })
                        });
var lyr_Haslemere_BNG_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Haslemere_BNG",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Haslemere_BNG_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-94316.745168, 6619416.074588, -47303.251220, 6651584.621582]
                            })
                        });
var format_OutcropLocations_2021_03_24_2 = new ol.format.GeoJSON();
var features_OutcropLocations_2021_03_24_2 = format_OutcropLocations_2021_03_24_2.readFeatures(json_OutcropLocations_2021_03_24_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OutcropLocations_2021_03_24_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OutcropLocations_2021_03_24_2.addFeatures(features_OutcropLocations_2021_03_24_2);
var lyr_OutcropLocations_2021_03_24_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OutcropLocations_2021_03_24_2, 
                style: style_OutcropLocations_2021_03_24_2,
                popuplayertitle: "Outcrop Locations_2021_03_24",
                interactive: true,
    title: 'Outcrop Locations_2021_03_24<br />\
    <img src="styles/legend/OutcropLocations_2021_03_24_2_0.png" /> Folkestone-Gault<br />\
    <img src="styles/legend/OutcropLocations_2021_03_24_2_1.png" /> Folkestone<br />\
    <img src="styles/legend/OutcropLocations_2021_03_24_2_2.png" /> Sandgate-Folkestone<br />\
    <img src="styles/legend/OutcropLocations_2021_03_24_2_3.png" /> Sandgate<br />\
    <img src="styles/legend/OutcropLocations_2021_03_24_2_4.png" /> Hythe-Sandgate<br />\
    <img src="styles/legend/OutcropLocations_2021_03_24_2_5.png" /> Hythe<br />\
    <img src="styles/legend/OutcropLocations_2021_03_24_2_6.png" /> Atherfield-Hythe<br />\
    <img src="styles/legend/OutcropLocations_2021_03_24_2_7.png" /> <br />'
        });
var group_Outcrops = new ol.layer.Group({
                                layers: [lyr_OutcropLocations_2021_03_24_2,],
                                fold: "open",
                                title: "Outcrops"});
var group_UK = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "UK"});
var group_ExplorationData = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Exploration Data"});
var group_Geotiffs = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Geotiffs"});
var group_BGSMaps = new ol.layer.Group({
                                layers: [lyr_Guidford_BNG_0,lyr_Haslemere_BNG_1,],
                                fold: "open",
                                title: "BGS Maps"});
var group_OnlineMaps = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Online Maps"});

lyr_Guidford_BNG_0.setVisible(true);lyr_Haslemere_BNG_1.setVisible(true);lyr_OutcropLocations_2021_03_24_2.setVisible(true);
var layersList = [group_BGSMaps,group_Outcrops];
lyr_OutcropLocations_2021_03_24_2.set('fieldAliases', {'Location': 'Location', 'SOURCE': 'SOURCE', 'Age (Approx)': 'Age (Approx)', 'Fm': 'Fm', 'Zone': 'Zone', 'Subzone': 'Subzone', 'Note': 'Note', 'X': 'X', 'Y': 'Y', 'field_10': 'field_10', 'field_11': 'field_11', 'field_12': 'field_12', 'field_13': 'field_13', 'field_14': 'field_14', 'Hythe Fm': 'Hythe Fm', 'Bargate Fm': 'Bargate Fm', 'Puttenham': 'Puttenham', 'Folkestone Fm': 'Folkestone Fm', 'Borehole': 'Borehole', 'NEW': 'NEW', });
lyr_OutcropLocations_2021_03_24_2.set('fieldImages', {'Location': 'TextEdit', 'SOURCE': 'TextEdit', 'Age (Approx)': 'Range', 'Fm': 'TextEdit', 'Zone': 'TextEdit', 'Subzone': 'TextEdit', 'Note': 'TextEdit', 'X': 'Range', 'Y': 'Range', 'field_10': 'TextEdit', 'field_11': 'Range', 'field_12': 'Range', 'field_13': 'Range', 'field_14': 'Range', 'Hythe Fm': 'TextEdit', 'Bargate Fm': 'TextEdit', 'Puttenham': 'TextEdit', 'Folkestone Fm': 'TextEdit', 'Borehole': 'TextEdit', 'NEW': 'TextEdit', });
lyr_OutcropLocations_2021_03_24_2.set('fieldLabels', {'Location': 'no label', 'SOURCE': 'no label', 'Age (Approx)': 'no label', 'Fm': 'no label', 'Zone': 'no label', 'Subzone': 'no label', 'Note': 'no label', 'X': 'no label', 'Y': 'no label', 'field_10': 'no label', 'field_11': 'no label', 'field_12': 'no label', 'field_13': 'no label', 'field_14': 'no label', 'Hythe Fm': 'no label', 'Bargate Fm': 'no label', 'Puttenham': 'no label', 'Folkestone Fm': 'no label', 'Borehole': 'no label', 'NEW': 'no label', });
lyr_OutcropLocations_2021_03_24_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});