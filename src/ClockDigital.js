import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ClockDigitalIcon = ({
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
    <path d='M2,6C0.9,6 0,6.9 0,8V16C0,17.1 0.9,18 2,18H22C23.1,18 24,17.1 24,16V8C24,6.9 23.1,6 22,6M2,8H22V16H2M3,9V10.5H6.25L3,15H4.75L8,10.5V9M9.25,9V10.5H10.75V9M12,9V10.5H13.5V15H15V9M17,9C16.45,9 16,9.45 16,10V14C16,14.55 16.45,15 17,15H20C20.55,15 21,14.55 21,14V10C21,9.45 20.55,9 20,9M17.5,10.5H19.5V13.5H17.5M9.25,13.5V15H10.75V13.5' />
  </Svg>
)

ClockDigitalIcon.displayName = 'ClockDigitalIcon'

ClockDigitalIcon.defaultProps = {
  size: 24
}

export default ClockDigitalIcon