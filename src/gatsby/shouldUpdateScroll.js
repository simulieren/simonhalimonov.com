export default ({ routerProps: { location } }) => {
  // Check if it is an a element linking to an id
  // on the same site and prevent it from interfering
  if (location.hash.startsWith("#")) return

  if (location.action === "PUSH") {
    window.setTimeout(
      () =>
        window.document
          .querySelector("body")
          .scrollIntoView({ behavior: "smooth", block: "start" }),
      100
    )
  } else {
    window.setTimeout(
      () =>
        window.document
          .querySelector("body")
          .scrollIntoView({ behavior: "smooth", block: "start" }),
      100
    )
  }
  return false
}
