import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ChartBubbleIcon = ({
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
    <path d='M7.2,11.2C8.97,11.2 10.4,12.63 10.4,14.4C10.4,16.17 8.97,17.6 7.2,17.6C5.43,17.6 4,16.17 4,14.4C4,12.63 5.43,11.2 7.2,11.2M14.8,16C15.9,16 16.8,16.9 16.8,18C16.8,19.1 15.9,20 14.8,20C13.7,20 12.8,19.1 12.8,18C12.8,16.9 13.7,16 14.8,16M15.2,4C17.85,4 20,6.15 20,8.8C20,11.45 17.85,13.6 15.2,13.6C12.55,13.6 10.4,11.45 10.4,8.8C10.4,6.15 12.55,4 15.2,4Z' />
  </Svg>
)

ChartBubbleIcon.displayName = 'ChartBubbleIcon'

ChartBubbleIcon.defaultProps = {
  size: 24
}

export default ChartBubbleIcon