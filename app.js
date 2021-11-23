
function clr1(){
    var backgroundColor=prompt("Enter color for BACKGROUND")
    var btn=document.getElementById("js")
    btn.style.backgroundColor=backgroundColor


}
function clr2(){
    
    var text=prompt("Enter color for TEXT")
    var btn=document.getElementById("js")
    btn.style.color=text

}



function bigImg(){
    var img1 = document.getElementById("img")
    img1.style.width = " 500px"
}

function smaImg(){
    var carImg = document.getElementById("img")
    carImg.style.width= " 100px"
}

function hidImg(){
    var carImg = document.getElementById("img")
    carImg.style.display+= " none"                      
}




function bulbToggler( id , element  ){
            
            if(id == 1){
                element.src = "./images/bulbon.gif"
            }else{
                element.src = "./images/bulboff.gif"
    
            }
    
    }



 



 function paraClr(){
    var clr1=prompt("Enter 1st Paragraph color")
    var clr2=prompt("Enter 2nd Paragraph color")
    var clr3=prompt("Enter 3rd Paragraph color")
    var clr4=prompt("Enter 4th Paragraph color")

    var para= document.getElementsByTagName("p")
     para[0].style.color=clr1
     para[1].style.color=clr2
     para[2].style.color=clr3
     para[3].style.color=clr4
 }   