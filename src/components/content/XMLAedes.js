import XMLParser from 'react-xml-parser'

const XMLAedes = `<?xml version="1.0" encoding="UTF-8"?>
<Unscramble>
	<fase1>
		<Conteudo1>
			<Dica>Outra doença transmitida pelo Aedes, além da Febre Amarela, Dengue e Chikungunya.</Dica>
			<PalavraAssoc>ZIKA</PalavraAssoc>
		</Conteudo1>
		<Conteudo1>
			<Dica>O Aedes só deposita seus ovos em água _______.</Dica>
			<PalavraAssoc>LIMPA</PalavraAssoc>
		</Conteudo1>
		<Conteudo1>
			<Dica>Fator climático favorável a proliferação do mosquito.</Dica>
			<PalavraAssoc>CHUVA</PalavraAssoc>
		</Conteudo1>
		<Conteudo1>
			<Dica>Principal relação entre a Dengue, Febre Amarela, Chikungunya e Zika Vírus.</Dica>
			<PalavraAssoc>VETOR</PalavraAssoc>
		</Conteudo1>
		<Conteudo1>
			<Dica>A dengue é uma doença viral transmitida pelo mosquito __________.</Dica>
			<PalavraAssoc>AEDES</PalavraAssoc>
		</Conteudo1>
		<Conteudo1>
			<Dica>Primeira fase do mosquito 𝘈𝘦𝘥𝘦𝘴 𝘢𝘦𝘨𝘺𝘱𝘵𝘪.</Dica>
			<PalavraAssoc>LARVA</PalavraAssoc>
		</Conteudo1>
		<Conteudo1>
			<Dica>Principal estação do ano que propicia a proliferação do mosquito.</Dica>
			<PalavraAssoc>VERÃO</PalavraAssoc>
		</Conteudo1>
		<Conteudo1>
			<Dica>País do continente africano de onde o mosquito é originário.</Dica>
			<PalavraAssoc>EGITO</PalavraAssoc>
		</Conteudo1>
		<Conteudo1>
			<Dica>Objeto comum utilizado na jardinagem que pode acumular água e servir como reservatório para a proliferação do mosquito.</Dica>
			<PalavraAssoc>VASOS</PalavraAssoc>
		</Conteudo1>
		<Conteudo1>
			<Dica>Objeto utilizado em veículos que se descartado de maneira incorreta pode se tornar um criadouro para o mosquito.</Dica>
			<PalavraAssoc>PNEU</PalavraAssoc>
		</Conteudo1>
		<Conteudo1>
			<Dica>Meio onde a larva se desenvolve até sua fase adulta.</Dica>
			<PalavraAssoc>ÁGUA</PalavraAssoc>
		</Conteudo1>
	</fase1>

	<fase2>
		<Conteudo2>
			<Dica>Continente originário do Aedes.</Dica>
			<PalavraAssoc>ÁFRICA</PalavraAssoc>
		</Conteudo2>
		<Conteudo2>
			<Dica>Alimento fundamental para a fêmea para que seu ciclo de reprodução se complete.</Dica>
			<PalavraAssoc>SANGUE</PalavraAssoc>
		</Conteudo2>
		<Conteudo2>
			<Dica>Encontrada em água parada, antecede a fase adulta do mosquito da dengue.</Dica>
			<PalavraAssoc>LARVA</PalavraAssoc>
		</Conteudo2>
		<Conteudo2>
			<Dica>O 𝘈𝘦𝘥𝘦𝘴 𝘢𝘦𝘨𝘺𝘱𝘵𝘪 é um mosquito adaptado ao ambiente _______.</Dica>
			<PalavraAssoc>URBANO</PalavraAssoc>
		</Conteudo2>
		<Conteudo2>
			<Dica>Inicialmente, os ovos possuem cor branca e, com o passar do tempo, escurecem devido ao contato com o _________.</Dica>
			<PalavraAssoc>OXIGÊNIO</PalavraAssoc>
		</Conteudo2>
		<Conteudo2>
			<Dica>O vírus da dengue é transmitido pela ________ do mosquito 𝘈𝘦𝘥𝘦𝘴 𝘢𝘦𝘨𝘺𝘱𝘵𝘪.</Dica>
			<PalavraAssoc>FÊMEA</PalavraAssoc>
		</Conteudo2>
		<Conteudo2>
			<Dica>O controle biológico de mosquitos inclui o uso de vários predadores invertebrados aquáticos (como Toxorhynchites ou copépodos) ou peixes (Gambusia sp. e outros), que comem as pupas e as/os ________.</Dica>
			<PalavraAssoc>OVOS</PalavraAssoc>
		</Conteudo2>
		<Conteudo2>
			<Dica>Período do dia de maior ocorrência de picadas e transmissão de doenças por parte 𝘈𝘦𝘥𝘦𝘴 𝘢𝘦𝘨𝘺𝘱𝘵𝘪.</Dica>
			<PalavraAssoc>DIURNO</PalavraAssoc>
		</Conteudo2>
		<Conteudo2>
			<Dica>Objeto que fica no fim do telhado por onde a água da chuva escorre e se não estiver limpo pode acumular água parada.</Dica>
			<PalavraAssoc>CALHA</PalavraAssoc>
		</Conteudo2>
		<Conteudo2>
			<Dica>Distribuir muito bem seus ovos, colocando-os em diversos criadouros, é uma estratégia usada pelas _______  que garante a dispersão e preservação da espécie.</Dica>
			<PalavraAssoc>FÊMEAS</PalavraAssoc>
		</Conteudo2>
		<Conteudo2>
			<Dica>Objeto que armazena bebidas que consumimos que quando descartadas devem ser colocadas de cabeça para baixo para prevenção da proliferação.</Dica>
			<PalavraAssoc>GARRAFA</PalavraAssoc>
		</Conteudo2>
	</fase2>

	<fase3>
		<Conteudo3>
			<Dica>Produto usado na pele, que modifica o cheiro dela e confunde a fêmea, existem apresentações em creme, loção ou aerossol.</Dica>
			<PalavraAssoc>REPELENTE</PalavraAssoc>
		</Conteudo3>
		<Conteudo3>
			<Dica>Região brasileira com maiores índices de proliferação do mosquito.</Dica>
			<PalavraAssoc>SUDESTE</PalavraAssoc>
		</Conteudo3>
		<Conteudo3>
			<Dica>A pupa é a fase que antecede a fase ______.</Dica>
			<PalavraAssoc>ADULTA</PalavraAssoc>
		</Conteudo3>
		<Conteudo3>
			<Dica>Uso de substância química comum para o controle dos vetores.</Dica>
			<PalavraAssoc>INSETICIDA</PalavraAssoc>
		</Conteudo3>
		<Conteudo3>
			<Dica>Classe do reino animal pertencente ao 𝘈𝘦𝘥𝘦𝘴 𝘢𝘦𝘨𝘺𝘱𝘵𝘪.</Dica>
			<PalavraAssoc>INSECTA</PalavraAssoc>
		</Conteudo3>
		<Conteudo3>
			<Dica>Os horários de transmissão da Dengue costumam ser nas primeiras horas da manhã e nas últimas da tarde, devido aos hábitos do ___________ transmissor da doença.</Dica>
			<PalavraAssoc>MOSQUITO</PalavraAssoc>
		</Conteudo3>
		<Conteudo3>
			<Dica>Local do criadouro em que o mosquito deposita seus ovos, bem próximo a superfície da água, mas não diretamente sobre ela.</Dica>
			<PalavraAssoc>PAREDE</PalavraAssoc>
		</Conteudo3>
		<Conteudo3>
			<Dica>Mosquito que pode ser confundido com o 𝘈𝘦𝘥𝘦𝘴 𝘢𝘦𝘨𝘺𝘱𝘵𝘪.</Dica>
			<PalavraAssoc>CULEX</PalavraAssoc>
		</Conteudo3>
		<Conteudo3>
			<Dica>A transmissão das doenças se faz apenas pela ________ da fêmea do 𝘈𝘦𝘥𝘦𝘴 𝘢𝘦𝘨𝘺𝘱𝘵𝘪 infectada com o vírus.</Dica>
			<PalavraAssoc>PICADA</PalavraAssoc>
		</Conteudo3>
		<Conteudo3>
			<Dica>O 𝘈𝘦𝘥𝘦𝘴 𝘢𝘦𝘨𝘺𝘱𝘵𝘪 é um mosquito que habita as regiões _________ e subtropicais, apresentando incapacidade de suportar invernos rigorosos.</Dica>
			<PalavraAssoc>TROPICAIS</PalavraAssoc>
		</Conteudo3>
	</fase3>

	<fase4>
		<Conteudo4>
			<Dica>Grandes _________: marco histórico responsável pela chegada do mosquito 𝘈𝘦𝘥𝘦𝘴 𝘢𝘦𝘨𝘺𝘱𝘵𝘪.</Dica>
			<PalavraAssoc>EMBARCAÇÕES</PalavraAssoc>
		</Conteudo4>
		<Conteudo4>
			<Dica>Filo do Reino animal pertencente ao mosquito da dengue.</Dica>
			<PalavraAssoc>ARTRÓPODES</PalavraAssoc>
		</Conteudo4>
		<Conteudo4>
			<Dica>Termo que designa a sensibilidade do mosquito à luz.</Dica>
			<PalavraAssoc>FOTOFOBIA</PalavraAssoc>
		</Conteudo4>
		<Conteudo4>
			<Dica>Termo usado para designar um vírus que transmite doença aos humanos através dos insetos.</Dica>
			<PalavraAssoc>ARBOVÍRUS</PalavraAssoc>
		</Conteudo4>
		<Conteudo4>
			<Dica>Parte anatômica da flor que pode acumular água.</Dica>
			<PalavraAssoc>CÁLICE</PalavraAssoc>
		</Conteudo4>
		<Conteudo4>
			<Dica>Vetor comum entre a Dengue e Zika.</Dica>
			<PalavraAssoc>𝘈𝘦𝘥𝘦𝘴 𝘢𝘦𝘨𝘺𝘱𝘵𝘪</PalavraAssoc>
		</Conteudo4>
		<Conteudo4>
			<Dica>O Aedes pertence ao filo dos Artrópodes, e da classe Insecta. Os artrópodes apresentam um esqueleto externo, denominado exoesqueleto. Sobre o esqueleto desse filo, pode-se dizer que ele é constituído por um carboidrato denominado _________.</Dica>
			<PalavraAssoc>QUITINA</PalavraAssoc>
		</Conteudo4>
		<Conteudo4>
			<Dica>Os ovos e as larvas quando submetidas a baixas temperaturas, ambos não conseguem completar seu ______________.</Dica>
			<PalavraAssoc>DESENVOLVIMENTO</PalavraAssoc>
		</Conteudo4>
		<Conteudo4>
			<Dica>O ovo por ter resistência à _________ pode resistir por mais de um ano longe da água.</Dica>
			<PalavraAssoc>DESSECAÇÃO</PalavraAssoc>
		</Conteudo4>
	</fase4>
	
	<fase5>
		<Conteudo5>
			<Dica>Mosquito da _______ é o nome popular dado ao mosquito 𝘈𝘦𝘥𝘦𝘴 𝘢𝘦𝘨𝘺𝘱𝘵𝘪.</Dica>
			<PalavraAssoc>DENGUE</PalavraAssoc>
		</Conteudo5>
		<Conteudo5>
			<Dica>Além do 𝘈𝘦𝘥𝘦𝘴 𝘢𝘦𝘨𝘺𝘱𝘵𝘪, há outro mosquito que também é considerado vetor da dengue chamado Aedes ______________.</Dica>
			<PalavraAssoc>ALBOPICTUS</PalavraAssoc>
		</Conteudo5>
		<Conteudo5>
			<Dica>Principal característica física do 𝘈𝘦𝘥𝘦𝘴 𝘢𝘦𝘨𝘺𝘱𝘵𝘪 são as _______ brancas.</Dica>
			<PalavraAssoc>LISTRAS</PalavraAssoc>
		</Conteudo5>
		<Conteudo5>
			<Dica>Antropofílico é o  termo designado ao artrópode que  vive  próximo ao  ser __________________</Dica>
			<PalavraAssoc>HUMANO</PalavraAssoc>
		</Conteudo5>
		<Conteudo5>
			<Dica>No Brasil, ao início do século XX, o mosquito 𝘈𝘦𝘥𝘦𝘴 𝘢𝘦𝘨𝘺𝘱𝘵𝘪 já era um problema, mas não por conta da dengue, na época, a principal preocupação era a transmissão da _____________.</Dica>
			<PalavraAssoc>FEBRE AMARELA</PalavraAssoc>
		</Conteudo5>
		<Conteudo5>
			<Dica>Local propício para a proliferação do mosquito 𝘈𝘦𝘥𝘦𝘴 𝘢𝘦𝘨𝘺𝘱𝘵𝘪.</Dica>
			<PalavraAssoc>ÁGUA PARADA</PalavraAssoc>
		</Conteudo5>
		<Conteudo5>
			<Dica>A fêmea, além de ser hematófaga, que se alimenta de sangue, pode também se alimentar com substâncias açucaradas, como o néctar e a seiva das plantas, assim como o mosquito macho.</Dica>
			<PalavraAssoc>FITÓFAGA</PalavraAssoc>
		</Conteudo5>
		<Conteudo5>
			<Dica>Órgão do governo responsável pelo combate ao mosquito 𝘈𝘦𝘥𝘦𝘴 𝘢𝘦𝘨𝘺𝘱𝘵𝘪  é o ministério da ________.</Dica>
			<PalavraAssoc>SAÚDE</PalavraAssoc>
		</Conteudo5>
		<Conteudo5>
			<Dica>Hábito de se alimentar de sangue praticado pelas fêmeas do mosquito 𝘈𝘦𝘥𝘦𝘴 𝘢𝘦𝘨𝘺𝘱𝘵𝘪.</Dica>
			<PalavraAssoc>HEMATOFAGIA</PalavraAssoc>
		</Conteudo5>
		<Conteudo5>
			<Dica>Além do trabalho dos agentes da saúde, é necessário que haja __________ da população para combater os vetores.</Dica>
			<PalavraAssoc>ATUAÇÃO</PalavraAssoc>
		</Conteudo5>
	</fase5>
</Unscramble>`

var xml = new XMLParser().parseFromString(XMLAedes);    // Assume xmlText contains the example XML

export function palavraAedes(i, level) {
	const fase = 'fase' + level;
	const conteudo = 'Conteudo'+level
	var palavra = []
	palavra.push(xml.getElementsByTagName('Unscramble')[0].getElementsByTagName(fase)[0].getElementsByTagName(conteudo)[i].getElementsByTagName('PalavraAssoc')[0].value)
	palavra.push(xml.getElementsByTagName('Unscramble')[0].getElementsByTagName(fase)[0].getElementsByTagName(conteudo)[i].getElementsByTagName('Dica')[0].value)
	
	return palavra;
}
