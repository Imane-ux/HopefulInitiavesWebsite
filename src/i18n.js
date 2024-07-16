import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n
.use(initReactI18next).init({
    debug:true,
    lng:'fr',
    resources:{
        en:{
            translation:{
                greeting:"hello",
                welcome: "Find Your Next Meaningful Event with Hopeful Initiatives!",
                explore: "Explore events now!",
                about: "About",
                contact: "Contact Us",
                events:"Events",
                volunteer:"Volunteer",
                getStarted:"Get Started",
                rights:"All Rights Reserved.",
                aboutSection: {
                    title: "About Hopeful Initiatives",
                    subTitle:"Faith in The Power of a Strong Community",
                    content: "At \"Hopeful Initiatives,\" we believe in the power of community and compassion. Our mission is to bring people together through meaningful events that not only enrich lives but also make a positive impact. Since 2023, we have been dedicated to organizing events that support local charities and foster community spirit. Join us in making a difference today.",
                    mission:"Our Mission:",
                    missionText:"To foster a sense of belonging and togetherness through impactful events that promote community engagement and support charitable causes.",
                    vision:"Our Vision",
                    visionText: "A future where every individual feels empowered to contribute to a thriving community, creating lasting positive change through unity and compassion.",
                    getInvolved:"Get Involved:",
                    getInvolvedText:"Join us in spreading hope and making a difference in our community. Whether you volunteer your time, donate to our causes, or participate in our events, your support helps us strengthen the bonds that unite us all.",

                },
                categorySection:{
                    title:"Our Local Events Categories",
                    category1:"Weekly Events",
                    category1Text:"These are events that happen on a weekly basis. You get to build stonger friendships and connections!",
                    category2:"Monthly Events",
                    category2Text:"These are events that happen on a Monthly basis. Largely preferred by working individuals looking for community engagement!",
                    category3:"Annual Events",
                    category3Text:"These are events that occur once a year. They're usualy bigger events that have activities for all kinds of age groups!",
                
                },
                volunteerSection:{
                    title:"Become a Volunteer",
                    host:"Host your Event",
                    hostText:"Steps to host a non-profit event under \"Hopeful Initiatives\".",
                    general:"General Support Volunteers",
                    generalText:"Versatile volunteers supporting events for successful outcomes.",

                },
                connectSection: {
                    title: "Connect with Us",
                    subTitle:"Connecting Attendees with Event Organizers",
                    content1: "Join our group chats to stay updated on the latest information, announcements, and ask any questions you may have!",
                    content2: "Stay informed and engaged with fellow attendees, volunteers, and organizers!",


                },
                helpSection:{
                    title1: "Need help?",
                    title:"FAQ - Frequently Asked Questions",                   

                },

            },
        },
        fr:{
            translation:{
                greeting:"salut",
                welcome: "Trouvez votre prochain événement significatif avec notre organization 'Hopeful Initiatives'!",
                explore: "Commencez à explorer!",
                about: "À propos",
                contact: "Contactez-Nous",
                events:"Evénements",
                volunteer:"Bénevolats",
                getStarted:"Commencer",
                rights:"Tous droits réservés",
                aboutSection: {
                    title: "À propos de 'Hopeful Initiatives'",
                    subTitle:"Espoir en le pouvoir d'une forte communauté",
                    content: "À \"Hopeful Initiatives,\", on croît au pouvoir d'une forte communauté et de la compassion. Notre mission est de rassembler les gens à travers des événements significatifs qui sont à la fois amusants et ont un grand impact positive. Depuis 2023, nous nous sommes dédiés à organiser des événements qui supportent les bienfaisances locaux et favorisent l'esprit communautaire. Rejoignez-nous aujourd'hui pour faire une différence.",
                    mission: "Notre Mission:",
                    missionText:"Pour favoriser un sentiment d'appartenance et de rassemblement à travers des événements marquants qui encouragent l'engagement communautaire et soutiennent des causes caritatives.",
                    vision:"Notre Vision",
                    visionText: "Un avenir où chaque individu se sent habilité à contribuer à une communauté prospère, créant un changement positif durable à travers l'unité et la compassion.",
                    getInvolved:"Engagez-vous:",
                    getInvolvedText:"Rejoignez-nous pour répandre l'espoir et faire une différence dans notre communauté. Que vous donniez de votre temps en tant que bénévole, que vous fassiez un don à nos causes, ou que vous participiez à nos événements, votre soutien nous aide à renforcer les liens qui nous unissent tous.",

                  },
                categorySection:{
                    title:"Nos Catégories d'Événements Locaux",
                    category1:"Événements hebdomadaires",
                    category1Text:"Ce sont des événements qui ont lieu chaque semaine. Vous avez l'opportunité de construire des amitiés et des connexions plus solides!",
                    category2:"Événements Mensuels",
                    category2Text:"Ce sont des événements qui ont lieu chaque mois. Ils sont largement préférés par les individus actifs à la recherche d'engagement communautaire!",
                    category3:"Événements Annuels",
                    category3Text:"Ce sont des événements qui se produisent une fois par an. Ce sont généralement des événements plus importants avec des activités pour tous les âges!",
                },
                volunteerSection:{
                    title:"Devenez Volontaire",
                    host:"Organisez votre Èvénement",
                    hostText:"Étapes pour organiser un événement à but non lucratif sous 'Hopeful Initiatives'.",
                    general:"Volontaires de soutien général",
                    generalText:"Volontaires polyvalents soutenant les événements pour des résultats réussis.",

                },
                connectSection: {
                    title: "Connectez-Vous avec Nous",
                    subTitle:"Relier les participants aux organisateurs d'événements",
                    content1: "Rejoignez nos chats de groupe pour rester informé des dernières informations, annonces, et poser toutes vos questions!",
                    content2: "Restez informé et impliqué avec les autres participants, volontaires et organisateurs!",

                },
                helpSection:{
                    title1: "Besoin d'aide?",
                    title:"FAQ - Foire aux questions",                   

                },
            },
        }
    }
})