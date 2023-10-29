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

  // Rushing Offense
  var rbOverall = document.querySelectorAll('.unboosted-team-offense input[type="number"]#rb')[0].valueAsNumber;
  var rbBoostedOverall = (rbOverall * rushingOffenseBoostFactor) + rbOverall;
  var fbOverall = document.querySelectorAll('.unboosted-team-offense input[type="number"]#fb')[0].valueAsNumber;
  var fbBoostedOverall = (fbOverall * rushingOffenseBoostFactor) + fbOverall;
  var ltOverall = document.querySelectorAll('.unboosted-team-offense input[type="number"]#lt')[0].valueAsNumber;
  var ltBoostedOverall = (ltOverall * rushingOffenseBoostFactor) + ltOverall;
  var lgOverall = document.querySelectorAll('.unboosted-team-offense input[type="number"]#lg')[0].valueAsNumber;
  var lgBoostedOverall = (lgOverall * rushingOffenseBoostFactor) + lgOverall;
  var cOverall = document.querySelectorAll('.unboosted-team-offense input[type="number"]#c')[0].valueAsNumber;
  var cBoostedOverall = (cOverall * rushingOffenseBoostFactor) + cOverall;
  var rgOverall = document.querySelectorAll('.unboosted-team-offense input[type="number"]#rg')[0].valueAsNumber;
  var rgBoostedOverall = (rgOverall * rushingOffenseBoostFactor) + rgOverall;
  var rtOverall = document.querySelectorAll('.unboosted-team-offense input[type="number"]#rt')[0].valueAsNumber;
  var rtBoostedOverall = (rtOverall * rushingOffenseBoostFactor) + rtOverall;
  
  // Rushing Defense
  var mlbOverall = document.querySelectorAll('.unboosted-team-defense input[type="number"]#mlb')[0].valueAsNumber;
  var mlbBoostedOverall = (mlbOverall * rushingDefenseBoostFactor) + mlbOverall;
  var lolbOverall = document.querySelectorAll('.unboosted-team-defense input[type="number"]#lolb')[0].valueAsNumber;
  var lolbBoostedOverall = (lolbOverall * rushingDefenseBoostFactor) + lolbOverall;
  var rolbOverall = document.querySelectorAll('.unboosted-team-defense input[type="number"]#rolb')[0].valueAsNumber;
  var rolbBoostedOverall = (rolbOverall * rushingDefenseBoostFactor) + rolbOverall;
  var lb34Overall = document.querySelectorAll('.unboosted-team-defense input[type="number"]#lb34')[0].valueAsNumber;
  var lb34BoostedOverall = (lb34Overall * rushingDefenseBoostFactor) + lb34Overall;
  var ldeOverall = document.querySelectorAll('.unboosted-team-defense input[type="number"]#lde')[0].valueAsNumber;
  var ldeBoostedOverall = (ldeOverall * rushingDefenseBoostFactor) + ldeOverall;
  var rdeOverall = document.querySelectorAll('.unboosted-team-defense input[type="number"]#rde')[0].valueAsNumber;
  var rdeBoostedOverall = (rdeOverall * rushingDefenseBoostFactor) + rdeOverall;
  var dtOverall = document.querySelectorAll('.unboosted-team-defense input[type="number"]#dt')[0].valueAsNumber;
  var dtBoostedOverall = (dtOverall * rushingDefenseBoostFactor) + dtOverall;
  var dt43Overall = document.querySelectorAll('.unboosted-team-defense input[type="number"]#dt43')[0].valueAsNumber;
  var dt43BoostedOverall = (dt43Overall * rushingDefenseBoostFactor) + dt43Overall;

  // Passing Defense
  var cb1Overall = document.querySelectorAll('.unboosted-team-defense input[type="number"]#cb1')[0].valueAsNumber;
  var cb1BoostedOverall = (cb1Overall * passingDefenseBoostFactor) + cb1Overall;
  var cb2Overall = document.querySelectorAll('.unboosted-team-defense input[type="number"]#cb2')[0].valueAsNumber;
  var cb2BoostedOverall = (cb2Overall * passingDefenseBoostFactor) + cb2Overall;
  var fsOverall = document.querySelectorAll('.unboosted-team-defense input[type="number"]#fs')[0].valueAsNumber;
  var fsBoostedOverall = (fsOverall * passingDefenseBoostFactor) + fsOverall;
  var ssOverall = document.querySelectorAll('.unboosted-team-defense input[type="number"]#ss')[0].valueAsNumber;
  var ssBoostedOverall = (ssOverall * passingDefenseBoostFactor) + ssOverall;
  var nbOverall = document.querySelectorAll('.unboosted-team-defense input[type="number"]#nb')[0].valueAsNumber;
  var nbBoostedOverall = (nbOverall * passingDefenseBoostFactor) + nbOverall;
  var dbOverall = document.querySelectorAll('.unboosted-team-defense input[type="number"]#db')[0].valueAsNumber;
  var dbBoostedOverall = (dbOverall * passingDefenseBoostFactor) + dbOverall;

  // Special Teams
  var kOverall = document.querySelectorAll('.unboosted-team-special input[type="number"]#k')[0].valueAsNumber;
  var kBoostedOverall = (kOverall * specialTeamsBoostFactor) + kOverall;
  var krOverall = document.querySelectorAll('.unboosted-team-special input[type="number"]#kr')[0].valueAsNumber;
  var krBoostedOverall = (krOverall * specialTeamsBoostFactor) + krOverall;
  var pOverall = document.querySelectorAll('.unboosted-team-special input[type="number"]#p')[0].valueAsNumber;
  var pBoostedOverall = (pOverall * specialTeamsBoostFactor) + pOverall;
  var prOverall = document.querySelectorAll('.unboosted-team-special input[type="number"]#pr')[0].valueAsNumber;
  var prBoostedOverall = (prOverall * specialTeamsBoostFactor) + prOverall;

  var passingOffenseBoostedOverall = qbBoostedOverall+wr1BoostedOverall+wr2BoostedOverall+teBoostedOverall+flexBoostedOverall;
  var rushingOffenseBoostedOverall = rbBoostedOverall+fbBoostedOverall+ltBoostedOverall+lgBoostedOverall+cBoostedOverall+rgBoostedOverall+rtBoostedOverall;
  var rushingDefenseBoostedOverall = mlbBoostedOverall+lolbBoostedOverall+rolbBoostedOverall+lb34BoostedOverall+ldeBoostedOverall+rdeBoostedOverall+dt43BoostedOverall+dtBoostedOverall;
  var passingDefenseBoostedOverall = cb1BoostedOverall+cb2BoostedOverall+fsBoostedOverall+ssBoostedOverall+nbBoostedOverall+dbBoostedOverall;
  var specialTeamsBoostedOverall = kBoostedOverall+krBoostedOverall+pBoostedOverall+prBoostedOverall;

  var boostedOverall = passingOffenseBoostedOverall+rushingOffenseBoostedOverall+rushingDefenseBoostedOverall+passingDefenseBoostedOverall+specialTeamsBoostedOverall;
  console.log(boostedOverall);

  return boostedOverall;
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