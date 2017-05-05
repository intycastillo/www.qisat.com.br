(function() {
    'use strict';

	angular
		.module('QiSatApp')
		.controller("instructorController",
				[ '$scope', '$sce', '$filter', '$location', '$analytics', 'Config', 'QiSatAPI', 'instrutor',  
					function(scope, $sce, $filter, $location, $analytics, Config, QiSatAPI, instructor){

							var filterLimitName = $filter('nameInstructor');
							$analytics.pageTrack($location.path());

								if(instructor){
									instructor.nome = filterLimitName(instructor.nome,200);

									if(!instructor.imagem)
										instructor.imagem = Config.imagensUrlDefault;

									if(instructor.redes_sociais && instructor.redes_sociais.length){
										instructor.redes_sociais.map(function (el){
											if(el && el.descricao)
												el.img = 'images/icons/'+el.descricao.toLowerCase()+'.png';
										});
									}

									if(instructor.produto && instructor.produto.length){
										instructor.produto.map(function (el){
											if(el && !el.imagem)
												el.imagem = Config.imgCursoUrlDefault;
										});
									}

									if(instructor.artigos && instructor.artigos.length){
										instructor.artigos.map(function (el){
											el.tituloLimit = $filter('limitName')(el.titulo,65);

											if(el && el.data_publicacao)
												el.data_format = $filter('date')( el.data_publicacao*1000, 'MMMM, y' );
										});
									}


									if(instructor.descricao)
										instructor.descricao = $sce.trustAsHtml(instructor.descricao);

									scope.instructor = instructor;
								}
		 }]);
})();