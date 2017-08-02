//top
$(function() {
	$(".quick-menu dl").hover(function() {
		$(this).addClass("hover");
	},
	function() {
		$(this).removeClass("hover");
	});

});
//header

//nav
$(function(){
	var mark=1;
	$("#sort1").hover(function(){
		if(mark==1){//把他展开
			$(this).children('#sort').slideDown();
			mark=2;
		}else if(mark==2){//收缩
			$(this).children('#sort').slideUp();
			mark=1;
		}
	});
	
//	$(".sort ul li:nth-child(7)").css({'float': 'right'});
});

//下拉选框
$(function(){

	$(".nav_bbs p").click(function(){
		var ul=$(".new");
		if(ul.css("display")=="none"){
			ul.slideDown();
		}else{
			ul.slideUp();
		}
	});
	
	$(".set").click(function(){
		var _name = $(this).attr("name");
		if( $("[name="+_name+"]").length > 1 ){
			$("[name="+_name+"]").removeClass("select1");
			$(this).addClass("select1");
		} else {
			if( $(this).hasClass("select1") ){
				$(this).removeClass("select1");
			} else {
				$(this).addClass("select1");
			}
		}
	});
	
	$(".nav_bbs li").click(function(){
		var li=$(this).text();
		$(".nav_bbs p").html(li);
		$(".new").hide();
		/*$(".set").css({background:'none'});*/
		$("p").removeClass("select") ;   
	});
})


//搜索框1111111111111111111111111
function test1()
{
	var tempStr=document.getElementById('test').value;
	if(tempStr=="请输入输入关键词")
	{
		document.getElementById('test').value="";
	}

}

function test2()
{
	var tempStr=document.getElementById('test').value;
	if(tempStr=="")
	{
		document.getElementById('test').value="请输入输入关键词";
	}
}


function test3()
{
	var tempStr=document.getElementById('test1').value;
	if(tempStr=="搜索店内商品")
	{
		document.getElementById('test1').value="";
	}

}

function test4()
{
	var tempStr=document.getElementById('test1').value;
	if(tempStr=="")
	{
		document.getElementById('test1').value="搜索店内商品";
	}
}


function test5()
{
	var tempStr=document.getElementById('test2').value;
	if(tempStr=="搜索店内商品")
	{
		document.getElementById('test2').value="";
	}

}

function test6()
{
	var tempStr=document.getElementById('test2').value;
	if(tempStr=="")
	{
		document.getElementById('test2').value="搜索店内商品";
	}
}


function test7()
{
	var tempStr=document.getElementById('test3').value;
	if(tempStr=="搜索店内商品")
	{
		document.getElementById('test3').value="";
	}

}

function test8()
{
	var tempStr=document.getElementById('test3').value;
	if(tempStr=="")
	{
		document.getElementById('test3').value="搜索店内商品";
	}
}



function test9()
{
	var tempStr=document.getElementById('test4').value;
	if(tempStr=="搜索店内商品")
	{
		document.getElementById('test4').value="";
	}

}

function test10()
{
	var tempStr=document.getElementById('test4').value;
	if(tempStr=="")
	{
		document.getElementById('test4').value="搜索店内商品";
	}
}

//导航

$(document).ready(function(){
    $(".sort-list>ul>li").hover(function(){
        $(this).addClass("hover")
    },function(){
        $(this).removeClass("hover")
    });
    
});






