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
        // console.log(phones)

        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card ">
            <img src="${phones.image}" class="card-img-top w-50 p-3 mx-auto" alt="...">
            <div class="card-body">
                <h5 class="card-title">${phones.phone_name}</h5>
                <p class="card-text fw-bold">Brand name: ${phones.brand}</p>
            </div>
            <button onclick="loadPhoneDetail('${phones.slug}')" class="btn btn-outline-secondary w-25 ms-3 mb-3" type="button" id="button-addon2">Details</button>
        </div>
        `;
        searchResult.appendChild(div);
    });
}

const loadPhoneDetail = phoneId => {
    console.log(phoneId);
    const url= `https://openapi.programming-hero.com/api/phone/${phoneId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayPhoneDetail(data.data));
}

const displayPhoneDetail = phone => {
    console.log(phone);
}
    