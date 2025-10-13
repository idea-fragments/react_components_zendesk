#!/usr/bin/env node

const readline = require("readline")
const { spawn } = require("child_process")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

console.log("\n⚠️  Rolling up the component library will take a lot of memory.")
console.log("   Be sure to have at least 12 gigs of RAM available.\n")

rl.question("Continue (y/n)? ", (answer) => {
  rl.close()

  const normalizedAnswer = answer.trim().toLowerCase()

  if (normalizedAnswer === "y" || normalizedAnswer === "yes") {
    console.log("\n✓ Starting rollup...\n")

    const rollupProcess = spawn("rollup", ["--config"], {
      stdio: "inherit",
      shell: true,
      env: { ...process.env, NODE_OPTIONS: "--max-old-space-size=8192" },
    })

    rollupProcess.on("close", (code) => {
      process.exit(code)
    })

    rollupProcess.on("error", (err) => {
      console.error("Failed to start rollup:", err)
      process.exit(1)
    })
  } else {
    console.log("\n✗ Rollup cancelled.\n")
    process.exit(0)
  }
})
