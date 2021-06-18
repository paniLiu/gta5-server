$(window).ready(function () {

	window.addEventListener('message', function (event) {
		let data = event.data;

		if (data.showMenu) {
			$('#container').fadeIn();
			$('#menu').fadeIn();
			$('#deposit_all_btn').text('$' + data.player.money);
			document.playerData = {money: data.player.money, bankAmount: 0};

			let bankAmount = 0;
			for (let i = 0; i < data.player.accounts.length; i++) {
				if (data.player.accounts[i].name == 'bank') {
					bankAmount = data.player.accounts[i].money;
				}
			}
			document.playerData.bankAmount = bankAmount;
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

	$('#deposit_1_btn').on('click', function () {
		$.post('http://esx_atm/deposit', JSON.stringify({
			amount: '100'
		}));

		$('#deposit_amount').val(0);
	})

	$('#deposit_2_btn').on('click', function () {
		$.post('http://esx_atm/deposit', JSON.stringify({
			amount: '300'
		}));

		$('#deposit_amount').val(0);
	})

	$('#deposit_3_btn').on('click', function () {
		$.post('http://esx_atm/deposit', JSON.stringify({
			amount: '5000'
		}));

		$('#deposit_amount').val(0);
	})

	$('#deposit_4_btn').on('click', function () {
		$.post('http://esx_atm/deposit', JSON.stringify({
			amount: '1000'
		}));

		$('#deposit_amount').val(0);
	})

	$('#deposit_5_btn').on('click', function () {
		$.post('http://esx_atm/deposit', JSON.stringify({
			amount: '5000'
		}));

		$('#deposit_amount').val(0);
	})

	$('#deposit_6_btn').on('click', function () {
		$.post('http://esx_atm/deposit', JSON.stringify({
			amount: '10000'
		}));

		$('#deposit_amount').val(0);
	})

	$('#deposit_all_btn').on('click', function () {
		$.post('http://esx_atm/deposit', JSON.stringify({
			amount: document.playerData.money.toString(),
		}));

		$('#deposit_amount').val(0);
	})

	$('#withdraw_1_btn').on('click', function () {
		$.post('http://esx_atm/withdraw', JSON.stringify({
			amount: '100'
		}));

		$('#withdraw_amount').val(0);
	});


	$('#withdraw_2_btn').on('click', function () {
		$.post('http://esx_atm/withdraw', JSON.stringify({
			amount: '300'
		}));

		$('#withdraw_amount').val(0);
	});


	$('#withdraw_3_btn').on('click', function () {
		$.post('http://esx_atm/withdraw', JSON.stringify({
			amount: '500'
		}));

		$('#withdraw_amount').val(0);
	});


	$('#withdraw_4_btn').on('click', function () {
		$.post('http://esx_atm/withdraw', JSON.stringify({
			amount: '1000'
		}));

		$('#withdraw_amount').val(0);
	});


	$('#withdraw_5_btn').on('click', function () {
		$.post('http://esx_atm/withdraw', JSON.stringify({
			amount: '5000'
		}));

		$('#withdraw_amount').val(0);
	});


	$('#withdraw_6_btn').on('click', function () {
		$.post('http://esx_atm/withdraw', JSON.stringify({
			amount: '10000'
		}));

		$('#withdraw_amount').val(0);
	});
	

	$('#withdraw_all_btn').on('click', function () {
		$.post('http://esx_atm/withdraw', JSON.stringify({
			amount: document.playerData.bankAmount.toString(),
		}));

		$('#withdraw_amount').val(0);
	});

	// $('#withdraw_amount').on("keyup", function (e) {
	// 	if (e.keyCode == 13) {
	// 		$.post('http://esx_atm/withdraw', JSON.stringify({
	// 			amount: $('#withdraw_amount').val()
	// 		}));

	// 		$('#withdraw_amount').val(0);
	// 	}
	// });

});
