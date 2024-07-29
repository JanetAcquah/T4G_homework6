//when the user enters the explore button on the
//homepage. it takes their name.

// function promptName(){//prompting the explore our products button
function promptName(){
let name = prompt("what is your name please");
let pchange=document.getElementById("food");
pchange.innerHTML=`Hi👋 welcome ${name},to taste the goodness of Africa`;
let second =document.getElementById("ppp");
second.innerHTML=`hi${name},Browse Through Our African Goodness`
}

let hey =document.getElementById("fruit");
hey.addEventListener("mouseenter", promptName);

function alertMaizeLink(){//alerting external to African maize
alert(`https://sesitechnologies.com/three-great-reasons-why-you-should-go-into-maize-farming/`);
}
let maize = document.getElementById("maize");
maize.addEventListener("click",alertMaizeLink);

function alertVegiesLink(){//alerting external link to African vegies
alert(`https://www.leafanimpression.com.au/blog/start-growing-vegies`)
}
let vegies = document.getElementById("vegies");
vegies.addEventListener("click",alertVegiesLink);

function alertFruitLinks(){//alerting external link to African fruit
alert(`https://www.healthyeating.org/nutrition-topics/general/food-groups/fruits`)
}
let fruits = document.getElementById("fruits");
fruits.addEventListener("click",alertFruitLinks);

function alertMintLink(){//alerting external link to african mint
 alert(`https://www.homemademastery.com/how-to-dry-mint-for-tea/`) 
}
let mint = document.getElementById("mint");
mint.addEventListener("click",alertMintLink)

function alertNutsLink(){//alerting external link to african nuts
  alert(`https://www.health.com/weight-loss/the-healthiest-nuts-for-your-body`) 
 }
 let nuts = document.getElementById("nuts");
 nuts.addEventListener("click",alertNutsLink)

 function alertNidoLink(){//alerting external link to african nido
  alert(`https://web.facebook.com/Nestle/photos/assorted-nestlé-products/59313654392/?_rdc=1&_rdr`) 
 }
 let nido= document.getElementById("Nido");
nido.addEventListener("click",alertNidoLink);

function alertCerealsLink(){//alerting external link to cereals
alert(`https://www.netmeds.com/health-library/post/whole-grain-cereal-nutrition-types-health-benefits-and-side-effects`)
}
let cereals = document.getElementById("cereals");
cereals.addEventListener("click",alertCerealsLink);

function alertLeavyLink(){//alerting external link to leavy
  alert(`https://www.flickr.com/photos/pubgamer/8277186952`)
  }
  let leavy = document.getElementById("leavy");
  leavy.addEventListener("click",alertLeavyLink);

  function alertCarrotLink(){//alerting external link to carrot
    alert(`https://www.britannica.com/plant/carrot`)
    }
    let carrot = document.getElementById("carrot");
    carrot.addEventListener("click",alertCarrotLink);


//adding click event to the selected image.

// function  functionName(){
//  let name = prompt("which fruit is this");    
// }

// let rawfood = document.getElementById("rawfood");
// rawfood.addEventListener('mouseenter', promptMaize);
  
// // On click load more images
// function loadMore(){
//   let show= document.getElementById("adiv");
//   show.style.display = "block";
// }

// let gallery = document.getElementById("gallery");
// gallery.addEventListener("click", loadMore);

 
//when the user clicks on the click to laod more button,the first set of images appear
//load more images

function mon(){
  let her=document.getElementById("picture");
  her.style.display="none";
  let him=document.getElementById("adiv");
  him.style.display="flex";
  let hide=document.getElementById("less");
  hide.style.display="block";
}


let men=document.getElementById("picture");
men.addEventListener("click",mon);

function on(){
  let he=document.getElementById("less");
  he.style.display="none";
  let hi =document.getElementById("picture");
  hi.style.display="block";
  let hid= document.getElementById("adiv");
  hid.style.display="none";
}

let me=document.getElementById("less");
me.addEventListener("click",on);
