const main = document.querySelector('#main');
const maincontainer = document.querySelector('.main-container');
const dashboardcontent = document.querySelector('.dashboardcontent');
const profilescontent = document.querySelector('.profilescontent');
const vehiclescontent = document.querySelector('.vehiclescontent');
const reportscontent = document.querySelector('.reportscontent');
const misccontent = document.querySelector('.misccontent');
const incidentscontent = document.querySelector('.incidentscontent');
const dashboard = document.querySelector('#dashboard');
const incidents = document.querySelector('#incidents');
const profiles = document.querySelector('#profiles');
const vehicles = document.querySelector('#vehicles');
const reports = document.querySelector('#reports');
const misc = document.querySelector('#misc');
const dashboardtabimage = document.querySelector('.dashboardtabimage')
const incidentstabimage = document.querySelector('.incidentstabimage')
const profilestabimage = document.querySelector('.profilestabimage')
const vehiclestabimage = document.querySelector('.vehiclestabimage')
const reportstabimage = document.querySelector('.reportstabimage')
const misctabimage = document.querySelector('.misctabimage')
// dashboard selectors
const warrantsearch = document.querySelector('#warrantsearch');
const ordersearch = document.querySelector('#ordersearch');
const warrants = document.querySelector('.warrants');
const orders = document.querySelector('.orders');

// SHOW POLICE DASHBOARD
const togglePoliceDashboard = () => {
    document.querySelector('.container').classList.toggle('hide');
}
document.addEventListener('keydown', evt => {
    if (evt.key === 'Home') {
        togglePoliceDashboard();
    }
});

const clickLinks = [
    {
        name: 'dashboard',
        tab: dashboard,
        content: dashboardcontent,
        tabimage: dashboardtabimage
    },
    {
        name: 'incidents',
        tab: incidents,
        content: incidentscontent,
        tabimage: incidentstabimage
    },
    {
        name: 'profiles',
        tab: profiles,
        content: profilescontent,
        tabimage: profilestabimage
    },
    {
        name: 'vehicles',
        tab: vehicles,
        content: vehiclescontent,
        tabimage: vehiclestabimage
    },
    {
        name: 'reports',
        tab: reports,
        content: reportscontent,
        tabimage: reportstabimage
    },
    {
        name: 'misc',
        tab: misc,
        content: misccontent,
        tabimage: misctabimage
    }
];
// THIS FUNCTION CONTROLS WHAT CONTENT IS DISPLAYED FROM DASHBOARD TO MISC
clickLinks.map((link) => {
    link.tab.addEventListener('click', () => {
        link.tab.classList.add('side-menu-active');
        link.content.classList.remove('hidden');
        link.content.classList.add('show');
        link.tabimage.src = `images/${link.name}tabactive.svg`
        let restLinks = clickLinks.filter((i) => i.tab !== link.tab)
        restLinks.map((i) => {
            i.content.classList.remove('show')
            i.content.classList.add('hidden')
            i.tab.classList.remove('side-menu-active')
            i.tabimage.src = `images/${i.name}tab.svg`
        });
        if (link.tab == vehicles) {
            maincontainer.classList.add('main-container-reverse');
        } else if (link.tab == incidents) {
            document.querySelector('.newincidentscreen').classList.add('hidden');
            document.querySelector('.addcriminalscreen').classList.add('hidden');
            document.querySelector('.incidents-main').classList.add('incidents-grid');
            document.querySelector('.incidentadd').classList.remove('hidden');
            maincontainer.classList.remove('main-container-reverse');
        } else if (link.tab == reports) {
            document.querySelector('.newreportscreen').classList.add('hidden');
            document.querySelector('.reportadd').classList.remove('hidden');
            document.querySelector('.reports-main').classList.add('reports-grid');
            maincontainer.classList.remove('main-container-reverse');
        }
        else {
            maincontainer.classList.remove('main-container-reverse');
        }
    })
})

// HEADER FUNCTIONALITY
const headercancel = document.querySelector('.headercancel');
const duty = document.querySelector('.duty');
const headercheck = document.querySelector('.headercheck');
const headersetting = document.querySelector('.headersetting');

// LOGGED OFFICER
const loggedOfficer = {
    name: "John Oils",
    rank: "sergeant",
    access: true
}
const pushLoggedOfficer = (user) => {
    document.querySelector('.officername').textContent = user.name;
    document.querySelector('.officerrank').textContent = user.rank;
}
pushLoggedOfficer(loggedOfficer)
// ENABLES LINKING TO THE MISC SCREEN FROM THE HEADER 
headersetting.addEventListener('click', () => {
    clickLinks.map((link) => {
        if (link.name === 'misc') {
            maincontainer.classList.remove('main-container-reverse');
            link.tab.classList.add('side-menu-active');
            link.content.classList.remove('hidden');
            link.content.classList.add('show');
            link.tabimage.src = `images/${link.name}tabactive.svg`
            let restLinks = clickLinks.filter((i) => i.tab !== link.tab)
            restLinks.map((i) => {
                i.content.classList.remove('show')
                i.content.classList.add('hidden')
                i.tab.classList.remove('side-menu-active')
                i.tabimage.src = `images/${i.name}tab.svg`
            });
        }
    })
})
// TOGGLES DUTY TO ON AND OFF IN HEADER
headercancel.addEventListener('click', () => {
    duty.className = "offduty duty"
    duty.textContent = "OFF DUTY"
    headercancel.classList.add("hiddenicon")
    headercheck.classList.remove("hiddenicon")
})
headercheck.addEventListener('click', () => {
    duty.className = "onduty duty"
    duty.textContent = "ON DUTY"
    headercancel.classList.remove("hiddenicon")
    headercheck.classList.add("hiddenicon")
})

// DASHBOARD FUNCTIONALITY
// WARRANTS DATA
let warrantsData = [
    {
        name: "john oils",
        id: 155,
        status: 'pending',
        imageUrl: 'images/character1.png',
        expires: '6',
        information: 'Aggravated assault and slander'
    },
    {
        name: "james bond",
        id: 156,
        status: 'pending',
        imageUrl: 'images/character.svg',
        expires: '3',
        information: 'Dangerous'
    },
    {
        name: "oliver twist",
        id: 157,
        status: 'pending',
        imageUrl: 'images/character2.png',
        expires: '4',
        information: 'some information'
    },
    {
        name: "idris albak",
        id: 158,
        status: 'pending',
        imageUrl: 'https://images.unsplash.com/photo-1493106819501-66d381c466f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
        expires: '6',
        information: 'lovely'
    },
    {
        name: "stoney christon",
        id: 159,
        status: 'pending',
        imageUrl: 'https://media.istockphoto.com/id/471943565/photo/terror-and-horror-in-his-eyes.jpg?s=1024x1024&w=is&k=20&c=1Gud92hsd7VNuuKyEUz7o3bji053Ina2FOSNPHJ14SU=',
        expires: '6',
        information: 'I will look for you..'
    },
    {
        name: "daniel greals",
        id: 160,
        status: 'pending',
        imageUrl: 'images/character.svg',
        expires: '5',
        information: 'I will find you...'
    },
    {
        name: "josh kennedy",
        id: 161,
        status: 'pending',
        imageUrl: '',
        expires: '6',
        information: '...and i will kill you'
    },
    {
        name: "jerry sheamus",
        id: 162,
        status: 'pending',
        imageUrl: 'images/character.svg',
        expires: '7',
        information: 'some information'
    },
    {
        name: "apollo creed",
        id: 163,
        status: 'pending',
        imageUrl: 'images/character1.png',
        expires: '6',
        information: 'some information'
    },
]
// ORDERS DATA
let ordersData = [
    {
        name: "Micheal Scofield",
        id: 154,
        imageUrl: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80',
        information: 'Definitely breaking out...'
    },
    {
        name: "Killua Zoldyck",
        id: 155,
        imageUrl: 'images/character2.png',
        information: 'Commits crime for fun'
    },
    {
        name: "Raymond Reddington",
        id: 155,
        imageUrl: '',
        information: "You can't catch me"
    },
]
// FETCHES & PUSHES WARRANT DATA TO SCREEN
const pushWarrant = (warrantData) => {
    warrants.innerHTML = ''
    warrantData.map((item) => {
        const { name, status, id, imageUrl, expires, information } = item;
        warrants.innerHTML += `
            <div class="warrant">
                <div class='imagecont'>
                    <img src="${imageUrl ? imageUrl : 'images/nophotoblack.png'}" alt="profile-image" class="warrant-image">
                </div>
                <div class="info-section">
                    <p class='suspectname'>${name}</p>
                    <div class="information"> ${information}  <p class="dot"></p> id.${id} </div>
                    <section class="status-div">
                        <button class="blue funcBtns">pending approval</button>
                        ${ (loggedOfficer.access) ?
                        `<div>
                            <button class="statusbtn approve" onClick="approveWarrant(${id})"><img src="images/checkmark.svg" alt="checkmark"></button>
                            <button class="statusbtn reject" onClick="rejectWarrant(${id})"><img src="images/cancel-icon.svg" alt="close"> </button>
                        </div>` : ""
                        }
                    </section>
                </div>
                <div class="days-left">IN ${expires} DAYS</div>
            </div>
        `
    })
}
// FETCHES & PUSHES ORDER DATA TO SCREEN
const pushOrder = (ordersData) => {
    orders.innerHTML = ''
    ordersData.map((item) => {
        const { name, id, imageUrl, information } = item;
        orders.innerHTML += `
        <div class="order">
            <div class='imagecont'><img src="${imageUrl ? imageUrl : 'images/nophotored.png'}" alt="profile-image" class="order-image"></div>
            <div class="info-section">
                <p class='suspectname'>${name}</p>
                <div class="information"> ${information} <p class="dot"></p> id.${id} </div>
                <button class="red funcBtns">WANTED</button>
            </div>
        </div>
    `
    })
}
// ENABLES WARRANTS SEARCH FUNCTIONALITY
let currentwarrantsearchfilter = ""
const applyCurrentSearchFilter = () => {
    let data;
    if (currentwarrantsearchfilter === "") {
        data = warrantsData;
    } else {
        data = warrantsData.filter((item) => item.name.includes(currentwarrantsearchfilter) || item.information.includes(currentwarrantsearchfilter) || item.id.toString().includes(currentwarrantsearchfilter));
    }
    pushWarrant(data);
};
// CHANGES STATUS OF WARRANT TO APPROVED
const approveWarrant = (id) => {
    let newOrder = warrantsData.filter((warrant) => warrant.id === id)
    ordersData.unshift(newOrder[0])
    pushOrder(ordersData)
    warrantsData = warrantsData.filter((warrant) => warrant.id !== id)
    applyCurrentSearchFilter();
}
// CHANGES STATUS OF WARRANT TO REJECTED
const rejectWarrant = (id) => {
    warrantsData = warrantsData.filter((warrant) => warrant.id !== id)
    applyCurrentSearchFilter();
}
pushWarrant(warrantsData);
pushOrder(ordersData);
// SEARCH THROUGH WARRANTS
warrantsearch.addEventListener('input', () => {
    currentwarrantsearchfilter = warrantsearch.value.toLowerCase()
    applyCurrentSearchFilter()
})
// SEARCH THROUGH ORDERS
ordersearch.addEventListener('input', (e) => {
    let searchvalue = ordersearch.value
    if (!searchvalue) pushOrder(ordersData)
    let data = ordersData.filter((order) => order.name.toLowerCase().includes(searchvalue.toLowerCase()) || order.information.toLowerCase().includes(searchvalue.toLowerCase()) || order.id.toString().includes(searchvalue));
    pushOrder(data)
})

// PROFILES
// PROFILES SELECTORS
const profilesContainer = document.querySelector('.profiles-main');
const profilesearch = document.querySelector('#profilesearch');
const allprofiles = document.querySelector(".profiles-filter-all");
const wantedprofiles = document.querySelector(".profiles-filter-wanted");
const cleanprofiles = document.querySelector(".profiles-filter-clean");
const profilefilters = [allprofiles, wantedprofiles, cleanprofiles];
// PROFILES DATA
let profilesData = [
    {
        name: "joHn oils",
        firstname: "joHn",
        surname: "oils",
        id: '6cv15y5',
        status: 'clean',
        imageUrl: 'images/character1.png',
        information: 'bruv really',
        warrants: [
            {
                active: true,
                incidentid: 46571261
            },
            {
                active: false,
                incidentid: 23465711,
                closed: "02/05/2022"
            },
            {
                active: true,
                incidentid: 46571261
            },
            {
                active: false,
                incidentid: 23465711,
                closed: "02/05/2022"
            },
            {
                active: true,
                incidentid: 46571261
            },
            {
                active: false,
                incidentid: 23465711,
                closed: "02/05/2022"
            },
        ],
        criminalhistory: [
            {
                incidentid: 110,
                incidentstatus: "suspect"
            },
            {
                incidentid: 142,
                incidentstatus: "victim"
            },
            {
                incidentid: 124,
                incidentstatus: "eyewitness"
            },
        ],
        vehicles: [
            {
                vehiclename: "BMW X5 2018",
                vehicleid: "jsd56uidf"
            },
            {
                vehiclename: "BMW X5 2018",
                vehicleid: "jsd56uidf"
            },
            {
                vehiclename: "BMW X5 2018",
                vehicleid: "jsd56uidf"
            },
            {
                vehiclename: "BMW X5 2018",
                vehicleid: "jsd56uidf"
            },
        ],
        lastmodified: "2 minutes"
    },
    {
        name: "james bonds",
        firstname: "james",
        surname: "bonds",
        id: 'ko90rre',
        status: 'wanted',
        imageUrl: 'images/character.svg',
        information: 'spiderman spiderman',
        warrants: [
            {
                active: true,
                incidentid: 23571261
            },
            {
                active: false,
                incidentid: 23465261,
                closed: "02/05/2022"
            },
        ],
        criminalhistory: [
            {
                incidentid: 110,
                incidentstatus: "suspect"
            },
            {
                incidentid: 142,
                incidentstatus: "victim"
            },
            {
                incidentid: 124,
                incidentstatus: "eyewitness"
            },
        ],
        vehicles: [
            {
                vehiclename: "BMW X5 2018",
                vehicleid: "jsd56uidf"
            },
            {
                vehiclename: "BMW X5 2018",
                vehicleid: "jsd56uidf"
            },
        ],
        lastmodified: "12 minutes"
    },
    {
        name: "oliver twist",
        firstname: "oliver",
        surname: "twist",
        id: '90o87re',
        status: 'clean',
        imageUrl: 'images/character2.png',
        information: 'bad, baddo, baddest',
        warrants: [],
        criminalhistory: [
            {
                incidentid: 110,
                incidentstatus: "suspect"
            },
            {
                incidentid: 142,
                incidentstatus: "victim"
            },
            {
                incidentid: 124,
                incidentstatus: "eyewitness"
            },
        ],
        vehicles: [],
        lastmodified: "12 minutes"
    },
    {
        name: "idris albak",
        firstname: "idris",
        surname: "albak",
        id: 'op98yu',
        status: 'clean',
        imageUrl: '',
        information: 'some information',
        warrants: [],
        criminalhistory: [
            
        ],
        vehicles: [],
        lastmodified: "12 minutes"
    },
    {
        name: "stoney christon",
        firstname: "stoney",
        surname: "christon",
        id: 'ko90g',
        status: 'clean',
        imageUrl: 'images/character1.png',
        information: 'some information',
        warrants: [
            {
                active: true,
                incidentid: 23465712
            },
            {
                active: false,
                incidentid: 23465761,
                closed: "02/05/2022"
            },
        ],
        criminalhistory: [
            {
                incidentid: 110,
                incidentstatus: "suspect"
            },
            {
                incidentid: 142,
                incidentstatus: "victim"
            },
            {
                incidentid: 124,
                incidentstatus: "eyewitness"
            },
        ],
        vehicles: [],
        lastmodified: "12 minutes"
    },
    {
        name: "daniel greals",
        firstname: "daniel",
        surname: "greals",
        id: 'pqe45ty',
        status: 'wanted',
        imageUrl: '',
        information: 'principalities and powers',
        warrants: [],
        criminalhistory: [
            {
                incidentid: 110,
                incidentstatus: "suspect"
            },
            {
                incidentid: 142,
                incidentstatus: "victim"
            },
            {
                incidentid: 124,
                incidentstatus: "eyewitness"
            },
        ],
        vehicles: [
            {
                vehiclename: "BMW X5 2018",
                vehicleid: "jsd56uidf"
            },
            {
                vehiclename: "BMW X5 2018",
                vehicleid: "jsd56uidf"
            },
        ],
        lastmodified: "12 minutes"
    },
    {
        name: "josh kennedy",
        firstname: "josh",
        surname: "kennedy",
        id: '1il161g',
        status: 'clean',
        imageUrl: 'images/character2.png',
        information: 'some information',
        warrants: [],
        criminalhistory: [
            {
                incidentid: 110,
                incidentstatus: "suspect"
            },
            {
                incidentid: 142,
                incidentstatus: "victim"
            },
            {
                incidentid: 124,
                incidentstatus: "eyewitness"
            },
        ],
        vehicles: [],
        lastmodified: "12 minutes"
    },
    {
        name: "jerry sheamus",
        firstname: "jerry",
        surname: "sheamus",
        id: '4by162',
        status: 'clean',
        imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80',
        information: 'all in your name',
        warrants: [],
        criminalhistory: [
            {
                incidentid: 110,
                incidentstatus: "suspect"
            },
            {
                incidentid: 142,
                incidentstatus: "victim"
            },
            {
                incidentid: 124,
                incidentstatus: "eyewitness"
            },
        ],
        vehicles: [],
        lastmodified: "12 minutes"
    },
    {
        name: "apollo creed",
        firstname: "apollo",
        surname: "creed",
        id: '1y639o',
        status: 'clean',
        imageUrl: 'images/character1.png',
        information: 'some information',
        warrants: [],
        criminalhistory: [
            {
                incidentid: 110,
                incidentstatus: "suspect"
            },
            {
                incidentid: 142,
                incidentstatus: "victim"
            },
            {
                incidentid: 124,
                incidentstatus: "eyewitness"
            },
        ],
        vehicles: [],
        lastmodified: "12 minutes"
    },
]
// FETCH AND RENDERS DATA TO SCREEN
const pushProfiles = (data) => {
    profilesContainer.innerHTML = ''
    data.map((obj) => {
        const { id, status, imageUrl, information, name } = obj;
        profilesContainer.innerHTML += `
        <section class="${status === 'clean' ? 'warrant' : 'order'}" onclick="selectProfile('${id}')">
            <div class='imagecont'><img src="${imageUrl ? imageUrl : status === 'clean' ? 'images/nophotoblack.png' : 'images/nophotored.png'}" alt="profile-image" class=""></div>
            <div class="info-section">
                <p class='suspectname'>${name}</p>
                <div class="information"> ${information} <p class="dot"></p> id.${id} </div>
                <button class="${status === 'clean' ? 'green' : 'red'} funcBtns">${status}</button>
            </div>
        </section>
        `
    })
}

// SELECT PROFILE
let currentProfile;
const selectProfile = (profileId) => {
    document.querySelector('.allprofilescontent').classList.add("hidden");
    document.querySelector('.profilecontent').classList.remove('hidden');
    document.querySelector('.criminalhistory').innerHTML = "";
    document.querySelector('.profilevehicles').innerHTML = "";
    document.querySelector('.profilewarrants').innerHTML = "";
    let profile = profilesData.filter((prof) => prof.id === profileId.toLowerCase());
    const { id, firstname, name, criminalhistory, warrants, vehicles, information, lastmodified, surname, imageUrl, status } = profile[0];
    currentProfile = id
    document.querySelector('.profilename').innerHTML = name;
    document.querySelector('.profileinfo').innerHTML = information;
    document.querySelector('.profilefirstname').innerHTML = firstname;
    document.querySelector('.profilesurname').innerHTML = surname;
    document.querySelector('.profileid').innerHTML = id;
    document.getElementById('profileimageurl').src = imageUrl ? imageUrl : status === 'clean' ? 'images/nophotoblack.png' : 'images/nophotored.png'
    document.querySelector('.totalwarrants').innerHTML = warrants.length + " WARRANTS";
    document.querySelector('.totalprofilevehicles').innerHTML = vehicles.length ? vehicles.length + ' records' : 'No data'
    document.querySelector('.totalprofilewarrants').innerHTML = warrants.length ? warrants.length + ' records' : 'No data'
    document.querySelector('.totalprofilecrimehistory').innerHTML = criminalhistory.length ? criminalhistory.length + ' records' : 'No data'
    let activewarrant = warrants.filter((warr) => warr.active == true);
    document.querySelector('.totalprofilewarrantsactive').innerHTML = activewarrant.length + ' records'
    warrants.length ? 
    document.querySelector('.totalprofilewarrantsactive').classList.remove('hidden') 
    : document.querySelector('.totalprofilewarrantsactive').classList.add('hidden')
    criminalhistory.length > 0 ?
    criminalhistory.map((history) => {
        document.querySelector('.criminalhistory').innerHTML += `
            <div class="fontsmall flexsmall"> Incident #${history.incidentid} <span class="fontsmall ${history.incidentstatus+'style'}">${history.incidentstatus}</span> </div>
        `
    })
    :
        document.querySelector('.criminalhistory').innerHTML = `
        <section class="novehiclerecord">
            <img src="images/nocriminalhistorybg.png" alt="no vehicle"/>
            <p class="grey fontsmall center">This person haven’t
            any criminal records</p>
        </section>
        `
    
    vehicles.length > 0 ?
        vehicles.map((veh) => {
            document.querySelector('.profilevehicles').innerHTML += `
                <div class="fontsmall flexsmall"> ${veh.vehiclename} <span class="fontsmall greybox">${veh.vehicleid}</span> </div>
            `
        })
        :
        document.querySelector('.profilevehicles').innerHTML = `
            <section class="novehiclerecord">
                <img src="images/noprofilevehiclebg.png" alt="no vehicle"/>
                <p class="grey fontsmall center">This person haven’t any vehicles in his own</p>
            </section>
        `
    warrants.length > 0 ? 
        warrants.map(( warr) => {
            document.querySelector('.profilewarrants').innerHTML += warr.active ? `
            <div class="fontsmall flexsmall active">Incident #${warr.incidentid} <span class="fontsmall suspectstyle">Active</span> </div>
            ` : 
            `<div class="fontsmall flexsmall">Incident #${warr.incidentid} <span class="fontsmall greybox">Closed ${warr.closed}</span> </div>`
        }) 
        :
        document.querySelector('.profilewarrants').innerHTML = `
        <section class="novehiclerecord">
            <img src="images/noprofilewarrantsbg.png" alt="no vehicle"/>
            <p class="grey fontsmall center">This person haven’t any active warrants</p>
        </section>
        `
    document.querySelector('.profile-last-modified').innerHTML = `
        <svg  xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path class="smalledit" d="M8.65 3.4625L6.525 1.3625L7.225 0.6625C7.41667 0.470833 7.65217 0.375 7.9315 0.375C8.21083 0.375 8.44617 0.470833 8.6375 0.6625L9.3375 1.3625C9.52917 1.55417 9.62917 1.7855 9.6375 2.0565C9.64583 2.3275 9.55417 2.55867 9.3625 2.75L8.65 3.4625ZM7.925 4.2L2.625 9.5H0.5V7.375L5.8 2.075L7.925 4.2Z" />
        </svg>
        ${lastmodified} ago
    `
}

