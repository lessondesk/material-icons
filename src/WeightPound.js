import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const WeightPoundIcon = ({
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
    <path d='M12,3C14.21,3 16,4.79 16,7C16,7.73 15.81,8.41 15.46,9H18C18.95,9 19.75,9.67 19.95,10.56C21.96,18.57 22,18.78 22,19C22,20.1 21.1,21 20,21H4C2.9,21 2,20.1 2,19C2,18.78 2.04,18.57 4.05,10.56C4.25,9.67 5.05,9 6,9H8.54C8.19,8.41 8,7.73 8,7C8,4.79 9.79,3 12,3M12,5C10.9,5 10,5.9 10,7C10,8.1 10.9,9 12,9C13.1,9 14,8.1 14,7C14,5.9 13.1,5 12,5M6,11V19H11V17H8V11H6M13,11V19H16C17.11,19 18,18.11 18,17V16.5C18,15.93 17.75,15.38 17.32,15C17.75,14.62 18,14.07 18,13.5V13C18,11.89 17.11,11 16,11H13M15,13H16V14H15V13M15,16H16V17H15V16Z' />
  </Svg>
)

WeightPoundIcon.displayName = 'WeightPoundIcon'

WeightPoundIcon.defaultProps = {
  size: 24
}

export default WeightPoundIcon