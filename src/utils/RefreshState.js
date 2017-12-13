// 列表刷新状态：
// 1、Idle（普通状态）
// 2、HeaderRefreshing（正在进行下拉刷新）
// 3、FooterRefreshing（正在进行上拉加载）
// 4、NoMoreData（已加载全部数据）
// 5、Failure（加载失败）
export default {
  Idle: 0,
  Refreshing: 1,
  Loading: 2,
  NoMoreData: 3,
  Failure: 4,
  NoData: 5
};