const addNewWarrant = () => {
    let newwarrant = profilesData.filter((profile) => profile.id === currentProfile);
    const { name, information, imageUrl, id } = newwarrant[0];
    warrantsData.unshift({name, information, id, imageUrl, expires:"7"});
    pushWarrant(warrantsData);
    cancelModal('#profilewarrantmodal')
}

const viewAllProfiles = () => {
    document.querySelector('.allprofilescontent').classList.remove("hidden");
    document.querySelector('.profilecontent').classList.add('hidden');
}

// ENABLES PROFILE SEARCH FUNCTIONALITY
let currentprofilefilter = 'all';

// SEARCH THROUGH PROFILES
profilesearch.addEventListener('input', (e) => {
    let searchvalue = profilesearch.value
    let searchdata;
    if (currentprofilefilter === 'all') {
        searchdata = profilesData;
    } else if (currentprofilefilter === 'wanted') {
        searchdata = profilesData.filter((item) => item.status === 'wanted');
    } else if (currentprofilefilter === 'clean') {
        searchdata = profilesData.filter((item) => item.status === 'clean');
    } else {
        searchdata = profilesData.filter((item) => item.status.includes(currentprofilefilter))
    }
    searchdata = searchdata.filter((profile) => profile.name.toLowerCase().includes(searchvalue.toLowerCase()) || profile.information.toLowerCase().includes(searchvalue.toLowerCase()) || profile.surname.toLowerCase().includes(searchvalue.toLowerCase()) || profile.id.includes(searchvalue.toLowerCase()));
    pushProfiles(searchdata);
})
// FILTERS PROFILE BASED ON STATUS (WANTED, CLEAN AND ALL)
const applyCurrentProfileFilter = () => {
    let data;
    if (currentprofilefilter === 'all') {
        data = profilesData;
    } else if (currentprofilefilter === 'wanted') {
        data = profilesData.filter((item) => item.status === 'wanted');
    } else if (currentprofilefilter === 'clean') {
        data = profilesData.filter((item) => item.status === 'clean');
    }
    pushProfiles(data);
}
profilefilters.map((item) => {
    item.addEventListener('click', () => {
        profilesearch.value = ''
        item.classList.add(`active-${item.textContent}`)
        if (item == allprofiles) {
            currentprofilefilter = 'all'
            applyCurrentProfileFilter()
            const restFilters = profilefilters.filter((filt) => filt !== item)
            restFilters.map((i) => i.classList.remove(`active-${i.textContent}`))
        } else {
            currentprofilefilter = item.textContent
            applyCurrentProfileFilter()
            const restFilters = profilefilters.filter((filt) => filt !== item)
            restFilters.map((i) => i.classList.remove(`active-${i.textContent}`))
        }
    })
})
pushProfiles(profilesData);

// VEHICLES FUNCTIONALITY
const vehiclesContainer = document.querySelector('.vehicles-main');
const vehiclesearch = document.querySelector('#vehiclesearch');
const allvehicles = document.querySelector(".vehicles-filter-all");
const wantedvehicles = document.querySelector(".vehicles-filter-wanted");
const cleanvehicles = document.querySelector(".vehicles-filter-clean");
const vehiclesfilters = [allvehicles, wantedvehicles, cleanvehicles];
// VEHICLES DATA
let vehiclesData = [
    {
        name: "camry",
        id: 'asj89x',
        status: 'clean',
        imageUrl: 'images/vehicleimage.png',
        information: 'Low Budget',
        criminalhistory: [
            {
                incidentid: 110,
                incidentstatus: "suspect"
            },
            {
                incidentid: 142,
                incidentstatus: "victim"
            },
            {
                incidentid: 124,
                incidentstatus: "eyewitness"
            },
        ],
        warrants: [
            {
                active: true,
                incidentid: 23571261
            },
            {
                active: false,
                incidentid: 23465261,
                closed: "02/05/2022"
            },
        ],
        lastmodified: "12 minutes",
        owner: {
            name: "apollo creed",
            id: 155,
            info: "some information",
            imageUrl: "images/character1.png"
        },
        color: "blue",
        purchasedate: "12/04/19",
        mileage: "14,874 m"
    },
    {
        name: "bugatti",
        id: 'kl45ty',
        status: 'wanted',
        imageUrl: 'images/vehicleimage.png',
        information: 'Faster than a Cheetah',
        criminalhistory: [],
        warrants: [
            {
                active: true,
                incidentid: 23571261
            },
            {
                active: false,
                incidentid: 23465261,
                closed: "02/05/2022"
            },
        ],
        lastmodified: "12 minutes",
        owner: {
            name: "john oils",
            id: 155,
            info: "some information",
            imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
        },
        color: "",
        purchasedate: "",
        mileage: "14,874 m"
    },
    {
        name: "tesla",
        id: 'cvf342',
        status: 'clean',
        imageUrl: 'images/vehicleimage.png',
        information: 'I bring the lightning..',
        criminalhistory: [
            {
                incidentid: 110,
                incidentstatus: "suspect"
            },
            {
                incidentid: 142,
                incidentstatus: "victim"
            },
            {
                incidentid: 124,
                incidentstatus: "eyewitness"
            },
        ],
        warrants: [],
        lastmodified: "12 minutes",
        owner: {
            name: "killerman joe",
            id: 155,
            info: "some information",
            imageUrl: "images/character2.png"
        },
        color: "",
        purchasedate: "",
        mileage: "14,874 m"
    },
    {
        name: "sedan",
        id: '09oper',
        status: 'wanted',
        imageUrl: '',
        information: 'some information',
        criminalhistory: [],
        warrants: [
            {
                active: true,
                incidentid: 23571261
            },
            {
                active: false,
                incidentid: 23465261,
                closed: "02/05/2022"
            },
        ],
        lastmodified: "12 minutes",
        owner: {
            name: "asper ovie",
            id: 155,
            info: "some information",
            imageUrl: ""
        },
        color: "",
        purchasedate: "",
        mileage: "14,874 m"
    },
    {
        name: "mercedes",
        id: 3159,
        status: 'clean',
        imageUrl: '',
        information: 'Chilllll....',
        criminalhistory: [
            {
                incidentid: 110,
                incidentstatus: "suspect"
            },
            {
                incidentid: 142,
                incidentstatus: "victim"
            },
            {
                incidentid: 124,
                incidentstatus: "eyewitness"
            },
        ],
        warrants: [],
        lastmodified: "12 minutes",
        owner: {
            name: "ten hagg",
            id: 155,
            info: "some information",
            imageUrl: "images/character2.png"
        },
        color: "",
        purchasedate: "",
        mileage: "14,874 m"
    },
    {
        name: "mitsubishi",
        id: 'op78dy',
        status: 'clean',
        imageUrl: 'images/vehicleimage.png',
        information: 'Just races...',
        criminalhistory: [
            {
                incidentid: 110,
                incidentstatus: "suspect"
            },
            {
                incidentid: 142,
                incidentstatus: "victim"
            },
            {
                incidentid: 124,
                incidentstatus: "eyewitness"
            },
        ],
        warrants: [],
        lastmodified: "12 minutes",
        owner: {
            name: "idris elba",
            id: 155,
            info: "some information",
            imageUrl: ""
        },
        color: "",
        purchasedate: "",
        mileage: "14,874 m"
    },
    {
        name: "chevrolet camaro",
        id: 'opi89sd',
        status: 'clean',
        imageUrl: 'images/vehicleimage.png',
        information: 'some information',
        criminalhistory: [],
        warrants: [],
        lastmodified: "12 minutes",
        owner: {
            name: "terry adams",
            id: 155,
            info: "some information",
            imageUrl: "images/character1.png"
        },
        color: "",
        purchasedate: "",
        mileage: "14,874 m"
    },
    {
        name: "volkswagen",
        id: 'op9er44',
        status: 'clean',
        imageUrl: 'images/vehicleimage.png',
        information: 'some information',
        criminalhistory: [],
        warrants: [
            {
                active: true,
                incidentid: 23571261
            },
            {
                active: false,
                incidentid: 23465261,
                closed: "02/05/2022"
            },
        ],
        lastmodified: "12 minutes",
        owner: {
            name: "yvonne eghosa",
            id: 155,
            info: "some information",
            imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
        },
        color: "Purple",
        purchasedate: "24/05/07",
        mileage: "14,874 m"
    },
    {
        name: "cadillac",
        id: 'poi89er',
        status: 'clean',
        imageUrl: 'https://images.unsplash.com/photo-1589148938909-4d241c91ee52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
        information: 'some information',
        criminalhistory: [],
        warrants: [],
        lastmodified: "12 minutes",
        owner: {
            name: "trinity bond",
            id: 155,
            info: "I really don't know",
            imageUrl: ""
        },
        color: "Red",
        purchasedate: "12/04/12",
        mileage: "14,874 m"
    },
]
// FETCH / RENDERS VEHICLES DATA TO SCREEN
const pushVehicles = (data) => {
    vehiclesContainer.innerHTML = ''
    data.map((obj) => {
        const { name, id, status, imageUrl, information } = obj;
        vehiclesContainer.innerHTML += `
        <section class="${status === 'clean' ? 'warrant' : 'order'}" onclick="viewVehicle('${id}')">
            <div class='imagecont'><img src="${imageUrl ? imageUrl : status === 'clean' ? 'images/nophotoblack.png' : 'images/nophotored.png'}" alt="profile-image"></div>
            <div class="info-section">
                <p class='suspectname'>${name}</p>
                <div class="information"> ${information} <p class="dot"></p> id.${id} </div>
                <button class="${status === 'clean' ? 'green' : 'red'} funcBtns">${status}</button>
            </div>
        </section>
        `
    })
}
pushVehicles(vehiclesData);
let currentVehicle;
const viewVehicle = (vehicleId) => {
    document.querySelector('.allvehiclescontent').classList.add("hidden");
    document.querySelector('.vehiclecontent').classList.remove('hidden');
    document.querySelector('.vehiclecriminalhistory').innerHTML = ""
    document.querySelector('.vehiclewarrants').innerHTML = ""
    let vehicle = vehiclesData.filter((veh) => veh.id == vehicleId);
    const { id, status, name, criminalhistory, warrants, information, lastmodified, imageUrl, owner, purchasedate, color, mileage} = vehicle[0]
    currentVehicle = id
    document.querySelector('.vehiclename').innerHTML = name;
    document.querySelector('.vehname').innerHTML = name;
    document.querySelector('.vehicleinfo').innerHTML = information;
    document.querySelector('.totalfirstwarrants').innerHTML = warrants.length + " WARRANTS";
    document.querySelector('.totalvehiclecriminalhistory').innerHTML = criminalhistory.length ? criminalhistory.length + " records" : "No data"
    document.querySelector('.totalvehiclewarrants').innerHTML = warrants.length ? warrants.length + " records" : "No data"
    let activewarrant = warrants.filter((warr) => warr.active == true);
    document.querySelector('.totalvehiclewarrantsactive').innerHTML = activewarrant.length + ' records'
    warrants.length ? 
    document.querySelector('.totalvehiclewarrantsactive').classList.remove('hidden') 
    : document.querySelector('.totalvehiclewarrantsactive').classList.add('hidden')
    document.getElementById('vehicleimageurl').src = imageUrl ? imageUrl : status === 'clean' ? 'images/nophotoblack.png' : 'images/nophotored.png'
    document.querySelector('.vehicle-last-modified').innerHTML = lastmodified + " ago";
    document.querySelector('.vehicleowner').innerHTML = `
    <div class="warrant">
        <div class='imagecont'>
            <img src="${owner.imageUrl ? owner.imageUrl : 'images/nophotoblack.png'}" alt="profile-image" class="warrant-image">
        </div>
        <div class="info-section">
            <p class='suspectname fontmedium'>${owner.name} <span class="fontsmaller grey mediumbold">ID: ${owner.id}</span></p> 
            <div class="information bold pt"> ${owner.info} </div>
            <section class="status-div">
                <button class=" funcBtns">OWNER</button>
            </section>
        </div>
    </div>
    <div class="fontmedium vehicleaddinfo"> <span class=" grey">Purchase date</span> <span class="vl"></span> <span>${purchasedate}</span></div>
    <div class="fontmedium vehicleaddinfo"> <span class=" grey">Mileage</span> <span class="vl"></span> <span>${mileage}</span></div>
    <div class="fontmedium vehicleaddinfo"> <span class=" grey">Color</span> <span class="vl"></span> <span class="capitalize">${color}</span></div>
    `
    criminalhistory.length > 0 ?
    criminalhistory.map((history) => {
        document.querySelector('.vehiclecriminalhistory').innerHTML += `
            <div class="fontsmall flexsmall"> Incident #${history.incidentid} <span class="fontsmall ${history.incidentstatus+'style'}">${history.incidentstatus}</span> </div>
        `
    })
    :
        document.querySelector('.vehiclecriminalhistory').innerHTML = `
        <section class="novehiclerecord">
            <img src="images/nocriminalhistorybg.png" alt="no vehicle"/>
            <p class="grey fontsmall center">This vehicle haven’t been in
            any criminal records</p>
        </section>
        `
    warrants.length > 0 ? 
    warrants.map(( warr) => {
        document.querySelector('.vehiclewarrants').innerHTML += warr.active ? `
        <div class="fontsmall flexsmall active">Incident #${warr.incidentid} <span class="fontsmall suspectstyle">Active</span> </div>
        ` : 
        `<div class="fontsmall flexsmall">Incident #${warr.incidentid} <span class="fontsmall greybox">Closed ${warr.closed}</span> </div>`
    }) 
    :
    document.querySelector('.vehiclewarrants').innerHTML = `
    <section class="novehiclerecord">
        <img src="images/noprofilewarrantsbg.png" alt="no vehicle"/>
        <p class="grey fontsmall center">This vehicle haven’t any active warrants</p>
    </section>
    `
}
const addNewVehicleWarrant = () => {
    let newwarrant = vehiclesData.filter((vehicle) => vehicle.id === currentVehicle);
    const { name, information, imageUrl, id } = newwarrant[0];
    warrantsData.unshift({name, information, id, imageUrl, expires:"7"});
    pushWarrant(warrantsData);
    cancelModal('#vehiclewarrantmodal')
}
const viewAllVehicles = () => {
    document.querySelector('.allvehiclescontent').classList.remove("hidden");
    document.querySelector('.vehiclecontent').classList.add('hidden');
}

let currentvehiclefilter = 'all';
// SEARCH THROUGH VEHICLES
vehiclesearch.addEventListener('input', (e) => {
    let searchvalue = vehiclesearch.value
    let searchdata;
    if (currentvehiclefilter === 'all') {
        searchdata = vehiclesData;
    } else if (currentvehiclefilter === 'wanted') {
        searchdata = vehiclesData.filter((item) => item.status === 'wanted');
    } else if (currentvehiclefilter === 'clean') {
        searchdata = vehiclesData.filter((item) => item.status === 'clean');
    } else {
        searchdata = vehiclesData.filter((item) => item.status.includes(currentvehiclefilter))
    }
    searchdata = searchdata.filter((profile) => profile.name.toLowerCase().includes(searchvalue.toLowerCase()) || profile.information.toLowerCase().includes(searchvalue.toLowerCase()) || profile.id.includes(searchvalue.toLowerCase()));
    pushVehicles(searchdata);
})
// FILTERS VEHICLES BASED ON STATUS (WANTED, CLEAN AND ALL)
const applyCurrentVehicleFilter = () => {
    let data;
    if (currentvehiclefilter === 'all') {
        data = vehiclesData;
    } else if (currentvehiclefilter === 'wanted') {
        data = vehiclesData.filter((item) => item.status === 'wanted');
    } else if (currentvehiclefilter === 'clean') {
        data = vehiclesData.filter((item) => item.status === 'clean');
    }
    pushVehicles(data);
}

vehiclesfilters.map((item) => {
    item.addEventListener('click', () => {
        vehiclesearch.value = ''
        item.classList.add(`active-${item.textContent}`)
        if (item == allprofiles) {
            currentvehiclefilter = 'all'
            applyCurrentVehicleFilter()
            const restFilters = vehiclesfilters.filter((filt) => filt !== item)
            restFilters.map((i) => i.classList.remove(`active-${i.textContent}`))
        } else {
            currentvehiclefilter = item.textContent
            applyCurrentVehicleFilter()
            const restFilters = vehiclesfilters.filter((filt) => filt !== item)
            restFilters.map((i) => i.classList.remove(`active-${i.textContent}`))
        }
    })
})

// INCIDENTS FUNCTIONALITIES
const incidentsmain = document.querySelector('.incidents-main');
const saveevidence = document.querySelector("#evidencesave");
const evidenceImageUrl = document.querySelector("#evidence-ImageURL");
const evidenceDescription = document.querySelector("#evidence-description");
const findperson = document.querySelector('#personfind');
const personname = document.querySelector("#personname");
const incidentsearch = document.querySelector('#incidentsearch');
const incidentsview = document.querySelector('.incidentscont');
const singleincident = document.querySelector('.singleincident');

// INCIDENTS DATA
let incidentsData = [
    {
        id: 155,
        title: '10-90 | Robbery',
        description: 'some information',
        time: '13 minutes',
        name: 'alexa death',
        evidences: [
            {
                evidencename: 'cucumber',
                count: 5,
                id: 1
            },
            {
                evidencename: 'gun',
                count: 1,
                id: 2 
            }
        ],
        vehicles: [
            {
                id: 1,
                vehiclename: "Audi R8",
                vehicleid: "PC236127FFI"
            },
            {
                id: 2,
                vehiclename: "Audi R8",
                vehicleid: "PC23612678I"
            },
        ],
        officers: {
            leadingOfficers: [
                {
                    id: 1,
                    officername: "adams ressler",
                    officerid : "567",
                    incidentcreator: true
                },
            ],
            otherOfficers: [
                {
                    id: 1,
                    officername: "adams ressler",
                    officerid : "545",
                },
                {
                    id: 2,
                    officername: "adams ressler",
                    officerid : "548",
                },
            ]
        },
        citizens: [
            {
                id: 1,
                citizenname: "John Doe",
                citizenid: 156,
                status: "eyewitness",
                imageUrl: "images/character1.png",
                description: "chilllinngg bigman, jail soon"
            },
            {
                id: 2,
                citizenname: "Jane Doe",
                citizenid: 157,
                status: "suspect",
                imageUrl: "images/character2.png",
                description: "chilllinngg bigman, jail soon"
            },
            {
                id: 3,
                citizenname: "Achmaad",
                citizenid: 267,
                status: "suspect",
                imageUrl: "",
                description: "chilllinngg bigman, jail soon"
            }
        ]
    },
    {
        id: 156,
        title: '10-90 | Robbery',
        description: 'some information',
        time: '15 minutes',
        name: 'texda death',
        evidences: [
            {
                evidencename: 'cucumber',
                count: 5,
                id: 1
            },
            {
                evidencename: 'gun',
                count: 1,
                id: 2 
            }
        ],
        vehicles: [
            {
                id: 1,
                vehiclename: "Audi R8",
                vehicleid: "PC236127FFI"
            },
            {
                id: 2,
                vehiclename: "Audi R8",
                vehicleid: "PC23612678I"
            },
        ],
        officers: {
            leadingOfficers: [
                {
                    id: 1,
                    officername: "adams ressler",
                    officerid : "567",
                    incidentcreator: true
                },
            ],
            otherOfficers: [
                {
                    id: 1,
                    officername: "adams ressler",
                    officerid : "545",
                },
            ]
        },
        citizens: [
            {
                id: 1,
                citizenname: "John Doe",
                citizenid: 156,
                status: "victim",
                imageUrl: "images/character1.png",
                description: "some information sha"
            },
            {
                id: 2,
                citizenname: "Jane Doe",
                citizenid: 157,
                status: "eyewitness",
                imageUrl: "",
                description: "some information sha"
            },
        ]
    },
    {
        id: 157,
        title: '10-90 | Robbery',
        description: 'some information',
        time: '13 minutes',
        name: 'alexa death',
        evidences: [
            {
                evidencename: 'cucumber',
                count: 5,
                id: 1
            },
            {
                evidencename: 'gun',
                count: 1,
                id: 2 
            }
        ],
        vehicles: [
            {
                id: 1,
                vehiclename: "Audi R8",
                vehicleid: "PC236127FFI"
            },
            {
                id: 2,
                vehiclename: "Audi R8",
                vehicleid: "PC23612678I"
            },
        ],
        officers: {
            leadingOfficers: [
                
            ],
            otherOfficers: [
                
            ]
        },
        citizens: []
    },
    {
        id: 158,
        title: 'Robbery',
        description: 'some information',
        time: '15 minutes',
        name: 'texda death',
        evidences: [
            {
                evidencename: 'cucumber',
                count: 5,
                id: 1
            },
            {
                evidencename: 'gun',
                count: 1,
                id: 2 
            }
        ],
        vehicles: [
            {
                id: 1,
                vehiclename: "Audi R8",
                vehicleid: "PC236127FFI"
            },
            {
                id: 2,
                vehiclename: "Audi R8",
                vehicleid: "PC23612678I"
            },
        ],
        officers: {
            leadingOfficers: [
                {
                    id: 1,
                    officername: "adams ressler",
                    officerid : "567",
                    incidentcreator: true
                },
            ],
            otherOfficers: [
                {
                    id: 1,
                    officername: "adams ressler",
                    officerid : "545",
                },
                {
                    id: 2,
                    officername: "adams ressler",
                    officerid : "548",
                },
            ]
        },
        citizens: [
            {
                citizenname: "Tiana June",
                imageUrl: "images/character2.png",
                description: "that dude killed me",
                status: "victim",
                citizenid: 124,
                id: 1
            },
        ]
    },
    {
        id: 159,
        title: 'Theft',
        description: 'some information',
        time: '13 minutes',
        name: 'alexa death',
        officers: {
            leadingOfficers : [],
            otherOfficers: []
        },
        citizens: [],
        vehicles: [],
        evidences: []
    },
    {
        id: 160,
        title: 'Assault',
        description: 'some information',
        time: '15 minutes',
        name: 'texda death',
        evidences: [],
        vehicles: [
            {
                id: 1,
                vehiclename: "Audi R8",
                vehicleid: "PC236127FFI"
            },
            {
                id: 2,
                vehiclename: "Audi R8",
                vehicleid: "PC23612678I"
            },
        ],
        officers: {
            leadingOfficers: [
                {
                    id: 1,
                    officername: "adams ressler",
                    officerid : "567",
                    incidentcreator: true
                },
            ],
            otherOfficers: [
                
            ]
        },
        citizens: [
            {
                id: 1,
                citizenname: "John Doe",
                citizenid: 156,
                status: "victim",
                imageUrl: "images/character.png",
                description: "lorem ipsum chill work"
            },
        ]
    },
    {
        id: 161,
        title: '10-90 | Robbery',
        description: 'some information',
        time: '13 minutes',
        name: 'alexa death',
        officers: {
            leadingOfficers : [],
            otherOfficers: []
        },
        citizens: [
            {
                citizenname: "Tiana June",
                imageUrl: "images/character2.png",
                description: "that dude killed me",
                status: "victim",
                citizenid: 124,
                id: 1
            },
            {
                citizenname: "John Looker",
                imageUrl: "images/character.png",
                description: "lorem ipsum in jusbt time",
                status: "eyewitness",
                citizenid: 234,
                id: 2
            },
        ],
        vehicles: [],
        evidences: [],
    },
    {
        id: 162,
        title: '10-90 | Robbery',
        description: 'some information',
        time: '15 minutes',
        name: 'texda death',
        officers: {
            leadingOfficers : [],
            otherOfficers: []
        },
        citizens: [],
        vehicles: [],
        evidences: [],
    },
    {
        id: 163,
        title: '10-90 | Robbery',
        description: 'some information',
        time: '13 minutes',
        name: 'alexa death',
        officers: {
            leadingOfficers : [],
            otherOfficers: []
        },
        citizens: [
            {
                id: 1,
                citizenname: "John Doe",
                citizenid: 156,
                status: "victim",
                imageUrl : "",
                description: "Mad testing sha, it willl workk"
            },
            {
                id: 2,
                citizenname: "Jane Doe",
                citizenid: 157,
                status: "eyewitness",
                imageUrl : "images/character1.png",
                description: "Mad testing sha, it willl workk"
            },
        ],
        vehicles: [],
        evidences: [],
    },
    {
        id: 164,
        title: '10-90 | Robbery',
        description: 'some information',
        time: '15 minutes',
        name: 'texda death',
        officers: {
            leadingOfficers : [],
            otherOfficers: []
        },
        citizens: [
            {
                id: 1,
                citizenname: "John Doe",
                citizenid: 156,
                status: "victim",
                imageUrl : "",
                description: "Mad testing sha, it willl workk"
            },
            {
                id: 2,
                citizenname: "Jane Doe",
                citizenid: 157,
                status: "eyewitness",
                imageUrl : "images/character1.png",
                description: "Mad testing sha, it willl workk"
            },
        ],
        vehicles: [],
        evidences: [],
    },
    {
        id: 165,
        title: '10-90 | Robbery',
        description: 'some information',
        time: '13 minutes',
        name: 'alexa death',
        officers: {
            leadingOfficers: [],
            otherOfficers: []
        },
        citizens: [
            {
                id: 1,
                citizenname: "John Doe",
                citizenid: 156,
                status: "victim",
                imageUrl : "",
                description: "Mad testing sha, it willl workk"
            },
            {
                id: 2,
                citizenname: "Jane Doe",
                citizenid: 157,
                status: "eyewitness",
                imageUrl : "images/character1.png",
                description: "Mad testing sha, it willl workk"
            },
            {
                id: 3,
                citizenname: "Achmaad",
                citizenid: 267,
                status: "suspect",
                imageUrl : "",
                description: "Mad testing sha, it willl workk"
            }
        ],
        vehicles: [],
        evidences: [],
    },
].reverse()

