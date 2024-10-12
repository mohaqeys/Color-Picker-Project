
const colors = document.querySelectorAll(".color");

const selectedColor = document.getElementById("selectedColorHexa");

const colorBox = document.getElementById("colorBox");

const copyHexBtn = document.getElementById("copyHexBtn");

const customHexInput = document.getElementById("customHexInput");

const plalate = document.querySelector(".plalate");
// console.log(plalate);    

const addCustomColorButton = document.getElementById("addCustomColorButton");

colors.forEach(color =>{

    color.addEventListener("click", (e) => {

        const hexaCode = e.target.getAttribute("data-hex");

  selectedColor.textContent = hexaCode;

  colorBox.style.backgroundColor = hexaCode;

});

});
copyHexBtn.addEventListener("click",(e) =>{
    const hexaCode = selectedColor.textContent;
    navigator.clipboard.writeText(hexaCode).then(()=>{
        alert("Hexa Code Is copied to clippord")}).catch(err =>{
            alert("error copying hexa code");

      });
});

addCustomColorButton.addEventListener("click", () =>{
    const customHexaCode = customHexInput.value.trim();
    // console.log(customHexaCode)
    
    // validate hexa codde
    
    if(/^#[0-9A-f]{6}$/i.test(customHexaCode)){
        
        const newColorDiv = document.createElement('div');

        newColorDiv.classList.add('color');

        newColorDiv.style.backgroundColor = customHexaCode;

        newColorDiv.setAttribute('data-hex', customHexaCode)
       
        plalate.appendChild(newColorDiv);

        newColorDiv.addEventListener('click',() =>{

            selectedColor.textContent = customHexaCode;

            colorBox.style.backgroundColor = customHexaCode; //
        });
    }else{
         alert("Valid Hexa Code (right lije this #f1faf3)");
    }

});