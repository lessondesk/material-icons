import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const BusArticulatedEndIcon = ({
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
    <path d='M21.5,6L20,7.5L21.5,9L20,10.5L21.5,12L20,13.5L21.5,15H12.5C12.5,16.66 11.16,18 9.5,18C7.84,18 6.5,16.66 6.5,15H2.5V8C2.5,6.89 3.39,6 4.5,6H21.5M18.5,7.5H15V10H18.5V7.5M13.5,7.5H9.5V10H13.5V7.5M8,7.5H4V10H8V7.5M9.5,13.5C8.67,13.5 8,14.17 8,15C8,15.83 8.67,16.5 9.5,16.5C10.33,16.5 11,15.83 11,15C11,14.17 10.33,13.5 9.5,13.5Z' />
  </Svg>
)

BusArticulatedEndIcon.displayName = 'BusArticulatedEndIcon'

BusArticulatedEndIcon.defaultProps = {
  size: 24
}

export default BusArticulatedEndIcon