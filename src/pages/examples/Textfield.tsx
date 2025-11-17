import { useState, useRef } from 'react'
import CmInput from '~/components/CmInput'
import { PageTitle, PageSubTitle } from "~/styles/layout/Wrapper";

function Textfield() {
	const [basicValue, setBasicValue] = useState('')
	const [emailValue, setEmailValue] = useState('')
	const [passwordValue, setPasswordValue] = useState('')
	const [searchValue, setSearchValue] = useState('')
	const [disabledValue] = useState('Disabled input')
	const [readonlyValue] = useState('Readonly input')
	const [errorValue, setErrorValue] = useState('')
	const [errorMessage, setErrorMessage] = useState('이 필드는 필수입니다')
	const [uppercaseValue, setUppercaseValue] = useState('')

	const inputRef = useRef<{ handleFocus: () => void }>(null)

	const handleBasicChange = (value: string) => {
		setBasicValue(value)
	}

	const handleEmailChange = (value: string) => {
		setEmailValue(value)
	}

	const handlePasswordChange = (value: string) => {
		setPasswordValue(value)
	}

	const handleSearchChange = (value: string) => {
		setSearchValue(value)
	}

	const handleSearch = () => {
		alert(`검색어: ${searchValue}`)
	}

	const handleErrorChange = (value: string) => {
		setErrorValue(value)
		if (value.trim()) {
			setErrorMessage('')
		} else {
			setErrorMessage('이 필드는 필수입니다')
		}
	}

	const handleUppercaseChange = (value: string) => {
		setUppercaseValue(value)
	}

	const focusInput = () => {
		inputRef.current?.handleFocus()
	}

	return (
		<div className="">
			<PageTitle className="page__title">
				Textfield Components
			</PageTitle>
			<div className="p-3 mb-5 space-y-8">

				{/* 기본 입력 */}
				<div>
					<PageSubTitle>
						기본 입력
					</PageSubTitle>
					<div className="space-y-4 max-w-md">
						<CmInput
							label="default"
							placeholder="텍스트를 입력해주세요"
							value={basicValue}
							onChange={handleBasicChange}
						/>
						<CmInput
							label="required"
							placeholder="필수 입력 사항입니다"
							required
							value={basicValue}
							onChange={handleBasicChange}
						/>
					</div>
				</div>

				{/* 사이즈 */}
				<div>
					<PageSubTitle>
						사이즈 변형
					</PageSubTitle>
					<div className="space-y-4 max-w-md">
						<CmInput
							size="sm"
							placeholder="Small 사이즈"
							value={basicValue}
							onChange={handleBasicChange}
						/>
						<CmInput
							size="md"
							placeholder="Medium 사이즈 (기본)"
							value={basicValue}
							onChange={handleBasicChange}
						/>
						<CmInput
							size="lg"
							placeholder="Large 사이즈"
							value={basicValue}
							onChange={handleBasicChange}
						/>
					</div>
				</div>

				{/* 입력 타입 */}
				<div>
					<PageSubTitle>
						입력 타입
					</PageSubTitle>
					<div className="space-y-4 max-w-md">
						<CmInput
							type="email"
							label="이메일"
							placeholder="example@email.com"
							value={emailValue}
							onChange={handleEmailChange}
						/>
						<CmInput
							type="password"
							label="비밀번호"
							placeholder="비밀번호를 입력하세요"
							value={passwordValue}
							onChange={handlePasswordChange}
							usePassword
						/>
						<CmInput
							type="tel"
							label="전화번호"
							placeholder="010-0000-0000"
							value={basicValue}
							onChange={handleBasicChange}
						/>
					</div>
				</div>

				{/* 특수 기능 */}
				<div>
					<PageSubTitle>
						특수 기능
					</PageSubTitle>
					<div className="space-y-4 max-w-md">
						<CmInput
							label="검색 입력"
							placeholder="검색어를 입력하세요"
							value={searchValue}
							onChange={handleSearchChange}
							isSearch
							onSearch={handleSearch}
						/>
						<CmInput
							label="대문자 변환"
							placeholder="소문자로 입력하면 자동 대문자 변환"
							value={uppercaseValue}
							onChange={handleUppercaseChange}
							uppercase
						/>
						<CmInput
							label="클리어 불가"
							placeholder="X 버튼이 없는 입력"
							value={basicValue}
							onChange={handleBasicChange}
							clearable={false}
						/>
					</div>
				</div>

				{/* 상태 */}
				<div>
					<PageSubTitle>
						입력 상태
					</PageSubTitle>
					<div className="space-y-4 max-w-md">
						<CmInput
							label="비활성화"
							placeholder="입력할 수 없습니다"
							value={disabledValue}
							disabled
						/>
						<CmInput
							label="읽기 전용"
							placeholder="읽기만 가능합니다"
							value={readonlyValue}
							readonly
						/>
						<CmInput
							label="에러 상태"
							placeholder="유효하지 않은 입력"
							value={errorValue}
							onChange={handleErrorChange}
							status="error"
							validMessage={errorMessage}
						/>
					</div>
				</div>

				{/* Ref 사용 예시 */}
				<div>
					<PageSubTitle>
						Ref 제어
					</PageSubTitle>
					<div className="space-y-4 max-w-md">
						<CmInput
							ref={inputRef}
							label="포커스 제어"
							placeholder="아래 버튼으로 포커스 가능"
							value={basicValue}
							onChange={handleBasicChange}
						/>
						<button
							type="button"
							className="btn__full--primary-md"
							onClick={focusInput}
						>
							위 입력 필드에 포커스
						</button>
					</div>
				</div>

				{/* 폭 조정 */}
				<div>
					<PageSubTitle>
						폭 조정
					</PageSubTitle>
					<div className="space-y-4">
						<CmInput
							label="50% 폭"
							placeholder="컨테이너의 50% 폭"
							width="50%"
							value={basicValue}
							onChange={handleBasicChange}
						/>
						<CmInput
							label="300px 고정 폭"
							placeholder="300px 고정 폭"
							width="300px"
							value={basicValue}
							onChange={handleBasicChange}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Textfield
