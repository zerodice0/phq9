export interface CardInterface {
	label: string,
	pointClickCallback: (point: number) => void,
}

interface FooterMenu {
	point: number,
	label: string
}

export const footerMenus: FooterMenu[] = [
	{point: 0, label: "없음"},
	{point: 1, label: "2, 3일 이상"},
	{point: 2, label: "7일 이상"},
	{point: 3, label: "거의 매일"}
];