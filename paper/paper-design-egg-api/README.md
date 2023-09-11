一.api
1. /find , get , m , 查询某个集合数据

2. /bookDetail , get , id , 根据id查询所有集合中的对应id的data

3. /getHistory , get , 获取历史记录

4. /getCollect , get , 获取藏书

5. /getNews , get , 获取新书

二.manage
1. /collect , post , id , 根据id收藏,收藏后添加到管理中心的对应数组

2. /cancel , post , id , 根据id取消收藏，删除管理中心收藏数组的对应项

3. /doAdd , post , (form:m,title,abstract,authors,imgUrl,news,collected,) 添加图书条目

4. /delete , post , id  根据id删除指定条目

5. /change , post , id(get) ，from(title,authors,abstract,collected,news,imgUrl) 根据Id修改指定条目

6. /search , get , keyword(get) 返回搜索结果res  根据关键字搜索

7. /history , get , id(get)  根据id添加历史记录

8. /login 若用户名和密码正确则设置缓存 , 否则提示错误

9. /logout  清除缓存,退出登录,

10. /addNews , post , id , 根据id添加指定书目为新书，在管理中心添加新书记录

11. /cancelNews , post , id , 根据id取消指定新书并在管理中心删除新书记录

