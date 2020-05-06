import React from "react"
import { Router } from "@reach/router"

import DefaultPage from "../templates/Page/DefaultPage"
import CoverPage from "../templates/Page/CoverPage"
import FullWidthPage from "../templates/Page/FullWidthPage"
import HomePage from "../templates/Page/HomePage"

import HTML from "../components/HTML/HTML"

import { PreviewResponse, Preview } from "../contracts/preview"
import { Templates } from "../contracts/templates"

export interface Props {
  location: Location
  path: string
}

const PreviewComponent = (props: Props) => {
  const location = props?.location
  const pathname = location?.pathname

  const [preview, setPreview] = React.useState<Preview | null | false>(null)
  const [layout, setLayout] = React.useState<Templates | null>(null)

  const [a, b, id, rev, type, c, wpnonce] = pathname.split("/")

  const handlePreview = () => {
    const rootURL = "http://34.83.12.100/wp-json"
    // checking if the post/page is a draft or a revision.
    let postUrl = `${rootURL}/wp/v2/${type}s/${id}`
    if (status === "draft") {
      postUrl = `${rootURL}/wp/v2/${type}s/${rev}?_wpnonce=${wpnonce}`
    }

    fetch(postUrl)
      .then((res) => res.json())
      .then((json: PreviewResponse) => {
        const { preview_content } = json
        console.log("handlePreview -> json", json)

        const preview = Object.entries(preview_content).sort(
          (a, b) => b[1].ID - a[1].ID
        )[0][1]
        console.log("handlePreview -> previews", preview)

        setLayout(json.template)
        setPreview(preview)
      })
  }

  React.useEffect(() => {
    handlePreview()
  }, [])

  if (preview === null) {
    return <div style={{ paddingTop: 200 }}>Loading Preview ...</div>
  }

  if (preview === false) {
    return <div style={{ paddingTop: 200 }}>Could not load preview</div>
  }

  switch (layout) {
    case "":
      return (
        <DefaultPage
          pageContext={{ page: { node: preview } }}
          location={location}
        />
      )
    case "templates/template-cover.php" || "templates/template-project.php":
      return (
        <CoverPage
          pageContext={{ page: { node: preview } }}
          location={location}
        />
      )
    case "templates/template-full-width.php":
      return (
        <FullWidthPage
          pageContext={{ page: { node: preview } }}
          location={location}
        />
      )

    default:
      if (typeof preview !== "object") {
        return <div style={{ paddingTop: 200 }}>Could not load preview</div>
      }

      return (
        <>
          <div style={{ paddingTop: 200 }}>
            <HTML html={preview?.post_content} />
          </div>
        </>
      )
  }
}

const PreviewPage = () => (
  <Router>
    <PreviewComponent path="*" />
  </Router>
)

export default PreviewPage
