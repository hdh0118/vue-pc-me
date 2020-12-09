import Vue from "vue";
import { Button, InputNumber, Pagination, Message, MessageBox } from "element-ui";

Vue.use(Button);
Vue.use(InputNumber);
Vue.use(Pagination);

Vue.prototype.$message = Message;
Vue.prototype.$alert = MessageBox.alert;
