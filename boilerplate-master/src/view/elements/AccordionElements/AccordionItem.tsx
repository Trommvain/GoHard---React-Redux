// Core
import React, { FC, useState } from 'react';
import styled from 'styled-components';

// Types
import { AccordionTypes } from '../../pages/Accordion';

//Styles
const AccordionItemStyle = styled.div`
    margin-bottom: 10px;
    &:hover .accordion-question{
        color: #000;
    }

    .accordion-question {
        position: relative;
        padding: 15px 30px;
        background: #f1f4fb;
        font-size: 16px;
        color: rgba(0, 0, 0, 0.6);
        line-height: 24px;
        cursor: pointer;
        border-radius: 4px;
        margin-bottom: 22px;
        transition: color 0.3s;

        &::after {
            content: '+';
            position: absolute;
            right: 30px;
        }
    }

    .accordion-answer {
        padding: 0 30px;
        margin: 0 0 22px;
        font-size: 16px;
        color: #000;
        display: none;
    }

    &.selected {
      .accordion-question {
        cursor: initial;
        color: #4886FF;

        &::after {
          content: '-';
        }
      }

      .accordion-answer {
        display: inline-block;
      }
    }
`;

export const AccordionItem: FC<AccordionTypes> = (props: AccordionTypes) => {
    const [ clicked, setEvent ] = useState(false);

    const changeState = () => {
        if (!clicked) {
            setEvent(true);
        } else {
            setEvent(false);
        }
    };

    return (
        <AccordionItemStyle
            className = { clicked ? 'selected' : '' }
            onClick = { changeState }>
            <>
                <div className = 'accordion-question'>
                    <span>{ props.question }</span>
                </div>
                <div>
                    { clicked ? <p className = 'accordion-answer'>{ props.answer }</p> : null }
                </div>
            </>
        </AccordionItemStyle>
    );
};
