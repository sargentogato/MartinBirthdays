const btn = document.getElementById("btn")
const code = 1712
const link = document.querySelector("a")

btn.addEventListener("click", () => {
  let infoInput = document.getElementsByTagName("input")
  const codeToCheck = parseInt(infoInput[0].value)

  if (codeToCheck === code) {
    link.style.display = "block"
  }
})