// FETCH / RENDERS INCIDENTS DATA TO SCREEN
const pushIncidents = (data) => {
    incidentsmain.innerHTML = '';
    data.map((item) => {
        const { id, title, description, time, name } = item;
        incidentsmain.innerHTML += `
        <section class="incident">
            <h4 class="incident-title">${title}</h4>
            <div class="information">${description.slice(0, 20) + '...'} <p class="dot"></p> id: ${id}</div>
            <div class="timebox pointer" onclick="viewIncident(${id})"> 
                <p> 
                <svg  xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path class="smalledit" d="M8.65 3.4625L6.525 1.3625L7.225 0.6625C7.41667 0.470833 7.65217 0.375 7.9315 0.375C8.21083 0.375 8.44617 0.470833 8.6375 0.6625L9.3375 1.3625C9.52917 1.55417 9.62917 1.7855 9.6375 2.0565C9.64583 2.3275 9.55417 2.55867 9.3625 2.75L8.65 3.4625ZM7.925 4.2L2.625 9.5H0.5V7.375L5.8 2.075L7.925 4.2Z" />
                </svg>
                </p> 
                <p> ${name} - ${time} ago</p> 
            </div>
        </section>
        `
    })
}
pushIncidents(incidentsData);
// SEARCH INCIDENTS
incidentsearch.addEventListener('input', () => {
    let searchvalue = incidentsearch.value
    if (!searchvalue) pushIncidents(incidentsData)
    let data = incidentsData.filter((incident) => incident.title.toLowerCase().includes(searchvalue.toLowerCase()));
    pushIncidents(data)
})
// NAVIGATE TO INCIDENTS ADD SCREEN
const incidentsAdd = () => {
    document.querySelector('.newincidentscreen').classList.remove('hidden');
    document.querySelector('.addcriminalscreen').classList.remove('hidden');
    document.querySelector('.incidents-main').classList.remove('incidents-grid');
    document.querySelector('.incidentadd').classList.add('hidden');
}
let newincident = {
    id: "",
    title: "",
    description: "",
    time: '13 minutes',
    name: loggedOfficer.name,
    evidences: [],
    vehicles: [],
    officers: {
        leadingOfficers: [
            {
                id: 1,
                officername: loggedOfficer.name,
                officerid : "567",
                incidentcreator: true
            },
        ],
        otherOfficers: []
    },
    citizens: []
}
document.getElementById('newincidenttitle').addEventListener('input', (event) => {
    newincident.title = event.target.value;
})
document.getElementById('newincidentdescription').addEventListener('input', (event) => {
    newincident.description = event.target.value;
})
// ADD EVIDENCE FUNCTIONALITY
const evidenceIncidentSub = () => {
    document.querySelector('.incidentevidenceheader').classList.toggle('addcriminalactive')
    document.querySelector('.plusincidentevidence').classList.toggle('elementhidden')
    document.querySelector('.incidentevidence').classList.toggle('hidevehicle')
    document.querySelector('.addincidentevidence').classList.toggle('addiconactive') 
}
saveevidence.addEventListener('click', () => {
    if(document.querySelector('#selectedevidence').value){
        let values = {
            evidencename: document.querySelector('#selectedevidence').value,
            description : document.querySelector("#evidence-description").value,
            imageUrl: "",
            count: 1
        }
        let check = newincident.evidences.filter((evid) => evid.evidencename === values.evidencename);
        if(check.length < 1){
            newincident.evidences.push(values)
            document.getElementById('addedincidentevidences').innerHTML += `
            <div class="subpickedcontent">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1.1665 1.75H12.8332V4.08333H1.1665V1.75ZM11.0832 4.66667H1.74984V11.0833C1.74984 11.3928 1.87275 11.6895 2.09155 11.9083C2.31034 12.1271 2.60708 12.25 2.9165 12.25H11.0832C11.3926 12.25 11.6893 12.1271 11.9081 11.9083C12.1269 11.6895 12.2498 11.3928 12.2498 11.0833V4.66667H11.0832ZM9.33317 8.16667H4.6665V7H9.33317V8.16667Z" fill="white"/>
                </svg>
                <p> ${values.evidencename} </p>
            </div>
            `
        }
        cancelModal('#evidencemodal')
        document.querySelector("#evidence-description").value = ''
        document.querySelector('#selectedevidence').value = ''
        document.getElementById('selectedevidence').classList.remove('uppercase')
    }  
})

// ADD PERSON FUNCTIONALITY
const personIncidentSub = () => {
    document.querySelector('.incidentpersonheader').classList.toggle('addcriminalactive')
    document.querySelector('.plusincidentperson').classList.toggle('elementhidden')
    document.querySelector('.incidentpersons').classList.toggle('hidevehicle')
    document.querySelector('.addincidentperson').classList.toggle('addiconactive') 
}
findperson.addEventListener('click', () => {
    if(document.querySelector('#selectedperson').value){
        let fulldetail = document.querySelector('#selectedperson').value
        let split = fulldetail.split('|')
        let values = {
            citizenid: split[0],
            citizenname: split[1],
            description : document.querySelector("#person-description").value,
            status: document.querySelector("#selectedpersonstatus").value,
            imageUrl: document.querySelector("#person-imageURL").value,
        }
        let check = newincident.citizens.filter((cit) => cit.citizenid === values.citizenid);
        if(check.length < 1){
            newincident.citizens.push(values)
            document.getElementById('addedincidentpersons').innerHTML += `
            <div class="subpickedcontent">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <g clip-path="url(#clip0_9628_62454)">
                        <path d="M11.9038 9.53594C11.2789 8.85889 10.5206 8.31857 9.67659 7.94901C8.83261 7.57946 7.92124 7.38867 6.99989 7.38867C6.07854 7.38867 5.16718 7.57946 4.32319 7.94901C3.47921 8.31857 2.72089 8.85889 2.096 9.53594C1.99953 9.64262 1.94556 9.781 1.94434 9.92483V12.2582C1.94638 12.4115 2.00874 12.5579 2.11792 12.6656C2.22709 12.7733 2.3743 12.8337 2.52767 12.8337H11.4721C11.6268 12.8337 11.7752 12.7723 11.8846 12.6629C11.994 12.5535 12.0554 12.4051 12.0554 12.2504V9.91705C12.0523 9.77591 11.9985 9.64062 11.9038 9.53594Z" fill="white"/>
                        <path d="M7.00005 6.61144C8.5035 6.61144 9.72228 5.39266 9.72228 3.88921C9.72228 2.38577 8.5035 1.16699 7.00005 1.16699C5.49661 1.16699 4.27783 2.38577 4.27783 3.88921C4.27783 5.39266 5.49661 6.61144 7.00005 6.61144Z" fill="white"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_9628_62454">
                            <rect width="14" height="14" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>            
            <p> ${fulldetail} </p>
            </div>
            `
        }
        cancelModal('#personmodal')
        document.querySelector('#selectedperson').value = ''
        document.querySelector("#person-imageURL").value = ''
        document.querySelector("#person-description").value = ''
        document.querySelector("#selectedpersonstatus").value = ''
        document.getElementById('selectedperson').classList.remove('uppercase')
    }
})

// ADD VEHICLE TO INCIDENT
const addIncidentVehicle = () => {
    document.querySelector('.incidentvehicleheader').classList.toggle('addcriminalactive')
    document.querySelector('.plusincidentvehicle').classList.toggle('elementhidden')
    document.querySelector('.incidentvehicles').classList.toggle('hidevehicle')
    document.querySelector('#addincidentvehicle').classList.toggle('addiconactive')
}
const vehicleButtonAdd = () => {
    if(document.querySelector('#selectedvehicle').value){
        let vname = document.querySelector('#selectedvehicle').value
        let split = vname.split('|')
        let values = {
            id: Math.round( 100 * Math.random()),
            vehiclename: split[1],
            vehicleid: split[0],
            description : document.querySelector("#vehicle-description").value
        }
        let check = newincident.vehicles.filter((veh) => veh.vehicleid === values.vehicleid);
        if(check.length < 1){
            newincident.vehicles.push(values)
            document.getElementById('addedincidentvehicles').innerHTML += `
            <div class="subpickedcontent">
                <img src="images/vehicle.svg" alt="vehicle icon">
                <p> ${vname} </p>
            </div>
            `
        }
        cancelModal('#vehiclemodal')
        document.querySelector('#selectedvehicle').value = ''
        document.getElementById('selectedvehicle').classList.remove('uppercase')
    }
}

// ADD OFFICER TO INCIDENT
const officerIncidentSub = () => {
    document.querySelector('.incidentofficerheader').classList.toggle('addcriminalactive')
    document.querySelector('.plusincidentofficer').classList.toggle('elementhidden')
    document.querySelector('.incidentofficers').classList.toggle('hidevehicle')
    document.querySelector('.addincidentofficer').classList.toggle('addiconactive') 
}
const officerAdd = () => {
    if(document.querySelector('#selectedofficer').value){
        let fulldetail = document.querySelector('#selectedofficer').value
        let split = fulldetail.split('|')
        let values = {
            id: Math.round( 100 * Math.random()),
            officerid: split[0],
            officername: split[1],
            description : document.querySelector("#officer-description").value
        }
        let check = newincident.officers.otherOfficers.filter((off) => off.officerid === values.officerid);
        if(check.length < 1){
            newincident.officers.otherOfficers.push(values);
            document.getElementById('addedincidentofficers').innerHTML += `
            <div class="subpickedcontent">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M8.45833 7.34384L8.82583 8.93634C8.88417 9.18717 8.61 9.38551 8.38833 9.25134L7 8.41134L5.60583 9.25134C5.55669 9.28116 5.49986 9.29585 5.44242 9.29359C5.38499 9.29132 5.32949 9.27221 5.28284 9.23862C5.23619 9.20504 5.20046 9.15847 5.1801 9.10471C5.15974 9.05096 5.15565 8.9924 5.16833 8.93634L5.54167 7.34967L4.31667 6.29384C4.27265 6.25663 4.24065 6.20722 4.2247 6.15184C4.20874 6.09646 4.20956 6.03759 4.22703 5.98267C4.24451 5.92775 4.27786 5.87924 4.32288 5.84326C4.36791 5.80728 4.42258 5.78544 4.48 5.78051L6.10167 5.64051L6.73167 4.14717C6.83083 3.90801 7.16917 3.90801 7.26833 4.14717L7.89833 5.63467L9.52 5.77467C9.57742 5.77961 9.63209 5.80144 9.67712 5.83742C9.72214 5.8734 9.75549 5.92192 9.77297 5.97684C9.79044 6.03176 9.79125 6.09062 9.7753 6.146C9.75935 6.20139 9.72735 6.2508 9.68333 6.28801L8.45833 7.34384ZM2.44417 2.60717C2.02417 2.79384 1.75 3.21384 1.75 3.67467V6.41634C1.75 9.65384 3.99 12.6813 7 13.4163C10.01 12.6813 12.25 9.65384 12.25 6.41634V3.67467C12.25 3.21384 11.9758 2.79384 11.5558 2.60717L7.4725 0.793008C7.16917 0.658841 6.825 0.658841 6.5275 0.793008L2.44417 2.60717Z" fill="white"/>
                </svg>            
                <p> ${fulldetail} </p>
            </div>
            `
        }
        cancelModal('#officermodal');
        document.querySelector('#selectedofficer').value = ''
        document.querySelector("#officer-description").value = ''
        document.getElementById('selectedofficer').classList.remove('uppercase')
    }
}

// ADD CRIMINAL SCUM TO NEW INCIDENT
const criminalIncidentSub = () => {
    document.querySelector('.incidentcriminalheader').classList.toggle('addcriminalactive')
    document.querySelector('.plusincidentcriminal').classList.toggle('elementhidden')
    document.querySelector('.incidentcriminals').classList.toggle('hidevehicle')
    document.querySelector('.addincidentcriminal').classList.toggle('addiconactive') 
}
const criminalAdd = () => {
    if(document.querySelector('#selectedcriminal').value){
        let fulldetail = document.querySelector('#selectedcriminal').value;
        let split = fulldetail.split('|')
        let values = {
            citizenid: split[0],
            citizenname: split[1],
            status: "suspect",
            imageUrl: document.querySelector('#criminal-imageURL').value,
            description : document.querySelector("#criminal-description").value
        }
        let check = newincident.citizens.filter((cit) => cit.citizenid === values.citizenid);
        if(check.length < 1){
            newincident.citizens.push(values);
            document.getElementById('addedincidentcriminals').innerHTML += `
            <div class="subpickedcontent">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <g clip-path="url(#clip0_9628_62460)">
                    <path d="M11.9038 9.53594C11.2789 8.85889 10.5206 8.31857 9.67659 7.94901C8.83261 7.57946 7.92124 7.38867 6.99989 7.38867C6.07854 7.38867 5.16718 7.57946 4.32319 7.94901C3.47921 8.31857 2.72089 8.85889 2.096 9.53594C1.99953 9.64262 1.94556 9.781 1.94434 9.92483V12.2582C1.94638 12.4115 2.00874 12.5579 2.11792 12.6656C2.22709 12.7733 2.3743 12.8337 2.52767 12.8337H11.4721C11.6268 12.8337 11.7752 12.7723 11.8846 12.6629C11.994 12.5535 12.0554 12.4051 12.0554 12.2504V9.91705C12.0523 9.77591 11.9985 9.64062 11.9038 9.53594Z" fill="#FFF3F3"/>
                    <path d="M7.00003 6.61143C7.62475 6.6114 8.23044 6.39651 8.71549 6.00281C9.20053 5.60911 9.53541 5.06056 9.66392 4.4492C9.31363 4.12234 9.05048 3.71319 8.89836 3.25886C8.74624 2.80454 8.70996 2.31943 8.79281 1.84754C8.46222 1.55599 8.06577 1.34907 7.63755 1.24458C7.20933 1.14009 6.76214 1.14115 6.33441 1.24767C5.90669 1.35419 5.51123 1.56298 5.18202 1.85609C4.85282 2.1492 4.59971 2.51787 4.44446 2.93042C4.28921 3.34296 4.23646 3.78703 4.29074 4.22446C4.34503 4.66189 4.50472 5.0796 4.7561 5.44168C5.00747 5.80376 5.34302 6.09938 5.73388 6.30314C6.12475 6.50689 6.55925 6.61269 7.00003 6.61143Z" fill="#FFF3F3"/>
                    <path d="M11.6666 4.27756C12.7405 4.27756 13.6111 3.407 13.6111 2.33312C13.6111 1.25923 12.7405 0.388672 11.6666 0.388672C10.5927 0.388672 9.72217 1.25923 9.72217 2.33312C9.72217 3.407 10.5927 4.27756 11.6666 4.27756Z" fill="#FF4848"/>
                </g>
                <defs>
                    <clipPath id="clip0_9628_62460">
                    <rect width="14" height="14" fill="white"/>
                    </clipPath>
                </defs>
                </svg>
                <p> ${fulldetail} </p>
            </div>
            `
        } 
        cancelModal('#criminalmodal');
        document.querySelector('#selectedcriminal').value = ''
        document.querySelector('#criminal-imageURL').value = ''
        document.querySelector("#criminal-description").value = ''
        document.getElementById('selectedcriminal').classList.remove('uppercase')
    }
}

// REFRESH NEW INCIDENT FORM
const refreshIncidentForm = () => {
    document.getElementById('addedincidentvehicles').innerHTML = ""
    document.getElementById('addedincidentofficers').innerHTML = ""
    document.getElementById('addedincidentpersons').innerHTML = ""
    document.getElementById('addedincidentevidences').innerHTML = ""
    document.getElementById('addedincidentcriminals').innerHTML = ""
    document.getElementById('newincidenttitle').value = ""
    document.getElementById('newincidentdescription').value = ""
}

// SAVE NEW INCIDENT
const saveNewIncident = () => {
    newincident.id = Math.round( 1000 * Math.random());
    incidentsData.unshift(newincident)
    pushIncidents(incidentsData)
    refreshIncidentForm()
    newincident = {
        id: "",
        title: "",
        description: "",
        time: '13 minutes',
        name: loggedOfficer.name,
        evidences: [],
        vehicles: [],
        officers: {
            leadingOfficers: [
                {
                    id: 1,
                    officername: loggedOfficer.name,
                    officerid : "567",
                    incidentcreator: true
                },
            ],
            otherOfficers: []
        },
        citizens: []
    }
}

// VIEW SINGLE INCIDENT SWITCH
const incidentEvidences = document.querySelector('.evidences');
const incidentVehicles = document.querySelector('.vehicles');
const incidentOfficers = document.querySelector('.officers');
const incidentCitizens = document.querySelector('.citizens');
const incidentsuspects = document.querySelector('.incident-suspects');
const incidentvictims = document.querySelector('.incident-victims');
const incidentwitnesses = document.querySelector('.incident-witnesses');
const firstDetailSub = [ incidentsuspects, incidentvictims, incidentwitnesses ];
const secondDetail = [ incidentCitizens,incidentEvidences, incidentVehicles, incidentOfficers ];

let currentIncident;
let itemOnEdit;
const viewIncident = (incidentId) => {
    let incident = incidentsData.filter((incd) => incd.id === incidentId);
    currentIncident = incidentId;
    singleincident.classList.add('show');
    singleincident.classList.remove('hidden');
    incidentsview.classList.add('hidden');
    if (incident) {
        const { id, description, time, vehicles, evidences, citizens, officers, title } = incident[0]
        document.querySelector('.incidentId').textContent = id;
        document.querySelector('.subId').textContent = `ID ${id}`
        document.querySelector('.incidentInfo').textContent = title.slice(0,20) + '...';
        document.querySelector('.last-modified-span').innerHTML = ` ${time} ago `
        incidentsuspects.lastElementChild.textContent = citizens.filter((cit) => cit.status.toLowerCase() === "suspect").length
        incidentvictims.lastElementChild.textContent = citizens.filter((cit) => cit.status.toLowerCase() === "victim").length
        incidentwitnesses.lastElementChild.textContent = citizens.filter((cit) => cit.status.toLowerCase() === "eyewitness").length
        document.querySelector('.evidences-records').textContent = evidences.length;
        document.querySelector('.vehicles-records').textContent = vehicles.length;
        document.querySelector('.officers-records').textContent = officers.otherOfficers ?  officers.leadingOfficers.length + officers.otherOfficers.length : 0;
        document.querySelector('.citizens-records').textContent = citizens.length;
        document.querySelector('.incident-citizens-box').innerHTML = ""
        firstDetailSub.map((detail) => {
            let filteredCitizens;
            detail.addEventListener('click',() => {
                document.querySelector('.incident-citizens-box').innerHTML = ""
                detail.classList.remove('inactive');
                if(detail === incidentsuspects) {filteredCitizens = citizens.filter((cit) => cit.status.toLowerCase() === "suspect")}
                else if(detail === incidentvictims) {filteredCitizens = citizens.filter((cit) => cit.status.toLowerCase() === "victim")}
                else if(detail === incidentwitnesses) {filteredCitizens = citizens.filter((cit) => cit.status.toLowerCase() === "eyewitness")}
                pushFilteredCitizens(filteredCitizens, '.incident-citizens-box')
                let restdetails = firstDetailSub.filter((i) => i !== detail);
                restdetails.map((i) => {
                    i.classList.add('inactive');
                })
            })
        })
        pushFilteredCitizens(citizens, '.incident-citizens-box')
        secondDetail.map((detail) => {
            detail.addEventListener('click', () => {
                pushDetails(detail)
            })
        })
        document.querySelector('.main-info-title').value = title;
        document.querySelector('.main-info-text').value = description;    
    }

}

