const loadCountry = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

const displayCountries = (countries) => {
    const countriesContainer = document.getElementById('countries-container')

    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        console.log(country);
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
       
        <h3>Country Name: ${country.name.common}</h3>
        <h5>Capital Name: ${country.capital}</h5>
        <button onclick="loadCountryDetails('${country.cca2}')">Details</button>
        `;
        countriesContainer.appendChild(countryDiv)
    })
}
const loadCountryDetails = (code) => {

    fetch(`https://restcountries.com/v3.1/alpha/${code}`)
        .then(res => res.json())
        .then(data => displayCountryDetails(data[0]))
}
const displayCountryDetails = country => {
    const displayCountryDetails = document.getElementById('display-country-details');
    displayCountryDetails.innerHTML = `
   <h2>${country.name.common}</h2>
   <img src="${country.flags.png}" alt="">
   `


}

loadCountry()