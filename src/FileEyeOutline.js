import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FileEyeOutlineIcon = ({
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
    <path d='M17,18C17.56,18 18,18.44 18,19C18,19.56 17.56,20 17,20C16.44,20 16,19.56 16,19C16,18.44 16.44,18 17,18M17,15C14.27,15 11.94,16.66 11,19C11.94,21.34 14.27,23 17,23C19.73,23 22.06,21.34 23,19C22.06,16.66 19.73,15 17,15M17,21.5C15.62,21.5 14.5,20.38 14.5,19C14.5,17.62 15.62,16.5 17,16.5C18.38,16.5 19.5,17.62 19.5,19C19.5,20.38 18.38,21.5 17,21.5M9.27,20H6V4H13V9H18V13.07C18.7,13.15 19.36,13.32 20,13.56V8L14,2H6C4.9,2 4,2.9 4,4V20C4,21.1 4.9,22 6,22H10.5C10,21.41 9.59,20.73 9.27,20Z' />
  </Svg>
)

FileEyeOutlineIcon.displayName = 'FileEyeOutlineIcon'

FileEyeOutlineIcon.defaultProps = {
  size: 24
}

export default FileEyeOutlineIcon