/**
 * 图片裁剪插件 v1.0
 * 作者：大男人主义
 * 邮箱:826541524@qq.com
 * 
 * 本插件旨在提供相关功能-由用于调用API完成裁剪功能
 * 后期版本会增加裁剪模板供快捷使用
 * 
 * 此插件使用ES5开发 因为这个插件可以直接使用 如使用ES6还需转码 并不是每个项目都使用了webpack等工具构建的
 * 
 * v1.0版本 完成基本功能的封装 功能如下
 * 
 * 拖拽功能 -- 用于选择裁剪区域
 * 缩放功能（包含PC端的鼠标滚轮） -- 用于选择裁剪区域
 * 旋转功能 -- 用于选择裁剪区域
 * 选择裁剪区域最终返回需要裁剪的信息
 * 
 * 裁剪功能 -- 利用canvas以及选择的裁剪区域进行裁剪
 * 裁剪功能最终返回 base64 or blob数据流 格式 默认返回blob
 * 
 * 文件上传 -- 利用FormData以及AJAX提交文件数据
 * 由于不知道用户会选择什么样的库作为AJAX上传，so 自己简单封装一个AJAX 用于上传文件
 * 并且返回的信息全部返回 由用户控制成功，错误
 * 
 * 文件上传 提供如下回调
 * 
 * 上传成功 返回服务端返回的数据 以及 response
 * 上传失败 返回response
 * 上传进度 返回进度百分比 以及 总大小、当前上传大小
 */

 /**
  * 构造函数
  */
;
var ImgClipper  = function(ops,files){
    ops = ops || {};
};

var ICP = ImgClipper.prototype;

/**
 * 获取图片预览地址
 */

ICP.GetSrc = function(){
    return [];
};

/**
 * 生成选择裁剪区域的可移动选择框
 */

ICP.CreateSelect = function(){
    //TODO
};

/**
 * 获取选择区域的信息
 */

ICP.GetSelecrAreaInfo = function(){
    //TODO
};


