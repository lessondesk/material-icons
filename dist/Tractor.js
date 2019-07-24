import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const TractorIcon = ({
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
    <path d='M5,4V11.26C3.2,11.9 2,13.6 2,15.5C2,18 4,20 6.5,20C8.79,20 10.71,18.28 10.97,16H15.17C15.06,16.32 15,16.66 15,17C15,18.66 16.34,20 18,20C19.66,20 21,18.66 21,17C21,16.66 20.94,16.32 20.82,16H22V13C22,11.89 21.11,11 20,11H15.04L13.65,4H5M7,6H12L13,11V14H10.74C10.16,12.38 8.71,11.23 7,11.03V6M6.5,13.25C7.74,13.25 8.75,14.26 8.75,15.5C8.75,16.74 7.74,17.75 6.5,17.75C5.26,17.75 4.25,16.74 4.25,15.5C4.25,14.26 5.26,13.25 6.5,13.25M18,15.5C18.83,15.5 19.5,16.17 19.5,17C19.5,17.83 18.83,18.5 18,18.5C17.17,18.5 16.5,17.83 16.5,17C16.5,16.17 17.17,15.5 18,15.5Z' />
  </Svg>
)

TractorIcon.displayName = 'TractorIcon'

TractorIcon.defaultProps = {
  size: 24
}

export default TractorIcon