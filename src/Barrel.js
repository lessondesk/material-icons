import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const BarrelIcon = ({
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
    <path d='M18,19H19V21H5V19H6V13H5V11H6V5H5V3H19V5H18V11H19V13H18V19M9,13C9,14.66 10.34,16 12,16C13.66,16 15,14.66 15,13C15,11 12,7.63 12,7.63C12,7.63 9,11 9,13Z' />
  </Svg>
)

BarrelIcon.displayName = 'BarrelIcon'

BarrelIcon.defaultProps = {
  size: 24
}

export default BarrelIcon