const pushDetails = (detail) => {
    let incident = incidentsData.filter((incd) => incd.id === currentIncident);
    const { vehicles, evidences, citizens, officers } = incident[0]
    detail.classList.add('detailactive');
    let restDetails = secondDetail.filter((item) => item !== detail);
    restDetails.map((item) => item.classList.remove('detailactive'));
    document.querySelector('.main-info').classList.add('hidden');
    document.querySelector('.detail-records').classList.remove('hidden');
    document.querySelector('.backtomaininfo').classList.remove('elementhidden');
    document.querySelector('.details').innerHTML = ''
    if ( detail == incidentEvidences ){
        document.querySelector('.main-title').textContent = `Involved Evidences List`;
        document.querySelector('.detail-records').innerHTML = `
            <div class="details"></div>
            <div class="flexsmall grey pointer addnew" onclick="showModal('.evidencemodal')">
                <svg width="24" height="24" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.2188 6.25C24.8404 6.25 25.4365 6.49693 25.876 6.93647C26.3156 7.37601 26.5625 7.97215 26.5625 8.59375V21.875H39.8438C40.4654 21.875 41.0615 22.1219 41.501 22.5615C41.9406 23.001 42.1875 23.5971 42.1875 24.2188C42.1875 24.8404 41.9406 25.4365 41.501 25.876C41.0615 26.3156 40.4654 26.5625 39.8438 26.5625H26.5625V39.8438C26.5625 40.4654 26.3156 41.0615 25.876 41.501C25.4365 41.9406 24.8404 42.1875 24.2188 42.1875C23.5971 42.1875 23.001 41.9406 22.5615 41.501C22.1219 41.0615 21.875 40.4654 21.875 39.8438V26.5625H8.59375C7.97215 26.5625 7.37601 26.3156 6.93647 25.876C6.49693 25.4365 6.25 24.8404 6.25 24.2188C6.25 23.5971 6.49693 23.001 6.93647 22.5615C7.37601 22.1219 7.97215 21.875 8.59375 21.875H21.875V8.59375C21.875 7.97215 22.1219 7.37601 22.5615 6.93647C23.001 6.49693 23.5971 6.25 24.2188 6.25Z" fill="white" fill-opacity="0.65"/>
                </svg>
                Add new
            </div>
        `
        evidences.map((evid) => {
            const { evidencename, count, id } = evid;
            document.querySelector('.details').innerHTML += `
                <section class='detail ${'evidence'+id}'>
                    <div class='flexsmall'>
                        ${evidencename}
                        <p> ${count}x </p>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="pointer" viewBox="0 0 20 20" fill="none" onclick="editIncidentEvidence(${id})">
                            <path d="M15.4863 7.73699L12.2307 4.51507L13.3031 3.4411C13.5968 3.14703 13.9576 3 14.3855 3C14.8135 3 15.174 3.14703 15.4671 3.4411L16.5396 4.51507C16.8332 4.80913 16.9864 5.16405 16.9992 5.57984C17.012 5.99562 16.8715 6.35028 16.5779 6.64384L15.4863 7.73699ZM14.3755 8.86849L6.25563 17H3V13.7397L11.1199 5.60822L14.3755 8.86849Z" fill="white" fill-opacity="0.65"/>
                        </svg>
                        <svg width="20" height="20" class="pointer" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" onclick="deleteEvidenceFromIncident(${id})">
                            <path d="M15.8334 3.33333H12.9167L12.0834 2.5H7.91675L7.08341 3.33333H4.16675V5H15.8334M5.00008 15.8333C5.00008 16.2754 5.17568 16.6993 5.48824 17.0118C5.8008 17.3244 6.22472 17.5 6.66675 17.5H13.3334C13.7754 17.5 14.1994 17.3244 14.5119 17.0118C14.8245 16.6993 15.0001 16.2754 15.0001 15.8333V5.83333H5.00008V15.8333Z" fill="#F13333" fill-opacity="0.65"/>
                        </svg>
                    </div>
                </section>
            `
        })
    } else if( detail == incidentVehicles ){
        document.querySelector('.main-title').textContent = `Involved Vehicles List`;
        document.querySelector('.detail-records').innerHTML = `
            <div class="details"></div>
            <div class="flexsmall grey pointer addnew" onclick="showModal('.vehiclemodal')">
                <svg width="24" height="24" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.2188 6.25C24.8404 6.25 25.4365 6.49693 25.876 6.93647C26.3156 7.37601 26.5625 7.97215 26.5625 8.59375V21.875H39.8438C40.4654 21.875 41.0615 22.1219 41.501 22.5615C41.9406 23.001 42.1875 23.5971 42.1875 24.2188C42.1875 24.8404 41.9406 25.4365 41.501 25.876C41.0615 26.3156 40.4654 26.5625 39.8438 26.5625H26.5625V39.8438C26.5625 40.4654 26.3156 41.0615 25.876 41.501C25.4365 41.9406 24.8404 42.1875 24.2188 42.1875C23.5971 42.1875 23.001 41.9406 22.5615 41.501C22.1219 41.0615 21.875 40.4654 21.875 39.8438V26.5625H8.59375C7.97215 26.5625 7.37601 26.3156 6.93647 25.876C6.49693 25.4365 6.25 24.8404 6.25 24.2188C6.25 23.5971 6.49693 23.001 6.93647 22.5615C7.37601 22.1219 7.97215 21.875 8.59375 21.875H21.875V8.59375C21.875 7.97215 22.1219 7.37601 22.5615 6.93647C23.001 6.49693 23.5971 6.25 24.2188 6.25Z" fill="white" fill-opacity="0.65"/>
                </svg>
                Add new
            </div>
        `
        vehicles.map((vehic) => {
            const { vehiclename, vehicleid, id } = vehic;
            document.querySelector('.details').innerHTML += `
                <section class='detail ${'vehicle'+id}'>
                    <div class='flexsmall'>
                        ${vehiclename}
                        <p> ${vehicleid} </p>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="pointer" viewBox="0 0 20 20" fill="none" onclick="editIncidentVehicle(${id})">
                            <path d="M15.4863 7.73699L12.2307 4.51507L13.3031 3.4411C13.5968 3.14703 13.9576 3 14.3855 3C14.8135 3 15.174 3.14703 15.4671 3.4411L16.5396 4.51507C16.8332 4.80913 16.9864 5.16405 16.9992 5.57984C17.012 5.99562 16.8715 6.35028 16.5779 6.64384L15.4863 7.73699ZM14.3755 8.86849L6.25563 17H3V13.7397L11.1199 5.60822L14.3755 8.86849Z" fill="white" fill-opacity="0.65"/>
                        </svg>
                        <svg width="20" height="20" class="pointer" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" onclick="deleteVehicleFromIncident(${id})">
                            <path d="M15.8334 3.33333H12.9167L12.0834 2.5H7.91675L7.08341 3.33333H4.16675V5H15.8334M5.00008 15.8333C5.00008 16.2754 5.17568 16.6993 5.48824 17.0118C5.8008 17.3244 6.22472 17.5 6.66675 17.5H13.3334C13.7754 17.5 14.1994 17.3244 14.5119 17.0118C14.8245 16.6993 15.0001 16.2754 15.0001 15.8333V5.83333H5.00008V15.8333Z" fill="#F13333" fill-opacity="0.65"/>
                        </svg>
                    </div>
                </section>
            `
        })
    } else if ( detail == incidentCitizens ){
        document.querySelector('.main-title').textContent = `Involved Citizens List`;
        document.querySelector('.detail-records').innerHTML = `
            <div class="details"></div>
            <div class="flexsmall grey pointer addnew" onclick="showModal('.citizenmodal')">
                <svg width="24" height="24" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.2188 6.25C24.8404 6.25 25.4365 6.49693 25.876 6.93647C26.3156 7.37601 26.5625 7.97215 26.5625 8.59375V21.875H39.8438C40.4654 21.875 41.0615 22.1219 41.501 22.5615C41.9406 23.001 42.1875 23.5971 42.1875 24.2188C42.1875 24.8404 41.9406 25.4365 41.501 25.876C41.0615 26.3156 40.4654 26.5625 39.8438 26.5625H26.5625V39.8438C26.5625 40.4654 26.3156 41.0615 25.876 41.501C25.4365 41.9406 24.8404 42.1875 24.2188 42.1875C23.5971 42.1875 23.001 41.9406 22.5615 41.501C22.1219 41.0615 21.875 40.4654 21.875 39.8438V26.5625H8.59375C7.97215 26.5625 7.37601 26.3156 6.93647 25.876C6.49693 25.4365 6.25 24.8404 6.25 24.2188C6.25 23.5971 6.49693 23.001 6.93647 22.5615C7.37601 22.1219 7.97215 21.875 8.59375 21.875H21.875V8.59375C21.875 7.97215 22.1219 7.37601 22.5615 6.93647C23.001 6.49693 23.5971 6.25 24.2188 6.25Z" fill="white" fill-opacity="0.65"/>
                </svg>
                Add new
            </div>
        `
        citizens.map((citizen) => {
            const { citizenname, citizenid, id, status } = citizen;
            document.querySelector('.details').innerHTML += `
                <section class='detail ${'citizen'+id}'>
                    <div class='flexsmall'>
                        ${citizenname}
                        <span> (ID:${citizenid}) </span>
                        <span class='${status.toLowerCase()}style allstyle'> ${status} </span>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="pointer" viewBox="0 0 20 20" fill="none" onclick="editIncidentCitizen(${id})">
                            <path d="M15.4863 7.73699L12.2307 4.51507L13.3031 3.4411C13.5968 3.14703 13.9576 3 14.3855 3C14.8135 3 15.174 3.14703 15.4671 3.4411L16.5396 4.51507C16.8332 4.80913 16.9864 5.16405 16.9992 5.57984C17.012 5.99562 16.8715 6.35028 16.5779 6.64384L15.4863 7.73699ZM14.3755 8.86849L6.25563 17H3V13.7397L11.1199 5.60822L14.3755 8.86849Z" fill="white" fill-opacity="0.65"/>
                        </svg>
                        <svg width="20" height="20" class="pointer" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" onclick="deleteCitizenFromIncident(${id})">
                            <path d="M15.8334 3.33333H12.9167L12.0834 2.5H7.91675L7.08341 3.33333H4.16675V5H15.8334M5.00008 15.8333C5.00008 16.2754 5.17568 16.6993 5.48824 17.0118C5.8008 17.3244 6.22472 17.5 6.66675 17.5H13.3334C13.7754 17.5 14.1994 17.3244 14.5119 17.0118C14.8245 16.6993 15.0001 16.2754 15.0001 15.8333V5.83333H5.00008V15.8333Z" fill="#F13333" fill-opacity="0.65"/>
                        </svg>
                    </div>
                </section>
            `
        })
    } else if ( detail == incidentOfficers ){
        document.querySelector('.main-title').textContent = `Involved Officers List`;
        document.querySelector('.detail-records').innerHTML = `
            <div class="details flexfull">
                <section class="flexdivs">
                    <div class="flexheading">
                        <p>Leading Officers</p>
                        <div class="flexheading-div"></div>
                    </div>
                    <div class="leadingofficersdetails"></div>
                    <div class="flexsmall grey pointer addnew" onclick="showModal('.leadingofficermodal')">
                        <svg width="24" height="24" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24.2188 6.25C24.8404 6.25 25.4365 6.49693 25.876 6.93647C26.3156 7.37601 26.5625 7.97215 26.5625 8.59375V21.875H39.8438C40.4654 21.875 41.0615 22.1219 41.501 22.5615C41.9406 23.001 42.1875 23.5971 42.1875 24.2188C42.1875 24.8404 41.9406 25.4365 41.501 25.876C41.0615 26.3156 40.4654 26.5625 39.8438 26.5625H26.5625V39.8438C26.5625 40.4654 26.3156 41.0615 25.876 41.501C25.4365 41.9406 24.8404 42.1875 24.2188 42.1875C23.5971 42.1875 23.001 41.9406 22.5615 41.501C22.1219 41.0615 21.875 40.4654 21.875 39.8438V26.5625H8.59375C7.97215 26.5625 7.37601 26.3156 6.93647 25.876C6.49693 25.4365 6.25 24.8404 6.25 24.2188C6.25 23.5971 6.49693 23.001 6.93647 22.5615C7.37601 22.1219 7.97215 21.875 8.59375 21.875H21.875V8.59375C21.875 7.97215 22.1219 7.37601 22.5615 6.93647C23.001 6.49693 23.5971 6.25 24.2188 6.25Z" fill="white" fill-opacity="0.65"/>
                        </svg>
                        Add new
                    </div>
                </section>
                <section class="flexdivs">
                    <div class="flexheading" >
                        <p>Officers</p>
                        <div class="flexheading-div"></div>
                    </div>
                    <div class="officersdetails"></div>
                    <div class="flexsmall grey pointer addnew" onclick="showModal('.officermodal')">
                        <svg width="24" height="24" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24.2188 6.25C24.8404 6.25 25.4365 6.49693 25.876 6.93647C26.3156 7.37601 26.5625 7.97215 26.5625 8.59375V21.875H39.8438C40.4654 21.875 41.0615 22.1219 41.501 22.5615C41.9406 23.001 42.1875 23.5971 42.1875 24.2188C42.1875 24.8404 41.9406 25.4365 41.501 25.876C41.0615 26.3156 40.4654 26.5625 39.8438 26.5625H26.5625V39.8438C26.5625 40.4654 26.3156 41.0615 25.876 41.501C25.4365 41.9406 24.8404 42.1875 24.2188 42.1875C23.5971 42.1875 23.001 41.9406 22.5615 41.501C22.1219 41.0615 21.875 40.4654 21.875 39.8438V26.5625H8.59375C7.97215 26.5625 7.37601 26.3156 6.93647 25.876C6.49693 25.4365 6.25 24.8404 6.25 24.2188C6.25 23.5971 6.49693 23.001 6.93647 22.5615C7.37601 22.1219 7.97215 21.875 8.59375 21.875H21.875V8.59375C21.875 7.97215 22.1219 7.37601 22.5615 6.93647C23.001 6.49693 23.5971 6.25 24.2188 6.25Z" fill="white" fill-opacity="0.65"/>
                        </svg>
                        Add new
                    </div>
                </section>
            </div>
        `
        officers.leadingOfficers.map((officer) => {
            const { officername, officerid, id } = officer;
            document.querySelector('.leadingofficersdetails').innerHTML += `
                <section class='detail ${'leadingofficer'+id}'>
                    <div class='flexsmall'>
                        ${officername}
                        <span> (ID:${officerid}) </span>
                        ${ officer.incidentcreator && `<div class="incidentcreator">Incident Creator</div>` }
                    </div>
                    <div>
                        <svg width="20" height="20" class="pointer" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" onclick="deleteLeadingOfficerFromIncident(${id})">
                            <path d="M15.8334 3.33333H12.9167L12.0834 2.5H7.91675L7.08341 3.33333H4.16675V5H15.8334M5.00008 15.8333C5.00008 16.2754 5.17568 16.6993 5.48824 17.0118C5.8008 17.3244 6.22472 17.5 6.66675 17.5H13.3334C13.7754 17.5 14.1994 17.3244 14.5119 17.0118C14.8245 16.6993 15.0001 16.2754 15.0001 15.8333V5.83333H5.00008V15.8333Z" fill="#F13333" fill-opacity="0.65"/>
                        </svg>
                    </div>
                </section>
            `
        })
        officers.otherOfficers.map((officer) => {
            const { officername, officerid, id } = officer;
            document.querySelector('.officersdetails').innerHTML += `
                <section class='detail ${'officer'+id}'>
                    <div class='flexsmall'>
                        ${officername}
                        <span> (ID:${officerid}) </span>
                    </div>
                    <div>
                        <svg width="20" height="20" class="pointer" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" onclick="deleteOfficerFromIncident(${id})">
                            <path d="M15.8334 3.33333H12.9167L12.0834 2.5H7.91675L7.08341 3.33333H4.16675V5H15.8334M5.00008 15.8333C5.00008 16.2754 5.17568 16.6993 5.48824 17.0118C5.8008 17.3244 6.22472 17.5 6.66675 17.5H13.3334C13.7754 17.5 14.1994 17.3244 14.5119 17.0118C14.8245 16.6993 15.0001 16.2754 15.0001 15.8333V5.83333H5.00008V15.8333Z" fill="#F13333" fill-opacity="0.65"/>
                        </svg>
                    </div>
                </section>
            `
        })
    }
}

const backToMainInfo = () => {
    document.querySelector('.main-info').classList.remove('hidden');
    document.querySelector('.detail-records').classList.add('hidden');
    document.querySelector('.backtomaininfo').classList.add('elementhidden');
    document.querySelector('.main-title').textContent = 'Main Information';
    secondDetail.map((detail) => {
        detail.classList.remove('detailactive')
    })
    firstDetailSub.map((detail) => {
        detail.classList.add('inactive');
    })
}

const viewAllIncidents = () => {
    singleincident.classList.remove('show');
    singleincident.classList.add('hidden');
    incidentsview.classList.remove('hidden');
    backToMainInfo();
}

