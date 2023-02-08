import vampires_kiss_pic from "../images/vampires_kiss_potion.png"
import necromancer_pic from "../images/necromancer_potion.png"
import zombie_brain_shot_pic from "../images/zombie_brain_shot_potion.png"
import witchs_brew_pic from "../images/witchs_brew_potion.png"


class Menu{
  constructor(){
    this.menuItems = []
  }
  
  addMenuItem=function(newMenuItem){
    this.menuItems.push(newMenuItem)
  }
  removeMenuItem=function(name){
    for (let i =0; i<this.menuItems.length; i++){
      if(this.menuItems[i].name==name)
      this.menuItems.splice(i,1);
      //console.log(this.menuItems);
    }
  }
  drinklist= function(){
    for (var i = 0; i < this.menuItems.length; i++) {
        this.menuItems[i].info();
    }
}

createMenu=function(){
const menu = document.createElement("div")
menu.setAttribute("id","menu")
console.log("menu created")
menu.textContent=""

const menu_header= document.createElement("h1")
menu_header.setAttribute("id","menu_header")
menu_header.textContent="Menu"

menu.appendChild(menu_header)
return menu

}
}


class menuItem { 
constructor(name, description, price, pic){
  this.name = name
  this.description = description
  this.price = price
  this.pic = pic
  
  this.info = function() { 
    console.log(name + ", Components: " + description+ ", Priced at " + price) ;
  }
}

createMenuItem=function(newMenuItem){
  const potion= document.createElement("div")
  potion.setAttribute("id","item")
  const potion_content= document.createElement("div")
  potion_content.setAttribute("id","item_content")

  const left_side=document.createElement("div")
  left_side.setAttribute("id","leftside")
  left_side.style.maxWidth="40%"
  left_side.style.height="70%"

  const right_side=document.createElement("div")
  right_side.setAttribute("id","rightside")

  

  //create menu item elements
  const menuItem_Name = document.createElement('p');
  const menuItem_Components = document.createElement('p');
  const menuItem_Price= document.createElement('p');
  const menuItem_Image = new Image()
  


   //assign the values to the menu items
  menuItem_Name.textContent = newMenuItem.name;
  menuItem_Name.style.fontFamily="haunted_moon"
  menuItem_Name.style.textShadow=" 2px 4px 4px #CF7BE6" ;
  menuItem_Components.textContent = newMenuItem.description;
  menuItem_Price.textContent = "Price: " + newMenuItem.price;
  menuItem_Price.style.fontFamily="haunted_moon"
  //console.log(newMenuItem.name)
  //getting image for the food item
  menuItem_Image.src = newMenuItem.pic;
  menuItem_Image.alt = 'Potion pictures provided by Pinterest: https://www.pinterest.com/pin/7036943158954274/';
  console.log(menuItem_Image.alt)
  /*
  const menuItem_Image = document.createElement("img");
  const text = `${newMenuItem.name.toLowerCase().replace(/ /g,"_").replace(/\'/g,"")}_pic`
  menuItem_Image.src = `../src/images/${newMenuItem.name.toLowerCase().replace(/ /g,"_").replace(/\'/g,"")}_potion.png`;
  
  
  */

  left_side.appendChild(menuItem_Image);
  right_side.appendChild(menuItem_Name);
  right_side.appendChild(menuItem_Components);
  right_side.appendChild(menuItem_Price);
  potion_content.appendChild(left_side);
  potion_content.appendChild(right_side);
  potion.appendChild(potion_content)
  //console.log("item was added")
  console.log(menuItem_Name.textContent + " was added to page")
  return potion;
}
}


function loadMenu(){
  let myMenu = new Menu();
  const main = document.querySelector('#main');
  main.textContent="";
  main.appendChild(myMenu.createMenu());

  let witchs_brew= new menuItem("Witch's Brew","midori melon liquor, orange juice, lemon lime soda", "one toad",witchs_brew_pic)
  let vampires_kiss= new menuItem("Vampire's Kiss", "Rasberries, Cranberry juice, Sparking Wine, Vodka, Chambord", "vampire fang", vampires_kiss_pic)
  let necromancer = new menuItem("Necromancer","Gin, Cointreau, lemon juice, vermouth, abisinthe, creme de violette", "coffin nail",necromancer_pic)
  let zombie_brain = new menuItem("Zombie Brain Shot", "Peach Schnapps, creme de menthe, Baileys, grenadine", "brains", zombie_brain_shot_pic)
  myMenu.addMenuItem(witchs_brew)
  myMenu.addMenuItem(vampires_kiss)
  myMenu.addMenuItem(necromancer)
  myMenu.addMenuItem(zombie_brain)

  const container = document.createElement("div");
  container.setAttribute("id","container")

  for (var i = 0; i < myMenu.menuItems.length; i++) {
    container.appendChild(myMenu.menuItems[i].createMenuItem(myMenu.menuItems[i]));
    }
  main.appendChild(container);
}

//loadMenu();

export default loadMenu;