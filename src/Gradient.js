import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const GradientIcon = ({
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
    <path d='M11,9H13V11H11V9M9,11H11V13H9V11M13,11H15V13H13V11M15,9H17V11H15V9M7,9H9V11H7V9M19,3H5C3.9,3 3,3.9 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.9 20.1,3 19,3M9,18H7V16H9V18M13,18H11V16H13V18M17,18H15V16H17V18M19,11H17V13H19V15H17V13H15V15H13V13H11V15H9V13H7V15H5V13H7V11H5V5H19V11Z' />
  </Svg>
)

GradientIcon.displayName = 'GradientIcon'

GradientIcon.defaultProps = {
  size: 24
}

export default GradientIcon