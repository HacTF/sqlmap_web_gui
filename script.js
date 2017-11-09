//网页加载便执行匿名函数
document.body.onload=function()
{
  jiazai();
};
//获得所有button按钮
var anniu = document.getElementsByTagName("button");
//循环button按钮数组
for(var i=0;i<anniu.length;i++) 
{       
      //如果某个button按钮被点击
      anniu[i].onclick=function()
      {
            //如果点击的是命令生成按钮
            if(this.getAttribute("leixing")=="shengcheng")
            {
                  shengcheng();
            }
            //如果点击的是恢复默认的按钮
            else if(this.getAttribute("leixing")=="default")
            {
                  var input = document.getElementsByTagName("input");
                  for(var i=0;i<input.length;i++){
                    if(input[i].type=="checkbox"){
                      input[i].checked=false;
                    }
                    else if(input[i].type=="text"){
                      input[i].value="";
                    }
                  }
                  jiazai();
            }
            //如果点的是帮助按钮
            else if(this.getAttribute("leixing")=="help")
            {
                  document.getElementById("jieguo").value="使用说明视频地址：http://v.youku.com/v_show/id_XNzA1MDU2NTI0.html";
            }
      }
}

 //默认勾选
 function jiazai()
 {
  document.getElementById("sqli1").checked=true;
  document.getElementById("beep").checked=true;
  document.getElementById("batch").checked=true;
  document.getElementById("currentdb").checked=true;
  document.getElementById("currentuser").checked=true;
  document.getElementById("isdba").checked=true;
  document.getElementById("youhua").checked=true;
  document.getElementById("banner").checked=true;
 }


//获得结果框
var jieguo = document.getElementById("jieguo");
//获得注入点多选框
var sqli1 = document.getElementById("sqli1");
//获得注入点输入框
var sqli2 = document.getElementById("sqli2");

