import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const RadiatorIcon = ({
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
    <path d='M7.95,3L6.53,5.19L7.95,7.4H7.94L5.95,10.5L4.22,9.6L5.64,7.39L4.22,5.19L6.22,2.09L7.95,3M13.95,2.89L12.53,5.1L13.95,7.3L13.94,7.31L11.95,10.4L10.22,9.5L11.64,7.3L10.22,5.1L12.22,2L13.95,2.89M20,2.89L18.56,5.1L20,7.3V7.31L18,10.4L16.25,9.5L17.67,7.3L16.25,5.1L18.25,2L20,2.89M2,22V14C2,12.9 2.9,12 4,12H20C21.1,12 22,12.9 22,14V22H20V20H4V22H2M6,14C5.45,14 5,14.45 5,15V17C5,17.55 5.45,18 6,18C6.55,18 7,17.55 7,17V15C7,14.45 6.55,14 6,14M10,14C9.45,14 9,14.45 9,15V17C9,17.55 9.45,18 10,18C10.55,18 11,17.55 11,17V15C11,14.45 10.55,14 10,14M14,14C13.45,14 13,14.45 13,15V17C13,17.55 13.45,18 14,18C14.55,18 15,17.55 15,17V15C15,14.45 14.55,14 14,14M18,14C17.45,14 17,14.45 17,15V17C17,17.55 17.45,18 18,18C18.55,18 19,17.55 19,17V15C19,14.45 18.55,14 18,14Z' />
  </Svg>
)

RadiatorIcon.displayName = 'RadiatorIcon'

RadiatorIcon.defaultProps = {
  size: 24
}

export default RadiatorIcon