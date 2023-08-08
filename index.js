const urlInput = document.querySelector("input");
const downloadBtn = document.querySelector("button");

downloadBtn.addEventListener("click", async () => {
    if(urlInput.value===""){
        alert("Please paste the url!");
        return
    }
    try{
        const response = await fetch(urlInput.value);
        const file = await response.blob();
        const link = document.createElement("a");
        link.href = URL.createObjectURL(file);
        link.download = new Date().getTime();
        link.click();
    } catch(error){
        alert("Failed to download!")
    }
})