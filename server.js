import express from 'express';
import pageRoutes from './routes/pageRoutes.js';

const app = express();
const PORT = 5000;

app.use(express.json());

app.use('/api', pageRoutes);

app.use((req, res) => {
    res.status(404).json({ error: "Route not found" });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});