//shop-导航
$(function(){
	$("#sidemenu").slide({ 
		type:"menu", //效果类型
		titCell:".mainCate", // 鼠标触发对象
		targetCell:".subCate", // 效果对象，必须被titCell包含
		delayTime:0, // 效果时间
		triggerTime:0, //鼠标延迟触发时间
		defaultPlay:false,//默认执行
		returnDefault:true//返回默认
	});
	
	$(".hotspot").slide({ titCell:".bl a", mainCell:".scroll", effect:"fold", autoPlay:true,easing:"easeInOutCirc",interTime:5000,delayTime:700});
	$(".hot_focusimg").slide({ titCell:".hds ul", mainCell:".bds ul", effect:"topLoop",  autoPlay:true, autoPage:true,interTime:5000, trigger:"click" });
	$(".fullSlide_1 ,.fullSlide_2").slide({ titCell:".hds ul", mainCell:".bds ul", effect:"fold",  autoPlay:true, autoPage:true,interTime:5000, trigger:"click" });
	$(".hottravel").slide({});
	
	$(".hotellist li").hover(function(){
		$(this).addClass("hotelbg");
	},function(){
		$(this).removeClass("hotelbg");
	})
	
	$(".txtMarquee-top").slide({mainCell:".bd ul",autoPlay:true,effect:"topMarquee",vis:2,interTime:50,trigger:"click"});
	
	$(".btnmenu").hover(function(){
		$(".sidemenu").slideDown();	
	},function(){
		$(".sidemenu").slideUp('fast');	
	})
});


$(function(){
 	$(".video ul li").hover(function(){
        $(this).children('a').children(".shaow").fadeIn(500);
        $(this).find(".sp_t").animate({"left":"12px","opacity":"1"},300);
    },function(){
        $(this).children('a').children(".shaow").fadeOut(200);
		$(this).find(".sp_t").animate({"left":"400px","opacity":"1"},200);
		$(this).find(".sp_t").animate({"left":"-82px","opacity":"0"},0);
    });
});
$(function(){
	$(".video ul li:nth-child(3)").css({'margin-right': '0','float': 'right'});
	$(".video ul li:nth-child(7)").css({'margin-right': '0','float': 'right'});
	$(".video ul li:nth-child(11)").css({'margin-right': '0','float': 'right'});
});


//购物车
$(function(){
	var mark=1;
	$("#dp").hover(function(){
		if(mark==1){//把他展开
			$(this).children('.layer').slideDown();
			mark=2;
		}else if(mark==2){//收缩
			$(this).children('.layer').slideUp();
			mark=1;
		}
	});
	
	var mark=1;
	$("#cat").hover(function(){
		if(mark==1){//把他展开
			$(this).children('.cat_layer').slideDown();
			mark=2;
		}else if(mark==2){//收缩
			$(this).children('.cat_layer').slideUp();
			mark=1;
		}
	});
});


//其他类似的商品
$(function(){
	$(".other_Img li").hover(function(){
        $(this).children('p').animate({"bottom":"0","opacity":"1"},300);
    },function(){
        $(this).children('p').animate({"bottom":"-46px","opacity":"1"},300);
    });
	
	$(".other_Img li:nth-child(4n)").css({'margin-right': '0','float': 'right'});
});




//进度条
$(document).ready(function(){ 
	var percent = $('.progress_bar').attr('title');
	$(".progress_bar").animate({width:percent},1000);
});
$(document).ready(function(){ 
	var percent = $('.progress_bar1').attr('title');
	$(".progress_bar1").animate({width:percent},1000);
});
$(document).ready(function(){ 
	var percent = $('.progress_bar2').attr('title');
	$(".progress_bar2").animate({width:percent},1000);
});

//tab
$(document).ready(function(){
	var $tab_li = $('#tab ul li');
	$tab_li.hover(function(){
		$(this).addClass('selected').siblings().removeClass('selected');
		var index = $tab_li.index(this);
		$('div.tab_box > div').eq(index).show().siblings().hide();
	});	
});
$(document).ready(function(){
	var $tab_li = $('#tab1 ul li');
	$tab_li.hover(function(){
		$(this).addClass('selected').siblings().removeClass('selected');
		var index = $tab_li.index(this);
		$('div.tab_box1 > div').eq(index).show().siblings().hide();
	});	
});

