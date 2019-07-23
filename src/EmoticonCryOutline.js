import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const EmoticonCryOutlineIcon = ({
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
    <path d='M7.57,20C6.23,20 5.14,18.91 5.14,17.57C5.14,16.5 6.32,14.5 7.57,12.81C8.82,14.5 10,16.5 10,17.57C10,18.91 8.91,20 7.57,20M12,2C6.48,2 2,6.48 2,12C2,13.75 2.45,15.38 3.24,16.81C3.4,16 3.81,15.07 4.31,14.17C4.11,13.5 4,12.75 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20C11.76,20 11.53,20 11.29,19.96C10.82,20.7 10.14,21.28 9.34,21.63C10.19,21.87 11.08,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,14C11.59,14 11.19,14.04 10.81,14.12C11.16,14.75 11.47,15.4 11.69,16C11.79,16 11.89,16 12,16C13.25,16 14.32,16.5 14.77,17.23L16.19,15.81C15.29,14.72 13.75,14 12,14M15.5,8C14.7,8 14,8.7 14,9.5C14,10.3 14.7,11 15.5,11C16.3,11 17,10.3 17,9.5C17,8.7 16.3,8 15.5,8M10,9.5C10,8.7 9.3,8 8.5,8C7.7,8 7,8.7 7,9.5C7,10.3 7.7,11 8.5,11C9.3,11 10,10.3 10,9.5' />
  </Svg>
)

EmoticonCryOutlineIcon.displayName = 'EmoticonCryOutlineIcon'

EmoticonCryOutlineIcon.defaultProps = {
  size: 24
}

export default EmoticonCryOutlineIcon