// DELETE INCIDENT FUNCTIONS
const deleteIncident = () => {
    incidentsData = incidentsData.filter((incident) => incident.id != currentIncident)
    pushIncidents(incidentsData);
    singleincident.classList.remove('show');
    singleincident.classList.add('hidden');
    incidentsview.classList.remove('hidden');
    document.querySelector('#incidentdeletemodal').classList.add('hide');
}
// EDIT TITLE AND INFORMATION/DESCRIPTION
const saveIncidentTitleEdit = () => {
    let incident = incidentsData.filter((incd) => incd.id === currentIncident);
    if(document.querySelector('#main-info-title').value.toLowerCase() !== incident[0].title.toLowerCase()){
        incidentsData = incidentsData.map((incident) => {
            if (incident.id === currentIncident){
                incident.title = document.querySelector('#main-info-title').value
                return {...incident}
            } else return incident
        })
        showModal('#incidenteditsavemodal')
        viewIncident(currentIncident)
        pushIncidents(incidentsData)
    }
}
const saveIncidentInfoEdit = () => {
    let incident = incidentsData.filter((incd) => incd.id === currentIncident);
    if(document.querySelector('#main-info-text').value.toLowerCase() !== incident[0].description.toLowerCase()){
        incidentsData = incidentsData.map((incident) => {
            if (incident.id === currentIncident){
                incident.description = document.querySelector('#main-info-text').value
                return {...incident}
            } else return incident
        })
        showModal('#incidenteditsavemodal')
        viewIncident(currentIncident)
        pushIncidents(incidentsData)
    }
}
// EVIDENCE ADD/DELETE/EDIT 
const deleteEvidenceFromIncident = (id) => {
    document.querySelector(`.evidence${id}`).classList.add('hidden')
    incidentsData = incidentsData.map((incd) => {
        if (incd.id == currentIncident){
            let newincd = incd.evidences.filter((evid) => evid.id  !== id)
            return {...incd, evidences:newincd}
        } else{
            return {...incd}
        }
    })
    pushIncidents(incidentsData)
    viewIncident(currentIncident)
}
const editIncidentEvidence = (id) => {
    itemOnEdit = id
    showModal('.evidencemodal');
    incidentsData.map((incident) => {
        if(incident.id === currentIncident){
            let evidence = incident.evidences.filter((i) => i.id === id);
            document.querySelector('#selectedincidentevidence').value = evidence[0].evidencename;
            document.querySelector("#incident-evidence-imageURL").value = evidence[0].imageUrl ? evidence[0].imageUrl : "";
            document.querySelector("#incident-evidence-description").value = evidence[0].description ? evidence[0].description : "";
        }
    })
}
const addEvidenceToIncident = () => {
    cancelModal('.evidencemodal');
    if (document.querySelector('#selectedincidentevidence').value) {
        let evidence = document.querySelector('#selectedincidentevidence').value
        if(itemOnEdit){
            incidentsData.map((incident) => {
                if(incident.id === currentIncident){
                    incident.evidences.map((i) => {
                        if (i.id === itemOnEdit){
                            i.evidencename = evidence;
                            i.imageUrl = document.querySelector("#incident-evidence-imageURL").value;
                            i.description = document.querySelector("#incident-evidence-description").value;
                        }
                    });
                }
            })
            pushDetails(incidentEvidences)
            viewIncident(currentIncident)
            pushIncidents(incidentsData)
            itemOnEdit = ""
        } else {
            let values = {
                id: Math.round( 1102.7 * Math.random()),
                evidencename: evidence,
                imageUrl: document.querySelector("#incident-evidence-imageURL").value,
                description : document.querySelector("#incident-evidence-description").value,
                count: 1
            }
            incidentsData = incidentsData.map((incident) => {
                if (incident.id === currentIncident){
                    let check = incident.evidences.filter((evid) => evid.evidencename === values.evidencename);
                    if(check.length < 1){
                        incident.evidences.push(values)
                    }                    
                    return {...incident}
                } else return incident
            })
            pushDetails(incidentEvidences)
            viewIncident(currentIncident)
            pushIncidents(incidentsData)
        }
    }
    document.querySelector('#selectedincidentevidence').value = ""
    document.querySelector("#incident-evidence-description").value = ""
    document.querySelector("#incident-evidence-imageURL").value = ""
}
// VEHICLE ADD/DELETE/EDIT 
const deleteVehicleFromIncident = (id) => {
    document.querySelector(`.vehicle${id}`).classList.add('hidden')
    incidentsData = incidentsData.map((incd) => {
        if (incd.id == currentIncident){
            let newincd = incd.vehicles.filter((veh) => veh.id != id)
            return {...incd, vehicles:newincd}
        } else{
            return {...incd}
        }
    })
    pushIncidents(incidentsData)
    viewIncident(currentIncident)
}
const editIncidentVehicle = (id) => {
    itemOnEdit = id
    showModal('.vehiclemodal');
    incidentsData.map((incident) => {
        if(incident.id === currentIncident){
            let vehicle = incident.vehicles.filter((i) => i.id === id);
            document.querySelector('#selectedincidentvehicle').value = vehicle[0].vehicleid + ' | ' + vehicle[0].vehiclename
            document.querySelector("#incident-vehicle-description").value = vehicle[0].description ? vehicle[0].description : "";
        }
    })
}
const addVehicleToIncident = () => {
    cancelModal('.vehiclemodal');
    if (document.querySelector('#selectedincidentvehicle').value) {
        let vehicle = document.querySelector('#selectedincidentvehicle').value
        let splitted = vehicle.split('|')
        if(itemOnEdit){
            incidentsData.map((incident) => {
                if(incident.id === currentIncident){
                    incident.vehicles.map((i) => {
                        if (i.id === itemOnEdit){
                            i.vehicleid = splitted[0];
                            i.vehiclename = splitted[1];
                            i.description = document.querySelector("#incident-vehicle-description").value;
                        }
                    });
                }
            })
            pushDetails(incidentVehicles)
            viewIncident(currentIncident)
            pushIncidents(incidentsData)
            itemOnEdit = ""
        } else {
            let values = {
                id: Math.round( 1102.7 * Math.random()),
                vehicleid: splitted[0],
                vehiclename: splitted[1],
                description : document.querySelector("#incident-vehicle-description").value
            }
            incidentsData = incidentsData.map((incident) => {
                if (incident.id === currentIncident){
                    let check = incident.vehicles.filter((veh) => veh.vehicleid === values.vehicleid);
                    if(check.length < 1){
                        incident.vehicles.push(values)
                    }                    
                    return {...incident}
                } else return incident
            })
            pushDetails(incidentVehicles)
            viewIncident(currentIncident)
            pushIncidents(incidentsData)
        }
    }
    document.querySelector('#selectedincidentvehicle').value = "";
    document.querySelector("#incident-vehicle-description").value = "";
}
// OFFICER ADD/DELETE/EDIT 
const deleteLeadingOfficerFromIncident = (id) => {
    document.querySelector(`.leadingofficer${id}`).classList.add('hidden');
    incidentsData = incidentsData.map((incd) => {
        if (incd.id == currentIncident) {
            let incdofficer = incd.officers
            let newincd = incd.officers.leadingOfficers.filter((i) => i.id != id);
            return {...incd, officers:{...incdofficer, leadingOfficers: newincd}}
        } else{
            return {...incd}
        }
    })
    pushIncidents(incidentsData)
    viewIncident(currentIncident)
}
const addLeadingOfficerToIncident = () => {
    cancelModal('.leadingofficermodal');
    if (document.querySelector('#selectedincidentleadingofficer').value) {
        let officer = document.querySelector('#selectedincidentleadingofficer').value
        let splitted = officer.split('|')
        let values = {
            id: Math.round( 1102.7 * Math.random()),
            officerid: splitted[0],
            officername: splitted[1],
            description : document.querySelector("#incident-leadingofficer-description").value
        }
        incidentsData = incidentsData.map((incident) => {
            if (incident.id === currentIncident){
                let check = incident.officers.leadingOfficers.filter((off) => off.officerid === values.officerid);
                if(check.length < 1){
                    incident.officers.leadingOfficers.push(values)
                }                
                return {...incident}
            } else return incident
        })
        pushDetails(incidentOfficers)
        viewIncident(currentIncident)
        pushIncidents(incidentsData)
    }
    document.querySelector('#selectedincidentleadingofficer').value = "";
    document.querySelector("#incident-leadingofficer-description").value = "";
}
const deleteOfficerFromIncident = (id) => {
    document.querySelector(`.officer${id}`).classList.add('hidden');
    incidentsData = incidentsData.map((incd) => {
        if (incd.id == currentIncident){
            let incdofficer = incd.officers
            let newincd = incd.officers.otherOfficers.filter((veh) => veh.id != id)
            return {...incd, officers: {...incdofficer, otherOfficers: newincd} }
        } else{
            return {...incd}
        }
    })
    pushIncidents(incidentsData)
    viewIncident(currentIncident)
}
const addOfficerToIncident = () => {
    cancelModal('.officermodal');
    if (document.querySelector('#selectedincidentofficer').value) {
        let officer = document.querySelector('#selectedincidentofficer').value
        let splitted = officer.split('|')
        let values = {
            id: Math.round( 1102.7 * Math.random()),
            officerid: splitted[0],
            officername: splitted[1],
            description : document.querySelector("#incident-officer-description").value
        }
        incidentsData = incidentsData.map((incident) => {
            if (incident.id === currentIncident){
                let check = incident.officers.otherOfficers.filter((off) => off.officerid === values.officerid);
                if(check.length < 1){
                    incident.officers.otherOfficers.push(values)
                }
                return {...incident}
            } else return incident
        })
        pushDetails(incidentOfficers)
        viewIncident(currentIncident)
        pushIncidents(incidentsData)
    }
    document.querySelector('#selectedincidentofficer').value = "";
    document.querySelector("#incident-officer-description").value = "";
}
// CITIZEN ADD/DELETE/EDIT 
const deleteCitizenFromIncident = (id) => {
    document.querySelector(`.citizen${id}`) && document.querySelector(`.citizen${id}`).classList.add('hidden')
    incidentsData = incidentsData.map((incd) => {
        if (incd.id == currentIncident){
            let newincd = incd.citizens.filter((veh) => veh.id != id)
            return {...incd, citizens:newincd}
        } else{
            return {...incd}
        }
    })
    pushIncidents(incidentsData)
    viewIncident(currentIncident)
}
const editIncidentCitizen = (id) => {
    itemOnEdit = id;
    showModal('.citizenmodal');
    incidentsData.map((incident) => {
        if(incident.id === currentIncident){
            let citizen = incident.citizens.filter((i) => i.id === id);
            document.querySelector('#selectedincidentcitizen').value = citizen[0].citizenid + ' | ' + citizen[0].citizenname
            document.querySelector("#incident-citizen-description").value = citizen[0].description ? citizen[0].description : "";
            document.querySelector('#selectedincidentcitizenstatus').value = citizen[0].status
            document.querySelector('#incident-citizen-status-imageURL').value = citizen[0].imageUrl
        }
    })
}
const addCitizenToIncident = () => {
    cancelModal('.citizenmodal');
    if (document.querySelector('#selectedincidentcitizen').value) {
        let citizen = document.querySelector('#selectedincidentcitizen').value
        let splitted = citizen.split('|')
        if(itemOnEdit){
            incidentsData.map((incident) => {
                if(incident.id === currentIncident){
                    incident.citizens.map((i) => {
                        if (i.id === itemOnEdit){
                            i.citizenid = splitted[0];
                            i.citizenname = splitted[1];
                            i.description = document.querySelector("#incident-citizen-description").value;
                            i.imageUrl = document.querySelector('#incident-citizen-status-imageURL').value;
                            i.status = document.querySelector('#selectedincidentcitizenstatus').value;
                        }
                    });
                }
            })
            pushDetails(incidentCitizens)
            viewIncident(currentIncident)
            pushIncidents(incidentsData)
            itemOnEdit = ""
        } else {
            let values = {
                id: Math.round( 1102.7 * Math.random()),
                imageUrl : document.querySelector('#incident-citizen-status-imageURL').value,
                citizenid: splitted[0],
                citizenname: splitted[1],
                description : document.querySelector("#incident-citizen-description").value,
                status: document.querySelector('#selectedincidentcitizenstatus').value
            }
            incidentsData = incidentsData.map((incident) => {
                if (incident.id === currentIncident){
                    let check = incident.citizens.filter((cit) => cit.citizenid === values.citizenid);
                    if(check.length < 1){
                        incident.citizens.push(values)
                    }
                    return {...incident}
                } else return incident
            })
            pushDetails(incidentCitizens)
            viewIncident(currentIncident)
            pushIncidents(incidentsData)
        }
    }
    document.querySelector('#selectedincidentcitizen').value = ""
    document.querySelector('#incident-citizen-status-imageURL').value = ""
    document.querySelector("#incident-citizen-description").value = ""
    document.querySelector('#selectedincidentcitizenstatus').value = ""
}

// REPORTS FUNCTIONALITIES
const reportsmain = document.querySelector('.reports-main');
const reportsevidence = document.querySelector('#reportsevidence');
const cancelreportsevidence = document.querySelector('#cancelreportsevidence');
const savereportevidence = document.querySelector('#reportevidencesave');
const reportspersonmodal = document.querySelector('#reportspersonmodal');
const cancelreportsperson = document.querySelector('#cancelreportsperson')
const reportspersonfind = document.querySelector('#reportspersonfind')
const addreportevidence = document.querySelector('#addreportevidence')
const addreportperson = document.querySelector('#addreportperson');
const reportsearch = document.querySelector('#reportsearch');
// REPORTS DATA
let reportsData = [
    {
        reportType: "Investigative report",
        id: 155,
        title: '10-90 | Robbery',
        description: 'Caucasian Male',
        time: '13 minutes',
        name: 'alexa death',
        officers: {
            leadingOfficers: [],
            otherOfficers: []
        },
        citizens: [
            {
                citizenname: "Tiana June",
                imageUrl: "images/character2.png",
                description: "that dude killed me",
                status: "victim",
                citizenid: 124,
                id: 1
            },
            {
                citizenname: "John Looker",
                imageUrl: "images/character.png",
                description: "lorem ipsum in jusbt time",
                status: "eyewitness",
                citizenid: 234,
                id: 2
            },
        ],
        vehicles: [],
        evidences: [],
        suspect: {
            name: "",
            imageUrl: "images/character1.png",
            description: ""
        },
    },
    {
        reportType: "Victim report",
        id: 156,
        title: '10-90 | Assault',
        description: 'Madman',
        time: '15 minutes',
        name: 'texda death',
        evidences: [
            {
                evidencename: 'cucumber',
                count: 5,
                id: 1
            },
            {
                evidencename: 'gun',
                count: 1,
                id: 2 
            }
        ],
        vehicles: [
            {
                id: 1,
                vehiclename: "Audi R8",
                vehicleid: "PC236127FFI"
            },
            {
                id: 2,
                vehiclename: "Audi R8",
                vehicleid: "PC23612678I"
            },
        ],
        officers: {
            leadingOfficers: [
                {
                    id: 1,
                    officername: "adams ressler",
                    officerid : "567",
                    incidentcreator: true
                },
            ],
            otherOfficers: [
                {
                    id: 1,
                    officername: "adams ressler",
                    officerid : "545",
                },
                {
                    id: 2,
                    officername: "adams ressler",
                    officerid : "548",
                },
            ]
        },
        citizens: [
            {
                id: 1,
                citizenname: "John Doe",
                citizenid: 156,
                status: "victim",
                imageUrl : "",
                description: "Mad testing sha, it willl workk"
            },
            {
                id: 2,
                citizenname: "Jane Doe",
                citizenid: 157,
                status: "eyewitness",
                imageUrl : "images/character1.png",
                description: "Mad testing sha, it willl workk"
            },
            {
                id: 3,
                citizenname: "Achmaad",
                citizenid: 267,
                status: "suspect",
                imageUrl : "",
                description: "Mad testing sha, it willl workk"
            }
        ]
    },
].reverse()
// FETCH / RENDERS DATA TO HTML
const pushReports = (data) => {
    reportsmain.innerHTML = '';
    data.map((item) => {
        const { id, title, time, name, reportType } = item;
        reportsmain.innerHTML += `
        <section  class="incident">
            <h4 class="incident-title">${title}</h4>
            <div class="information">${reportType} <p class="dot"></p> id: ${id}</div>
            <div class="timebox pointer" onclick="viewReport(${id})"> 
            <svg  xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path class="smalledit" d="M8.65 3.4625L6.525 1.3625L7.225 0.6625C7.41667 0.470833 7.65217 0.375 7.9315 0.375C8.21083 0.375 8.44617 0.470833 8.6375 0.6625L9.3375 1.3625C9.52917 1.55417 9.62917 1.7855 9.6375 2.0565C9.64583 2.3275 9.55417 2.55867 9.3625 2.75L8.65 3.4625ZM7.925 4.2L2.625 9.5H0.5V7.375L5.8 2.075L7.925 4.2Z" />
            </svg>
                <p> ${name} - ${time} ago </p> 
            </div>
        </section>
        `
    })
}
pushReports(reportsData);
// SEARCH REPORTS
reportsearch.addEventListener('input', () => {
    let searchvalue = reportsearch.value
    if (!searchvalue) pushReports(reportsData)
    let data = reportsData.filter((report) => report.title.toLowerCase().includes(searchvalue.toLowerCase()) || report.description.toLowerCase().includes(searchvalue.toLowerCase()) || report.name.toLowerCase().includes(searchvalue.toLowerCase()) || report.id.toString().includes(searchvalue));
    pushReports(data)
})
// VIEW ALL REPORTS
const reportsAdd = () => {
    document.querySelector('.reports-main').classList.remove('reports-grid');
    document.querySelector('.newreportscreen').classList.remove('hidden');
    document.querySelector('.reportadd').classList.add('hidden');
}
let newreport = {
    reportType: "",
    id: "",
    title: "",
    description: "",
    time: '13 minutes',
    name: loggedOfficer.name,
    evidences: [],
    vehicles: [],
    officers: {
        leadingOfficers: [
            {
                id: 1,
                officername: loggedOfficer.name,
                officerid : "567",
                incidentcreator: true
            },
        ],
        otherOfficers: []
    },
    citizens: []
}
document.getElementById('newreporttitle').addEventListener('input', (event) => {
    newreport.title = event.target.value
})
document.getElementById('newreportdescription').addEventListener('input', (event) => {
    newreport.description = event.target.value;
})
// REPORTS ADD EVIDENCE FUNCTIONALITIES
const evidenceReportSub = () => {
    document.querySelector('.reportevidenceheader').classList.toggle('addcriminalactive')
    document.querySelector('.plusreportevidence').classList.toggle('elementhidden')
    document.querySelector('.evidencereport').classList.toggle('hidevehicle')
    document.querySelector('#evidencereporticon').classList.toggle('addiconactive')
}
addreportevidence.addEventListener('click', () => {
    reportsevidence.classList.remove('hide')
})
cancelreportsevidence.addEventListener('click', () => {
    reportsevidence.classList.add('hide')
})
savereportevidence.addEventListener('click', () => {
    if(document.querySelector('#selectednewreportevidence').value){
        let values = {
            evidencename: document.querySelector('#selectednewreportevidence').value,
            description : document.querySelector("#newreportevidence-description").value,
            imageUrl: "",
            count: 1
        }
        let check = newreport.evidences.filter((evid) => evid.evidencename === values.evidencename);
        if(check.length < 1){
            newreport.evidences.push(values)
            document.getElementById('addedreportevidences').innerHTML += `
            <div class="subpickedcontent">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1.1665 1.75H12.8332V4.08333H1.1665V1.75ZM11.0832 4.66667H1.74984V11.0833C1.74984 11.3928 1.87275 11.6895 2.09155 11.9083C2.31034 12.1271 2.60708 12.25 2.9165 12.25H11.0832C11.3926 12.25 11.6893 12.1271 11.9081 11.9083C12.1269 11.6895 12.2498 11.3928 12.2498 11.0833V4.66667H11.0832ZM9.33317 8.16667H4.6665V7H9.33317V8.16667Z" fill="white"/>
                </svg>
                <p> ${values.evidencename} </p>
            </div>
            `
        }
        reportsevidence.classList.add('hide')
        document.querySelector("#newreportevidence-description").value = ''
        document.querySelector('#selectednewreportevidence').value = ''
        document.getElementById('selectednewreportevidence').classList.remove('uppercase')
    }  
})
// REPORTS ADD PERSON FUNCTIONALITY
const personReportSub = () => {
    document.querySelector('.reportpersonheader').classList.toggle('addcriminalactive')
    document.querySelector('.plusreportperson').classList.toggle('elementhidden')
    document.querySelector('.personreport').classList.toggle('hidevehicle')
    document.querySelector('#personreporticon').classList.toggle('addiconactive')
}
addreportperson.addEventListener('click', () => {
    reportspersonmodal.classList.remove('hide')
})
cancelreportsperson.addEventListener('click', () => {
    reportspersonmodal.classList.add('hide')
})
reportspersonfind.addEventListener('click', () => {
    if(document.querySelector('#selectedreportperson').value){
        let fulldetail = document.querySelector('#selectedreportperson').value
        let split = fulldetail.split('|')
        let values = {
            citizenid: split[0],
            citizenname: split[1],
            description : document.querySelector("#reportperson-description").value,
            imageUrl : document.querySelector("#reportperson-imageURL").value,
            status: document.querySelector('#selectedreportpersonstatus').value
        }
        let check = newreport.citizens.filter((cit) => cit.citizenid === values.citizenid);
        if(check.length < 1){
            newreport.citizens.push(values)
            document.getElementById('addedreportpersons').innerHTML += `
            <div class="subpickedcontent">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <g clip-path="url(#clip0_9628_62454)">
                        <path d="M11.9038 9.53594C11.2789 8.85889 10.5206 8.31857 9.67659 7.94901C8.83261 7.57946 7.92124 7.38867 6.99989 7.38867C6.07854 7.38867 5.16718 7.57946 4.32319 7.94901C3.47921 8.31857 2.72089 8.85889 2.096 9.53594C1.99953 9.64262 1.94556 9.781 1.94434 9.92483V12.2582C1.94638 12.4115 2.00874 12.5579 2.11792 12.6656C2.22709 12.7733 2.3743 12.8337 2.52767 12.8337H11.4721C11.6268 12.8337 11.7752 12.7723 11.8846 12.6629C11.994 12.5535 12.0554 12.4051 12.0554 12.2504V9.91705C12.0523 9.77591 11.9985 9.64062 11.9038 9.53594Z" fill="white"/>
                        <path d="M7.00005 6.61144C8.5035 6.61144 9.72228 5.39266 9.72228 3.88921C9.72228 2.38577 8.5035 1.16699 7.00005 1.16699C5.49661 1.16699 4.27783 2.38577 4.27783 3.88921C4.27783 5.39266 5.49661 6.61144 7.00005 6.61144Z" fill="white"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_9628_62454">
                            <rect width="14" height="14" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>            
            <p> ${fulldetail} </p>
            </div>
            `
        }
        reportspersonmodal.classList.add('hide')
        document.querySelector('#selectedreportperson').value = ''
        document.getElementById('selectedreportperson').classList.remove('uppercase');
        document.querySelector('#selectedreportpersonstatus').value = ''
        document.querySelector("#reportperson-description").value = ''
        document.querySelector("#reportperson-imageURL").value = ''
    }  
})
// ADD OFFICER TO REPORT
const officerReportSub = () => {
    document.querySelector('.reportofficerheader').classList.toggle('addcriminalactive')
    document.querySelector('.plusreportofficer').classList.toggle('elementhidden')
    document.querySelector('.officerreport').classList.toggle('hidevehicle')
    document.querySelector('#officerreporticon').classList.toggle('addiconactive')
}
const officerReportAdd = () => {
    if(document.querySelector('#selectedreportofficer').value){
        let fulldetail = document.querySelector('#selectedreportofficer').value
        let split = fulldetail.split('|')
        let values = {
            id: Math.round( 100 * Math.random()),
            officerid: split[0],
            officername: split[1], 
            description : document.querySelector("#reportofficer-description").value
        }
        let check = newreport.officers.otherOfficers.filter((off) => off.officerid === values.officerid);
        if(check.length < 1){
            newreport.officers.otherOfficers.push(values);
            document.getElementById('addedreportofficers').innerHTML += `
            <div class="subpickedcontent">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M8.45833 7.34384L8.82583 8.93634C8.88417 9.18717 8.61 9.38551 8.38833 9.25134L7 8.41134L5.60583 9.25134C5.55669 9.28116 5.49986 9.29585 5.44242 9.29359C5.38499 9.29132 5.32949 9.27221 5.28284 9.23862C5.23619 9.20504 5.20046 9.15847 5.1801 9.10471C5.15974 9.05096 5.15565 8.9924 5.16833 8.93634L5.54167 7.34967L4.31667 6.29384C4.27265 6.25663 4.24065 6.20722 4.2247 6.15184C4.20874 6.09646 4.20956 6.03759 4.22703 5.98267C4.24451 5.92775 4.27786 5.87924 4.32288 5.84326C4.36791 5.80728 4.42258 5.78544 4.48 5.78051L6.10167 5.64051L6.73167 4.14717C6.83083 3.90801 7.16917 3.90801 7.26833 4.14717L7.89833 5.63467L9.52 5.77467C9.57742 5.77961 9.63209 5.80144 9.67712 5.83742C9.72214 5.8734 9.75549 5.92192 9.77297 5.97684C9.79044 6.03176 9.79125 6.09062 9.7753 6.146C9.75935 6.20139 9.72735 6.2508 9.68333 6.28801L8.45833 7.34384ZM2.44417 2.60717C2.02417 2.79384 1.75 3.21384 1.75 3.67467V6.41634C1.75 9.65384 3.99 12.6813 7 13.4163C10.01 12.6813 12.25 9.65384 12.25 6.41634V3.67467C12.25 3.21384 11.9758 2.79384 11.5558 2.60717L7.4725 0.793008C7.16917 0.658841 6.825 0.658841 6.5275 0.793008L2.44417 2.60717Z" fill="white"/>
                </svg>            
                <p> ${fulldetail} </p>
            </div>
            `
        }
        cancelModal('#reportofficermodal');
        document.querySelector('#selectedreportofficer').value = ''
        document.querySelector("#reportofficer-description").value = ''
        document.getElementById('selectedreportofficer').classList.remove('uppercase')
    }  
}
// ADD VEHICLES TO REPORT
const addReportVehicles = () => {
    document.querySelector('.reportvehicleheader').classList.toggle('addcriminalactive')
    document.querySelector('.plusreportvehicle').classList.toggle('elementhidden')
    document.querySelector('.vehiclesreport').classList.toggle('hidevehicle')
    document.querySelector('#addreportvehicle').classList.toggle('addiconactive')
}
const addReportVehicle = () => {
    document.querySelector('#reportvehiclemodal').classList.remove('hide')
}
const cancelVehicleReport = () => {
    document.querySelector('#reportvehiclemodal').classList.add('hide')
}
const vehicleReportAdd = () => {
    if(document.querySelector('#selectedreportvehicle').value){
        let vname = document.querySelector('#selectedreportvehicle').value
        let split = vname.split('|')
        let values = {
            id: Math.round( 100 * Math.random()),
            vehiclename: split[1],
            vehicleid: split[0],
            description : document.querySelector("#reportvehicle-description").value
        }
        let check = newreport.vehicles.filter((veh) => veh.vehicleid === values.vehicleid);
        if(check.length < 1){
            newreport.vehicles.push(values)
            document.getElementById('addedreportvehicles').innerHTML += `
            <div class="subpickedcontent">
                <img src="images/vehicle.svg" alt="vehicle icon">
                <p> ${vname} </p>
            </div>
            `
        } else {}
        document.querySelector('#reportvehiclemodal').classList.add('hide')
        document.querySelector('#selectedreportvehicle').value = ''
        document.getElementById('selectedreportvehicle').classList.remove('uppercase')
        document.querySelector("#reportvehicle-description").value = ''
    }  
}
// REFRESH NEW REPORT FORM
const refreshReportForm = () => {
    document.getElementById('addedreportvehicles').innerHTML = ""
    document.getElementById('addedreportofficers').innerHTML = ""
    document.getElementById('addedreportpersons').innerHTML = ""
    document.getElementById('addedreportevidences').innerHTML = ""
    document.getElementById('newreporttitle').value = ""
    document.getElementById('newreportdescription').value = ""
    document.getElementById('selectedreport').value = ""
}
// SAVE AND ADD NEW REPORT
const saveNewReport = () => {
    newreport.id = Math.round( 1000 * Math.random());
    newreport.reportType = document.getElementById('selectedreport').value;
    reportsData.unshift(newreport)
    pushReports(reportsData);
    refreshReportForm();
    newreport = {
        reportType: "",
        id: "",
        title: "",
        description: "",
        time: '13 minutes',
        name: loggedOfficer.name,
        evidences: [],
        vehicles: [],
        officers: {
            leadingOfficers: [
                {
                    id: 1,
                    officername: loggedOfficer.name,
                    officerid : "567",
                    incidentcreator: true
                },
            ],
            otherOfficers: []
        },
        citizens: []
    }
}
// VIEW SINGLE REPORT
const singlereport = document.querySelector('.singlereport');
const reportsview = document.querySelector('.reportscont');
const reportEvidences = document.querySelector('.reportevidences');
const reportVehicles = document.querySelector('.reportvehicles');
const reportOfficers = document.querySelector('.reportofficers');
const reportCitizens = document.querySelector('.reportcitizens');
const reportsuspects = document.querySelector('.report-suspects');
const reportvictims = document.querySelector('.report-victims');
const reportwitnesses = document.querySelector('.report-witnesses');
const reportFirstDetailSub = [ reportsuspects, reportvictims, reportwitnesses ];
const secondReportDetail = [ reportCitizens,reportEvidences, reportVehicles, reportOfficers ];
let currentReport;
const viewReport = (reportId) => {
    let report = reportsData.filter((rep) => rep.id === reportId);
    currentReport = reportId
    singlereport.classList.add('show');
    singlereport.classList.remove('hidden');
    reportsview.classList.add('hidden');
    if (report) {
        const { id, description, time, officers, citizens, evidences, vehicles, title, reportType} = report[0];
        document.querySelector('.reportId').textContent = id;
        document.querySelector('.reportsubId').textContent = `ID ${id}`;
        document.querySelector('.reportInfo').textContent = reportType;
        document.querySelector('.reportlast-modified-span').innerHTML = ` ${time} ago `;
        reportsuspects.lastElementChild.textContent = citizens.filter((cit) => cit.status.toLowerCase() === "suspect").length
        reportvictims.lastElementChild.textContent = citizens.filter((cit) => cit.status.toLowerCase() === "victim").length
        reportwitnesses.lastElementChild.textContent = citizens.filter((cit) => cit.status.toLowerCase() === "eyewitness").length
        document.querySelector('.reportevidences-records').textContent = evidences.length;
        document.querySelector('.reportvehicles-records').textContent = vehicles.length;
        document.querySelector('.reportofficers-records').textContent = officers.otherOfficers ?  officers.leadingOfficers.length + officers.otherOfficers.length : 0;
        document.querySelector('.reportcitizens-records').textContent = citizens.length;
        document.querySelector('.report-citizens-box').innerHTML = ""
        reportFirstDetailSub.map((detail) => {
            let filteredCitizens = citizens
            detail.addEventListener('click',() => {
                document.querySelector('.report-citizens-box').innerHTML = ""
                detail.classList.remove('inactive');
                if(detail === reportsuspects) {filteredCitizens = citizens.filter((cit) => cit.status.toLowerCase() === "suspect")}
                else if(detail === reportvictims) {filteredCitizens = citizens.filter((cit) => cit.status.toLowerCase() === "victim")}
                else if(detail === reportwitnesses) {filteredCitizens = citizens.filter((cit) => cit.status.toLowerCase() === "eyewitness")}
                pushFilteredCitizens(filteredCitizens, '.report-citizens-box')
                let restdetails = reportFirstDetailSub.filter((i) => i !== detail);
                restdetails.map((i) => {
                    i.classList.add('inactive');
                })
            })
        })
        pushFilteredCitizens(citizens, '.report-citizens-box')
        secondReportDetail.map((detail) => {
            detail.addEventListener('click', () => {
                pushReportSecondDetails(detail);
            })
        })
        document.querySelector('.report-main-info-title').value = title;
        document.querySelector('.report-main-info-text').value = description;    
    }
}
const pushFilteredCitizens = (data, box) => {
    data.map((cit) => {
        document.querySelector(box).innerHTML += `
        <div class="warrant">
            <div class='imagecont'>
                <img src=${cit.imageUrl ? cit.imageUrl : 'images/nophotoblack.png'} alt="suspect-image" class="warrant-image"></img>  
            </div>
            <div class=""> 
                <p class='suspectname'>${cit.citizenname}</p>
                <div class="information"> ${cit.description.slice(0, 50) + '....'}</div>
                <section class="status-div">
                <div class="flexlittle reducedbtn">
                    <div class="incident-edit pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none" onclick=${ box.includes('report') ? `editReportCitizen(${cit.id})` : `editIncidentCitizen(${cit.id})`}>
                            <path d="M11.2583 5.20658L8.77917 2.75658L9.59583 1.93991C9.81944 1.7163 10.0942 1.60449 10.4201 1.60449C10.746 1.60449 11.0205 1.7163 11.2437 1.93991L12.0604 2.75658C12.284 2.98019 12.4007 3.25008 12.4104 3.56624C12.4201 3.88241 12.3132 4.1521 12.0896 4.37533L11.2583 5.20658ZM10.4125 6.06699L4.22917 12.2503H1.75V9.77116L7.93333 3.58783L10.4125 6.06699Z" fill="white" fill-opacity="0.5"/>
                        </svg>
                    </div>
                    <div class="incident-trash pointer">
                        <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" onclick=${ box.includes('report') ? `deleteCitizenFromReport(${cit.id})` : `deleteCitizenFromIncident(${cit.id})`}>
                            <path d="M15.8334 3.33333H12.9167L12.0834 2.5H7.91675L7.08341 3.33333H4.16675V5H15.8334M5.00008 15.8333C5.00008 16.2754 5.17568 16.6993 5.48824 17.0118C5.8008 17.3244 6.22472 17.5 6.66675 17.5H13.3334C13.7754 17.5 14.1994 17.3244 14.5119 17.0118C14.8245 16.6993 15.0001 16.2754 15.0001 15.8333V5.83333H5.00008V15.8333Z" fill="#F13333" fill-opacity="0.65"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
        ` 
    })
}

