import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const TabRemoveIcon = ({
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
    <path d='M7.46,11.88L8.88,10.46L11,12.59L13.12,10.46L14.54,11.88L12.41,14L14.54,16.12L13.12,17.54L11,15.41L8.88,17.54L7.46,16.12L9.59,14L7.46,11.88M3,3H21C22.1,3 23,3.9 23,5V19C23,20.1 22.1,21 21,21H3C1.9,21 1,20.1 1,19V5C1,3.9 1.9,3 3,3M3,5V19H21V9H13V5H3Z' />
  </Svg>
)

TabRemoveIcon.displayName = 'TabRemoveIcon'

TabRemoveIcon.defaultProps = {
  size: 24
}

export default TabRemoveIcon