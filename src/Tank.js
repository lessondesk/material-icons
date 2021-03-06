import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const TankIcon = ({
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
    <path d='M20,12H4V11H6L7,6H12L13,11H20V12M13.22,7L13.62,9H22V7H13.22M22,16C22,17.66 20.66,19 19,19H5C3.34,19 2,17.66 2,16C2,14.34 3.34,13 5,13H19C20.66,13 22,14.34 22,16M6,16C6,15.45 5.55,15 5,15C4.45,15 4,15.45 4,16C4,16.55 4.45,17 5,17C5.55,17 6,16.55 6,16M13,16C13,15.45 12.55,15 12,15C11.45,15 11,15.45 11,16C11,16.55 11.45,17 12,17C12.55,17 13,16.55 13,16M20,16C20,15.45 19.55,15 19,15C18.45,15 18,15.45 18,16C18,16.55 18.45,17 19,17C19.55,17 20,16.55 20,16Z' />
  </Svg>
)

TankIcon.displayName = 'TankIcon'

TankIcon.defaultProps = {
  size: 24
}

export default TankIcon