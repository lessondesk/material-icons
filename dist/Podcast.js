import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const PodcastIcon = ({
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
    <path d='M17,18.25V21.5H7V18.25C7,16.87 9.24,15.75 12,15.75C14.76,15.75 17,16.87 17,18.25M12,5.5C15.59,5.5 18.5,8.41 18.5,12C18.5,13.25 18.15,14.42 17.54,15.41L16,14.04C16.32,13.43 16.5,12.73 16.5,12C16.5,9.5 14.5,7.5 12,7.5C9.5,7.5 7.5,9.5 7.5,12C7.5,12.73 7.68,13.43 8,14.04L6.46,15.41C5.85,14.42 5.5,13.25 5.5,12C5.5,8.41 8.41,5.5 12,5.5M12,1.5C17.8,1.5 22.5,6.2 22.5,12C22.5,14.28 21.77,16.39 20.54,18.11L19.04,16.76C19.96,15.4 20.5,13.76 20.5,12C20.5,7.31 16.69,3.5 12,3.5C7.31,3.5 3.5,7.31 3.5,12C3.5,13.76 4.04,15.4 4.96,16.76L3.46,18.11C2.23,16.39 1.5,14.28 1.5,12C1.5,6.2 6.2,1.5 12,1.5M12,9.5C13.38,9.5 14.5,10.62 14.5,12C14.5,13.38 13.38,14.5 12,14.5C10.62,14.5 9.5,13.38 9.5,12C9.5,10.62 10.62,9.5 12,9.5Z' />
  </Svg>
)

PodcastIcon.displayName = 'PodcastIcon'

PodcastIcon.defaultProps = {
  size: 24
}

export default PodcastIcon