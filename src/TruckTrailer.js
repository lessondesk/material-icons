import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const TruckTrailerIcon = ({
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
    <path d='M22,15V17H10C10,18.66 8.66,20 7,20C5.34,20 4,18.66 4,17H2V6C2,4.9 2.9,4 4,4H17C18.1,4 19,4.9 19,6V15H22M7,16C6.45,16 6,16.45 6,17C6,17.55 6.45,18 7,18C7.55,18 8,17.55 8,17C8,16.45 7.55,16 7,16Z' />
  </Svg>
)

TruckTrailerIcon.displayName = 'TruckTrailerIcon'

TruckTrailerIcon.defaultProps = {
  size: 24
}

export default TruckTrailerIcon