import * as React from 'react';

import { ListView, View, RefreshControl } from 'react-native';

interface props {
    children: any;
    style?: any;
}

interface State {
    children: any;
    dataSource: any;
    style?: any;
    refreshing: boolean
}

export default class ListViewContent extends React.Component<props, State> { 

    constructor(props: any){  
        super(props);  
        const ds = new ListView.DataSource({  
            rowHasChanged: (oldRow, newRow) => oldRow !== newRow  
        });  
        this.state = {  
            children: '',
            dataSource: ds.cloneWithRows(['1']),
            style: {},
            refreshing: false
        };  
    }  

    _renderRow(){
        return (
            { ...this.props.children } 
        );
    }

    _onRefresh() {
        this.setState({refreshing: true});
        setTimeout(()=>{
            this.setState({refreshing: false});
        }, 1000)
    }

    render() {
        const { children, style } = this.props;
        return (
            <View style={style}>
                <ListView 
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            title={this.state.refreshing ? '加载中。。。。' : '放手'}
                            titleColor="#00ff00"
                            onRefresh={() => this._onRefresh()}
                            colors={['#ff0000', '#00ff00', '#0000ff']}
                            progressBackgroundColor="#ffffff"
                        />
                    }
                    dataSource={this.state.dataSource}
                    renderRow={() => this._renderRow()}
                    scrollEventThrottle={50}
                />
            </View>
        )
      }
}
