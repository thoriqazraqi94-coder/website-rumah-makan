// Filter menu berdasarkan kategori
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const category = btn.dataset.category;
        document.querySelectorAll('.menu-item').forEach(item => {
            if (item.dataset.category === category || category === 'all') {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});