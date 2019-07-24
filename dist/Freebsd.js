import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FreebsdIcon = ({
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
    <path d='M2.69,2C3.54,1.95 6.08,3.16 6.13,3.19C4.84,4 3.74,5.09 2.91,6.38C2.09,4.81 1.34,2.91 2,2.25C2.17,2.08 2.4,2 2.69,2M20.84,2.13C21.25,2.08 21.58,2.14 21.78,2.34C22.85,3.42 19.88,8.15 19.38,8.66C18.87,9.16 17.57,8.7 16.5,7.63C15.43,6.55 14.97,5.26 15.47,4.75C15.88,4.34 19.09,2.3 20.84,2.13M12,2.56C13.29,2.56 14.53,2.82 15.66,3.28C15.17,3.6 14.81,3.85 14.69,3.97C13.7,4.96 14.14,6.83 15.72,8.41C16.7,9.38 17.84,9.97 18.78,9.97C19.46,9.97 19.92,9.68 20.16,9.44C20.33,9.27 20.6,8.88 20.91,8.41C21.42,9.59 21.69,10.88 21.69,12.25C21.69,17.61 17.36,21.97 12,21.97C6.64,21.97 2.31,17.61 2.31,12.25C2.31,6.89 6.64,2.56 12,2.56Z' />
  </Svg>
)

FreebsdIcon.displayName = 'FreebsdIcon'

FreebsdIcon.defaultProps = {
  size: 24
}

export default FreebsdIcon