import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const IpNetworkOutlineIcon = ({
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
    <path d='M15,20C15,19.45 14.55,19 14,19H13V17H17C18.1,17 19,16.1 19,15V5C19,3.9 18.1,3 17,3H7C5.9,3 5,3.9 5,5V15C5,16.1 5.9,17 7,17H11V19H10C9.45,19 9,19.45 9,20H2V22H9C9,22.55 9.45,23 10,23H14C14.55,23 15,22.55 15,22H22V20H15M7,15V5H17V15H7M10,6H8V14H10V6M14,6H11V14H13V12H14C15.1,12 16,11.1 16,10V8C16,6.9 15.1,6 14,6M14,10H13V8H14V10Z' />
  </Svg>
)

IpNetworkOutlineIcon.displayName = 'IpNetworkOutlineIcon'

IpNetworkOutlineIcon.defaultProps = {
  size: 24
}

export default IpNetworkOutlineIcon