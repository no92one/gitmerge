import page2 from "./page2.js"
import page3 from "./page3.js"
import homepage from "./homepage.js"

function router() {
  switch (window.location.hash) {
    case "":
      $("main").html(homepage())
      break

    case "#sida2":
      $("main").html(page2())
      break

    case "#sida3":
      $("main").html(page3())
      break

    default:
      $("main").html("<h1>Sidan finns inte</h1>")
  }
}

window.onload = router()
window.onhashchange = router