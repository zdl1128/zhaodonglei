# git学习

1. 如何克隆仓库，创建新分支，切换分支
   
   (1) 克隆仓库：
   
   ```
   $git clone url
   ```
   
   (2) 创建新分支：
   
   ```
   $git branch develop
   ```
   
   (3) 切换分支
   
   ```
   $git checkout develop  切换到分支，更新工作区
   $git checkout -b develop 新建develop分支并切换到该分支
   ```
   
   (4)分支的合并
   
   * 先将分支dev push到远程仓库
     
     * `git add 文件名`
     * `git commit -m "提交信息"`
     * `git push origin dev`
   
   * 切换分支到分支master
     
     * `git checkout master`
   
   * 将远程master代码pull下来
     
     * `git branch -u origin master`//把本地分支和远程分支建立连接，后面再pull就直接git pull（省事，没有也可以）//先pull后再建立关联
     
     * `git pull -u origin master` 执行第一次pull时就建立关联
     
     * `git branch -vv` 可以展示本地分支与远程分支的对应关系
       
          ![image-20220715165321851](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220715165321851.png)建立关联
       
          ![image-20220715165338434](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220715165338434.png)未建立关联
   
   * 把dev分支代码合并到master分支
     
     * `git merge dev`
   
   * 查看状态以及执行提交命令
     
     * `git status`

2. 如何做到仅仅提交部分新增文件？部分修改过的文件？全部修改过的文件？
   
   部分新增文件：
   
   ```
   $git status
   $git add [部分新增的文件路径]
   $git add [部分修改的文件路径]
   $git add folder/**/文件名
   ```
   
   ![image-20220714164118218](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220714164118218.png)
   
   全部修改过的：`$git add -u `

3. 如何仅仅查看自己的提交日志？
   
   ```
   $git log --author zhaodonglei
   ```

4. 如何追踪代码某函数变更历史？`foreach`
   
   ```
   $git log -L:函数名：文件 -p
   ```

5. 如何配置ssh-key?
   
   由于代码仓库存在多种拉取地址
   HTTPS 使用时需要我们提交时同时提交用户名称和密码
   SSH 使用时不需要提供名称和密码 所以通过添加公钥和[密钥](https://so.csdn.net/so/search?q=密钥&spm=1001.2101.3001.7020)，可以让我们更高效地提交代码，免去重复的操作。
   
   （1）本地创建SSH Key
   
   ```创建SSH
   $ssh-keygen -t rsa -C "youremail@example.com"
   ```
   
   ![image-20220714110804454](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220714110804454.png)
   
   （2）打开github中的配置，将id_rsa.pub里面秘钥加进去
   
    （3）验证SSH
   
   ```
   $ssh -T git@github.com
   ```
   
   当出现下面命令时，配置成功。
   
   !(C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220714110655935.png)
   
   ![](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220714110828288.png)
   
   https://blog.csdn.net/weixin_43743804/article/details/106285738

​         （4）将本地仓库推送到远程

添加当前目录的所有文件到缓存区

              $git add .       

提交暂存区到仓库区

         $git commit -m ""

​                $git commit -m "注释"

​                $ git remote add origin git@github.com:名称/仓库.git

​                $git push origin master

![image-20220714131252794](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220714131252794.png)

6. 本地仓库推送流

文件流>暂存区>HEAD

git add * 

git commit -m "注释"

git push origin master

7. git diff https://www.runoob.com/git/git-diff.html
* 比较文件的不同，即比较文件在暂存区和工作区的差异

* 命令显示已写入暂存区和已经被修改但尚未写入暂存区文件的区别。

* 主要应用场景：
  
  * 尚未缓存的改动：**git diff**
  
  * 查看已缓存的改动： **git diff --cached**
  
  * 查看已缓存的与未缓存的所有改动：**git diff HEAD**
8. 删除分支 
   
   * 删除远程  `git push origin -d 分支名 `
   
   * 删除本地 `git branch -d 分支名`
