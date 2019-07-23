import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const TapeMeasureIcon = ({
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
    <path d='M9,5C12.87,5 16,8.13 16,12H17V15H16V19H9C5.13,19 2,15.87 2,12C2,8.13 5.13,5 9,5M9,8C6.79,8 5,9.79 5,12C5,14.21 6.79,16 9,16C11.21,16 13,14.21 13,12C13,9.79 11.21,8 9,8M17,17H22V19L22,21H20V19H17V17Z' />
  </Svg>
)

TapeMeasureIcon.displayName = 'TapeMeasureIcon'

TapeMeasureIcon.defaultProps = {
  size: 24
}

export default TapeMeasureIcon