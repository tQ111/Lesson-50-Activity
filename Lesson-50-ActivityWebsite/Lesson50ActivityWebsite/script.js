let data;

async function init() {
    let link = "http://localhost:5500";
    let route = "/tracks";
    let info = await fetch(link + route);
    data = await info.json();
    console.log(data);
}

function GenerateCards(tracks){
    let output = document.getElementById("output");
    let build = "";
    
    for(let i=0; i<tracks.length; i++){
        let track = tracks[i];
        build += `<div class = "card">`;
        build += `<h3> Track Name : ${track.Name}</h3>`;
        build += `<div> Track Composer : ${track.Composer}</div>`;
        build += `<div> Track Run Time : ${track.Milliseconds} Milliseconds</div>`;
        build += `<p> Track File Size : ${track.Bytes} Bytes</p>`;
        build += `<p> Track Price : ${track.UnitPrice} Dollars</p>`;
        build += `<hr>`;
        build += `</div>`;
    }
    output.innerHTML = build;
}
