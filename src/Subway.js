import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const SubwayIcon = ({
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
    <path d='M8.5,15C9.05,15 9.5,15.45 9.5,16C9.5,16.55 9.05,17 8.5,17C7.95,17 7.5,16.55 7.5,16C7.5,15.45 7.95,15 8.5,15M7,9H17V14H7V9M15.5,15C16.05,15 16.5,15.45 16.5,16C16.5,16.55 16.05,17 15.5,17C14.95,17 14.5,16.55 14.5,16C14.5,15.45 14.95,15 15.5,15M18,15.88V9C18,6.38 15.32,6 12,6C9,6 6,6.37 6,9V15.88C6,17.33 7.17,18.5 8.62,18.5L7.5,19.62V20H9.17L10.67,18.5H13.5L15,20H16.5V19.62L15.37,18.5C16.82,18.5 18,17.33 18,15.88M17.8,2.8C20.47,3.84 22,6.05 22,8.86V22H2V8.86C2,6.05 3.53,3.84 6.2,2.8C8,2.09 10.14,2 12,2C13.86,2 16,2.09 17.8,2.8Z' />
  </Svg>
)

SubwayIcon.displayName = 'SubwayIcon'

SubwayIcon.defaultProps = {
  size: 24
}

export default SubwayIcon