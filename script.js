const songButtons = document.querySelectorAll("button");
const audio = document.querySelector("audio");

songButtons.forEach(button => {
    button.addEventListener("click", () => {
        if(audio.src && audio.src.indexOf(button.attributes.songId.value) > -1){
            return false;
        }
        return audio.src = button.attributes.songId.value;
    });
});