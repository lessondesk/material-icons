import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ServerIcon = ({
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
    <path d='M4,1H20C20.55,1 21,1.45 21,2V6C21,6.55 20.55,7 20,7H4C3.45,7 3,6.55 3,6V2C3,1.45 3.45,1 4,1M4,9H20C20.55,9 21,9.45 21,10V14C21,14.55 20.55,15 20,15H4C3.45,15 3,14.55 3,14V10C3,9.45 3.45,9 4,9M4,17H20C20.55,17 21,17.45 21,18V22C21,22.55 20.55,23 20,23H4C3.45,23 3,22.55 3,22V18C3,17.45 3.45,17 4,17M9,5H10V3H9V5M9,13H10V11H9V13M9,21H10V19H9V21M5,3V5H7V3H5M5,11V13H7V11H5M5,19V21H7V19H5Z' />
  </Svg>
)

ServerIcon.displayName = 'ServerIcon'

ServerIcon.defaultProps = {
  size: 24
}

export default ServerIcon