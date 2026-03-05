document.addEventListener('DOMContentLoaded', () => {
    let filterSelect = document.querySelector('select#filter');
    let cards = document.querySelectorAll('div.card');
    filterSelect.addEventListener('change', (e) => {
        cards.forEach(card => {
            let category = card.dataset.category;
            card.classList.remove('hidden');
            if (e.target.value === "") {
                card.classList.remove('hidden');
            } else if(e.target.value !== category) {
                card.classList.add('hidden');
            }
        });
    });
});