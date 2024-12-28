const users = require('../db'); // Modèle de votre base de données

// Contrôleur pour récupérer tous les articles
exports.getAllMenuItems = async (req, res) => {
    try {
        // Exécution d'une requête SQL pour récupérer tous les articles de la table 'menu'
        users.query('SELECT * FROM menu', (err, results) => {
            if (err) {
                // Si une erreur survient lors de la récupération des articles, on log l'erreur
                console.error('Erreur lors de la récupération des articles du menu:', err);
                // On envoie une réponse avec une erreur serveur (500)
                return res.status(500).json({ message: 'Erreur serveur' });
            }

            // Transformation des résultats en tableau de tableaux (chaque sous-tableau contient les valeurs des colonnes)
            const tableFormat = results.map(row => Object.values(row));
            console.log(tableFormat);
            // Si la requête réussit, on renvoie les résultats sous forme de JSON
            res.status(200).json(tableFormat); // 'results' contient les articles du menu
        });
    } catch (error) {
        // Gestion des erreurs inattendues
        console.error('Erreur lors de l\'exécution du contrôleur:', error);
        res.status(500).json({ message: 'Erreur serveur' });
    }
};
