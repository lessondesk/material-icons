import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const SortVariantLockOpenIcon = ({
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
    <path d='M3,13V11H15V13H3M3,6H21V8H3V6M3,18V16H9V18H3M22,22H14V18H15V16C15,14.34 16.34,13 18,13C19.66,13 21,14.34 21,16H19C19,15.45 18.55,15 18,15C17.45,15 17,15.45 17,16V18H22V22Z' />
  </Svg>
)

SortVariantLockOpenIcon.displayName = 'SortVariantLockOpenIcon'

SortVariantLockOpenIcon.defaultProps = {
  size: 24
}

export default SortVariantLockOpenIcon