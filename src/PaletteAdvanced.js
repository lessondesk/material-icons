import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const PaletteAdvancedIcon = ({
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
    <path d='M22,22H10V20H22V22M2,22V20H9V22H2M18,18V10H22V18H18M18,3H22V9H18V3M2,18V3H16V18H2M9,14.56C10.66,14.56 12,13.22 12,11.56C12,9.56 9,6.19 9,6.19C9,6.19 6,9.56 6,11.56C6,13.22 7.34,14.56 9,14.56Z' />
  </Svg>
)

PaletteAdvancedIcon.displayName = 'PaletteAdvancedIcon'

PaletteAdvancedIcon.defaultProps = {
  size: 24
}

export default PaletteAdvancedIcon