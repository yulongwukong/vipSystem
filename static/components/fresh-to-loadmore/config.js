var w = window.screen.width;
var rem = Math.round(w*13.333333)/100/100*2;

const TOP_DEFAULT_CONFIG = {
  pullText: '下拉刷新',
  triggerText: '释放更新',
  loadingText: '加载中...',
  doneText: '加载完成',
  failText: '加载失败',
  loadedStayTime: 400,
  stayDistance: 80*rem,
  triggerDistance: 70
};

const BOTTOM_DEFAULT_CONFIG = {
  pullText: '上拉加载',
  triggerText: '释放更新',
  loadingText: '加载中...',
  doneText: '加载完成',
  failText: '加载失败',
  loadedStayTime: 400,
  stayDistance: 80*rem,
  triggerDistance: 70
};

export { TOP_DEFAULT_CONFIG, BOTTOM_DEFAULT_CONFIG };
