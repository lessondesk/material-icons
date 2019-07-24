import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const OriginIcon = ({
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
    <path d='M12,2.13C12,2.23 11.95,2.33 11.89,2.41C11.5,3 11.16,3.64 11.04,4.33L11,4.56L12,4.5C16.14,4.5 19.5,7.86 19.5,12C19.5,13.62 19,15.11 18.12,16.34C16.73,18.68 14.72,20.65 12.34,21.97C12.25,22 12.12,22 12.06,21.93C12,21.83 12,21.7 12.09,21.61C12.47,21.09 12.73,20.5 12.87,19.85L12.93,19.44L12,19.5C7.86,19.5 4.5,16.14 4.5,12C4.5,10.39 5,8.89 5.88,7.67C7.26,5.32 9.28,3.34 11.67,2C11.78,1.95 11.94,2 12,2.13M12,9C10.34,9 9,10.34 9,12C9,13.66 10.34,15 12,15C13.66,15 15,13.66 15,12C15,10.34 13.66,9 12,9Z' />
  </Svg>
)

OriginIcon.displayName = 'OriginIcon'

OriginIcon.defaultProps = {
  size: 24
}

export default OriginIcon