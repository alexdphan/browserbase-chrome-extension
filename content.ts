import type { PlasmoCSConfig } from "plasmo"

export const config: PlasmoCSConfig = {
  matches: ["https://www.browserbase.com/*"]
}

window.addEventListener("load", () => {
  console.log(
    "Welcome to Browserbase! You've successfully loaded the Browserbase Extension, as well as this content script :)"
  )

})