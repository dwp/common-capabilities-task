(function() {
    'use strict';

    // Get DOM elements
    const toggleButton = document.getElementById('toggleFilters');
    const layoutGrid = document.getElementById('layoutGrid');
    const filtersColumn = document.getElementById('filtersColumn');
    const buttonStatus = document.getElementById('buttonStatus');

    // State management
    let filtersVisible = true;

    // Button click handler
    function toggleFilters() {
        filtersVisible = !filtersVisible;

        if (filtersVisible) {
            // Show filters
            layoutGrid.classList.remove('filters-hidden');
            toggleButton.textContent = 'Hide filters';
            toggleButton.setAttribute('aria-expanded', 'true');
            buttonStatus.textContent = 'Filters are currently visible';

            // Restore focus management for filter inputs
            const filterInputs = filtersColumn.querySelectorAll('input, select');
            filterInputs.forEach(input => {
                input.removeAttribute('tabindex');
            });
        } else {
            // Hide filters
            layoutGrid.classList.add('filters-hidden');
            toggleButton.textContent = 'Show filters';
            toggleButton.setAttribute('aria-expanded', 'false');
            buttonStatus.textContent = 'Filters are currently hidden';

            // Remove filter inputs from tab order when hidden
            const filterInputs = filtersColumn.querySelectorAll('input, select');
            filterInputs.forEach(input => {
                input.setAttribute('tabindex', '-1');
            });
        }

        // Announce the change to screen readers
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', 'polite');
        announcement.setAttribute('aria-atomic', 'true');
        announcement.className = 'sr-only';
        announcement.textContent = filtersVisible ? 'Filters shown' : 'Filters hidden';
        document.body.appendChild(announcement);

        // Remove the announcement after it's been read
        setTimeout(() => {
            document.body.removeChild(announcement);
        }, 1000);
    }

    // Event listeners
    toggleButton.addEventListener('click', toggleFilters);

    // Keyboard support
    toggleButton.addEventListener('keydown', function(event) {
        // Handle Enter and Space keys
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            toggleFilters();
        }
    });

    // Handle escape key to show filters if hidden
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && !filtersVisible) {
            toggleFilters();
            toggleButton.focus();
        }
    });

    // Initialize proper ARIA states
    toggleButton.setAttribute('aria-expanded', filtersVisible.toString());
console.log("ggggg")
})();