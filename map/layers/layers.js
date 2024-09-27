var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_Guidford_BNG_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Guidford_BNG",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Guidford_BNG_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-93364.812478, 6650500.883418, -46234.726641, 6682589.503851]
                            })
                        });
var lyr_Haslemere_BNG_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Haslemere_BNG",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Haslemere_BNG_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-94316.745168, 6619416.074588, -47303.251220, 6651584.621582]
                            })
                        });
var format_Witley_topo_3 = new ol.format.GeoJSON();
var features_Witley_topo_3 = format_Witley_topo_3.readFeatures(json_Witley_topo_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Witley_topo_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Witley_topo_3.addFeatures(features_Witley_topo_3);
var lyr_Witley_topo_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Witley_topo_3, 
                style: style_Witley_topo_3,
                popuplayertitle: "Witley_topo",
                interactive: true,
    title: 'Witley_topo<br />\
    <img src="styles/legend/Witley_topo_3_0.png" />  50.0000 - 70.0000 <br />\
    <img src="styles/legend/Witley_topo_3_1.png" />  70.0000 - 90.0000 <br />\
    <img src="styles/legend/Witley_topo_3_2.png" />  90.0000 - 110.0000 <br />\
    <img src="styles/legend/Witley_topo_3_3.png" />  110.0000 - 130.0000 <br />\
    <img src="styles/legend/Witley_topo_3_4.png" />  130.0000 - 150.0000 <br />'
        });
var format_OutcropLocations_2021_03_24_4 = new ol.format.GeoJSON();
var features_OutcropLocations_2021_03_24_4 = format_OutcropLocations_2021_03_24_4.readFeatures(json_OutcropLocations_2021_03_24_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OutcropLocations_2021_03_24_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OutcropLocations_2021_03_24_4.addFeatures(features_OutcropLocations_2021_03_24_4);
var lyr_OutcropLocations_2021_03_24_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OutcropLocations_2021_03_24_4, 
                style: style_OutcropLocations_2021_03_24_4,
                popuplayertitle: "Outcrop Locations_2021_03_24",
                interactive: true,
    title: 'Outcrop Locations_2021_03_24<br />\
    <img src="styles/legend/OutcropLocations_2021_03_24_4_0.png" /> Folkestone-Gault<br />\
    <img src="styles/legend/OutcropLocations_2021_03_24_4_1.png" /> Folkestone<br />\
    <img src="styles/legend/OutcropLocations_2021_03_24_4_2.png" /> Sandgate-Folkestone<br />\
    <img src="styles/legend/OutcropLocations_2021_03_24_4_3.png" /> Sandgate<br />\
    <img src="styles/legend/OutcropLocations_2021_03_24_4_4.png" /> Hythe-Sandgate<br />\
    <img src="styles/legend/OutcropLocations_2021_03_24_4_5.png" /> Hythe<br />\
    <img src="styles/legend/OutcropLocations_2021_03_24_4_6.png" /> Atherfield-Hythe<br />\
    <img src="styles/legend/OutcropLocations_2021_03_24_4_7.png" /> <br />'
        });
var format_Hampshire_Footpathshccrow_5 = new ol.format.GeoJSON();
var features_Hampshire_Footpathshccrow_5 = format_Hampshire_Footpathshccrow_5.readFeatures(json_Hampshire_Footpathshccrow_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hampshire_Footpathshccrow_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hampshire_Footpathshccrow_5.addFeatures(features_Hampshire_Footpathshccrow_5);
var lyr_Hampshire_Footpathshccrow_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hampshire_Footpathshccrow_5, 
                style: style_Hampshire_Footpathshccrow_5,
                popuplayertitle: "Hampshire_Footpaths hccrow",
                interactive: true,
                title: '<img src="styles/legend/Hampshire_Footpathshccrow_5.png" /> Hampshire_Footpaths hccrow'
            });
var format_Surrey_FootpathsRoW_2020_6 = new ol.format.GeoJSON();
var features_Surrey_FootpathsRoW_2020_6 = format_Surrey_FootpathsRoW_2020_6.readFeatures(json_Surrey_FootpathsRoW_2020_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Surrey_FootpathsRoW_2020_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Surrey_FootpathsRoW_2020_6.addFeatures(features_Surrey_FootpathsRoW_2020_6);
var lyr_Surrey_FootpathsRoW_2020_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Surrey_FootpathsRoW_2020_6, 
                style: style_Surrey_FootpathsRoW_2020_6,
                popuplayertitle: "Surrey_Footpaths RoW_2020",
                interactive: true,
                title: '<img src="styles/legend/Surrey_FootpathsRoW_2020_6.png" /> Surrey_Footpaths RoW_2020'
            });
var group_Outcrops = new ol.layer.Group({
                                layers: [lyr_OutcropLocations_2021_03_24_4,],
                                fold: "open",
                                title: "Outcrops"});
var group_UK = new ol.layer.Group({
                                layers: [lyr_Witley_topo_3,],
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
                                layers: [lyr_Guidford_BNG_1,lyr_Haslemere_BNG_2,],
                                fold: "open",
                                title: "BGS Maps"});
