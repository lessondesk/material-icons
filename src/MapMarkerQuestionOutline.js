import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const MapMarkerQuestionOutlineIcon = ({
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
    <path d='M12,1C7.59,1 4,4.59 4,9C4,14.57 10.96,22.34 11.26,22.67L12,23.5L12.74,22.67C13.04,22.34 20,14.57 20,9C20,4.59 16.41,1 12,1M12,20.47C9.82,17.86 6,12.54 6,9C6,5.69 8.69,3 12,3C15.31,3 18,5.69 18,9C18,12.83 13.75,18.36 12,20.47M11.13,14H12.88V15.75H11.13M12,5C10.07,5 8.5,6.57 8.5,8.5H10.25C10.25,7.53 11.03,6.75 12,6.75C12.97,6.75 13.75,7.53 13.75,8.5C13.75,10.26 11.13,10.04 11.13,12.88H12.88C12.88,10.91 15.5,10.69 15.5,8.5C15.5,6.57 13.93,5 12,5Z' />
  </Svg>
)

MapMarkerQuestionOutlineIcon.displayName = 'MapMarkerQuestionOutlineIcon'

MapMarkerQuestionOutlineIcon.defaultProps = {
  size: 24
}

export default MapMarkerQuestionOutlineIcon