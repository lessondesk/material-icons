import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FolderMultipleIcon = ({
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
    <path d='M22,4H14L12,2H6C4.9,2 4,2.9 4,4V16C4,17.1 4.9,18 6,18H22C23.1,18 24,17.1 24,16V6C24,4.9 23.1,4 22,4M2,6H0V11H0V20C0,21.1 0.9,22 2,22H20V20H2V6Z' />
  </Svg>
)

FolderMultipleIcon.displayName = 'FolderMultipleIcon'

FolderMultipleIcon.defaultProps = {
  size: 24
}

export default FolderMultipleIcon