import router from "~/shared/route"; 
import { PageTitle, PageSubTitle } from "~/styles/layout/Wrapper";

function Example() {
	const menuList = [
		{ path: "button", title: 'buttons' },
	];
	return (
		<div>
			<PageTitle>UI EXAMPLE</PageTitle>
			<PageSubTitle>UI 컴포넌트 확인이 가능합니다.</PageSubTitle>
			<ul style={{width: '200px'}}>
				{menuList.map(({ path, title }) => (
					<li key={path} onClick={() => router.navigate(path)}>
						<span>{title}</span>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Example
