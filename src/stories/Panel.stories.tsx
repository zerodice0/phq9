import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Panel } from '../components/panel/panel';

export default {
	title: "Component/Panel",
	componenent: Panel,
	argTypes: {}
} as ComponentMeta<typeof Panel>;

const Template: ComponentStory<typeof Panel> = (args) => <Panel {...args} />;

export const Default = Template.bind({});
Default.args = {
	label: "Hello, Panel!"
}
