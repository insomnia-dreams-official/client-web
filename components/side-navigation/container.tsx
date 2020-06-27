import React from "react";
import DesktopSideNavigation from './desktop'
import theme from "../../styles/theme";

const items = [
    {id: 1, name: 'Новинки', link: 'new'},
    {id: 2, name: 'Распродажа', link: 'sale'},
    {id: 3, name: 'Бумажная продукция', link: 'bumajnai_productia'},
    {id: 4, name: 'Бытовая химия', link: 'butovai_himia'},
    {id: 5, name: 'Канцелярские товары', link: 'kanchelrskie_tovari'},
    {id: 6, name: 'Одноразовая посуда', link: 'odonrazova'},
    {id: 7, name: 'Украшение для стола', link: 'ukrashenia'},
    {id: 8, name: 'Упаковочные материалы', link: 'upakova_tovari'},
    {id: 9, name: 'Хозяйственные товары', link: 'hozistvennie_tovari'},
]

export default class SearchContainer extends React.Component {
    render() {
        return (
            <div className="side-navigation">
                <DesktopSideNavigation items={items} />

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