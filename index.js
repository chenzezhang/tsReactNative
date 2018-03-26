import { AppRegistry } from 'react-native';
import IosApp from './index.ios';
import AndirApp from './index.android';

AppRegistry.registerComponent('rockzcReactnative', () => IosApp);
AppRegistry.registerComponent('rockzcReactnative', () => AndirApp);
