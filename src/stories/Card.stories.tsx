import { Card } from "../components/card/card";
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
	title: "Component/Card",
	componenent: Card,
	argTypes: {}
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
	label: "기분이 가라앉거나, 우울하거나, 희망이 없다고 느꼈다.",
	pointClickCallback: (point: number) => console.log(point)
}
