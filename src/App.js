import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, ScreenSpinner, AdaptivityProvider, AppRoot, Panel } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import State from './panels/states'
// import first from '../src/Artboards/Artboard 1.png';
// import boards from '..src/Artboards';
import Home from './panels/Home';
// import Persik from './panels/Persik';
import Slide from './panels/slide';
const App = () => {
	const [activePanel, setActivePanel] = useState('home');
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

	// useEffect(() => {
	// 	bridge.subscribe(({ detail: { type, data } }) => {
	// 		if (type === 'VKWebAppUpdateConfig') {
	// 			const schemeAttribute = document.createAttribute('scheme');
	// 			schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
	// 			document.body.attributes.setNamedItem(schemeAttribute);
	// 		}
	// 	});
	// 	async function fetchData() {
	// 		const user = await bridge.send('VKWebAppGetUserInfo');
	// 		setUser(user);
	// 		setPopout(null);
	// 	}
	// 	fetchData();
	// }, []);

	// const go = e => {
	// 	setActivePanel(e.currentTarget.dataset.to);
	// };

	return (
		<div>
			{/* <Slide number={3} src={"first"}/> */}\
			sdcsdc
			<State></State>
		</div>
		// <AdaptivityProvider>
		// 	<AppRoot>
		// 		<View activePanel={activePanel} popout={popout}>
		// 			<Home id='home' fetchedUser={fetchedUser} go={go} />
		// 			<Persik id='persik' go={go} />
		// 			{/* <Panel id='persik'>

		// 			</Panel> */}
		// 		</View>
		// 	</AppRoot>
		// </AdaptivityProvider>
	);
}

export default App;
