import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const CalendarWeekBeginIcon = ({
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
    <path d='M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3H18V1M9,10H7V17H9V10Z' />
  </Svg>
)

CalendarWeekBeginIcon.displayName = 'CalendarWeekBeginIcon'

CalendarWeekBeginIcon.defaultProps = {
  size: 24
}

export default CalendarWeekBeginIcon