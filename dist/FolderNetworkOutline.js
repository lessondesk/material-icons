import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FolderNetworkOutlineIcon = ({
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
    <path d='M15,20C15,19.45 14.55,19 14,19H13V17H19C20.1,17 21,16.1 21,15V7C21,5.9 20.1,5 19,5H13L11,3H5C3.9,3 3,3.9 3,5V15C3,16.1 3.9,17 5,17H11V19H10C9.45,19 9,19.45 9,20H2V22H9C9,22.55 9.45,23 10,23H14C14.55,23 15,22.55 15,22H22V20H15M5,15V5H10.17L11.59,6.41L12.17,7H13L19,7V15H5Z' />
  </Svg>
)

FolderNetworkOutlineIcon.displayName = 'FolderNetworkOutlineIcon'

FolderNetworkOutlineIcon.defaultProps = {
  size: 24
}

export default FolderNetworkOutlineIcon