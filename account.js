// Route to fetch user data by username
app.get('/api/user', async (req, res) => {
    const { username } = req.query;

    try {
        const user = await Users.findOne({ Username: username }).exec();

        if (user) {
            res.json(user);
        } else {
            res.status(404).send({ message: "User not found" });
        }
    } catch (error) {
        console.error('Error fetching user data:', error);
        res.status(500).send({ message: "Error fetching user data" });
    }
});
