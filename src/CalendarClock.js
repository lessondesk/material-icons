import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const CalendarClockIcon = ({
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
    <path d='M15,13H16.5V15.82L18.94,17.23L18.19,18.53L15,16.69V13M19,8H5V19H9.67C9.24,18.09 9,17.07 9,16C9,12.13 12.13,9 16,9C17.07,9 18.09,9.24 19,9.67V8M5,21C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3H6V1H8V3H16V1H18V3H19C20.1,3 21,3.9 21,5V11.1C22.24,12.36 23,14.09 23,16C23,19.87 19.87,23 16,23C14.09,23 12.36,22.24 11.1,21H5M16,11.15C13.32,11.15 11.15,13.32 11.15,16C11.15,18.68 13.32,20.85 16,20.85C18.68,20.85 20.85,18.68 20.85,16C20.85,13.32 18.68,11.15 16,11.15Z' />
  </Svg>
)

CalendarClockIcon.displayName = 'CalendarClockIcon'

CalendarClockIcon.defaultProps = {
  size: 24
}

export default CalendarClockIcon