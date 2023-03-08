function compute(id) {
  console.log("Button " + id + " clicked!");
  op1 = parseInt($("#op1").val());
  op2 = parseInt($("#op2").val());
  colorClass = ""
  switch (id) {
    case "addBtn":
      $("#result").text(`Result of ${op1} + ${op2} = ${op1 + op2}`);
      colorClass = "green"
      break;
    case "subBtn":
      $("#result").text(`Result of ${op1} - ${op2} = ${op1 - op2}`);
      colorClass = "blue"
      break;
    case "mulBtn":
      $("#result").text(`Result of ${op1} * ${op2} = ${op1 * op2}`);
      colorClass = "tomato"
      break;
    case "divBtn":
      $("#result").text(`Result of ${op1} / ${op2} = ${op1 / op2}`);
      colorClass = "yellow"
      break;
  }

  $("#history").append(`
      <div class="${colorClass}">
        ${$("#result").text()}
        <button class="rmvBtn" >Remove Me!</button>
      </div>
  `);


}


const setup = () => {
  console.log("Hello World");
  $("button").click(function () {
    compute(this.id)
  });

  $("body").on("click", ".rmvBtn", function () {
    $(this).parent().remove()
  });
}

$(document).ready(setup)