const pushReportSecondDetails = (detail) => {
    let report = reportsData.filter((rep) => rep.id === currentReport);
    const {vehicles, officers, evidences, citizens} = report[0]
    detail.classList.add('detailactive');
    let restDetails = secondReportDetail.filter((item) => item !== detail);
    restDetails.map((item) => item.classList.remove('detailactive'));
    document.querySelector('.report-main-info').classList.add('hidden');
    document.querySelector('.report-detail-records').classList.remove('hidden');
    document.querySelector('.backtomaininforeport').classList.remove('elementhidden');
    document.querySelector('.report-details').innerHTML = ''
    if ( detail == reportEvidences ){
        document.querySelector('.report-main-title').textContent = `Involved Evidences List`;
        document.querySelector('.report-detail-records').innerHTML = `
            <div class="report-details"></div>
            <div class="flexsmall grey pointer addnew" onclick="showModal('.reportevidencemodal')">
                <svg width="24" height="24" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.2188 6.25C24.8404 6.25 25.4365 6.49693 25.876 6.93647C26.3156 7.37601 26.5625 7.97215 26.5625 8.59375V21.875H39.8438C40.4654 21.875 41.0615 22.1219 41.501 22.5615C41.9406 23.001 42.1875 23.5971 42.1875 24.2188C42.1875 24.8404 41.9406 25.4365 41.501 25.876C41.0615 26.3156 40.4654 26.5625 39.8438 26.5625H26.5625V39.8438C26.5625 40.4654 26.3156 41.0615 25.876 41.501C25.4365 41.9406 24.8404 42.1875 24.2188 42.1875C23.5971 42.1875 23.001 41.9406 22.5615 41.501C22.1219 41.0615 21.875 40.4654 21.875 39.8438V26.5625H8.59375C7.97215 26.5625 7.37601 26.3156 6.93647 25.876C6.49693 25.4365 6.25 24.8404 6.25 24.2188C6.25 23.5971 6.49693 23.001 6.93647 22.5615C7.37601 22.1219 7.97215 21.875 8.59375 21.875H21.875V8.59375C21.875 7.97215 22.1219 7.37601 22.5615 6.93647C23.001 6.49693 23.5971 6.25 24.2188 6.25Z" fill="white" fill-opacity="0.65"/>
                </svg>
                Add new
            </div>
        `
        evidences.map((evid) => {
            const { evidencename, count, id } = evid;
            document.querySelector('.report-details').innerHTML += `
                <section class='detail ${'reportevidence'+id}'>
                    <div class='flexsmall'>
                        ${evidencename}
                        <p> ${count}x </p>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="pointer" viewBox="0 0 20 20" fill="none" onclick="editReportEvidence(${id})">
                            <path d="M15.4863 7.73699L12.2307 4.51507L13.3031 3.4411C13.5968 3.14703 13.9576 3 14.3855 3C14.8135 3 15.174 3.14703 15.4671 3.4411L16.5396 4.51507C16.8332 4.80913 16.9864 5.16405 16.9992 5.57984C17.012 5.99562 16.8715 6.35028 16.5779 6.64384L15.4863 7.73699ZM14.3755 8.86849L6.25563 17H3V13.7397L11.1199 5.60822L14.3755 8.86849Z" fill="white" fill-opacity="0.65"/>
                        </svg>
                        <svg width="20" height="20" class="pointer" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" onclick="deleteEvidenceFromReport(${id})">
                            <path d="M15.8334 3.33333H12.9167L12.0834 2.5H7.91675L7.08341 3.33333H4.16675V5H15.8334M5.00008 15.8333C5.00008 16.2754 5.17568 16.6993 5.48824 17.0118C5.8008 17.3244 6.22472 17.5 6.66675 17.5H13.3334C13.7754 17.5 14.1994 17.3244 14.5119 17.0118C14.8245 16.6993 15.0001 16.2754 15.0001 15.8333V5.83333H5.00008V15.8333Z" fill="#F13333" fill-opacity="0.65"/>
                        </svg>
                    </div>
                </section>
            `
        })
    } else if( detail == reportVehicles ){
        document.querySelector('.report-main-title').textContent = `Involved Vehicles List`;
        document.querySelector('.report-detail-records').innerHTML = `
            <div class="report-details"></div>
            <div class="flexsmall grey pointer addnew" onclick="showModal('.reportvehiclemodal')">
                <svg width="24" height="24" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.2188 6.25C24.8404 6.25 25.4365 6.49693 25.876 6.93647C26.3156 7.37601 26.5625 7.97215 26.5625 8.59375V21.875H39.8438C40.4654 21.875 41.0615 22.1219 41.501 22.5615C41.9406 23.001 42.1875 23.5971 42.1875 24.2188C42.1875 24.8404 41.9406 25.4365 41.501 25.876C41.0615 26.3156 40.4654 26.5625 39.8438 26.5625H26.5625V39.8438C26.5625 40.4654 26.3156 41.0615 25.876 41.501C25.4365 41.9406 24.8404 42.1875 24.2188 42.1875C23.5971 42.1875 23.001 41.9406 22.5615 41.501C22.1219 41.0615 21.875 40.4654 21.875 39.8438V26.5625H8.59375C7.97215 26.5625 7.37601 26.3156 6.93647 25.876C6.49693 25.4365 6.25 24.8404 6.25 24.2188C6.25 23.5971 6.49693 23.001 6.93647 22.5615C7.37601 22.1219 7.97215 21.875 8.59375 21.875H21.875V8.59375C21.875 7.97215 22.1219 7.37601 22.5615 6.93647C23.001 6.49693 23.5971 6.25 24.2188 6.25Z" fill="white" fill-opacity="0.65"/>
                </svg>
                Add new
            </div>
        `
        vehicles.map((vehic) => {
            const { vehiclename, vehicleid, id } = vehic;
            document.querySelector('.report-details').innerHTML += `
                <section class='detail ${'reportvehicle'+id}'>
                    <div class='flexsmall'>
                        ${vehiclename}
                        <p> ${vehicleid} </p>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="pointer" viewBox="0 0 20 20" fill="none" onclick="editReportVehicle(${id})">
                            <path d="M15.4863 7.73699L12.2307 4.51507L13.3031 3.4411C13.5968 3.14703 13.9576 3 14.3855 3C14.8135 3 15.174 3.14703 15.4671 3.4411L16.5396 4.51507C16.8332 4.80913 16.9864 5.16405 16.9992 5.57984C17.012 5.99562 16.8715 6.35028 16.5779 6.64384L15.4863 7.73699ZM14.3755 8.86849L6.25563 17H3V13.7397L11.1199 5.60822L14.3755 8.86849Z" fill="white" fill-opacity="0.65"/>
                        </svg>
                        <svg width="20" height="20" class="pointer" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" onclick="deleteVehicleFromReport(${id})">
                            <path d="M15.8334 3.33333H12.9167L12.0834 2.5H7.91675L7.08341 3.33333H4.16675V5H15.8334M5.00008 15.8333C5.00008 16.2754 5.17568 16.6993 5.48824 17.0118C5.8008 17.3244 6.22472 17.5 6.66675 17.5H13.3334C13.7754 17.5 14.1994 17.3244 14.5119 17.0118C14.8245 16.6993 15.0001 16.2754 15.0001 15.8333V5.83333H5.00008V15.8333Z" fill="#F13333" fill-opacity="0.65"/>
                        </svg>
                    </div>
                </section>
            `
        })
    } else if ( detail == reportCitizens ){
        document.querySelector('.report-main-title').textContent = `Involved Citizens List`;
        document.querySelector('.report-detail-records').innerHTML = `
            <div class="report-details"></div>
            <div class="flexsmall grey pointer addnew" onclick="showModal('.reportcitizenmodal')">
                <svg width="24" height="24" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.2188 6.25C24.8404 6.25 25.4365 6.49693 25.876 6.93647C26.3156 7.37601 26.5625 7.97215 26.5625 8.59375V21.875H39.8438C40.4654 21.875 41.0615 22.1219 41.501 22.5615C41.9406 23.001 42.1875 23.5971 42.1875 24.2188C42.1875 24.8404 41.9406 25.4365 41.501 25.876C41.0615 26.3156 40.4654 26.5625 39.8438 26.5625H26.5625V39.8438C26.5625 40.4654 26.3156 41.0615 25.876 41.501C25.4365 41.9406 24.8404 42.1875 24.2188 42.1875C23.5971 42.1875 23.001 41.9406 22.5615 41.501C22.1219 41.0615 21.875 40.4654 21.875 39.8438V26.5625H8.59375C7.97215 26.5625 7.37601 26.3156 6.93647 25.876C6.49693 25.4365 6.25 24.8404 6.25 24.2188C6.25 23.5971 6.49693 23.001 6.93647 22.5615C7.37601 22.1219 7.97215 21.875 8.59375 21.875H21.875V8.59375C21.875 7.97215 22.1219 7.37601 22.5615 6.93647C23.001 6.49693 23.5971 6.25 24.2188 6.25Z" fill="white" fill-opacity="0.65"/>
                </svg>
                Add new
            </div>
        `
        citizens.map((citizen) => {
            const { citizenname, citizenid, id, status } = citizen;
            document.querySelector('.report-details').innerHTML += `
                <section class='detail ${'reportcitizen'+id}'>
                    <div class='flexsmall'>
                        ${citizenname}
                        <span> (ID:${citizenid}) </span>
                        <span class='${status.toLowerCase()}style allstyle'> ${status} </span>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="pointer" viewBox="0 0 20 20" fill="none" onclick="editReportCitizen(${id})">
                            <path d="M15.4863 7.73699L12.2307 4.51507L13.3031 3.4411C13.5968 3.14703 13.9576 3 14.3855 3C14.8135 3 15.174 3.14703 15.4671 3.4411L16.5396 4.51507C16.8332 4.80913 16.9864 5.16405 16.9992 5.57984C17.012 5.99562 16.8715 6.35028 16.5779 6.64384L15.4863 7.73699ZM14.3755 8.86849L6.25563 17H3V13.7397L11.1199 5.60822L14.3755 8.86849Z" fill="white" fill-opacity="0.65"/>
                        </svg>
                        <svg width="20" height="20" class="pointer" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" onclick="deleteCitizenFromReport(${id})">
                            <path d="M15.8334 3.33333H12.9167L12.0834 2.5H7.91675L7.08341 3.33333H4.16675V5H15.8334M5.00008 15.8333C5.00008 16.2754 5.17568 16.6993 5.48824 17.0118C5.8008 17.3244 6.22472 17.5 6.66675 17.5H13.3334C13.7754 17.5 14.1994 17.3244 14.5119 17.0118C14.8245 16.6993 15.0001 16.2754 15.0001 15.8333V5.83333H5.00008V15.8333Z" fill="#F13333" fill-opacity="0.65"/>
                        </svg>
                    </div>
                </section>
            `
        })
    } else if ( detail == reportOfficers ){
        document.querySelector('.report-main-title').textContent = `Involved Officers List`;
        document.querySelector('.report-detail-records').innerHTML = `
            <div class="report-details flexfull">
                <section class="flexdivs">
                    <div class="flexheading">
                        <p>Leading Officers</p>
                        <div class="flexheading-div"></div>
                    </div>
                    <div class="leadingofficersdetails"></div>
                    <div class="flexsmall grey pointer addnew" onclick="showModal('.reportleadingofficermodal')">
                        <svg width="24" height="24" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24.2188 6.25C24.8404 6.25 25.4365 6.49693 25.876 6.93647C26.3156 7.37601 26.5625 7.97215 26.5625 8.59375V21.875H39.8438C40.4654 21.875 41.0615 22.1219 41.501 22.5615C41.9406 23.001 42.1875 23.5971 42.1875 24.2188C42.1875 24.8404 41.9406 25.4365 41.501 25.876C41.0615 26.3156 40.4654 26.5625 39.8438 26.5625H26.5625V39.8438C26.5625 40.4654 26.3156 41.0615 25.876 41.501C25.4365 41.9406 24.8404 42.1875 24.2188 42.1875C23.5971 42.1875 23.001 41.9406 22.5615 41.501C22.1219 41.0615 21.875 40.4654 21.875 39.8438V26.5625H8.59375C7.97215 26.5625 7.37601 26.3156 6.93647 25.876C6.49693 25.4365 6.25 24.8404 6.25 24.2188C6.25 23.5971 6.49693 23.001 6.93647 22.5615C7.37601 22.1219 7.97215 21.875 8.59375 21.875H21.875V8.59375C21.875 7.97215 22.1219 7.37601 22.5615 6.93647C23.001 6.49693 23.5971 6.25 24.2188 6.25Z" fill="white" fill-opacity="0.65"/>
                        </svg>
                        Add new
                    </div>
                </section>
                <section class="flexdivs">
                    <div class="flexheading" >
                        <p>Officers</p>
                        <div class="flexheading-div"></div>
                    </div>
                    <div class="officersdetails"></div>
                    <div class="flexsmall grey pointer addnew" onclick="showModal('.reportofficermodal')">
                        <svg width="24" height="24" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24.2188 6.25C24.8404 6.25 25.4365 6.49693 25.876 6.93647C26.3156 7.37601 26.5625 7.97215 26.5625 8.59375V21.875H39.8438C40.4654 21.875 41.0615 22.1219 41.501 22.5615C41.9406 23.001 42.1875 23.5971 42.1875 24.2188C42.1875 24.8404 41.9406 25.4365 41.501 25.876C41.0615 26.3156 40.4654 26.5625 39.8438 26.5625H26.5625V39.8438C26.5625 40.4654 26.3156 41.0615 25.876 41.501C25.4365 41.9406 24.8404 42.1875 24.2188 42.1875C23.5971 42.1875 23.001 41.9406 22.5615 41.501C22.1219 41.0615 21.875 40.4654 21.875 39.8438V26.5625H8.59375C7.97215 26.5625 7.37601 26.3156 6.93647 25.876C6.49693 25.4365 6.25 24.8404 6.25 24.2188C6.25 23.5971 6.49693 23.001 6.93647 22.5615C7.37601 22.1219 7.97215 21.875 8.59375 21.875H21.875V8.59375C21.875 7.97215 22.1219 7.37601 22.5615 6.93647C23.001 6.49693 23.5971 6.25 24.2188 6.25Z" fill="white" fill-opacity="0.65"/>
                        </svg>
                        Add new
                    </div>
                </section>
            </div>
        `
        officers.leadingOfficers.map((officer) => {
            const { officername, officerid, id } = officer;
            document.querySelector('.leadingofficersdetails').innerHTML += `
                <section class='detail ${'reportleadingofficer'+id}'>
                    <div class='flexsmall'>
                        ${officername}
                        <span> (ID:${officerid}) </span>
                        ${ officer.incidentcreator && `<div class="incidentcreator">Incident Creator</div>` }
                    </div>
                    <div>
                        <svg width="20" height="20" class="pointer" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" onclick="deleteLeadingOfficerFromReport(${id})">
                            <path d="M15.8334 3.33333H12.9167L12.0834 2.5H7.91675L7.08341 3.33333H4.16675V5H15.8334M5.00008 15.8333C5.00008 16.2754 5.17568 16.6993 5.48824 17.0118C5.8008 17.3244 6.22472 17.5 6.66675 17.5H13.3334C13.7754 17.5 14.1994 17.3244 14.5119 17.0118C14.8245 16.6993 15.0001 16.2754 15.0001 15.8333V5.83333H5.00008V15.8333Z" fill="#F13333" fill-opacity="0.65"/>
                        </svg>
                    </div>
                </section>
            `
        })
        officers.otherOfficers.map((officer) => {
            const { officername, officerid, id } = officer;
            document.querySelector('.officersdetails').innerHTML += `
                <section class='detail ${'reportofficer'+id}'>
                    <div class='flexsmall'>
                        ${officername}
                        <span> (ID:${officerid}) </span>
                    </div>
                    <div>
                        <svg width="20" height="20" class="pointer" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" onclick="deleteOfficerFromReport(${id})">
                            <path d="M15.8334 3.33333H12.9167L12.0834 2.5H7.91675L7.08341 3.33333H4.16675V5H15.8334M5.00008 15.8333C5.00008 16.2754 5.17568 16.6993 5.48824 17.0118C5.8008 17.3244 6.22472 17.5 6.66675 17.5H13.3334C13.7754 17.5 14.1994 17.3244 14.5119 17.0118C14.8245 16.6993 15.0001 16.2754 15.0001 15.8333V5.83333H5.00008V15.8333Z" fill="#F13333" fill-opacity="0.65"/>
                        </svg>
                    </div>
                </section>
            `
        })
    }
}

