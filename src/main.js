import { createApp} from 'vue';
import App from './App.vue';
import router from './router/index.js';
import store from './store/index.js';
import Axios from 'axios';
import VueGravatar from 'vue3-gravatar';
import './rules/rules';
const app = createApp(App);




app.config.globalProperties.$http = Axios;
app.use(router);
app.use(store);
app.use(VueGravatar);

app.mount('#app')