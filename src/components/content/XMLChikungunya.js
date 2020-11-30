import XMLParser from 'react-xml-parser'

function palavraChikungunya() {
	const XMLChikungunya = `
	<?xml version="1.0" encoding="UTF-8"?>
	<?xml-stylesheet type="text/xsl" href="ACSPIXMT.xsl" ?>
	<Unscramble>
		<fase1>
			<Conteudo1>
				<Dica>Evitar o acúmulo de ___________ em recipientes destampados é uma das medidas que ajudam diminuir a reprodução do inseto transmissor da doença.</Dica>
				<PalavraAssoc>ÁGUA</PalavraAssoc>
			</Conteudo1>
			<Conteudo1>
				<Dica>Principal relação entre a Dengue, Febre Amarela, Chikungunya e Zika Vírus é o mosquito também conhecido como _____.</Dica>
				<PalavraAssoc>VETOR</PalavraAssoc>
			</Conteudo1>
			<Conteudo1>
				<Dica>Mosquito da ______: Nome popular do inseto vetor da Febre Chikungunya.</Dica>
				<PalavraAssoc>DENGUE</PalavraAssoc>
			</Conteudo1>
			<Conteudo1>
				<Dica>Aedes _______: Nome científico do inseto vetor da doença, sendo o principal transmissor da doença em ambientes urbanos.</Dica>
				<PalavraAssoc>AEGYPTI</PalavraAssoc>
			</Conteudo1>
			<Conteudo1>
				<Dica>Nome pelo qual o vírus causador da Febre Chikungunya ficou conhecido.</Dica>
				<PalavraAssoc>CHIKV</PalavraAssoc>
			</Conteudo1>
			<Conteudo1>
				<Dica>O vírus só é transmitido pela _______ do mosquito infectado.</Dica>
				<PalavraAssoc>PICADA</PalavraAssoc>
			</Conteudo1>
			<Conteudo1>
				<Dica>Uma das diferenças entre a Febre Chikungunya e a Dengue é seu baixo teor de ___________.</Dica>
				<PalavraAssoc>FEBRE</PalavraAssoc>
			</Conteudo1>
			<Conteudo1>
				<Dica>O CHIKV é um vírus ____ que pertence ao gênero Alphavírus.</Dica>
				<PalavraAssoc>RNA</PalavraAssoc>
			</Conteudo1>
			<Conteudo1>
				<Dica>O CHIKV é transmitido pela picada do mesmo vetor do ______, o Aedes aegypti.</Dica>
				<PalavraAssoc>ZIKA</PalavraAssoc>
			</Conteudo1>
		</fase1>
		<fase2>
			<Conteudo2>
				<Dica>Continente que deu origem ao CHIKV ou Chikungunya como é popularmente conhecido.</Dica>
				<PalavraAssoc>ÁFRICA</PalavraAssoc>
			</Conteudo2>
			<Conteudo2>
				<Dica>A transmissão da febre chikungunya raramente ocorre em temperaturas abaixo de 16° C. Por isso ele se desenvolve em áreas _________ e subtropicais.</Dica>
				<PalavraAssoc>TROPICAIS</PalavraAssoc>
			</Conteudo2>
			<Conteudo2>
				<Dica>Gênero dos insetos vetores da doença.</Dica>
				<PalavraAssoc>AEDES</PalavraAssoc>
			</Conteudo2>
			<Conteudo2>
				<Dica>Doença que possui sintomas muito parecidos com o da Febre Chikungunya.</Dica>
				<PalavraAssoc>DENGUE</PalavraAssoc>
			</Conteudo2>
			<Conteudo2>
				<Dica>A fêmea alimenta-se preferencialmente de _________ humano, e ao picar um indivíduo ela pode contrair a doença se o mosquito estiver infectado com o vírus CHIKV.</Dica>
				<PalavraAssoc>SANGUE</PalavraAssoc>
			</Conteudo2>
			<Conteudo2>
				<Dica>Febre alta e súbita, e surgimento de intensas dores nas articulações são características da fase _____ da doença.</Dica>
				<PalavraAssoc>AGUDA</PalavraAssoc>
			</Conteudo2>
			<Conteudo2>
				<Dica>Os horários de transmissão da febre chikungunya costumam ser nas primeiras horas da manhã e nas últimas da tarde, devido aos hábitos do ___________ transmissor da doença.</Dica>
				<PalavraAssoc>MOSQUITO</PalavraAssoc>
			</Conteudo2>
			<Conteudo2>
				<Dica>O Aedes aegypti tem presença essencialmente ________ e está associado à transmissão do CHIKV em áreas tropicais.</Dica>
				<PalavraAssoc>URBANA</PalavraAssoc>
			</Conteudo2>
			<Conteudo2>
				<Dica>Distribuir muito bem seus ovos, colocando-os em diversos criadouros, é uma estratégia usada pelas _______  que garante a dispersão e preservação da espécie.</Dica>
				<PalavraAssoc>FÊMEAS</PalavraAssoc>
			</Conteudo2>
		</fase2>
		<fase3>
			<Conteudo3>
				<Dica>Principal indicação médica quando há suspeita de Chikungunya.</Dica>
				<PalavraAssoc>REPOUSO</PalavraAssoc>
			</Conteudo3>
			<Conteudo3>
				<Dica>O racionamento d’água que é muito recorrente na região nordeste brasileira, gera o hábito de armazenar água em casa, aumentando de forma expressiva o risco de __________.</Dica>
				<PalavraAssoc>INFECÇÃO</PalavraAssoc>
			</Conteudo3>
			<Conteudo3>
				<Dica>Substância utilizada para repelir insetos, seu uso é uma das medidas de proteção individual contra a Febre Chikungunya.</Dica>
				<PalavraAssoc>REPELENTE</PalavraAssoc>
			</Conteudo3>
			<Conteudo3>
				<Dica>Não existem medicamentos específicos contra o vírus, o tratamento clínico é feito de modo a aliviar os ________ da doença.</Dica>
				<PalavraAssoc>SINTOMAS</PalavraAssoc>
			</Conteudo3>
			<Conteudo3>
				<Dica>Dores ___________ é o principal sintoma da doença, o que diferencia a Febre Chikungunya das demais doenças transmitidas pelo mosquito.</Dica>
				<PalavraAssoc>ARTICULARES</PalavraAssoc>
			</Conteudo3>
			<Conteudo3>
				<Dica>Os principais sintomas da Chikungunya são: febre acima de 39ºC, de início _________.</Dica>
				<PalavraAssoc>REPENTINO</PalavraAssoc>
			</Conteudo3>
			<Conteudo3>
				<Dica>Após a fase subaguda, alguns pacientes poderão ter persistências dos sintomas por um longo período de tempo podendo gerar uma fase _______ da doença.</Dica>
				<PalavraAssoc>CRÔNICA</PalavraAssoc>
			</Conteudo3>
			<Conteudo3>
				<Dica>Segundo o Ministério da Saúde, até março de 2016, o Brasil registrou 39.017 casos de Febre Chikungunya na região ______ que abrange os estados: Alagoas, Bahia, Pernambuco, Ceará, Maranhão, Paraíba, Piauí, Rio Grande do Norte e Sergipe.</Dica>
				<PalavraAssoc>NORDESTE</PalavraAssoc>
			</Conteudo3>
			<Conteudo3>
				<Dica>O Aedes aegypti, transmissor do vírus Chikungunya, é um mosquito que habita as regiões _________ e subtropicais, apresentando incapacidade de suportar invernos rigorosos.</Dica>
				<PalavraAssoc>TROPICAIS</PalavraAssoc>
			</Conteudo3>
		</fase3>
		<fase4>
			<Conteudo4>
				<Dica>Na fase aguda da doença, não é recomendado o uso de ácido acetil salicílico (AAS) e anti inflamatórios não hormonais (AINH) devido ao risco de ___________.</Dica>
				<PalavraAssoc>HEMORRAGIA</PalavraAssoc>
			</Conteudo4>
			<Conteudo4>
				<Dica>Embora a transmissão direta entre humanos não esteja provada cientificamente, existe a possibilidade da transmissão da mãe para o feto, através da _________.</Dica>
				<PalavraAssoc>PLACENTA</PalavraAssoc>
			</Conteudo4>
			<Conteudo4>
				<Dica>Durante a fase aguda, nos primeiros 10 dias da doença, o _______ é o mais indicado aos pacientes, pois evita complicações, principalmente dos sintomas articulares da doença.</Dica>
				<PalavraAssoc>REPOUSO</PalavraAssoc>
			</Conteudo4>
			<Conteudo4>
				<Dica>Local onde foi diagnosticada pela primeira vez a doença.</Dica>
				<PalavraAssoc>TANZÂNIA</PalavraAssoc>
			</Conteudo4>
			<Conteudo4>
				<Dica>Durante esta fase a febre desaparece, podendo haver persistência ou agravamento das dores articulares.</Dica>
				<PalavraAssoc>SUBAGUDA</PalavraAssoc>
			</Conteudo4>
			<Conteudo4>
				<Dica>Segundo o dialeto de um grupo étnico do sudeste da Tanzânia, Chikungunya significa: Homem que anda ________.</Dica>
				<PalavraAssoc>ARQUEADO</PalavraAssoc>
			</Conteudo4>
			<Conteudo4>
				<Dica>Os principais sintomas da ___________ são: febre acima de 39ºC, de início repentino, e dores intensas nas articulações.</Dica>
				<PalavraAssoc>CHIKUNGUNYA</PalavraAssoc>
			</Conteudo4>
		</fase4>
		<fase5>
			<Conteudo5>
				<Dica>A Febre Chikungunya é popularmente chamada de _________.</Dica>
				<PalavraAssoc>CATOLOTOLO</PalavraAssoc>
			</Conteudo5>
			<Conteudo5>
				<Dica>Remédio mais indicado para o controle da febre e das dores articulares.</Dica>
				<PalavraAssoc>PARACETAMOL</PalavraAssoc>
			</Conteudo5>
			<Conteudo5>
				<Dica>O CHIKV é um vírus RNA que pertence ao gênero __________ da família Togaviridae.</Dica>
				<PalavraAssoc>ALPHAVIRUS</PalavraAssoc>
			</Conteudo5>
			<Conteudo5>
				<Dica>A chikungunya é uma doença febril aguda, causada pelo vírus Chikungunya (CHIKV), que pode ser transmitida pelos mosquitos Aedes aegypti e pelo Aedes __________.</Dica>
				<PalavraAssoc>ALBOPICTUS</PalavraAssoc>
			</Conteudo5>
			<Conteudo5>
				<Dica>O principal sintoma acometido a fase subaguda da doença é o Fenômeno de _______, esse fenômeno ocorre em casos de grande persistência dos sintomas da doença.</Dica>
				<PalavraAssoc>RAYNAUD</PalavraAssoc>
			</Conteudo5>
			<Conteudo5>
				<Dica>Família a qual o vírus causador da doença pertence.</Dica>
				<PalavraAssoc>TOGAVIRIDAE</PalavraAssoc>
			</Conteudo5>
			<Conteudo5>
				<Dica>Os sintomas são tratados com medicação para a febre (paracetamol) e as dores _________ (anti inflamatórios).</Dica>
				<PalavraAssoc>ARTICULARES</PalavraAssoc>
			</Conteudo5>
			<Conteudo5>
				<Dica>Como na dengue, pacientes com febre chikungunya devem evitar medicamentos à base de ácido __________. Esses medicamentos têm efeito anticoagulante e podem causar sangramentos.</Dica>
				<PalavraAssoc>SALICÍLICO</PalavraAssoc>
			</Conteudo5>
		</fase5>
	</Unscramble>
	`
	var xml = new XMLParser().parseFromString(XMLChikungunya);
	var palavra = xml.getElementsByTagName('Unscramble')[0].getElementsByTagName('fase1')[0].getElementsByTagName('Conteudo1')[0].getElementsByTagName('PalavraAssoc')[0].value;
	
	return palavra;
}

export default palavraChikungunya;