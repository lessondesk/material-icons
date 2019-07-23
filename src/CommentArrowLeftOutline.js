import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const CommentArrowLeftOutlineIcon = ({
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
    <path d='M4,2C2.9,2 2,2.9 2,4V16C2,17.11 2.9,18 4,18H8V21C8,21.55 8.45,22 9,22H9.5V22C9.75,22 10,21.9 10.2,21.71L13.9,18H20C21.11,18 22,17.11 22,16V4C22,2.89 21.1,2 20,2H4M4,4H20V16H13.08L10,19.08V16H4V4M16.17,11.12V9.05H11.53L13.33,7.25L12.09,6L8,10.09L12.09,14.17L13.33,12.92L11.53,11.12H16.17Z' />
  </Svg>
)

CommentArrowLeftOutlineIcon.displayName = 'CommentArrowLeftOutlineIcon'

CommentArrowLeftOutlineIcon.defaultProps = {
  size: 24
}

export default CommentArrowLeftOutlineIcon