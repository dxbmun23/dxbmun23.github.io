const width = screen.width;
chairs = {
    "unsc": ["Mohammad Mushaf Khan", "Taher Mustafa Mukadam", "Sarah Mohammad", "United Nations Security Council", ["Resolving tensions between India and Canada with a special focus on the Khalistani movement","Examining the geopolitical situation in the Middle East and its ramifications on global security"]],
    "disec": ["Aarya Shedge", "Aarav Dutt", "Tanya Grace Girish", "First General Assembly (DISEC)", ["Addressing the Use and Impact of Chemical Warfare with Special Emphasis on the use of White Phosphorus","Enhancing Regional Security and Peacekeeping Efforts on the Korean Peninsula"]],
    "sochum": ["Haya Khalid", "Samarth Raval", "Aman Khaleel", "Third General Assembly (SOCHUM)", ["Promoting Inclusivity and Safeguarding the Rights of Ethnic Minorities in Pakistan","Addressing Mechanisms for Ensuring Safety and Repatriation of Individuals Impacted by Terrorism, Armed Conflict, and Gang Violence"]],
    "cc": ["Baden Paiva", "Ayush Vijay", "Hishaam Basheer", "War Cabinet"],
    "fcc": ["Brett John Carvalho", "Tarang Bhatia", "Vedant Das", "Futuristic Crisis Committee", ["Addressing the Impact of Artificial General Intelligence on Global Economic Disparities"]],
    "iaea": ["Ansh Uchil", "Naamna Singh", "Lavanya Sunil", "International Atomic Energy Agency", ["Addressing the Proliferation of Nuclear Weapons while Mitigating the Potential Emergence of Nuclear Conflicts in Developing Nations","Addressing Strategic Preparedness in Anticipation of the Potential Integration of Al in Nuclear Warfare"]],
    "unhrc": ["Shenz Mohammed", "Rachel Grace Gonsalves", "Satvik Linu", "United Nations Human Rights Council", ["Combating Humanitarian Atrocities in Asia","Discussing the Mitigation of Cartel Exploitation in South and Central America"]],
    "unep": ["Vaishnav Krishnakumar", "Atharva Kokane", "Vanishri Shekawat", "United Nations Environmental Programme", ["Promoting Equitable Environmental Policies and Safeguarding Indigenous Rights", "Discussing Geoengineering Strategies as a Measure to Combat Climate Change"]],
    "csw": ["Amritha Anil", "Zoie Gabrielle Symss", "Agrima Sood", "United Nations Commission on the Status of Women", ["Addressing Women's Victimization and Exploitation with an Emphasis on Gender-Based Violence","Ensuring Access to Medical and Humanitarian Aid for Women in Conflict Zones, with a Focus on Regions Affected by Long-standing Conflicts"]],
    "unodc": ["Naira Faizal", "Nitya Deep", "Yaniv Lakhani", "United Nations Office on Drugs and Crime", ["Discussing the Emergence of New Synthetic Drugs and Reforms to combat the same.","Addressing the Involvement of Organized Criminal Groups in Human Trafficking of Migrants and Acts of Violence Against Them"]],
    "icj": ["Aditi Nair", "Manas Kankarej", "Jamila Bhagat", "International Court of Justice", ["Prevention and Punishment of the Crime of Genocide (The Gambia V. Myanmar)","Maritime Delimitation in the Caribbean Sea (Nicaragua V. Colombia)"]],
    "ipmc": ["Retesh Pradeep Kumar", "Diya Mohan", "Aditya Mishra", "Indian Prime Minister Cabinet"],
    "ipc": ["Aishani Kundu", "Alaiza Jesia", "", "International Press Corps", ["Discussing the Moral Implications of Al Fabrication of Public Figures in Media"]],
} 

