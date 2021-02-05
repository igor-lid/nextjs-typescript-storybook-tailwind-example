import React, { FC } from 'react';
import { Card } from '../Card';
import { Pill } from '../Pill';

export interface PersonProps {
  person: {
    id: number;
    imgUrl: string;
    fullName: string;
    occupation: string;
  };
}

export const Person: FC<PersonProps> = ({ person }) => {
  return (
    <div className="flex flex-col">
      <Card variant="elevation" classes="w-64 h-64 flex flex-col items-center py-10">
        <img className="h-24 w-24 mb-2 rounded-full object-cover" src={person.imgUrl} alt="shoe" />
        <Pill classes="bg-black text-white" text={person.occupation} size="small" />
        <span className="text-xl mt-4">{person.fullName}</span>
      </Card>
    </div>
  );
};
