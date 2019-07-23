import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const TrainCarIcon = ({
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
    <path d='M12,4H5C3.34,4 2,5.34 2,7V15C2,16.66 3.34,18 5,18L4,19V20H5L7,17.97L9,18V13H4V6H13V8H15V7C15,5.34 13.66,4 12,4M5,14C5.55,14 6,14.45 6,15C6,15.55 5.55,16 5,16C4.45,16 4,15.55 4,15C4,14.45 4.45,14 5,14M20.57,9.66C20.43,9.26 20.05,9 19.6,9H12.41C11.95,9 11.58,9.26 11.43,9.66L10,13.77V19.28C10,19.66 10.32,20 10.7,20H11.32C11.7,20 12,19.62 12,19.24V18H20V19.24C20,19.62 20.31,20 20.69,20H21.3C21.68,20 22,19.66 22,19.28V17.91L22,13.77L20.57,9.66M12.41,10H19.6L20.63,13H11.38L12.41,10M12,16C11.45,16 11,15.55 11,15C11,14.45 11.45,14 12,14C12.55,14 13,14.45 13,15C13,15.55 12.55,16 12,16M20,16C19.45,16 19,15.55 19,15C19,14.45 19.45,14 20,14C20.55,14 21,14.45 21,15C21,15.55 20.55,16 20,16Z' />
  </Svg>
)

TrainCarIcon.displayName = 'TrainCarIcon'

TrainCarIcon.defaultProps = {
  size: 24
}

export default TrainCarIcon