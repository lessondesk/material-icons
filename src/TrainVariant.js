import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const TrainVariantIcon = ({
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
    <path d='M18,10H6V5H18M12,17C10.89,17 10,16.1 10,15C10,13.89 10.89,13 12,13C13.1,13 14,13.9 14,15C14,16.1 13.1,17 12,17M4,15.5C4,17.43 5.57,19 7.5,19L6,20.5V21H18V20.5L16.5,19C18.43,19 20,17.43 20,15.5V5C20,1.5 16.42,1 12,1C7.58,1 4,1.5 4,5V15.5Z' />
  </Svg>
)

TrainVariantIcon.displayName = 'TrainVariantIcon'

TrainVariantIcon.defaultProps = {
  size: 24
}

export default TrainVariantIcon