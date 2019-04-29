import styled from "styled-components"
import { ms } from 'modularscale-helpers'

export const List = styled.li`
    padding: 0;
    list-style-type: none;
`;

export const Item = styled.li`
`;

export const Title = styled.div`
    color: ${props => props.theme.colors.fg};
    font-family: ${props => props.theme.font.body};
    font-size: ${ms(0)}rem;
`;

export const Date = styled.div`
    font-family: ${props => props.theme.font.body};
    font-size: ${ms(-1)}rem;
    color: ${props => props.theme.colors.light};
`;

export const Link = styled.a`
    color: ${props => props.theme.colors.fg};
    text-decoration: none;
    &:hover ${Title} {
        color: ${props => props.theme.colors.accent} !important;
    }
`;