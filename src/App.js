// Ant Design
import {Layout} from 'antd';

// css
import './App.css';
import './assets/app.css';
//Global Components
import HeaderMain from './components/Header';
import FooterMain from './components/Footer';
// components
import SliderComponent from './sections/Slider';
import Artworks from './sections/Artworks';
import Collections from './sections/Collections';
import Artists from "./sections/Artists";
import Process from "./sections/Process";
import WhyMoksha from "./sections/Vision";
import FAQs from "./sections/FAQ";
import Subscription from "./sections/Subscription";

// content
import mokshaContent from './data/content'

const {Header, Footer, Content} = Layout;

const sectionTitleRowStyle = {
    marginTop: '1rem'
}


function App() {

    return (
        <Layout>
            <Header className={'am-header'}>
                <HeaderMain/>
            </Header>
            <Content className="am-layout-container">
                <SliderComponent/>
                <Artworks data={mokshaContent.artworks.default}/>
                <Collections data={mokshaContent.collections.default}/>
                <Artists data={mokshaContent.artists.default}/>
                <Process data={mokshaContent.steps.default}/>
                <WhyMoksha data={mokshaContent.values.default}/>
                <FAQs data={mokshaContent.faqs.default}/>
                <Subscription data=''/>
            </Content>
            <Footer className={'am-footer'}>
                <FooterMain/>
            </Footer>
        </Layout>
    );
}

export default App;
// export const store = configureStore();
//
// const NextApp = () =>
//     <Provider store={store}>
//         <ConnectedRouter history={history}>
//             <Switch>
//                 <Route path="/" component={App}/>
//             </Switch>
//         </ConnectedRouter>
//     </Provider>;
//
//
// export default NextApp;