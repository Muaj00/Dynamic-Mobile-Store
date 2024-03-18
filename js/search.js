const searchPhone = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);

    searchField.value = '';

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;

    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.data));
}

const displaySearchResult = data => {
    const searchResult = document.getElementById('search-result');
    data.forEach(phones => {
        console.log(phones)

        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card">
            <img src="${phones.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${phones.phone_name}</h5>
                <p class="card-text">Brand name: ${phones.brand}</p>
            </div>
        </div>
        `;
        searchResult.appendChild(div);
    });
}
    