const x = (res) => {
  console.log(res)
}

const setup = () => {
  jQuery.ajax({
    url: 'https://pokeapi.co/api/v2/pokemon/ditto',
    type: 'GET',
    success: x
  })
}


$(document).ready(setup)