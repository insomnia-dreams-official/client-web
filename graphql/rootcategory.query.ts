import gql from "graphql-tag";

export const GET_ROOTCATEGORIES = gql`
{
    rootcategories {
        articul
        name
        path
        link
        full_link
    }
}
`