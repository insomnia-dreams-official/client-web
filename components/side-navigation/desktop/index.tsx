import React from "react";
import Link from "./link"
import DropDown from "./drop-down"
import {NavigationItem} from "../container";

interface Props {
    items: Array<NavigationItem>
}

export default class extends React.Component<any, any> {
    private containerRef: HTMLDivElement
    private debounceTimer: NodeJS.Timeout
    private debounceTimer2: NodeJS.Timeout
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

    cancelShow = (e) => {
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
                        showDropDownDebounce={this.showDropDownDebounce}
                        cancelShow={this.cancelShow}
                        timer={this.debounceTimer2}
                    />
                )}

                <style jsx>{`
                .container {
                    position: fixed;
                    //min-height: 600px;
                }
            `}</style>
            </div>
        )
    }
}