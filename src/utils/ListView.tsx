import * as React from 'react';

import { ListView, View, Text, RefreshControl, Animated } from 'react-native';
import { ViewHeader } from './../components/header';

interface props {
    children: any;
    style?: any;
}

interface State {
    children: any;
    dataSource: any;
    style?: any;
    refreshing: boolean,
    showHeight: boolean,
    offserY: number,
    fadeAnim: any,
}

export default class ListViewContent extends React.Component<props, State> {

    constructor(props: any) {
        super(props);
        const ds = new ListView.DataSource({
            rowHasChanged: (oldRow, newRow) => oldRow !== newRow,
            sectionHeaderHasChanged: (oldRow, newRow) => oldRow !== newRow
        });
        this.state = {
            children: '',
            dataSource: ds.cloneWithRows(['1']),
            style: {},
            refreshing: false,
            showHeight: false,
            offserY: 0,
            fadeAnim: new Animated.Value(0), //设置初始值
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
            <Animated.View>
                <View>
                    <ViewHeader />
                </View>
            </Animated.View>
        );
    }

    _onTouchMove(e: any) {

        const offserY = e.nativeEvent.contentOffset.y;
        this.setState({ offserY: offserY })

        if (offserY > 0) {
            this.setState({ showHeight: true })
        } else {
            this.setState({ showHeight: false })
        }

    }

    _onScrollAnimationEnd(e: any) {
        this.setState({ offserY: 0 })
    }

    componentDidMount() {
        Animated.sequence([
            Animated.timing(this.state.fadeAnim, {
                toValue: 100,// 起始速度，必填参数。
                duration: 1000
            }),
            Animated.delay(1000),
        ]).start();//开始
    }

    render() {
        const { children, style } = this.props;
        const { showHeight } = this.state;
        return (
            <View>
                {!showHeight ?
                    <Animated.View style={{opacity: this.state.fadeAnim}}>
                        <ViewHeader />
                    </Animated.View>
                    : null}

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
                        renderSectionHeader={showHeight ? () => this.renderSectionHeader() : undefined}
                        onScroll={this._onTouchMove.bind(this)}
                        onResponderGrant={this._onScrollAnimationEnd.bind(this)}
                    />
                </View>
            </View>

        )
    }
}
