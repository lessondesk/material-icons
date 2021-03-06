import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const AlarmSnoozeIcon = ({
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
    <path d='M7.88,3.39L6.6,1.86L2,5.71L3.29,7.24L7.88,3.39M22,5.72L17.4,1.86L16.11,3.39L20.71,7.25L22,5.72M12,4C7.03,4 3,8.03 3,13C3,17.97 7.03,22 12,22C16.97,22 21,17.97 21,13C21,8.03 16.97,4 12,4M12,20C8.13,20 5,16.87 5,13C5,9.13 8.13,6 12,6C15.87,6 19,9.13 19,13C19,16.87 15.87,20 12,20M9,11H12.63L9,15.2V17H15V15H11.37L15,10.8V9H9V11Z' />
  </Svg>
)

AlarmSnoozeIcon.displayName = 'AlarmSnoozeIcon'

AlarmSnoozeIcon.defaultProps = {
  size: 24
}

export default AlarmSnoozeIcon