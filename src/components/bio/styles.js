import styled from "styled-components"
import { ms } from "modularscale-helpers"

export const Wrapper = styled.div`
    &:after {
        content: "";
        display: block;
        clear: both;
    }
`;

export const BioImage = styled.img`
    border-radius: 50%;
    width: 4.5rem;
    float: left;
`;

export const Bio = styled.div`
    font-family: ${props => props.theme.font.body};

    color: ${props => props.light ? props.theme.colors.light : props.theme.colors.fg};

    ${props => !props.float ? '' : `
        float: left;
        width: calc(100% - ${ms(1) + 4.5}rem);
        margin-left: ${ms(1)}rem;
    `}
`;

export const Links = styled.ul`
    margin-top: ${ms(1)}rem;
    list-style-type: none;
    padding: 0;
`;

export const LinkItem = styled.li``;

export const LinkHolder = styled.span`
    color: ${props => props.theme.colors.light};
    text-decoration: none;
    font-family: ${props => props.theme.font.body};
    svg {
        vertical-align: middle;
        color: ${props => props.theme.colors.light} !important;
    }
    &:hover, &:hover svg {
        color: ${props => props.theme.colors.accent} !important;
    }
`;

export const LinkText = styled.span`
    vertical-align: middle;
`;
