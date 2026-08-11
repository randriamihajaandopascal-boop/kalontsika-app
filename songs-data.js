const songsData = [
  {
    id: 1,
    title: "Aepa epa epa alamiaso",
    artist: "skoto",
    audio: "assets/audio/aepaepaepaalamiaso.mp3",
    lyrics: "aepa epa epa alamiaso )*2\nFa tsy hinanako ravitoto alamiaso\nTsy tiko skoto malotoloto alamiaso\nFa tsy hinanako mangahazo alamiaso\nTsy tiko skoto malazolazo alamiaso"
  },
  {
    id: 2,
    title: "Akela harahinay",
    artist: "skoto",
    audio: "assets/audio/akelaarahinay.mp3",
    lyrics: "Jungle nay no diavinay ka faly izahay\nTongotray ho kinga , tsy ho kivy izahay\nEny jungle nay no diavinay ka faly \nNy lalàna ao an-tsaina \nAkela harahinay \nYaou, yaou, yap, yap, yaou ( bis) \nMahazoa mihaza , ry louveteaux"
  },
  {
    id: 3,
    title: "Akondro re no maniry",
    artist: "skoto",
    audio: "assets/audio/Akondrorenomaniry.mp3",
    lyrics: "Akondro re no maniry ao an-tanananay\nAkondro hono fa firy akondro ray dia ray \nAkondro re no maniry ao an-tanananay\nAkondro hono fa firy akondro roa dia roa \nAkondro re no maniry ao an-tanananay\nAkondro hono fa firy akondro telo dia telo \nAkondro re no maniry ao an-tanananay\nAkondro hono fa firy akondro efatra dia efatra \nAkondro re no maniry ao an-tanananay\nAkondro hono fa firy akondro dimy dia dimy \nAkondro re no maniry ao an-tanananay\nAkondro hono fa firy akondro enina dia enina \nAkondro re no maniry ao an-tanananay\nAkondro hono fa firy akondro fito dia fito \nAkondro re no maniry ao an-tanananay\nAkondro hono fa firy akondro valo dia valo \nAkondro re no maniry ao an-tanananay\nAkondro hono fa firy akondro be dia be"
  },
  {
    id: 4,
    title: "Andeha hilasy",
    artist: "MiM",
    audio: "assets/audio/AndehaHilasy.mp3",
    lyrics: "andeha hilasy antsaha zareo\nHihirahira sy hiray feo\nMiara dia,mifankatia,miaraka mandihy\nSkoto mamboly fitia \nLalao iraisina no ao\nFanabeazana no atao\nSampana mavo,maintso,mena samy manao Fanekena\n(Panazava/Tanora mim) mitohy fahendrena"
  },
  {
    id: 5,
    title: "Belimama,Petolopeto,asio sira,",
    artist: "MiM",
    audio: "assets/audio/Belimana.mp3",
    lyrics: "Belimama belimama belimamabelimama belimama belimama\n\nPetolopeto \nNous sommes les petolokawa \nElle a dit e ! (*2) \nNous sommes le kawa \nMakaroka (*2) \nNous sommes le kawa \nSommes, sommes(*3) \nNous sommes le kawa\n\nTenda gisa, tenda gana oe oe oe\nZingozina zingozana oe oe oe\n1.  Asina sira )*3 sira)*4 oa\nSira*3 sira *4 oa\n2.  Asio seza)*3 ipetrahana\nAn an an seza *3 seza*4\n3.  Asio stylo)*3 anoratana\nAn an an stylo*3 stylo*4 oa  \n\n\nMoa tsy ho faty va ho an ny tanindrazana an\nMiasa miasa miandry anao ny tanindrazana an\nMoa tsy ho faty va ho an ny tanindrazana an\nMiasa miasa miandry anao ny taninao\nMiasa miasa miandry anao ny namanao\nMiasa miasa miandry anao ny tanindrazana"
  },
  {
    id: 6,
    title: "Belzeboba",
    artist: "skoto",
    audio: "assets/audio/Berisaboba.mp3",
    lyrics: "eh eh eh,eh ya e e belzeboba\nNy lalak ombanao tsy ombako\nNy toetra ratsinao tsy ahoako belzeboba\nNy lalak ombanao tsy ombako"
  },
  {
    id: 7,
    title: "Dia nianga vao maraina",
    artist: "skoto",
    audio: "assets/audio/dianiangavaomaraina.mp3",
    lyrics: "1-Dia nianga vao maraina Hamakivaky lohasaha Tendrombohitra sy havoana tsy maintsy ho afaka Ka raha sendra (2) Ny hadrodroana, Tsy ampy iray minitra monja dia ho afaka2.Ny kitapo sy ny baka No hany sisa anananay Ka ny fotaka mandrevo No hany namana"
  },
  {
    id: 8,
    title: "Diavolana",
    artist: "MiM",
    audio: "assets/audio/Diavolana.mp3",
    lyrics: "O Diavolana \nDiavolana fenomanana ny any aminay e \nTakariva somambisamby ny any aminay e \nVoromanga no mikalo ny any aminay e \nMahavariana ireo mpandalo ny any aminay e\nNa mavesatra ny barda, \nNa dia mafy aza ny komba \nTsy maintsy tonga izahay fa manin-kavana \nNa dia manta aza izany vary, \nNa masiso aza ny lasary  \nTsy maintsy tonga izahay fa manin-kavana"
  },
  {
    id: 9,
    title: "Fa izay no itako,izay no tsapako",
    artist: "skoto",
    audio: "assets/audio/Faizaynoitako.mp3",
    lyrics: "Nivadibadika ny tantara\nka nijerijery ny zava misy tany ho any aho e!!!\n1-Vahoaka mandritra fihavanana \nTanora mandrato fianarana no maresaka e\nOlona mitady asa, asa mitady ny vokatra, vokatra ho any mpamokatra\nFa izay no hitako, izay no tsapako,izay no maresaka resaka resaka tolona\n2-Mitolona @tsy fahapina, mitolona @tsy fitovina fa mafy ady izy e\nTsy ekenay,tsy ekenay zava manimba ny taninay ka tsy avelanay\n3-Tsy ekena ny zava mitranga fa misy ny tsy misaranga fa mafy ady izy e\nTsy ekenay,tsy ekenay zava manimba ny taninay ka tsy avelanay\n4-Hozogozony ny vatany hogoty ao atramin'ny fakany fa mafy ady izy e!!!\nMila vahoaka nu tolona, mila vahoaka ny vondrona fa mafy ady izy e!!!\nFa izay no hitako, izay no tsapako,izay no maresaka resaka resaka tolona\nMafy ady izy e,mafy ady izy e!!!"
  },
  {
    id: 10,
    title: "Fiainam-pifaliana",
    artist: "MiM",
    audio: "assets/audio/Fiainam-Pifaliana.mp3",
    lyrics: "1-Fiainam-pifaliana  \nAo anaty fitsikiana \nMampikoriana andronay\nFa hehy lalandava  \nSy hira ao am-bava  \nNo mampisava ny sentonay \nRef:Isika mantsy dia mirakitra ao anaty\nFo aravoana fo tia dia tia \nIzahao ka tsapao \nFa ny tena itempony sy \nandaniany ny fotoana asa soa \nfifaliana fiadanam-po \n2-Na hain‟andro be mandoro \nEo an-dala mahatoro \nTsy hampikoro ny herinay \nNa oram-batravatra \nMahamely sy mihatra \nTsy mba handratra ny herinay"
  },
  {
    id: 11,
    title: "He tazanay",
    artist: "skoto",
    audio: "assets/audio/Hetazanay.mp3",
    lyrics: "He tazanay mitsiky ery \nNy andro ho avy mankaty \nMiainga izahay \nHitsena ny ho avinay \nKa velon-kira ny fonay \nLa la la la herin-tsaina \nFo tena tia no tokin'aina \nFandavan-tena  notefena \nNo Enti-manompo firenena \nNy malagasy manantena \nFiainan-tsambatra omena  \nFo tanora anay \nO! avia avia O! avia avia \nMankaty fa vonona izahay"
  },
  {
    id: 12,
    title: "Hira 15em MIM",
    artist: "MiM",
    audio: "assets/audio/hira15emMIM.mp3",
    lyrics: "Tanjona sy tsinjo lavitra\nNanefena ny saiko \nTondro zotra mafy rafitra\nEfa nakatoaviko\nHo mpamakilay mahalia lalana\n15 taona izao\nNo nisataranay hatratra\nIzany fenitra\nRaha toa ka hisy sakana\nAizina sy ankaso\nJesosy no mitantana\nAndry afo sy andry rahona\nHanazava hatrany izany lalana\n15 taona izao\nNo anohizanay hanatsara\nIzany fenitra\nNo anohizanay hanatsara\nIzany MPAMAKILAY"
  },
  {
    id: 13,
    title: "Ho Mpamakilay aho",
    artist: "MiM",
    audio: "assets/audio/Hompamakilay.mp3",
    lyrics: "Ho mpamakilay aho zay no tena tiko\nHo mpamakilay aho zay no faniriko\nHo mpamakilay aho ra tsy fantatra ise\nOke oke tsara ny Mpamakilay\n\n1-Nony tonga ny maraina misy hazavana be\nMiramirana ny saina hamonjy haZa lehibe\nDe nasaina sefotenina itady an'i mogly\nOke oke mbola mavo aho t@ izany\n\n2- Tonga ary ko ny fotona \nAnaovana ny karajy\nNefa za de mbola nona\nMiroso hatrany ny dia\nNotaomin ny ra sefonay\nFa we Mpamakilay\nOke oke mbola maintso aho t@ izany\n\n3- Ho fanasina ny tany\nTanjona iraha manana\nSy ho fahazavana hatrany\nZany no hoe MPIANDALANA\nAnangana ireo tetik'asa\nMiaraka @'ny benitany\nOke oke efa mena aho t@ izany\nOke oke tsara ny Mpamakilay\nOke oke zany no niainanay\n"
  },
  {
    id: 14,
    title: "Ho tiavinay mandrakizay",
    artist: "skoto",
    audio: "assets/audio/Hotiavinaymandrakizay.mp3",
    lyrics: "Ho tiavinay mandrakizay Madagasikara\nFa lovasoa napetraky ny razanay\nVoasoratra Mazava ao am-po ny anarany \nIrinay ho soa hiadana tokoa\nFa nosy maminay Madagasikara\nZao Malagasy rehetra izao Ho tiavinay\nHo tiavinay fa ireo tokoa maha izy anay\nHiezaka tokoa izahay ho azy ireo\nIrinay ho soa hiadana tokoa\nFa nosy maminay Madagasikara\nTompo o tahio Madagasikara"
  },
  {
    id: 15,
    title: "Indro fa hariva",
    artist: "skoto",
    audio: "assets/audio/indrofahariva.mp3",
    lyrics: "1-Indro fa hariva \nNy masoandro mody indray \nAizina mangina \nMonina eto an-dasinay \n2-Torimaso mamy \nNo iriny aina  izao \nNofy soa ho tamy \nMba handrotsirotsy \n\nRef: Tompo o jereo \nZahay jereo \nIreo anjelinao \nMba iraho izao \nHiari-tory eto \nHiambina ny lasinay"
  },
  {
    id: 16,
    title: "Io io Finaritra ve",
    artist: "MiM",
    audio: "assets/audio/IoIoFinaritrave.mp3",
    lyrics: "Io io Finaritra ve raodrina )*2\nIo io Finaritra manakory barakely e\nIo Io manahona ny fianakavina e\nIo io Finaritra ve raodrina\nAndeha re mba hiaraka hiasa\nAntampo tanety na andoha saha\nHifanina anao valink asa\nOry tanora maro andeha mba hizara \ntsara ny mifankatia fa raha razana ray\nSamy rà Malagasy voalaza ny zeografy \nFa ty nosy ty sary tongotra havia"
  },
  {
    id: 17,
    title: "Iza no ho namanay",
    artist: "MiM",
    audio: "assets/audio/izanonamanay.mp3",
    lyrics: "1- Iza no ho namanay ( 2) \nIza no ho ho namanay \nHamakivaky irony ala \nMisy jala feno tranon-kala \nNefa ny andro mamanala \nIza no ho namanay \nHo namanay, ho namanay \nIza no ho namanay \n2-  Izahay handeha koa(3)\nHamakivaky irony ala \nIrony ala misy jala \nJala feno tranon-kala \nNefa ny andro mamanala \nIzahay handeha koa \nIzahay , izahay \nIzahay handeha koa \n3-  Iza no ho namanay (3) \nHamakivaky renirano \nRano misy hazandrano \nHazandrano , vorondrano \nNefa zahatra ahi-drano \nIza no namanay \nHo namanay,ho namanay \nIza no ho namanay \n4-  Izahay andeha koa (3) \nHamakivaky renirano \nRano misy hazandrano \nHazandrano , vorondrano \nNefa zahatra ahi-drano \nIza no namanay \nHo namanay, ho namanay \n5-  Izahay andeha koa (3) \nHitety anâ€ŸI Madagasikara \nGasikara lova tsara \nHo anâ€Ÿny zanaka amam-para \nNefa tsy voazarazara"
  },
  {
    id: 18,
    title: "Iza no vonona",
    artist: "skoto",
    audio: "assets/audio/Izanovonona.mp3",
    lyrics: "Iza no hanolo-tena \nIza no hirahina  \nKa hanaiky tsy terena  \nNy baiko izay arahina \nHo mpanompo ho fanasina fanilo \nKa tsy handrarakilo \nIza no vonona hatrany hatrany\nHanaiky ny Tompo \nHanompo ka sahy \nHo vavolombelona \nHo amin ny asa fanompoana\nTsy mba mila tambiny \nHo amin'ny fampandrosoana \nNy tany tena maminay \nMoa azo atenaina fa isika \nNo hitarika hanao hoe \nNy aiko, ny saiko no ampiasaiko \nTsy an-tery ka hery \nAnatiko ao \nHanompoako Anao doria"
  },
  {
    id: 19,
    title: "kalon ny sahy",
    artist: "skoto",
    audio: "assets/audio/kalonnySahy.mp3",
    lyrics: "1.Na rivo mananala  \nNa ranonerika aza re \nTsy misy mahatana  \nIzany dianay \nNy tendrombihitra avo\nDia hotetizinay \nNy lohasaha sy alabe \nHo zahanay avokoa \n2.Na fotaka mandrevo \nNa karoa-bato ko are \nTsy misy mankaleo \nFa vonona izahay \nNy skoto tena sahy \nTsy manana ahiahy \nFa mizotra an-kasahiana \nFa efa zatra fihafiana \n3.Ireo sakaiza maro \nFadiranovana mijaly \nNoho ny fahantrana \n Mianjady aminy \nNo miandry antsika skoto\nHanafaka azy ireo \nSatria ny fanekena re \nNy ho @ny izao tontolo izao"
  },
  {
    id: 20,
    title: "Lay Tranonay",
    artist: "skoto",
    audio: "assets/audio/LAYTRANONAY.mp3",
    lyrics: "Taona maro lasa izay tsita ilay tanana\nEfitra sy tany hay, moana sy mangahiahy\nTaona maro lasa izay tsita ilay tanana\nMisy herinay niray nanamboatra ny asa\nIndro ny tanananay vita re lay tranonay\nMisy herinay niray nanamboatra ny asa\nTrano tsotra nefa soa, razanay no niasa\nHazo mafy avokoa, no narafitry ny fo\nTrano tsotra nefa soa, razanay no niasa\nTsiahinao ry tranonay ny andro teo aloha\nOlona maro nefa iray niarao anao ry tranonay\nTsiahinao ry tranonay ny andro teo aloha\nIzao ankehitriny izao, izahay no eto \nFon-jatovo vaovao no hiaro ny zoanao\nIzao ankehitriny izao, izahay no eto"
  },
  {
    id: 21,
    title: "Manainga ny hirako aho",
    artist: "skoto",
    audio: "assets/audio/manainga.mp3",
    lyrics: "1-An-dala mazava ny andro vao maraina soa \nManaiga ny hirako aho \nAn-dala mazava lasa isika, mandrosoa!\nVenteso ny hira hanako \n2- An-dala mandoro feno hafanana be \nManainga ny hirako aho \nAn-dala mandoro ihafio , andao , r se \nVenteso ny hira hanako. \n3- An-dalana maizina , ny kintana tsy eo\nManainga ny hirako aho \nAn-dalana maizina , henjano izany feo\nVenteso ny hira hanako \n4- Na ho aiza ny dia \nhalehantsika hatrizao \nHanainga ny hirako aho \nNa ho aiza ny dia hitety izao tontolo izao \nVenteso ny hira hanako"
  },
  {
    id: 22,
    title: "Maty sivy",
    artist: "skoto",
    audio: "assets/audio/maty.mp3",
    lyrics: "Ity re no tongotra mby an-dakana tsy mety ny dia raha miverina \nTsy mety ny dia raha miverina \nTsy maintsy mandroso/tafita ny anarany *2 \nTeti panorona mavita azy satri maty sivy tety anazy\nFa tsara paika sy tetika \nTsara paika sy tetika tandremo manova fihetsika *2\nTeti panorona= maty sivy * (2) \nMaty sivy Maty sivy Maty sivy poka indray mandeha\nTapa-hevitra ra-maty sivy de hanavatsava ny làlana \nLoza maro no misakana\nMisy ko reo no fitaka \nMitsofotsofoka @ lala-kely\nManavatsava @ arabe\nEfa resy, efa resy (3) \nFa be no vitsy \nNinabary tsy nahalala voky fa nisesika nanao be ambosika\nFalifaly fa nahita dimy\nFa dimy fa tsy voalohany\nFa voalohany ao Tamatavy\nFa ny faharoa ao Tananarivo \nFa ny fahatelo ao Majunga\nFa ny fahaefatra ao Toliara ,Fianarantsoa \nFa ny dimy any Diego"
  },
  {
    id: 23,
    title: "Miainga na ratsy ny andro",
    artist: "skoto",
    audio: "assets/audio/Miainganaratsynyandro.mp3",
    lyrics: "Isan andin: \nTanora ise, Avia ange \nHiara-dia ,Fa mahasoa \nTokoa , tokoa \nNy fianana ao ,An-dasy ao \nMitety havoana sy saha \nMihira , milalao ,Andao andao \n1. Miainga na ratsy ny andro \nZakaina tokoa ny hainandro \nMitety havoana sy saha \nMihira milalao \nAndao, andao \n2-Miasa manorin-tanàna\nFamaky no hany fiasana \nMikiry ny saina mazoto \nMihira , milalao ,Andao, andao\n3- Jereo tranobongo madio \nZahay no manorina anio \nKa eo miara-miaina \nMihira , milalao,Andao!andao\n4- Mianatra mamelon-tena \nMahandro rehefa avy niantsena \nMifarombadromboka miasa \nMihira, milalao ,Andao ! andao \n6-E Izany manao afon-dasy \nMirehitra ny dihy gasy \nLamako sy hiaka sy hehy \nMihira , milalao  \n5- Fianarana zavatra maro \nNo tena andaniana ny andro \nRehefa mba miala voly \nMihira, milalao,Andao! Andao  \n7- Torovana ka ndeh hatory \nIndreo izahay fa mivory \n(Atao Miadana be) Miantso ny Tompo, misaotra\nNy Ray an-danitra"
  },
  {
    id: 24,
    title: "Milokaloka",
    artist: "MiM",
    audio: "assets/audio/Milokaloka.mp3",
    lyrics: "Milokaloka mivavaka izy\nMampanatena fa hiova e\nKanefa indrisy fa mavandivandy\nIty zanak olombelona eto an-tany\nMireharaha manabanibany\nIreo akama oriory\nKanefa re zao ny ataovy an-tsaina\nHotsaraina ireo zavatra natao\nAnay skoto tsy mba manao izany \nFa mifanampy sy mifanoro\nAnay skoto de tsotra iany\nAtramy ise na ambony io na ambany"
  },
  {
    id: 25,
    title: "Miroso Miaradia",
    artist: "skoto",
    audio: "assets/audio/MirosoMiaradia.mp3",
    lyrics: "Miroso Miaradia\nMiatrika tarabolana\nMiroso Miaradia\nMiloko iray andia\nAkela balou koa sy ireo vahoaka hafa koa\nMogli sy ireo lou faly avokoa"
  },
  {
    id: 26,
    title: "Misy raharaha eto androany",
    artist: "skoto",
    audio: "assets/audio/Misyraharahaetoandroany.mp3",
    lyrics: "Ory jalama an an an)*2\nSamy mijerijery atsika na vahiny na tompon-tany, misy raharaha eto androany\nI koto fetsy sy maka e, misy raharaha eto androany\nTena mpamitaka gaigy lahy e, misy raharaha eto androany\nAlika lazainy kisoa vazaha e,misy raharaha eto androany\nSarety lazainy mandeha couran e,misy raharaha eto androany\nOry jalama ........ \nTananarivo grand ville,misy raharaha eto androany\nAo no fonena automobile,misy raharaha eto androany"
  },
  {
    id: 27,
    title: "Misy vahiny",
    artist: "MiM",
    audio: "assets/audio/MisyVahiny.mp3",
    lyrics: "(Misy vahiny e, ao antanana\nTambatambazo izy ireo mba ho tamana )*2\n(Hira sy lalao izay no andeha atao\nIsika rehetra izao no miara milalao )*2\nMisy vahiny......\nSkoto mikorana,totorebika,miara manafana lanonana antanana)*2\nMisy vahiny......"
  },
  {
    id: 28,
    title: "Mamy ny mody",
    artist: "skoto",
    audio: "assets/audio/MODYmody.mp3",
    lyrics: "Mody mody, mamy re no mody\nmody )*3\nMody fanafody re\nHava maro namana sakaiza tiana\nEfa miandry ao antrano ny hiaviana\nMody.........\nRay sy reny, zoky zandry, olontiana\nO mitsena @tsiky fifaliana \nMody.........\nToerana sy vohitra zay nitomboana\nMapidoboka sahady lay fitiavana\nMody.........\nTanindrazana lalaina tena tiavina\nRefa tonga ao an-tsaina fifaliana"
  },
  {
    id: 29,
    title: "Mogly",
    artist: "skoto",
    audio: "assets/audio/mogly.mp3",
    lyrics: ""
  },
  {
    id: 30,
    title: "Ndeh ho aiza ianareo",
    artist: "skoto",
    audio: "assets/audio/Ndehahoaizaianareo.mp3",
    lyrics: "Ndeha ho aiza ianareo no faly sy miramirana, sy mailamailaka lazao \nHo any an-tsaha izahay, hilalao izahay, hilalao izahay hilalao re roy \nKoa andeha ry zareo hiaraka aminay; ho finaritra tokoa ianareo re roy \nMba tantarao anay izay atao an-dasy ao no mafinaritra lazao \nHilalao izahay mikorana koa, kojakoja trano bongo no atao re roy \nKoa andeha ry zareo hiaraka aminay ho finaritra tokoa ianareo re roy"
  },
  {
    id: 31,
    title: "Ny fiainana an-dasy",
    artist: "skoto",
    audio: "assets/audio/Nyfiainana_an-dasy.mp3",
    lyrics: "Ny fiainana an-dasy dia mahafinaritra (2)  \nNy lasy dia mahafinaritra (2)  \nNy fiainana an-dasy dia mahadrodroka (2) \nNy lasy dia mahadrodroka (2)  \nNy fiainana an-dasy dia mampianatra (2) \nNy lasy dia mampianatra (2)"
  },
  {
    id: 32,
    title: "Ngomangoma",
    artist: "skoto",
    audio: "assets/audio/ngomangoma.mp3",
    lyrics: "Ngomangoma zaho,malahelo zaho\nManjombonjombodava nefa hihezaka hitraka\nIzao mamanay malahelo ny zanany,\nizao kosa aty varina milalao \nIzao dadanay malahelo ny zanany,\nizao kosa aty varina milasy \nIzao zokinay malahelo ny zandriny,\nizao kosa aty manembonembona azy \nIzao zandrinay malahelo ny zokiny,\nizao kosa aty manao afondasy \nIzao ny sipany malahelo ny ankiziny,\nizao kosa aty de tsy ampy safosafo!!!"
  },
  {
    id: 33,
    title: "O mama e lavitra aminay e",
    artist: "skoto",
    audio: "assets/audio/omama_ely.mp3",
    lyrics: "1.  Ô mama e e  lavitra aminay )*2\nAtsika ody atsika tsy tamana\n2. Gasikara e ! Tanindrazanay an)*2\nAtsika ody atsika tsy tamana\n3.  Tananarivo e ! kapitalinay a)*2\nAtsika ody atsika tsy tamana \n4.  32 ny fivondronanay a(*2\nAtsika ody atsika tsy tamana"
  },
  {
    id: 34,
    title: "Rodorodo nay",
    artist: "skoto",
    audio: "assets/audio/rodorodo.mp3",
    lyrics: "Rodorodo nay, rodorodonay(beso) )*2\nNy mpiandalana(rodorodonay)\nAmaky lalana (rodorodonay)\nNa andro merika, na oram baratra\nTsy misy mahasakana ny dia tongotra\nFa saina matotra no ikambanana\nF izany no tarigetrany \nMpiandalana ô ô ô\nRodorodoronay ........."
  },
  {
    id: 35,
    title: "Ry fifankatiavana o",
    artist: "skoto",
    audio: "assets/audio/Ryfifankatiavana.mp3",
    lyrics: "Ry fifankatiavana o fifankatiavana o\nAvia hiara dia aminay\nFahasalovan tavana hazavana\nNo hitondra herin aina vao\nIzahay hanorina tanàna fivondronana ho anao"
  },
  {
    id: 36,
    title: "Sampana MiM izahay",
    artist: "MiM",
    audio: "assets/audio/sampanamena.mp3",
    lyrics: "Sampana mena izahay vonona mandrakizay \nHiady ho an‟ny tanindrazana \nSampan mena ny mpamakilay \nIô, iô, ie, ie,ie(*2) \nN‟inoninona midona \nN‟inoninona mitranga \nSampana mena tsy maintsy mijoro\nTsy maintsy mitraka ary hiatrika \nHantrany mba ho tompon‟daka \nIô, iô, ie, ie,ie(*2) \nSampana maintso izahay vonona mandrakizay \nHiady ho an‟ny tanindrazana \nSampan maitso ny mpamakilay \nIô, iô, ie, ie,ie(*2) \nN‟inoninona midona \nN‟inoninona mitranga \nSampana maintso tsy maintsy mijoro\nTsy maintsy mitraka ary hiatrika \nHantrany mba ho tompon‟daka \nIô, iô, ie, ie,ie(*2)"
  },
  {
    id: 37,
    title: "Skoto handeha hilasy",
    artist: "skoto",
    audio: "assets/audio/skotoandehahilasy.mp3",
    lyrics: "Skoto* andeha hilasy ka velon kira fa hilalao\nMiara mientana mantsy ka tsy mba misy mifandao \nNade lavitra aza ny lalankely mbola ho aleha\nSkoto* ka tsy mba kivy na avy aza ny orambe \nHiran ny tily manako toy ny lamako tsy mba miato\nSkoto* andeha hilasy reo ka mifalifaly fo\nskoto* miara mamindra,ka e mirindra fa hilalao\nLasy mifindrafindra, tsara indrindra no atao\nNade mideza aza ny fiakarana izay aleha\nSkoto* mihirahira anaty ala maizimbe\nHiran ny skoto* manako toy ny lamako tsy mba miato\nSkoto* andeha hilasy reo ka mifalifaly fo\n\n*=MiM,Tily,Antily,Kiady,Mpanazava,Fanilo,..."
  },
  {
    id: 38,
    title: "Tily izahay ka Milalao",
    artist: "skoto",
    audio: "assets/audio/TILYIZAHAYKAMILALAO.mp3",
    lyrics: "Tily* izahay ka milalao ka milalao )*2\nTily re)*4 Tily izahay ka milalao \nFifaliana ao anaty ao(ao anaty ao))*2\nHa ha ha ha lasa hehy dia hitanao\nTananà no ampiasao no ampiasao )*2\nTa ta ta ta paika izany ka ahoana ianao\nNy sioka indray no andeha atao no andeha atao\nfio fio fio fio sioka izany tsarovinao\nDihy izao no anampio no anampio )*2\nTak tak tak tak dihy izany ka itsikio\nDoladola no andeha atao no andeha atao\nDoladola Doladola Doladola doladola ny mim izao*=skoto,MiM,Antily,Kiady,Mpanazava,Fanilo,..."
  },
  {
    id: 39,
    title: "Tsikitsiky ihany",
    artist: "skoto",
    audio: "assets/audio/Tsikitsikyihany.mp3",
    lyrics: "1. Mahagaga ihany, izato fihetsika isika eto an-tany \nFa mifanaratsy, mifanakiana hatrany hatrany\nRaha mba miasa dia lazaina tsingoloka izany \nRaha tsy mahatanty dia marary no hiafarany e!e!e \nREf: Tsikitsikitsikitsiky ihany eny tsiky ihany \nFiainam-pifaliana mahaliana tena tiana no vokatra izany, \nFo falifaly \nFo falifaly, ravoravo eny ravo hatrany \nKa hisononoka ery ny fiainanao \n1.  Raha mba mihomehy dia lazaina fa be vanivany\nNy maotina anefa dia bantiana hatrany hatrany \nRaha misariaka tena olona mianjona izany, \nNy be tsy miteny tena olona konjo hono izany e \nTsikitsikitsikitsiky ihany eny tsiky ihany \n2.  Aza mba kivy amin izay fanenjehana anao\nTsy mba nisy ve an izay tsy nety natao, \nRaha sendra ny kiana eritrereto sao marina izany\nDia ento amin-tsiky , \ntsiky ihany ny fiainana an-tany, he!heTsikitsikitsikitsiky......."
  },
  {
    id: 40,
    title: "Tsy ho levona",
    artist: "skoto",
    audio: "assets/audio/Tsyholevona.mp3",
    lyrics: "Tsy ho levona tsy ho levonareo ny anaranao ry mena tsy ho levona )*2\nTsy ho levona tsy ho levonareo ny anaranao ry MIM tsy ho levona )*2\nTsy ho levona tsy ho levonareo ny anaranao ry ... tsy ho levona )*2"
  },
  {
    id: 41,
    title: "valala",
    artist: "MiM",
    audio: "assets/audio/Valala.mp3",
    lyrics: "valala ve, oia, valala ve, oia\nLasa any andrefana any iza e\nNanidina,nikopaka\nJereo fa mitora jofy rahavako\nNy lohany,Ny lohany,Ny lohany voanjobory\nNy lohany,Ny lohany,Ny lohany voanjobory rahavako\nNy masony,ny masony, ny masony anakroa\nNy masony,ny masony,ny masony anakroa rahavako\nNy tratrany,ny tratrany,ny tratrany vatolampy\nNy tratrany,ny tratrany,ny tratrany vatolampy rahavako\nNy kibony,ny kibony,ny kibony agoradao\nNy kibony,ny kibony,ny kibony agoradao rahavako\nNy helany, ny helany, ny helany helatrano\nNy helany, ny helany, ny helany helatrano rahavako o \nNy fehany,ny fehany,ny fehany vodibasy\nNy fehany,ny fehany,ny fehany vodibasy rahavako o \nNy tongony,ny tongony,ny tongony so fa kely\nNy tongony,ny tongony,ny tongony so fa kely rahavako o \nvalala ve......."
  },
  {
    id: 42,
    title: "Voici venir la belle saison",
    artist: "skoto",
    audio: "assets/audio/voicivenirlabellesaison.mp3",
    lyrics: "Ref : Voici venir la belle saison \nAmis, marchons vers l‟aventure \nAbandonnons villes et maisons \nAmis, marchons vers l‟horizon \n1-Ceux qui ecoutent  \nsonner nos chants ardents  \nPrendront la route et nous marcherons devant \n2- Ceux qui nous suivent   \npar les chemins montants  \nVerront la rive d‟un monde resplendissant.  \n3- Si des souffrances   \nnos cœurs sont tourments  \nPleine d‟espérance  remettons- nous à chanter"
  },
  {
    id: 43,
    title: "Volana o!!!",
    artist: "skoto",
    audio: "assets/audio/Volano.mp3",
    lyrics: "Volana o!. volana o… \nIzahay manimanina ny any aminao volana o \nVolana o.. volana o…  \nIzahay manimanina ny any aminao volana o \nNy zanakantsaly sy ny lovitao   \nmiezaka mafy amin‟ny topo  \nHo eny amin‟ny volana o (2)  \nVolana o..  \nNy sampana maitso sy ny mpiandalana  \nMiezaka mafy amin‟ny mari-dàlana  \nHo eny amin‟ny volana o (2)  \nVolana o.."
  },
  {
    id: 44,
    title: "Vonona hiasa,heroy e",
    artist: "skoto",
    audio: "assets/audio/VononaHiasa.mp3",
    lyrics: "1-Vonona hiasa hatrany,heroy e heroy eFalifaly hatrany hatrany,heroy e heroy e Miray hina tsy ti hefitrefitra,heroy e heroy e Mahay mifanina,mahay mifandefitra,heroy e heroy e 2-zahay skoto no toy izao,heroy e heroy e Soa be no raisinao,heroy e heroy e Miray hina tsy ti hefitrefitra,heroy e heroy e Mahay mifanina,mahay mifandefitra,heroy e heroy e"
  },
  {
    id: 45,
    title: "Yo yo yepa yepa zay skoto aro",
    artist: "skoto",
    audio: "assets/audio/yoyoyepayepazayskotoaro.mp3",
    lyrics: "Yo yo yepa yepa zay skoto aro tsy mba kivy tsy milefa )*2Ty toa MiM aIsa e, isak'izay matsiaro an Roa e, roa no vavolombelonaTelo e, isan'AndriamanitraEfatra e, efatra no vavolombelonaDimy e, lohan'ny soratra MasinaEnina e, enina isan'ny maizinaFito e,"
  },
  {
    id: 46,
    title: "Youpi-Ya Ya",
    artist: "skoto",
    audio: "assets/audio/Youpi-Ya.mp3",
    lyrics: "Youpi-Ya ya ya (*4 \nJ'ai dansé avec le pana/sipa manjabe (*4\nAsio sira ny hena kisoa hinanako azy(*4 \nJ'ai conduit le super malette sans permis\nMofo dopaina sakafo maraina maplame tsaina (*4 \nYoupi-Ya ya ya (*4\nIakanjo parasily izy raha ho avy(*4"
  },
  {
    id: 47,
    title: "Zay herin-tsaina sy ny fo",
    artist: "skoto",
    audio: "assets/audio/zayherintsainasynyfo.mp3",
    lyrics: "1-  Zay herin-tsaina sy ny fo \nHo lamina avokoa \nHo enti-miasa hanasoa \nSy hampandroso koa \nFa lova tamin-drazanay \nHo tiavinay mandrakizay \nTy nosy maminay ity (Bis) \nMadagasikara malalanâ ny fo \n2-  Zay asa imasoanay \nSy zay rehetra hay \nHikendren-java-tsoa iray \nNy tanindrazanay \nZao Malagasy rehetra izao\nNy handrosoany no hatao \nHo fonjam-boninahitra ( Bis) \nMadagasikara malalanâ ny fo \n3-  Ry Andriamanitra o´ tahio madagasikaranay\nZay handrosoany mba ampio \nHo fiadananay \nNy Malagasy anie ho tia  \nAnao ka mba hifankatia \nHo herinay ny Nosinay ( Bis) \nMadagasikara malalanâ ny fo"
  },
  {
    id: 48,
    title: "Mavo Maintso Mena",
    artist: "MiM",
    audio: "assets/audio/chanson1.mp3",
    lyrics: "Zovy moa ianao ry MiM izay mijotra @in lalana iny \nMody mierika kely ao afara raha \nmandre ilay feona gitara \nMpamakilay² maminay \nSkoto maromaro tafaray  \nRaha sendra tratra hariva any ho any\nMientanentana ny eo an-tokontany \nsampana mena² maminay \nSkoto maromaro tafaray  \nRaha sendra tratra hariva any ho any\nMientanentana ny eo an-tokontany \nSampana maintso² maminay \nSkoto maromaro tafaray  \nRaha sendra tratra hariva any ho any\nMientanentana ny eo an-tokontany \nSampana mavo² maminay \nSkoto maromaro tafaray  \nRaha sendra tratra hariva any ho any\nMientanentana ny eo an-tokontany"
  },
  {
    id: 49,
    title: "Tanora Mendrika",
    artist: "MiM",
    audio: "assets/audio/chanson2.mp3",
    lyrics: "Zovy moa ianao ry MiM izay mijotra @in lalana iny \nMody mierika kely ao afara raha \nmandre ilay feona gitara \nMpamakilay² maminay \nSkoto maromaro tafaray  \nRaha sendra tratra hariva any ho any\nMientanentana ny eo an-tokontany \nsampana mena² maminay \nSkoto maromaro tafaray  \nRaha sendra tratra hariva any ho any\nMientanentana ny eo an-tokontany \nSampana maintso² maminay \nSkoto maromaro tafaray  \nRaha sendra tratra hariva any ho any\nMientanentana ny eo an-tokontany \nSampana mavo² maminay \nSkoto maromaro tafaray  \nRaha sendra tratra hariva any ho any\nMientanentana ny eo an-tokontany"
  }
];