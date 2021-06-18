$(window).ready(function () {

	window.addEventListener('message', function (event) {
		let data = event.data;

		if (data.showMenu) {
			$('#container').fadeIn();
			$('#menu').fadeIn();
			$('#deposit_all_btn').text('$' + data.player.money);
			document.playerData = data.player;

			let bankAmount = 0;
			document.playerData.bankAmount = bankAmount;
			for (let i = 0; i < data.player.accounts.length; i++) {
				if (data.player.accounts[i].name == 'bank') {
					bankAmount = data.player.accounts[i].money;
				}
			}
			$('#bank').text('$' + bankAmount);
			$('#money').text('$' + data.player.money);
			$('#withdraw_all_btn').text('$' + bankAmount);
		} else if (data.hideAll) {
			$('#container').fadeOut();
		}
	});

	document.onkeyup = function (data) {
		if (data.which == 27) {
			$.post('http://esx_atm/escape', '{}');
		}
	};

	document.withdraw = (num) => {
		if(num === 0) {
			num = document.playerData.bankAmount;
		}
		$.post('http://esx_atm/withdraw', JSON.stringify({
			amount: num
		}));
	}

	document.deposit = (num) => {
		if(num === 0) {
			num = document.playerData.money;
		}
		$.post('http://esx_atm/deposit', JSON.stringify({
			amount: num
		}));
	}

	$('#container').hide();

	$('#deposit_btn').on('click', function () {
		$.post('http://esx_atm/deposit', JSON.stringify({
			amount: $('#deposit_amount').val()
		}));

		$('#deposit_amount').val(0);
	})

	$('#deposit_amount').on("keyup", function (e) {
		if (e.keyCode == 13) {
			$.post('http://esx_atm/deposit', JSON.stringify({
				amount: $('#deposit_amount').val()
			}));

			$('#deposit_amount').val(0);
		}
	});

	$('#withdraw_btn').on('click', function () {
		$.post('http://esx_atm/withdraw', JSON.stringify({
			amount: $('#withdraw_amount').val()
		}));

		$('#withdraw_amount').val(0);
	});

	$('#withdraw_amount').on("keyup", function (e) {
		if (e.keyCode == 13) {
			$.post('http://esx_atm/withdraw', JSON.stringify({
				amount: $('#withdraw_amount').val()
			}));

			$('#withdraw_amount').val(0);
		}
	});

});
