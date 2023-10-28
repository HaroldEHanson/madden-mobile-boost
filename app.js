const passingOffenseInputs = document.querySelectorAll('.unboosted-team-offense input[type="number"].passing-offense');
const rushingOffenseInputs = document.querySelectorAll('.unboosted-team-offense input[type="number"].rushing-offense');
const rushingDefenseInputs = document.querySelectorAll('.unboosted-team-defense input[type="number"].rushing-defense');
const passingDefenseInputs = document.querySelectorAll('.unboosted-team-defense input[type="number"].passing-defense');
const specialTeamsInputs = document.querySelectorAll('.unboosted-team-special input[type="number"].special-teams');

function calculateBoostedOverall() {
  var passingOffenseBoostFactor = document.querySelectorAll('.boost-selectors #passing-offense-boost')[0].valueAsNumber/100;
  var rushingOffenseBoostFactor = document.querySelectorAll('.boost-selectors #rushing-offense-boost')[0].valueAsNumber/100;
  var passingDefenseBoostFactor = document.querySelectorAll('.boost-selectors #passing-defense-boost')[0].valueAsNumber/100;
  var rushingDefenseBoostFactor = document.querySelectorAll('.boost-selectors #rushing-defense-boost')[0].valueAsNumber/100;
  var specialTeamsBoostFactor = document.querySelectorAll('.boost-selectors #special-teams-boost')[0].valueAsNumber/100;

  // Passing Offense
  var qbOverall = document.querySelectorAll('.unboosted-team-offense input[type="number"]#qb')[0].valueAsNumber;
  var qbBoostedOverall = (qbOverall * passingOffenseBoostFactor) + qbOverall;
  var wr1Overall = document.querySelectorAll('.unboosted-team-offense input[type="number"]#wr1')[0].valueAsNumber;
  var wr1BoostedOverall = (wr1Overall * passingOffenseBoostFactor) + wr1Overall;
  var wr2Overall = document.querySelectorAll('.unboosted-team-offense input[type="number"]#wr2')[0].valueAsNumber;
  var wr2BoostedOverall = (wr2Overall * passingOffenseBoostFactor) + wr2Overall;
  var teOverall = document.querySelectorAll('.unboosted-team-offense input[type="number"]#te')[0].valueAsNumber;
  var teBoostedOverall = (teOverall * passingOffenseBoostFactor) + teOverall;
  var flexOverall = document.querySelectorAll('.unboosted-team-offense input[type="number"]#flex')[0].valueAsNumber;
  var flexBoostedOverall = (flexOverall * passingOffenseBoostFactor) + flexOverall;

  // TODO: Other positions

  var passingOffenseBoostedOverall = qbBoostedOverall+wr1BoostedOverall+wr2BoostedOverall+teBoostedOverall+flexBoostedOverall;

  var boostedOverall = passingOffenseBoostedOverall;

  return boostedOverall;
}

function calculatePassingOffenseTotal() {
  let total = 0;
  passingOffenseInputs.forEach(input => {
      const value = parseInt(input.value, 10);
      if (!isNaN(value)) {
          total += value;
      }
  });
  console.log(total);
} 

function calculateRushingOffenseTotal() {
  let total = 0;
  rushingOffenseInputs.forEach(input => {
      const value = parseInt(input.value, 10);
      if (!isNaN(value)) {
          total += value;
      }
  });
  console.log(total);
} 
function calculateRushingDefenseTotal() {
  let total = 0;
  rushingDefenseInputs.forEach(input => {
      const value = parseInt(input.value, 10);
      if (!isNaN(value)) {
          total += value;
      }
  });
  console.log(total);
} 

function calculatePassingDefenseTotal() {
  let total = 0;
  passingDefenseInputs.forEach(input => {
      const value = parseInt(input.value, 10);
      if (!isNaN(value)) {
          total += value;
      }
  });
  console.log(total);
} 

function calculateSpecialTeamsTotal() {
  let total = 0;
  specialTeamsInputs.forEach(input => {
      const value = parseInt(input.value, 10);
      if (!isNaN(value)) {
          total += value;
      }
  });
  console.log(total);
} 

function getAllTotals() {
  calculatePassingOffenseTotal();
  calculatePassingDefenseTotal();
  calculateRushingOffenseTotal();
  calculateRushingDefenseTotal();
  calculateSpecialTeamsTotal();
}

// Get the main slider element
const mainSlider = document.getElementById('total-boost');
  
// Get all individual slider elements
const individualSliders = Array.from(document.querySelectorAll('.boost-selectors .slider:not(#total-boost)'));

// Update display function
function updateDisplay(slider, displayElementId) {
    const displayElement = document.getElementById(displayElementId);
    displayElement.textContent = slider.value+"%";
}

// Initialize display values on page load
function initializeDisplays() {
  // Update main slider display
  updateDisplay(mainSlider, 'total-boost-display');

  // Update individual slider displays
  individualSliders.forEach(slider => {
      const displayId = slider.id.replace('-boost', '-display');
      updateDisplay(slider, displayId);
  });
}

// Event listener for main slider
mainSlider.addEventListener('input', function() {
    // Set the value of each individual slider to the main slider's value
    individualSliders.forEach(slider => {
        slider.value = mainSlider.value;
        const displayId = slider.id.replace('-boost', '-display');  // Construct the display id based on the slider id
        updateDisplay(slider, displayId);  // Update the display for each slider
    });

    // Update the display for the main slider
    updateDisplay(mainSlider, 'total-boost-display');
});

// Event listener for individual sliders
individualSliders.forEach(slider => {
    slider.addEventListener('input', function() {
        // Update the display for the adjusted individual slider
        const displayId = slider.id.replace('-boost', '-display');  // Construct the display id based on the slider id
        updateDisplay(slider, displayId);
    });
});

document.addEventListener("DOMContentLoaded", initializeDisplays());
