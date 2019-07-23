import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const PrinterOffIcon = ({
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
    <path d='M6,3V4.18L8.82,7H18V3H6M2.28,3L1,4.27L4.75,8C3.19,8.15 2,9.44 2,11V17H6V21H17.73L19.73,23L21,21.72L2.28,3M9.82,8L18.82,17H22V11C22,9.34 20.66,8 19,8H9.82M19,10C19.55,10 20,10.45 20,11C20,11.55 19.55,12 19,12C18.45,12 18,11.55 18,11C18,10.45 18.45,10 19,10M8,14H10.73L15.73,19H8V14Z' />
  </Svg>
)

PrinterOffIcon.displayName = 'PrinterOffIcon'

PrinterOffIcon.defaultProps = {
  size: 24
}

export default PrinterOffIcon