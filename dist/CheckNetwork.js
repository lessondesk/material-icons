import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const CheckNetworkIcon = ({
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
    <path d='M15,20C15,19.45 14.55,19 14,19H13V17H17C18.1,17 19,16.1 19,15V5C19,3.9 18.1,3 17,3H7C5.9,3 5,3.9 5,5V15C5,16.1 5.9,17 7,17H11V19H10C9.45,19 9,19.45 9,20H2V22H9C9,22.55 9.45,23 10,23H14C14.55,23 15,22.55 15,22H22V20H15M8.25,10.08L9.41,8.92L11,10.5L14.59,6.92L15.75,8.33L11,13.08L8.25,10.08Z' />
  </Svg>
)

CheckNetworkIcon.displayName = 'CheckNetworkIcon'

CheckNetworkIcon.defaultProps = {
  size: 24
}

export default CheckNetworkIcon