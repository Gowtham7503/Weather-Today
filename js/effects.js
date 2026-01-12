const video = document.getElementById("bgVideo");
video.playbackRate = 0.8; 
const caption = document.getElementById("caption");
const captionText = "Check weather in your place...";
for(let i = 0; i < captionText.length; i++)
{
    setTimeout(() => {
        caption.innerHTML+=`${captionText.charAt(i)}`;
    },i*50)
}