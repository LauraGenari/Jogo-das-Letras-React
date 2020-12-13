import XMLParser from 'react-xml-parser'

const XMLFebreAmarela = `
<?xml-stylesheet type="text/xsl" href="ACSPIXMT.xsl" ?>
<?xml version="1.0" encoding="UTF-8"?>
<Unscramble>
<fase1>
	<Conteudo1>
		<Dica>Evitar o acúmulo de ___________ em recipientes destampados é uma das medidas que ajudam diminuir a reprodução do inseto transmissor da doença.</Dica>
		<PalavraAssoc>ÁGUA</PalavraAssoc>
	</Conteudo1>
	<Conteudo1>
		<Dica>Continente que deu origem ao vírus da Febre Amarela.</Dica>
		<PalavraAssoc>ÁFRICA</PalavraAssoc>
	</Conteudo1>
	<Conteudo1>
		<Dica>Principal sintoma da doença, presente em todos os casos.</Dica>
		<PalavraAssoc>FEBRE</PalavraAssoc>
	</Conteudo1>
	<Conteudo1>
		<Dica>Principal relação entre a Dengue, Febre Amarela, Chikungunya e Zika Vírus.</Dica>
		<PalavraAssoc>VETOR</PalavraAssoc>
	</Conteudo1>
	<Conteudo1>
		<Dica>Mosquito da ______: Nome popular do inseto vetor da Febre Amarela.</Dica>
		<PalavraAssoc>DENGUE</PalavraAssoc>
	</Conteudo1>
	<Conteudo1>
		<Dica>Os mosquitos criam-se em qualquer recipiente que pode acumular água ______, como nas caixas d'água, latas e pneus.</Dica>
		<PalavraAssoc>LIMPA</PalavraAssoc>
	</Conteudo1>
	<Conteudo1>
		<Dica>Estado pertencente a região Norte brasileira onde ocorreu o último caso de febre amarela urbana no Brasil, em 1942.</Dica>
		<PalavraAssoc>ACRE</PalavraAssoc>
	</Conteudo1>
	<Conteudo1>
		<Dica>Aedes _______: Nome científico do inseto vetor da doença, sendo o principal transmissor da doença em ambientes urbanos.</Dica>
		<PalavraAssoc>AEGYPTI</PalavraAssoc>
	</Conteudo1>
</fase1>
<fase2>
	<Conteudo2>
		<Dica>O principal método de prevenção, deve ser feita evitando a disseminação do mosquito ______ da doença.</Dica>
		<PalavraAssoc>VETOR</PalavraAssoc>
	</Conteudo2>
	<Conteudo2>
		<Dica>Assim como a Febre Chikungunya, a Febre Amarela também possui sintomas muito parecidos com a ______.</Dica>
		<PalavraAssoc>DENGUE</PalavraAssoc>
	</Conteudo2>
	<Conteudo2>
		<Dica>A febre amarela é considerada uma doença infecciosa _____, pois possui um curso acelerado, terminando com convalescença ou morte em menos de três meses.</Dica>
		<PalavraAssoc>AGUDA</PalavraAssoc>
	</Conteudo2>
	<Conteudo2>
		<Dica> Os resultados mostraram que a febre amarela silvestre seria a forma de ocorrência usual e que a modalidade urbana parecia ser uma forma _______ de manifestação.</Dica>
		<PalavraAssoc>EXÓTICA</PalavraAssoc>
	</Conteudo2>
	<Conteudo2>
		<Dica>A FAU, Febre amarela ________, é transmitida pelo Aedes aegypti, pode contaminar o homem caso o inseto esteja infectado com o vírus causador da doença.</Dica>
		<PalavraAssoc>URBANA</PalavraAssoc>
	</Conteudo2>
	<Conteudo2>
		<Dica>A FAS, Febre amarela _________ é transmitida através da picada de mosquitos Haemagogus e Sabethes, que vivem em matas e vegetações à beira dos rios.</Dica>
		<PalavraAssoc>SILVESTRE</PalavraAssoc>
	</Conteudo2>
	<Conteudo2>
		<Dica>Devem ser tomadas medidas de proteção _________, como a vacinação contra a febre amarela, especialmente para aqueles que moram ou vão viajar para áreas com indícios da doença e o uso de repelente que é indispensável.</Dica>
		<PalavraAssoc>INDIVIDUAL</PalavraAssoc>
	</Conteudo2>
	<Conteudo2>
		<Dica>Doença cuja Febre Amarela pode ser confundida.</Dica>
		<PalavraAssoc>MALÁRIA</PalavraAssoc>
	</Conteudo2>
	<Conteudo2>
		<Dica>Período do dia de maior ocorrência de picadas e transmissão de doenças por parte Aedes aegypti.</Dica>
		<PalavraAssoc>DIURNO</PalavraAssoc>
	</Conteudo2>
	<Conteudo2>
		<Dica>Distribuir muito bem seus ovos, colocando-os em diversos criadouros, é uma estratégia usada pelas _______  que garante a dispersão e preservação da espécie.</Dica>
		<PalavraAssoc>FÊMEAS</PalavraAssoc>
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
		<Dica>Os horários de transmissão da Dengue costumam ser nas primeiras horas da manhã e nas últimas da tarde, devido aos hábitos do ___________ transmissor da doença.</Dica>
		<PalavraAssoc>MOSQUITO</PalavraAssoc>
	</Conteudo3>
	<Conteudo3>
		<Dica>Nos casos menos graves da doença o mais indicado aos pacientes é o __________ , o que não envolve o uso de remédios.</Dica>
		<PalavraAssoc>DESCANSO</PalavraAssoc>
	</Conteudo3>
	<Conteudo3>
		<Dica>A icterícia é considerada um dos principais sintomas da doença, quando se manifesta, ela se caracteriza pela coloração _________ dos olhos e da pele.</Dica>
		<PalavraAssoc>AMARELA</PalavraAssoc>
	</Conteudo3>
	<Conteudo3>
		<Dica>Animal reservatório da infecção que habita áreas de mata.</Dica>
		<PalavraAssoc>MACACOS</PalavraAssoc>
	</Conteudo3>
	<Conteudo3>
		<Dica>Há dois modos de ___________ da Febre amarela: o ciclo silvestre e o ciclo urbano.</Dica>
		<PalavraAssoc>TRANSMISSÃO</PalavraAssoc>
	</Conteudo3>
	<Conteudo3>
		<Dica>A transmissão das doenças se faz apenas pela ________ da fêmea do Aedes aegypti infectada com o vírus.</Dica>
		<PalavraAssoc>PICADA</PalavraAssoc>
	</Conteudo3>
	<Conteudo3>
		<Dica>As primeiras manifestações da doença são _________: febre alta, calafrios, cansaço, dor de cabeça, dor muscular, náuseas e vômitos por cerca de três dias.</Dica>
		<PalavraAssoc>REPENTINAS</PalavraAssoc>
	</Conteudo3>
</fase3>
<fase4>
	<Conteudo4>
		<Dica>O vírus da febre amarela pertence ao gênero ___________. O mesmo gênero e família de outros vírus responsáveis por doença arbovirais, como a dengue.</Dica>
		<PalavraAssoc>FLAVIVÍRUS</PalavraAssoc>
	</Conteudo4>
	<Conteudo4>
		<Dica>Medida de profilaxia que é considerada eficaz contra a Febre Amarela.</Dica>
		<PalavraAssoc>VACINAÇÃO</PalavraAssoc>
	</Conteudo4>
	<Conteudo4>
		<Dica>Doença transmitida pelo mosquito Haemagogus.</Dica>
		<PalavraAssoc>FEBRE AMARELA</PalavraAssoc>
	</Conteudo4>
	<Conteudo4>
		<Dica>Assim como as demais doenças transmitidas pelo mosquito Aedes aegypti, foi durante as grandes __________ que a febre amarela foi introduzida nas Américas.</Dica>
		<PalavraAssoc>NAVEGAÇÕES</PalavraAssoc>
	</Conteudo4>
	<Conteudo4>
		<Dica>No Brasil, a febre amarela apareceu pela primeira vez no Nordeste brasileiro, mais especificamente em __________, no ano de 1685, onde permaneceu durante 10 anos.</Dica>
		<PalavraAssoc>PERNAMBUCO</PalavraAssoc>
	</Conteudo4>
	<Conteudo4>
		<Dica>O tratamento da febre amarela é apenas ___________ , requer cuidados e muitas vezes hospitalização.</Dica>
		<PalavraAssoc>SINTOMÁTICO</PalavraAssoc>
	</Conteudo4>
	<Conteudo4>
		<Dica>Assim como a dengue a febre amarela também se comporta como uma doença _____________ pois nem todos que são infectados desenvolvem os sintomas.</Dica>
		<PalavraAssoc>ASSINTOMÁTICA</PalavraAssoc>
	</Conteudo4>
	<Conteudo4>
		<Dica>Região onde o vírus da febre amarela está presente no Brasil.</Dica>
		<PalavraAssoc>CENTRO-OESTE</PalavraAssoc>
	</Conteudo4>
	<Conteudo4>
		<Dica>O ovo do mosquito, responsável pela ploriferação do vírus da Febre amarela, possui resistência à _________.</Dica>
		<PalavraAssoc>DESSECAÇÃO</PalavraAssoc>
	</Conteudo4>
</fase4>
<fase5>
	<Conteudo5>
		<Dica>Gênero do inseto transmissor da febre amarela nas áreas silvestres.</Dica>
		<PalavraAssoc>HAEMAGOGUS</PalavraAssoc>
	</Conteudo5>
	<Conteudo5>
		<Dica>Coordenou as campanhas de erradicação da febre amarela, no Rio de Janeiro, no final do século XIX</Dica>
		<PalavraAssoc>OSWALDO CRUZ</PalavraAssoc>
	</Conteudo5>
	<Conteudo5>
		<Dica>Primeira doença causada pelo mosquito Aedes aegypti.</Dica>
		<PalavraAssoc>FEBRE AMARELA</PalavraAssoc>
	</Conteudo5>
	<Conteudo5>
		<Dica>O médico Dr._______________ quase perdeu a vida no ano de 2004, porque esqueceu de se prevenir contra a febre amarela ao viajar para o norte do Brasil.</Dica>
		<PalavraAssoc>DRAUZIO VARELLA</PalavraAssoc>
	</Conteudo5>
	<Conteudo5>
		<Dica>Família a qual o vírus causador da doença pertence.</Dica>
		<PalavraAssoc>FLAVIVIRIDAE</PalavraAssoc>
	</Conteudo5>
	<Conteudo5>
		<Dica>A existência do ciclo silvestre da febre amarela foi descoberta em 1932, derrubando o mito de “________________”.</Dica>
		<PalavraAssoc>DOENÇA DA CIDADE</PalavraAssoc>
	</Conteudo5>
	<Conteudo5>
		<Dica>A Febre amarela silvestre (FAS) é transmitida através da picada de mosquitos, um deles é o _________ que vive em matas e vegetações à beira dos rios.</Dica>
		<PalavraAssoc>SABETHES</PalavraAssoc>
	</Conteudo5>
	<Conteudo5>
		<Dica>A fêmea, além de ser hematófaga, que se alimenta de sangue, pode também se alimentar com substâncias açucaradas, como o néctar e a seiva das plantas, assim como o mosquito macho.</Dica>
		<PalavraAssoc>FITÓFAGA</PalavraAssoc>
	</Conteudo5>
	<Conteudo5>
		<Dica>Órgão do governo responsável pelo combate do vetor da Febre Amarela.</Dica>
		<PalavraAssoc>MINISTÉRIO DA SAÚDE</PalavraAssoc>
	</Conteudo5>
	<Conteudo5>
		<Dica>Hábito de se alimentar de sangue praticado pelas fêmeas do vetor Aedes aegypti.</Dica>
		<PalavraAssoc>HEMATOFAGIA</PalavraAssoc>
	</Conteudo5>
	<Conteudo5>
		<Dica>A forma mais grave da doença é rara e costuma aparecer após um breve período de bem-estar, quando podem ocorrer _________ hepática e renal.</Dica>
		<PalavraAssoc>INSUFICIÊNCIAS</PalavraAssoc>
	</Conteudo5>
</fase5>
</Unscramble>
`

var xml = new XMLParser().parseFromString(XMLFebreAmarela);
export function palavraFebre(i, level) {
	const fase = 'fase' + level;
	const conteudo = 'Conteudo'+level
	var palavra = []
	palavra.push(xml.getElementsByTagName('Unscramble')[0].getElementsByTagName(fase)[0].getElementsByTagName(conteudo)[i].getElementsByTagName('PalavraAssoc')[0].value)
	palavra.push(xml.getElementsByTagName('Unscramble')[0].getElementsByTagName(fase)[0].getElementsByTagName(conteudo)[i].getElementsByTagName('Dica')[0].value)
	
	return palavra;
}
