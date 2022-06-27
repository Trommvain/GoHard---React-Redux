// Core
import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import { ErrorBoundary } from '../../components';
import { AccordionItem, TaskDescription } from '../../elements';

// Types
export type AccordionTypes = {
    question: string;
    answer: string;
    children?: React.ReactNode;
}

export type TitleType = {
    title?: string
}

// Tools
import { ROOT } from '../../routes/book';

// Styles
import * as S from './styles';

export const AccordionData = [
    {
        question: '1. What business are you doing?',
        answer:   `In the past few years India has made attempts
                    to get back several historic items. Some historians
                    claim that the Kohinoor was taken away from India by force.`,
    },
    {
        question: '2. What is your hobby?',
        answer:   `Listening to music has always been my go to activity for all
                    occasions. My love for music can be traced back to when I was a child. 
                    There are recorded videos of me as a child becoming hyperactive whenever 
                    music was played. I would run to the stereo, turn on the music to full.`,
    },
    {
        question: '3. What is the meaning of life?',
        answer:   `There are a lot of ideas out there about what constitutes fulfillment. 
                    Some people think being successful will make them fulfilled, while 
                    others chase happiness, hoping that will bring lasting peace. But in my 
                    research and reporting, Ive found that the answer lies in a different path: 
                    the search for meaning.`,
    },
];

const Accordion: FC<TitleType> = (props: TitleType) => {
    const navigate = useNavigate();
    const items = AccordionData.map((item, index) => (
        <AccordionItem
            key = { index }
            { ...item }>
        </AccordionItem>
    ));

    return (
        <S.Container>
            { <h1>{ props.title }</h1> }
            { items }
            <button onClick = { () => navigate(ROOT) }>Back to main</button>
            <TaskDescription></TaskDescription>
        </S.Container>
    );
};

Accordion.defaultProps = {
    title: 'Accordion',
};

export default () => (
    <ErrorBoundary>
        <Accordion></Accordion>  {/* Add title = 'Something else' and default title wouldn't be 'Accordion' */}
    </ErrorBoundary>
);
