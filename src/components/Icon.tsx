
export interface IIcon {
	name: string;
	extension?: string;
	alt: string;
	width: string;
	height: string;
	className?: string;
}

function Icon({ name, extension = "svg", alt = "", width, height, className }: IIcon) {
	return (
		<img
			src={`/icon/${name}.${extension ?? "svg"}`}
			alt={alt ?? "icon"}
			width={`${width}px`}
			height={`${height}px`}
			className={className}
		/>
	);
}

export default Icon;