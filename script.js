document.addEventListener('DOMContentLoaded', function() {
    // Menu Toggle
    const menuToggle = document.getElementById('menuToggle');
    const menuOverlay = document.getElementById('menuOverlay');
    const closeMenu = document.getElementById('closeMenu');

    menuToggle.addEventListener('click', function() {
        menuOverlay.style.display = 'flex';
    });

    closeMenu.addEventListener('click', function() {
        menuOverlay.style.display = 'none';
    });

    // Tag Filtering
    const tags = document.querySelectorAll('.tag[data-filter]');
    const containers = document.querySelectorAll('[data-tags]');

    tags.forEach(tag => {
        tag.addEventListener('click', function() {
            const filter = this.dataset.filter;

            containers.forEach(container => {
                const containerTags = container.dataset.tags.split(' '); // Split the tags string into an array
                container.style.display = containerTags.includes(filter) ? 'block' : 'none';
            });
        });
    });
});
