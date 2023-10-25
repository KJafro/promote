const randomResults = document.getElementById('randomResults')
const searchArea = document.getElementById('searchArea')
const enquireSubmit = document.getElementById('enquireSubmit')
const fullNameLabel = document.getElementById('fullNameLabel')
const companyNameLabel = document.getElementById('companyNameLabel')
const locationLabel = document.getElementById('locationLabel')
const sectorLabel = document.getElementById('sectorLabel')
const manHello = document.getElementById('manHello')
const wrong = document.getElementById('wrong')
const clap = document.getElementById('clap')

const randomNumber = Math.floor(Math.random () * 10 + 2)

const searchResult = localStorage.getItem('searchInput')

randomResults.textContent = randomNumber
searchArea.textContent = searchResult



const submitForm = (e) => {
    e.preventDefault()
    const enquireName = document.getElementById('enquireName').value
    const enquireCompanyName = document.getElementById('enquireCompanyName').value
    const enquireLocation = document.getElementById('enquireLocation').value
    const enquireSector = document.getElementById('enquireSector').value
    const resultMessage = document.getElementById('resultMessage')
    if (enquireName.length == 0) {
        fullNameLabel.style.color = 'red'
        wrong.style.display = 'block'
        manHello.style.display = 'none'
    } else if (enquireCompanyName.length == 0) {
        manHello.style.display = 'none'
        wrong.style.display = 'block'
        companyNameLabel.style.color = 'red'
    } else if (enquireLocation.length == 0) {
        manHello.style.display = 'none'
        wrong.style.display = 'block'
        locationLabel.style.color = 'red'
    } else if (enquireSector.length == 0) {
        manHello.style.display = 'none'
        wrong.style.display = 'block'
        sectorLabel.style.color = 'red'
    } else {
        manHello.style.display = 'none'
        wrong.style.display = 'none'
        clap.style.display = 'block'
        fullNameLabel.style.color = 'white'
        companyNameLabel.style.color = 'white'
        locationLabel.style.color = 'white'
        sectorLabel.style.color = 'white'
        resultMessage.textContent = 'Successfully added to the waiting list!'
        setTimeout(() => {
            enquireSubmit.textContent = 'Redirecting...'
        }, 1500)
        setTimeout(() => {
            window.location.href = '/promote/';
        }, 3500)
    }
}

enquireSubmit.addEventListener('click', submitForm)