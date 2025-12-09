const questions = [
    // Chapitre 1 - Introduction & Turtle
    {
        id: 1,
        question: "Un programmeur est...",
        options: [
            "Celui qui utilise l'application",
            "Celui qui installe l'application",
            "Celui qui écrit les instructions de l'application",
            "Celui qui achète un ordinateur"
        ],
        correct: 2
    },
    {
        id: 2,
        question: "Python est un langage...",
        options: ["De haut niveau", "De bas niveau", "Réservé aux experts", "Obsolète"],
        correct: 0
    },
    {
        id: 3,
        question: 'L\'instruction print("Bonjour") sert à...',
        options: [
            "Afficher un texte",
            "Ajouter deux nombres",
            "Définir une variable",
            "Lire une entrée clavier"
        ],
        correct: 0
    },
    {
        id: 4,
        question: "Quel mot correspond à un fichier Python ?",
        options: ["Script", "Page", "Scène", "Bloc"],
        correct: 0
    },
    {
        id: 5,
        question: "Un commentaire sur une ligne commence par...",
        options: ["#", "//", "--", "**"],
        correct: 0
    },
    {
        id: 6,
        question: "L'instruction from turtle import * sert à...",
        options: [
            "Importer le module Turtle",
            "Importer les images",
            "Créer une boucle",
            "Lancer une animation"
        ],
        correct: 0
    },
    {
        id: 7,
        question: "Dans Turtle, forward(100) signifie...",
        options: [
            "Avancer de 100 pixels",
            "Tourner de 100°",
            "Reculer de 100 pixels",
            "Effacer 100 pixels"
        ],
        correct: 0
    },
    {
        id: 8,
        question: "Dans une boucle for i in range(4), range(4) génère...",
        options: [
            "4 répétitions",
            "3 répétitions",
            "5 répétitions",
            "Une infinité de répétitions"
        ],
        correct: 0
    },
    {
        id: 9,
        question: "L'instruction penup() signifie...",
        options: [
            "Lever le crayon (ne trace pas)",
            "Tourner la tortue",
            "Changer la couleur",
            "Effacer l'écran"
        ],
        correct: 0
    },
    {
        id: 10,
        question: "Pour tracer un carré avec Turtle, l'angle de rotation est...",
        options: ["90°", "45°", "80°", "30°"],
        correct: 0
    },
    // Chapitre 2 - Variables et Types
    {
        id: 11,
        question: "Une variable est...",
        options: [
            "Une zone mémoire nommée",
            "Un message affiché",
            "Un module importable",
            "Une ligne de commentaire"
        ],
        correct: 0
    },
    {
        id: 12,
        question: "Le nom d'une variable peut commencer par...",
        options: ["Une lettre", "Un chiffre", "Un symbole %", "Un espace"],
        correct: 0
    },
    {
        id: 13,
        question: 'Quel type correspond à "Ali" ?',
        options: ["Str", "Int", "Float", "bool"],
        correct: 0
    },
    {
        id: 14,
        question: "Quel type correspond à 3.14 ?",
        options: ["Int", "Float", "Str", "bool"],
        correct: 1
    },
    {
        id: 15,
        question: "Quel type correspond à False ?",
        options: ["Bool", "Float", "Str", "int"],
        correct: 0
    },
    {
        id: 16,
        question: "L'expression a = a + 3 signifie...",
        options: [
            "Ajouter 3 à a",
            "Comparer a et 3",
            "Remettre a à zéro",
            "Effacer la variable"
        ],
        correct: 0
    },
    {
        id: 17,
        question: "L'instruction équivalente de a = a + 7 est :",
        options: ["a += 7", "a == 7", "a =+ 7", "+= a 7"],
        correct: 0
    },
    {
        id: 18,
        question: "L'instruction type(x) sert à...",
        options: ["Afficher le type de x", "Convertir x", "Supprimer x", "Copier x"],
        correct: 0
    },
    {
        id: 19,
        question: "L'instruction input() retourne toujours...",
        options: ["un int", "un float", "un str", "un bool"],
        correct: 2
    },
    {
        id: 20,
        question: 'Convertir "12" en nombre entier :',
        options: ['int("12")', 'float("12")', 'str(12)', 'bool(12)'],
        correct: 0
    },
    // Chapitre 3 - Conditions
    {
        id: 21,
        question: "Le mot-clé d'une condition est...",
        options: ["If", "When", "Case", "cond"],
        correct: 0
    },
    {
        id: 22,
        question: "Le mot-clé utilisé quand la condition est fausse :",
        options: ["Else", "Elif", "not", "then"],
        correct: 0
    },
    {
        id: 23,
        question: 'Le comparateur "différent de" est :',
        options: ["!=", "< >", "==", "> <"],
        correct: 0
    },
    {
        id: 24,
        question: 'L\'opérateur logique "ET" est :',
        options: ["And", "Or", "&&", "both"],
        correct: 0
    },
    {
        id: 25,
        question: 'L\'opérateur logique "OU" est :',
        options: ["Or", "And", "||", "else"],
        correct: 0
    },
    {
        id: 26,
        question: "Dans une structure if / elif / else:",
        options: [
            "Un seul bloc est exécuté",
            "Tous les blocs sont exécutés",
            "Le else est toujours exécuté",
            "Le elif passe avant le if"
        ],
        correct: 0
    },
    {
        id: 27,
        question: 'Le code suivant imprime quoi ? if 3 < 2: print("A") else: print("B")',
        options: ["B", "A", "AB", "Erreur"],
        correct: 0
    },
    {
        id: 28,
        question: "L'opérateur modulo % donne...",
        options: [
            "Le reste de la division",
            "Le quotient",
            "La puissance",
            "La racine carrée"
        ],
        correct: 0
    },
    {
        id: 29,
        question: "11 % 3 vaut...",
        options: ["2", "3", "1", "0"],
        correct: 0
    },
    {
        id: 30,
        question: "La valeur None représente...",
        options: [
            "L'absence de valeur",
            "Le nombre zéro",
            "Une chaîne vide",
            "Un booléen faux"
        ],
        correct: 0
    },
    // Chapitre 4 - Fonctions
    {
        id: 31,
        question: "Une fonction commence par le mot-clé :",
        options: ["def", "Func", "create", "define"],
        correct: 0
    },
    {
        id: 32,
        question: "Une fonction peut...",
        options: [
            "Retourner une valeur",
            "Ne rien retourner",
            "Retourner plusieurs valeurs obligatoirement",
            "Se nommer comme une variable Python (if, else)"
        ],
        correct: 0
    },
    {
        id: 33,
        question: "Le mot-clé pour renvoyer un résultat :",
        options: ["Return", "Yield", "send", "output"],
        correct: 0
    },
    {
        id: 34,
        question: "Le nom des variables dans une fonction s'appelle...",
        options: ["Arguments", "Constantes", "Opérateurs", "Modules"],
        correct: 0
    },
    // Chapitre 5 - Boucles
    {
        id: 35,
        question: "Une boucle qui ne s'arrête jamais est dite...",
        options: ["Infinie", "Finite", "Fermée", "Future"],
        correct: 0
    },
    {
        id: 36,
        question: "La boucle while s'exécute tant que...",
        options: [
            "La condition est vraie",
            "La condition est fausse",
            'L\'utilisateur tape "stop"',
            "Le programme recommence"
        ],
        correct: 0
    },
    {
        id: 37,
        question: "range(10) génère...",
        options: ["10 valeurs (0 à 9)", "1 valeur", "11 valeurs", "9 valeurs"],
        correct: 0
    },
    // Chapitre 6 - Listes
    {
        id: 38,
        question: "Une liste en Python se note avec...",
        options: ['Crochets [ ]', 'Parenthèses ( )', 'Accolades { }', 'Guillemets " "'],
        correct: 0
    },
    {
        id: 39,
        question: "Pour accéder au premier élément d'une liste L :",
        options: ["L[0]", "L(0)", "L[1]", "L.first"],
        correct: 0
    },
    {
        id: 40,
        question: "Les listes sont...",
        options: [
            "Mutables",
            "Immutables",
            "Réservées à Turtle",
            "Utilisables uniquement en mathématiques"
        ],
        correct: 0
    }
];