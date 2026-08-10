type ImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  fill?: boolean;
};

export default function Image(props: ImageProps) {
  const { fill: _fill, ...imageProps } = props;
  return <img {...imageProps} alt={imageProps.alt || ''} src={`img/${imageProps.src}`} />;
}
