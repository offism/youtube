let inMOVIE = document.querySelector('#inMOVIE')
let inPICTURE = document.querySelector('#inPICTURE')
let inPARAGRAPH = document.querySelector('#inPARAGRAPH')
let addBtn = document.querySelector('#submitBtn')

let optionalData = JSON.parse(window.localStorage.getItem('data'))
let obj = {}
         saveData()
           
         function saveData () {
	addBtn.onclick = ()=>{
		if(inMOVIE.value != "" && inPICTURE.value != "" && inChannelPICTURE.value != "" && inPARAGRAPH.value !=""){
			obj = {
				video:inMOVIE.value , picture:inPICTURE.value, bottomPict:inChannelPICTURE.value, paragraph: inPARAGRAPH.value


			}
            optionalData.push(obj)
            // inputs.value = null
             let inputs = document.querySelectorAll('.inputs')
            inputs.forEach((event) =>{
                   event.value = null
            })

            window.localStorage.setItem('data' , JSON.stringify(optionalData))

		}
	}
}

// <iframe width="560" height="315" src="https://www.youtube.com/embed/Rov_F40zHqc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

// https://i.pinimg.com/originals/83/21/a7/8321a7f6a89c12eef3f7fe52b080bda0.jpg


// https://images-na.ssl-images-amazon.com/images/I/61HsD77P9UL._SX425_.jpg


// RONALDO vs MESSI l 20 BEAUTIFUL MOMENTS