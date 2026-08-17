let addhomeEl = document.getElementById("home-score")
let addawayEl = document.getElementById("away-score")
let homeEl = document.getElementById("home")
let awayEl = document.getElementById("guest")
let homeScore = 0
let awayScore = 0
function add1pointshome(){
    homeScore+=1
    addhomeEl.textContent = homeScore
    checkLeader()
}

function add2pointshome(){
    homeScore+=2
    addhomeEl.textContent = homeScore
    checkLeader()
}

function add3pointshome(){
    homeScore+=3
    addhomeEl.textContent = homeScore
    checkLeader()
}


function add1pointsaway(){
    awayScore+=1
    addawayEl.textContent = awayScore
    checkLeader()
}

function add2pointsaway(){
    awayScore+=2
    addawayEl.textContent = awayScore
    checkLeader()
}

function add3pointsaway(){
    awayScore+=3
    addawayEl.textContent = awayScore
    checkLeader()
}

function newgame(){
    let homeScore = 0
    let awayScore = 0
    addhomeEl.textContent = 0
    addawayEl.textContent = 0
    checkLeader()
}

function checkLeader(){
    if (homeScore > awayScore){
        homeEl.style.color = "#C49A4A"
        awayEl.style.color = "white"
    }
    else if (awayScore > homeScore){
        awayEl.style.color = "#C49A4A"
        homeEl.style.color = "white"
    }
    else{
        homeEl.style.color = "white"
        awayEl.style.color = "white"
    }
}
