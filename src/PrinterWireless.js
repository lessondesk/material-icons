import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const PrinterWirelessIcon = ({
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
    <path d='M4.93,3.92L6.34,5.33C9.46,2.2 14.53,2.2 17.66,5.33L19.07,3.92C15.17,0 8.84,0 4.93,3.92M7.76,6.75L9.17,8.16C10.73,6.6 13.26,6.6 14.83,8.16L16.24,6.75C13.9,4.41 10.1,4.41 7.76,6.75M19,14C18.45,14 18,13.55 18,13C18,12.45 18.45,12 19,12C19.55,12 20,12.45 20,13C20,13.55 19.55,14 19,14M16,20H8V15H16V20M19,10H5C3.34,10 2,11.34 2,13V18H6V22H18V18H22V13C22,11.34 20.66,10 19,10Z' />
  </Svg>
)

PrinterWirelessIcon.displayName = 'PrinterWirelessIcon'

PrinterWirelessIcon.defaultProps = {
  size: 24
}

export default PrinterWirelessIcon