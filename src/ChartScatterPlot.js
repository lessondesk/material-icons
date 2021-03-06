import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ChartScatterPlotIcon = ({
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
    <path d='M2,2H4V20H22V22H2V2M9,10C10.66,10 12,11.34 12,13C12,14.66 10.66,16 9,16C7.34,16 6,14.66 6,13C6,11.34 7.34,10 9,10M13,2C14.66,2 16,3.34 16,5C16,6.66 14.66,8 13,8C11.34,8 10,6.66 10,5C10,3.34 11.34,2 13,2M18,12C19.66,12 21,13.34 21,15C21,16.66 19.66,18 18,18C16.34,18 15,16.66 15,15C15,13.34 16.34,12 18,12Z' />
  </Svg>
)

ChartScatterPlotIcon.displayName = 'ChartScatterPlotIcon'

ChartScatterPlotIcon.defaultProps = {
  size: 24
}

export default ChartScatterPlotIcon