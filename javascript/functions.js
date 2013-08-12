var logos= new Array() 
logos[1]="images/logos/logo_1.png";
logos[2]="images/logos/logo_2.png";
logos[3]="images/logos/logo_3.png";
logos[4]="images/logos/logo_4.png";
logos[5]="images/logos/logo_5.png";
logos[6]="images/logos/logo_6.png";
logos[7]="images/logos/logo_7.png";
logos[8]="images/logos/logo_8.png";
logos[9]="images/logos/logo_9.png";
logos[10]="images/logos/logo_10.png";



function change() { // Function for changeing src of element
element=document.getElementById("logo")
num=Math.floor((Math.random()*10)+1)
element.src=logos[num];
}


