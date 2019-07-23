import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const CalendarMultipleCheckIcon = ({
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
    <path d='M21,17V8H7V17H21M21,3C22.1,3 23,3.9 23,5V17C23,18.1 22.1,19 21,19H7C5.89,19 5,18.1 5,17V5C5,3.9 5.9,3 7,3H8V1H10V3H18V1H20V3H21M17.53,11.06L13.09,15.5L10.41,12.82L11.47,11.76L13.09,13.38L16.47,10L17.53,11.06M3,21H17V23H3C1.89,23 1,22.1 1,21V9H3V21Z' />
  </Svg>
)

CalendarMultipleCheckIcon.displayName = 'CalendarMultipleCheckIcon'

CalendarMultipleCheckIcon.defaultProps = {
  size: 24
}

export default CalendarMultipleCheckIcon