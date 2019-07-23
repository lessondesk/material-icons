import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const MapMarkerDistanceIcon = ({
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
    <path d='M6.5,8.11C5.61,8.11 4.89,7.39 4.89,6.5C4.89,5.61 5.61,4.89 6.5,4.89C7.39,4.89 8.11,5.61 8.11,6.5V6.5C8.11,7.39 7.39,8.11 6.5,8.11M6.5,2C4,2 2,4 2,6.5C2,9.87 6.5,14.86 6.5,14.86C6.5,14.86 11,9.87 11,6.5C11,4 9,2 6.5,2M17.5,8.11C16.61,8.11 15.89,7.39 15.89,6.5C15.89,5.61 16.61,4.89 17.5,4.89C18.39,4.89 19.11,5.61 19.11,6.5C19.11,7.39 18.39,8.11 17.5,8.11M17.5,2C15,2 13,4 13,6.5C13,9.87 17.5,14.86 17.5,14.86C17.5,14.86 22,9.87 22,6.5C22,4 20,2 17.5,2M17.5,16C16.23,16 15.1,16.8 14.68,18H9.32C8.77,16.44 7.05,15.62 5.5,16.17C3.93,16.72 3.11,18.44 3.66,20C4.22,21.56 5.93,22.38 7.5,21.83C8.35,21.53 9,20.85 9.32,20H14.69C15.24,21.56 16.96,22.38 18.5,21.83C20.08,21.28 20.9,19.56 20.35,18C19.92,16.8 18.78,16 17.5,16V16M17.5,20.5C16.67,20.5 16,19.83 16,19C16,18.17 16.67,17.5 17.5,17.5C18.33,17.5 19,18.17 19,19C19,19.83 18.33,20.5 17.5,20.5Z' />
  </Svg>
)

MapMarkerDistanceIcon.displayName = 'MapMarkerDistanceIcon'

MapMarkerDistanceIcon.defaultProps = {
  size: 24
}

export default MapMarkerDistanceIcon