import express from "express";
import cors from "cors";
import morgan from "morgan";
import authRoutes from './routes'

let app = express()
const PORT = process.env.PORT || 5000 

// Middlewares
app.use(cors());    // Enable CORS
app.use(express.json());  // Parse JSON bodies
app.use(express.urlencoded({ extended: true }));  // Parse URL-encoded bodies
app.use(morgan('combined', { stream: { write: message => logger.info(message.trim()) }}));

// --- Routes ---

app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/documents', documentRoutes)
app.use('/api/v1/flashcards', flashcardRoutes)
app.use('/api/v1/quizzes', quizRoutes)


// --- Error Handlers --- 
// --- 404 handler
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: 'Route not found'
    });
});

//--- Global Error Handler --- 
app.use((err, req, res, next) => {
    logger.error(err.stack);

    res.status(err.statusCode || 500).json({
        success: false,
        message: err.message || 'Internal server error',
        ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    });
});


app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok', timestamp: new Date() });
});

app.get('/', (req, res) => {
    res.send('Hello world')
})


app.listen(PORT, (req, res) => {
    console.log(`listening on port ${PORT}`)
})