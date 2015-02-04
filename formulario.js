/*$(function(){alert('hola');})
$('.formulario').animate({opacity: 0.2, width: 50})
$mostrarForm.click(mostrarFormulario)*/

var $form = $('#formulario'), 
$titulo = $('#titulo'),
$url = $('#url'),
$mostrarForm = $('#mostrarForm')



function agregarElemento()
{
	
	var $txt_Titulo = $('#txt_Titulo');
	var $txt_Texto = $('#txt_Texto');
	var $txtUrl = $('#txtUrl');
	var $sectionPosts = $('#sectionPosts');
	var $post1 = $('#post1');

	var $postCloned = $post1.clone();

	$sectionPosts.append($postCloned);

	//alert('pendejo!!!'+ $txt_Titulo.val() + $txt_Texto.val() + $txtUrl.val());

	return false;
}

$form.on('submit', agregarElemento);