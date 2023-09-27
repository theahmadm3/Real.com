//dropdown menu
const menuButton = document.getElementById('menu-button');
const navMenu = document.querySelector('nav ul');

menuButton.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});



// const buildings = window.buildings; // Replace with the actual file path.

// // Function to generate divs based on the buildings data.
// function generateDivs() {
//     const container = document.getElementById('buy'); // Get the container div.

//     // Loop through the buildings data and create divs dynamically.
//     buildings.forEach(building => {
//         const newDiv = document.createElement('div');
//         newDiv.classList.add('buildings', 'ma2', 'bg-moon-gray', 'shadow-1', 'br2', 'w-20', 'pa2');

//         // Create an img element.
//         const img = document.createElement('img');
//         img.src = building.imgSrc;

//         // Create paragraph elements for name, price, and address.
//         const nameParagraph = document.createElement('p');
//         nameParagraph.textContent = 'name';

//         const priceParagraph = document.createElement('p');
//         priceParagraph.classList.add('f3', 'bold');
//         priceParagraph.textContent = building.price;

//         const addressParagraph = document.createElement('p');
//         addressParagraph.textContent = building.address;

//         // Append the elements to the new div.
//         newDiv.appendChild(img);
//         newDiv.appendChild(nameParagraph);
//         newDiv.appendChild(priceParagraph);

//         // ... Add more elements (floors, offices, area) similarly.

//         // Append the new div to the container.
//         container.appendChild(newDiv);
//     });
// }

// // Export the function to be used in your HTML.

