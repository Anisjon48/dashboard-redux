export const Card = ({children, isFeatured, className}) => {
	return (
		<div className={`card${isFeatured ? ' card--featured' : ''}${className ? ' ' + className : ''}`}>
			{children}
		</div>
	)
}