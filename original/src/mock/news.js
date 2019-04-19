import Mock, { Random } from 'mockjs'
let arr = []
const newslist = function () {
  for (var i = 0; i < 50; i++) {
    let obj = Mock.mock({
      id: i,
      img: Random.image('200x100', '#4A7BF7', '#FFF', 'png', 'news'),
      add_time: Random.date('2018-MM-dd HH:mm:ss'),
      title: Random.ctitle(),
      f_title: Random.cparagraph(2),
      "publishinghouse|1": ["新华出版社", "中国人民大学出版社", "人民教育出版社"],
      content: Random.cparagraph(),
      "type|1": ["最新动态", "新闻资讯", "行业动态"]
    })
    arr.push(obj)
  }
  return arr
}

const newsdetail = function (options) {
  let obj = JSON.parse(options.body).params
  // console.log(JSON.parse(options.body).params);
  let darr = arr.map(item => {
    // console.log(item.id);
    // if (item.id == obj.id) {
    //   // console.log('id', item.id);
    //   return item
    // }
    return item.id == obj.id ? item : '';
  })
  return { data: darr }
}
export default {
  newslist,
  newsdetail
}