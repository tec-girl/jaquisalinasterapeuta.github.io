/* Jaqui Salinas Terapeuta — idioma, WhatsApp y animaciones */
(function () {
  'use strict';

  var CONFIG = { whatsapp: '522221169215' };

  var WA_TEXT = {
    es: { general: 'Hola Jaqui, quiero agendar una sesión de terapia.', s1: 'Hola Jaqui, me interesa: Terapias Psicológicas.', s2: 'Hola Jaqui, me interesa: Desarrollo Personal.', s3: 'Hola Jaqui, me interesa: Mejora de Marca Personal.', s4: 'Hola Jaqui, me interesa: Terapia Familiar.', s5: 'Hola Jaqui, me interesa: Terapia de Parejas.', s6: 'Hola Jaqui, me interesa: Encontrarse a Uno Mismo.' },
    en: { general: 'Hi Jaqui, I would like to book a therapy session.', s1: 'Hi Jaqui, I am interested in: Psychological Therapy.', s2: 'Hi Jaqui, I am interested in: Personal Development.', s3: 'Hi Jaqui, I am interested in: Personal Brand Improvement.', s4: 'Hi Jaqui, I am interested in: Family Therapy.', s5: 'Hi Jaqui, I am interested in: Couples Therapy.', s6: 'Hi Jaqui, I am interested in: Finding Oneself.' },
    fr: { general: 'Bonjour Jaqui, je souhaite réserver une séance de thérapie.', s1: 'Bonjour Jaqui, je suis intéressé(e) par : Thérapies Psychologiques.', s2: 'Bonjour Jaqui, je suis intéressé(e) par : Développement Personnel.', s3: 'Bonjour Jaqui, je suis intéressé(e) par : Amélioration de la Marque Personnelle.', s4: 'Bonjour Jaqui, je suis intéressé(e) par : Thérapie Familiale.', s5: 'Bonjour Jaqui, je suis intéressé(e) par : Thérapie de Couple.', s6: 'Bonjour Jaqui, je suis intéressé(e) par : Se Retrouver Soi-même.' },
    de: { general: 'Hallo Jaqui, ich möchte eine Therapiesitzung vereinbaren.', s1: 'Hallo Jaqui, mich interessiert: Psychologische Therapie.', s2: 'Hallo Jaqui, mich interessiert: Persönlichkeitsentwicklung.', s3: 'Hallo Jaqui, mich interessiert: Personal Branding.', s4: 'Hallo Jaqui, mich interessiert: Familientherapie.', s5: 'Hallo Jaqui, mich interessiert: Paartherapie.', s6: 'Hallo Jaqui, mich interessiert: Sich selbst finden.' },
    pt: { general: 'Olá Jaqui, quero agendar uma sessão de terapia.', s1: 'Olá Jaqui, tenho interesse em: Terapias Psicológicas.', s2: 'Olá Jaqui, tenho interesse em: Desenvolvimento Pessoal.', s3: 'Olá Jaqui, tenho interesse em: Melhora da Marca Pessoal.', s4: 'Olá Jaqui, tenho interesse em: Terapia Familiar.', s5: 'Olá Jaqui, tenho interesse em: Terapia de Casal.', s6: 'Olá Jaqui, tenho interesse em: Encontrar-se a Si Mesmo.' },
    zh: { general: '您好 Jaqui，我想预约一次心理咨询。', s1: '您好 Jaqui，我对以下服务感兴趣：心理治疗。', s2: '您好 Jaqui，我对以下服务感兴趣：个人成长。', s3: '您好 Jaqui，我对以下服务感兴趣：个人品牌提升。', s4: '您好 Jaqui，我对以下服务感兴趣：家庭治疗。', s5: '您好 Jaqui，我对以下服务感兴趣：伴侣治疗。', s6: '您好 Jaqui，我对以下服务感兴趣：寻找自我。' }
  };

  var I18N = {
    en: {
      "brand.sub": "Therapist · Psychology",
      "nav.about": "About me", "nav.services": "Services", "nav.gallery": "Gallery", "nav.contact": "Contact",
      "hero.kicker": "Psychology & Personal Development",
      "hero.title": "Your path to emotional well-being and personal growth",
      "hero.sub": "Professional support in individual, couples and family therapy, and in developing your best self.",
      "hero.note": "In a safe and confidential space, I work with you to heal, grow and build healthier, more authentic relationships.",
      "hero.cta1": "Book a session", "hero.cta2": "See services", "hero.caption": "Jaqui Salinas · Therapist",
      "strip.1": "Individual therapy", "strip.2": "Couples therapy", "strip.3": "Family therapy", "strip.4": "Personal development", "strip.5": "Personal brand",
      "about.kicker": "About me", "about.title": "Hi, I am Jaqui Salinas",
      "about.p1": "Psychologist and therapist devoted to accompanying people and couples in their process of self-knowledge, emotional healing and building deeper, healthier bonds.",
      "about.p2": "My approach combines tools from clinical psychology, personal development and systemic therapy to help you find yourself and, from there, improve your relationships and your life project.",
      "about.cta": "Message me on WhatsApp",
      "srv.kicker": "Services", "srv.title": "Support spaces designed for every need", "srv.book": "Book →",
      "srv.1h": "Psychological Therapy", "srv.1p": "Individual therapeutic processes aimed at understanding your emotions, patterns and current challenges. A safe space to heal and grow.",
      "srv.2h": "Personal Development", "srv.2p": "Practical tools and support to strengthen your self-knowledge, self-esteem, resilience and ability to live with greater fullness and meaning.",
      "srv.3h": "Personal Brand Improvement", "srv.3p": "We work on your authenticity, presence and personal narrative so you project coherently who you are, in your life and in your professional environment.",
      "srv.4h": "Family Therapy", "srv.4p": "A space to improve communication, resolve conflicts and strengthen family bonds from a systemic, respectful perspective.",
      "srv.5h": "Couples Therapy", "srv.5p": "Support to reconnect, improve communication, heal wounds and build a more conscious, secure and loving relationship.",
      "srv.6h": "Finding Oneself", "srv.6p": "Processes of introspection and deep self-knowledge to reconnect with your essence, values and life purpose.",
      "quote.text": "From psychology to personal development and personal brand improvement, every process adapts to you.", "nav.resources": "资源", "quo.kicker": "激励 · 治疗 · 成长", "quo.title": "伟大心理学家的名言", "q.1": "当我们无法再改变一种处境时，我们面临的挑战是改变自己。", "q.2": "除非你让无意识成为有意识，否则它将主导你的人生，而你会称之为命运。", "q.3": "奇妙的悖论是：当我接受自己本来的样子时，我就能改变。", "q.4": "我这一代人最伟大的发现是：人可以通过改变心态来改变生活。", "q.5": "一个人能够成为什么，他就必须成为什么。", "q.6": "人生中最好的岁月，是你决定自己的问题由自己负责的那些年。", "res.kicker": "资源", "res.title": "可以帮助您的页面与热线", "res.sub": "专业且免费的帮助，随时为您提供。寻求帮助是力量的表现。", "res.crisis.h": "正处于危机中？立即寻求帮助", "res.crisis.p": "如果您或您身边的人正处于危险之中或有自伤念头，请不要等待。这些热线免费、保密，全天 24 小时服务。", "res.mx": "墨西哥 · Línea de la Vida", "res.us": "美国 · 988 生命线", "res.us.n": "拨打或短信 988", "res.em": "紧急情况", "res.1h": "Línea de la Vida · gob.mx", "res.1p": "墨西哥卫生部项目：危机心理指导与支持，24/7。", "res.2p": "24 小时免费电话心理支持：(55) 5259-8121。", "res.3p": "美国全国危机热线。可拨打、短信或在线聊天；也提供西班牙语服务。", "res.4p": "美国短信支持：发送 AYUDA 至 741741。", "res.5p": "国际情感支持与自杀预防热线目录。", "res.6h": "世卫组织 · 自杀：事实与数据", "res.6p": "世界卫生组织关于自杀预防的可靠信息。", "nav.resources": "Recursos", "quo.kicker": "Motivação · Terapia · Superação", "quo.title": "Frases de grandes psicólogos", "q.1": "Quando não somos mais capazes de mudar uma situação, somos desafiados a mudar a nós mesmos.", "q.2": "Até que você torne o inconsciente consciente, ele dirigirá sua vida e você o chamará de destino.", "q.3": "O curioso paradoxo é que quando me aceito como sou, então posso mudar.", "q.4": "A maior descoberta da minha geração é que um ser humano pode alterar sua vida alterando suas atitudes mentais.", "q.5": "O que um homem pode ser, ele deve ser.", "q.6": "Os melhores anos da sua vida são aqueles em que você decide que seus problemas são seus.", "res.kicker": "Recursos", "res.title": "Páginas e linhas que podem ajudar você", "res.sub": "Ajuda profissional e gratuita, disponível quando você precisar. Pedir ajuda é um ato de força.", "res.crisis.h": "Em crise? Peça ajuda agora", "res.crisis.p": "Se você ou alguém próximo está em perigo ou pensando em se machucar, não espere. Estas linhas são gratuitas, confidenciais e atendem 24 horas.", "res.mx": "México · Línea de la Vida", "res.us": "EUA · 988 Lifeline", "res.us.n": "Ligue ou envie texto para 988", "res.em": "Emergências", "res.1h": "Línea de la Vida · gob.mx", "res.1p": "Programa da Secretaria de Saúde do México: orientação e apoio psicológico em crise, 24/7.", "res.2p": "Apoio psicológico gratuito por telefone, 24 horas: (55) 5259-8121.", "res.3p": "Linha nacional de crise dos EUA. Ligue, envie texto ou converse por chat; também em espanhol.", "res.4p": "Apoio por mensagem de texto nos EUA: escreva AYUDA para 741741.", "res.5p": "Diretório internacional de linhas de ajuda emocional e prevenção do suicídio.", "res.6h": "OMS · Suicídio: dados e números", "res.6p": "Informação confiável da Organização Mundial da Saúde sobre prevenção do suicídio.", "nav.resources": "Ressourcen", "quo.kicker": "Motivation · Therapie · Wachstum", "quo.title": "Zitate großer Psychologen", "q.1": "Wenn wir eine Situation nicht mehr ändern können, sind wir herausgefordert, uns selbst zu ändern.", "q.2": "Bis du das Unbewusste bewusst machst, wird es dein Leben lenken und du wirst es Schicksal nennen.", "q.3": "Das merkwürdige Paradox ist, dass ich mich verändern kann, wenn ich mich so akzeptiere, wie ich bin.", "q.4": "Die größte Entdeckung meiner Generation ist, dass ein Mensch sein Leben ändern kann, indem er seine Geisteshaltung ändert.", "q.5": "Was ein Mensch sein kann, muss er sein.", "q.6": "Die besten Jahre deines Lebens sind die, in denen du entscheidest, dass deine Probleme deine eigenen sind.", "res.kicker": "Ressourcen", "res.title": "Seiten und Hotlines, die helfen können", "res.sub": "Professionelle, kostenlose Hilfe — verfügbar, wann immer Sie sie brauchen. Um Hilfe zu bitten ist ein Akt der Stärke.", "res.crisis.h": "In einer Krise? Holen Sie sich jetzt Hilfe", "res.crisis.p": "Wenn Sie oder jemand in Ihrer Nähe in Gefahr ist oder daran denkt, sich etwas anzutun, warten Sie nicht. Diese Leitungen sind kostenlos, vertraulich und rund um die Uhr erreichbar.", "res.mx": "Mexiko · Línea de la Vida", "res.us": "USA · 988 Lifeline", "res.us.n": "Rufen Sie 988 an oder schreiben Sie", "res.em": "Notruf", "res.1h": "Línea de la Vida · gob.mx", "res.1p": "Programm des mexikanischen Gesundheitsministeriums: Orientierung und psychologische Unterstützung in Krisen, 24/7.", "res.2p": "Kostenlose psychologische Unterstützung per Telefon, 24 Stunden: (55) 5259-8121.", "res.3p": "Nationale Krisenhotline der USA. Anrufen, schreiben oder chatten; auch auf Spanisch.", "res.4p": "Unterstützung per SMS in den USA: AYUDA an 741741 schreiben.", "res.5p": "Internationales Verzeichnis von Hotlines für emotionale Hilfe und Suizidprävention.", "res.6h": "WHO · Suizid: Fakten", "res.6p": "Zuverlässige Informationen der Weltgesundheitsorganisation zur Suizidprävention.", "nav.resources": "Ressources", "quo.kicker": "Motivation · Thérapie · Dépassement", "quo.title": "Citations de grands psychologues", "q.1": "Quand nous ne sommes plus capables de changer une situation, nous sommes mis au défi de nous changer nous-mêmes.", "q.2": "Tant que vous ne rendrez pas l'inconscient conscient, il dirigera votre vie et vous appellerez cela le destin.", "q.3": "Le paradoxe curieux, c'est que lorsque je m'accepte tel que je suis, alors je peux changer.", "q.4": "La plus grande découverte de ma génération est qu'un être humain peut changer sa vie en changeant ses attitudes d'esprit.", "q.5": "Ce qu'un homme peut être, il doit l'être.", "q.6": "Les meilleures années de votre vie sont celles où vous décidez que vos problèmes sont les vôtres.", "res.kicker": "Ressources", "res.title": "Pages et lignes qui peuvent vous aider", "res.sub": "Une aide professionnelle et gratuite, disponible quand vous en avez besoin. Demander de l'aide est un acte de force.", "res.crisis.h": "En crise ? Demandez de l'aide maintenant", "res.crisis.p": "Si vous ou un proche êtes en danger ou pensez à vous faire du mal, n'attendez pas. Ces lignes sont gratuites, confidentielles et disponibles 24 h/24.", "res.mx": "Mexique · Línea de la Vida", "res.us": "É.-U. · 988 Lifeline", "res.us.n": "Appelez ou textez le 988", "res.em": "Urgences", "res.1h": "Línea de la Vida · gob.mx", "res.1p": "Programme du ministère de la Santé du Mexique : orientation et soutien psychologique en crise, 24 h/24 et 7 j/7.", "res.2p": "Soutien psychologique gratuit par téléphone, 24 h/24 : (55) 5259-8121.", "res.3p": "Ligne nationale de crise des États-Unis. Appelez, textez ou chattez ; attention aussi en espagnol.", "res.4p": "Soutien par message texte aux É.-U. : écrivez AYUDA au 741741.", "res.5p": "Répertoire international de lignes d'aide émotionnelle et de prévention du suicide.", "res.6h": "OMS · Suicide : faits et chiffres", "res.6p": "Informations fiables de l'Organisation mondiale de la Santé sur la prévention du suicide.", "nav.resources": "Resources", "quo.kicker": "Motivation · Therapy · Self-improvement", "quo.title": "Quotes from great psychologists", "q.1": "When we are no longer able to change a situation, we are challenged to change ourselves.", "q.2": "Until you make the unconscious conscious, it will direct your life and you will call it fate.", "q.3": "The curious paradox is that when I accept myself just as I am, then I can change.", "q.4": "The greatest discovery of my generation is that a human being can alter his life by altering his attitudes of mind.", "q.5": "What a man can be, he must be.", "q.6": "The best years of your life are the ones in which you decide your problems are your own.", "res.kicker": "Resources", "res.title": "Pages and hotlines that can help you", "res.sub": "Professional, free help, available whenever you need it. Asking for help is an act of strength.", "res.crisis.h": "In crisis? Get help now", "res.crisis.p": "If you or someone close to you is in danger or thinking of self-harm, do not wait. These lines are free, confidential and available 24 hours a day.", "res.mx": "Mexico · Línea de la Vida", "res.us": "USA · 988 Lifeline", "res.us.n": "Call or text 988", "res.em": "Emergencies", "res.1h": "Línea de la Vida · gob.mx", "res.1p": "Mexico's Ministry of Health program: guidance and psychological support in crisis, 24/7.", "res.2p": "Free psychological support by phone, 24 hours a day: (55) 5259-8121.", "res.3p": "U.S. national crisis line. Call, text or chat; support also available in Spanish.", "res.4p": "Text-based support in the U.S.: text AYUDA to 741741.", "res.5p": "International directory of emotional support and suicide prevention hotlines.", "res.6h": "WHO · Suicide: key facts", "res.6p": "Reliable information from the World Health Organization on suicide prevention.",
      "gal.kicker": "Gallery", "gal.title": "Get to know me",
      "ct.kicker": "Contact", "ct.title": "Book your session",
      "ct.sub": "Write to me and we will schedule your first session. Everything you share is confidential.",
      "foot.line": "Therapist — Psychology & Personal Development", "foot.credit": "Website created by"
    },
    fr: {
      "brand.sub": "Thérapeute · Psychologie",
      "nav.about": "À propos", "nav.services": "Services", "nav.gallery": "Galerie", "nav.contact": "Contact",
      "hero.kicker": "Psychologie & Développement Personnel",
      "hero.title": "Votre chemin vers le bien-être émotionnel et l'épanouissement personnel",
      "hero.sub": "Accompagnement professionnel en thérapies individuelles, de couple, familiales et développement de votre meilleure version.",
      "hero.note": "Dans un espace sûr et confidentiel, je travaille avec vous pour guérir, grandir et construire des relations plus saines et authentiques.",
      "hero.cta1": "Réserver une séance", "hero.cta2": "Voir les services", "hero.caption": "Jaqui Salinas · Thérapeute",
      "strip.1": "Thérapie individuelle", "strip.2": "Thérapie de couple", "strip.3": "Thérapie familiale", "strip.4": "Développement personnel", "strip.5": "Marque personnelle",
      "about.kicker": "À propos", "about.title": "Bonjour, je suis Jaqui Salinas",
      "about.p1": "Psychologue et thérapeute dédiée à accompagner les personnes et les couples dans leur processus de connaissance de soi, de guérison émotionnelle et de construction de liens plus profonds et sains.",
      "about.p2": "Mon approche combine des outils de la psychologie clinique, du développement personnel et de la thérapie systémique pour vous aider à vous retrouver et, à partir de là, améliorer vos relations et votre projet de vie.",
      "about.cta": "Écrivez-moi sur WhatsApp",
      "srv.kicker": "Services", "srv.title": "Des espaces d'accompagnement pensés pour chaque besoin", "srv.book": "Réserver →",
      "srv.1h": "Thérapies Psychologiques", "srv.1p": "Processus thérapeutiques individuels orientés vers la compréhension de vos émotions, schémas et défis actuels. Un espace sûr pour guérir et grandir.",
      "srv.2h": "Développement Personnel", "srv.2p": "Outils pratiques et accompagnement pour renforcer votre connaissance de soi, votre estime, votre résilience et votre capacité à vivre avec plus de plénitude et de sens.",
      "srv.3h": "Amélioration de la Marque Personnelle", "srv.3p": "Nous travaillons votre authenticité, votre présence et votre récit personnel pour que vous projetiez avec cohérence qui vous êtes, dans votre vie et votre environnement professionnel.",
      "srv.4h": "Thérapie Familiale", "srv.4p": "Un espace pour améliorer la communication, résoudre les conflits et renforcer les liens familiaux depuis un regard systémique et respectueux.",
      "srv.5h": "Thérapie de Couple", "srv.5p": "Accompagnement pour se reconnecter, améliorer la communication, guérir les blessures et construire une relation plus consciente, sûre et aimante.",
      "srv.6h": "Se Retrouver Soi-même", "srv.6p": "Processus d'introspection et de connaissance de soi profonde pour vous reconnecter à votre essence, vos valeurs et votre but de vie.",
      "quote.text": "De la psychologie au développement personnel et à l'amélioration de la marque personnelle, chaque processus s'adapte à vous.",
      "gal.kicker": "Galerie", "gal.title": "Faites ma connaissance",
      "ct.kicker": "Contact", "ct.title": "Réservez votre séance",
      "ct.sub": "Écrivez-moi et nous coordonnerons votre première séance. Tout ce que vous partagez est confidentiel.",
      "foot.line": "Thérapeute — Psychologie & Développement Personnel", "foot.credit": "Site créé par"
    },
    de: {
      "brand.sub": "Therapeutin · Psychologie",
      "nav.about": "Über mich", "nav.services": "Leistungen", "nav.gallery": "Galerie", "nav.contact": "Kontakt",
      "hero.kicker": "Psychologie & Persönlichkeitsentwicklung",
      "hero.title": "Ihr Weg zu emotionalem Wohlbefinden und persönlichem Wachstum",
      "hero.sub": "Professionelle Begleitung in Einzel-, Paar- und Familientherapie und in der Entwicklung Ihrer besten Version.",
      "hero.note": "In einem sicheren und vertraulichen Raum arbeite ich mit Ihnen, um zu heilen, zu wachsen und gesündere, authentischere Beziehungen aufzubauen.",
      "hero.cta1": "Sitzung vereinbaren", "hero.cta2": "Leistungen ansehen", "hero.caption": "Jaqui Salinas · Therapeutin",
      "strip.1": "Einzeltherapie", "strip.2": "Paartherapie", "strip.3": "Familientherapie", "strip.4": "Persönlichkeitsentwicklung", "strip.5": "Personal Branding",
      "about.kicker": "Über mich", "about.title": "Hallo, ich bin Jaqui Salinas",
      "about.p1": "Psychologin und Therapeutin, die Menschen und Paare in ihrem Prozess der Selbsterkenntnis, emotionalen Heilung und beim Aufbau tieferer, gesünderer Bindungen begleitet.",
      "about.p2": "Mein Ansatz verbindet Werkzeuge der klinischen Psychologie, der Persönlichkeitsentwicklung und der systemischen Therapie, um Ihnen zu helfen, sich selbst zu finden und von dort aus Ihre Beziehungen und Ihr Lebensprojekt zu verbessern.",
      "about.cta": "Per WhatsApp schreiben",
      "srv.kicker": "Leistungen", "srv.title": "Begleitungsräume für jedes Bedürfnis", "srv.book": "Vereinbaren →",
      "srv.1h": "Psychologische Therapie", "srv.1p": "Individuelle therapeutische Prozesse zum Verständnis Ihrer Emotionen, Muster und aktuellen Herausforderungen. Ein sicherer Raum zum Heilen und Wachsen.",
      "srv.2h": "Persönlichkeitsentwicklung", "srv.2p": "Praktische Werkzeuge und Begleitung, um Ihre Selbsterkenntnis, Ihr Selbstwertgefühl, Ihre Resilienz und Ihre Fähigkeit zu mehr Fülle und Sinn zu stärken.",
      "srv.3h": "Personal Branding verbessern", "srv.3p": "Wir arbeiten an Ihrer Authentizität, Präsenz und persönlichen Erzählung, damit Sie stimmig zeigen, wer Sie sind — im Leben wie im Beruf.",
      "srv.4h": "Familientherapie", "srv.4p": "Ein Raum, um Kommunikation zu verbessern, Konflikte zu lösen und Familienbande aus systemischer, respektvoller Sicht zu stärken.",
      "srv.5h": "Paartherapie", "srv.5p": "Begleitung, um wieder zueinander zu finden, die Kommunikation zu verbessern, Wunden zu heilen und eine bewusstere, sicherere und liebevollere Beziehung aufzubauen.",
      "srv.6h": "Sich selbst finden", "srv.6p": "Prozesse der Introspektion und tiefen Selbsterkenntnis, um sich wieder mit Ihrem Wesen, Ihren Werten und Ihrem Lebenssinn zu verbinden.",
      "quote.text": "Von der Psychologie bis zur Persönlichkeitsentwicklung und zum Personal Branding — jeder Prozess passt sich Ihnen an.",
      "gal.kicker": "Galerie", "gal.title": "Lernen Sie mich kennen",
      "ct.kicker": "Kontakt", "ct.title": "Vereinbaren Sie Ihre Sitzung",
      "ct.sub": "Schreiben Sie mir und wir koordinieren Ihre erste Sitzung. Alles, was Sie teilen, ist vertraulich.",
      "foot.line": "Therapeutin — Psychologie & Persönlichkeitsentwicklung", "foot.credit": "Website erstellt von"
    },
    pt: {
      "brand.sub": "Terapeuta · Psicologia",
      "nav.about": "Sobre mim", "nav.services": "Serviços", "nav.gallery": "Galeria", "nav.contact": "Contato",
      "hero.kicker": "Psicologia & Desenvolvimento Pessoal",
      "hero.title": "Seu caminho para o bem-estar emocional e o crescimento pessoal",
      "hero.sub": "Acompanhamento profissional em terapias individuais, de casal, familiares e desenvolvimento da sua melhor versão.",
      "hero.note": "Em um espaço seguro e confidencial, trabalho com você para curar, crescer e construir relações mais saudáveis e autênticas.",
      "hero.cta1": "Agendar uma sessão", "hero.cta2": "Ver serviços", "hero.caption": "Jaqui Salinas · Terapeuta",
      "strip.1": "Terapia individual", "strip.2": "Terapia de casal", "strip.3": "Terapia familiar", "strip.4": "Desenvolvimento pessoal", "strip.5": "Marca pessoal",
      "about.kicker": "Sobre mim", "about.title": "Olá, sou Jaqui Salinas",
      "about.p1": "Psicóloga e terapeuta dedicada a acompanhar pessoas e casais em seu processo de autoconhecimento, cura emocional e construção de vínculos mais profundos e saudáveis.",
      "about.p2": "Minha abordagem combina ferramentas da psicologia clínica, do desenvolvimento pessoal e da terapia sistêmica para ajudar você a se encontrar e, a partir daí, melhorar suas relações e seu projeto de vida.",
      "about.cta": "Escreva pelo WhatsApp",
      "srv.kicker": "Serviços", "srv.title": "Espaços de acompanhamento desenhados para cada necessidade", "srv.book": "Agendar →",
      "srv.1h": "Terapias Psicológicas", "srv.1p": "Processos terapêuticos individuais orientados à compreensão das suas emoções, padrões e desafios atuais. Um espaço seguro para curar e crescer.",
      "srv.2h": "Desenvolvimento Pessoal", "srv.2p": "Ferramentas práticas e acompanhamento para potencializar seu autoconhecimento, autoestima, resiliência e capacidade de viver com maior plenitude e sentido.",
      "srv.3h": "Melhora da Marca Pessoal", "srv.3p": "Trabalhamos sua autenticidade, presença e narrativa pessoal para que você projete com coerência quem você é, na sua vida e no seu entorno profissional.",
      "srv.4h": "Terapia Familiar", "srv.4p": "Espaço para melhorar a comunicação, resolver conflitos e fortalecer os vínculos familiares a partir de um olhar sistêmico e respeitoso.",
      "srv.5h": "Terapia de Casal", "srv.5p": "Acompanhamento para reconectar, melhorar a comunicação, curar feridas e construir uma relação mais consciente, segura e amorosa.",
      "srv.6h": "Encontrar-se a Si Mesmo", "srv.6p": "Processos de introspecção e autoconhecimento profundo para reconectar com sua essência, valores e propósito de vida.",
      "quote.text": "Da psicologia ao desenvolvimento pessoal e à melhora da marca pessoal, cada processo se adapta a você.",
      "gal.kicker": "Galeria", "gal.title": "Conheça-me",
      "ct.kicker": "Contato", "ct.title": "Agende sua sessão",
      "ct.sub": "Escreva para mim e coordenamos sua primeira sessão. Tudo o que você compartilhar é confidencial.",
      "foot.line": "Terapeuta — Psicologia & Desenvolvimento Pessoal", "foot.credit": "Site criado por"
    },
    zh: {
      "brand.sub": "治疗师 · 心理学",
      "nav.about": "关于我", "nav.services": "服务", "nav.gallery": "画廊", "nav.contact": "联系",
      "hero.kicker": "心理学与个人成长",
      "hero.title": "通往情感健康与个人成长之路",
      "hero.sub": "为个人、伴侣和家庭治疗以及成就最好的自己提供专业陪伴。",
      "hero.note": "在一个安全保密的空间里，我与您一起疗愈、成长，建立更健康、更真诚的关系。",
      "hero.cta1": "预约咨询", "hero.cta2": "查看服务", "hero.caption": "Jaqui Salinas · 治疗师",
      "strip.1": "个人治疗", "strip.2": "伴侣治疗", "strip.3": "家庭治疗", "strip.4": "个人成长", "strip.5": "个人品牌",
      "about.kicker": "关于我", "about.title": "您好，我是 Jaqui Salinas",
      "about.p1": "心理学家与治疗师，致力于陪伴个人与伴侣进行自我认识、情感疗愈，并建立更深厚、更健康的关系。",
      "about.p2": "我的方法结合临床心理学、个人成长和系统治疗的工具，帮助您找到自己，并由此改善您的人际关系和人生规划。",
      "about.cta": "通过 WhatsApp 联系我",
      "srv.kicker": "服务", "srv.title": "为每种需求设计的陪伴空间", "srv.book": "预约 →",
      "srv.1h": "心理治疗", "srv.1p": "以理解您的情绪、模式和当前挑战为导向的个人治疗过程。一个安全疗愈与成长的空间。",
      "srv.2h": "个人成长", "srv.2p": "实用的工具与陪伴，提升您的自我认识、自尊、韧性，以及更充实、更有意义地生活的能力。",
      "srv.3h": "个人品牌提升", "srv.3p": "我们一起打造您的真实感、存在感和个人叙事，让您在生活和职业环境中一致地展现自己。",
      "srv.4h": "家庭治疗", "srv.4p": "从系统和尊重的视角改善沟通、解决冲突并加强家庭纽带的空间。",
      "srv.5h": "伴侣治疗", "srv.5p": "陪伴你们重新连接、改善沟通、疗愈伤痛，建立更有意识、更安全、更有爱的关系。",
      "srv.6h": "寻找自我", "srv.6p": "深入内省和自我认识的过程，重新连接您的本质、价值观和人生目标。",
      "quote.text": "从心理学到个人成长，再到个人品牌提升，每个过程都为您量身定制。",
      "gal.kicker": "画廊", "gal.title": "认识我",
      "ct.kicker": "联系", "ct.title": "预约您的咨询",
      "ct.sub": "给我写信，我们来协调您的第一次咨询。您分享的一切都严格保密。",
      "foot.line": "治疗师 — 心理学与个人成长", "foot.credit": "网站由"
    }
  };

  var curLang = 'es';
  try { curLang = localStorage.getItem('jaquit-lang') || 'es'; } catch (e) {}
  if (!I18N[curLang] && curLang !== 'es') curLang = 'es';

  function wa(key) {
    var t = (WA_TEXT[curLang] || WA_TEXT.es)[key] || WA_TEXT.es.general;
    return 'https://wa.me/' + CONFIG.whatsapp + '?text=' + encodeURIComponent(t);
  }
  function wireLinks() {
    document.querySelectorAll('[data-wa]').forEach(function (a) {
      a.href = wa(a.getAttribute('data-wa'));
      a.target = '_blank';
      a.rel = 'noopener';
    });
  }
  function applyLang(lang) {
    curLang = lang;
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang;
    if (lang !== 'es') {
      var dict = I18N[lang] || {};
      document.querySelectorAll('[data-i18n]').forEach(function (el) {
        var k = el.getAttribute('data-i18n');
        if (dict[k]) el.textContent = dict[k];
      });
    }
    document.querySelectorAll('.lang-switch button').forEach(function (b) {
      b.classList.toggle('active', b.getAttribute('data-lang') === lang);
    });
    try { localStorage.setItem('jaquit-lang', lang); } catch (e) {}
    wireLinks();
  }
  document.querySelectorAll('.lang-switch button').forEach(function (b) {
    b.addEventListener('click', function () {
      var lang = b.getAttribute('data-lang');
      if (lang === 'es') { location.reload(); return; }
      applyLang(lang);
    });
  });
  if (curLang !== 'es') applyLang(curLang); else wireLinks();

  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) { en.target.classList.add('visible'); io.unobserve(en.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
})();
