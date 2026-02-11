import React from 'react';

const TripadvisorIcon = ({ className = '', alt = 'Tripadvisor logo' }) => (
  <img
    className={className}
    src="https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/omnibus/tripadvidor%20logo.webp"
    alt={alt}
    loading="lazy"
  />
);

export default TripadvisorIcon;
