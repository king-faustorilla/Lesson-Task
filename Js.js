document.addEventListener('DOMContentLoaded', () => {
    const itemNameInput = document.getElementById('itemName');
    const itemQuantityInput = document.getElementById('itemQuantity');
    const addItemBtn = document.getElementById('addItemBtn');
    const inventoryList = document.getElementById('inventoryList');

    let inventory = [];

    // Function to render the inventory list
    function renderInventory() {
        inventoryList.innerHTML = ''; // Clear existing list
        inventory.forEach((item, index) => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <span>${item.name} (Quantity: ${item.quantity})</span>
                <button class="delete-btn" data-index="${index}">Delete</button>
            `;
            inventoryList.appendChild(listItem);
        });
    }

    // Add item to inventory
    addItemBtn.addEventListener('click', () => {
        const name = itemNameInput.value.trim();
        const quantity = parseInt(itemQuantityInput.value);

        if (name && !isNaN(quantity) && quantity > 0) {
            inventory.push({ name, quantity });
            itemNameInput.value = '';
            itemQuantityInput.value = '';
            renderInventory();
        } else {
            alert('Please enter a valid item name and quantity.');
        }
    });

    // Delete item from inventory
    inventoryList.addEventListener('click', (event) => {
        if (event.target.classList.contains('delete-btn')) {
            const index = event.target.dataset.index;
            inventory.splice(index, 1);
            renderInventory();
        }
    });

    // Initial render
    renderInventory();
});
