import * as React from 'react'
import { Pagination } from "semantic-ui-react"

interface Props {
  totalPages: number
  activePage: number
  onPageChange?: (number) => void
}

export default (props: Props) => <Pagination totalPages={props.totalPages}
                                             activePage={props.activePage}
                                             ellipsisItem={undefined}
                                             boundaryRange={0}
                                             siblingRange={2}
                                             onPageChange={(_, { activePage }) => props.onPageChange(activePage)}
                                             prevItem={undefined}
                                             nextItem={undefined}/>