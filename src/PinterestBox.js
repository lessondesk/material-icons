import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const PinterestBoxIcon = ({
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
    <path d='M5,3H19C20.1,3 21,3.9 21,5V19C21,20.1 20.1,21 19,21H9.29C9.69,20.33 10.19,19.38 10.39,18.64L11.05,16.34C11.36,16.95 12.28,17.45 13.22,17.45C16.17,17.45 18.22,14.78 18.22,11.45C18.22,8.28 15.64,5.89 12.3,5.89C8.14,5.89 5.97,8.67 5.97,11.72C5.97,13.14 6.69,14.89 7.91,15.45C8.08,15.56 8.19,15.5 8.19,15.34L8.47,14.28C8.5,14.14 8.5,14.06 8.41,14C7.97,13.45 7.69,12.61 7.69,11.78C7.69,9.64 9.3,7.61 12.03,7.61C14.42,7.61 16.08,9.19 16.08,11.5C16.08,14.11 14.75,15.95 13.03,15.95C12.05,15.95 11.39,15.11 11.55,14.17C11.83,13.03 12.39,11.83 12.39,11C12.39,10.22 12,9.61 11.16,9.61C10.22,9.61 9.39,10.61 9.39,11.95C9.39,12.83 9.66,13.39 9.66,13.39L8.55,18.17C8.39,19 8.47,20.25 8.55,21H5C3.9,21 3,20.1 3,19V5C3,3.9 3.9,3 5,3Z' />
  </Svg>
)

PinterestBoxIcon.displayName = 'PinterestBoxIcon'

PinterestBoxIcon.defaultProps = {
  size: 24
}

export default PinterestBoxIcon