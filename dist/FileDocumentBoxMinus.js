import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FileDocumentBoxMinusIcon = ({
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
    <path d='M22,17V19H14V17H22M12,17V15H7V17H12M17,11H7V13H14.69C13.07,14.07 12,15.91 12,18C12,19.09 12.29,20.12 12.8,21H5C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3H19C20.1,3 21,3.9 21,5V12.8C20.12,12.29 19.09,12 18,12L17,12.08V11M17,9V7H7V9H17Z' />
  </Svg>
)

FileDocumentBoxMinusIcon.displayName = 'FileDocumentBoxMinusIcon'

FileDocumentBoxMinusIcon.defaultProps = {
  size: 24
}

export default FileDocumentBoxMinusIcon