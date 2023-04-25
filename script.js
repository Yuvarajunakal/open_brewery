const getBreweryData = async () => {
  //   var url = "https://api.openbrewerydb.org/v1/breweries";

  try{

    var url = "https://api.openbrewerydb.org/v1/breweries?per_page=300";

    const response = await fetch(url);
  
    const Brews = await response.json();

    console.log(Brews); 



    function showtable(file) {
       document.getElementById("mytable").innerHTML = `
            <tr class="fw-bold">
               <td>Name</td>
               <td>Type</td>
               <td>Adress</td>
               <td>link</td>
               <td>Phone</td>
            </tr>`;

    

      for (let i = 0; i < file.length; i++) {
        document.getElementById("mytable").innerHTML += `
                <tr>
                   <td>${file[i].name}</td>
                   <td>${file[i].brewery_type}</td>
                   <td>${file[i].address_1}</td>
                   <td><a style="text-decoration:none;color:white" href="${file[i].website_url}">Go</a></td>
                   <td>${file[i].phone}</td>
                </tr> `;
      }
    }
  

  showtable(Brews);

  var arr = [];

  document.getElementById("search").addEventListener("keyup", function () {
    var search = this.value.toLowerCase();
    arr = Brews.filter(function (x) {
      if (x.name.includes(search) || x.brewery_type.includes(search)) {
        var newobj = {
          name: x.name,
          brewery_type: x.brewery_type,
          address_1: x.address_1,
          website_url: x.website_url,
          phone: x.phone,
        };
        return newobj;
      }
    });

    showtable(arr);
  });

}catch(e){
    console.log("just go back to corrrect your code" ,e);
}
finally{
    console.log("well-done");
}

};

getBreweryData();
