import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FolderNetworkIcon = ({
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
    <path d='M3,15V5C3,3.9 3.9,3 5,3H11L13,5H19C20.1,5 21,5.9 21,7V15C21,16.1 20.1,17 19,17H13V19H14C14.55,19 15,19.45 15,20H22V22H15C15,22.55 14.55,23 14,23H10C9.45,23 9,22.55 9,22H2V20H9C9,19.45 9.45,19 10,19H11V17H5C3.9,17 3,16.1 3,15Z' />
  </Svg>
)

FolderNetworkIcon.displayName = 'FolderNetworkIcon'

FolderNetworkIcon.defaultProps = {
  size: 24
}

export default FolderNetworkIcon