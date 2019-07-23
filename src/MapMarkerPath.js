import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const MapMarkerPathIcon = ({
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
    <path d='M18,15C19.66,15 21,16.34 21,18C21,19.66 19.66,21 18,21C16.69,21 15.58,20.17 15.17,19H14V17H15.17C15.58,15.83 16.69,15 18,15M18,17C17.45,17 17,17.45 17,18C17,18.55 17.45,19 18,19C18.55,19 19,18.55 19,18C19,17.45 18.55,17 18,17M18,8C18.79,8 19.43,7.36 19.43,6.57C19.43,5.78 18.79,5.14 18,5.14C17.21,5.14 16.57,5.78 16.57,6.57C16.57,7.36 17.21,8 18,8M18,2.57C20.21,2.57 22,4.36 22,6.57C22,9.56 18,14 18,14C18,14 14,9.56 14,6.57C14,4.36 15.79,2.57 18,2.57M8.83,17H10V19H8.83C8.42,20.17 7.31,21 6,21C4.34,21 3,19.66 3,18C3,16.69 3.83,15.58 5,15.17V14H7V15.17C7.85,15.47 8.53,16.15 8.83,17M6,17C5.45,17 5,17.45 5,18C5,18.55 5.45,19 6,19C6.55,19 7,18.55 7,18C7,17.45 6.55,17 6,17M6,3C7.66,3 9,4.34 9,6C9,7.31 8.17,8.42 7,8.83V10H5V8.83C3.83,8.42 3,7.31 3,6C3,4.34 4.34,3 6,3M6,5C5.45,5 5,5.45 5,6C5,6.55 5.45,7 6,7C6.55,7 7,6.55 7,6C7,5.45 6.55,5 6,5M11,19V17H13V19H11M7,13H5V11H7V13Z' />
  </Svg>
)

MapMarkerPathIcon.displayName = 'MapMarkerPathIcon'

MapMarkerPathIcon.defaultProps = {
  size: 24
}

export default MapMarkerPathIcon