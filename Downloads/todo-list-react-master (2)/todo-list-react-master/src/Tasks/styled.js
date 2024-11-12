<<<<<<< HEAD

=======
>>>>>>> bafd7188e527bfa973b1cf620910bde35434dfd0
import styled, { css } from "styled-components";

export const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.color.alto};

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const Content = styled.span`
    ${({ done }) => done && css` 
        text-decoration: line-through;
    `}
`;

export const Button = styled.button`
    border: none;
    color: ${({ theme }) => theme.color.white};
    width: 30px;
    height: 30px;
    padding: 0;

    ${({ toggleDone }) => toggleDone && css`
        background: ${({ theme }) => theme.color.green};

        &:hover {
            background: lightgreen;
        }
    `}

    ${({ remove }) => remove && css`
        background: red;

        &:hover {
            background: rgb(193, 89, 89);
        }
    `}
`;
