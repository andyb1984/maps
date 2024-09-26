// Get references to the checkboxes and corresponding layers
const allOutcropsCheckbox = document.getElementById('allOutcropsCheckbox');
const witleyTopoCheckbox = document.getElementById('witleyTopoCheckbox');
const webMapLink1Checkbox = document.getElementById('webMapLink1Checkbox');
const webMapLink2Checkbox = document.getElementById('webMapLink2Checkbox');

const allOutcropsLayer = lyr_AllOutcrops_2;
const witleyTopoLayer = lyr_Witley_topo_3;
const webMapLink1Layer = wms_layers[0][0]; // Assuming webMapLink1 is the first layer in wms_layers
const webMapLink2Layer = wms_layers[1][0]; // Assuming webMapLink2 is the second layer in wms_layers

// Ensure layer group visibility
group_group1.setVisible(true);

// Add event listeners to the checkboxes to update layer visibility
allOutcropsCheckbox.addEventListener('change', () => {
  allOutcropsLayer.setVisible(allOutcropsCheckbox.checked);
  // Optionally, update group visibility if needed
  group_group1.setVisible(allOutcropsCheckbox.checked || witleyTopoCheckbox.checked || webMapLink1Checkbox.checked || webMapLink2Checkbox.checked);
});

// Similar event listeners for other checkboxes

const allOutcropsLayer = lyr_AllOutcrops_2;
const witleyTopoLayer = lyr_Witley_topo_3;
console.log('allOutcropsLayer:', allOutcropsLayer);
console.log('witleyTopoLayer:', witleyTopoLayer);