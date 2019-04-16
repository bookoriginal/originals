import Mock, { Random } from 'mockjs'

const bannerlist = function () {
    let arr = []
    for(var i = 0; i < 5; i++){
        let obj = {
            id: i,
            img: Random.image('800x300', '#4A7BF7', 'Hello'),
            news: Mock.mock({
                'array|1-20': [
                    {
                        name: Random.ctitle(2,6),
                        tit: Random.ctitle(4,10)
                    }
                ]
            }),
            idx:{
                bookid: Random.id(),
                bookname: Random.ctitle(2,6),
                bookimg: Random.image('196x200', '#d66', '#fff', 'jpg', '图片'),
                writer: Random.cname(),
                booktit: Random.ctitle(4,10),
                time: Random.date('MM-dd'),
                zan: Random.integer(60, 100000),
                look: Random.integer(0, 100000)
            }
        }
        arr.push(obj)
    }
    return arr
}
export default bannerlist