import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FileSearchOutlineIcon = ({
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
    <path d='M14,2H6C4.9,2 4,2.9 4,4V20C4,21.1 4.9,22 6,22H13C12.59,21.75 12.2,21.44 11.86,21.1C11.53,20.77 11.25,20.4 11,20H6V4H13V9H18V10.18C18.71,10.34 19.39,10.61 20,11V8L14,2M20.31,18.9C21.64,16.79 21,14 18.91,12.68C16.8,11.35 14,12 12.69,14.08C11.35,16.19 12,18.97 14.09,20.3C15.55,21.23 17.41,21.23 18.88,20.32L22,23.39L23.39,22L20.31,18.9M16.5,19C15.12,19 14,17.88 14,16.5C14,15.12 15.12,14 16.5,14C17.88,14 19,15.12 19,16.5C19,17.88 17.88,19 16.5,19Z' />
  </Svg>
)

FileSearchOutlineIcon.displayName = 'FileSearchOutlineIcon'

FileSearchOutlineIcon.defaultProps = {
  size: 24
}

export default FileSearchOutlineIcon