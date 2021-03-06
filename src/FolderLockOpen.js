import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FolderLockOpenIcon = ({
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
    <path d='M20,6C21.1,6 22,6.9 22,8V18C22,19.1 21.1,20 20,20H4C2.89,20 2,19.1 2,18V6C2,4.89 2.89,4 4,4H10L12,6H20M19,17V13H18L16,13H14V11C14,10.45 14.45,10 15,10C15.55,10 16,10.45 16,11H18C18,9.34 16.66,8 15,8C13.34,8 12,9.34 12,11V13H11V17H19Z' />
  </Svg>
)

FolderLockOpenIcon.displayName = 'FolderLockOpenIcon'

FolderLockOpenIcon.defaultProps = {
  size: 24
}

export default FolderLockOpenIcon