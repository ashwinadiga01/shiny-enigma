function placeImage(x) {
    var div = document.getElementById("div_picture");
    var div2 = document.getElementById("div_picture2");

    for (counter = 1; counter <= x; counter++ ) 
    {
        console.log(counter);
        var image = document.createElement("img");
        image.src = `images/post${counter}.png`;
        image.width = "300";
        image.height = "350";
        image.id=counter;
        image.position = "absolute";
        image.style.zIndex = counter;
        div2.appendChild(image);
    }
    
    let images = document.querySelectorAll("img");
   
    images.forEach(image => {
        console.log(image.id);
        image.addEventListener("mouseover",() => {
            let src = image.src;
            image.src = `images-pm/post${image.id}-pm.gif`;
            
        })
        image.addEventListener("mouseout",() => {
            let src = image.src;
            image.src = `images/post${image.id}.png`;
            
        })
    })
    // for (counter = 1; counter <= x; counter++ ) {
    //     var image = document.createElement("img");
    //     image.src = `../images-pm/post${counter}-pm.gif`;
    //     image.width = "300";
    //     image.height = "350";
    //     image.position = "absolute";
    //     image.style.zIndex = counter;
    //     image.className+="static";
    //     div.appendChild(image);
    // }
};



window.onload = function () {
    placeImage(20);
}


