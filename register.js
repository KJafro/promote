const enquireSubmit = document.getElementById('enquireSubmit')
const fullNameLabel = document.getElementById('fullNameLabel')
const companyNameLabel = document.getElementById('companyNameLabel')
const emailLabel = document.getElementById('emailLabel')
const locationLabel = document.getElementById('locationLabel')
const sectorLabel = document.getElementById('sectorLabel')
const leftRegister = document.getElementById('leftRegister')
const registerError = document.getElementById('registerError')
const registerError2 = document.getElementById('registerError2')
const success = document.getElementById('success')

const submitForm = (e) => {
    e.preventDefault()
    const enquireName = document.getElementById('enquireName').value
    const enquireCompanyName = document.getElementById('enquireCompanyName').value
    const enquireEmail = document.getElementById('enquireEmail').value
    const enquireLocation = document.getElementById('enquireLocation').value
    const enquireSector = document.getElementById('enquireSector').value
    const registerMessage = document.getElementById('registerMessage')
    if (enquireName.length === 0) {
        fullNameLabel.style.color = 'red'
        leftRegister.style.display = 'none'
        registerError.style.display = 'block'
    } else if (enquireCompanyName.length === 0) {
        companyNameLabel.style.color = 'red'
        leftRegister.style.display = 'none'
        registerError.style.display = 'block'
    } else if (enquireEmail.length === 0 || !enquireEmail.includes('@')) {
        emailLabel.style.color = 'red'
        leftRegister.style.display = 'none'
        registerError.style.display = 'none'
        registerError2.style.display = 'block'
        emailLabel.textContent = 'Email - Must include @'
    } else if (enquireLocation.length === 0) {
        locationLabel.style.color = 'red'
        leftRegister.style.display = 'none'
        registerError.style.display = 'none'
        registerError2.style.display = 'block'
    } else if (enquireSector.length === 0) {
        sectorLabel.style.color = 'red'
        leftRegister.style.display = 'none'
        registerError.style.display = 'none'
        registerError2.style.display = 'block'
    } else {
        leftRegister.style.display = 'none'
        registerError.style.display = 'none'
        registerError2.style.display = 'none'
        success.style.display = 'block'
        fullNameLabel.style.color = 'black'
        companyNameLabel.style.color = 'black'
        emailLabel.style.color = 'black'
        locationLabel.style.color = 'black'
        sectorLabel.style.color = 'black'
        emailLabel.textContent = 'Email'
        registerMessage.style.color = 'green'
        registerMessage.textContent = 'Success'
        enquireSubmit.textContent = 'Success'
    }
}

enquireSubmit.addEventListener('click', submitForm)