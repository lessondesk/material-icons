import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const BlenderIcon = ({
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
    <path d='M19,5H17.8L18,2H4L5,4H6L6.94,16.19L5,22H19L17.06,16.17L17.2,14H19C20.3,14 21,12.97 21,12V7C21,5.7 19.97,5 19,5M12,20C11.17,20 10.5,19.33 10.5,18.5C10.5,17.67 11.17,17 12,17C12.83,17 13.5,17.67 13.5,18.5C13.5,19.33 12.83,20 12,20M15.13,15H8.85L8.7,13H13V12H8.62L8.47,10H13V9H8.39L8.24,7H13V6H8.16L8,4H15.86L15.13,15M19,12H17.33L17.67,7H19V12Z' />
  </Svg>
)

BlenderIcon.displayName = 'BlenderIcon'

BlenderIcon.defaultProps = {
  size: 24
}

export default BlenderIcon