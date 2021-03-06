import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const TransitConnectionIcon = ({
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
    <path d='M15,12C15,10.7 14.16,9.6 13,9.18V6.82C14.16,6.4 15,5.3 15,4C15,2.34 13.66,1 12,1C10.34,1 9,2.34 9,4C9,5.3 9.84,6.4 11,6.82V9.19C9.84,9.6 9,10.7 9,12C9,13.3 9.84,14.4 11,14.82V17.18C9.84,17.6 9,18.7 9,20C9,21.66 10.34,23 12,23C13.66,23 15,21.66 15,20C15,18.7 14.16,17.6 13,17.18V14.82C14.16,14.4 15,13.3 15,12M12,3C12.55,3 13,3.45 13,4C13,4.55 12.55,5 12,5C11.45,5 11,4.55 11,4C11,3.45 11.45,3 12,3M12,21C11.45,21 11,20.55 11,20C11,19.45 11.45,19 12,19C12.55,19 13,19.45 13,20C13,20.55 12.55,21 12,21Z' />
  </Svg>
)

TransitConnectionIcon.displayName = 'TransitConnectionIcon'

TransitConnectionIcon.defaultProps = {
  size: 24
}

export default TransitConnectionIcon