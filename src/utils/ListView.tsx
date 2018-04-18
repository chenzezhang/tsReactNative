import * as React from 'react';

import { ListView, View, Text, RefreshControl, Animated, StyleSheet } from 'react-native';
import { ViewHeader } from './../components/header';


interface props {
    children: any;
    style?: any;
    opacity: (number: number) => any;
}

interface State {
    children: any;
    dataSource: any;
    style?: any;
    refreshing: boolean,
}

export default class ListViewContent extends React.Component<props, State> {

    constructor(props: any) {
        super(props);
        const ds = new ListView.DataSource({
            rowHasChanged: (oldRow, newRow) => oldRow !== newRow,
            sectionHeaderHasChanged: (s1, s2) => s1 !== s2
        });
        this.state = {
            children: '',
            dataSource: ds.cloneWithRows(['1']),
            style: {},
            refreshing: false,
        };
    }

    _renderRow() {
        return (
            { ...this.props.children }
        );
    }

    _onRefresh() {
        this.setState({ refreshing: true });
        setTimeout(() => {
            this.setState({ refreshing: false });
        }, 1000)
    }

    renderSectionHeader() {
        return (
            <View style={{height: 64}} />
        );
    }

    _onTouchMove(e: any) {

        let offserY = e.nativeEvent.contentOffset.y;

        this.props.opacity(offserY);
    }

    render() {
        const { children, style } = this.props;
        return (
            <View>
                <View style={style}>
                    <ListView
                        refreshControl={
                            <RefreshControl
                                refreshing={this.state.refreshing}
                                title={this.state.refreshing ? '拼命加载中....' : '加载完毕....'}
                                titleColor="#00ff00"
                                onRefresh={() => this._onRefresh()}
                                colors={['#ff0000', '#00ff00', '#0000ff']}
                                progressBackgroundColor="#ffffff"
                            />
                        }
                        dataSource={this.state.dataSource}
                        renderRow={() => this._renderRow()}
                        scrollEventThrottle={1000}
                        renderSectionHeader={() => this.renderSectionHeader()}
                        onScroll={this._onTouchMove.bind(this)} 
                    />
                </View>
            </View>

        )
    }
}
