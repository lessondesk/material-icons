import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const CricketIcon = ({
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
    <path d='M14.34,17.77L15.75,16.36L20,20.58L18.56,22L14.34,17.77M18.5,2C20.43,2 22,3.57 22,5.5C22,7.43 20.43,9 18.5,9C16.57,9 15,7.43 15,5.5C15,3.57 16.57,2 18.5,2M2.24,7.11L5.07,4.28C5.46,3.89 6.09,3.89 6.5,4.28L14.97,12.77C15.36,13.16 15.36,13.79 14.97,14.18L12.14,17C11.75,17.4 11.12,17.4 10.72,17L2.24,8.53C1.85,8.13 1.85,7.5 2.24,7.11Z' />
  </Svg>
)

CricketIcon.displayName = 'CricketIcon'

CricketIcon.defaultProps = {
  size: 24
}

export default CricketIcon