import { ReactComponent as Remove } from "../assets/images/icon-remove.svg"

export const Badge =({
variant = 'basic',
colorScheme = 'light',
children, 
onClear, 
onClick}) => (
	<div className={`badge badge--${variant} badge--${colorScheme}`} onClick={onClick}>
		<span>
			{children}
		</span>
		{variant === 'clearable' && (
			<div className="badge-remover" onClick={onClear}>
				<Remove />
			</div>
		)}
	</div>
);
