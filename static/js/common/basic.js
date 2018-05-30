$(function () {
    if(SESSIONID == "" || null == SESSIONID || USER == "" || null == USER) {
        //layer.msg("登陆已过期",{icon:7});
        //alert("登陆已过期");
        window.location.href = "login.html";
    }
})