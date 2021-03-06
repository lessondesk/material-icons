import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const TrainIcon = ({
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
    <path d='M12,2C8,2 4,2.5 4,6V15.5C4,17.43 5.57,19 7.5,19L6,20.5V21H8.23L10.23,19H14L16,21H18V20.5L16.5,19C18.43,19 20,17.43 20,15.5V6C20,2.5 16.42,2 12,2M7.5,17C6.67,17 6,16.33 6,15.5C6,14.67 6.67,14 7.5,14C8.33,14 9,14.67 9,15.5C9,16.33 8.33,17 7.5,17M11,10H6V6H11V10M13,10V6H18V10H13M16.5,17C15.67,17 15,16.33 15,15.5C15,14.67 15.67,14 16.5,14C17.33,14 18,14.67 18,15.5C18,16.33 17.33,17 16.5,17Z' />
  </Svg>
)

TrainIcon.displayName = 'TrainIcon'

TrainIcon.defaultProps = {
  size: 24
}

export default TrainIcon