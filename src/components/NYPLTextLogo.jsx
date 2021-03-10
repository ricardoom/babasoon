import React from 'react';
import PropTypes from 'prop-types';

const NYPLTextLogo = ({
  className,
  width,
  height,
  viewBox,
  style,
  ariaHidden,
  title,
  fill,
  focusable,
}) => (
  <svg
    className={`${className} svgIcon`}
    width={width}
    height={height}
    viewBox={viewBox}
    style={style}
    aria-hidden={ariaHidden}
    focusable={focusable}
  >
    <title>{title}</title>
    <g className={`${className}-ny`}>
      <path d="M0.74,5.93h5.53l40.7,58.93V5.93h5.32v68.25h-5.23L5.97,14.83v59.35H0.74V5.93z" />
      <path d="M63.04,49.27c0-13.84,8.01-25.12,21.01-25.12c12.53,0,19.38,10.04,18.35,24H68.7c0,0.29,0,0.8,0,1.12
		c0.08,11.16,4.81,21.41,16.49,21.41c6.24,0,11.47-2.55,14.13-4.6l2.28,4.21c-3.08,2.25-8.73,5.03-16.62,5.03
		C70.01,75.31,63.04,63.29,63.04,49.27z M97.08,43.72c-0.12-7.38-3.89-14.94-13.23-14.94c-8.49,0-13.43,6.54-14.86,14.94H97.08z"/>
      <path d="M108.63,25.29h5.74l11.9,40.68l12.8-40.68h5.26l12.78,40.79l12.02-40.79h5.32l-14.77,48.89h-4.89l-13.21-41.21
		l-13.25,41.21h-4.93L108.63,25.29z"/>
      <path d="M222.09,48.45L199.22,5.93h6.38l19.36,36.87h0.17l19.37-36.87h5.75l-22.62,42.52v25.73h-5.53V48.45z" />
      <path d="M245.62,49.8c0-12.32,6.58-25.65,21.94-25.65c15.41,0,22.48,13.24,22.48,25.44c0,12.27-7,25.73-22.36,25.73
		C252.33,75.31,245.62,62.07,245.62,49.8z M284.41,49.8c0-10.97-5.84-21.01-17.02-21.01c-11.05,0-16.07,9.83-16.07,20.8
		c0,11.05,5.39,21.09,16.49,21.09C278.98,70.68,284.41,60.85,284.41,49.8z"/>
        <path d="M300.23,25.29h5.36v8.52c1.82-3.59,6.25-9.66,13.12-9.66c2.28,0,3.88,0.51,4.72,0.84l-1.31,5.02
		c-0.84-0.34-1.98-0.72-4-0.72c-6.78,0-11.18,7.97-12.53,10.84v34.04h-5.36V25.29z"/>
        <path d="M333.28,0.39h5.33v73.78h-5.33V0.39z M339.08,46.72l21.47-21.43h6.62l-21.64,21.43l22.78,27.46h-6.66
		L339.08,46.72z"/>
    </g>
    <g className={`${className}-public`}>
      <path d="M0.81,108.73h14.88c14.34,0,23.37,7.09,23.37,19.28c0,12.31-8.52,19.99-24,19.99h-8.6v29.02H0.81V108.73z
		 M14.97,143.19c12.99,0,18.35-5.95,18.35-14.97c0-8.52-5.15-14.67-18.14-14.67H6.45v29.65H14.97z"/>
      <path d="M47.66,162.67V128.1h5.32v33.43c0,7.17,2.57,11.77,10.04,11.77c7.3,0,13.33-6.87,14.97-9.74V128.1h5.31v39.47
		c0,3.88,0.42,7.59,0.93,9.45H78.8c-0.3-1.69-0.72-5.34-0.72-8.01c-2.34,3.71-7.9,9.14-16.17,9.14
		C51.66,178.14,47.66,171.45,47.66,162.67z"/>
      <path d="M96.63,174.44V103.2h5.34v29.4c2.97-3.38,7.78-5.61,12.8-5.61c13.96,0,20.71,11.17,20.71,25.39
		c0,13.75-9.24,25.76-24.17,25.76C105.45,178.14,100.01,176.71,96.63,174.44z M129.84,152.6c0-10.67-4.11-20.8-16-20.8
		c-4.17,0-9.11,2.45-11.87,5.53v34.25c2.25,1.14,5.63,1.9,9.53,1.9C123.89,173.47,129.84,162.72,129.84,152.6z"/>
      <path d="M147.44,103.2h5.36v73.82h-5.36V103.2z" />
      <path d="M167.31,113.66c0-2.36,1.86-4.09,4.01-4.09c2.28,0,4.13,1.73,4.13,4.09c0,2.36-1.86,4.19-4.13,4.19
		C169.17,117.85,167.31,116.02,167.31,113.66z M168.65,128.1h5.41v48.91h-5.41V128.1z"/>
      <path d="M184.35,152.51c0-15.48,8.9-25.52,21.51-25.52c7.3,0,11.89,2.74,14.54,5.1l-2.77,3.91
		c-2.74-2.35-6.45-4.42-11.89-4.42c-10.85,0-15.78,9.45-15.78,20.71c0,10.84,4.85,21.18,15.71,21.18c5.64,0,10.36-2.45,12.52-4.35
		l2.32,3.98c-2.62,2.34-7.76,5.03-15.18,5.03C191.29,178.14,184.35,165.59,184.35,152.51z"/>
    </g>
    <g className={`${className}-library`}>
      <path d="M0.74,279.99v-68.25h14.55v56.54h25.43v11.7H0.74z" />
      <path d="M58.37,223.64c-4.81,0-8.3-3.84-8.3-8.19c0-4.31,3.49-8.01,8.3-8.01c4.81,0,8.4,3.71,8.4,8.01
		C66.77,219.8,63.18,223.64,58.37,223.64z M51.51,279.99v-49.9h13.74v49.9H51.51z"/>
      <path d="M90.85,206.17v27.8c2.27-2.28,6.66-5.15,12.22-5.15c12.5,0,21.2,8.6,21.2,25.82
		c0,17.04-11.49,26.58-26.55,26.58c-11.26,0-18.14-2.88-20.5-3.98v-71.08H90.85z M90.85,269.4c0.92,0.32,3.08,1.14,6.87,1.14
		c7.59,0,12.1-5.61,12.1-15.9c0-9.32-3.17-15.06-10.54-15.06c-4.3,0-7.59,2.82-8.43,3.84V269.4z"/>
      <path d="M162.64,242.05c-0.84-0.49-2.4-1.08-5.27-1.08c-6.03,0-9.62,5.32-10.88,7.55v31.47h-13.6v-49.9h13.6v6.75
		c2.15-3.71,6.28-8.02,12.61-8.02c3.71,0,5.69,0.72,6.78,1.37L162.64,242.05z"/>
      <path d="M198.66,279.99c-0.42-1.27-0.72-3.8-0.8-5.32c-2.24,2.62-6.97,6.55-14.02,6.55c-8.55,0-15.09-5.11-15.09-14.02
		c0-13.03,13.42-17.75,26.62-17.75h1.78v-2.87c0-4.3-1.78-7-8.1-7c-6.45,0-10.88,3.42-12.74,4.72L170.4,236
		c2.99-2.62,9.5-7.17,20.2-7.17c13.62,0,20.08,5.27,20.08,18.48v17.93c0,6.75,0.72,11.6,1.43,14.76H198.66z M197.14,257.86h-1.78
		c-7.93,0-13.5,2.34-13.5,8.21c0,3.65,3,5.19,6.03,5.19c4.93,0,7.8-2.87,9.24-4.41V257.86z"/>
      <path d="M251.88,242.05c-0.84-0.49-2.4-1.08-5.27-1.08c-6.03,0-9.62,5.32-10.87,7.55v31.47H222.1v-49.9h13.64v6.75
		c2.16-3.71,6.27-8.02,12.6-8.02c3.71,0,5.69,0.72,6.81,1.37L251.88,242.05z"/>
      <path d="M259.83,230.09h14.51l11.1,32.86h0.5l10.17-32.86h14.04l-20.62,55.21c-4.42,11.77-9.62,18.64-23.24,18.64
		c-4.18,0-6.71-0.59-7.72-0.89l1.98-10.75c0.71,0.17,1.86,0.46,4.77,0.46c7,0,9.44-3.33,11.43-8.67l1.86-5.12L259.83,230.09z"/>
    </g>
  </svg>
);

NYPLTextLogo.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  viewBox: PropTypes.string,
  fill: PropTypes.string,
  ariaHidden: PropTypes.bool,
  style: PropTypes.object,
  focusable: PropTypes.bool,
};

NYPLTextLogo.defaultProps = {
  className: 'nyplTextLogo',
  title: 'New York Public Library',
  ref: 'nyplTextLogo',
  type: '',
  height: '303.95',
  width: '368.31',
  viewBox: '0 0 368.31 303.95',
  fill: '#000',
};

export default NYPLTextLogo;