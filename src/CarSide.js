import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const CarSideIcon = ({
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
    <path d='M16,6L19,10H21C22.11,10 23,10.89 23,12V15H21C21,16.66 19.66,18 18,18C16.34,18 15,16.66 15,15H9C9,16.66 7.66,18 6,18C4.34,18 3,16.66 3,15H1V12C1,10.89 1.89,10 3,10L6,6H16M10.5,7.5H6.75L4.86,10H10.5V7.5M12,7.5V10H17.14L15.25,7.5H12M6,13.5C5.17,13.5 4.5,14.17 4.5,15C4.5,15.83 5.17,16.5 6,16.5C6.83,16.5 7.5,15.83 7.5,15C7.5,14.17 6.83,13.5 6,13.5M18,13.5C17.17,13.5 16.5,14.17 16.5,15C16.5,15.83 17.17,16.5 18,16.5C18.83,16.5 19.5,15.83 19.5,15C19.5,14.17 18.83,13.5 18,13.5Z' />
  </Svg>
)

CarSideIcon.displayName = 'CarSideIcon'

CarSideIcon.defaultProps = {
  size: 24
}

export default CarSideIcon