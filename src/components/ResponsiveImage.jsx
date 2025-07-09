export const ResponsiveImage = ({ src, srcSet, sizes, alt = '', ...rest }) => {
  return (
    <img
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      style={{ width: '100%', height: 'auto' }}
      {...rest}
    />
  );
};
