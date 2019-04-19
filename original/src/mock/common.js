import Mock, { Random } from 'mockjs'
let arr = []
const commonlists = function () {
  for (var i = 0; i < 5; i++) {
    let obj = Mock.mock({
      id: i,
      hot: Random.integer(0, 2000),
      img: Random.image('140x210', '#4A7BF7', '#FFF', 'png', 'desc'),
      year: Random.integer(2016, 2019),
      // add_time: Random.date('year-MM-dd HH:mm:ss'),
      title: Random.ctitle(),
      f_title: Random.ctitle(),
      fy: Random.cname(),
      author: Random.cname(),
      "publishinghouse|1": ["新华出版社", "中国人民大学出版社", "人民教育出版社", "中华书局", "作家出版社", "译林出版社"],
      "cpf|1": ["鹿书deerbook", "facebook", "起点中文网"],
      yzm: Random.title(),
      page: Random.integer(100, 1000),
      price: Random.integer(10, 200),
      "zz|1": ["精装", "简策装", "卷轴装", "旋风装", "蝴蝶装", "包背装", "线装"],
      ISBN: Random.id(),
      rate: Random.float(6, 9, 1, 1),
      "common|3-6": [
        {
          common_id: Random.id(),
          img: Random.image('142x142', '#4A7BF7', '#FFF', 'png', 'common'),
          add_time: Random.date('2019-MM-dd HH:mm:ss'),
          common_author: Random.cname(),
          common_title: Random.ctitle(),
          content: Random.cparagraph(),
          zan: Random.boolean()
        }
      ]
    })
    arr.push(obj)
  }
  return arr
}

const commondetail = function (options) {
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
  commonlists,
  commondetail
}