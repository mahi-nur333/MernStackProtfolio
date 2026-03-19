import express from "express";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (_req, res) => {
	res.send("Hello Pamel its running");
});

// Projects route
app.get("/api/projects", (_req, res) => {
    res.json([
        {
            name: "Credit Card Fraud Detection",
            tech: "Python, Pandas, Scikit-learn, ML", 
            description: "A machine learning project that detects fraudulent credit card transactions using a dataset of credit card transactions. The project involves data preprocessing, feature engineering, and model training using various machine learning algorithms."   
        },
        {
            name: "House Price Prediction",
            tech: "Python, Pandas, Scikit-learn, ML",
            description: "A machine learning project that predicts house prices based on various features such as location, size, and number of bedrooms. The project involves data preprocessing, feature engineering, and model training using regression algorithms."
        }
])
});

// Contact route
app.post("/api/contact", (_req, res) => {
    res.json({message: "Contact route working"});
});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});


