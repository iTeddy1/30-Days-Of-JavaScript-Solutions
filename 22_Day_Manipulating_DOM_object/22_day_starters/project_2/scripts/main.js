for(let i = 0; i < countries.length; i++){
    let title = document.createElement('p')
    title.style.fontSize = '24px'
    title.className = 'country'
    title.textContent = countries[i]
    document.getElementById("container").appendChild(title)
}
