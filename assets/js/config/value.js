(function() {
    'use strict';

	angular
		.module('QiSatApp')
		.value("Config", {
				
				Authorization : "Digest",
       			baseUrl : "http://ecommercelocal.qisat.com.br",
				imagensUrlDefault : "http://webservice.qisat.com:3000/imagens/instrutores/instrutor.png",
				imgCursoUrlDefault : "http://webservice.qisat.com:3000/imagens/produtos/default.png",
				boletoUrl : "http://ecommercelocal.qisat.com.br/forma-pagamento-boleto-php/boleto",

				convenio : { "descontoAluno" : 30, "descontoAssociado" : 20, "descontoProfessor" : 50, "descontoCREAS" : 30},

				filters : { 

						online : [


										 { 
										   id : 4,
										   type : 'checkbox', 
										   name : 'Combinacoes',
										   title : 'Combinações', 
												inputs : [
															{ title: 'Séries de Capítulos', type : 32, name : 'series' },
															{ title: 'Pacotes de Cursos', type : 17, name : 'pacotes' }
														]},

										 { 
										   id : 5,
										   type : 'checkbox',
										   name : 'Area', 
										   title : 'Área de Atuação', 
												inputs : [
															{ title: 'Estrutural', type : 3, pacotes : 18, name : 'estrutural' },
															{ title: 'Elétrica', type : 4,  pacotes : 19,  name : 'eletrica' },
															{ title: 'Hidráulica', type : 6,pacotes : 20,  name : 'hidraulica' },
															{ title: 'Agronômica', type : 34, name : 'agronomica' },
															{ title: 'Arquitetônica', type : 35, name : 'arquitetonica' },
															{ title: 'CAD', type : 5, name : 'cad' }
														]},


										 { 
										   id : 6,
										   type : 'checkbox', 
										   name : 'Area-Complementar',
										   title : 'Área Complementar', 
												inputs : [
															{ title: 'Administração', type : 36, name : 'adm' },
															{ title: 'Qualidade e Desempenho', type : 37, name : 'desempenho' },
															{ title: 'Gestão de Projetos', type : 38, name : 'gestao' }
														]},	

										 { 
										   id : 7,
										   type : 'checkbox',
										   name : 'Tipo',
										   title : 'Tipo', 
												inputs : [
															{ title: 'Cursos Teóricos', type : 24, },
															{ title: 'Cursos Software AltoQi', type : 23 }
														]}

								 ],
						presencial : [

										  { id : 3, type : 'dropdown', name: 'estado', title: 'Estado', inputs : [] },	

										  {
										  	id : 5,
										    type : 'checkbox', 
										    name : 'Area',
										    title : 'Área de Atuação', 
												inputs : [
															{ title: 'Estrutural', type : 25, name : 'estrutural' },
															{ title: 'Elétrica', type : 26, name : 'eletrica' },
															{ title: 'Hidráulica', type : 27, name : 'hidraulica' }
														]},

										   { 
										   	 id : 7,
										   	 type : 'checkbox', 
										     name : 'Tipo',
										     title : 'Tipo', 
												inputs : [
															{ title: 'Cursos Teóricos', type : 24, presencial : 13 },
															{ title: 'Cursos Software AltoQi', type : 23, presencial : 11 },
														]},

											{ 
										   	 id : 10,
										   	 type : 'checkbox', 
										     name : 'Tipo',
												inputs : [
															{ title: 'Cursos Individuais', type : 12, name : '#Tipo2' }
														]}
						]
				},

				country : [ { sigla : 'AD', pais : 'Andorra' },
							{ sigla : 'AE', pais : 'Emirados Árabes Unidos' },
							{ sigla : 'AF', pais : 'Afeganistão' },
							{ sigla : 'AG', pais : 'Antígua e Barbuda' },
							{ sigla : 'AI', pais : 'Anguilla' },
							{ sigla : 'AL', pais : 'Albânia' },
							{ sigla : 'AM', pais : 'Armênia' },
							{ sigla : 'AN', pais : 'Antilhas holandesas' },
							{ sigla : 'AO', pais : 'Angola' },
							{ sigla : 'AQ', pais : 'Antártida' },
							{ sigla : 'AR', pais : 'Argentina' },
							{ sigla : 'AS', pais : 'Samoa Americana' },
							{ sigla : 'AT', pais : 'Áustria' },
							{ sigla : 'AU', pais : 'Austrália' },
							{ sigla : 'AW', pais : 'Aruba' },
							{ sigla : 'AX', pais : 'ilhas Åland' },
							{ sigla : 'AZ', pais : 'Azerbaijão' },
							{ sigla : 'BA', pais : 'Bósnia Herzegovina' },
							{ sigla : 'BB', pais : 'Barbados' },
							{ sigla : 'BD', pais : 'Bangladesh' },
							{ sigla : 'BE', pais : 'Bélgica' },
							{ sigla : 'BF', pais : 'Burkina Faso' },
							{ sigla : 'BG', pais : 'Bulgária' },
							{ sigla : 'BH', pais : 'Barein' },
							{ sigla : 'BI', pais : 'Burundi' },
							{ sigla : 'BJ', pais : 'Benin' },
							{ sigla : 'BL', pais : 'São Bartolomeu' },
							{ sigla : 'BM', pais : 'Bermuda' },
							{ sigla : 'BN', pais : 'Brunei' },
							{ sigla : 'BO', pais : 'Bolívia' },
							{ sigla : 'BR', pais : 'Brasil' },
							{ sigla : 'BS', pais : 'Bahamas' },
							{ sigla : 'BT', pais : 'Butão' },
							{ sigla : 'BV', pais : 'Ilhas Bouvet' },
							{ sigla : 'BW', pais : 'Botsuana' },
							{ sigla : 'BY', pais : 'Belarus' },
							{ sigla : 'BZ', pais : 'Belize' },
							{ sigla : 'CA', pais : 'Canadá' },
							{ sigla : 'CC', pais : 'Ilhas (Keeling) cocos' },
							{ sigla : 'CD', pais : 'Congo, República Democrática do' },
							{ sigla : 'CF', pais : 'República Centro-Africana' },
							{ sigla : 'CG', pais : 'Congo' },
							{ sigla : 'CH', pais : 'Suíça' },
							{ sigla : 'CI', pais : 'Costa do Marfim' },
							{ sigla : 'CK', pais : 'Ilhas Cook' },
							{ sigla : 'CL', pais : 'Chile' },
							{ sigla : 'CM', pais : 'Camarões' },
							{ sigla : 'CN', pais : 'China' },
							{ sigla : 'CO', pais : 'Colômbia' },
							{ sigla : 'CR', pais : 'Costa Rica' },
							{ sigla : 'CU', pais : 'Cuba' },
							{ sigla : 'CV', pais : 'Cabo Verde' },
							{ sigla : 'CX', pais : 'Ilhas Christmas' },
							{ sigla : 'CY', pais : 'Chipre' },
							{ sigla : 'CZ', pais : 'República Tcheca' },
							{ sigla : 'DE', pais : 'Alemanha, República Federal da' },
							{ sigla : 'DJ', pais : 'Djibouti' },
							{ sigla : 'DK', pais : 'Dinamarca' },
							{ sigla : 'DM', pais : 'Dominica' },
							{ sigla : 'DO', pais : 'República Dominicana' },
							{ sigla : 'DZ', pais : 'Argélia' },
							{ sigla : 'EC', pais : 'Equador' },
							{ sigla : 'EE', pais : 'Estônia' },
							{ sigla : 'EG', pais : 'Egito' },
							{ sigla : 'EH', pais : 'Saara Ocidental' },
							{ sigla : 'ER', pais : 'Eritréia' },
							{ sigla : 'ES', pais : 'Espanha' },
							{ sigla : 'ET', pais : 'Etiópia' },
							{ sigla : 'FI', pais : 'Finlandia' },
							{ sigla : 'FJ', pais : 'Fiji' },
							{ sigla : 'FK', pais : 'Ilhas Falkland (Malvinas)' },
							{ sigla : 'FM', pais : 'Micronésia, Estados Federados da' },
							{ sigla : 'FO', pais : 'Ilhas Faeroes' },
							{ sigla : 'FR', pais : 'França' },
							{ sigla : 'GA', pais : 'Gabão' },
							{ sigla : 'GB', pais : 'Reino Unido da Grã-Bretanha e da Irlanda do Norte' },
							{ sigla : 'GD', pais : 'Grenada' },
							{ sigla : 'GE', pais : 'Geórgia' },
							{ sigla : 'GF', pais : 'Guiana francesa' },
							{ sigla : 'GG', pais : 'Guernsey' },
							{ sigla : 'GH', pais : 'Gana' },
							{ sigla : 'GI', pais : 'Gibraltar' },
							{ sigla : 'GL', pais : 'Groenlândia' },
							{ sigla : 'GM', pais : 'Gâmbia' },
							{ sigla : 'GN', pais : 'Guiné' },
							{ sigla : 'GP', pais : 'Guadalupe' },
							{ sigla : 'GQ', pais : 'Guiné equatorial' },
							{ sigla : 'GR', pais : 'Grécia' },
							{ sigla : 'GS', pais : 'Ilhas Geórgia do Sul e Sandwich do Sul' },
							{ sigla : 'GT', pais : 'Guatemala' },
							{ sigla : 'GU', pais : 'Guam' },
							{ sigla : 'GW', pais : 'Guiné Bissau' },
							{ sigla : 'GY', pais : 'Guiana' },
							{ sigla : 'HK', pais : 'Hong Kong' },
							{ sigla : 'HM', pais : 'Ilhas Heard e Mc Donald' },
							{ sigla : 'HN', pais : 'Honduras' },
							{ sigla : 'HR', pais : 'Croácia' },
							{ sigla : 'HT', pais : 'Haiti' },
							{ sigla : 'HU', pais : 'Hungria' },
							{ sigla : 'ID', pais : 'Indonésia' },
							{ sigla : 'IE', pais : 'Irlanda (Eire)' },
							{ sigla : 'IL', pais : 'Israel' },
							{ sigla : 'IM', pais : 'Ilha do Homem' },
							{ sigla : 'IN', pais : 'Índia' },
							{ sigla : 'IO', pais : 'Território Britânico do Oceano Índico' },
							{ sigla : 'IQ', pais : 'Iraque' },
							{ sigla : 'IR', pais : 'Irã' },
							{ sigla : 'IS', pais : 'Islândia' },
							{ sigla : 'IT', pais : 'Itália' },
							{ sigla : 'JE', pais : 'Jersey' },
							{ sigla : 'JM', pais : 'Jamaica' },
							{ sigla : 'JO', pais : 'Jordânia' },
							{ sigla : 'JP', pais : 'Japão' },
							{ sigla : 'KE', pais : 'Quênia' },
							{ sigla : 'KG', pais : 'Quirguistão' },
							{ sigla : 'KH', pais : 'Camboja' },
							{ sigla : 'KI', pais : 'Kiribati' },
							{ sigla : 'KM', pais : 'Comoros' },
							{ sigla : 'KN', pais : 'São Cristovão  e Nevis' },
							{ sigla : 'KP', pais : 'Coréia do Norte (República Democrática Popular da Coréia)' },
							{ sigla : 'KR', pais : 'Coreia do Sul (República da Coréia)' },
							{ sigla : 'KW', pais : 'Kuwait' },
							{ sigla : 'KY', pais : 'Ilhas Cayman' },
							{ sigla : 'KZ', pais : 'Casaquistão' },
							{ sigla : 'LA', pais : 'Laos' },
							{ sigla : 'LB', pais : 'Líbano' },
							{ sigla : 'LC', pais : 'Santa Lúcia' },
							{ sigla : 'LI', pais : 'Liechtenstein' },
							{ sigla : 'LK', pais : 'Sri Lanka' },
							{ sigla : 'LR', pais : 'Libéria' },
							{ sigla : 'LS', pais : 'Lesoto' },
							{ sigla : 'LT', pais : 'Lituânia' },
							{ sigla : 'LU', pais : 'Luxemburgo' },
							{ sigla : 'LV', pais : 'Latvia' },
							{ sigla : 'LY', pais : 'Líbia' },
							{ sigla : 'MA', pais : 'Marrocos' },
							{ sigla : 'MC', pais : 'Mônaco' },
							{ sigla : 'MD', pais : 'Moldova' },
							{ sigla : 'ME', pais : 'Montenegro' },
							{ sigla : 'MF', pais : 'São Martinho' },
							{ sigla : 'MG', pais : 'Madagascar' },
							{ sigla : 'MH', pais : 'Ilhas Marshall' },
							{ sigla : 'MK', pais : 'Macedônia' },
							{ sigla : 'ML', pais : 'Mali' },
							{ sigla : 'MM', pais : 'Myanmar (Burma)' },
							{ sigla : 'MN', pais : 'Mongólia' },
							{ sigla : 'MO', pais : 'Macau' },
							{ sigla : 'MP', pais : 'Ilhas Marianas do Norte' },
							{ sigla : 'MQ', pais : 'Martinica' },
							{ sigla : 'MR', pais : 'Mauritânia' },
							{ sigla : 'MS', pais : 'Montserrat' },
							{ sigla : 'MT', pais : 'Malta' },
							{ sigla : 'MU', pais : 'Maurício' },
							{ sigla : 'MV', pais : 'Maldivas' },
							{ sigla : 'MW', pais : 'Malavi' },
							{ sigla : 'MX', pais : 'Mexico' },
							{ sigla : 'MY', pais : 'Malásia' },
							{ sigla : 'MZ', pais : 'Moçambique' },
							{ sigla : 'NA', pais : 'Namíbia' },
							{ sigla : 'NC', pais : 'Nova Caledônia' },
							{ sigla : 'NE', pais : 'Niger' },
							{ sigla : 'NF', pais : 'Ilhas Norfolk' },
							{ sigla : 'NG', pais : 'Nigéria' },
							{ sigla : 'NI', pais : 'Nicarágua' },
							{ sigla : 'NL', pais : 'Holanda' },
							{ sigla : 'NO', pais : 'Noruega' },
							{ sigla : 'NP', pais : 'Nepal' },
							{ sigla : 'NR', pais : 'Nauru' },
							{ sigla : 'NU', pais : 'Niue' },
							{ sigla : 'NZ', pais : 'Nova Zelândia' },
							{ sigla : 'OM', pais : 'Omã' },
							{ sigla : 'PA', pais : 'Panamá' },
							{ sigla : 'PE', pais : 'Peru' },
							{ sigla : 'PF', pais : 'Polinésia Francesa' },
							{ sigla : 'PG', pais : 'Papua Nova Guiné' },
							{ sigla : 'PH', pais : 'Filipinas' },
							{ sigla : 'PK', pais : 'Paquistão' },
							{ sigla : 'PL', pais : 'Polônia' },
							{ sigla : 'PM', pais : 'Saint-Pierre e Miquelon' },
							{ sigla : 'PN', pais : 'Ilha Pitcairn' },
							{ sigla : 'PR', pais : 'Porto Rico' },
							{ sigla : 'PS', pais : 'Palestina' },
							{ sigla : 'PT', pais : 'Portugal' },
							{ sigla : 'PW', pais : 'República di Belau (Palau)' },
							{ sigla : 'PY', pais : 'Paraguai' },
							{ sigla : 'QA', pais : 'Quatar' },
							{ sigla : 'RE', pais : 'Reunião' },
							{ sigla : 'RO', pais : 'Romênia' },
							{ sigla : 'RS', pais : 'Sérvia' },
							{ sigla : 'RU', pais : 'Rússia (Federação Russa)' },
							{ sigla : 'RW', pais : 'Ruanda' },
							{ sigla : 'SA', pais : 'Arábia Saudita' },
							{ sigla : 'SB', pais : 'Ilhas Salomão' },
							{ sigla : 'SC', pais : 'Seychelles' },
							{ sigla : 'SD', pais : 'Sudão' },
							{ sigla : 'SE', pais : 'Suécia' },
							{ sigla : 'SG', pais : 'Cingapura' },
							{ sigla : 'SH', pais : 'Santa Helena' },
							{ sigla : 'SI', pais : 'Eslovênia' },
							{ sigla : 'SJ', pais : 'Ilhas Svalbard e Jan Mayen' },
							{ sigla : 'SK', pais : 'Eslováquia' },
							{ sigla : 'SL', pais : 'Serra Leoa' },
							{ sigla : 'SM', pais : 'San Marino' },
							{ sigla : 'SN', pais : 'Senegal' },
							{ sigla : 'SO', pais : 'Somália' },
							{ sigla : 'SR', pais : 'Suriname' },
							{ sigla : 'ST', pais : 'São Tomé e Príncipe' },
							{ sigla : 'SV', pais : 'El Salvador' },
							{ sigla : 'SY', pais : 'Siria' },
							{ sigla : 'SZ', pais : 'Suazilandia' },
							{ sigla : 'TC', pais : 'Ilhas Turcks e Caicos' },
							{ sigla : 'TD', pais : 'Chade' },
							{ sigla : 'TF', pais : 'Território Ultramarino das Terras Austrais e Antárticas Francesas' },
							{ sigla : 'TG', pais : 'Togo' },
							{ sigla : 'TH', pais : 'Tailandia' },
							{ sigla : 'TJ', pais : 'Tadjiquistão' },
							{ sigla : 'TK', pais : 'Tokelau' },
							{ sigla : 'TL', pais : 'Timor-Leste' },
							{ sigla : 'TM', pais : 'Turcomenistão' },
							{ sigla : 'TN', pais : 'Tunísia' },
							{ sigla : 'TO', pais : 'Tonga' },
							{ sigla : 'TR', pais : 'Turquia' },
							{ sigla : 'TT', pais : 'Trinidad e Tobago' },
							{ sigla : 'TV', pais : 'Tuvalu' },
							{ sigla : 'TW', pais : 'Taiwan' },
							{ sigla : 'TZ', pais : 'Tanzânia' },
							{ sigla : 'UA', pais : 'Ucrânia' },
							{ sigla : 'UG', pais : 'Uganda' },
							{ sigla : 'UM', pais : 'Ilhas Menores Distantes dos Estados Unidos' },
							{ sigla : 'US', pais : 'Estados Unidos da América' },
							{ sigla : 'UY', pais : 'Uruguai' },
							{ sigla : 'UZ', pais : 'Uzbequistão' },
							{ sigla : 'VA', pais : 'Vaticano' },
							{ sigla : 'VC', pais : 'São Vicente e Granadinas' },
							{ sigla : 'VE', pais : 'Venezuela' },
							{ sigla : 'VG', pais : 'Ilhas Virgens Britânicas' },
							{ sigla : 'VI', pais : 'Ilhas Virgens Americanas' },
							{ sigla : 'VN', pais : 'Vietnã' },
							{ sigla : 'VU', pais : 'Vanuatu' },
							{ sigla : 'WF', pais : 'Ilhas Wallis e Futuna' },
							{ sigla : 'WS', pais : 'Samoa ocidental' },
							{ sigla : 'YE', pais : 'Iêmen' },
							{ sigla : 'YT', pais : 'Mayotte' },
							{ sigla : 'ZA', pais : 'África do Sul' },
							{ sigla : 'ZM', pais : 'Zâmbia' },
							{ sigla : 'ZW', pais : 'Zimbábue' },
							{ sigla : 'CS', pais : 'Sérvia e Montenegro' },
							{ sigla : 'FX', pais : 'França (metropolitana)' },
							{ sigla : 'KO', pais : 'Kosovo' },
							{ sigla : 'TP', pais : 'Timor Leste' },
							{ sigla : 'WA', pais : 'País de Gales' },
							{ sigla : 'ZR', pais : 'Zaire' } ],

				states : [{"id":1,"nome":"Acre","uf":"AC","local":"AC - Acre"},{"id":2,"nome":"Alagoas","uf":"AL","local":"AL - Alagoas"},{"id":3,"nome":"Amazonas","uf":"AM","local":"AM - Amazonas"},{"id":4,"nome":"Amapá","uf":"AP","local":"AP - Amapá"},{"id":5,"nome":"Bahia","uf":"BA","local":"BA - Bahia"},{"id":6,"nome":"Ceará","uf":"CE","local":"CE - Ceará"},{"id":7,"nome":"Distrito Federal","uf":"DF","local":"DF - Distrito Federal"},{"id":8,"nome":"Espírito Santo","uf":"ES","local":"ES - Espírito Santo"},{"id":9,"nome":"Goiás","uf":"GO","local":"GO - Goiás"},{"id":10,"nome":"Maranhão","uf":"MA","local":"MA - Maranhão"},{"id":11,"nome":"Minas Gerais","uf":"MG","local":"MG - Minas Gerais"},{"id":12,"nome":"Mato Grosso do Sul","uf":"MS","local":"MS - Mato Grosso do Sul"},{"id":13,"nome":"Mato Grosso","uf":"MT","local":"MT - Mato Grosso"},{"id":14,"nome":"Pará","uf":"PA","local":"PA - Pará"},{"id":15,"nome":"Paraíba","uf":"PB","local":"PB - Paraíba"},{"id":16,"nome":"Pernambuco","uf":"PE","local":"PE - Pernambuco"},{"id":17,"nome":"Piauí","uf":"PI","local":"PI - Piauí"},{"id":18,"nome":"Paraná","uf":"PR","local":"PR - Paraná"},{"id":19,"nome":"Rio de Janeiro","uf":"RJ","local":"RJ - Rio de Janeiro"},{"id":20,"nome":"Rio Grande do Norte","uf":"RN","local":"RN - Rio Grande do Norte"},{"id":21,"nome":"Rondônia","uf":"RO","local":"RO - Rondônia"},{"id":22,"nome":"Roraima","uf":"RR","local":"RR - Roraima"},{"id":23,"nome":"Rio Grande do Sul","uf":"RS","local":"RS - Rio Grande do Sul"},{"id":24,"nome":"Santa Catarina","uf":"SC","local":"SC - Santa Catarina"},{"id":25,"nome":"Sergipe","uf":"SE","local":"SE - Sergipe"},{"id":26,"nome":"São Paulo","uf":"SP","local":"SP - São Paulo"},{"id":27,"nome":"Tocantins","uf":"TO","local":"TO - Tocantins"}]
			});
})();