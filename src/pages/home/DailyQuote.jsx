import { useState, useEffect } from 'react';

// Lista de frases predefinidas com autores
const quotes = [
    { text: "Fora da caridade não há salvação.", author: "Allan Kardec" },
    { text: "Deus nos concede, a cada dia, uma página de vida nova no livro do tempo. Aquilo que colocarmos nela, corre por nossa conta.", author: "Chico Xavier" },
    { text: "Os homens semeiam na terra o que colherão na vida espiritual: os frutos da sua coragem ou da sua fraqueza.", author: "Allan Kardec" },
    { text: "Nascer, morrer, renascer ainda e progredir sempre, tal é a lei.", author: "Allan Kardec" },
    { text: "O maior bem que podemos fazer em prol da doutrina espírita é a sua divulgação.", author: "Bezerra de Menezes" },
    { text: "A vida na Terra é uma escola bendita, onde o sofrimento é o instrutor que ensina ao aluno rebelde as grandes lições da alma.", author: "André Luiz, através da psicografia de Chico Xavier" },
    { text: "O perdão é a mais alta expressão do amor.", author: "Joanna de Ângelis, através da psicografia de Divaldo Franco" },
    { text: "Cada dificuldade vencida prepara o espírito para atingir a vitória maior.", author: "Emmanuel, através da psicografia de Chico Xavier" },
    { text: "O amor é a força que une os mundos e rege os astros.", author: "Leon Denis" },
    { text: "A coragem do amor cria a benção do perdão", author: "Emmanuel" },
    { text: "A verdadeira religião é aquela que nos torna melhores", author: "Allan Kardec" },
    { text: "A caridade é o amor, é o sol que Nosso Senhor fez raiar claro e fecundo; alegrando nesta vida a existência dolorida dos que sofrem neste mundo!", author: "Casimiro Cunha" },
    { text: "A sua irritação não solucionará problema algum. O seu mau humor não modifica a vida. Não estrague o seu dia.", author: "Chico Xavier" },
    { text: "A reencarnação é a justiça de Deus em ação.", author: "Eurípedes Barsanulfo" },
    { text: "Fé inabalável só o é a que pode encarar a razão, em todas as épocas da humanidade.", author: "Allan Kardeck" },
    { text: "Melhore tudo, dentro de você, para que tudo melhore ao redor dos seus passos", author: "Chico Xavier" },
    { text: "Não conserveis ressentimentos no coração, sabendo que aquele que vos decepciona é um companheiro vencido pelos seus próprios conflitos.", author: "Bezerra de Menezes" },
    { text: "Não conserveis ressentimentos no coração, sabendo que aquele que vos decepciona é um companheiro vencido pelos seus próprios conflitos.", author: "Bezerra de Menezes" },
    { text: "Se erraste, não tombes em desespero, mas, trabalhando e servindo receberás de Deus a oportunidade da retificação e da paz.", author: "Meimei" },
    { text: "O Amor vencerá sempre, e, por isso, a dor será motivada a desaparecer de nosso ainda atribulado caminho.", author: "Bezerra de Menezes" },
    { text: "Nem sempre terás o que desejas, mas enquanto estiveres ajudando aos outros encontrarás os recursos de que precisas.", author: "Chico Xavier" },
    { text: "A caridade é um exercício espiritual. Quem pratica o bem coloca em movimento as forças da alma.", author: "Chico Xavier" },
    { text: "Depois da morte ninguém caminha com a luz alheia.", author: "Chico Xavier" },
    { text: "Jesus põe a humildade na categoria das virtudes que aproximam de Deus e o orgulho entre os vícios que dele afastam a criatura.", author: "Allan Kardec" },
    { text: "Perdoa agora, hoje e amanhã, incondicionalmente. Recorda que todas as criaturas trazem consigo as imperfeições e fraquezas que lhes são peculiares, tanto quanto, ainda desajustados, trazemos também as nossas.", author: "Emmanuel" },
    { text: "Silêncio para injúria e perdão às ofensas. Recorda que os agressores são doentes. Não permitas que os irmãos desequilibrados te destruam o trabalho ou te apaguem a esperança.", author: "Chico Xavier" },
    { text: "O objetivo da sua vida na Terra não constitui a autoridade, a beleza ou o conforto efêmero. É o aperfeiçoamento espiritual.", author: "André Luiz" },
    { text: "A resposta de Deus pode tardar um pouco, mas jamais deixará de ser dada. Esse tempo de espera serve para provar a fé, a perserverança e a confiança. É um teste de paciência e a oportunidade de desenvolver a força interior, a alegria e a coragem.", author: "Bezerra de Menezes" },
    { text: "Ama-te, respeitando-te, e agindo de maneira que não te envergonhes de ti mesmo quando submetido ao crivo da consciência.", author: "Joanna de Ângelis" },
    { text: "Sejam quais forem as circustâncias, acende a luz da esperança na mente, a alegria do Amor de Deus no coração e aguarda.", author: "Joanna de Ângelis" },
    { text: "Pensa, todavia, no amparo de Deus e, em todos episódios da estrada, senti-lo-ás contigo no silêncio do coração.", author: "Emmanuel" },
    { text: "Em toda parte, a palavra é índice de nossa posição evolutiva. Indispensável aprimorá-la e enobrecê-la.", author: "Emmanuel" },
    { text: "Em todas as provações, ora e segue adiante, rogando ao Senhor te auxilie a sustentar a consciência tranquila, no desempenho dos deveres que te competem.", author: "Chico Xavier" },
    { text: "Toda vez que a Justiça Divina nos procura para acerto de contas, se nos encontra trabalhando em benefício dos outros, manda a Misericórdia Divina que a cobrança seja suspensa por tempo indeterminado.", author: "Chico Xavier" },
    { text: "A reencarnação é sempre evolução, recapitulação, ensino, aprendizado, e tudo isso custa esforço, obstáculos e suor. Entretanto, em muitas circunstâncias, é trabalho expiatório, regeneração ou processo curativo.", author: "André Luiz" },
    { text: "A nossa felicidade será naturalmente proporcional em relação à felicidade que fizermos para os outros. A alegria do próximo começa muitas vezes no sorriso que você lhe queira dar.", author: "Chico Xavier" },
    { text: "Estude a si mesmo, observando que o auto conhecimento traz humildade e sem humildade é impossível ser feliz.", author: "Allan Kardec"  },
    { text: "Persiste mais um tanto. Não cultives o pessimismo. Centraliza-te no bem a fazer. Esquece as sugestões do medo destrutivo. Segue adiante, mesmo varando a sombra dos próprios erros. Avança ainda que seja por entre lágrimas. E assim vencerás.", author: "Chico Xavier"  },
    { text: "Ocupe o seu tempo disponível com o trabalho proveitoso, sem esquecer o descanso imprescindível ao justo refazimento. A sugestão das trevas chega até nós pela hora vazia.", author: "André Luiz"  },
    { text: "Concede-te maior dose de confiança nos teus valores, honrando-te com o esforço para melhorar sempre e sem desânimo. Se erras, repete a ação, e se acertas, segue adiante.", author: "Joanna de Ângelis"  },
    { text: "...Caminha para adiante, regozija-te com o sofrimento que te ajusta as contas e abençoa os obstáculos que te fazem mais experiente e mais nobre!...", author: "Emmanuel - Chico Xavier"  },
    { text: "Existem Benfeitores queridos que vos assessoram, que participam das vossas noites insones e das angústias dos vossos corações. Aprendei a ouvi-los, sintonizando com esses anjos tutelares através da oração, pelo pensamento voltado para o Bem.", author: "Bezerra de Menezes"  },
    { text: "...Reajustemos-nos, para corresponder à proteção que o Senhor nos tem dispensado. A dificuldade é nosso degrau de ascensão. Não nos faltará o amparo Divino. Guardemos a serenidade ! Nossa fé viva, nosso valor!", author: "Bezerra de Menezes - Chico Xavier"  },
    { text: "A batalha mais difícil de ser travada ocorre no teu mundo íntimo. Ninguém a vê, aplaude ou a censura. É tua. Vitoria, ou derrota, pertencerá a ti em silêncio. Nenhuma ajuda exterior poderá contribuir para o teu sucesso, ou conjuntura alguma te levará ao fracasso.", author: "Joanna de Ângelis"},
    { text: "Coopera com a vida, esparzindo bençãos onde estejas, com quem te encontres, conforme surja a oportunidade. Retribui com amor ao amor que a vida te oferta...", author: "Joanna de Ângelis"},
    { text: "Quando compreenderes que a colheita de hoje corresponde exatamente à semeadura de ontem, nada mais lamentarás a não ser a tua própria falta de discernimento no instante de escolher a semente que, deliberadamente, lançastes no solo da vida.", author: "André Luiz"},
    { text: "Não permitas que pensamentos infelizes criem raizes em tua mente. A vida não se resume aos problemas que defrontas neste momento. Acima deles, sorriem para ti inúmeras oportunidades de progresso espiritual. Basta que confies em Deus e faças o melhor ao teu alcance.", author: "Irmã Scheilla"},
    { text: "Ora e age. Serve e confia. O pessimismo nunca dispõe da última palavra. Espera por Deus e conserva a certeza de que Deus faz sempre o melhor.", author: "Emmanuel - Chico Xavier"},
    { text: "Ora e age. Serve e confia. O pessimismo nunca dispõe da última palavra. Espera por Deus e conserva a certeza de que Deus faz sempre o melhor.", author: "Emmanuel - Chico Xavier"},
    { text: "Não percas a tua fé entre as sombras do mundo. Ainda que os teus pés estejam sangrando, segue para frente, erguendo-te por luz celeste acima de ti mesmo. Crê e trabalha. Esforça-te no bem e espera com paciência. Tudo passa e tudo se renova na Terra, mas o que vem do Céu permanecerá.", author: "Meimei - Chico Xavier"},

    { text: "Reserva-te o direito de permanecer indiferente às provocações de qualquer natureza. Numa época de insensatez como esta, o mal anda em liberdade, seduzindo os incautos.", author: "Joanna de Ângelis"},
    { text: "Perdoa os teus perseguidores. Eles já são infelizes, em razão do que cultivam no íntimo e do que realmente são.", author: "Joanna de Ângelis"},
    { text: "Quando estiveres a ponto de desfalecer, procura refúgio na oração. Orando, renovar-se-ão tuas paisagens mentais e morais, elevando-te o ânimo e reconfortanto-te espiritualmente.", author: "Joanna de Ângelis"},
    { text: "Ergue o caído, ajuda o aturdido, socorre o aflito, doa-te à vida e a vida te responderá em dádivas de esperança e progresso superior.", author: "Joanna de Ângelis"},

    { text: "O bem que você faz hoje pode ser esquecido amanhã. Faça o bem assim mesmo. Veja que, ao final das contas, é tudo entre você e Deus! Nunca foi entre você e os outros.", author: "Madre Teresa de Calcutá"},
    

];

const DailyQuote = () => {
    const [quote, setQuote] = useState({ text: '', author: '' });

    useEffect(() => {
        // Gera uma citação aleatória ao carregar a página
        const selectedQuote = quotes[Math.floor(Math.random() * quotes.length)];
        setQuote(selectedQuote);
    }, []);

    return (
        <div className="flex items-center justify-center h-auto mt-16 px-4 lg:px-16 lg:mx-8 py-8 bg-orange400">
            <div className="p-4 bg-orange-400 rounded-lg shadow-md shadow-right max-w-full md:max-w-2xl lg:max-w-3xl">
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl  font-semibold text-white text-justify">
                    &ldquo;{quote.text}&rdquo;
                </p>
                <p className="text-right text-md sm:text-lg md:text-xl lg:text-2xl italic text-white mt-2">
                    &mdash; {quote.author}
                </p>
            </div>
        </div>
    );
};

export default DailyQuote;
