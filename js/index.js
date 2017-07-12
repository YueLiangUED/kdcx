(function(global){
    function remChange(){
        document.documentElement.style.fontSize=20*document.documentElement.clientWidth/750+'px';
    }
    remChange();
    global.addEventListener('resize',remChange,false);
})(window);

$(function () {
    //查询按钮
    $('#query').on('click',function () {
        /*需要验证....................
        * ........................
        * ........................*/
        //window.location.href = '';
        //底部列表显示
        $('#showHide').show();
    });
    //续费按钮
    $('#xufei').on('click',function () {
        window.location.href = '';
    });
    //验证方式切换
    $('#tab').on('click','li',function (e) {
        var $this = $(this);
        $this.addClass('active').siblings().removeClass('active');
        if($this.text() == '证件验证'){
            $('.card').show();
            $('.num').hide();
        }else if($this.text() == '宽带验证'){
            $('.card').hide();
            $('.num').show();
        }
    });
    //列表选中样式
    $('#list').on('click','li',function () {
        var $this = $(this);
        $this.addClass('actBg').siblings().removeClass('actBg');
    });

    //隐藏三位账号或证件号
    (function () {
        var $number = $('#list').find('li').find('span:nth-child(1)');
        var mtel = $number.html().substr(0, 7) + '***' + $number.html().substr(-3);
        $number.text(mtel);
    })();

});