document.getElementById("ignore").onclick=function(){
  if(document.getElementById("ignore").checked&&document.getElementById("proxy").checked){
    document.getElementById("proxy").checked=false;
  }
}
document.getElementById("proxy").onclick=function(){
  if(document.getElementById("proxy").checked&&document.getElementById("ignore").checked){
    document.getElementById("ignore").checked=false;
  }
}


 //点击命令生成要执行的函数
 function shengcheng()
 {
//获得sqlmap路径
var sqlmap = document.getElementById("sqlmapath").value;
//判断是否填入sqlmap路径
  if(sqlmap!=""){
   jieguo.value="python "+'"'+sqlmap+'"';
  }
  else{
    alert("请输入sqlmap路径！");
    document.getElementById("sqlmapath").focus();
    return;
  }
//判断注入点中是否有协议名
if(sqli2.value!=""){
  if(sqli2.value.indexOf("://")>0){
    //如果有 则用 -u
    jieguo.value+=" -u "+'"'+sqli2.value+'"';
  }
  else{
    //没有则用 -r
    jieguo.value+=" -r "+'"'+sqli2.value+'"';
  }
}
else{
  alert("请填写注入点或者http包绝对路径！");
  sqli2.focus();
  return;
}

//获得 发现注入点提醒 --beep 元素
 var beep = document.getElementById("beep");
 if(beep.checked){
  jieguo.value+=" --beep";
 }

 //获得 自动化 --batch 元素
 var batch = document.getElementById("batch");
 if(batch.checked){
  jieguo.value+=" --batch";
 }

 //获得 当前数据库 --current-db 元素
 var currentdb =document.getElementById("currentdb");
 if(currentdb.checked){
  jieguo.value+=" --current-db";
 }

 //获得当前数据库用户 --current-user 元素
 var currentuser=document.getElementById("currentuser");
 if(currentuser.checked){
  jieguo.value+=" --current-user";
 }

 //获得当前数据库用户 是否是 数据库管理员 --is-dba  元素
 var isdba =document.getElementById("isdba");
 if(isdba.checked){
  jieguo.value+=" --is-dba";
 }

 //获得当前数据库标识 --banner 元素
 var banner = document.getElementById("banner");
 if(banner.checked){
  jieguo.value+=" --banner";
 }

 //获得 勾选 -O 优化开关 元素
 var youhua = document.getElementById("youhua");
 if(youhua.checked){
  jieguo.value+=" -o";
 }

 //获得 存储数据库中数据 --dump 元素
 var dump = document.getElementById("dump");
 if(dump.checked){
  jieguo.value+=" --dump";
 }

 //获得存储数据库中所有数据 --dump-all 元素
 var dumpall=document.getElementById("dumpall");
 if(dumpall.checked){
  jieguo.value+=" --dump-all";
 }

 //
 var schema = document.getElementById("schema");
 if(schema.checked){
  jieguo.value+=" --schema";
 }

 var dbs = document.getElementById("dbs");
 if(dbs.checked){
  jieguo.value+=" --dbs";
 }

 var users = document.getElementById("users");
 if(dbs.checked){
  jieguo.value+=" --users";
 }

 var privileges = document.getElementById("privileges");
 if(privileges.checked){
  jieguo.value+=" --privileges";
 }

 var roles = document.getElementById("roles");
 if(roles.checked){
  jieguo.value+=" --roles";
 }

 var sysdbs = document.getElementById("sysdbs");
 if(sysdbs.checked){
  jieguo.value+=" --exclude-sysdbs";
 }

 var tables = document.getElementById("tables");
 if(tables.checked){
  jieguo.value+=" --tables";
 }

 var commontables = document.getElementById("commontables");
 if(commontables.checked){
  jieguo.value+=" --common-tables";
 }

 var commoncolumns = document.getElementById("commoncolumns");
 if(commoncolumns.checked){
  jieguo.value+=" --common-columns";
 }

 var threads = document.getElementById("threads");
 jieguo.value+=" --threads="+'"'+threads.value+'"';

 var level = document.getElementById("level");
 jieguo.value+=" --level="+'"'+level.value+'"';

 var risk = document.getElementById("risk");
 jieguo.value+=" --risk="+'"'+risk.value+'"';

 var xiangxi = document.getElementById("xiangxi");
 jieguo.value+=" -v "+'"'+xiangxi.value+'"';

 var timeout = document.getElementById("timeout");
 jieguo.value+=" --timeout="+'"'+timeout.value+'"';

 var dbms = document.getElementById("dbms").value;
 
//检查是否勾选上了 指定数据库
 var isdbms = document.getElementById("setdbms");
 if(isdbms.checked){
  switch(dbms){
    case "MySQL":
      jieguo.value+=" --dbms="+'"mysql"';
      break;
    case "MySQL4":
      jieguo.value+=" --dbms="+'"mysql 4"';
    case "MySQL5":
      jieguo.value+=" --dbms="+'"mysql 5"';
    case "PostgreSQL":
      jieguo.value+=" --dbms="+'"pgsql"';
    case "mssql":
      jieguo.value+=" --dbms="+'"mssql"';
    case "Oracle":
      jieguo.value+=" --dbms="+'"oracle"';
    case "access":
      jieguo.value+=" --dbms="+'"access"';
    case "SQLite":
      jieguo.value+=" --dbms="+'"sqlite"';
    case "SQLite3":
      jieguo.value+=" --dbms="+'"sqlite3"';
    case "firebird":
      jieguo.value+=" --dbms="+'"firebird"';
    case "Sybase":
      jieguo.value+=" --dbms="+'"sybase"';
    case "SAPMaxDB":
      jieguo.value+=" --dbms="+'"maxdb"';
  }
 }
 
 var os = document.getElementById("os").value;
 var setos = document.getElementById("setos");
 if(setos.checked){
  switch(os){
    case "linux":
      jieguo.value+=" --os="+'"linux"';
    case "windows":
      jieguo.value+=" --os="+'"windows"';
  }
 }

 var technique = document.getElementById("technique").value;
 var sqlitype = document.getElementById("sqlitype");
 if(sqlitype.checked){
  jieguo.value+=" --technique="+'"'+technique+'"';
 }



 var sqlshell = document.getElementById("sqlshell");
 if(sqlshell.checked){
  jieguo.value+=" --sql-shell";
 }

 var cmdshell = document.getElementById("cmdshell");
 if(cmdshell.checked){
  jieguo.value+=" --os-shell";
 }

 var suijiagent1 = document.getElementById("suijiagent1");
 if(suijiagent1.checked){
  jieguo.value+=" --random-agent";
 }

 var referer2 = document.getElementById("referer2").value;
 var referer1 = document.getElementById("referer1");
 if(referer1.checked){
  jieguo.value+=" --referer="+'"'+referer2+'"';
 }

 var regread1 = document.getElementById("regread1");
 var regread2 = document.getElementById("regread2").value;
 if(regread1.checked){
  if(regread2=="")
  {
    alert("请填写要读取的注册表路径以及键值");
    regread2.focus();
    return;
  }

  jieguo.value+=' --reg-read "'+regread2+'"';

 }

 var regwrite1 = document.getElementById("regwrite1");
 var regwrite2 = document.getElementById("regwrite2").value;
 var regwrite3 = document.getElementById("regwrite3").value;
 var regwrite4 = document.getElementById("regwrite4").value;
 var regwrite5 = document.getElementById("regwrite5").value;
 if(regwrite1.checked){
  if(regwrite2=="")
  {
    alert("请填写key值");
    document.getElementById("regwrite2").focus();
    return;
  }
  else if(regwrite3==""){
    alert("请填写value值");
    document.getElementById("regwrite3").focus();
    return;
  }
  else if(regwrite4==""){
    alert("请填写type值");
    document.getElementById("regwrite4").focus();
    return;
  }
  else if(regwrite5==""){
    alert("请填写data值");
    document.getElementById("regwrite5").focus();
    return;
  }
  else{
    jieguo.value+=' --reg-add --reg-key="'+regwrite2+'" --reg-value='+regwrite3+" --reg-type="+regwrite4+" --reg-data="+regwrite5;
  }
 }


//文件操作区 start
 var readserverfile1 = document.getElementById("readserverfile1");
 var readserverfile2 = document.getElementById("readserverfile2").value;
 if(readserverfile1.checked){
  if(readserverfile2==""){
    alert("请填写要读取的文件绝对路径");
    document.getElementById("readserverfile2").focus();
    return;
  }
  jieguo.value+=' --file-read="'+readserverfile2+'"';
 }

 var filewritelocal1 = document.getElementById("filewritelocal1");
 var filewritelocal2 = document.getElementById("filewritelocal2").value;
 var filewrite3 = document.getElementById("filewrite3").value;
 if(filewritelocal1.checked){
  if(filewritelocal2==""){
    alert("填写文件的本地路径");
    document.getElementById("filewritelocal2").focus();
    return;
  }
  else if(filewrite3==""){
    alert("请填写要写入的网站路径");
    document.getElementById("filewrite3").focus();
    return;
  }
  jieguo.value+=' --file-write="'+filewritelocal2+'"'+' --file-dest="'+filewrite3+'"';
 }

 //文件操作区 End

 //高级设定 start

 //搜索
 var search = document.getElementById("search");
 var search1 = document.getElementById("search1");
 var search2 = document.getElementById("search2").value;
 if(search1.checked){
  if(search.value=="D"){
    if(search2==""){
      alert("请填写要搜索的库名!");
      document.getElementById("search2").focus();
      return;
    }
    jieguo.value +=' --search -D '+search2;
  }
  else if(search.value=="T"){
    if(search2==""){
      alert("请填写要搜索的表名!");
      document.getElementById("search2").focus();
      return;
    }
    jieguo.value +=' --search -T '+search2;
  }
  else if(search.value=="C"){
    if(search2==""){
      alert("请填写的列名!");
      document.getElementById("search2").focus();
      return;
    }
    jieguo.value +=' --search -C '+search2;
  }
 }

 //指定数据库
 var databasename1 = document.getElementById("databasename1");
 var databasename2 = document.getElementById("databasename2").value;
 if(databasename1.checked){
  if(databasename2=="")
  {
    alert("请填写库名！");
    document.getElementById("databasename2").focus();
    return;
  }
  else if(document.getElementById("tablename1").checked)
  {
    jieguo.value+=' -D '+databasename2;
  }
  else{
  jieguo.value+=' -D '+databasename2+' --tables';
  }
 }

 //指定表
 var tablename1 = document.getElementById("tablename1");
 var tablename2 = document.getElementById("tablename2").value;
  if(tablename1.checked){
  if(tablename2=="")
  {
    alert("请填写表名！");
    document.getElementById("tablename2").focus();
    return;
  }
  else if(document.getElementById("columnsname1").checked){
    jieguo.value+=' -T '+tablename2
  }
  else{
  jieguo.value+=' -T '+tablename2+' --columns';
  }
 }
 
 //指定列
 var columnsname1 = document.getElementById("columnsname1");
 var columnsname2 = document.getElementById("columnsname2").value;
 if(columnsname1.checked){
  if(columnsname2==""){
    alert("请填写列名！");
    document.getElementById("columnsname2").focus();
    return;
  }
  else if(databasename1.checked&&tablename1.checked&&columnsname1.checked&&dump.checked==false){
    if(confirm("您勾选了 库/表/列 但是没勾选dump 将无法获得指定列的内容，请问是否勾选dump？")){
      document.getElementById("dump").checked=true;
      jieguo.value+=" -C "+columnsname2+' --dump';
    }
  }
  else{
    jieguo.value+=' -C '+columnsname2;
  }

 }


 //编码插件区
 var tamper1 = document.getElementById("tamper1");
 var tamper2 = document.getElementById("tamper2");
 if(tamper1.checked){
  jieguo.value+=" --tamper "+tamper2.value;
 }
 
 //指定漏洞参数
 var sqlip1 = document.getElementById("sqlip1");
 var sqlip2 = document.getElementById("sqlip2");
 if(sqlip1.checked){
  if(sqlip2.value=="")
  {
    alert("请填写漏洞参数！");
    sqlip2.focus();
    return;
  }
  jieguo.value+=" -p "+sqlip2.value;
 }
 
 //注入的payload 前缀
 var prefix1 = document.getElementById("prefix1");
 var prefix2 = document.getElementById("prefix2");
 if(prefix1.checked){
  if(prefix2.value==""){
    alert("请填写payload前缀！");
    prefix2.focus();
    return;
  }
  jieguo.value+=' --prefix="'+prefix2.value+'"';
 }

 //注入的payload 后缀
 var suffix1 = document.getElementById("suffix1");
 var suffix2 = document.getElementById("suffix2");
 if(suffix1.checked){
  if(suffix2.value=="")
  {
    alert("请填写payload后缀");
    suffix2.focus();
    return;
  }
  jieguo.value+=' --suffix="'+suffix2.value+'"';
 }

 //指定union 测试的范围 start
 var unioncols = document.getElementById("unioncols");
 //检查 如果unioncols被勾选 则获取  1 2 的内容 做为union 猜解的最小值以及最大值
 var unioncols1 = document.getElementById("unioncols1");
 var unioncols2 = document.getElementById("unioncols2");
 if(unioncols.checked){
  if(unioncols1.value==""){
    alert("请输入union猜解最小值");
    unioncols1.focus();
    return;
  }
  else if(unioncols2.value==""){
    alert("请输入union猜解最大值");
    unioncols2.focus();
    return;
  }
  jieguo.value+=" --union-cols "+unioncols1.value+"-"+unioncols2.value;
 }
 //指定Union 测试的范围 end

//暴力猜解列数的内容
 var unionchar1 = document.getElementById("unionchar1");
 var unionchar2 = document.getElementById("unionchar2");
 if(unionchar1.checked){
  if(unionchar2.value==""){
    alert("请输入暴力猜解列数的内容");
    unionchar2.focus();
    return;
  }
  jieguo.value+=' --union-char="'+unionchar2.value+'"';
 }

 //执行sql语句
 var sqlquery1 = document.getElementById("sqlquery1");
 var sqlquery2 = document.getElementById("sqlquery2");
 if(sqlquery1.checked){
  if(sqlquery2.value==""){
    alert("请输入sql语句");
    sqlquery2.focus();
    return;
  }
  jieguo.value+=' --sql-query="'+sqlquery2.value+'"';
 }

 //执行CMD 命令
 var cmd1 = document.getElementById("cmd1");
 var cmd2 = document.getElementById("cmd2");
 if(cmd1.checked){
  if(cmd2.value==""){
    alert("请输入cmd命令");
    cmd2.focus();
    return;
  }
  jieguo.value+=' --os-cmd="'+cmd2.value+'"';
 }

 //代理区
 
 var ignore = document.getElementById("ignore");
 if(ignore.checked){
  jieguo.value+=" --ignore-proxy";
 }

 var proxy = document.getElementById("proxy");
 var proxyurl = document.getElementById("proxyurl");
 var proxyport = document.getElementById("proxyport");
 var proxyuser = document.getElementById("proxyuser");
 var proxypass = document.getElementById("proxypass");
 if(proxy.checked){
    if(proxyurl.value==""){
    alert("请输入HTTP代理URL！");
    proxyurl.focus();
    return;
  }
  else if(proxyport.value==""){
    alert("请输入HTTP代理端口！");
    proxyport.focus();
    return;
  }
  jieguo.value+=' --proxy="'+proxyurl.value+':'+proxyport.value+'"';
  if(proxyuser.value!=""&&proxypass.value!="")
  {

    jieguo.value+=' --proxy-cred="'+proxyuser.value+":"+proxypass.value+'"';
  }

 }

 var tor = document.getElementById("TOR");
 var torport = document.getElementById("torport");
 var toptype = document.getElementById("tortype");
 if(tor.checked){
  jieguo.value+=" --tor";
 if(torport.value!=""){
 jieguo.value+=' --tor-port='+torport.value;
 }

 jieguo.value+=' --tor-type='+tortype.value;
 }
 
  }

document.getElementById("addpug").onclick=function(){
  jieguo.value = jieguo.value.replace(/--tamper/,"--tamper "+tamper2.value)
}