const searchPhone = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);

    searchField.value = '';

    if(searchText == '')
    {
        const noSearchResult = document.getElementById('no-search-result');
        // noSearchResult.innerHTML = '';
        const div = document.createElement('div');
        div.classList.add('no-search');
        div.innerHTML = `
            <p class = "text-primary fs-1 mt-5 text-center"> Please reload the site and type in the search box </p>
        `;
        noSearchResult.appendChild(div); 
          
    }

   else {
    
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;

    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.data));
   }
}



const displaySearchResult = data => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
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

const loadPhoneDetail =async phoneId => {
    // console.log(phoneId);
    const url= `https://openapi.programming-hero.com/api/phone/${phoneId}`;

    const res = await fetch(url);
    const data = await res.json();
    displayPhoneDetail(data.data);
    // fetch(url)
    // .then(res => res.json())
    // .then(data => displayPhoneDetail(data.data));
}

const displayPhoneDetail = phone => {
    console.log(phone);
    const PhoneDetails = document.getElementById('phone-details');
    PhoneDetails.textContent = '';
    // const releaseDate = phone.releaseDate;
    // console.log(releaseDate);

    if(phone.releaseDate)
    {
        const div = document.createElement('div')
        div.classList.add('card');
        div.innerHTML = `
        <div class="w-50 mx-auto"> 
            <img src="${phone.image}" class="card-img-top mt-3" alt="...">
            
        </div>
        <div class="card-body mx-auto">
            <h5 class="card-title">${phone.name}</h5>
            <small class="text-info">${phone.releaseDate}</small>
            <p class="card-text fw-bold">Brand name: ${phone.brand}</p>
            <p class="text-warning fs-4"> More Details </p>
            <p class="text-success"> Chipset: ${phone.mainFeatures.chipSet} </p>
            <p class="text-success"> Memory: ${phone.mainFeatures.memory} </p>
            <p class="text-success"> Display Size: ${phone.mainFeatures.displaySize} </p>
            <p class="text-success"> Storage: ${phone.mainFeatures.storage} </p>
        
            <p class="text-warning fs-4"> Others Details: </p>
            <p class="text-success"> Blutooth: ${phone.others.Bluetooth} </p>
            <p class="text-success"> GPS: ${phone.others.GPS} </p>
            <p class="text-success"> USB: ${phone.others.USB} </p>
            <p class="text-success"> WLAN: ${phone.others.WLAN} </p>
            <button onclick="loadOthersInfo('${phone.others}')"  id="more-detail" class="btn btn-primary">Main Features</button>
        </div>
    `;

        PhoneDetails.appendChild(div);
    }

    else 
    {
        const div = document.createElement('div')
        div.classList.add('card');
        div.innerHTML = `
        <div class="w-50 mx-auto">
             <img src="${phone.image}" class="card-img-top " alt="..."> 
             
        </div>
        <div class="card-body mx-auto">
            <h5 class="card-title">${phone.name}</h5>
            <small> No Release Date Found </small>
            <p class="card-text fw-bold">Brand name: ${phone.brand}</p>
            <p class="text-warning fs-4"> More Details </p>
            <p class="text-success"> Chipset: ${phone.mainFeatures.chipSet} </p>
            <p class="text-success"> Memory: ${phone.mainFeatures.memory} </p>
            <p class="text-success"> Display Size: ${phone.mainFeatures.displaySize} </p>
            <p class="text-success"> Storage: ${phone.mainFeatures.storage} </p>
            <p class="text-warning fs-4"> Others Details: </p>
            <p class="text-success"> Blutooth: ${phone.others.Bluetooth} </p>
            <p class="text-success"> GPS: ${phone.others.GPS} </p>
            <p class="text-success"> USB: ${phone.others.USB} </p>
            <p class="text-success"> WLAN: ${phone.others.WLAN} </p>
            <button onclick="loadOthersInfo('${phone.others}')" id="more-detail" class="btn btn-primary">Main Features</button>
        </div>
    `;

    PhoneDetails.appendChild(div);
    }

}

//here I have tried to show other info using a button but I failed but I try my best with my little knowledge
const loadOthersInfo = loadOthers => {
    const url = `https://openapi.programming-hero.com/api/phone/${loadOthers}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayOtherInfo(data));
}


const displayOtherInfo = displayOthers => {
    console.log(displayOthers);
    const NewOtherDetails = document.getElementById('phone-details');
    const div = document.createElement('div')
        div.classList.add('card');
        div.innerHTML = `
        <div class="card-body mx-auto">
            <p class="text-warning fs-4"> Others Details: </p>
            <p class="text-success"> Blutooth: ${displayOthers.Bluetooth} </p>
            <p class="text-success"> GPS: ${displayOthers.GPS} </p>
            <p class="text-success"> USB: ${displayOthers.USB} </p>
            <p class="text-success"> WLAN: ${displayOthers.WLAN} </p>
        </div>
        `;

        NewOtherDetails.appendChild(div);
}



    