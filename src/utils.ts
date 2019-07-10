import * as moment from "moment"
import { kebabCase } from 'lodash'

type ParamType = "category" | "tag" | "none"

export const formatBlogCategoryPath = (name: string) : string  => `/blog/categories/${kebabCase(name)}`

export const formatBlogTagPath = (name: string) : string => `/blog/tags/${kebabCase(name)}`

export const formatReadableDate = (date: string) : string => moment(`${date}`, "YYYY-MM-DD HH:mm").format("MMMM Do, YYYY HH:mm")

export const formatUrlDate = (date: string) : string => moment(`${date}`, "YYYY-MM-DD HH:mm").format("YYYY-MM-DD-HH-mm")

export const formatPostPath = (date: string, title: string, paramType: ParamType | string, param?: string | null) : string => {
  let basePath = "/blog"
  const paramPath = param ? kebabCase(param) : ""

  if (paramType === "category") {
    basePath = `/blog/categories/${paramPath}`
  } else if (paramType === "tag") {
    basePath = `/blog/tags/${paramPath}`
  }

  return `${basePath}/posts/${formatUrlDate(date)}-${kebabCase(title)}`
}

export const formatPagePath = (index: number = 0, paramType: 'category' | 'tag', param?: string | null) : string => {
  let basePath = "/blog"
  const paramPath = param ? kebabCase(param) : ""

  if (paramPath) {
    if (paramType === "category") {
      basePath = `/blog/categories/${paramPath}`
    } else if (paramType === "tag") {
      basePath = `/blog/tags/${paramPath}`
    }
  }

  if (index !== 0) {
    basePath = `${basePath}/pages/${index + 1}`
  }

  return basePath
}




