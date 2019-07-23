import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FolderKeyNetworkIcon = ({
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
    <path d='M6,5C4.89,5 4,5.89 4,7V15C4,16.1 4.9,17 6,17H11V19H10C9.45,19 9,19.45 9,20H2V22H9C9,22.55 9.45,23 10,23H14C14.55,23 15,22.55 15,22H22V20H15C15,19.45 14.55,19 14,19H13V17H18C19.1,17 20,16.1 20,15V9C20,7.9 19.1,7 18,7H12L10,5H6M9,9C10.31,9 11.42,9.83 11.83,11H17V13H16V15H14V13H11.83C11.42,14.17 10.31,15 9,15C7.34,15 6,13.66 6,12C6,10.34 7.34,9 9,9M9,11C8.45,11 8,11.45 8,12C8,12.56 8.45,13 9,13C9.55,13 10,12.55 10,12C10,11.45 9.55,11 9,11Z' />
  </Svg>
)

FolderKeyNetworkIcon.displayName = 'FolderKeyNetworkIcon'

FolderKeyNetworkIcon.defaultProps = {
  size: 24
}

export default FolderKeyNetworkIcon