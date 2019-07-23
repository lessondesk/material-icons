import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const CalendarWeekendIcon = ({
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
    <path d='M19,20V9H5V20H19M16,2H18V4H19C20.1,4 21,4.9 21,6V20C21,21.1 20.1,22 19,22H5C3.9,22 3,21.1 3,20V6C3,4.9 3.9,4 5,4H6V2H8V4H16V2M7,18V11H9V18H7M15,11H17V18H15V11Z' />
  </Svg>
)

CalendarWeekendIcon.displayName = 'CalendarWeekendIcon'

CalendarWeekendIcon.defaultProps = {
  size: 24
}

export default CalendarWeekendIcon