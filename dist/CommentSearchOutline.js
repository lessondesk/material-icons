import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const CommentSearchOutlineIcon = ({
  size,
  ...props
}) => (
  <Svg
    {...props}
    viewBox='0 0 24 24'
    width={size}
    height={size}
    fill='currentcolor'
  >
    <path d='M4,4H9.5C9.25,4.64 9.09,5.31 9.04,6H4V16H10V19.08L13.08,16H18V13.23L20,15.23V16C20,17.1 19.1,18 18,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22H9C8.45,22 8,21.55 8,21V18H4C2.9,18 2,17.1 2,16V6C2,4.89 2.9,4 4,4M15.5,2C18,2 20,4 20,6.5C20,7.38 19.75,8.2 19.31,8.89L22.41,12L21,13.39L17.89,10.31C17.2,10.75 16.38,11 15.5,11C13,11 11,9 11,6.5C11,4 13,2 15.5,2M15.5,4C14.12,4 13,5.12 13,6.5C13,7.88 14.12,9 15.5,9C16.88,9 18,7.88 18,6.5C18,5.12 16.88,4 15.5,4Z' />
  </Svg>
)

CommentSearchOutlineIcon.displayName = 'CommentSearchOutlineIcon'

CommentSearchOutlineIcon.defaultProps = {
  size: 24
}

export default CommentSearchOutlineIcon