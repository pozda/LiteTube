import React from 'react'
import styled from 'styled-components'
import styles from 'styles/values'

const StyledIcon = styled.svg``

export interface Props {
	d: string;
	width?: number;
	height?: number;
	color?: string;
}

const viewBox = '0 0 24 24'

const res = {
    /* eslint-disable */
    LOGO: 'M2.43 23.77C.395 22.592.395 1.421 2.43.243 4.47-.932 22.803 9.654 22.803 12.006c0 2.352-18.334 12.94-20.373 11.763zm172.772-322.9v-557.124l482.484 278.56z',
    SEARCH: 'M21.066 16.552c3.782-3.781 3.782-9.934 0-13.716-3.781-3.781-9.934-3.781-13.716 0-3.208 3.208-3.694 7.98-1.459 11.705 0 0 .16.27-.056.486L.887 19.976c-.985.985-1.22 2.362-.346 3.235l.15.15c.874.874 2.25.64 3.236-.345l4.937-4.938c.228-.227.497-.067.497-.067 3.726 2.235 8.497 1.75 11.705-1.459zm-11.925-1.79c-2.794-2.795-2.794-7.34 0-10.135 2.794-2.794 7.34-2.794 10.134 0 2.795 2.794 2.795 7.34 0 10.135-2.794 2.794-7.34 2.794-10.134 0zm.619-5.643a1 1 0 01-.922-1.392 6.309 6.309 0 018.26-3.347 1.001 1.001 0 01-.78 1.843 4.304 4.304 0 00-5.636 2.284 1.001 1.001 0 01-.922.612z',
    /* eslint-enable */
}

const Icon = ({d, width = 24, height = 24, color}: Props) => (
    <StyledIcon
        viewBox={viewBox}
        aria-hidden='true'
        role='presentation'
        width={width}
        height={height}
    >
        <path d={d} fill={color || styles.color.shade.DARK} />
    </StyledIcon>
)
Icon.res = res

export default Icon