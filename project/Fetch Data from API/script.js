// fetch("https://fakestoreapi.com/products").then((data) => {
//     return data.json(); // It converts the Data
// })
fetch("https://fakestoreapi.com/products")
.then(data => data.json())
.then((objectdata) => {
    console.log(objectdata);

    let tabledata = "";
    objectdata.map((values) => {
        tabledata += `
        <tr> 
            <td>${values.title}</td>
            <td>${values.description}</td>
            <td>${values.price}</td>
            <td><img src="${values.image}"></img></td>
            <td>${values.title}</td>
            </tr>
        `;
    });
    document.getElementById("tablebody").innerHTML=tabledata;
})