import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import './Button.css';

/**
 * Reusable Button / Link component
 *
 * Props:
 *   variant   — 'primary' | 'secondary' | 'dark'   (default: 'primary')
 *   size      — 'sm' | 'md' | 'lg'                 (default: 'md')
 *   href      — string  → renders as <a>
 *   onClick   — fn      → renders as <button>
 *   icon      — ReactNode (default: ArrowUpRight for primary/dark)
 *   showIcon  — boolean  (default: true for primary/dark, false for secondary)
 *   children  — button label
 *   className — extra classes
 *   ...rest   — any other anchor / button props
 */
export function Button({
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  icon,
  showIcon,
  children,
  className = '',
  ...rest
}) {
  // Default icon visibility: show for primary/dark, hide for secondary
  const defaultShowIcon = showIcon !== undefined ? showIcon : variant !== 'secondary';

  const sizeClass = size === 'sm' ? 'btn-sm' : size === 'lg' ? 'btn-lg' : '';
  const classes = ['btn', `btn-${variant}`, sizeClass, className].filter(Boolean).join(' ');

  const iconNode = defaultShowIcon
    ? (icon ?? <ArrowUpRight size={15} strokeWidth={2} />)
    : null;

  const content = (
    <>
      <span>{children}</span>
      {iconNode && <span className="btn-icon">{iconNode}</span>}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes} {...rest}>
      {content}
    </button>
  );
}

export default Button;
