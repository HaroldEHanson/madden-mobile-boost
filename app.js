document.addEventListener("DOMContentLoaded", function() {
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

  // Call the initializeDisplays function to set the initial display values
  initializeDisplays();
});
