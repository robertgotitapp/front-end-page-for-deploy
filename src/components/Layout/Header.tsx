import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Box } from '@mui/material';
import { NavItemProps, EmptyProps } from 'def/common';

function NavItem({
  text, path, isInactive = true, start = false, end = false,
}: NavItemProps) {
  return (
    <Link to={path}>
      <Typography
        sx={{
          paddingRight: start || (start === end && start === false) ? '8px' : 0,
          paddingLeft: end || (start === end && start === false) ? '8px' : 0,
          color: 'primary.main',
        }}
      >
        {text}
      </Typography>
    </Link>
  );
}

const Header: React.FC<EmptyProps> = () => (
  <Box
    sx={{
      paddingTop: '8px',
      position: 'absolute',
      width: '100%',
    }}
    className="u-flex u-justifyContentCenter"
  >
    <NavItem
      text="Home"
      path="/"
      start
    />
    <NavItem
      text="Resume"
      path="/resume"
    />
    <NavItem
      text="Blog"
      path="/blog"
    />
    <NavItem
      text="Contact"
      path="/contact"
      end
    />
  </Box>
);

export default Header;