var group_OnlineMaps = new ol.layer.Group({
                                layers: [lyr_OpenStreetMap_0,],
                                fold: "open",
                                title: "Online Maps"});

lyr_OpenStreetMap_0.setVisible(true);lyr_Guidford_BNG_1.setVisible(true);lyr_Haslemere_BNG_2.setVisible(true);lyr_Witley_topo_3.setVisible(true);lyr_OutcropLocations_2021_03_24_4.setVisible(true);lyr_Hampshire_Footpathshccrow_5.setVisible(true);lyr_Surrey_FootpathsRoW_2020_6.setVisible(true);
var layersList = [group_OnlineMaps,group_BGSMaps,group_UK,group_Outcrops,lyr_Hampshire_Footpathshccrow_5,lyr_Surrey_FootpathsRoW_2020_6];
lyr_Witley_topo_3.set('fieldAliases', {'ID': 'ID', 'FEAT_TYPE': 'FEAT_TYPE', 'SUB_TYPE': 'SUB_TYPE', 'PROP_VALUE': 'PROP_VALUE', });
lyr_OutcropLocations_2021_03_24_4.set('fieldAliases', {'Location': 'Location', 'SOURCE': 'SOURCE', 'Age (Approx)': 'Age (Approx)', 'Fm': 'Fm', 'Zone': 'Zone', 'Subzone': 'Subzone', 'Note': 'Note', 'X': 'X', 'Y': 'Y', 'field_10': 'field_10', 'field_11': 'field_11', 'field_12': 'field_12', 'field_13': 'field_13', 'field_14': 'field_14', 'Hythe Fm': 'Hythe Fm', 'Bargate Fm': 'Bargate Fm', 'Puttenham': 'Puttenham', 'Folkestone Fm': 'Folkestone Fm', 'Borehole': 'Borehole', 'NEW': 'NEW', });
lyr_Hampshire_Footpathshccrow_5.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Surrey_FootpathsRoW_2020_6.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'PROWNo': 'PROWNo', 'LocArea': 'LocArea', 'PROW_Loc': 'PROW_Loc', 'Stat_Text': 'Stat_Text', 'distAuth': 'distAuth', 'PROWStat': 'PROWStat', 'date_pblsh': 'date_pblsh', });
lyr_Witley_topo_3.set('fieldImages', {'ID': 'TextEdit', 'FEAT_TYPE': 'TextEdit', 'SUB_TYPE': 'TextEdit', 'PROP_VALUE': 'TextEdit', });
lyr_OutcropLocations_2021_03_24_4.set('fieldImages', {'Location': 'TextEdit', 'SOURCE': 'TextEdit', 'Age (Approx)': 'Range', 'Fm': 'TextEdit', 'Zone': 'TextEdit', 'Subzone': 'TextEdit', 'Note': 'TextEdit', 'X': 'Range', 'Y': 'Range', 'field_10': 'TextEdit', 'field_11': 'Range', 'field_12': 'Range', 'field_13': 'Range', 'field_14': 'Range', 'Hythe Fm': 'TextEdit', 'Bargate Fm': 'TextEdit', 'Puttenham': 'TextEdit', 'Folkestone Fm': 'TextEdit', 'Borehole': 'TextEdit', 'NEW': 'TextEdit', });
lyr_Hampshire_Footpathshccrow_5.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Surrey_FootpathsRoW_2020_6.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'PROWNo': 'TextEdit', 'LocArea': 'TextEdit', 'PROW_Loc': 'TextEdit', 'Stat_Text': 'TextEdit', 'distAuth': 'TextEdit', 'PROWStat': 'TextEdit', 'date_pblsh': 'TextEdit', });
lyr_Witley_topo_3.set('fieldLabels', {'ID': 'no label', 'FEAT_TYPE': 'no label', 'SUB_TYPE': 'no label', 'PROP_VALUE': 'no label', });
lyr_OutcropLocations_2021_03_24_4.set('fieldLabels', {'Location': 'no label', 'SOURCE': 'no label', 'Age (Approx)': 'no label', 'Fm': 'no label', 'Zone': 'no label', 'Subzone': 'no label', 'Note': 'no label', 'X': 'no label', 'Y': 'no label', 'field_10': 'no label', 'field_11': 'no label', 'field_12': 'no label', 'field_13': 'no label', 'field_14': 'no label', 'Hythe Fm': 'no label', 'Bargate Fm': 'no label', 'Puttenham': 'no label', 'Folkestone Fm': 'no label', 'Borehole': 'no label', 'NEW': 'no label', });
lyr_Hampshire_Footpathshccrow_5.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Surrey_FootpathsRoW_2020_6.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'PROWNo': 'no label', 'LocArea': 'no label', 'PROW_Loc': 'no label', 'Stat_Text': 'no label', 'distAuth': 'no label', 'PROWStat': 'no label', 'date_pblsh': 'no label', });
lyr_Surrey_FootpathsRoW_2020_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});