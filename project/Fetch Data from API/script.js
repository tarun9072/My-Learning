// fetch("https://fakestoreapi.com/products").then((data) => {
//     return data.json(); // It converts the Data
// })



fetch("https://jsonplaceholder.typicode.com/photos")
.then(data => data.json())
.then((objectdata) => {
    console.log(objectdata);

    let tabledata = "";
    objectdata.map((values) => {
        tabledata += `
        <tr> 
            <td>${values.id}</td>
            <td>${values.title}</td>
        
            <td><img src="${values.url}"></img></td>
            <td><img src="${values.thumbnailUrl}"></img</td>
            </tr>
        `;
    });
    document.getElementById("tablebody").innerHTML=tabledata;
})