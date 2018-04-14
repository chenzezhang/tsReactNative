
import * as React from 'react';
import { View, Text, Image, ImageURISource } from 'react-native';
import style from './ListItemCss';
import Header from './header';

interface Props {
    refresh: string;
    date: string;
    sourceImag: ImageURISource;
    tip: string;
    title: string;
}

interface State {
    rate: string;
}

export default class ListItem extends React.Component<Props, State> {

    state = {
        rate: '%'
    }
    static defaultProps = {
        refresh: 0,
        date: 0,
        sourceImag: require('./../../../static/index/button.png')
    }

    render() {
        const { refresh, date, sourceImag, tip, title } = this.props;
        const { rate } = this.state;
        return (
            <View>
                <Header tip={tip} title={title} /> 
                <View style={style.listView}>   
                    <View style={style.listViewCenter}>
                        <View style={style.listItemLeft}>
                            <View style={style.pubView}>
                                <Text style={style.listItemText1}>{refresh}</Text>
                                <Text style={style.listItemText2}>{rate}</Text>
                            </View>
                            <Text style={style.listItemText3}>预期年化</Text>
                        </View>
                        <View>
                            <Text style={style.listItemCenter}>灵活存取</Text>
                        </View>
                        <View style={style.listItemRight}>
                            <Image style={style.imaStyle} source={sourceImag} />
                        </View>
                    </View>
                </View>

            </View>
        );
    }

}