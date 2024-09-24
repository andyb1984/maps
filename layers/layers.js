var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var lyr_BGSGeology_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://map.bgs.ac.uk/arcgis/services/BGS_Detailed_Geology/MapServer/WMSServer?",
    attributions: ' ',
                              params: {
                                "LAYERS": "BGS.50k.Bedrock",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "BGS Geology",
                            opacity: 0.600000,
                            
                            
                          });
              wms_layers.push([lyr_BGSGeology_1, 0]);
var format_AllOutcrops_2 = new ol.format.GeoJSON();
var features_AllOutcrops_2 = format_AllOutcrops_2.readFeatures(json_AllOutcrops_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AllOutcrops_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AllOutcrops_2.addFeatures(features_AllOutcrops_2);
var lyr_AllOutcrops_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AllOutcrops_2, 
                style: style_AllOutcrops_2,
                interactive: true,
                title: '<img src="styles/legend/AllOutcrops_2.png" /> All Outcrops'
            });
var format_Witley_topo_3 = new ol.format.GeoJSON();
var features_Witley_topo_3 = format_Witley_topo_3.readFeatures(json_Witley_topo_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Witley_topo_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Witley_topo_3.addFeatures(features_Witley_topo_3);
var lyr_Witley_topo_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Witley_topo_3, 
                style: style_Witley_topo_3,
                interactive: true,
    title: 'Witley_topo<br />\
    <img src="styles/legend/Witley_topo_3_0.png" />  50.0000 - 70.0000 <br />\
    <img src="styles/legend/Witley_topo_3_1.png" />  70.0000 - 90.0000 <br />\
    <img src="styles/legend/Witley_topo_3_2.png" />  90.0000 - 110.0000 <br />\
    <img src="styles/legend/Witley_topo_3_3.png" />  110.0000 - 130.0000 <br />\
    <img src="styles/legend/Witley_topo_3_4.png" />  130.0000 - 150.0000 <br />'
        });
var group_group1 = new ol.layer.Group({
                                layers: [lyr_GoogleSatellite_0,lyr_BGSGeology_1,lyr_AllOutcrops_2,lyr_Witley_topo_3,],
                                title: "group1"});

lyr_GoogleSatellite_0.setVisible(true);lyr_BGSGeology_1.setVisible(true);lyr_AllOutcrops_2.setVisible(true);lyr_Witley_topo_3.setVisible(true);
var layersList = [group_group1];
lyr_AllOutcrops_2.set('fieldAliases', {'Location': 'Location', 'SOURCE': 'SOURCE', 'Note': 'Note', 'X': 'X', 'Y': 'Y', 'field_6': 'field_6', 'field_7': 'field_7', 'field_8': 'field_8', 'field_9': 'field_9', 'field_10': 'field_10', 'Hythe Fm': 'Hythe Fm', 'Bargate Fm': 'Bargate Fm', 'Sandgate Fm': 'Sandgate Fm', 'Folkestone Fm': 'Folkestone Fm', 'Borehole': 'Borehole', });
lyr_Witley_topo_3.set('fieldAliases', {'ID': 'ID', 'FEAT_TYPE': 'FEAT_TYPE', 'SUB_TYPE': 'SUB_TYPE', 'PROP_VALUE': 'PROP_VALUE', });
lyr_AllOutcrops_2.set('fieldImages', {'Location': 'TextEdit', 'SOURCE': '', 'Note': 'TextEdit', 'X': 'Range', 'Y': 'Range', 'field_6': 'Range', 'field_7': 'Range', 'field_8': 'Range', 'field_9': '', 'field_10': '', 'Hythe Fm': '', 'Bargate Fm': '', 'Sandgate Fm': '', 'Folkestone Fm': '', 'Borehole': '', });
lyr_Witley_topo_3.set('fieldImages', {'ID': 'TextEdit', 'FEAT_TYPE': 'TextEdit', 'SUB_TYPE': 'TextEdit', 'PROP_VALUE': 'TextEdit', });
lyr_AllOutcrops_2.set('fieldLabels', {});
lyr_Witley_topo_3.set('fieldLabels', {});
lyr_Witley_topo_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});