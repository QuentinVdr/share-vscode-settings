import { Tooltip } from '@mui/material';
import PropTypes from 'prop-types';
import { cloneElement, useLayoutEffect, useRef, useState } from 'react';

/**
 * Component used to display a tooltip only when the children is overflowing
 * @param title title of the tooltip
 * @param children JSX.Element to wrap with the tooltip
 */
export default function OverflowTooltip({ title, children }) {
  const childRef = useRef(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  /** Function used to handle if the children node is overflowing */
  const handleResize = () => {
    if (childRef.current) {
      setIsOverflowing(childRef.current.scrollWidth > childRef.current.clientWidth);
    }
  };

  useLayoutEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (isOverflowing) {
    return <Tooltip title={title}>{cloneElement(children, { ref: childRef })}</Tooltip>;
  }

  return cloneElement(children, { ref: childRef });
}

OverflowTooltip.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
};
