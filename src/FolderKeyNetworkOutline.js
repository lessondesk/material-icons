import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FolderKeyNetworkOutlineIcon = ({
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
    <path d='M15,20C15,19.45 14.55,19 14,19H13V17H19C20.1,17 21,16.1 21,15V7C21,5.9 20.1,5 19,5H13L11,3H5C3.9,3 3,3.9 3,5V15C3,16.1 3.9,17 5,17H11V19H10C9.45,19 9,19.45 9,20H2V22H9C9,22.55 9.45,23 10,23H14C14.55,23 15,22.55 15,22H22V20H15M5,15V5H10.17L11.59,6.41L12.17,7H13L19,7V15H5M11.83,10C11.42,8.83 10.31,8 9,8C7.34,8 6,9.34 6,11C6,12.66 7.34,14 9,14C10.31,14 11.42,13.17 11.83,12H14V14H16V12H17V10H11.83M9,12C8.45,12 8,11.55 8,11C8,10.45 8.45,10 9,10C9.55,10 10,10.45 10,11C10,11.55 9.55,12 9,12Z' />
  </Svg>
)

FolderKeyNetworkOutlineIcon.displayName = 'FolderKeyNetworkOutlineIcon'

FolderKeyNetworkOutlineIcon.defaultProps = {
  size: 24
}

export default FolderKeyNetworkOutlineIcon