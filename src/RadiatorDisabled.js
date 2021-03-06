import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const RadiatorDisabledIcon = ({
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
    <path d='M20,12H4C2.9,12 2,12.9 2,14V22H4V20H20V22H22V14C22,12.9 21.1,12 20,12M7,17C7,17.55 6.55,18 6,18C5.45,18 5,17.55 5,17V15C5,14.45 5.45,14 6,14C6.55,14 7,14.45 7,15V17M11,17C11,17.55 10.55,18 10,18C9.45,18 9,17.55 9,17V15C9,14.45 9.45,14 10,14C10.55,14 11,14.45 11,15V17M15,17C15,17.55 14.55,18 14,18C13.45,18 13,17.55 13,17V15C13,14.45 13.45,14 14,14C14.55,14 15,14.45 15,15V17M19,17C19,17.55 18.55,18 18,18C17.45,18 17,17.55 17,17V15C17,14.45 17.45,14 18,14C18.55,14 19,14.45 19,15V17Z' />
  </Svg>
)

RadiatorDisabledIcon.displayName = 'RadiatorDisabledIcon'

RadiatorDisabledIcon.defaultProps = {
  size: 24
}

export default RadiatorDisabledIcon