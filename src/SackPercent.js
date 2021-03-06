import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const SackPercentIcon = ({
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
    <path d='M8,7L6,2L10,4L12,2L14,4L18,2L16,7H8M16,22C10,22 8,22 8,22C2,22 3,18 3,18C3,18 4,11 8,9H16C20,11 21,18 21,18C21,18 22,22 16,22M7.5,12.5C7.5,13.33 8.17,14 9,14C9.83,14 10.5,13.33 10.5,12.5C10.5,11.67 9.83,11 9,11C8.17,11 7.5,11.67 7.5,12.5M16.5,18.5C16.5,17.67 15.83,17 15,17C14.17,17 13.5,17.67 13.5,18.5C13.5,19.33 14.17,20 15,20C15.83,20 16.5,19.33 16.5,18.5M16.5,12.35L15.15,11L7.5,18.65L8.87,20L16.5,12.35Z' />
  </Svg>
)

SackPercentIcon.displayName = 'SackPercentIcon'

SackPercentIcon.defaultProps = {
  size: 24
}

export default SackPercentIcon