//筛选
$(document).ready(function(){
							
	$("#select1 dd").click(function () {
		$(this).addClass("selected").siblings().removeClass("selected");
			var copyThisA = $(this).clone();
			if ($("#selectA").length > 0) {
				$("#selectA a").html($(this).text());
			} else {
				$(".select-result dl").append(copyThisA.attr("id", "selectA"));

		}
	});
	
	$("#select2 dd").click(function () {
		$(this).addClass("selected").siblings().removeClass("selected");
			var copyThisB = $(this).clone();
			if ($("#selectB").length > 0) {
				$("#selectB a").html($(this).text());
			} else {
				$(".select-result dl").append(copyThisB.attr("id", "selectB"));
			}
	});
	
	$("#select3 dd").click(function () {
		$(this).addClass("selected").siblings().removeClass("selected");
			var copyThisC = $(this).clone();
			if ($("#selectC").length > 0) {
				$("#selectC a").html($(this).text());
			} else {
				$(".select-result dl").append(copyThisC.attr("id", "selectC"));
			}
	});
	
	$("#select4 dd").click(function () {
		$(this).addClass("selected").siblings().removeClass("selected");
			var copyThisC = $(this).clone();
			if ($("#selectD").length > 0) {
				$("#selectD a").html($(this).text());
			} else {
				$(".select-result dl").append(copyThisC.attr("id", "selectD"));
			}
	});
	
	$("#select5 dd").click(function () {
		$(this).addClass("selected").siblings().removeClass("selected");
			var copyThisC = $(this).clone();
			if ($("#selectE").length > 0) {
				$("#selectE a").html($(this).text());
			} else {
				$(".select-result dl").append(copyThisC.attr("id", "selectE"));
			}
	});
	
	$("#select6 dd").click(function () {
		$(this).addClass("selected").siblings().removeClass("selected");
			var copyThisC = $(this).clone();
			if ($("#selectF").length > 0) {
				$("#selectF a").html($(this).text());
			} else {
				$(".select-result dl").append(copyThisC.attr("id", "selectF"));
			}
	});
	
	$("#selectA").live("click", function () {
		$(this).remove();
		$("#select1 .select-all").addClass("selected").siblings().removeClass("selected");
	});
	
	$("#selectB").live("click", function () {
		$(this).remove();
		$("#select2 .select-all").addClass("selected").siblings().removeClass("selected");
	});
	
	$("#selectC").live("click", function () {
		$(this).remove();
		$("#select3 .select-all").addClass("selected").siblings().removeClass("selected");
	});
	
	$("#selectD").live("click", function () {
		$(this).remove();
		$("#select4 .select-all").addClass("selected").siblings().removeClass("selected");
	});
	
	$("#selectE").live("click", function () {
		$(this).remove();
		$("#select5 .select-all").addClass("selected").siblings().removeClass("selected");
	});
	
	$("#selectF").live("click", function () {
		$(this).remove();
		$("#select6 .select-all").addClass("selected").siblings().removeClass("selected");
	});
	
	$(".select dd").live("click", function () {
		if ($(".select-result dd").length > 1) {
			$(".select-no").hide();
		} else {
			$(".select-no").show();
		}
	});
	
	//查看更多
	$(document).ready(function(){
	    var $category = $('.List_more1 dl dd:gt(7):not(:last)');
		$category.show();
		var $toggleBtn = $('#showMore a');
		$toggleBtn.toggle(function(){
			$category.hide();
			$(this).find('span').removeClass('hide').addClass('show').text('展开');	
		},function(){
			$category.show();
			$(this).find('span').removeClass('show').addClass('hide').text('收起');
		});
	});
	
	
	$(document).ready(function(){
	    var $category = $('.List_more2 ul li:gt(7):not(:last)');
		$category.show();
		var $toggleBtn = $('#showMore1 a');
		$toggleBtn.toggle(function(){
			$category.hide();
			$(this).find('span').removeClass('hide').addClass('show').text('展开');	
		},function(){
			$category.show();
			$(this).find('span').removeClass('show').addClass('hide').text('收起');
		});
	});
	
	
	
});



//栏目页
