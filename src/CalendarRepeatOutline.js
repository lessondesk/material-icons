import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const CalendarRepeatOutlineIcon = ({
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
    <path d='M18,11V12.5C21.19,12.5 23.09,16.05 21.33,18.71L20.24,17.62C21.06,15.96 19.85,14 18,14V15.5L15.75,13.25L18,11M18,22V20.5C14.81,20.5 12.91,16.95 14.67,14.29L15.76,15.38C14.94,17.04 16.15,19 18,19V17.5L20.25,19.75L18,22M19,3H18V1H16V3H8V1H6V3H5C3.9,3 3,3.9 3,5V19C3,20.1 3.9,21 5,21H14C13.36,20.45 12.86,19.77 12.5,19H5V9H19V10.59C19.71,10.7 20.39,10.94 21,11.31V5C21,3.9 20.1,3 19,3M19,7H5V5H19' />
  </Svg>
)

CalendarRepeatOutlineIcon.displayName = 'CalendarRepeatOutlineIcon'

CalendarRepeatOutlineIcon.defaultProps = {
  size: 24
}

export default CalendarRepeatOutlineIcon