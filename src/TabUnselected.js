import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const TabUnselectedIcon = ({
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
    <path d='M1,9H3V7H1V9M1,13H3V11H1V13M1,5H3V3C1.9,3 1,3.9 1,5M9,21H11V19H9V21M1,17H3V15H1V17M3,21V19H1C1,20.1 1.9,21 3,21M21,3H13V9H23V5C23,3.9 22.1,3 21,3M21,17H23V15H21V17M9,5H11V3H9V5M5,21H7V19H5V21M5,5H7V3H5V5M21,21C22.1,21 23,20.1 23,19H21V21M21,13H23V11H21V13M13,21H15V19H13V21M17,21H19V19H17V21Z' />
  </Svg>
)

TabUnselectedIcon.displayName = 'TabUnselectedIcon'

TabUnselectedIcon.defaultProps = {
  size: 24
}

export default TabUnselectedIcon