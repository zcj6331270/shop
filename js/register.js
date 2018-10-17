var register = (function () {

    return {
        init: function (ele) {
            // 获取form表单
            this.$ele = document.querySelector(ele);
            // 获取提交按钮
            this.$Btn = this.$ele['btn'];
            // console.log(this.$ele)
            this.$phonenumberinp = this.$ele['phonenumber_r'];
            this.$passwordInp = this.$ele['password'];
            this.$usernameInp = this.$ele['username'];
            this.$userH5 = this.$ele.querySelector('.small_font');
            this.$passH5 = this.$ele.querySelector('.big_font');
            this.event();
        },
        event: function () {
            var _this = this;
            // console.log(this.$usernameInp);
            // 注册按钮
            this.$Btn.onclick = function () {
                // 发送ajax，验证用户名和密码
                var reg = /^[a-zA-Z0-9]\w{3,9}$/;
				if(reg.test(_this.$usernameInp.value)){
            		_this.$userH5.style.display = "none";
            	}
            	else{
            		_this.$userH5.style.display = "block";
            	}        
                var params = {
                    // debugger;
                    method: 'post',
                    data: {
                        // phonenumber: _this.$phonenumberinp.value,
                        username: _this.$usernameInp.value,
                        password: _this.$passwordInp.value,
                    },
                    success: function (data) {
                        console.log(1);
                        console.log(data);
                        data = JSON.parse(data);
                        _this.loginSuccess(data);
                    }
                }
                sendAjax('php/register.php', params);
            }
                    this.$usernameInp.onchange = function () {
                        var reg = /^[a-zA-Z0-9]{6,20}$/;
                        if(reg.test(_this.$passwordInp.value)){
                          _this.$passH5.style.display = "none";
                     }
                      else{
                          _this.$passH5.style.display = "block";
                     } 
                        var params = {
                            data: {
                                username: _this.$usernameInp.value
                            },
                            success: function(data) {
                                data = JSON.parse(data);
                                // console.log(data)
                                _this.checkName(data);
                            }
                        }
                        sendAjax('http://localhost/shop/xioami/php/zhuceconnect_db.php', params);
                    }
        },
        checkName: function (data) {
            if (data.code == 200) {
                // 用户名称不存在
            } else {
                // 用户名称存在
            }
        },
        loginSuccess: function (data) {
            console.log(data);
            if (data.code == 200) {
                location.href = 'login.html';
            } else {
                alert(data.msg);
            }
        }
    }
}())