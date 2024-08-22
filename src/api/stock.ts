import request from './request'; // 引入封装的 Axios 实例

export function getStockList(){
    return request({
        url: "https://jsonplaceholder.typicode.com/users",
        method: 'get'
    })
}

// 获取书城列表分页条件查询
export function getBookInfoList(current: any,pageSize: any,param: any){
    return request({
        url: `/book/list/${current}/${pageSize}`,
        method: 'post',
        data:param
    })
}

// 新增书城书本信息
export function addBookInfo(param: any){
    return request({
        url: `/book/add-one-book`,
        method: 'post',
        data:param
    })
}

// 根据id获取书本信息
export function getBookInfoById(id: any){
    return request({
        url: `/book/get-one-book/${id}`,
        method: 'get'
    })
}

// 根据id修改书本信息
export function updBookInfo(param: any){
    return request({
        url: `/book/upd-one-book`,
        method: 'post',
        data:param
    })
}

// 删除一本书
export function deleteOneBook(param: any){
    return request({
        url: `/book/delete-one-book`,
        method: 'post',
        data:param
    })
}