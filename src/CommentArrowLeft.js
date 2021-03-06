import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const CommentArrowLeftIcon = ({
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
    <path d='M9,22C8.45,22 8,21.55 8,21V18H4C2.9,18 2,17.1 2,16V4C2,2.89 2.9,2 4,2H20C21.11,2 22,2.9 22,4V16C22,17.11 21.11,18 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22H9M16.17,11.12V9.05H11.53L13.33,7.25L12.09,6L8,10.09L12.09,14.17L13.33,12.92L11.53,11.12H16.17Z' />
  </Svg>
)

CommentArrowLeftIcon.displayName = 'CommentArrowLeftIcon'

CommentArrowLeftIcon.defaultProps = {
  size: 24
}

export default CommentArrowLeftIcon