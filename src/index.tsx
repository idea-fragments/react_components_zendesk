import React, { useState } from "react"

export const TestComponent = () => {
  const [a, setA] = useState(32)
  console.log("theme", a)
  return <button>TestComponent</button>
}

const AnotherComponent = () => {
  return <button>AnotherComponent</button>
}
export default AnotherComponent
