import { useState } from "react"

function IndexPopup() {
  const [data, setData] = useState("")

  return (
    <div
      style={{
        padding: 16
      }}>
      <h2 className="text-2xl font-bold text-red-500">
        Welcome to your{" "}
        <a href="https://www.browserbase.com" target="_blank" className="text-red-500">
          Browserbase
        </a>{" "}
        Extension!
      </h2>
      <input onChange={(e) => setData(e.target.value)} value={data} />
      <a href="https://docs.browserbase.com" target="_blank">
        View Docs
      </a>
    </div>
  )
}

export default IndexPopup
