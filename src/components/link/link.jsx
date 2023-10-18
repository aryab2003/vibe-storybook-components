import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import CoreLink from '../../helpers/components/Link/Link';
import styles from './link.module.scss';

//added type annotations to convert it to typescipt code
interface LinkProps {
  children?: string;
  href?: string;
  size?: 'small' | 'medium';
  withoutSpacing?: boolean;
  className?: string;
}

const Link: React.FC<LinkProps> = ({ children, href, size, withoutSpacing, className }) => (
  <CoreLink
    text={children}
    href={href}
    className={cx(styles.compsLink, className, {
      [styles.small]: size === 'small',
      [styles.medium]: size === 'medium',
      [styles.withSpacing]: !withoutSpacing,
    })}
  />
);

Link.defaultProps = {
  className: undefined,
  children: undefined,
  href: undefined,
  size: 'medium',
  withoutSpacing: false,
};

export default Link;
