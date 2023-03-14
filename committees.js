chairs = {
    "unsc": ["Naira Faisal", "Talha Raza", "Krithi Reddy", "United Nations Security Council", ["Discussing the impact of the Taiwan issue on international security","Resolving the Balochistan Crisis"]],
    "disec": ["Ayaan Iqbal", "Haniya Salim", "Bhuvi Joneja", "First General Assembly (DISEC)", ["Regulating the Lethal Autonomous Weapons System (LAWS)","The Proliferation and Possible Regulations of Private Military Contractors"]],
    "unep": ["Nikin Noronha", "Eshal Ajmal", "Nirav Sadhvani", "United Nations Environmental Programme", ["Examining the environmental impacts of hydraulic fracking","Discussing the Sustainable Development of the Arctic Region"]],
    "uncsw": ["Siva Nanda Rajesh", "Maanasa Kirthivasan", "Afrah Shaikhji", "United Nations Commission on the Status of Women", ["Destigmatizing menstruation to achieve period equity", "Tackling underrepresentation of women in politics."]],
    "unccpcj": ["Sahil Ansari", "Rhythm Doshi", "Devansh Gupta", "United Nations Commission on Crime Prevention and Criminal Justice", ["Protection of the rights of crime victims with special emphasis on providing rehabilitation to their families","Addressing the root causes of terrorism in south east asia and discussing means for prevention and combat"]],
    "who": ["Iffah Konain", "Senaara Sara Sonu", "Surbhi Sharma", "World Health Organization", ["The Question of Refining the Healthcare Industries with a special emphasis on global accessability","Addressing the issue of counterfeit medicines and deliberating the necessary reforms required in the pharmaceutical industry"]],
    "unhrc": ["Ahaan Paul", "Naisha Rajani", "Saurav Talukdar", "United Nations Human Rights Council", ["",""]],
    "ipc": ["Amritha Anil", "Shravan Nair", "Fathima Sooraj", "International Press Corps", ["The infiltration of opinionated journalism in fact based media","The increase in societal distrust towards commercial media"]],
    "cc": ["Baden Paiva", "Annika Das", "Solai Vishwanath", "Crisis Committee"],
} 

function HTMLGenerator(committee){
    committeeDetails = chairs[committee]
    if(committee != "cc"){
        generatedHTML = 
        `<div class="details">
            <div class="agenda">
                <h1>Agendas</h1>
                <div>
                    <div><span>1.</span>${committeeDetails[4][0]}</div>
                    <div><span>2.</span>${committeeDetails[4][1]}</div>
                </div>
            </div>
            <div class="chairs">
                <div class="chair">
                    <img src="./images/committees/chairs/${committee}-2.jpeg">
                    <div class="title">
                        <h1>${committeeDetails[1]}</h1>
                        <h3>Chair</h3>
                    </div>
                </div>
                <div class="chair">
                    <img src="./images/committees/chairs/${committee}-1.jpeg">
                    <div class="title">
                        <h1>${committeeDetails[0]}</h1>
                        <h3>Head Chair</h3>
                    </div>
                </div>
                <div class="chair">
                    <img src="./images/committees/chairs/${committee}-3.jpeg">
                    <div class="title">
                        <h1>${committeeDetails[2]}</h1>
                        <h3>Rapporteur</h3>
                    </div>
                </div>
            </div>
        </div>`
    } else{
        generatedHTML = 
        `<div class="details">
            <div class="chairs">
                <div class="chair">
                    <img src="./images/committees/chairs/${committee}-2.jpeg">
                    <div class="title">
                        <h1>${committeeDetails[1]}</h1>
                        <h3>Chair</h3>
                    </div>
                </div>
                <div class="chair">
                    <img src="./images/committees/chairs/${committee}-1.jpeg">
                    <div class="title">
                        <h1>${committeeDetails[0]}</h1>
                        <h3>Head Chair</h3>
                    </div>
                </div>
                <div class="chair">
                    <img src="./images/committees/chairs/${committee}-3.jpeg">
                    <div class="title">
                        <h1>${committeeDetails[2]}</h1>
                        <h3>Rapporteur</h3>
                    </div>
                </div>
            </div>
        </div>`
    }
    
    return generatedHTML
}

$(".more-details").click(function(){
    Swal.fire({
        title: chairs[$(this).attr("id")][3],
        html: HTMLGenerator($(this).attr("id")),
        width: "60vw",
        confirmButtonText: 'Back',
        confirmButtonColor: "#8C1C13",
        scrollbarPadding: false,
    })
})
