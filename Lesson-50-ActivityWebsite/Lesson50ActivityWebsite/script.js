let data;

async function init() {
    let link = "http://localhost:5500";
    let route = "/tracks";
    info = await fetch(link + route);
    data = await info.json();
    console.log(data);
}