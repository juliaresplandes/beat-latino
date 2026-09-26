const addArtist = document.getElementById("artistRecommend");
const msgSucess = document.getElementById("sucessMessage");
const msgError = document.getElementById("errorMessage");
const btnSend = document.getElementById("btnSend");
const btnReveal = document.getElementById("btnCuriosity");


btnReveal.addEventListener('click', () => {
    const boxCuriosity = document.getElementById("curiosity")
    boxCuriosity.classList.toggle("hidden")
})

btnSend.addEventListener('click', () => {
    if (addArtist.value.trim() === '') {
        msgError.innerText = "Digite o nome de um artista ,por favor !";
        msgError.classList.remove("hidden")
        msgSucess.classList.add("hidden")
    }
    else{
        msgSucess.innerText=`O artista ${addArtist.value.trim()} foi adicionado à lista de recomendações latinas`;
        msgSucess.classList.remove("hidden");
        msgError.classList.add("hidden");
        addArtist.value="";
    }
})


