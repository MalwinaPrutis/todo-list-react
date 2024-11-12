import styled from "styled-components";

export const FormStyled = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px; 

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr; /* Zmiana na jedną kolumnę */
    }
`; 

export const Input = styled.input`
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.color.alto};
    border-radius: 4px; /* Dodaj zaokrąglenie rogów */
    &:focus {
        outline: none; /* Usuwanie domyślnej ramki po kliknięciu */
        border-color: hsl(180, 100%, 35%); /* Zmiana koloru ramki */
    }
`;

export const Button = styled.button`
    padding: 10px;
<<<<<<< HEAD
    background:${({ theme }) => theme.color.teal};
=======
    background: ${({ theme }) => theme.color.teal};
>>>>>>> 7ea7014d030178e6dac60abc72253e1aa6ce8cdf
    color: ${({ theme }) => theme.color.white};
    border: none;
    transition: background 0.3s ease;

    &:hover {
        background: hsl(180, 100%, 35%);
        transform: scale(1.05); /* Zmniejszenie efektu powiększenia */
    }
`;

export const ErrorMessage = styled.p`
    color: red;
    font-size: 14px;
    margin-top: 10px;
`;
