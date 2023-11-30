function router() {
  switch (window.location.hash) {
    case "":
      $("main").html("<h1>Start</h1><h2>Work in progress...</h2>")
      break

    case "#sida2":
      $("main").html("<h1>Sida 2</h1><h2>Work in progress...</h2>")
      break

    case "#sida3":
      $("main").html("<h1>Sida 3</h1><h2>Work in progress...</h2>")
      break

    default:
      $("main").html("<h1>Sidan finns inte</h1>")
  }
}
window.onload = router()
window.onhashchange = router