function HTMLGenerator(committee){
    committeeDetails = chairs[committee]
    if(width>1024){
        if(committee == "cc" || committee == "ipmc"){
            generatedHTML = 
            `<div class="details">
                <div class="chairs">
                    <div class="chair">
                        <img src="./images/committees/chairs/${committee}-2.jpg">
                        <div class="title">
                            <h1>${committeeDetails[1]}</h1>
                            <h3>Co-Chair</h3>
                        </div>
                    </div>
                    <div class="chair">
                        <img src="./images/committees/chairs/${committee}-1.jpg">
                        <div class="title">
                            <h1>${committeeDetails[0]}</h1>
                            <h3>Head Chair</h3>
                        </div>
                    </div>
                    <div class="chair">
                        <img src="./images/committees/chairs/${committee}-3.jpg">
                        <div class="title">
                            <h1>${committeeDetails[2]}</h1>
                            <h3>Co-Chair</h3>
                        </div>
                    </div>
                </div>
            </div>`
        } else if (committee == "ipc"){
            generatedHTML = 
            `<div class="details">
                <div class="agenda">
                    <h1>Agendas</h1>
                    <div>
                        <div><span>1.</span>${committeeDetails[4][0]}</div>
                        ${committeeDetails[4][1] ? `<div><span>2.</span>${committeeDetails[4][1]}</div>` : ""}
                    </div>
                </div>
                <div class="chairs">
                    <div class="chair">
                        <img src="./images/committees/chairs/${committee}-1.jpg">
                        <div class="title">
                            <h1>${committeeDetails[0]}</h1>
                            <h3>Head Chair</h3>
                        </div>
                    </div>
                    <div class="chair">
                        <img src="./images/committees/chairs/${committee}-2.jpg">
                        <div class="title">
                            <h1>${committeeDetails[1]}</h1>
                            <h3>Co-Chair</h3>
                        </div>
                    </div>
                </div>
            </div>`
        } else { 
            generatedHTML = 
            `<div class="details">
                <div class="agenda">
                    <h1>Agendas</h1>
                    <div>
                        <div><span>1.</span>${committeeDetails[4][0]}</div>
                        ${committeeDetails[4][1] ? `<div><span>2.</span>${committeeDetails[4][1]}</div>` : ""}
                    </div>
                </div>
                <div class="chairs">
                    <div class="chair">
                        <img src="./images/committees/chairs/${committee}-2.jpg">
                        <div class="title">
                            <h1>${committeeDetails[1]}</h1>
                            <h3>Co-Chair</h3>
                        </div>
                    </div>
                    <div class="chair">
                        <img src="./images/committees/chairs/${committee}-1.jpg">
                        <div class="title">
                            <h1>${committeeDetails[0]}</h1>
                            <h3>Head Chair</h3>
                        </div>
                    </div>
                    <div class="chair">
                        <img src="./images/committees/chairs/${committee}-3.jpg">
                        <div class="title">
                            <h1>${committeeDetails[2]}</h1>
                            <h3>Co-Chair</h3>
                        </div>
                    </div>
                </div>
            </div>`
        }
    } else{
        if(committee == "cc" || committee == "ipmc"){
            generatedHTML = 
            `<div class="details">
                <div class="chairs">
                    <div class="chair">
                        <img src="./images/committees/chairs/${committee}-1.jpg">
                        <div class="title">
                            <h1>${committeeDetails[0]}</h1>
                            <h3>Head Chair</h3>
                        </div>
                    </div>
                    <div class="chair">
                        <img src="./images/committees/chairs/${committee}-2.jpg">
                        <div class="title">
                            <h1>${committeeDetails[1]}</h1>
                            <h3>Co-Chair</h3>
                        </div>
                    </div>
                    <div class="chair">
                        <img src="./images/committees/chairs/${committee}-3.jpg">
                        <div class="title">
                            <h1>${committeeDetails[2]}</h1>
                            <h3>Co-Chair</h3>
                        </div>
                    </div>
                </div>
            </div>`
        } else if (committee == "ipc"){
            generatedHTML = 
            `<div class="details">
                <div class="agenda">
                    <h1>Agendas</h1>
                    <div>
                        <div><span>1.</span>${committeeDetails[4][0]}</div>
                        ${committeeDetails[4][1] ? `<div><span>2.</span>${committeeDetails[4][1]}</div>` : ""}
                    </div>
                </div>
                <div class="chairs">
                    <div class="chair">
                        <img src="./images/committees/chairs/${committee}-1.jpg">
                        <div class="title">
                            <h1>${committeeDetails[0]}</h1>
                            <h3>Head Chair</h3>
                        </div>
                    </div>
                    <div class="chair">
                        <img src="./images/committees/chairs/${committee}-2.jpg">
                        <div class="title">
                            <h1>${committeeDetails[1]}</h1>
                            <h3>Co-Chair</h3>
                        </div>
                    </div>
                </div>
            </div>`
        } else { 
            generatedHTML = 
            `<div class="details">
                <div class="agenda">
                    <h1>Agendas</h1>
                    <div>
                        <div><span>1.</span>${committeeDetails[4][0]}</div>
                        ${committeeDetails[4][1] ? `<div><span>2.</span>${committeeDetails[4][1]}</div>` : ""}
                    </div>
                </div>
                <div class="chairs">
                    <div class="chair">
                        <img src="./images/committees/chairs/${committee}-1.jpg">
                        <div class="title">
                            <h1>${committeeDetails[0]}</h1>
                            <h3>Head Chair</h3>
                        </div>
                    </div>
                    <div class="chair">
                        <img src="./images/committees/chairs/${committee}-2.jpg">
                        <div class="title">
                            <h1>${committeeDetails[1]}</h1>
                            <h3>Co-Chair</h3>
                        </div>
                    </div>
                    <div class="chair">
                        <img src="./images/committees/chairs/${committee}-3.jpg">
                        <div class="title">
                            <h1>${committeeDetails[2]}</h1>
                            <h3>Co-Chair</h3>
                        </div>
                    </div>
                </div>
            </div>`
        }
    }
    return generatedHTML
}

$(".more-details").click(function(){
    Swal.fire({
        title: chairs[$(this).attr("id")][3],
        html: HTMLGenerator($(this).attr("id")),
        width: `${width > 1024 ? "60vw" : "80vw"}`,
        confirmButtonText: 'Back',
        confirmButtonColor: "#8C1C13",
        scrollbarPadding: false,
    })
})
