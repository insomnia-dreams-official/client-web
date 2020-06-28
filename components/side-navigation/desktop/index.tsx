import React from "react";
import Link from "./link"
import DropDown from "./drop-down"
import {NavigationItem} from "../container";

interface Props {
    items: Array<NavigationItem>
}

interface State {
    selectedItem: NavigationItem
}

export default class extends React.Component<Props, State> {
    private containerRef: HTMLDivElement
    private debounceTimer: NodeJS.Timeout
    private debounce: number = 150

    constructor(props) {
        super(props)
        this.state = {
            selectedItem: null
        }
    }

    showDropDown = (selectedItem: NavigationItem) => {
        this.setState({selectedItem}, () => {
            this.containerRef.addEventListener('mouseleave', this.hideDropDown)
        })
    }

    hideDropDown = () => {
        this.setState({selectedItem: null}, () => {
            this.containerRef.removeEventListener('mouseleave', this.hideDropDown)
        })
    }

    // state.selectedItem is null => instant (initial) render
    // state.selectedItem is not null => deferred (secondary) render
    showDropDownDebounce = (selectedItem: NavigationItem) => {
        if (!this.state.selectedItem) {
            this.showDropDown(selectedItem)
        } else {
            this.debounceTimer = setTimeout(() => this.showDropDown(selectedItem), this.debounce)
        }
    }

    cancelShow = () => {
        clearTimeout(this.debounceTimer)
    }

    render() {
        return (
            <div className="side-navigation__desktop container" ref={component => this.containerRef = component}>
                {this.props.items.map(item => (
                    <Link
                        key={item.id}
                        item={item}
                        showDropDownDebounce={this.showDropDownDebounce}
                        hideDropDown={this.hideDropDown}
                        cancelShow={this.cancelShow}
                    />
                ))}

                {this.state.selectedItem && this.state.selectedItem.subItems && (
                    <DropDown
                        item={this.state.selectedItem}
                        hideDropDown={this.hideDropDown}
                    />
                )}

                <style jsx>{`
                .container {
                    position: fixed;
                    // 600px is the height of drop-down component.
                    // if height is not defined, trajectory on last item (Хоз. товары) will not forgive you, because
                    // event -> ref.addEventListener('mouseleave', this.hideDropDown) will be dispatched
                    // and drop-down will close :(
                    height: 400px;  
                }
            `}</style>
            </div>
        )
    }
}