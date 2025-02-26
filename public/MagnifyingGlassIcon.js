import React from 'react';
/**
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.title - The title for the SVG element.
 * @param {string} props.titleId - The ID for the title element.
 * @param {Object} svgRef - The reference to the SVG element.
 */
const MagnifyingGlassIcon = ({ title, titleId, ...props }, svgRef) => {
    return /*#__PURE__*/ React.createElement(
        'svg',
        Object.assign(
            {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                strokeWidth: 1.5,
                stroke: 'currentColor',
                'aria-hidden': 'true',
                'data-slot': 'icon',
                ref: svgRef,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React.createElement('path', {
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            d: 'm21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z',
        })
    );
};
const ForwardRef = /*#__PURE__*/ React.forwardRef(MagnifyingGlassIcon);
export default ForwardRef;
