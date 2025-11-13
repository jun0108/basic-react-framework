import styled from 'styled-components'
import router from "~/shared/route";
import { PageTitle, PageSubTitle } from "~/styles/layout/Wrapper";

function Example() {
	const Example = styled.div`
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width: 100%;
		padding: 20px;
	`
	const ExampleList = styled.div`
		width: 100%;

	`
	const ExampleMenu = styled.div`
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0 10px;
		border: 1px solid var(--color-gray-500);
		border-radius: var(--radius-md);
		cursor: pointer;
		&:hover {
			background-color: var(--color-gray-200);
		}
	`

	const menuList = [
		{ path: "button", title: 'buttons' },
	];
	return (
		<Example>
			<PageTitle>UI EXAMPLE</PageTitle>
			<PageSubTitle>UI 컴포넌트 확인이 가능합니다.</PageSubTitle>
			<ExampleList>
				{menuList.map(({ path, title }) => (
					<ExampleMenu key={path} onClick={() => router.navigate(path)}>
						<span>{title}</span>
					</ExampleMenu>
				))}
			</ExampleList>
		</Example>
	)
}

export default Example
