import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FileEyeIcon = ({
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
    <path d='M17,18C17.56,18 18,18.44 18,19C18,19.56 17.56,20 17,20C16.44,20 16,19.56 16,19C16,18.44 16.44,18 17,18M17,15C14.27,15 11.94,16.66 11,19C11.94,21.34 14.27,23 17,23C19.73,23 22.06,21.34 23,19C22.06,16.66 19.73,15 17,15M17,21.5C15.62,21.5 14.5,20.38 14.5,19C14.5,17.62 15.62,16.5 17,16.5C18.38,16.5 19.5,17.62 19.5,19C19.5,20.38 18.38,21.5 17,21.5M9.14,19.75L8.85,19L9.14,18.26C10.43,15.06 13.5,13 17,13C18.05,13 19.06,13.21 20,13.56V8L14,2H6C4.89,2 4,2.89 4,4V20C4,21.1 4.9,22 6,22H10.5C9.95,21.34 9.5,20.58 9.14,19.75M13,3.5L18.5,9H13V3.5Z' />
  </Svg>
)

FileEyeIcon.displayName = 'FileEyeIcon'

FileEyeIcon.defaultProps = {
  size: 24
}

export default FileEyeIcon