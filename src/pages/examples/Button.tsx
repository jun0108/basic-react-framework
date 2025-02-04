function Button() {
	return (
		<div className="">
			<h1 className="text-2xl font-bold  border-solid border-b border-gray-90 pb-1 mb-5">
				Action Button
			</h1>
			<div className="p-3 mb-5 space-y-5">
				<div>
					<h2 className="text-2xl font-bold mb-2">
						Primary Solid
					</h2>
					<div className="flex gap-3 w-full">
						<button type="button" className="btn__full--primary-sm">
							sm
						</button>
						<button type="button" className="btn__full--primary-md">
							md
						</button>
						<button type="button" className="btn__full--primary-md" disabled>
							disabled
						</button>
						<button type="button" className="btn__full--primary-lg">
							lg
						</button>
						<button type="button" className="btn__full--primary-xl">
							xl
						</button>
					</div>
				</div>
				<div>
					<h2 className="text-2xl font-bold mb-2">
						Secondary Solid
					</h2>
					<div className="flex gap-3 w-full">
						<button type="button" className="btn__full--secondary-sm">
							sm
						</button>
	
						<button type="button" className="btn__full--secondary-md">
							md
						</button>
						<button type="button" className="btn__full--secondary-md" disabled>
							disabled
						</button>
						<button type="button" className="btn__full--secondary-lg">
							lg
						</button>
						<button type="button" className="btn__full--secondary-xl">
							xl
						</button>
					</div>
				</div>
				<div>
					<h2 className="text-2xl font-bold mb-2">
						Primary Line
					</h2>
					<div className="flex gap-3 w-full">
						<button type="button" className="btn__line--primary-sm">
							sm
						</button>
	
						<button type="button" className="btn__line--primary-md">
							md
						</button>
						<button type="button" className="btn__line--primary-md" disabled>
							disabled
						</button>
						<button type="button" className="btn__line--primary-lg">
							lg
						</button>
						<button type="button" className="btn__line--primary-xl">
							xl
						</button>
					</div>
				</div>
				<div>
					<h2 className="text-2xl font-bold mb-2">
						Secondary Line
					</h2>
					<div className="flex gap-3 w-full">
						<button type="button" className="btn__line--secondary-sm">
							sm
						</button>
	
						<button type="button" className="btn__line--secondary-md">
							md
						</button>
						<button type="button" className="btn__line--secondary-md" disabled>
							disabled
						</button>
						<button type="button" className="btn__line--secondary-lg">
							lg
						</button>
						<button type="button" className="btn__line--secondary-xl">
							xl
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Button
