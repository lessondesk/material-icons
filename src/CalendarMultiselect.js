import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const CalendarMultiselectIcon = ({
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
    <path d='M19,19V8H5V19H19M16,1H18V3H19C20.1,3 21,3.9 21,5V19C21,20.1 20.1,21 19,21H5C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3H6V1H8V3H16V1M7,10H9V12H7V10M15,10H17V12H15V10M11,14H13V16H11V14M15,14H17V16H15V14Z' />
  </Svg>
)

CalendarMultiselectIcon.displayName = 'CalendarMultiselectIcon'

CalendarMultiselectIcon.defaultProps = {
  size: 24
}

export default CalendarMultiselectIcon