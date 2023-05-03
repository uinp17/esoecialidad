$(document).ready(function()
{
	$(".pestana").hide();
	$(".principal").show();


$(".b1").on("click",function()
	{
		$(".contabilidad").show();
		$(".principal").hide();

		var txtmenu=$(this).text();
		$(".cbtis").text(txtmenu);
	})

	$(".b2").on("click",function()
	{
		$(".soporte").show();
		$(".contabilidad").hide();
		$(".principal").hide();

		var txtmenu=$(this).text();
		$(".cbtis").text(txtmenu);
	})

	$(".b3").on("click",function()
	{
		$(".ofimatica").show();
		$(".soporte").hide();
		$(".contabilidad").hide();
		$(".principal").hide();

		var txtmenu=$(this).text();
		$(".cbtis").text(txtmenu);
	})

	$(".b4").on("click",function()
	{
		$(".construccion").show();
		$(".ofimatica").hide();
		$(".soporte").hide();
		$(".contabilidad").hide();
		$(".principal").hide();

		var txtmenu=$(this).text();
		$(".cbtis").text(txtmenu);
	})

	$(".b5").on("click",function()
	{
		$(".laboratorista").show();
		$(".construccion").hide();
		$(".ofimatica").hide();
		$(".soporte").hide();
		$(".contabilidad").hide();
		$(".principal").hide();

		var txtmenu=$(this).text();
		$(".cbtis").text(txtmenu);
	})

	$(".b0").on("click",function()
	{
		$(".laboratorista").hide();
		$(".construccion").hide();
		$(".ofimatica").hide();
		$(".soporte").hide();
		$(".contabilidad").hide();
		$(".principal").show();

		var txtmenu=$(this).text();
		$(".cbtis").text(txtmenu);
	})

	$(".b6").on("click",function()
	{
		$(".laboratorista").hide();
		$(".construccion").hide();
		$(".ofimatica").hide();
		$(".soporte").hide();
		$(".contabilidad").hide();
		$(".principal").hide();
		$(".inscripcion").show();


		var txtmenu=$(this).text();
		$(".cbtis").text(txtmenu);
	})

	$(".b7").on("click",function()
	{
		$(".laboratorista").hide();
		$(".construccion").hide();
		$(".ofimatica").hide();
		$(".soporte").hide();
		$(".contabilidad").hide();
		$(".principal").hide();
		$(".inscripcion").hide();
		$(".COMENTARIOS").show();


		var txtmenu=$(this).text();
		$(".cbtis").text(txtmenu);
	})
});