async function renderCards() {
    const response = await fetch('./menu/menu.json');
    const menu = await response.json();  

    document.getElementById("menu").innerHTML = `
   
    ${menu.map(function(item) {
        return ` 
        <div class="card h-200" style="width: 18rem">
        <a href="${item.url}">
            <img class="card-img-top" src="${item.image_url}" alt="">
        
            <div class="card-body">
                <p>${item.name}</p>
                <li>${item.description}</li>
            </div>
        </div>
        </a>
        ` 
}).join('')}
`
}
renderCards();
