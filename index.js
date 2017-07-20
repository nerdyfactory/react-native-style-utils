import StyleUtils from './lib';

function createInstance() {
  this.instance = this.instance || new StyleUtils();
  return this.instance;
}
export default createInstance.call(this);
