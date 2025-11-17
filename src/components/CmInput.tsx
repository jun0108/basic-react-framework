import { useState, useRef, forwardRef, useImperativeHandle, ChangeEvent } from 'react'
import Icon from './Icon'
import { TextfieldWrapper, TextfieldLabel, TextfieldSuffixButton, TextfieldMessage, CustomInput } from '~/styles/components/Textfield'

interface IBasicInputProps {
	type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url'
	label?: string
	placeholder?: string
	width?: string
	size?: 'sm' | 'md' | 'lg'
	required?: boolean
	disabled?: boolean
	minlength?: number
	maxlength?: number
	clearable?: boolean
	readonly?: boolean
	usePassword?: boolean
	isSearch?: boolean
	value?: string
	validMessage?: string
	status?: 'success' | 'error' | ''
	uppercase?: boolean
	onFocus?: () => void
	onSearch?: () => void
	onChange?: (value: string) => void
	onValidMessageChange?: (message: string) => void
	onStatusChange?: (status: 'success' | 'error' | '') => void
}

interface CmInputRef {
	handleFocus: () => void
}

const CmInput = forwardRef<CmInputRef, IBasicInputProps>(({
	type = 'text',
	label = '',
	placeholder = '',
	width = '100%',
	size = 'md',
	required = false,
	disabled = false,
	minlength,
	maxlength,
	clearable = true,
	readonly = false,
	usePassword = false,
	isSearch = false,
	value = '',
	validMessage = '',
	status = '',
	uppercase = false,
	onFocus,
	onSearch,
	onChange,
	onValidMessageChange,
	onStatusChange
}, ref) => {
	const [inputValue, setInputValue] = useState(value)
	const [internalValidMessage, setInternalValidMessage] = useState(validMessage)
	const [internalStatus, setInternalStatus] = useState(status)
	const [showPassword, setShowPassword] = useState(false)
	const [inputType, setInputType] = useState(type)
	const inputRef = useRef<HTMLInputElement>(null)

	const handleFocus = () => {
		inputRef.current?.focus()
	}

	useImperativeHandle(ref, () => ({
		handleFocus
	}))

	const onInput = (e: ChangeEvent<HTMLInputElement>) => {
		let newValue = e.target.value

		if (uppercase) {
			newValue = newValue.toUpperCase()
		}

		setInputValue(newValue)
		onChange?.(newValue)

		if (internalValidMessage) {
			setInternalValidMessage('')
			setInternalStatus('')
			onValidMessageChange?.('')
			onStatusChange?.('')
		}
	}

	const togglePasswordVisibility = () => {
		const newShowPassword = !showPassword
		setShowPassword(newShowPassword)
		setInputType(newShowPassword ? 'text' : 'password')
	}

	const clearInput = () => {
		setInputValue('')
		onChange?.('')
		inputRef.current?.focus()
	}

	const handleInputFocus = () => {
		onFocus?.()
	}

	const handleSearch = () => {
		onSearch?.()
	}

	return (
		<TextfieldWrapper style={{ width }}>
			{label && (
				<TextfieldLabel required={required}>
					{label}
				</TextfieldLabel>
			)}
			<CustomInput
				size={size}
				disabled={disabled}
				readonly={readonly}
				status={internalStatus}
			>
				<input
					ref={inputRef}
					value={inputValue}
					type={usePassword ? inputType : type}
					placeholder={placeholder}
					disabled={disabled}
					minLength={minlength}
					maxLength={maxlength}
					readOnly={readonly}
					onChange={onInput}
					onFocus={handleInputFocus}
				/>

				<div className="flex items-center space-x-[4px]">
					{inputValue && clearable && !disabled && !readonly && (
						<TextfieldSuffixButton
							type="button"
							onClick={clearInput}
						>
							<Icon
								name="clear__full--abb"
								width="24"
								height="24"
								alt="내용 초기화"
							/>
						</TextfieldSuffixButton>
					)}

					{usePassword && (
						<TextfieldSuffixButton
							type="button"
							onClick={togglePasswordVisibility}
						>
							<Icon
								name={showPassword ? "eye__line--abb" : "eye-dash__line--abb"}
								width="24"
								height="24"
								alt={showPassword ? "비밀번호 가리기" : "비밀번호 보기"}
							/>
						</TextfieldSuffixButton>
					)}

					{isSearch && (
						<TextfieldSuffixButton type="button" onClick={handleSearch}>
							<Icon
								name="search__line--abb"
								width="24"
								height="24"
								alt=""
							/>
						</TextfieldSuffixButton>
					)}
				</div>
			</CustomInput>

			{internalValidMessage && (
				<TextfieldMessage
					internalStatus={internalStatus}
				>
					{internalValidMessage}
				</TextfieldMessage>
			)}
		</TextfieldWrapper>
	)
})

CmInput.displayName = 'CmInput'

export default CmInput
