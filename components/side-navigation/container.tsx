import React from "react";
import DesktopSideNavigation from './desktop'
import theme from "../../styles/theme";

interface SimpleItem {
    id: number
    name: string
    path?: string
    link: string
}

export interface NavigationItem extends SimpleItem {
    items?: Array<SimpleItem>
}

const items = [
    {id: 1, name: 'Новинки', link: 'new'},
    {id: 2, name: 'Распродажа', link: 'sale'},
    {
        id: 3, name: 'Бумажная продукция', link: 'bumajnai_productia', items: [
            {id: 1, name: 'Бумажная продукция', link: 'subcategory_from_nav'}
        ]
    },
    {
        id: 4, name: 'Бытовая химия', link: 'butovai_himia', items: [
            {id: 1, name: 'Бытовая', link: 'subcategory_from_nav'}
        ]
    },
    {
        id: 5, name: 'Канцелярские товары', link: 'kanchelrskie_tovari', items: [
            {id: 1, name: 'Канцелярские', link: 'subcategory_from_nav'}
        ]
    },
    {
        id: 6, name: 'Одноразовая посуда', link: 'odonrazova', items: [
            {id: 1, name: 'Одноразовая', link: 'subcategory_from_nav'}
        ]
    },
    {
        id: 7, name: 'Украшение для стола', link: 'ukrashenia', items: [
            {id: 1, name: 'Украшение', link: 'subcategory_from_nav'}
        ]
    },
    {
        id: 8, name: 'Упаковочные материалы', link: 'upakova_tovari', items: [
            {id: 1, name: 'Упаковочные', link: 'subcategory_from_nav'}
        ]
    },
    {
        id: 9, name: 'Хозяйственные товары', link: 'hozistvennie_tovari', items: [
            {id: 1, name: 'Хозяйственные', link: 'subcategory_from_nav'}
        ]
    },
]

export default class SearchContainer extends React.Component {
    render() {
        return (
            <div className="side-navigation">
                <DesktopSideNavigation items={items}/>

                <style jsx global>{`
                    @media (max-width: ${theme.sizes.laptop}) { // hide desktop search on small
                        .side-navigation__desktop {
                            display: none;
                        }
                    }
                    @media (min-width: ${theme.sizes.laptop}) { // hide mobile search on big screens
                        .side-navigation__mobile {
                            display: none;
                        }
                    }                
                `}</style>
            </div>
        )
    }
}