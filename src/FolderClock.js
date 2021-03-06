import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FolderClockIcon = ({
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
    <path d='M3,4C1.89,4 1,4.89 1,6V18C1,19.1 1.9,20 3,20H10.26C11.57,21.88 13.71,23 16,23C19.87,23 23,19.87 23,16C23,14.17 22.28,12.42 21,11.11V8C21,6.89 20.1,6 19,6H11L9,4H3M16,11C18.76,11 21,13.24 21,16C21,18.76 18.76,21 16,21C13.24,21 11,18.76 11,16C11,13.24 13.24,11 16,11M15,12V17L18.61,19.16L19.36,17.94L16.5,16.25V12H15Z' />
  </Svg>
)

FolderClockIcon.displayName = 'FolderClockIcon'

FolderClockIcon.defaultProps = {
  size: 24
}

export default FolderClockIcon