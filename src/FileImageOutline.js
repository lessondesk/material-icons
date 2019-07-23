import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FileImageOutlineIcon = ({
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
    <path d='M14,2L20,8V20C20,21.1 19.1,22 18,22H6C4.9,22 4,21.1 4,20V4C4,2.9 4.9,2 6,2H14M18,20V9H13V4H6V20H18M17,13V19H7L12,14L14,16M10,10.5C10,11.33 9.33,12 8.5,12C7.67,12 7,11.33 7,10.5C7,9.67 7.67,9 8.5,9C9.33,9 10,9.67 10,10.5Z' />
  </Svg>
)

FileImageOutlineIcon.displayName = 'FileImageOutlineIcon'

FileImageOutlineIcon.defaultProps = {
  size: 24
}

export default FileImageOutlineIcon