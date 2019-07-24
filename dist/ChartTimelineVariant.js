import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ChartTimelineVariantIcon = ({
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
    <path d='M3,14L3.5,14.07L8.07,9.5C7.89,8.85 8.06,8.11 8.59,7.59C9.37,6.8 10.63,6.8 11.41,7.59C11.94,8.11 12.11,8.85 11.93,9.5L14.5,12.07L15,12C15.18,12 15.35,12 15.5,12.07L19.07,8.5C19,8.35 19,8.18 19,8C19,6.9 19.9,6 21,6C22.1,6 23,6.9 23,8C23,9.1 22.1,10 21,10C20.82,10 20.65,10 20.5,9.93L16.93,13.5C17,13.65 17,13.82 17,14C17,15.1 16.1,16 15,16C13.9,16 13,15.1 13,14L13.07,13.5L10.5,10.93C10.18,11 9.82,11 9.5,10.93L4.93,15.5L5,16C5,17.1 4.1,18 3,18C1.9,18 1,17.1 1,16C1,14.9 1.9,14 3,14Z' />
  </Svg>
)

ChartTimelineVariantIcon.displayName = 'ChartTimelineVariantIcon'

ChartTimelineVariantIcon.defaultProps = {
  size: 24
}

export default ChartTimelineVariantIcon