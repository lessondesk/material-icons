import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const CloudPrintOutlineIcon = ({
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
    <path d='M19,16C20.66,16 22,14.66 22,13C22,11.34 20.66,10 19,10H17.5V9.5C17.5,6.46 15.04,4 12,4C9.5,4 7.37,5.69 6.71,8H6C3.79,8 2,9.79 2,12C2,14.21 3.79,16 6,16V11H18V16H19M19.36,8.04C21.95,8.22 24,10.36 24,13C24,15.76 21.76,18 19,18H18V22H6V18C2.69,18 0,15.31 0,12C0,8.91 2.34,6.36 5.35,6.04C6.6,3.64 9.11,2 12,2C15.64,2 18.67,4.6 19.36,8.04M8,13V20H16V13H8M9,18H15V19H9V18M15,17H9V16H15V17M9,14H15V15H9V14Z' />
  </Svg>
)

CloudPrintOutlineIcon.displayName = 'CloudPrintOutlineIcon'

CloudPrintOutlineIcon.defaultProps = {
  size: 24
}

export default CloudPrintOutlineIcon