import { Card } from "../components/card/card";
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
	title: "Component/Card",
	componenent: Card,
	argTypes: {}
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});