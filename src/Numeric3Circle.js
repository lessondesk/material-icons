import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const Numeric3CircleIcon = ({
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
    <path d='M15,15V13.5C15,12.67 14.33,12 13.5,12C14.33,12 15,11.33 15,10.5V9C15,7.89 14.1,7 13,7H9V9H13V11H11V13H13V15H9V17H13C14.1,17 15,16.1 15,15M12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,6.48 6.48,2 12,2Z' />
  </Svg>
)

Numeric3CircleIcon.displayName = 'Numeric3CircleIcon'

Numeric3CircleIcon.defaultProps = {
  size: 24
}

export default Numeric3CircleIcon