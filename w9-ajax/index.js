


const setup = () => {
  console.log("Hello World");

  $("button").click(() => {
    console.log("Button Clicked");
    const y = $("#cityNAme").val();
    $.ajax({
      url: `https://api.openweathermap.org/data/2.5/weather?q=${y}&appid=63f3c05bfc8de92422db12d6f77d759e&units=metric`,
      method: "GET", // or POST , PUt, DELETE, PATCH
      success: (x) => {
        console.log(x.main.temp);
        $("#targetCIty").html(y);
        $("#result").html(x.main.temp);
      }
    })
  });
}


$(document).ready(setup)