export function dumbAction(text) {
  return {
    type: "CONSOLE_LOG",
    payload: text
  }
}
