import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FileDocumentBoxMultipleIcon = ({
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
    <path d='M16,15H9V13H16M19,11H9V9H19M19,7H9V5H19M21,1H7C5.89,1 5,1.89 5,3V17C5,18.11 5.9,19 7,19H21C22.11,19 23,18.11 23,17V3C23,1.89 22.1,1 21,1M3,5V21H19V23H3C1.9,23 1,22.1 1,21V5H3Z' />
  </Svg>
)

FileDocumentBoxMultipleIcon.displayName = 'FileDocumentBoxMultipleIcon'

FileDocumentBoxMultipleIcon.defaultProps = {
  size: 24
}

export default FileDocumentBoxMultipleIcon