//set sections array.
let sections=document.querySelectorAll('section');
//set variable for ul list (active menu).
const list=document.getElementById('navbar__list');

//forEach loop to build active navigation menu with smooth scroll into section when clik.
// if we add new sections into HTML file it will be add automatically to this menu.





sections.forEach((elem)=> {
    let link=document.createElement('a');
    link.classList.add('link');
    let textOfLink=elem.getAttribute('data-nav');
    let linkText=document.createTextNode(textOfLink);
    link.appendChild(linkText);
    var item=document.createElement('li');
    item.appendChild(link);
    list.appendChild(item);
    let activeList=document.getElementsByClassName('active');
    //add clicked element to activeList & remove the others.
    let clickFun= ()=>{
        elem.scrollIntoView({behavior:"smooth"});
        if(activeList.length===0){
            link.classList.toggle('active');
        }
        else{activeList[0].className=activeList[0].className.replace('active','');
            link.classList.toggle('active');}
      };
    link.addEventListener('click',clickFun);
    //scroll event activate viewed section .
    //try to scroll page to see it's effect.
    window.addEventListener('scroll',scrollFun=()=>{
        if(elem.getBoundingClientRect().top<window.innerHeight/2 &&elem.getBoundingClientRect().top>=0 && activeList.length===1){
            activeList[0].className=activeList[0].className.replace('active','');
            link.classList.toggle('active');
        }
        else if(elem.getBoundingClientRect().top<window.innerHeight/2 &&elem.getBoundingClientRect().top>=0 && activeList.length===0){
            link.classList.toggle('active');

        }
    });    
     
});







