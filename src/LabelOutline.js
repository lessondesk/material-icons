import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const LabelOutlineIcon = ({
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
    <path d='M16,17H5V7H16L19.55,12M17.63,5.84C17.27,5.33 16.67,5 16,5H5C3.9,5 3,5.9 3,7V17C3,18.1 3.9,19 5,19H16C16.67,19 17.27,18.66 17.63,18.15L22,12L17.63,5.84Z' />
  </Svg>
)

LabelOutlineIcon.displayName = 'LabelOutlineIcon'

LabelOutlineIcon.defaultProps = {
  size: 24
}

export default LabelOutlineIcon