import gql from "graphql-tag";

export const GET_NAVIGATION_ITEMS = gql`
{
    navigation {
        id
        name
        link
        items {
            id
            name
            link
        }
    }
}
`