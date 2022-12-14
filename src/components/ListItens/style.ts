import styled from "styled-components";

type ConteinerProp = {
    done: boolean;
}

export const Conteiner = styled.div(({ done }: ConteinerProp) => (`
    display: flex;
    background-color: #20212C;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    align-items: center;

    input{
        width: 25px;
        height: 25px;
        margin-right: 5px
    }

    label{
        color: #ccc;
        text-decoration: ${done? "line-through" : "initial"}
    }
`))