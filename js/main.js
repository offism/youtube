let right = document.querySelector('.right')
let menues = document.querySelectorAll('#menues')
right.addEventListener('click', (event)=>{
  let dropMenu = event.target.parentNode.next()
  for (let menu of menues) {
   if(menu.style.display === ""){
     if(menu == dropMenu){
      menu.style.display = "block"   
    }
    else if(menu.style.diplay == "block"){
      document.addEventListener('click', ()=>{
       menu.style.display = "" 
     })
    }
    else if(menu != dropMenu){
      menu.style.display === ""
    }

  }
  else{
   menu.style.display = ""      
 }
}
})

let mySidenav = document.querySelector('#mySidenav')
let width = mySidenav.offsetWidth
let sideMenuBtn  = document.querySelector('#pullMenu')
width = 83

// align-items: baseline;
//     display: flex;


sideMenuBtn.addEventListener('click' , () => {
 if(width == 83){
  mySidenav.style.width = "200px";
  mySidenav.style.zIndex = "20";
  width = 200
} else if(width == 200){
  mySidenav.style.width = "83px";
  width = 83
}
})





//////////////////////
// LOCAL STORAGE & autoplay

// let data = [{video:`<iframe src="https://www.youtube.com/embed/dKJh3_OnPZ8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`, picture:'https://i.pinimg.com/474x/f5/ba/ed/f5baed62f2325f4578435f164e51777a.jpg',bottomPict:'https://i.pinimg.com/originals/39/07/c4/3907c41616c1bdec6a582573b1915b86.jpg', paragraph:'Moscow Republic Industrial'},
// {video:`<iframe width="560" height="315" src="https://www.youtube.com/embed/0slr_G4CmFw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`, picture:'https://i.pinimg.com/474x/53/d4/4e/53d44e32acd04dcfc579412e93684b90.jpg',bottomPict:'https://images.unsplash.com/photo-1516257984-b1b4d707412e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bWVucyUyMGZhc2hpb258ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80', paragraph:'El Clasico Between Cristiano Ronaldo & Lionel Messi'},
// ]



// window.localStorage.setItem('data' , JSON.stringify(data))
let optionalData = window.localStorage.getItem('data')
optionalData = JSON.parse(optionalData)
toRender(optionalData)





function toRender (arr) {
  arr.forEach((e)=> {
   let card =  document.createElement('div')
   card.setAttribute('id' , 'card')
   let iframeBox =  document.createElement('div')
   iframeBox.setAttribute('id' , 'iframeBox')
   let cardImg =  document.createElement('img')
   cardImg.setAttribute('id' , 'cardImg')
   cardImg.setAttribute('src' , e.picture)
   cardImg.style.objectPosition = '0px -10px'
   let iframeBoxi =  document.createElement('div')
   iframeBoxi.setAttribute('id' , 'iframeBoxi')
   iframeBoxi.innerHTML  = e.video
   iframeBox.appendChild(cardImg)
   iframeBox.appendChild(iframeBoxi)

   let cardBottom =  document.createElement('div')
   cardBottom.setAttribute('id' , 'cardBottom')
   let imgDIV =  document.createElement('div')
   imgDIV.setAttribute('id' , 'imgDIV')
   let cardBottomImg =  document.createElement('img')
   cardBottomImg.setAttribute('id' , 'cardBottomImg')
   cardBottomImg.setAttribute('src' , e.bottomPict)
   imgDIV.appendChild(cardBottomImg)
   let textDIV =  document.createElement('div')
   textDIV.setAttribute('id' , 'textDIV')
   let p1Bottom = document.createElement('p')
   p1Bottom.setAttribute('id' , 'p1Bottom')
   p1Bottom.textContent = e.paragraph
   let p2Bottom = document.createElement('p')
   p2Bottom.setAttribute('id' , 'p2Bottom')
   p2Bottom.innerHTML = `ТОП Фильмов и роликов <br> 1,2 млрд просмотров<br>1 года назад`
   textDIV.appendChild(p1Bottom)
   textDIV.appendChild(p2Bottom)
   cardBottom.appendChild(imgDIV)
   cardBottom.appendChild(textDIV)

   card.appendChild(iframeBox)
   card.appendChild(cardBottom)

   let elementSection = document.querySelector('#elementSection')
   elementSection.appendChild(card)

   iframeBox.childNodes[0].addEventListener('click', function () {
    iframeBox.childNodes[0].style.display = 'none'
    iframeBox.childNodes[1].style.position = 'absolute'
    iframeBox.childNodes[1].style.zIndex = '0'

  })
 })
}



// SEARCH PART  

let searchBtn = document.querySelector('#searchBtn')
let input = document.querySelector('#input')
input.addEventListener('keyup', (e) => {
 const  searchString = e.target.value.toLowerCase()
 const filteredString = optionalData.filter((character) => {
   let param = character.paragraph.toLowerCase() 
   return (
    param.includes(searchString)
    )
 })
 console.log(filteredString);
 let elementSection = document.querySelector('#elementSection')
 elementSection.innerHTML = null
 toRender(filteredString); 
})


//SEARCH with SPEECH RECOGNATION
function speechRecognitionFync () {
  let microphoneBtn = document.querySelector('#microphoneBtn')
  microphoneBtn.onclick = () => {
    const speechRecognition = window.webkitSpeechRecognition
    const voice = new speechRecognition()
    voice.lang = "eng-ENG"
    voice.continuous = false

    voice.start()
    input.setAttribute('placeholder','Listening...')

    voice.onresult = (event) => {
      let voiceResut = event.results[0][0].transcript
      setTimeout(() => {
        input.value = voiceResut
      } , 300)
  const  searchString = voiceResut.toLowerCase()
  const filteredString = optionalData.filter((character) => {
   let param = character.paragraph.toLowerCase() 
   return (
    param.includes(searchString)
    )
 })
  console.log(filteredString);
  let elementSection = document.querySelector('#elementSection')
  elementSection.innerHTML = null
  toRender(filteredString); 
  input.setAttribute('placeholder','Введите запрос')
  voice.onspeechend = function () {
    voice.stop()
  }
}
}
}
speechRecognitionFync()




