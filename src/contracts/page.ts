import { Templates } from "./templates"
import { FluidObject } from "gatsby-image"

export interface Page {
  id: number
  date: string
  date_gmt: string
  guid: Guid
  modified: string
  modified_gmt: string
  path?: string
  slug: string
  status: string
  type: string
  link: string
  title: string
  content: Content
  excerpt: Excerpt
  author: number
  featured_media: Media
  parent: number
  menu_order: number
  comment_status: string
  ping_status: string
  template: Templates
  meta: any[]
  polylang_current_lang: string
  polylang_translations: PolylangTranslation[]
  wordpress_id?: string
}

export interface ChildImageFluid {
  fluid?: FluidObject
}

export interface ChildImageSharp {
  childImageSharp?: ChildImageFluid
}

export interface Media {
  localFile?: ChildImageSharp
  file?: ChildImageSharp
}

export interface Guid {
  rendered: string
}

export interface Title {
  rendered: string
}

export interface Content {
  rendered: string
  protected: boolean
}

export interface Excerpt {
  rendered: string
  protected: boolean
}

export interface PolylangTranslation {
  locale: string
  id: number
}
