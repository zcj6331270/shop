var mySwiper = new Swiper('.swiper-container', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	loop: true,
	autoplay: true,
	scrollbar: {
		el: '.swiper-scrollbar',
	},
});
$(function() {
	var xin;
	var price;
	var yan;

	$('.pro-color-ul').on('click','li', function() {
		{
			var target = $(event.target);
			if(target.attr('class') == 'black') {
				$('.swiper-container').removeClass('xianshi');
				$('#oneI').addClass('xianshi');
				target.parent().css({
					'border': '1px solid #ff6700'
				});
				target.parent().siblings().css({
					'border-color': '#e0e0e0'
				});
				
				yan = target.text().trim();
				console.log(target)
				$('#yansetu').html(yan);
				console.log(yan)
			} else if(target.attr('class') == 'blue') {
				$('.swiper-container').removeClass('xianshi');
				$('#twoI').addClass('xianshi');
				target.parent().css({
					'border': '1px solid #ff6700'
				});
				target.parent().siblings().css({
					'border-color': '#e0e0e0'
				});
				target = target.parent();
				yan = target.text().trim();
				console.log(target)
				$('#yansetu').html(yan);
				console.log(yan)
			} else if(target.attr('class') == 'jin') {
				$('.swiper-container').removeClass('xianshi');
				$('#threeI').addClass('xianshi');
				target.parent().css({
					'border': '1px solid #ff6700'
				});
				target.parent().siblings().css({
					'border-color': '#e0e0e0'
				});
				target = target.parent();
				console.log(target)
				yan = target.text().trim();
				console.log(yan)
				$('#yansetu').html(yan);
				console.log(target)
				console.log(yan)
			}

		}
	})

	$(window).scroll(function() {
		var num = document.documentElement.scrollTop;

		if(num > 800) {
			$('.lunbotu').css({
				position: 'absolute',
				left: '0px',
				top: '682px'
			})

		} else if(num >= 200) {
			$('.Navigation').css({
				position: 'fixed',
				top: '0',
				left: '0',
				'z-index': '1100',
				background: '#fff'
			});
			$('.lunbotu').css({
				position: 'fixed',
				top: '73px',
				left: '0px'
			})
		} else if(num < 200) {
			$('.Navigation').css({
				position: 'static'
			});
			$('.lunbotu').css({
				position: 'static'
			})

		}
	});
	$('.step-list').on('click', 'li', function() {

		var target = $(event.target);
		console.log(target);

		if(target.attr("class") == 'step-list-left') {
			console.log(target);
			console.log(1)
			target.parent().css({
				'border': '1px solid #ff6700'
			})
			target.parent().siblings().css({
				'border-color': '#e0e0e0'
			})	
			$('.xinghaode').text(target.find('.name').html())
			$('.zuiPrice').text(target.find('.price').html())
			$('.daZhe').text('1599元')
			$('.qian').html($('.zuiPrice').text());
		} else if(target.attr("class") == 'step-list-right') {
			console.log(2);
			target.parent().css({
				'border': '1px solid #ff6700'
			})
			target.parent().siblings().css({
				'border-color': '#e0e0e0'
			})
			$('.xinghaode').text(target.find('.name').html())
			$('.zuiPrice').text(target.find('.price').html())
			$('.daZhe').text('1899元')
			$('.qian').html($('.zuiPrice').text());
		}
	})
	$('#duihao').click(function() {
		$('#duihao').css({
			color: '#ff6700',
		});
		$('#duihao').html('');
		$('.zhengqudui1').css({
			visibility: 'hidden'
		});
		var sum = parseInt($('.zuiPrice').text());
		sum = parseInt($('.price').text()) + sum;
		$('.qian').html(sum + '元');
	})
	$('#duihao').click(function() {
		$('#duihao1').css({
			bcolor: '#ff6700',
		});
		$('#duihao1').html('√');
		$('.zhengqudui1').css({
			visibility: 'visible'
		})
		$('.qian').html($('.zuiPrice').text());
		var sum = parseInt($('.zuiPrice').text());
		sum = parseInt($('.price').text()) + sum;
		$('.qian').html(sum + '元');
	})
	$('.address-info').click(function(e) {
		var target = e.target;

		var input = $("<input type='text'>");
		console.log(1);
		var td = $(target);
		consoel.log($(target))
		input.val(td.text());
		td.contents().replaceWith(input);
		input.blur(function() {
			td.text($(this).val());
			$(this).remove();
		})
	})
	// localStorage数据必须要以json形式
	$('.dianji').on('click', 'a', function(e) {
		var target = $(event.target);
		if(target.prop('tagName') == 'a') {
			//			console.log(JSON.parse(localStorage.getItem('hongmi'))[0].tok)
			if(JSON.parse(localStorage.getItem('hongmi'))) {
				var arr = JSON.parse(localStorage.getItem('hongmi'))
				var num = 1;
				var fool;
				var price = parseInt($('.qian').text());
				var iphoneColor = $("#yansetu").text();
				var address = $('.sheng').text() + $('.shi').text() + $('.qu').text() + $('.jie').text();
				var name = $('.type').text();
				var type = $('.xinghaode').text();
				var str = $('.tuPianUrl').css('background-image').slice(4);
				var phoneurl = $('.tuPianUrl').css('background-image').slice(4).substring(0,str.length-1);
				auto:for(var i = 0; i < arr.length; i++) {
					for(var k in arr[i]) {
						if(arr[i].name == name && arr[i].type == type && arr[i].iphoneColor == iphoneColor && arr[i].address == address && arr[i].price == price && arr[i].phoneurl == phoneurl) {
							num = arr[i].tok + 1;
							data = {
								name: name,
								type: type,
								iphoneColor: iphoneColor,
								address: address,
								price: price,
								tok: num,
								phoneurl: phoneurl
							}
							arr.splice(i, 1, data)
							arr = JSON.stringify(arr);

							localStorage.setItem('hongmi', arr);
							fool=i;
							break auto;
						}
					}
				}
				// 判断东西相同时，数据是否要变
				if(i !=fool) {
					var arr = JSON.parse(localStorage.getItem('hongmi'))
					data = {
						name: name,
						type: type,
						iphoneColor: iphoneColor,
						address: address,
						price: price,
						tok: num,
						phoneurl: phoneurl
					}
					arr.push(data);
					arr = JSON.stringify(arr);
					localStorage.setItem('hongmi', arr);

				}
				console.log(arr);
			} else {
				var arr = [];
				var num = 1;
				var price = parseInt($('.qian').text());
				var iphoneColor = $("#yansetu").text();
				var address = $('.sheng').text() + $('.shi').text() + $('.qu').text() + $('.jie').text();
				var name = $('.type').text();
				var type = $('.xinghaode').text();
				var str = $('.tuPianUrl').css('background-image').slice(4);
				var phoneurl = $('.tuPianUrl').css('background-image').slice(4).substring(0,str.length-1);
				data = {
					name: name,
					type: type,
					iphoneColor: iphoneColor,
					address: address,
					price: price,
					tok: num,
					phoneurl: phoneurl
				}
				arr.push(data);
				arr = JSON.stringify(arr);
				console.log(arr);
				localStorage.setItem('hongmi', arr);
			}
		}
		location.href = 'shopcar.html'
	})
	
})
