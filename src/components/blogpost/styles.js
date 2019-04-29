import styled from 'styled-components'
import { ms } from 'modularscale-helpers'

export const List = styled.ul`
    padding: 0;
    list-style-type: none;
`;

export const ListItem = styled.li`
    margin-bottom: ${ms(2)}rem;

    &:hover h3 {
        color: ${props => props.theme.colors.accent};
    }
`;

export const ListTitle = styled.h3`
    font-size: ${ms(0)}rem;
    text-decoration: none !important;
    margin-top: 0;
    margin-bottom: ${ms(-3)}rem;
`;

export const ListDate = styled.div`
    font-size: ${ms(-1)}rem;
    margin-bottom: ${ms(-2)}rem;
    color: ${props => props.theme.colors.light};
`;

export const ListExcerpt = styled.div`
    font-size: ${ms(0)}rem;
`;


export const Entry = styled.article`

`;

export const EntryTitle = styled.h2`
    font-size: ${ms(3)}rem;
    font-family: ${props => props.theme.font.title};
    font-weight: 400;
    margin-top: ${ms(3)}rem;
    margin-bottom: 0;
`;

export const EntryInfo = styled.div`
    font-size: ${ms(0)}rem;
    color: ${props => props.theme.colors.light};
    margin-bottom: ${ms(3)}rem;
`

export const EntryInfoDate = styled.span`

`;

export const EntryInfoReadingTime = styled.span`
    &:before {
        content: " • "
    }
`;

export const EntryPost = styled.div`
    max-width: 40rem;
    font-family: ${props => props.theme.font.reading};

    h1 {
        font-size: ${ms(2)}rem;
        &:after {
            color: red;
            font-size: ${ms(0)}rem;
            content: " [ Do not use # for titles - use at least ## ]"
        }
    }

    h2 {
        font-size: ${ms(2)}rem;
    }

    h3 {
        font-size: ${ms(1)}rem;
    }

    h4, h5, h6 {
        font-size: ${ms(0)}rem;
    }
`;