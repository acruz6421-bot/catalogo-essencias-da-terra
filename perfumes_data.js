// Dados completos dos perfumes para o Catálogo Essências da Terra
const perfumesData = {
    masculinos: [
        {
            name: "Bleu de Chanel",
            brand: "Chanel",
            image: "perfumes_images/masculinos/bleu_de_chanel.jpg",
            description: "Uma fragrância atemporal e ousada, que combina o frescor cítrico do limão e da menta com a intensidade amadeirada do cedro e do sândalo. Inspirado no homem que desafia convenções, evoca uma sensação de liberdade, elegância e mistério. É um perfume que se revela em três atos, com notas de topo vibrantes, um coração picante de gengibre e noz-moscada, e uma base quente e sensual de incenso e âmbar.",
            style: "Amadeirado Aromático"
        },
        {
            name: "Acqua Di Giò",
            brand: "Giorgio Armani",
            image: "perfumes_images/masculinos/acqua_di_gio.jpg",
            description: "Inspirado na ilha de Pantelleria, na Itália, Acqua Di Giò é um mergulho refrescante no mar Mediterrâneo. Esta fragrância aquática e cítrica combina notas de bergamota, néroli e tangerina verde com a leveza das notas marinhas e a força do patchouli. Evoca a sensação de liberdade, a harmonia do homem com a natureza e a energia do oceano. É um perfume que transmite frescor, vitalidade e uma masculinidade serena.",
            style: "Aquático Cítrico"
        },
        {
            name: "Legend",
            brand: "Montblanc",
            image: "perfumes_images/masculinos/legend_mont_blanc.jpg",
            description: "Uma fragrância que expressa força e suavidade, clareza e mistério. Legend é um fougère amadeirado que abre com notas frescas de bergamota, lavanda e folhas de abacaxi. O coração é magnético, com notas de maçã, rosa e gerânio, enquanto a base de sândalo, fava tonka e evernyl confere um rastro inesquecível. Inspirado no homem carismático e autêntico, evoca uma sensação de confiança e elegância atemporal.",
            style: "Fougère Amadeirado"
        },
        {
            name: "Azzaro The Most Wanted",
            brand: "Azzaro",
            image: "perfumes_images/masculinos/azzaro_the_most.jpg",
            description: "Para o homem que ousa viver intensamente, The Most Wanted é uma fragrância ambarada e picante que vicia. A combinação vibrante de cardamomo, um acorde viciante de caramelo e a masculinidade do âmbar amadeirado cria uma assinatura olfativa inesquecível. É um perfume que evoca a sensação de poder, sedução e audácia, para o homem que joga e ganha.",
            style: "Ambarado Especiado"
        },
        {
            name: "Boss The Scent Elixir",
            brand: "Hugo Boss",
            image: "perfumes_images/masculinos/boss_the_scent_elixir.jpg",
            description: "Uma interpretação mais rica e intensa do icônico Boss The Scent. Este elixir ambarado e couro abre com a explosão picante do pimentão, que desperta os sentidos. O coração revela a energia vibrante do absoluto de lavanda, enquanto a base de sândalo da Caledônia confere uma sofisticação quente e amadeirada. É uma fragrância que evoca a sedução, o carisma e a confiança do homem Boss.",
            style: "Ambarado Couro"
        },
        {
            name: "CH 212 Black",
            brand: "Carolina Herrera",
            image: "perfumes_images/masculinos/ch_212_black.jpg",
            description: "Uma fragrância que captura a energia de Nova York em uma noite de festa. 212 VIP Black é um fougère ambarado, intenso e picante, com notas de absinto, lavanda e um fundo de baunilha negra e almíscar. É um perfume para o homem moderno, carismático e imprevisível, que se torna o centro das atenções. Evoca uma sensação de exclusividade, sofisticação e diversão.",
            style: "Fougère Ambarado"
        },
        {
            name: "Club de Nuit Intense Man",
            brand: "Armaf",
            image: "perfumes_images/masculinos/club_de_nuit_armaf.jpg",
            description: "Uma fragrância ousada e cativante, conhecida por sua semelhança com perfumes de nicho. Club de Nuit Intense Man abre com notas frutadas e cítricas de limão, abacaxi e maçã. O coração é uma mistura de bétula, jasmim e rosa, enquanto a base de almíscar, âmbar, patchouli e baunilha confere uma profundidade rica e esfumaçada. É um perfume para o homem confiante, que deixa uma impressão marcante por onde passa.",
            style: "Chipre Frutado"
        },
        {
            name: "Fakhar",
            brand: "Lattafa",
            image: "perfumes_images/masculinos/fakhar_lattafa.jpg",
            description: "Uma fragrância que exala orgulho e sofisticação. Fakhar Black é um amadeirado especiado que combina a frescura da maçã e da bergamota com a intensidade do gengibre. O coração aromático de lavanda, sálvia e zimbro é complementado por uma base quente de fava tonka, cedro e vetiver. É um perfume versátil e elegante, que evoca uma sensação de masculinidade moderna e confiança.",
            style: "Amadeirado Especiado"
        },
        {
            name: "Ferrari Black",
            brand: "Ferrari",
            image: "perfumes_images/masculinos/ferrari_black.jpg",
            description: "Um clássico atemporal, Ferrari Black é uma fragrância aromática fougère que captura a essência da marca. As notas de topo de maçã vermelha, ameixa e bergamota dão um toque frutado e fresco. O coração é quente e picante, com canela, jasmim e rosa. A base de baunilha, âmbar e cedro confere uma sensação de conforto e masculinidade. É um perfume para o homem misterioso, sensual e confiante.",
            style: "Aromático Fougère"
        },
        {
            name: "Le Male Elixir",
            brand: "Jean Paul Gaultier",
            image: "perfumes_images/masculinos/le_male_elixir.jpg",
            description: "Uma onda de calor intensa e viciante. Le Male Elixir é uma versão mais sensual e poderosa do icônico Le Male. A fragrância abre com a frescura da menta e da lavanda, seguida por um coração de benjoim e uma base irresistível de mel, fava tonka e tabaco. É um perfume ambarado fougère que evoca a imagem de um marinheiro sedutor, com um rastro que incendeia os sentidos.",
            style: "Ambarado Fougère"
        },
        {
            name: "Malbec",
            brand: "O Boticário",
            image: "perfumes_images/masculinos/malbec_boticario.jpg",
            description: "Inspirado na uva Malbec, esta fragrância amadeirada especiada combina notas frutadas de ameixa e cassis com especiarias quentes como pimenta rosa e cardamomo. O coração revela acordes amadeirados de cedro e vetiver, enquanto a base de âmbar e almíscar confere sensualidade e sofisticação. É um perfume que evoca elegância, maturidade e um toque de mistério.",
            style: "Amadeirado Especiado"
        },
        {
            name: "Oud Wood",
            brand: "Tom Ford",
            image: "perfumes_images/masculinos/oud_wood_tom_ford.jpg",
            description: "Uma interpretação moderna e acessível do precioso oud. Oud Wood combina a riqueza do oud com notas de pau-rosa e cardamomo, criando uma abertura exótica e cativante. O coração revela sândalo cremoso e palisandro, enquanto a base de âmbar e baunilha adiciona calor e sensualidade. É uma fragrância sofisticada e luxuosa, que evoca mistério e elegância oriental.",
            style: "Oriental Amadeirado"
        },
        {
            name: "Polo Sport",
            brand: "Ralph Lauren",
            image: "perfumes_images/masculinos/polo_sport_ralph_lauren.jpg",
            description: "Uma fragrância fresca e energética, inspirada no espírito esportivo. Polo Sport abre com notas aquáticas e cítricas de limão e tangerina, seguidas por um coração aromático de lavanda e gerânio. A base amadeirada de cedro e almíscar confere masculinidade e frescor duradouro. É um perfume que evoca vitalidade, juventude e um estilo de vida ativo.",
            style: "Aquático Aromático"
        },
        {
            name: "Tommy Hilfiger",
            brand: "Tommy Hilfiger",
            image: "perfumes_images/masculinos/tommy_hilfiger.jpg",
            description: "Um clássico americano que captura o espírito jovem e descontraído da marca. Esta fragrância cítrica aromática combina notas frescas de toranja, bergamota e lavanda com um coração floral de gerânio e rosa. A base amadeirada de cedro e sândalo adiciona profundidade e masculinidade. É um perfume versátil e confiável, perfeito para o homem moderno e autêntico.",
            style: "Cítrico Aromático"
        },
        {
            name: "Portofino",
            brand: "Tom Ford",
            image: "perfumes_images/masculinos/portofino_tom_ford.jpg",
            description: "Uma escapada olfativa para a Riviera Italiana. Neroli Portofino é uma fragrância cítrica aquática que combina bergamota, limão siciliano e néroli com notas marinhas refrescantes. O coração floral de pitosporo e jasmim é complementado por uma base suave de âmbar e almíscar. É um perfume que evoca luxo, sofisticação e a elegância do Mediterrâneo.",
            style: "Cítrico Aquático"
        },
        {
            name: "Sultan al Lail",
            brand: "Al Wataniah",
            image: "perfumes_images/masculinos/sultan_al_lail.jpg",
            description: "Uma fragrância oriental rica e opulenta, que evoca as noites árabes. Sultan al Lail combina especiarias exóticas com madeiras preciosas e resinas aromáticas. As notas de topo picantes dão lugar a um coração de rosa e oud, enquanto a base de âmbar, almíscar e sândalo cria um rastro envolvente e misterioso. É um perfume para o homem que aprecia a tradição e a sofisticação oriental.",
            style: "Oriental Especiado"
        },
        {
            name: "Watani",
            brand: "Al Wataniah",
            image: "perfumes_images/masculinos/watani_al_wataniah.jpg",
            description: "Uma homenagem à terra natal, Watani é uma fragrância amadeirada oriental que combina tradição e modernidade. As notas de topo cítricas e especiadas evoluem para um coração de madeiras aromáticas e flores orientais. A base rica de âmbar, oud e almíscar confere profundidade e longevidade excepcionais. É um perfume que evoca orgulho, identidade e conexão com as raízes.",
            style: "Amadeirado Oriental"
        },
        {
            name: "Zaad",
            brand: "O Boticário",
            image: "perfumes_images/masculinos/zaad_boticario.jpg",
            description: "Uma fragrância sofisticada e contemporânea, que combina frescor e intensidade. Zaad abre com notas cítricas vibrantes de bergamota e limão, seguidas por um coração aromático de lavanda e gerânio. A base amadeirada de cedro, vetiver e almíscar confere masculinidade e elegância. É um perfume versátil e refinado, perfeito para o homem moderno e confiante.",
            style: "Aromático Amadeirado"
        },
        {
            name: "212 VIP Black",
            brand: "Carolina Herrera",
            image: "perfumes_images/masculinos/212_vip_black.jpg",
            description: "A versão mais intensa e misteriosa da linha 212 VIP. Esta fragrância ambarada especiada combina absinto, lavanda e couro em uma composição ousada e sedutora. A base de baunilha negra e almíscar adiciona sensualidade e profundidade. É um perfume para o homem que não tem medo de se destacar, evocando poder, mistério e magnetismo.",
            style: "Ambarado Especiado"
        },
        {
            name: "212 VIP Man",
            brand: "Carolina Herrera",
            image: "perfumes_images/masculinos/212_vip_man.jpg",
            description: "Uma fragrância que celebra o sucesso e a conquista. 212 VIP Man é um amadeirado especiado que combina notas frescas de lima e gengibre com especiarias quentes como pimenta e noz-moscada. A base amadeirada de cedro e âmbar confere sofisticação e masculinidade. É um perfume para o homem vencedor, que evoca confiança, charme e determinação.",
            style: "Amadeirado Especiado"
        },
        {
            name: "Armani Code Profundo",
            brand: "Giorgio Armani",
            image: "perfumes_images/masculinos/armani_code_profundo.jpg",
            description: "Uma interpretação mais intensa e profunda do icônico Armani Code. Esta fragrância amadeirada aromática combina bergamota e maçã verde com um coração de lavanda e noz-moscada. A base de fava tonka, âmbar e madeiras confere profundidade e sensualidade. É um perfume que evoca sofisticação, mistério e uma masculinidade magnética.",
            style: "Amadeirado Aromático"
        },
        {
            name: "Asaad",
            brand: "Lattafa",
            image: "perfumes_images/masculinos/asaad_lattafa.jpg",
            description: "Uma fragrância que expressa felicidade e positividade. Asaad combina notas cítricas refrescantes com especiarias orientais e madeiras aromáticas. O equilíbrio entre frescor e calor cria uma composição harmoniosa e cativante. A base de âmbar e almíscar confere longevidade e projeção excepcionais. É um perfume que evoca alegria, otimismo e energia positiva.",
            style: "Oriental Cítrico"
        },
        {
            name: "Aqua di Gio Profondo",
            brand: "Giorgio Armani",
            image: "perfumes_images/masculinos/aqua_di_gio_profondo.jpg",
            description: "Uma jornada olfativa às profundezas do oceano. Aqua di Gio Profondo é uma fragrância aquática aromática que combina bergamota e maçã verde com notas marinhas intensas. O coração de lavanda e alecrim é complementado por uma base de patchouli e almíscar. É um perfume que evoca a força e o mistério do mar profundo, com frescor e intensidade em perfeito equilíbrio.",
            style: "Aquático Aromático"
        },
        {
            name: "Hugo Boss Bottled",
            brand: "Hugo Boss",
            image: "perfumes_images/masculinos/hugo_boss_bottled.jpg",
            description: "Um clássico moderno que define elegância masculina. Boss Bottled é uma fragrância amadeirada especiada que combina maçã e bergamota com canela e cravo. O coração floral de gerânio e rosa é equilibrado por uma base quente de sândalo, cedro e baunilha. É um perfume versátil e sofisticado, que evoca confiança, sucesso e refinamento.",
            style: "Amadeirado Especiado"
        }
    ],
    
    femininos: [
        {
            name: "La Vie Est Belle",
            brand: "Lancôme",
            image: "perfumes_images/femininos/la_vie_est_belle_lancome.jpg",
            description: "Uma declaração universal à beleza da vida. La Vie Est Belle é uma fragrância floral gourmand que representa a escolha de viver a vida à sua maneira e torná-la mais bela. A nobreza da íris, a profundidade do patchouli e a doçura de um acorde gourmand se unem em um perfume de alma e luz. É uma fragrância que evoca alegria, feminilidade e liberdade.",
            style: "Floral Frutado Gourmand"
        },
        {
            name: "Good Girl",
            brand: "Carolina Herrera",
            image: "perfumes_images/femininos/good_girl_carolina_herrera.jpg",
            description: "\"It's so good to be bad.\" Good Girl é uma fragrância ousada e sofisticada, inspirada na dualidade da mulher moderna. O lado bom é representado pelas notas luminosas de jasmim e tuberosa, enquanto o lado mau é revelado pela fava tonka torrada e pelo cacau. O icônico frasco em formato de stiletto simboliza o poder da feminilidade. É um perfume que evoca sensualidade, elegância e um toque de mistério.",
            style: "Âmbar Floral"
        },
        {
            name: "Lady Million",
            brand: "Paco Rabanne",
            image: "perfumes_images/femininos/lady_million_paco_rabanne.jpg",
            description: "Para a mulher que é vibrante, sensual e que sonha em ser a única. Lady Million é uma fragrância floral amadeirada, fresca e viciante. As notas de topo de néroli, limão e framboesa são seguidas por um coração de jasmim, gardênia e flor de laranjeira. A base de patchouli, mel e âmbar confere uma assinatura opulenta e carnal. É um perfume que evoca luxo, poder e sedução.",
            style: "Floral Frutado"
        },
        {
            name: "Scandal",
            brand: "Jean Paul Gaultier",
            image: "perfumes_images/femininos/scandal_jean_paul_gaultier.jpg",
            description: "Uma fragrância que quebra todos os clichês, oferecendo algo novo e moderno, e ao mesmo tempo poderoso e elegante. Scandal é um chipre gourmand que combina a doçura viciante do mel com a elegância da gardênia e a sensualidade do patchouli. Durante o dia, é um mel gourmet refrescante, e à noite, um mel sensual e escandaloso. É um perfume para a mulher livre e forte.",
            style: "Chipre Gourmand"
        },
        {
            name: "Dior Addict",
            brand: "Dior",
            image: "perfumes_images/femininos/dior_addict.jpg",
            description: "Uma fragrância oriental floral, intensa e vibrante. Dior Addict abre com a nota fresca e cativante da folha de mandarina e da flor de laranjeira da Tunísia. O coração revela o absoluto de jasmim sambac, e a base se desdobra na sensualidade da baunilha de Bourbon. É um perfume para a mulher apaixonada, intuitiva e que segue suas próprias regras. Evoca uma sensação de liberdade e energia.",
            style: "Âmbar Floral"
        },
        {
            name: "Yara",
            brand: "Lattafa",
            image: "perfumes_images/femininos/yara_lattafa.jpg",
            description: "Uma fragrância doce e envolvente, que conquistou corações ao redor do mundo. Yara é um gourmand floral que combina notas de frutas vermelhas e açúcar com um coração de flores brancas e baunilha. A base cremosa de almíscar e madeiras suaves confere profundidade e longevidade. É um perfume que evoca feminilidade, doçura e um charme irresistível.",
            style: "Floral Gourmand"
        },
        {
            name: "Haya",
            brand: "Lattafa",
            image: "perfumes_images/femininos/haya_lattafa.jpg",
            description: "Uma fragrância que celebra a vida e a feminilidade. Haya é um floral frutado que combina notas cítricas refrescantes com um coração de flores delicadas e frutas doces. A base suave de almíscar e madeiras claras confere elegância e sofisticação. É um perfume versátil e encantador, que evoca alegria, leveza e uma beleza natural.",
            style: "Floral Frutado"
        },
        {
            name: "Ameerat Al Arab",
            brand: "Lattafa",
            image: "perfumes_images/femininos/ameerat_al_arab.jpg",
            description: "Uma fragrância real e majestosa, criada para a princesa árabe moderna. Ameerat Al Arab combina especiarias orientais com flores exóticas e madeiras preciosas. As notas de topo picantes evoluem para um coração floral rico, enquanto a base de oud, âmbar e almíscar confere opulência e mistério. É um perfume que evoca realeza, poder e uma feminilidade magnética.",
            style: "Oriental Floral"
        },
        {
            name: "Armaf Miss Mystique",
            brand: "Armaf",
            image: "perfumes_images/femininos/armaf_miss_mystique.jpg",
            description: "Uma fragrância enigmática e sedutora, que revela diferentes facetas da feminilidade. Miss Mystique combina notas frutadas frescas com um coração floral sofisticado e uma base amadeirada sensual. A composição equilibrada entre doçura e mistério cria uma assinatura olfativa única. É um perfume para a mulher complexa e fascinante, que evoca elegância e um toque de mistério.",
            style: "Floral Amadeirado"
        },
        {
            name: "Bareeq al Dhahab",
            brand: "Al Wataniah",
            image: "perfumes_images/femininos/bareeq_al_dhahab.jpg",
            description: "Uma fragrância dourada e luxuosa, que brilha como o ouro. Bareeq al Dhahab é um oriental floral que combina especiarias preciosas com flores exóticas e resinas aromáticas. A riqueza dos ingredientes orientais cria uma composição opulenta e sofisticada. É um perfume que evoca luxo, tradição e uma feminilidade poderosa e magnética.",
            style: "Oriental Floral"
        },
        {
            name: "CH Femme",
            brand: "Carolina Herrera",
            image: "perfumes_images/femininos/ch_femme_carolina_herrera.jpg",
            description: "Uma fragrância clássica e elegante, que define a sofisticação feminina. CH é um floral aldeidado que combina notas cítricas frescas com um coração de flores brancas e uma base amadeirada suave. A composição equilibrada e refinada evoca a imagem de uma mulher confiante e elegante. É um perfume atemporal que nunca sai de moda.",
            style: "Floral Aldeidado"
        },
        {
            name: "CK By",
            brand: "Calvin Klein",
            image: "perfumes_images/femininos/ck_by_calvin_klein.jpg",
            description: "Uma fragrância moderna e minimalista, que captura o espírito urbano contemporâneo. CK By é um floral aquático que combina notas frescas e limpas com um toque de sensualidade sutil. A simplicidade elegante da composição reflete a estética minimalista da marca. É um perfume para a mulher moderna, independente e autêntica.",
            style: "Floral Aquático"
        },
        {
            name: "Durrat Al Aroos",
            brand: "Al Wataniah",
            image: "perfumes_images/femininos/durrat_al_aroos.jpg",
            description: "Uma fragrância nupcial e romântica, criada para celebrar momentos especiais. Durrat Al Aroos é um floral oriental que combina flores delicadas com especiarias suaves e madeiras preciosas. A composição evoca pureza, romance e elegância. É um perfume que celebra a feminilidade em sua forma mais pura e radiante.",
            style: "Floral Oriental"
        },
        {
            name: "Fakhar Rose",
            brand: "Lattafa",
            image: "perfumes_images/femininos/fakhar_rose_lattafa.jpg",
            description: "Uma homenagem à rainha das flores. Fakhar Rose é um floral puro que celebra a rosa em todas as suas facetas. Das pétalas frescas da manhã à intensidade aveludada da rosa búlgara, esta fragrância evoca romance, paixão e feminilidade clássica. A base suave de almíscar e madeiras confere profundidade sem mascarar a beleza natural da rosa.",
            style: "Floral Rosa"
        },
        {
            name: "Light Blue",
            brand: "Dolce & Gabbana",
            image: "perfumes_images/femininos/light_blue_dolce_gabbana.jpg",
            description: "Uma escapada olfativa para o Mediterrâneo. Light Blue é uma fragrância cítrica aquática que combina limão siciliano e maçã verde com notas marinhas refrescantes. O coração floral de jasmim e rosa branca é complementado por uma base suave de cedro e âmbar. É um perfume que evoca verão, liberdade e a alegria de viver.",
            style: "Cítrico Aquático"
        },
        {
            name: "Trésor",
            brand: "Lancôme",
            image: "perfumes_images/femininos/tresor_lancome.jpg",
            description: "Um tesouro olfativo que celebra o amor em todas as suas formas. Trésor é um floral oriental que combina pétalas de rosa e pêssego com especiarias orientais e âmbar. A composição rica e envolvente evoca paixão, romance e uma feminilidade poderosa. É um perfume atemporal que continua a encantar gerações de mulheres.",
            style: "Floral Oriental"
        },
        {
            name: "Noor al Sabah",
            brand: "Al Wataniah",
            image: "perfumes_images/femininos/noor_al_sabah.jpg",
            description: "A luz da manhã capturada em uma fragrância. Noor al Sabah é um floral oriental que combina frescor matinal com a riqueza das tradições orientais. As notas luminosas evoluem para um coração floral exótico, enquanto a base de âmbar e almíscar confere calor e sensualidade. É um perfume que evoca esperança, renovação e beleza radiante.",
            style: "Floral Oriental"
        },
        {
            name: "Shagaf Al Ward",
            brand: "Lattafa",
            image: "perfumes_images/femininos/shagaf_al_ward.jpg",
            description: "Uma paixão ardente pelas rosas. Shagaf Al Ward é um floral intenso que celebra a rosa em sua forma mais apaixonada e sedutora. A combinação de rosas frescas e rosas secas cria uma composição complexa e envolvente. A base de oud e âmbar adiciona profundidade oriental. É um perfume para a mulher apaixonada e intensa.",
            style: "Floral Oriental"
        }
    ],
    
    unissex: [
        {
            name: "CK One",
            brand: "Calvin Klein",
            image: "perfumes_images/unissex/ck_one_calvin_klein.jpg",
            description: "Um marco na perfumaria moderna, CK One quebrou barreiras ao ser uma das primeiras fragrâncias verdadeiramente unissex. Esta composição cítrica aquática combina bergamota, limão e notas verdes com um coração floral suave e uma base amadeirada limpa. É um perfume que evoca liberdade, juventude e autenticidade, perfeito para quem não se limita por convenções.",
            style: "Cítrico Aquático"
        },
        {
            name: "Erba Pura",
            brand: "Xerjoff",
            image: "perfumes_images/unissex/erba_pura_xerjoff.jpg",
            description: "Uma fragrância mediterrânea que captura a essência da natureza pura. Erba Pura combina bergamota siciliana e limão com um coração de frutas brancas e jasmim. A base de almíscar branco e âmbar confere suavidade e elegância. É um perfume que evoca simplicidade sofisticada, pureza e uma conexão harmoniosa com a natureza.",
            style: "Cítrico Floral"
        },
        {
            name: "Tabaco Vanille",
            brand: "Tom Ford",
            image: "perfumes_images/unissex/tabaco_vanille_tom_ford.jpg",
            description: "Uma fragrância opulenta e viciante, que combina a riqueza do tabaco com a doçura da baunilha. Tabaco Vanille abre com especiarias quentes e folhas de tabaco, evoluindo para um coração de cacau e fava tonka. A base cremosa de baunilha e madeiras secas cria uma assinatura olfativa luxuosa e envolvente. É um perfume para quem aprecia sofisticação e intensidade.",
            style: "Oriental Gourmand"
        },
        {
            name: "Amber Rouge",
            brand: "Orientica",
            image: "perfumes_images/unissex/amber_rouge_orientica.jpg",
            description: "Uma fragrância oriental rica e sedutora, que combina a calidez do âmbar com especiarias exóticas. Amber Rouge abre com açafrão e cardamomo, evoluindo para um coração de rosa e oud. A base de âmbar, almíscar e madeiras preciosas confere profundidade e longevidade excepcionais. É um perfume que evoca mistério, paixão e elegância oriental.",
            style: "Oriental Especiado"
        },
        {
            name: "Badee Oud Sublime",
            brand: "Lattafa",
            image: "perfumes_images/unissex/badee_oud_sublime_lattafa.jpg",
            description: "Uma interpretação moderna e acessível do precioso oud. Badee Oud Sublime combina a riqueza do oud com notas frutadas tropicais e flores exóticas. A base amadeirada e resinosa confere profundidade e complexidade. É um perfume que democratiza o luxo do oud, oferecendo uma experiência olfativa rica e sofisticada para todos.",
            style: "Oriental Amadeirado"
        },
        {
            name: "Carmina",
            brand: "Creed",
            image: "perfumes_images/unissex/carmina_creed.jpg",
            description: "Uma fragrância poética e romântica, inspirada na beleza da música e da poesia. Carmina combina notas frutadas frescas com um coração floral delicado e uma base amadeirada suave. A composição equilibrada e refinada evoca arte, cultura e uma sensibilidade apurada. É um perfume para almas sensíveis e apreciadoras da beleza.",
            style: "Floral Frutado"
        },
        {
            name: "Attar al Wesal",
            brand: "Al Wataniah",
            image: "perfumes_images/unissex/attar_al_wesal.jpg",
            description: "Uma fragrância que conecta tradição e modernidade. Attar al Wesal é um oriental amadeirado que combina especiarias tradicionais com madeiras modernas. A riqueza dos ingredientes orientais é equilibrada por uma apresentação contemporânea. É um perfume que evoca herança, conexão e a ponte entre passado e presente.",
            style: "Oriental Amadeirado"
        },
        {
            name: "Musamam",
            brand: "Lattafa",
            image: "perfumes_images/unissex/musamam_lattafa.jpg",
            description: "Uma fragrância que evoca determinação e força interior. Musamam combina notas cítricas vibrantes with especiarias orientais e madeiras robustas. A composição equilibrada entre frescor e intensidade cria uma assinatura olfativa marcante. É um perfume para personalidades fortes e determinadas, que não temem se destacar.",
            style: "Oriental Cítrico"
        }
    ],
    
    "essencias-masculinas": [
        {
            name: "Versace Eros",
            brand: "Versace",
            image: "perfumes_images/essencias_masculinas/versace_eros.jpg",
            description: "Uma fragrância que celebra o amor e a paixão. Versace Eros é um oriental fougère que combina menta fresca, maçã verde e limão com um coração de fava tonka, gerânio e baunilha. A base de cedro, vetiver e musgo de carvalho confere masculinidade e sensualidade. É um perfume que evoca o deus grego do amor, com poder de sedução irresistível.",
            style: "Oriental Fougère"
        },
        {
            name: "Phantom",
            brand: "Paco Rabanne",
            image: "perfumes_images/essencias_masculinas/phantom_paco_rabanne.jpg",
            description: "Uma fragrância futurista que combina tradição e inovação. Phantom é um aromático amadeirado que abre com lavanda e limão, evoluindo para um coração de baunilha e fava tonka. A base de vetiver e patchouli confere profundidade moderna. É um perfume para o homem do futuro, que abraça a tecnologia sem perder a essência humana.",
            style: "Aromático Amadeirado"
        },
        {
            name: "212 Heroes Masculino",
            brand: "Carolina Herrera",
            image: "perfumes_images/essencias_masculinas/212_heroes_masculino.jpg",
            description: "Uma fragrância que celebra a juventude eterna e a energia urbana. 212 Heroes combina notas frescas de bergamota e pêra com um coração aromático de cannabis e gerânio. A base amadeirada de cedro e almíscar confere modernidade e frescor duradouro. É um perfume para jovens heróis urbanos, que vivem intensamente cada momento.",
            style: "Aromático Frutado"
        },
        {
            name: "Alien Men",
            brand: "Thierry Mugler",
            image: "perfumes_images/essencias_masculinas/alien_men_thierry_mugler.jpg",
            description: "Uma fragrância extraterrestre e hipnótica. Alien Man é um amadeirado oriental que combina especiarias exóticas com madeiras alienígenas e resinas misteriosas. A composição única e intrigante evoca outros mundos e dimensões. É um perfume para o homem que ousa ser diferente, que não teme explorar territórios desconhecidos.",
            style: "Amadeirado Oriental"
        },
        {
            name: "Armani Code",
            brand: "Giorgio Armani",
            image: "perfumes_images/essencias_masculinas/armani_code.jpg",
            description: "Um código de sedução masculina. Armani Code é um oriental especiado que combina bergamota e limão com um coração de anis estrelado e madeira de guáiac. A base de fava tonka, baunilha e tabaco confere sensualidade e mistério. É um perfume que evoca elegância italiana, sofisticação e um charme irresistível.",
            style: "Oriental Especiado"
        },
        {
            name: "Mercedes Benz Club Black",
            brand: "Mercedes Benz",
            image: "perfumes_images/essencias_masculinas/mercedes_benz_club_black.jpg",
            description: "Uma fragrância que captura o espírito de luxo e performance da marca. Club Black é um amadeirado especiado que combina bergamota e pimenta preta com um coração de cedro e vetiver. A base de âmbar e almíscar confere sofisticação e masculinidade. É um perfume para o homem que aprecia qualidade, performance e elegância.",
            style: "Amadeirado Especiado"
        },
        {
            name: "Polo Blue",
            brand: "Ralph Lauren",
            image: "perfumes_images/essencias_masculinas/polo_blue_ralph_lauren.jpg",
            description: "Uma fragrância aquática que evoca a liberdade dos oceanos. Polo Blue combina melão e pepino com notas marinhas refrescantes. O coração de gerânio e sálvia é complementado por uma base de almíscar e madeiras suaves. É um perfume que evoca aventura, liberdade e um estilo de vida descontraído à beira-mar.",
            style: "Aquático Aromático"
        },
        {
            name: "Amaze",
            brand: "Ajmal",
            image: "perfumes_images/essencias_masculinas/amaze_ajmal.jpg",
            description: "Uma fragrância que surpreende e encanta. Amaze é um oriental especiado que combina especiarias exóticas com madeiras preciosas e resinas aromáticas. A riqueza dos ingredientes orientais cria uma composição complexa e fascinante. É um perfume que evoca mistério, sofisticação e a riqueza da tradição perfumística árabe.",
            style: "Oriental Especiado"
        },
        {
            name: "Animale",
            brand: "Animale",
            image: "perfumes_images/essencias_masculinas/animale.jpg",
            description: "Uma fragrância que desperta os instintos mais primitivos. Animale é um oriental amadeirado que combina especiarias quentes com madeiras selvagens e almíscar animal. A composição intensa e sensual evoca masculinidade bruta e magnetismo animal. É um perfume para o homem que não teme mostrar seu lado mais selvagem e sedutor.",
            style: "Oriental Amadeirado"
        },
        {
            name: "Azzaro The Most",
            brand: "Azzaro",
            image: "perfumes_images/essencias_masculinas/azzaro_the_most.jpg",
            description: "Para o homem que quer ser o mais desejado. The Most é uma fragrância ambarada especiada que combina cardamomo e caramelo com âmbar amadeirado. A composição viciante e sedutora evoca poder, confiança e um magnetismo irresistível. É um perfume para o homem que joga para ganhar e sempre conquista o que deseja.",
            style: "Ambarado Especiado"
        },
        {
            name: "CH 212 VIP Masculino",
            brand: "Carolina Herrera",
            image: "perfumes_images/essencias_masculinas/ch_212_vip_masculino.jpg",
            description: "Uma fragrância VIP para homens de sucesso. 212 VIP combina lima e gengibre com especiarias quentes e madeiras nobres. A composição sofisticada evoca exclusividade, sucesso e um estilo de vida privilegiado. É um perfume para o homem que conquistou seu lugar no topo e sabe aproveitar os privilégios da vitória.",
            style: "Amadeirado Especiado"
        },
        {
            name: "Club de Nuit",
            brand: "Armaf",
            image: "perfumes_images/essencias_masculinas/club_de_nuit_armaf.jpg",
            description: "Uma fragrância noturna para conquistadores. Club de Nuit é um chipre frutado que combina abacaxi e bergamota com rosas e bétula. A base esfumaçada de almíscar e âmbar confere mistério e sedução. É um perfume para o homem que domina a noite, que sabe como conquistar e impressionar em qualquer situação.",
            style: "Chipre Frutado"
        },
        {
            name: "Dolce Gabbana Masculino",
            brand: "Dolce & Gabbana",
            image: "perfumes_images/essencias_masculinas/dolce_gabbana_masculino.jpg",
            description: "Uma fragrância que captura a essência da masculinidade italiana. Esta composição amadeirada aromática combina bergamota e lavanda com um coração de tabaco e especiarias. A base de sândalo e cedro confere elegância mediterrânea. É um perfume que evoca a dolce vita, o charme italiano e uma masculinidade sofisticada e natural.",
            style: "Amadeirado Aromático"
        }
    ],
    
    "essencias-femininas": [
        {
            name: "Coco Mademoiselle",
            brand: "Chanel",
            image: "perfumes_images/essencias_femininas/coco_mademoiselle_chanel.jpg",
            description: "Uma fragrância que define elegância moderna. Coco Mademoiselle é um oriental floral que combina laranja e bergamota com um coração de rosa e jasmim. A base de patchouli, vetiver e baunilha confere sofisticação e sensualidade. É um perfume para a mulher independente, elegante e misteriosa, que carrega consigo o espírito revolucionário de Coco Chanel.",
            style: "Oriental Floral"
        },
        {
            name: "J'adore",
            brand: "Dior",
            image: "perfumes_images/essencias_femininas/jadore_dior.jpg",
            description: "Uma ode à feminilidade em sua forma mais pura. J'adore é um floral luminoso que combina ylang-ylang, rosa damascena e jasmim sambac em uma composição radiante. A elegância das flores mais nobres da perfumaria cria uma assinatura olfativa atemporal. É um perfume que celebra a mulher em toda sua glória, evocando beleza, graça e feminilidade absoluta.",
            style: "Floral"
        },
        {
            name: "Angel",
            brand: "Thierry Mugler",
            image: "perfumes_images/essencias_femininas/angel_thierry_mugler.jpg",
            description: "Uma fragrância revolucionária que criou a família gourmand. Angel combina bergamota e coco com um coração de mel, caramelo e chocolate. A base de patchouli, baunilha e âmbar confere profundidade e sensualidade. É um perfume para a mulher ousada e única, que não teme ser diferente e deixar uma impressão inesquecível por onde passa.",
            style: "Oriental Gourmand"
        },
        {
            name: "Olympéa",
            brand: "Paco Rabanne",
            image: "perfumes_images/essencias_femininas/olympea_paco_rabanne.jpg",
            description: "Uma fragrância divina para deusas modernas. Olympéa é um floral aquático que combina água de jasmim e gengibre com um coração de flor de sal e baunilha. A base de sândalo e âmbar confere sensualidade e poder. É um perfume que evoca força feminina, vitória e uma beleza que conquista e inspira, como as deusas do Olimpo.",
            style: "Floral Aquático"
        },
        {
            name: "My Way",
            brand: "Giorgio Armani",
            image: "perfumes_images/essencias_femininas/my_way_giorgio_armani.jpg",
            description: "Uma fragrância que celebra a jornada pessoal de cada mulher. My Way é um floral amadeirado que combina bergamota e flor de laranjeira com um coração de tuberosa e jasmim. A base de baunilha, almíscar branco e cedro confere modernidade e sofisticação. É um perfume para a mulher que escolhe seu próprio caminho e vive a vida à sua maneira.",
            style: "Floral Amadeirado"
        },
        {
            name: "Sì Passione",
            brand: "Giorgio Armani",
            image: "perfumes_images/essencias_femininas/si_passione_giorgio_armani.jpg",
            description: "Uma fragrância que expressa paixão em sua forma mais intensa. Sì Passione é um floral frutado que combina pêra e groselha preta com um coração de rosa e heliotrópio. A base de baunilha e madeiras confere calor e sensualidade. É um perfume para a mulher apaixonada, que vive intensamente e não tem medo de mostrar seus sentimentos.",
            style: "Floral Frutado"
        },
        {
            name: "Delina La Rosée",
            brand: "Parfums de Marly",
            image: "perfumes_images/essencias_femininas/delina_la_rose_parfums_de_marly.jpg",
            description: "Uma interpretação fresca e matinal da icônica Delina. La Rosée combina bergamota e pêra com um coração de rosa e peônia. A base suave de almíscar branco e madeiras claras confere delicadeza e elegância. É um perfume que evoca o orvalho da manhã sobre pétalas de rosa, simbolizando pureza, frescor e uma feminilidade radiante.",
            style: "Floral Rosa"
        },
        {
            name: "Idôle",
            brand: "Lancôme",
            image: "perfumes_images/essencias_femininas/idole_lancome.jpg",
            description: "Uma fragrância para a nova geração de mulheres. Idôle é um floral limpo que combina pêra e bergamota com um coração de rosa e jasmim. A base de almíscar branco e madeiras sustentáveis confere modernidade e consciência. É um perfume para a mulher do futuro, que inspira e lidera, sendo um ídolo para outras mulheres.",
            style: "Floral Limpo"
        },
        {
            name: "Good Girl",
            brand: "Carolina Herrera",
            image: "perfumes_images/essencias_femininas/good_girl_carolina_herrera.jpg",
            description: "A dualidade feminina capturada em uma fragrância. Good Girl combina tuberosa e jasmim com fava tonka torrada e cacau. O icônico frasco stiletto simboliza o poder feminino. É um perfume que celebra a complexidade da mulher moderna, que pode ser doce e rebelde, elegante e ousada, sempre mantendo seu mistério e charme irresistível.",
            style: "Âmbar Floral"
        },
        {
            name: "Hypnose",
            brand: "Lancôme",
            image: "perfumes_images/essencias_femininas/hypnose_lancome.jpg",
            description: "Uma fragrância hipnotizante e envolvente. Hypnose é um oriental floral que combina maracujá e bergamota com um coração de jasmim e gardênia. A base de baunilha, vetiver e musgo confere profundidade e mistério. É um perfume para a mulher magnética e sedutora, que possui o poder de hipnotizar com seu olhar e sua presença marcante.",
            style: "Oriental Floral"
        },
        {
            name: "Burberry Her",
            brand: "Burberry",
            image: "perfumes_images/essencias_femininas/burberry_her.jpg",
            description: "Uma fragrância que captura o espírito jovem e vibrante de Londres. Her é um floral frutado que combina groselha preta e framboesa com um coração de violeta e jasmim. A base de almíscar e madeiras confere modernidade britânica. É um perfume para a mulher contemporânea, que equilibra tradição e inovação com elegância natural.",
            style: "Floral Frutado"
        },
        {
            name: "Kayali Vanilla 28",
            brand: "Kayali",
            image: "perfumes_images/essencias_femininas/kayali_vanilla_28.jpg",
            description: "Uma celebração da baunilha em sua forma mais luxuosa. Vanilla 28 é um gourmand oriental que combina baunilha de Madagascar com âmbar e almíscar. A riqueza e cremosidade da composição evoca conforto e sensualidade. É um perfume para a mulher que aprecia o luxo dos ingredientes mais preciosos e não teme ser memorável.",
            style: "Oriental Gourmand"
        },
        {
            name: "212 Heroes Feminino",
            brand: "Carolina Herrera",
            image: "perfumes_images/essencias_femininas/212_heroes_feminino.jpg",
            description: "Uma fragrância que celebra a heroína urbana moderna. 212 Heroes combina pêra e bergamota com um coração de peônia e almíscar. A base amadeirada confere força e determinação. É um perfume para a jovem mulher que enfrenta desafios urbanos com coragem, que é heroína de sua própria história e inspira outras a serem corajosas.",
            style: "Floral Frutado"
        },
        {
            name: "Acqua di Gioia",
            brand: "Giorgio Armani",
            image: "perfumes_images/essencias_femininas/aqua_di_gio_feminino.jpg",
            description: "Uma fragrância aquática que evoca a alegria do Mediterrâneo. Acqua di Gioia combina limão e menta com um coração de peônia e jasmim. A base de cedro e almíscar confere frescor duradouro. É um perfume que celebra a conexão da mulher com a natureza, evocando liberdade, pureza e uma alegria de viver contagiante.",
            style: "Aquático Floral"
        },
        {
            name: "Lady Million",
            brand: "Paco Rabanne",
            image: "perfumes_images/essencias_femininas/lady_million_paco_rabanne.jpg",
            description: "Para a mulher que vale um milhão. Lady Million é um floral amadeirado que combina néroli e framboesa com um coração de jasmim e flor de laranjeira. A base de patchouli e mel confere opulência e sensualidade. É um perfume que evoca luxo, poder e uma feminilidade magnética que atrai riqueza e admiração por onde passa.",
            style: "Floral Amadeirado"
        },
        {
            name: "Narciso Rodriguez For Her",
            brand: "Narciso Rodriguez",
            image: "perfumes_images/essencias_femininas/narciso_rodriguez.jpg",
            description: "Uma fragrância minimalista e sofisticada. For Her é um floral amadeirado que combina bergamota e pêssego com um coração de rosa e almíscar. A simplicidade elegante da composição reflete a estética clean do designer. É um perfume para a mulher moderna e confiante, que encontra beleza na simplicidade e força na autenticidade.",
            style: "Floral Amadeirado"
        },
        {
            name: "Jean Paul Gaultier La Belle",
            brand: "Jean Paul Gaultier",
            image: "perfumes_images/essencias_femininas/jean_paul_gaultier_feminino.jpg",
            description: "Uma fragrância que celebra a beleza em todas as suas formas. La Belle é um floral gourmand que combina pêra e bergamota com um coração de gardênia e baunilha. A base de sândalo e âmbar confere sensualidade e elegância. É um perfume para a mulher que se sente bela por dentro e por fora, irradiando confiança e charme natural.",
            style: "Floral Gourmand"
        },
        {
            name: "Scandal",
            brand: "Jean Paul Gaultier",
            image: "perfumes_images/essencias_femininas/scandal_jean_paul_gaultier.jpg",
            description: "Uma fragrância escandalosamente irresistível. Scandal é um chipre gourmand que combina mel e gardênia com patchouli. A doçura viciante do mel contrasta com a elegância das flores brancas. É um perfume para a mulher livre e ousada, que não tem medo de causar escândalo e ser o centro das atenções onde quer que vá.",
            style: "Chipre Gourmand"
        },
        {
            name: "Egeo Dolce",
            brand: "O Boticário",
            image: "perfumes_images/essencias_femininas/egeo_dolce_boticario.jpg",
            description: "Uma fragrância doce e jovial, perfeita para momentos de alegria. Egeo Dolce é um floral frutado que combina frutas vermelhas e pêssego com um coração de flores delicadas e baunilha. A base suave de almíscar confere leveza e frescor. É um perfume para a mulher jovem e divertida, que espalha doçura e alegria por onde passa.",
            style: "Floral Frutado Gourmand"
        },
        {
            name: "Good Girls",
            brand: "Carolina Herrera",
            image: "perfumes_images/essencias_femininas/good_girls_carolina_herrera.jpg",
            description: "Uma versão mais jovem e vibrante da icônica Good Girl. Good Girls combina tuberosa e jasmim com notas mais frescas e modernas. A composição mantém a dualidade feminina mas com um toque mais descontraído. É um perfume para jovens mulheres que estão descobrindo seu poder feminino e aprendendo a equilibrar doçura e força.",
            style: "Floral Moderno"
        },
        {
            name: "Hugo Boss Feminino",
            brand: "Hugo Boss",
            image: "perfumes_images/essencias_femininas/hugo_boss_feminino.jpg",
            description: "Uma fragrância que define elegância feminina contemporânea. Esta composição floral amadeirada combina bergamota e pêssego com um coração de rosa e jasmim. A base de cedro e almíscar confere sofisticação moderna. É um perfume para a mulher profissional e elegante, que equilibra feminilidade e força com naturalidade e confiança.",
            style: "Floral Amadeirado"
        },
        {
            name: "Reyna",
            brand: "Maison Alhambra",
            image: "perfumes_images/essencias_femininas/reyna_mayson_alhambra.jpg",
            description: "Uma fragrância real e majestosa. Reyna é um oriental floral que combina especiarias orientais com flores exóticas e madeiras preciosas. A riqueza da composição evoca realeza e poder feminino. É um perfume para a mulher que se sente uma rainha, que comanda respeito e admiração com sua presença magnética e elegância natural.",
            style: "Oriental Floral"
        },
        {
            name: "Lahdath",
            brand: "Lattafa",
            image: "perfumes_images/essencias_femininas/lahdath_lattafa.jpg",
            description: "Uma fragrância que marca momentos especiais. Lahdath é um floral oriental que combina notas frescas com especiarias suaves e madeiras preciosas. A composição equilibrada evoca celebração e alegria. É um perfume para momentos importantes da vida, que cria memórias olfativas duradouras e marca presença de forma elegante e memorável.",
            style: "Floral Oriental"
        },
        {
            name: "Good Girls Légère",
            brand: "Carolina Herrera",
            image: "perfumes_images/essencias_femininas/good_girls_legere_carolina_herrera.jpg",
            description: "Uma interpretação mais leve e aérea da Good Girl. Légère mantém a dualidade feminina mas com uma abordagem mais sutil e delicada. A composição floral é mais etérea, perfeita para uso diurno. É um perfume para a mulher que prefere elegância discreta, que seduz com sutileza e conquista com sua graça natural e feminilidade refinada.",
            style: "Floral Delicado"
        }
    ],
    
    "essencias-unissex": [
        {
            name: "Kenzo Flower",
            brand: "Kenzo",
            image: "perfumes_images/essencias_unissex/kenzo_flower.jpg",
            description: "Uma fragrância que celebra a beleza simples e pura das flores. Flower é um floral aquático que combina violeta e rosa com notas verdes frescas. A composição minimalista e elegante evoca a filosofia zen da marca. É um perfume para quem aprecia a beleza na simplicidade, que encontra paz e harmonia na conexão com a natureza.",
            style: "Floral Aquático"
        },
        {
            name: "Pistacchio Intenso",
            brand: "FLUY",
            image: "perfumes_images/essencias_unissex/pistacchio_intenso_fluy.jpg",
            description: "Uma fragrância gourmand única e viciante. Pistacchio Intenso combina a cremosidade do pistache com notas florais delicadas e uma base amadeirada suave. A originalidade da composição cria uma experiência olfativa memorável e diferenciada. É um perfume para personalidades únicas, que não temem ser diferentes e apreciam ingredientes inusitados.",
            style: "Gourmand Floral"
        },
        {
            name: "Light Blue",
            brand: "Dolce & Gabbana",
            image: "perfumes_images/essencias_unissex/dolce_gabbana_light_blue.jpg",
            description: "Uma fragrância mediterrânea que evoca verão eterno. Light Blue combina limão siciliano e maçã verde com notas marinhas e florais. A leveza e frescor da composição evoca liberdade e alegria de viver. É um perfume versátil e atemporal, perfeito para quem busca frescor, naturalidade e uma conexão com o mar Mediterrâneo.",
            style: "Cítrico Aquático"
        },
        {
            name: "Royal Âmbar",
            brand: "Orientica",
            image: "perfumes_images/essencias_unissex/royal_amber.jpg",
            description: "Uma fragrância real e opulenta. Royal Âmbar é um oriental rico que combina âmbar dourado com especiarias preciosas e madeiras nobres. A riqueza da composição evoca luxo e realeza. É um perfume para quem aprecia ingredientes preciosos e não teme mostrar sofisticação, evocando poder, elegância e um toque de mistério oriental.",
            style: "Oriental Âmbar"
        },
        {
            name: "Sabah",
            brand: "Sabah",
            image: "perfumes_images/essencias_unissex/sabah.jpg",
            description: "Uma fragrância que evoca o amanhecer e novos começos. Sabah combina notas frescas matinais com especiarias suaves e madeiras aromáticas. A composição equilibrada evoca esperança e renovação. É um perfume para quem valoriza cada novo dia como uma oportunidade, que encontra beleza nos pequenos momentos e aprecia a simplicidade da vida.",
            style: "Oriental Fresco"
        },
        {
            name: "Shaheen Silver",
            brand: "Lattafa",
            image: "perfumes_images/essencias_unissex/shaheen_silver_lattafa.jpg",
            description: "Uma fragrância que brilha como prata. Shaheen Silver é um oriental moderno que combina notas metálicas com especiarias contemporâneas e madeiras futuristas. A composição inovadora evoca modernidade e sofisticação. É um perfume para personalidades visionárias, que estão sempre um passo à frente e não temem abraçar o futuro.",
            style: "Oriental Metálico"
        },
        {
            name: "Code",
            brand: "Giorgio Armani",
            image: "perfumes_images/essencias_unissex/code_giorgio_armani.jpg",
            description: "Um código olfativo de elegância e mistério. Code é um oriental especiado que combina bergamota com especiarias orientais e madeiras preciosas. A sofisticação da composição evoca segredos e sedução. É um perfume para quem possui seus próprios códigos, que mantém um ar de mistério e conquista através da elegância e do charme sutil.",
            style: "Oriental Especiado"
        },
        {
            name: "Armani",
            brand: "Giorgio Armani",
            image: "perfumes_images/essencias_unissex/armani_giorgio_armani.jpg",
            description: "A essência da elegância italiana. Esta fragrância captura o DNA olfativo da marca Armani, combinando sofisticação mediterrânea com modernidade cosmopolita. A composição equilibrada evoca o estilo atemporal e a qualidade impecável da marca. É um perfume para quem aprecia a verdadeira elegância, que nunca sai de moda e sempre impressiona.",
            style: "Elegante Atemporal"
        },
        {
            name: "Mayar Cherry",
            brand: "Lattafa",
            image: "perfumes_images/essencias_unissex/mayar_cherry_lattafa.jpg",
            description: "Uma fragrância que celebra a doçura da cereja. Mayar Cherry é um gourmand frutado que combina cerejas maduras com especiarias orientais e madeiras suaves. A doçura natural da fruta é equilibrada por notas mais sofisticadas. É um perfume para quem aprecia fragrâncias doces mas sofisticadas, que evocam alegria, juventude e um toque de nostalgia.",
            style: "Frutado Gourmand"
        }
    ]
};
