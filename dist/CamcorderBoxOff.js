import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const CamcorderBoxOffIcon = ({
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
    <path d='M6,8H6.73L14,15.27V16H6M2.27,1L1,2.27L3,4.28C2.41,4.62 2,5.26 2,6V18C2,19.1 2.9,20 4,20H18.73L20.73,22L22,20.73M20,4H7.82L11.82,8H14V10.18L14.57,10.75L18,8V14.18L22,18.17C22,18.11 22,18.06 22,18V6C22,4.9 21.1,4 20,4Z' />
  </Svg>
)

CamcorderBoxOffIcon.displayName = 'CamcorderBoxOffIcon'

CamcorderBoxOffIcon.defaultProps = {
  size: 24
}

export default CamcorderBoxOffIcon