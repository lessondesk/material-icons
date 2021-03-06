import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const CheckboxMultipleMarkedIcon = ({
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
    <path d='M22,16C22,17.1 21.1,18 20,18H8C6.89,18 6,17.1 6,16V4C6,2.89 6.89,2 8,2H20C21.1,2 22,2.9 22,4V16M16,20V22H4C2.9,22 2,21.1 2,20V7H4V20H16M13,14L20,7L18.59,5.59L13,11.17L9.91,8.09L8.5,9.5L13,14Z' />
  </Svg>
)

CheckboxMultipleMarkedIcon.displayName = 'CheckboxMultipleMarkedIcon'

CheckboxMultipleMarkedIcon.defaultProps = {
  size: 24
}

export default CheckboxMultipleMarkedIcon