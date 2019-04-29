import AuthStore from './Domain/AuthStore';
import FormStore from './View/FormStore';

const authStore = new AuthStore();
const formStore = new FormStore();

export default {
  authStore,
  formStore,
};