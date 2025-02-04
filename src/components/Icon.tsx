
export interface IIcon {
  name: string;
  extension?: string;
  alt: string;
  width: string;
  height: string;
}

function Icon({ name, extension = "svg", alt = "", width, height }: IIcon) {
	return (
		<img
			src={`/icon/${name}.${extension ?? "svg"}`}
			alt={alt ?? "icon"}
			width={`${width}px`}
			height={`${height}px`}
		/>
	);
}

export default Icon;