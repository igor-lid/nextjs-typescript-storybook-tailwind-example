import { Person, PersonProps } from './Person';
import { Meta, Story } from '@storybook/react';
import React from 'react';

const personMock = {
  id: 1,
  fullName: 'Mark Johnson',
  imgUrl:
    'https://images.pexels.com/photos/2373220/pexels-photo-2373220.jpeg?cs=srgb&dl=pexels-filippo-peisino-2373220.jpg&fm=jpg',
  occupation: 'Developer'
};

export default {
  title: 'Group/Person',
  component: Person
} as Meta;

export const Default: Story<PersonProps> = (args) => <Person {...args} />;
Default.args = {
  person: personMock
};