const backToMainInfoReport = () => {
    document.querySelector('.report-main-info').classList.remove('hidden');
    document.querySelector('.report-detail-records').classList.add('hidden');
    document.querySelector('.backtomaininforeport').classList.add('elementhidden');
    document.querySelector('.report-main-title').textContent = 'Main Information';
    secondReportDetail.map((detail) => {
        detail.classList.remove('detailactive')
    })
    reportFirstDetailSub.map((detail) => {
        detail.classList.add('inactive');
    })
}

const viewAllReports = () => {
    singlereport.classList.remove('show');
    singlereport.classList.add('hidden');
    reportsview.classList.remove('hidden');
    backToMainInfoReport();
}

// DELETE REPORT
const deleteReport = () => {
    reportsData = reportsData.filter((report) => report.id != currentReport)
    pushReports(reportsData);
    singlereport.classList.remove('show');
    singlereport.classList.add('hidden');
    reportsview.classList.remove('hidden');
    document.querySelector('#reportdeletemodal').classList.add('hide')
}
// EDIT REPORT TITLE AND INFORMATION/DESCRIPTION
const saveReportTitleEdit = () => {
    let report = reportsData.filter((rep) => rep.id === currentReport);
    if (document.querySelector('#report-main-info-title').value.toLowerCase() !== report[0].title.toLowerCase()){
        reportsData = reportsData.map((report) => {
            if (report.id === currentReport){
                report.title = document.querySelector('#report-main-info-title').value
                return {...report}
            } else return report
        })
        showModal('#reporteditsavemodal')
        viewReport(currentReport)
        pushReports(reportsData)
    }
}
const saveReportInfoEdit = () => {
    let report = reportsData.filter((rep) => rep.id === currentReport);
    if (document.querySelector('#report-main-info-text').value.toLowerCase() !== report[0].description.toLowerCase()){
        reportsData = reportsData.map((report) => {
            if (report.id === currentReport){
                report.description = document.querySelector('#report-main-info-text').value
                return {...report}
            } else return report
        })
        showModal('#reporteditsavemodal')
        viewReport(currentReport)
        pushReports(reportsData)
    }
}
// EVIDENCE ADD/DELETE/EDIT 
const deleteEvidenceFromReport = (id) => {
    document.querySelector(`.reportevidence${id}`).classList.add('hidden')
    reportsData = reportsData.map((report) => {
        if (report.id == currentReport){
            let newreport = report.evidences.filter((evid) => evid.id  !== id)
            return {...report, evidences:newreport}
        } else{
            return {...report}
        }
    })
    pushReports(reportsData)
    viewReport(currentReport)
}
const editReportEvidence = (id) => {
    itemOnEdit = id;
    showModal('.reportevidencemodal');
    reportsData.map((report) => {
        if(report.id === currentReport){
            let evidence = report.evidences.filter((i) => i.id === id);
            document.querySelector('#selectedreportevidence').value = evidence[0].evidencename;
            document.querySelector("#report-evidence-imageURL").value = evidence[0].imageUrl ? evidence[0].imageUrl : "";
            document.querySelector("#report-evidence-description").value = evidence[0].description ? evidence[0].description : "";
        }
    })
}
const addEvidenceToReport = () => {
    cancelModal('.reportevidencemodal');
    if (document.querySelector('#selectedreportevidence').value) {
        if(itemOnEdit){
            reportsData.map((report) => {
                if(report.id === currentReport){
                    report.evidences.map((i) => {
                        if (i.id === itemOnEdit){
                            i.evidencename = document.querySelector('#selectedreportevidence').value;
                            i.imageUrl = document.querySelector("#report-evidence-imageURL").value;
                            i.description = document.querySelector("#report-evidence-description").value;
                        }
                    });
                }
            })
            pushReportSecondDetails(reportEvidences)
            viewReport(currentReport)
            pushReports(reportsData)
            itemOnEdit = "";
        } else {
            let values = {
                id: Math.round( 1102.7 * Math.random()),
                evidencename: document.querySelector('#selectedreportevidence').value,
                description : document.querySelector("#report-evidence-description").value,
                imageUrl: document.querySelector('#report-evidence-imageURL').value,
                count: 1
            }
            reportsData = reportsData.map((report) => {
                if (report.id === currentReport){
                    let check = report.evidences.filter((evid) => evid.evidencename === values.evidencename);
                    if(check.length < 1){
                        report.evidences.push(values)
                    }
                    return {...report}
                } else return report
            })
            pushReportSecondDetails(reportEvidences)
            viewReport(currentReport)
            pushReports(reportsData)
        }
    }
    document.querySelector('#selectedreportevidence').value = ""
    document.querySelector("#report-evidence-description").value = ""
    document.querySelector("#report-evidence-imageURL").value = ""
}
// VEHICLE ADD/DELETE/EDIT 
const deleteVehicleFromReport = (id) => {
    document.querySelector(`.reportvehicle${id}`).classList.add('hidden')
    reportsData = reportsData.map((report) => {
        if (report.id == currentReport){
            let newreport = report.vehicles.filter((veh) => veh.id != id)
            return {...report, vehicles:newreport}
        } else{
            return {...report}
        }
    })
    pushReports(reportsData)
    viewReport(currentReport)
}
const editReportVehicle = (id) => {
    itemOnEdit = id
    showModal('.reportvehiclemodal');
    reportsData.map((report) => {
        if(report.id === currentReport){
            let vehicle = report.vehicles.filter((i) => i.id === id);
            document.querySelector('#selectedsinglereportvehicle').value = vehicle[0].vehicleid + ' | ' + vehicle[0].vehiclename
            document.querySelector("#singlereport-vehicle-description").value = vehicle[0].description ? vehicle[0].description : "";
        }
    })
}
const addVehicleToReport = () => {
    cancelModal('.reportvehiclemodal');
    if (document.querySelector('#selectedsinglereportvehicle').value) {
        let vehicle = document.querySelector('#selectedsinglereportvehicle').value
        let splitted = vehicle.split('|')
        if(itemOnEdit){
            reportsData.map((report) => {
                if(report.id === currentReport){
                    report.vehicles.map((i) => {
                        if(i.id === itemOnEdit){
                            i.vehicleid = splitted[0];
                            i.vehiclename = splitted[1];
                            i.description = document.querySelector("#singlereport-vehicle-description").value;
                        }
                    })
                }
            })
            pushReportSecondDetails(reportVehicles)
            viewReport(currentReport)
            pushReports(reportsData)
            itemOnEdit = ""
        } else {
            let values = {
                id: Math.round( 1102.7 * Math.random()),
                vehicleid: splitted[0],
                vehiclename: splitted[1],
                description : document.querySelector("#singlereport-vehicle-description").value
            }
            reportsData = reportsData.map((report) => {
                if (report.id === currentReport){
                    let check = report.vehicles.filter((veh) => veh.vehicleid === values.vehicleid);
                    if(check.length < 1){
                        report.vehicles.push(values)
                    }
                    return {...report}
                } else return report
            })
            pushReportSecondDetails(reportVehicles)
            viewReport(currentReport)
            pushReports(reportsData)
        }
    }
    document.querySelector("#singlereport-vehicle-description").value = ""
    document.querySelector('#selectedsinglereportvehicle').value = ""
}
// OFFICER ADD/DELETE/EDIT 
const deleteLeadingOfficerFromReport = (id) => {
    document.querySelector(`.reportleadingofficer${id}`).classList.add('hidden');
    reportsData = reportsData.map((report) => {
        if (report.id == currentReport) {
            let reportofficer = report.officers
            let newreport = report.officers.leadingOfficers.filter((i) => i.id != id);
            return {...report, officers:{...reportofficer, leadingOfficers: newreport}}
        } else{
            return {...report}
        }
    })
    pushReports(reportsData)
    viewReport(currentReport)
}
const addLeadingOfficerToReport = () => {
    cancelModal('.reportleadingofficermodal');
    if (document.querySelector('#selectedsinglereportleadingofficer').value) {
        let officer = document.querySelector('#selectedsinglereportleadingofficer').value
        let splitted = officer.split('|')
        let values = {
            id: Math.round( 1102.7 * Math.random()),
            officerid: splitted[0],
            officername: splitted[1],
            description : document.querySelector("#singlereport-leadingofficer-description").value
        }
        reportsData = reportsData.map((report) => {
            if (report.id === currentReport){
                let check = report.officers.leadingOfficers.filter((off) => off.officerid === values.officerid);
                if(check.length < 1){
                    report.officers.leadingOfficers.push(values)
                }
                return {...report}
            } else return report
        })
        pushReportSecondDetails(reportOfficers)
        viewReport(currentReport)
        pushReports(reportsData)
    }
    document.querySelector('#selectedsinglereportleadingofficer').value = ""
    document.querySelector("#singlereport-leadingofficer-description").value = ""
}
const deleteOfficerFromReport = (id) => {
    document.querySelector(`.reportofficer${id}`).classList.add('hidden');
    reportsData = reportsData.map((report) => {
        if (report.id == currentReport){
            let reportofficer = report.officers
            let newreport = report.officers.otherOfficers.filter((veh) => veh.id != id)
            return {...report, officers: {...reportofficer, otherOfficers: newreport} }
        } else{
            return {...report}
        }
    })
    pushReports(reportsData)
    viewReport(currentReport)
}
const addOfficerToReport = () => {
    cancelModal('.reportofficermodal');
    if (document.querySelector('#selectedsinglereportofficer').value) {
        let officer = document.querySelector('#selectedsinglereportofficer').value
        let splitted = officer.split('|')
        let values = {
            id: Math.round( 1102.7 * Math.random()),
            officerid: splitted[0],
            officername: splitted[1],
            description : document.querySelector("#singlereport-officer-description").value
        }
        reportsData = reportsData.map((report) => {
            if (report.id === currentReport){
                let check = report.officers.otherOfficers.filter((off) => off.officerid === values.officerid);
                if(check.length < 1){
                    report.officers.otherOfficers.push(values)
                }
                return {...report}
            } else return report
        })
        pushReportSecondDetails(reportOfficers)
        viewReport(currentReport)
        pushReports(reportsData)
    }
    document.querySelector('#selectedsinglereportofficer').value = "";
    document.querySelector("#singlereport-officer-description").value = "";
}
// CITIZEN ADD/DELETE/EDIT 
const deleteCitizenFromReport = (id) => {
    document.querySelector(`.reportcitizen${id}`) && document.querySelector(`.reportcitizen${id}`).classList.add('hidden')
    reportsData = reportsData.map((report) => {
        if (report.id == currentReport){
            let newreport = report.citizens.filter((veh) => veh.id != id)
            return {...report, citizens:newreport}
        } else{
            return {...report}
        }
    })
    pushReports(reportsData)
    viewReport(currentReport)
}
const editReportCitizen = (id) => {
    itemOnEdit = id;
    showModal('.reportcitizenmodal');
    reportsData.map((report) => {
        if(report.id === currentReport){
            let citizen = report.citizens.filter((i) => i.id === id);
            document.querySelector('#selectedreportcitizen').value = citizen[0].citizenid + ' | ' + citizen[0].citizenname
            document.querySelector("#report-citizen-description").value = citizen[0].description ? citizen[0].description : "";
            document.querySelector('#selectedreportcitizenstatus').value = citizen[0].status
            document.querySelector('#report-citizen-status-imageURL').value = citizen[0].imageUrl
        }
    })
}
const addCitizenToReport = () => {
    cancelModal('.reportcitizenmodal');
    if (document.querySelector('#selectedreportcitizen').value) {
        let citizen = document.querySelector('#selectedreportcitizen').value
        let splitted = citizen.split('|')
        if(itemOnEdit){
            reportsData.map((report) => {
                if(report.id === currentReport){
                    report.citizens.map((i) => {
                        if (i.id === itemOnEdit){
                            i.citizenid = splitted[0];
                            i.citizenname = splitted[1];
                            i.description = document.querySelector("#report-citizen-description").value;
                            i.imageUrl = document.querySelector('#report-citizen-status-imageURL').value;
                            i.status = document.querySelector('#selectedreportcitizenstatus').value;
                        }
                    });
                }
            })
            pushReportSecondDetails(reportCitizens)
            viewReport(currentReport)
            pushReports(reportsData)
            itemOnEdit = ""
        } else {
            let values = {
                id: Math.round( 1102.7 * Math.random()),
                citizenid: splitted[0],
                citizenname: splitted[1],
                description : document.querySelector("#report-citizen-description").value,
                status: document.querySelector("#selectedreportcitizenstatus").value,
                imageUrl: document.querySelector('#report-citizen-status-imageURL').value
            }
            reportsData = reportsData.map((report) => {
                if (report.id === currentReport){
                    let check = report.citizens.filter((cit) => cit.citizenid === values.citizenid);
                    if(check.length < 1){
                        report.citizens.push(values)
                    }
                    return {...report}
                } else return report
            })
            pushReportSecondDetails(reportCitizens)
            viewReport(currentReport)
            pushReports(reportsData)
        }
    }
    document.querySelector('#selectedreportcitizen').value = ""
    document.querySelector("#report-citizen-description").value = ""
    document.querySelector("#selectedreportcitizenstatus").value = ""
    document.querySelector('#report-citizen-status-imageURL').value = ""
}
const checkAccess = (name) => {
    if(loggedOfficer.access){
        showModal(name);
    } else {
        showModal(`${name}restricted`);
    }
}
const showModal = (name) => {
    document.querySelector(`${name}`).classList.remove('hide')
}
const cancelModal = (name) => {
    document.querySelector(`${name}`).classList.add('hide')
}

// DROPDOWN FOR ALL EVIDENCE, PERSON, CITIZENS, OFFICERS AND VEHICLES MODAL
const evidenceTypes = [ 
    {
        id: 1,
        evidence: "Photo"
    },
    {
        id: 2,
        evidence: "blood",
    },
    {
        id: 3,
        evidence: "video"
    },
    {
        id: 4,
        evidence: "bullet"
    },
    {
        id: 5,
        evidence: "other"
    },
]
const reportTypes = [ 
    {
        id: 1,
        report: "investigative report"
    },
    {
        id: 2,
        report: "civilian report",
    },
    {
        id: 3,
        report: "victim report"
    },
    {
        id: 4,
        report: "BOLO"
    },
]
let allVehicles = [
    {
        name: "AUDI R8",
        vehicleid: "LA123FH39",
        id: 1
    },
    {
        name: "BMW X5",
        vehicleid: "CA238FK22",
        id: 2
    },
    {
        name: "NOT BMW",
        vehicleid: "KZ248OK28",
        id: 3
    },
    {
        name: "NOT AUDI",
        vehicleid: "BY939KJ12",
        id: 4
    },
    {
        name: "Cardillac",
        vehicleid: "VC56HI7Y9",
        id: 5
    },
    {
        name: "bugatti",
        vehicleid: "lsfr89h7e",
        id: 6
    },
]

let allPeople = [
    {
        name: "Ahmed Bukar",
        id: 155,
        officer: true,
        wanted: false
    },
    {
        name: "young sheldon",
        id: 156,
        officer: false,
        wanted: false
    },
    {
        name: "Lose yourself",
        id: 157,
        officer: true,
        wanted: false
    },
    {
        name: "Wu Nohs",
        id: 158,
        officer: false,
        wanted: false
    },
    {
        name: "John oils",
        id: 159,
        officer: true,
        wanted: false
    },
    {
        name: "Anita",
        id: 160,
        officer: true,
        wanted: false
    },
    {
        name: "Didier Drogba",
        id: 161,
        officer: false,
        wanted: true
    },
    {
        name: "Anita",
        id: 162,
        officer: false,
        wanted: false
    },
    {
        name: "Eren Jaeger",
        id: 163,
        officer: false,
        wanted: true
    },
    {
        name: "Kirito",
        id: 164,
        officer: false,
        wanted: true
    },
]
const allStatus = [
    {
        id: 1,
        status: "Suspect"
    },
    {
        id: 2,
        status: "Victim",
    },
    {
        id: 3,
        status: "Eyewitness"
    },
]

