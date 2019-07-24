import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const RobotVacuumVariantIcon = ({
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
    <path d='M5,3C3.9,3 3,3.9 3,5V7H5V5H19V7H21V5C21,3.9 20.1,3 19,3H5M8,7V9H16V7H8M3,9V12C3,16.97 7.03,21 12,21C16.97,21 21,16.97 21,12V9H19V12C19,15.87 15.87,19 12,19C8.13,19 5,15.87 5,12V9H3M12,12C10.62,12 9.5,13.12 9.5,14.5C9.5,15.88 10.62,17 12,17C13.38,17 14.5,15.88 14.5,14.5C14.5,13.12 13.38,12 12,12Z' />
  </Svg>
)

RobotVacuumVariantIcon.displayName = 'RobotVacuumVariantIcon'

RobotVacuumVariantIcon.defaultProps = {
  size: 24
}

export default RobotVacuumVariantIcon