import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const CalendarMonthOutlineIcon = ({
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
    <path d='M7,12H9V14H7V12M21,6V20C21,21.1 20.1,22 19,22H5C3.89,22 3,21.1 3,20V6C3,4.9 3.9,4 5,4H6V2H8V4H16V2H18V4H19C20.1,4 21,4.9 21,6M5,8H19V6H5V8M19,20V10H5V20H19M15,14V12H17V14H15M11,14V12H13V14H11M7,16H9V18H7V16M15,18V16H17V18H15M11,18V16H13V18H11Z' />
  </Svg>
)

CalendarMonthOutlineIcon.displayName = 'CalendarMonthOutlineIcon'

CalendarMonthOutlineIcon.defaultProps = {
  size: 24
}

export default CalendarMonthOutlineIcon