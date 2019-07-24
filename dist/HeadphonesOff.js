import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const HeadphonesOffIcon = ({
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
    <path d='M12,1C16.97,1 21,5.03 21,10V17C21,17.62 20.81,18.19 20.5,18.67L15,13.18V12H19V10C19,6.13 15.87,3 12,3C10,3 8.23,3.82 6.96,5.14L5.55,3.72C7.18,2.04 9.47,1 12,1M2.78,3.5L20.5,21.22L19.23,22.5L16.73,20H15V18.27L9,12.27V20H6C4.34,20 3,18.66 3,17V10C3,8.89 3.2,7.82 3.57,6.84L1.5,4.77L2.78,3.5M5.17,8.44C5.06,8.94 5,9.46 5,10V12H8.73L5.17,8.44Z' />
  </Svg>
)

HeadphonesOffIcon.displayName = 'HeadphonesOffIcon'

HeadphonesOffIcon.defaultProps = {
  size: 24
}

export default HeadphonesOffIcon