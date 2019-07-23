import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const PierCraneIcon = ({
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
    <path d='M20,20C18.61,20 17.22,19.53 16,18.67C13.56,20.38 10.44,20.38 8,18.67C6.78,19.53 5.39,20 4,20H2V22H4C5.37,22 6.74,21.65 8,21C10.5,22.3 13.5,22.3 16,21C17.26,21.65 18.62,22 20,22H22V20H20M20,4V3C20,2.45 19.55,2 19,2H9V1H6V2H5V4H6V13H5V11H3V13H2V15H3V19H4C4.33,19 4.67,18.97 5,18.92V15H10V18.65C10.65,18.85 11.33,18.95 12,18.95V18.92L12,15H13V13H12V11H10V13H9V4H17V8.62C16.53,8.79 16.19,9.23 16.19,9.76C16.19,10.2 16.43,10.6 16.8,10.82V12H17.42C17.76,12 18.03,12.28 18.03,12.62C18.03,12.96 17.76,13.24 17.42,13.24C17.2,13.24 17,13.12 16.88,12.93C16.71,12.64 16.34,12.54 16.05,12.71C15.75,12.87 15.65,13.25 15.82,13.55C16.15,14.11 16.76,14.47 17.42,14.47C18.43,14.47 19.26,13.64 19.26,12.62C19.26,11.84 18.76,11.14 18.03,10.88V10.82C18.41,10.6 18.65,10.2 18.65,9.76C18.65,9.3 18.38,8.91 18,8.7V4H20M8,11.66L7,12.66V11.24L8,10.24V11.66M8,8.71L7,9.71V8.29L8,7.29V8.71M7,6.71V5.29L8,4.29V5.71L7,6.71Z' />
  </Svg>
)

PierCraneIcon.displayName = 'PierCraneIcon'

PierCraneIcon.defaultProps = {
  size: 24
}

export default PierCraneIcon