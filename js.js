const rocketPic = document.querySelector('.rocketPic')
const searchBtn = document.querySelector('.searchBtn')
const searchResult = document.getElementById('searchResult')

const submitForm = () => {
    const searchInput = document.getElementById('searchInput').value
    if (searchInput.length === 0) {
        searchResult.style.color = 'red'    
        searchResult.textContent = 'You need to enter a location!'
    } else {
        rocketPic.classList.add('rocketFly')
        searchResult.style.color = 'white'       
        searchResult.innerHTML = 'Searching for listings in ' + searchInput + '...'
        localStorage.setItem('searchInput', searchInput)
        setTimeout(() => {
            rocketPic.classList.remove('rocketFly')
            rocketPic.classList.add('rocketDown')
            window.location.href = '/promote/result.html';
    }, 2000)
}
}

searchBtn.addEventListener('click', submitForm)