let allOfficers =  allPeople.filter((i) => i.officer === true)
let allWanted = allPeople.filter((i) => i.wanted === true)
// DROPDOWN FUNCTION FOR NEW INCIDENT ADD VEHICLES
const pushDropData = (data, element) => {
    document.querySelector(element).innerHTML = ""
    if ( element === '.vehicledropdowncontent' || element === '.reportvehicledropdowncontent' || element === '.singlereportvehicledropdowncontent' || element === '.incidentvehicledropdowncontent' ){
        data.map((veh) => {
            let process
            if (element === '.reportvehicledropdowncontent'){process = 'NewReportVehicle'} 
            else if ( element === '.incidentvehicledropdowncontent' ){ process = 'IncidentVehicle' }
            else if ( element === '.singlereportvehicledropdowncontent' ){process = "ReportVehicle"}
            else { process = 'VehicleValue' }
            const { name, id, vehicleid } = veh;
            document.querySelector(element).innerHTML += `
                <section class="grey pointer uppercase fontmedium smallbold" onclick="select${process}(${id})">${vehicleid} - ${name}</section>
            `
        })
    } else if ( element === '.officerdropdowncontent' || element ===  '.reportofficerdropdowncontent' 
   || element === '.incidentofficerdropdowncontent' || element === '.incidentleadingofficerdropdowncontent'
   || element === '.singlereportofficerdropdowncontent' || element === '.singlereportleadingofficerdropdowncontent'){
        data.map((off) => {
            let process
            if (element === '.officerdropdowncontent'){process = 'NewIncidentOfficer'}
            else if (element === '.incidentofficerdropdowncontent'){process = 'IncidentOfficer'}
            else if (element === '.incidentleadingofficerdropdowncontent'){process = 'IncidentLeadingOfficer'}
            else if ( element === '.reportofficerdropdowncontent' ){ process = 'NewReportOfficer' }
            else if ( element === '.singlereportofficerdropdowncontent' ){process = "ReportOfficer"}
            else if ( element === '.singlereportleadingofficerdropdowncontent' ){process = "ReportLeadingOfficer"}
            const {name, id} = off;
            document.querySelector(element).innerHTML += `
                <section class="grey pointer capitalize fontmedium smallbold" onclick="select${process}(${id})" >
                    <p>${name} (ID:${id})</p>
                    <div class="mediumbold fontsmaller flexsmall officer"> <span></span> POLICE OFFICER </div>
                </section>
            `
        })
    } else if ( element === '.persondropdowncontent' || element === '.reportpersondropdowncontent' 
    || element === '.criminaldropdowncontent' || element === '.reportvictimdropdowncontent' 
    || element === '.reportsuspectdropdowncontent' || element === '.reportwitnessdropdowncontent'
    || element === '.incidentcitizendropdowncontent' || element === '.reportcitizendropdowncontent'
    || element === '.incidentvictimdropdowncontent' || element === '.incidentsuspectdropdowncontent'
    || element === '.incidentwitnessdropdowncontent'){
        data.map((cit) => {
            let process
            if (element === '.persondropdowncontent'){process = 'NewIncidentPerson'} 
            else if ( element === '.criminaldropdowncontent' ){ process = 'NewIncidentCriminal' }
            else if ( element === '.reportcitizendropdowncontent' ){process = "ReportCitizen"}
            else if ( element === '.incidentcitizendropdowncontent' ){process = "IncidentCitizen"}
            else { process = 'NewReportPerson' }
            const {name, id, wanted, officer} = cit;
            let status = "civil";
            if ( officer ) status = "officer";
            else if ( wanted ) status = "civilwanted";
            document.querySelector(element).innerHTML += `
                <section class="grey pointer capitalize fontmedium smallbold" onclick="select${process}(${id})"> 
                    <p>${name} (ID:${id})</p>  
                    <div class="${status} mediumbold fontsmaller flexsmall"> <span></span> ${officer ? "POLICE OFFICER" : "CIVIL"} ${wanted ? '(WANTED)' : ''}</div> 
                </section>
            `
        })
    } else if ( element === '.evidencedropdowncontent' || element === '.newreportevidencedropdowncontent' 
    || element === '.incidentevidencedropdowncontent' || element === '.reportevidencedropdowncontent'){
        data.map((type) => {
            let process
            if (element === '.newreportevidencedropdowncontent'){process = 'NewReportEvidence'} 
            else if ( element === '.incidentevidencedropdowncontent' ){ process = 'IncidentEvidence' }
            else if ( element === '.reportevidencedropdowncontent' ){process = "ReportEvidence"}
            else { process = 'NewIncidentEvidence' }
            document.querySelector(element).innerHTML += `
            <section class="grey pointer capitalize fontmedium smallbold" onclick="select${process}(${type.id})">${type.evidence}</section>
            `
        })
    } else if ( element === '.reportdropdowncontent'){
        data.map((type) => {
            document.querySelector(element).innerHTML += `
            <section class="grey pointer capitalize fontmedium smallbold" onclick="selectNewReport(${type.id})">${type.report}</section>
            `
        })
    }
    else if ( element === '.incidentcitizenstatusdropdowncontent' || element === '.reportcitizenstatusdropdowncontent'
    || element === '.personstatusdropdowncontent' || element === '.reportpersonstatusdropdowncontent'){
        data.map((type) => {
            let process
            if ( element === '.incidentcitizenstatusdropdowncontent' ){process = "IncidentCitizenStatus"}
            else if (element === '.reportcitizenstatusdropdowncontent') { process = 'ReportCitizenStatus' }
            else if (element === '.reportpersonstatusdropdowncontent') { process = 'ReportPersonStatus' }
            else if (element === '.personstatusdropdowncontent') { process = 'IncidentPersonStatus' }
            document.querySelector(element).innerHTML += `
            <section class="grey pointer capitalize fontmedium smallbold" onclick="select${process}(${type.id})">${type.status}</section>
            `
        })
    }
}
const selectVehicleValue = (id) => {
    let veh = allVehicles.filter((v) => v.id === id)
    document.getElementById('selectedvehicle').value = `${veh[0].vehicleid} | ${veh[0].name}`
    document.getElementById('selectedvehicle').classList.add('uppercase')
    document.querySelector('.vehiclesearchpop').classList.add('elementhidden')
    document.querySelector('.vehicledropdowncontent').classList.add('hidden')
    document.querySelector('.vehicledropdownicon').classList.remove('rotate')
}
const selectIncidentVehicle = (id) => {
    let veh = allVehicles.filter((v) => v.id === id)
    document.getElementById('selectedincidentvehicle').value = `${veh[0].vehicleid} | ${veh[0].name}`
    document.getElementById('selectedincidentvehicle').classList.add('uppercase')
    document.querySelector('.incidentvehiclesearchpop').classList.add('elementhidden')
    document.querySelector('.incidentvehicledropdowncontent').classList.add('hidden')
    document.querySelector('.incidentvehicledropdownicon').classList.remove('rotate')
}
const selectNewIncidentOfficer = (id) => {
    let off = allOfficers.filter((f) => f.id === id)
    document.getElementById('selectedofficer').value = `${off[0].id} | ${off[0].name}`
    document.getElementById('selectedofficer').classList.add('uppercase')
    document.querySelector('.officersearchpop').classList.add('elementhidden')
    document.querySelector('.officerdropdowncontent').classList.add('hidden')
    document.querySelector('.officerdropdownicon').classList.remove('rotate')
}
const selectIncidentOfficer = (id) => {
    let off = allOfficers.filter((f) => f.id === id)
    document.getElementById('selectedincidentofficer').value = `${off[0].id} | ${off[0].name}`
    document.getElementById('selectedincidentofficer').classList.add('uppercase')
    document.querySelector('.incidentofficersearchpop').classList.add('elementhidden')
    document.querySelector('.incidentofficerdropdowncontent').classList.add('hidden')
    document.querySelector('.incidentofficerdropdownicon').classList.remove('rotate')
}
const selectIncidentLeadingOfficer = (id) => {
    let off = allOfficers.filter((f) => f.id === id)
    document.getElementById('selectedincidentleadingofficer').value = `${off[0].id} | ${off[0].name}`
    document.getElementById('selectedincidentleadingofficer').classList.add('uppercase')
    document.querySelector('.incidentleadingofficersearchpop').classList.add('elementhidden')
    document.querySelector('.incidentleadingofficerdropdowncontent').classList.add('hidden')
    document.querySelector('.incidentleadingofficerdropdownicon').classList.remove('rotate')
}
const selectNewIncidentCriminal = (id) => {
    let cri = allWanted.filter((w) => w.id === id)
    document.getElementById('selectedcriminal').value = `${cri[0].id} | ${cri[0].name}`
    document.getElementById('selectedcriminal').classList.add('uppercase')
    document.querySelector('.criminalsearchpop').classList.add('elementhidden')
    document.querySelector('.criminaldropdowncontent').classList.add('hidden')
    document.querySelector('.criminaldropdownicon').classList.remove('rotate')
}
const selectNewIncidentPerson = (id) => {
    let cit = allPeople.filter((c) => c.id === id)
    document.getElementById('selectedperson').value = `${cit[0].id} | ${cit[0].name}`
    document.getElementById('selectedperson').classList.add('uppercase')
    document.querySelector('.personsearchpop').classList.add('elementhidden')
    document.querySelector('.persondropdowncontent').classList.add('hidden')
    document.querySelector('.persondropdownicon').classList.remove('rotate')
}
const selectIncidentCitizen = (id) => {
    let cit = allPeople.filter((c) => c.id === id)
    document.getElementById('selectedincidentcitizen').value = `${cit[0].id} | ${cit[0].name}`
    document.getElementById('selectedincidentcitizen').classList.add('uppercase')
    document.querySelector('.incidentcitizensearchpop').classList.add('elementhidden')
    document.querySelector('.incidentcitizendropdowncontent').classList.add('hidden')
    document.querySelector('.incidentcitizendropdownicon').classList.remove('rotate')
}
const selectNewIncidentEvidence = (id) => {
    let evid = evidenceTypes.filter((e) => e.id === id)
    document.getElementById('selectedevidence').value = evid[0].evidence
    document.querySelector('.evidencesearchpop').classList.add('elementhidden')
    document.querySelector('.evidencedropdowncontent').classList.add('hidden')
    document.querySelector('.evidencedropdownicon').classList.remove('rotate')
}
const selectIncidentEvidence = (id) => {
    let evid = evidenceTypes.filter((e) => e.id === id)
    document.getElementById('selectedincidentevidence').value = evid[0].evidence
    document.querySelector('.incidentevidencesearchpop').classList.add('elementhidden')
    document.querySelector('.incidentevidencedropdowncontent').classList.add('hidden')
    document.querySelector('.incidentevidencedropdownicon').classList.remove('rotate')
}
const selectNewReportEvidence = (id) => {
    let evid = evidenceTypes.filter((e) => e.id === id)
    document.getElementById('selectednewreportevidence').value = evid[0].evidence
    document.querySelector('.newreportevidencesearchpop').classList.add('elementhidden')
    document.querySelector('.newreportevidencedropdowncontent').classList.add('hidden')
    document.querySelector('.newreportevidencedropdownicon').classList.remove('rotate')
}
const selectReportEvidence = (id) => {
    let evid = evidenceTypes.filter((e) => e.id === id)
    document.getElementById('selectedreportevidence').value = evid[0].evidence
    document.querySelector('.reportevidencesearchpop').classList.add('elementhidden')
    document.querySelector('.reportevidencedropdowncontent').classList.add('hidden')
    document.querySelector('.reportevidencedropdownicon').classList.remove('rotate')
}
const selectNewReportPerson = (id) => {
    let cit = allPeople.filter((c) => c.id === id)
    document.getElementById('selectedreportperson').classList.add('uppercase')
    document.getElementById('selectedreportperson').value = `${cit[0].id} | ${cit[0].name}`
    document.querySelector('.reportpersonsearchpop').classList.add('elementhidden')
    document.querySelector('.reportpersondropdowncontent').classList.add('hidden')
    document.querySelector('.reportpersondropdownicon').classList.remove('rotate')
}
const selectReportCitizen = (id) => {
    let cit = allPeople.filter((c) => c.id === id)
    document.getElementById('selectedreportcitizen').value = `${cit[0].id} | ${cit[0].name}`
    document.getElementById('selectedreportcitizen').classList.add('uppercase')
    document.querySelector('.reportcitizensearchpop').classList.add('elementhidden')
    document.querySelector('.reportcitizendropdowncontent').classList.add('hidden')
    document.querySelector('.reportcitizendropdownicon').classList.remove('rotate')
}
const selectNewReportOfficer = (id) => {
    let off = allOfficers.filter((f) => f.id === id)
    document.getElementById('selectedreportofficer').value = `${off[0].id} | ${off[0].name}`
    document.getElementById('selectedreportofficer').classList.add('uppercase')
    document.querySelector('.reportofficersearchpop').classList.add('elementhidden')
    document.querySelector('.reportofficerdropdowncontent').classList.add('hidden')
    document.querySelector('.reportofficerdropdownicon').classList.remove('rotate')
}
const selectReportOfficer = (id) => {
    let off = allOfficers.filter((f) => f.id === id)
    document.getElementById('selectedsinglereportofficer').value = `${off[0].id} | ${off[0].name}`
    document.getElementById('selectedsinglereportofficer').classList.add('uppercase')
    document.querySelector('.singlereportofficersearchpop').classList.add('elementhidden')
    document.querySelector('.singlereportofficerdropdowncontent').classList.add('hidden')
    document.querySelector('.singlereportofficerdropdownicon').classList.remove('rotate')
}
const selectReportLeadingOfficer = (id) => {
    let off = allOfficers.filter((f) => f.id === id)
    document.getElementById('selectedsinglereportleadingofficer').value = `${off[0].id} | ${off[0].name}`
    document.getElementById('selectedsinglereportleadingofficer').classList.add('uppercase')
    document.querySelector('.singlereportleadingofficersearchpop').classList.add('elementhidden')
    document.querySelector('.singlereportleadingofficerdropdowncontent').classList.add('hidden')
    document.querySelector('.singlereportleadingofficerdropdownicon').classList.remove('rotate')
}
const selectNewReportVehicle = (id) => {
    let veh = allVehicles.filter((v) => v.id === id)
    document.getElementById('selectedreportvehicle').value = `${veh[0].vehicleid} | ${veh[0].name}`
    document.getElementById('selectedreportvehicle').classList.add('uppercase')
    document.querySelector('.reportvehiclesearchpop').classList.add('elementhidden')
    document.querySelector('.reportvehicledropdowncontent').classList.add('hidden')
    document.querySelector('.reportvehicledropdownicon').classList.remove('rotate')
}
const selectReportVehicle = (id) => {
    let veh = allVehicles.filter((v) => v.id === id)
    document.getElementById('selectedsinglereportvehicle').value = `${veh[0].vehicleid} | ${veh[0].name}`
    document.getElementById('selectedsinglereportvehicle').classList.add('uppercase')
    document.querySelector('.singlereportvehiclesearchpop').classList.add('elementhidden')
    document.querySelector('.singlereportvehicledropdowncontent').classList.add('hidden')
    document.querySelector('.singlereportvehicledropdownicon').classList.remove('rotate')
}
const selectNewReport = (id) => {
    let type = reportTypes.filter((typ) => typ.id === id)
    document.querySelector('.reportsearchpop').classList.add('elementhidden')
    document.getElementById('selectedreport').value = type[0].report
    document.querySelector('.reportdropdowncontent').classList.add('hidden')
    document.querySelector('.reportdropdownicon').classList.remove('rotate')
}
const selectIncidentCitizenStatus = (id) => {
    let cit = allStatus.filter((c) => c.id === id)
    document.getElementById('selectedincidentcitizenstatus').value = cit[0].status
    document.getElementById('selectedincidentcitizenstatus').classList.add('uppercase')
    document.querySelector('.incidentcitizenstatussearchpop').classList.add('elementhidden')
    document.querySelector('.incidentcitizenstatusdropdowncontent').classList.add('hidden')
    document.querySelector('.incidentcitizenstatusdropdownicon').classList.remove('rotate')
}
const selectReportCitizenStatus = (id) => {
    let cit = allStatus.filter((c) => c.id === id)
    document.getElementById('selectedreportcitizenstatus').value = cit[0].status
    document.getElementById('selectedreportcitizenstatus').classList.add('uppercase')
    document.querySelector('.reportcitizenstatussearchpop').classList.add('elementhidden')
    document.querySelector('.reportcitizenstatusdropdowncontent').classList.add('hidden')
    document.querySelector('.reportcitizenstatusdropdownicon').classList.remove('rotate')
}
const selectReportPersonStatus = (id) => {
    let cit = allStatus.filter((c) => c.id === id)
    document.getElementById('selectedreportpersonstatus').value = cit[0].status
    document.getElementById('selectedreportpersonstatus').classList.add('uppercase')
    document.querySelector('.reportpersonstatussearchpop').classList.add('elementhidden')
    document.querySelector('.reportpersonstatusdropdowncontent').classList.add('hidden')
    document.querySelector('.reportpersonstatusdropdownicon').classList.remove('rotate')
}
const selectIncidentPersonStatus = (id) => {
    let cit = allStatus.filter((c) => c.id === id)
    document.getElementById('selectedpersonstatus').value = cit[0].status
    document.getElementById('selectedpersonstatus').classList.add('uppercase')
    document.querySelector('.personstatussearchpop').classList.add('elementhidden')
    document.querySelector('.personstatusdropdowncontent').classList.add('hidden')
    document.querySelector('.reportpersonstatusdropdownicon').classList.remove('rotate')
}

const toggleDropDown = (name) => {
    let data = allPeople;
    if (name.includes('vehicle')){ data = allVehicles}
    else if (name.includes('officer')){data = allOfficers}
    else if (name.includes('criminal')){data = allWanted }
    else if (name.includes('status')){data = allStatus}
    document.getElementById(`selected${name}`).classList.remove('uppercase')
    document.querySelector(`.${name}searchpop`).classList.toggle('elementhidden')
    document.querySelector(`.${name}dropdowncontent`).innerHTML = ""
    document.querySelector(`#selected${name}`).value = ""
    document.querySelector(`#selected${name}`).classList.remove('uppercase')
    if (document.getElementsByName(`${name}`)[0].placeholder === "Enter name for search"){
        document.getElementsByName(`${name}`)[0].placeholder = name.includes('status') ? "Choose status" : "Choose profile";
    } else {
        document.getElementsByName(`${name}`)[0].placeholder = "Enter name for search";
    }
    document.querySelector(`.${name}dropdowncontent`).classList.toggle('hidden')
    document.querySelector(`.${name}dropdownicon`).classList.toggle('rotate')
    pushDropData(data, `.${name}dropdowncontent`);
}
const toggleStatusDropDown = (name) => {
    document.querySelector(`.${name}searchpop`).classList.toggle('elementhidden')
    document.querySelector(`.${name}dropdowncontent`).innerHTML = ""
    document.querySelector(`#selected${name}`).value = ""
    document.querySelector(`.${name}dropdowncontent`).classList.toggle('hidden')
    document.querySelector(`.${name}dropdownicon`).classList.toggle('rotate')
    pushDropData(allStatus, `.${name}dropdowncontent`);
}
const toggleEvidenceDropDown = (name) => {
    document.querySelector(`.${name}searchpop`).classList.toggle('elementhidden')
    document.querySelector(`.${name}dropdowncontent`).innerHTML = ""
    document.querySelector(`#selected${name}`).value = ""
    document.querySelector(`.${name}dropdowncontent`).classList.toggle('hidden')
    document.querySelector(`.${name}dropdownicon`).classList.toggle('rotate')
    pushDropData(evidenceTypes, `.${name}dropdowncontent`);
}
const toggleReportDropDown = () => {
    document.querySelector(`.reportsearchpop`).classList.toggle('elementhidden')
    document.querySelector(`.reportdropdowncontent`).innerHTML = ""
    document.querySelector(`#selectedreport`).value = ""
    document.querySelector(`.reportdropdowncontent`).classList.toggle('hidden')
    document.querySelector(`.reportdropdownicon`).classList.toggle('rotate')
    pushDropData(reportTypes, `.reportdropdowncontent`);
}
const searchData = (name) => {
    let database = allPeople;
    if (name.includes('vehicle')){ database = allVehicles}
    else if (name.includes('officer')){database = allOfficers}
    else if (name.includes('criminal')){database = allWanted }
    else if (name.includes('evidence')){database = evidenceTypes }
    else if (name.includes('status')){database = allStatus }
    document.querySelector(`.${name}searchpop`).classList.remove('elementhidden')
    document.querySelector(`.${name}dropdowncontent`).classList.remove('hidden')
    document.querySelector(`.${name}dropdownicon`).classList.add('rotate')
    let val = event.target.value
    if (database === evidenceTypes){
        let data = database.filter((i) => i.evidence.toLowerCase().includes(val.toLowerCase()) || i.id.toString().includes(val.toLowerCase()))
        pushDropData(data, `.${name}dropdowncontent`)
    }
    let data = database.filter((i) => i.name.toLowerCase().includes(val.toLowerCase()) || i.id.toString().includes(val.toLowerCase()))
    pushDropData(data, `.${name}dropdowncontent`)
}
// SEARCH REPORT TYPE
document.querySelector('#selectedreport').addEventListener('input', (event) => {
    document.querySelector('.reportdropdowncontent').classList.remove('hidden')
    document.querySelector('.reportdropdownicon').classList.add('rotate')
    document.querySelector('.reportsearchpop').classList.add('elementhidden')
    let val = event.target.value
    let data = reportTypes.filter((type) => type.report.toLowerCase().includes(val.toLowerCase()) )
    pushDropData(data, '.reportdropdowncontent')
})

// MISC FUNCTIONALITY
const MINracersvalue = document.querySelector('#MINvalue');
const decreaseMINracers = document.querySelector('#decreaseMIN');
const increaseMINracers = document.querySelector('#increaseMIN');
const MAXracersvalue = document.querySelector('#MAXvalue');
const decreaseMAXracers = document.querySelector('#decreaseMAX');
const increaseMAXracers = document.querySelector('#increaseMAX');
const Lapsvalue = document.querySelector('#lapsvalue');
const decreaseLaps = document.querySelector('#decreaseLaps');
const increaseLaps = document.querySelector('#increaseLaps');

let minracersvalue = 45;
let maxracersvalue = 45;
let lapsvalue = 45;
MINracersvalue.textContent = minracersvalue;
MAXracersvalue.textContent = maxracersvalue;
Lapsvalue.textContent = lapsvalue;

decreaseMINracers.addEventListener('click', () => {
    if (minracersvalue === 0) {
        MINracersvalue.textContent = minracersvalue;
    } else {
        minracersvalue -= 1
        MINracersvalue.textContent = minracersvalue;
    }
})
increaseMINracers.addEventListener('click', () => {
    if (minracersvalue === 100) {
        MINracersvalue.textContent = minracersvalue;
    } else {
        minracersvalue += 1
        MINracersvalue.textContent = minracersvalue;
    }
})

decreaseMAXracers.addEventListener('click', () => {
    if (maxracersvalue === 0) {
        MINracersvalue.textContent = maxracersvalue;
    } else {
        maxracersvalue -= 1
        MAXracersvalue.textContent = maxracersvalue;
    }
})
increaseMAXracers.addEventListener('click', () => {
    if (maxracersvalue === 100) {
        MAXracersvalue.textContent = maxracersvalue;
    } else {
        maxracersvalue += 1
        MAXracersvalue.textContent = maxracersvalue;
    }
})

decreaseLaps.addEventListener('click', () => {
    if (lapsvalue === 0) {
        Lapsvalue.textContent = lapsvalue;
    } else {
        lapsvalue -= 1
        Lapsvalue.textContent = lapsvalue;
    }
})
increaseLaps.addEventListener('click', () => {
    if (lapsvalue === 100) {
        Lapsvalue.textContent = lapsvalue;
    } else {
        lapsvalue += 1
        Lapsvalue.textContent = lapsvalue;
    }
})

// 
const MINracersvaluetwo = document.querySelector('#MINvaluetwo');
const decreaseMINracerstwo = document.querySelector('#decreaseMINtwo');
const increaseMINracerstwo = document.querySelector('#increaseMINtwo');
const MAXracersvaluetwo = document.querySelector('#MAXvaluetwo');
const decreaseMAXracerstwo = document.querySelector('#decreaseMAXtwo');
const increaseMAXracerstwo = document.querySelector('#increaseMAXtwo');
const Lapsvaluetwo = document.querySelector('#lapsvaluetwo');
const decreaseLapstwo = document.querySelector('#decreaseLapstwo');
const increaseLapstwo = document.querySelector('#increaseLapstwo');

let minracersvaluetwo = 45;
let maxracersvaluetwo = 45;
let lapsvaluetwo = 45;
MINracersvaluetwo.textContent = minracersvaluetwo;
MAXracersvaluetwo.textContent = maxracersvaluetwo;
Lapsvaluetwo.textContent = lapsvaluetwo;
decreaseMINracerstwo.addEventListener('click', () => {
    if (minracersvaluetwo === 0) {
        MINracersvaluetwo.textContent = minracersvaluetwo;
    } else {
        minracersvaluetwo -= 1
        MINracersvaluetwo.textContent = minracersvaluetwo;
    }
})
increaseMINracerstwo.addEventListener('click', () => {
    if (minracersvaluetwo === 100) {
        MINracersvaluetwo.textContent = minracersvaluetwo;
    } else {
        minracersvaluetwo += 1
        MINracersvaluetwo.textContent = minracersvaluetwo;
    }
})

decreaseMAXracerstwo.addEventListener('click', () => {
    if (maxracersvaluetwo === 0) {
        MINracersvaluetwo.textContent = maxracersvaluetwo;
    } else {
        maxracersvaluetwo -= 1
        MAXracersvaluetwo.textContent = maxracersvaluetwo;
    }
})
increaseMAXracerstwo.addEventListener('click', () => {
    if (maxracersvaluetwo === 100) {
        MAXracersvaluetwo.textContent = maxracersvaluetwo;
    } else {
        maxracersvaluetwo += 1
        MAXracersvaluetwo.textContent = maxracersvaluetwo;
    }
})

decreaseLapstwo.addEventListener('click', () => {
    if (lapsvaluetwo === 0) {
        Lapsvaluetwo.textContent = lapsvaluetwo;
    } else {
        lapsvaluetwo -= 1
        Lapsvaluetwo.textContent = lapsvaluetwo;
    }
})
increaseLapstwo.addEventListener('click', () => {
    if (lapsvaluetwo === 100) {
        Lapsvaluetwo.textContent = lapsvaluetwo;
    } else {
        lapsvaluetwo += 1
        Lapsvaluetwo.textContent = lapsvaluetwo;
    }
})

const toggleOnOffone = document.getElementsByClassName("toggleOnOff")[1];
const toggleOnOfftwo = document.getElementsByClassName("toggleOnOff")[2];
const toggleOnOffthree = document.getElementsByClassName("toggleOnOff")[3];
const toggleOnOfffour = document.getElementsByClassName("toggleOnOff")[4];
const toggleOnOfffive = document.getElementsByClassName("toggleOnOff")[5];
const toggleOnOffzero = document.getElementsByClassName("toggleOnOff")[0];

toggleOnOffone.addEventListener('click', () => {
    let content = toggleOnOffone.textContent
    if (content === 'ON') {
        toggleOnOffone.textContent = "OFF";
        toggleOnOffone.className = "redbutton pointer toggleOnOff"
    } else {
        toggleOnOffone.textContent = "ON";
        toggleOnOffone.className = "greenbutton pointer toggleOnOff"
    }
})
toggleOnOfftwo.addEventListener('click', () => {
    let content = toggleOnOfftwo.textContent
    if (content === 'ON') {
        toggleOnOfftwo.textContent = "OFF";
        toggleOnOfftwo.className = "redbutton pointer toggleOnOff"
    } else {
        toggleOnOfftwo.textContent = "ON";
        toggleOnOfftwo.className = "greenbutton pointer toggleOnOff"
    }
})
toggleOnOffthree.addEventListener('click', () => {
    let content = toggleOnOffthree.textContent
    if (content === 'ON') {
        toggleOnOffthree.textContent = "OFF";
        toggleOnOffthree.className = "redbutton pointer toggleOnOff"
    } else {
        toggleOnOffthree.textContent = "ON";
        toggleOnOffthree.className = "greenbutton pointer toggleOnOff"
    }
})
toggleOnOfffour.addEventListener('click', () => {
    let content = toggleOnOfffour.textContent
    if (content === 'ON') {
        toggleOnOfffour.textContent = "OFF";
        toggleOnOfffour.className = "redbutton pointer toggleOnOff"
    } else {
        toggleOnOfffour.textContent = "ON";
        toggleOnOfffour.className = "greenbutton pointer toggleOnOff"
    }
})
toggleOnOfffive.addEventListener('click', () => {
    let content = toggleOnOfffive.textContent
    if (content === 'ON') {
        toggleOnOfffive.textContent = "OFF";
        toggleOnOfffive.className = "redbutton pointer toggleOnOff"
    } else {
        toggleOnOfffive.textContent = "ON";
        toggleOnOfffive.className = "greenbutton pointer toggleOnOff"
    }
})
toggleOnOffzero.addEventListener('click', () => {
    let content = toggleOnOffzero.textContent
    if (content === 'ON') {
        toggleOnOffzero.textContent = "OFF";
        toggleOnOffzero.className = "redbutton pointer toggleOnOff"
    } else {
        toggleOnOffzero.textContent = "ON";
        toggleOnOffzero.className = "greenbutton pointer toggleOnOff"
    }
})