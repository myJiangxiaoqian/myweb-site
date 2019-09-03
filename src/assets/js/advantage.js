function advantage(){
    $(document).ready(function () {
        //金融领域领先的人工智能营销运营平台  获取焦点效果
        $("#contentText .ballList").mouseover(function (){
            // $(this).find("div").hide();
            $(this).find(".textP").show();
        }).mouseout(function (){
            // $(this).find("div").show();
            $(this).find(".textP").hide();
        });
        //获取焦点效果
        $(".bossbox .listbox .backbgimg").mouseover(function (){
            $(this).find("div").eq(0).hide();
            $(this).find("div").eq(1).show();
        }).mouseout(function (){
            $(this).find("div").eq(1).hide();
            $(this).find("div").eq(0).show();
        });
        //左右滑动效果
        $('.bossbox .leftbtn').click(function(){
            $(".bossbox .listbox").prepend($(".bossbox .listbox .backbgimg").eq(5));
        })
        $('.bossbox .rightbtn').click(function(){
            $(".bossbox .listbox").append($(".bossbox .listbox .backbgimg").eq(0));
        })

        //产品服务与优势 效果
        $(".chanpin ul li").mouseover(function (){
            $(this).find("img").eq(0).hide();
            $(this).find("img").eq(1).show();
        }).mouseout(function (){
            $(this).find("img").eq(1).hide();
            $(this).find("img").eq(0).show();
        });
    });
}
export {
    advantage
}
