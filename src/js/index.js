$(function () {
    // 报名弹出

    var BtnR = $('#btnR'),

        Mask = $('#Mask'),

        CloseBtn = $('#closeBtn');

    BtnR.click(function (event) {

        Mask.css('display', 'block');
    });
    CloseBtn.click(function (event) {

        Mask.css('display', 'none');

    });

// 导航切换 
    var aLi = $('.nav-in li'),

        FormInfo = $('.form-info');

    aLi.click(function (event) {

        $(this).addClass('cur').siblings().removeClass('cur');

        var i = $(this).index();

        FormInfo.eq(i).show().siblings('.form-info').hide();
    });


});