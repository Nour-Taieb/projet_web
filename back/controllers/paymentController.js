exports.processPayment = async (req, res) => {
    const { items, total, cardNumber, secretCode } = req.body;

    // Vérifications basiques
    if (!items || !total || !cardNumber || !secretCode) {
        return res.status(400).send('Invalid payment details');
    }

    // Simule un succès de paiement
    res.status(200).json({ message: 'Payment successful', total });
};
